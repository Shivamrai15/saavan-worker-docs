

interface LayoutPageProps {
    children: React.ReactNode;
}

const LayoutPage = ({
    children
}: LayoutPageProps ) => {
    return (
        <div className="bg-white h-full overflow-y-auto">
            {children}
        </div>
    )
}

export default LayoutPage;