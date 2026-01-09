import { ChangeEvent, useCallback, useContext, useState } from 'react';
import './Navigator.css';
import { PageLink } from './PageLink';
import { AddPageButton } from '../page/AddPageButton';
import { StoreContext } from '../store/Store';
import { Page } from '../common/Types';

export const Navigator = () => {
    const { pages } = useContext(StoreContext);
    const [ searchTerm, setSearchTerm ] = useState<string>();

    const onSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }, []);

    const allPageIds = Object.keys(pages);
    if (allPageIds.length === 0) {
        return (
            <div className='navigator-pane'>
                <p>No pages</p>
            </div>
        )
    }

    const getFilteredPages = () => {
        // Set to remove duplicates if a page is matched via title and via ancestry from a child match.
        const matchingPages = new Set<string>();
        const matchingLeafPages = allPageIds.filter((pageId: string) => pages[pageId].title.includes(searchTerm!));

        const traverseAndAddAncestors = (page: Page) => {
            if (page.parent) {
                traverseAndAddAncestors(pages[page.parent]);
                matchingPages.add(page.parent);
            }
        };
        matchingLeafPages.forEach((pageId: string) => {
            traverseAndAddAncestors(pages[pageId]);
            matchingPages.add(pageId);
        });

        return matchingPages;
    };
    // Set instead of array to improve performance. This set could be checked frequently when generating tree.
    const filteredPages = searchTerm ? getFilteredPages() : new Set(allPageIds);
    const topLevelPages = Array.from(filteredPages).filter((pageId: string) => !pages[pageId].parent);
    const generateTree = (pageId: string) => {
        const page = pages[pageId];

        if (!filteredPages.has(pageId)) {
            return;
        }

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
                <div><input className='search-bar' placeholder='Search' onChange={onSearchChange}/></div>
                {topLevelPages.map((pageId: string) => generateTree(pageId))}
            </div>
            <AddPageButton label='Create new page' appearance='medium' />
        </div>
    );
};