import { Github, House, TableOfContents, Zap } from 'lucide-react';
import { FloatingDock } from './ui/floating-dock';

export const Header = () => {

    const links = [
        {
            title: "Home",
            icon: (
              <House className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },
        {
            title: "Deploy",
            icon: (
              <Zap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/#deploy",
        },
        {
            title: "Docs",
            icon: (
              <TableOfContents className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/docs",
        },
        {
            title: "Github",
            icon: (
              <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Shivamrai15",
        }
    ] 

    return (
        <header className='fixed top-16 z-50 flex justify-center w-full'>
            <FloatingDock
                items={links}
            />
        </header>
    )
}
