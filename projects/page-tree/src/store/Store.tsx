import { createContext, PropsWithChildren, useMemo, useReducer } from 'react';
import { Mode, Page, Pages } from '../common/Types';

type State = {
    currentPageId?: string;
    mode: Mode;
    newPageParentId?: string;
    pages: Pages;
};

type StateMutators = {
    addPage: (page: Page) => void;
    movePage: (pageId: string, newParentPageId?: string) => void;
    updateCurrentPageId: (pageId: string) => void;
    updateMode: (mode: Mode) => void;
    updateNewPageParent: (parentPageId?: string) => void;
};

type AddPageAction = {
    type: 'addPage';
    page: Page;
};

type MovePageAction = {
    type: 'movePage',
    pageId: string,
    newParentPageId?: string,
};

type UpdateCurrentPageAction = {
    type: 'updateCurrentPageId',
    pageId: string,
};

type UpdateModeAction = {
    type: 'updateMode';
    mode: Mode;
};

type UpdateNewPageParentAction = {
    type: 'updateNewPageParent';
    newPageParentId?: string;
};

type Action = AddPageAction | MovePageAction | UpdateCurrentPageAction | UpdateModeAction | UpdateNewPageParentAction;

const initialState: State = {
    mode: 'Start' as Mode,
    pages: {} as Pages,
};

const initialStateMutators: StateMutators = {
    addPage: (page: Page) => {},
    movePage: (pageId: string, newParentPageId?: string) => {},
    updateCurrentPageId: (pageId: string) => {},
    updateMode: (mode: Mode) => {},
    updateNewPageParent: (parentPageId?: string) => {},
}

const removeChildPage = (page: Page, childPageId: string) => {
    page.children = page.children.filter((id: string) => id !== childPageId);
    return page;
};

const addChildPage = (page: Page, childPageId: string) => {
    if (page.children.findIndex((pageId: string) => pageId === childPageId) < 0) {
        page.children.push(childPageId);
    }
    return page;
}

export const reducer = (state: State, action: Action) => {
    if (action.type === 'addPage') {
        let parentPage;
        if (action.page.parent) {
            parentPage = addChildPage(state.pages[action.page.parent], action.page.id);
        }

        return {
            ...state,
            pages: {
                ...state.pages,
                [action.page.id]: action.page,
                ...(parentPage ? { [parentPage.id]: parentPage } : {})
            },
        };
    } else if (action.type === 'movePage') {
        let modifiedPages: Pages = {};
        const page = state.pages[action.pageId];
        let newParent;
        let oldParent;

        // remove page as child of old parent
        if (page.parent) {
            oldParent = removeChildPage(state.pages[page.parent], page.id);
            modifiedPages[oldParent.id] = oldParent;
        }

        // update page parent
        page.parent = action.newParentPageId;
        modifiedPages[page.id] = page;

        // add page as child of new parent
        if (action.newParentPageId) {
            newParent = addChildPage(state.pages[action.newParentPageId], page.id);
            modifiedPages[newParent.id] = newParent;
        }

        return {
            ...state,
            pages: {
                ...state.pages,
                ...modifiedPages,
            }
        };
    } else if (action.type === 'updateCurrentPageId') {
        return {
            ...state,
            currentPageId: action.pageId,
        }
    } else if (action.type === 'updateMode') {
        return {
            ...state,
            mode: action.mode,
        };
    } else if (action.type === 'updateNewPageParent') {
        return {
            ...state,
            newPageParentId: action.newPageParentId,
        };
    } else {
        console.error(`Unknown action: ${(action as Action).type}. ${action}`);
        return state;
    }
};

const addPageAction = (page: Page) => ({
    type: 'addPage',
    page,
}) as AddPageAction;

const movePageAction = (pageId: string, newParentPageId?: string) => ({
    type: 'movePage',
    pageId,
    newParentPageId,
}) as MovePageAction;

const updateCurrentPageIdAction = (pageId: string) => ({
    type: 'updateCurrentPageId',
    pageId,
}) as UpdateCurrentPageAction;

const updateModeAction = (mode: Mode) => ({
    type: 'updateMode',
    mode,
}) as UpdateModeAction;

const updateNewPageParentAction = (parentPageId?: string) => ({
    type: 'updateNewPageParent',
    newPageParentId: parentPageId,
}) as UpdateNewPageParentAction;

export const StoreContext = createContext<State & StateMutators>({ ...initialState, ...initialStateMutators });

export const StoreProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addPage = useMemo(() => (page: Page) => dispatch(addPageAction(page)), []);
    const movePage = useMemo(() => (pageId: string, newParentPageId?: string) => dispatch(movePageAction(pageId, newParentPageId)), []);
    const updateMode = useMemo(() => (mode: Mode) => dispatch(updateModeAction(mode)), []);
    const updateCurrentPageId = useMemo(() => (pageId: string) => dispatch(updateCurrentPageIdAction(pageId)), []);
    const updateNewPageParent = useMemo(() => (parentPageId?: string) => dispatch(updateNewPageParentAction(parentPageId)), []);

    const value = useMemo(() => ({
        ...state,
        addPage,
        movePage,
        updateCurrentPageId,
        updateMode,
        updateNewPageParent,
    }), [state, addPage, movePage, updateCurrentPageId, updateMode, updateNewPageParent]);

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};