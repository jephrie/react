import { useContext } from 'react';
import { v7 } from 'uuid';
import './ContentPane.css';
import { ReadPage } from '../page/ReadPage';
import { MovePageForm } from '../page/MovePageForm';
import { PageForm } from '../page/PageForm';
import { StartPage } from '../page/StartPage';
import { StoreContext } from '../store/Store';


export const ContentPane = () => {
    const {
        addPage,
        currentPageId,
        mode,
        newPageParentId,
        pages,
        updateCurrentPageId,
        updateMode,
        updatePage,
    } = useContext(StoreContext);
    
    let component;
    if (mode === 'Start') {
        component = <StartPage />;
    } else if (mode === 'AddPage') {
        const onSubmit = (title: string, content: string) => {
            if (!title || !content) {
                return;
            }

            const id = v7();
            addPage({ id, title, content, parent: newPageParentId, children: [] });

            // no need to show the start page anymore, show content instead since it's more useful to the user.
            if (!currentPageId) {
                updateCurrentPageId(id);
            }
            updateMode('ReadPage');
        };
        component = <PageForm saveButtonLabel='Create Page' onSubmit={onSubmit}/>;
    } else if (mode === 'EditPage') {
        const onSubmit = (title: string, content: string) => {
            if (!title || !content) {
                return;
            }

            updatePage(title, content);
            updateMode('ReadPage');
        };
        component = 
            <PageForm
                saveButtonLabel='Save Changes'
                onSubmit={onSubmit}
                prefillTitle={pages[currentPageId!].title}
                prefillContent={pages[currentPageId!].content}
            />;
    } else if (mode === 'MovePage') {
        component = <MovePageForm />
    } else if (mode === 'ReadPage' && currentPageId) {
        component = <ReadPage title={pages[currentPageId].title} content={pages[currentPageId].content} />;
    }

    return (
        <div className='content-pane'>
            {component}
        </div>
    );
};