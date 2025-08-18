import { v7 } from 'uuid';
import { createContext, PropsWithChildren, useMemo, useReducer } from 'react';
import { Mode } from '../common/Types';

type State = {
    pages: Pages,
    mode: Mode;
};

type Pages = {
    [PageId: string]: Page
} | {};

type Page = {
    parent: string,
    children: string[],
    title: string,
    content: string,
};

type UpdateModeAction = {
    type: 'updateMode',
    mode: Mode;
}

type AddPageAction = {
    type: 'addPage',
    page: Page,
};

type Action = UpdateModeAction | AddPageAction;

const initialState = {
    pages: {},
    mode: 'Start' as Mode,
    onUpdateMode: (mode: Mode) => {},
    onAddPage: (page: Page) => {},
};

export const reducer = (state: State, action: Action) => {
    if (action.type === 'addPage') {
        const id = v7();
        return {
            ...state,
            pages: {
                ...state.pages,
                [id]: action.page,
            },
        };
    } else if (action.type === 'updateMode') {
        return {
            ...state,
            mode: action.mode,
        };
    } else {
        console.debug(`Unknown action: ${(action as Action).type}. ${action}`);
        return state;
    }
};

const updateModeAction = (mode: Mode) => ({
    type: 'updateMode',
    mode,
}) as UpdateModeAction;

const addPageAction = (page: Page) => ({
    type: 'addPage',
    page,
}) as AddPageAction;

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onUpdateMode = useMemo(() => (mode: Mode) => dispatch(updateModeAction(mode)), []);
    const onAddPage = useMemo(() => (page: Page) => dispatch(addPageAction(page)), []);

    const value = useMemo(() => ({
        ...state,
        onUpdateMode,
        onAddPage,
    }), [state, onUpdateMode, onAddPage]);

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};