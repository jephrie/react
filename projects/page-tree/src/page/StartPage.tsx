import { AddPageButton } from './AddPageButton';

export const StartPage = () => {
    return (
        <div className='start-content'>
            <p>Get started by clicking the button below.</p>
            <AddPageButton label='Create a page' />
        </div>
    );
};