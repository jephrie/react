import { useContext } from 'react';
import { StoreContext } from '../store/Store';
import './Navigator.css';

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
            <ul key={`page-title-${pageId}`}>
                <li>{page.title}</li>
                {page.children && page.children.length > 0 && page.children.map((pageId: string) => generateTree(pageId))}
            </ul>
        );
    }
    
    return (
        <div className='navigator-pane'>
            {topLevelPages.map((pageId: string) => generateTree(pageId))}
        </div>
    );
};