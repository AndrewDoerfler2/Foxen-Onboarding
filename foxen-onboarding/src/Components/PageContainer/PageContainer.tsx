import './PageContainer.css';

interface IPageContainerProps {
    children: React.ReactNode;
    }

const PageContainer: React.FC<IPageContainerProps> = ({children}) => {
    return (
        <div className="page-container">
            {children}
        </div>
    );
}

export default PageContainer;