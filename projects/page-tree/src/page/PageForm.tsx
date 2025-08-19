import { BaseSyntheticEvent, useContext, useState } from 'react';
import { v7 } from 'uuid';
import { StoreContext } from '../store/Store';
import './PageForm.css';

type Props = {
    saveButtonLabel: string;
};

const PageForm = ({ saveButtonLabel }: Props) => {
    const { onAddPage } = useContext(StoreContext);

    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onTitleChange = (e: BaseSyntheticEvent) => {
        setTitle(e.target.value);
    };
    const onContentChange = (e: BaseSyntheticEvent) => {
        setContent(e.target.value);
    }
    const onSubmit = (e: BaseSyntheticEvent) => {
        setSubmitted(true);

        if (!title || !content) {
            e.preventDefault();
            return;
        }

        const id = v7();
        onAddPage({ id, title, content });
    };

    return (
        <form className='page-form' onSubmit={onSubmit}>
            <input type='text' placeholder='Title' className='title-input' onChange={onTitleChange} />
            {submitted && !title?.length && <div className='error'>Page title cannot be empty.</div>}
            <textarea placeholder='Content' className='content-input' onChange={onContentChange} />
            {submitted && !content?.length && <div className='error'>Page content cannot be empty.</div>}
            <button className='submit-button' type='submit'>{saveButtonLabel}</button>
        </form>
    );
};

export { PageForm };