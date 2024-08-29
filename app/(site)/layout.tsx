import { Header } from "@/components/header";

interface LayoutPageProps {
    children: React.ReactNode;
}

const LayoutPage = ({
    children
} : LayoutPageProps) => {
    return (
        <div className="h-full relative">
            <Header/>
            {children}
        </div>
    )
}

export default LayoutPage;