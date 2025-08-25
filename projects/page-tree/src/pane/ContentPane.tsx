import { useContext } from 'react';
import './ContentPane.css';
import { ReadPage } from '../page/ReadPage';
import { MovePageForm } from '../page/MovePageForm';
import { PageForm } from '../page/PageForm';
import { StartPage } from '../page/StartPage';
import { StoreContext } from '../store/Store';


export const ContentPane = () => {
    const {
        currentPageId,
        mode,
        newPageParentId,
        pages,
    } = useContext(StoreContext);
    
    let component;
    if (mode === 'Start') {
        component = <StartPage />;
    } else if (mode === 'AddPage') {
        component = <PageForm saveButtonLabel='Create Page' parentPageId={newPageParentId} />;
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