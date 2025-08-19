export type Mode = 'Start' | 'AddPage' | 'ReadPage';

export type Page = {
    id: string;
    parent?: string;
    children?: string[];
    title: string;
    content: string;
};