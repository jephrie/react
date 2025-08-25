import { BaseSyntheticEvent, useContext, useState } from 'react';
import './MovePageForm.css';
import { StoreContext } from '../store/Store';
import { getDecendents } from './PageUtil';

export const MovePageForm = () => {
    const [ newParentPageId, setNewParentPageId ] = useState();
    const { currentPageId, movePage, pages, updateMode } = useContext(StoreContext);
    
    const onSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        movePage(currentPageId!, newParentPageId);
        updateMode('ReadPage');
    };

    const onChange = (e: BaseSyntheticEvent) => {
        setNewParentPageId(e.target.value);
    };

    // No need to move to itself.
    // Can't move to one of it's children.
    const decendentPageIds = getDecendents(currentPageId!, pages);
    const validParentPages = Object.keys(pages).filter(
        (pageId: string) => pageId !== currentPageId && !decendentPageIds.has(pageId)
    );

    return (
        <form className='move-form' onSubmit={onSubmit}>
            <select className='move-select' onChange={onChange}>
                <option key='no-parent'>No parent (top level page)</option>
                {validParentPages.map((id: string) => <option key={id} value={id}>{pages[id].title}</option>)}
            </select>
            <button className='move-form-button' type='submit'>Move page</button>
        </form>
    )
};