import { BaseSyntheticEvent, useState } from 'react';
import './PageForm.css';

type Props = {
    saveButtonLabel: string;
    onSubmit: (title: string, content: string) => void;
    prefillTitle?: string;
    prefillContent?: string;
};

const PageForm = ({ saveButtonLabel, onSubmit, prefillTitle = '', prefillContent = '' }: Props) => {
    const [title, setTitle] = useState<string>(prefillTitle);
    const [content, setContent] = useState<string>(prefillContent);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onTitleChange = (e: BaseSyntheticEvent) => {
        setTitle(e.target.value);
    };
    const onContentChange = (e: BaseSyntheticEvent) => {
        setContent(e.target.value);
    }
    const onSubmitInner = (e: BaseSyntheticEvent) => {
        setSubmitted(true);
        e.preventDefault();

        onSubmit(title, content);
    };

    return (
        <form className='page-form' onSubmit={onSubmitInner}>
            <input type='text' placeholder='Title' className='title-input' onChange={onTitleChange} value={title} />
            {submitted && !title?.length && <div className='error'>Page title cannot be empty.</div>}
            <textarea placeholder='Content' className='content-input' onChange={onContentChange} value={content} />
            {submitted && !content?.length && <div className='error'>Page content cannot be empty.</div>}
            <button className='submit-button' type='submit'>{saveButtonLabel}</button>
        </form>
    );
};

export { PageForm };