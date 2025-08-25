import { useContext } from 'react';
import './Navigator.css';
import { PageLink } from './PageLink';
import { AddPageButton } from '../page/AddPageButton';
import { StoreContext } from '../store/Store';

export const Navigator = () => {
    const { pages } = useContext(StoreContext);
    const allPageIds = Object.keys(pages);

    if (allPageIds.length === 0) {
        return (
            <div className='navigator-pane'>
                <p>No pages</p>
            </div>
        )
    }

    const topLevelPages = allPageIds.filter((pageId: string) => !pages[pageId].parent);
    const generateTree = (pageId: string) => {
        const page = pages[pageId];

        return (
            <ul className='nav-tree' key={`page-title-${pageId}`}>
                <PageLink id={page.id} title={page.title} />
                {page.children.map((childPageId: string) => generateTree(childPageId))}
            </ul>
        );
    };
    
    return (
        <div className='navigator-pane'>
            <div>
                {topLevelPages.map((pageId: string) => generateTree(pageId))}
            </div>
            <AddPageButton label='Create new page' appearance='medium' />
        </div>
    );
};