import { createContext, PropsWithChildren, useMemo, useReducer } from 'react';
import { Mode, Page } from '../common/Types';

type State = {
    currentPageId?: string;
    mode: Mode;
    pages: Pages;
};

type StateMutators = {
    addPage: (page: Page) => void;
    updateCurrentPageId: (pageId: string) => void;
    updateMode: (mode: Mode) => void;
};

type Pages = {
    [PageId: string]: Page;
};

type AddPageAction = {
    type: 'addPage';
    page: Page;
};

type UpdateCurrentPageAction = {
    type: 'updateCurrentPageId',
    pageId: string,
};

type UpdateModeAction = {
    type: 'updateMode';
    mode: Mode;
};

type Action = UpdateCurrentPageAction | UpdateModeAction | AddPageAction;

const initialState: State = {
    mode: 'Start' as Mode,
    pages: {} as Pages,
};

const initialStateMutators: StateMutators = {
    addPage: (page: Page) => {},
    updateCurrentPageId: (pageId: string) => {},
    updateMode: (mode: Mode) => {},
}

export const reducer = (state: State, action: Action) => {
    if (action.type === 'addPage') {
        return {
            ...state,
            pages: {
                ...state.pages,
                [action.page.id]: action.page,
            },
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
    } else {
        console.error(`Unknown action: ${(action as Action).type}. ${action}`);
        return state;
    }
};

const addPageAction = (page: Page) => ({
    type: 'addPage',
    page,
}) as AddPageAction;

const updateCurrentPageIdAction = (pageId: string) => ({
    type: 'updateCurrentPageId',
    pageId,
}) as UpdateCurrentPageAction;

const updateModeAction = (mode: Mode) => ({
    type: 'updateMode',
    mode,
}) as UpdateModeAction;

export const StoreContext = createContext<State & StateMutators>({ ...initialState, ...initialStateMutators });

export const StoreProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addPage = useMemo(() => (page: Page) => dispatch(addPageAction(page)), []);
    const updateMode = useMemo(() => (mode: Mode) => dispatch(updateModeAction(mode)), []);
    const updateCurrentPageId = useMemo(() => (pageId: string) => dispatch(updateCurrentPageIdAction(pageId)), []);

    const value = useMemo(() => ({
        ...state,
        addPage,
        updateCurrentPageId,
        updateMode,
    }), [state, addPage, updateCurrentPageId, updateMode]);

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};