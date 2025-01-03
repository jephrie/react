import { createBrowserRouter } from 'react-router';
import App from './App';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: 'page0',
                // Component: page0,
                lazy: async () => ({ Component: (await import('./page0/page0')).page0}),
            }, {
                path: 'page0/page1',
                // Component: page1,
                lazy: async () => ({ Component: (await import('./page1/page1')).page1}),
            }
        ],
    },
    {
        path: '/page1',
        // Component: page1,
        lazy: async () => ({ Component: (await import('./page1/page1')).page1}),
    },
    {
        path: '/page2',
        // Component: page2,
        lazy: async () => ({ Component: (await import('./page2/page2')).page2}),
    }
]);