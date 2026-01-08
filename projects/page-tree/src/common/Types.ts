export type Mode = 'Start' | 'AddPage' | 'MovePage' | 'ReadPage' | 'EditPage';

export type Pages = {
    [PageId: string]: Page;
};

export type Page = {
    id: string;
    parent?: string;
    children: string[];
    title: string;
    content: string;
};