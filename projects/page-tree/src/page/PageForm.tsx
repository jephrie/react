import './PageForm.css';

type Props = {
    saveButtonLabel: string;
};

const PageForm = ({ saveButtonLabel }: Props) => {
    return (
        <form className='page-form'>
            <input type='text' placeholder='Title' className='title-input' />
            <textarea placeholder='Content' className='content-input' />
            <button className='submit-button'>{saveButtonLabel}</button>
        </form>
    );
};

export { PageForm };