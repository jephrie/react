import './Page.css';

type PageProps = {
    title: string;
    content: string;
};

const Page = ({ title, content }: PageProps) => {
    return (
        <div className='content'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export { Page };