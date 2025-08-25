import { Pages } from "../common/Types";

const getChildren = (pageId: string, pages: Pages, result: Set<string>) => {
    if (pages[pageId].children.length === 0) {
        result.add(pageId);
        return;
    }

    // console.log(pageId, pages[pageId].children, pages);
    for (const childPageId of pages[pageId].children) {
        getChildren(childPageId, pages, result);
    }
    return;
};

export const getDecendents = (pageId: string, pages: Pages) => {
    const decendents = new Set<string>();
    getChildren(pageId, pages, decendents);

    return decendents;
};