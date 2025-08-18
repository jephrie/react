import { useContext } from 'react';
import './ContentPane.css';
import { PageForm } from '../page/PageForm';
import { StartPage } from '../page/StartPage';
import { StoreContext } from '../store/Store';


export const ContentPane = () => {
    const { mode } = useContext(StoreContext);

    return (
        <div className='content-pane'>
            {mode === 'Start' && <StartPage />}
            {mode === 'AddPage' && <PageForm saveButtonLabel='Create Page'/>}
        </div>
    );
};