import './AddPageButton.css';

type Props = {
    label: string;
};

const AddPageButton = ({ label }: Props) => {
    return (
        <button>
            <div className='button-label'>
                {label}
            </div>
        </button>
    );
}

export { AddPageButton };