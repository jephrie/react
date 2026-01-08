import { EditPageButton } from './EditPageButton';
import { MovePageButton } from './MovePageButton';
import './ReadPage.css';

type Props = {
    title: string;
    content: string;
};

export const ReadPage = ({ title, content }: Props) => {
    return (
        <div className='content'>
            <div className='button-bar'><EditPageButton /><MovePageButton label='Move' /></div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};