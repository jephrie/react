import { useContext, useState } from 'react';
import { StoreContext } from '../store/Store';
import './Navigator.css';
import { AddPageButton } from '../page/AddPageButton';

export const Navigator = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
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
                <li>
                    <div className='nav-link' onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
                        <div className='nav-link-title'>
                            {page.title}
                        </div>
                        {isMouseOver && <AddPageButton label='+' appearance='small' parentPageId={page.id} />}
                    </div>
                </li>
                {page.children.map((childPageId: string) => generateTree(childPageId))}
            </ul>
        );
    };
    
    return (
        <div className='navigator-pane'>
            {topLevelPages.map((pageId: string) => generateTree(pageId))}
        </div>
    );
};