"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Check, Copy } from "lucide-react";

interface TerminalProps {
    command : string;
    children : React.ReactNode;
}

export const Terminal = ({
    command,
    children
} : TerminalProps ) => {

    const [ isCopied, setIsCopied ] = useState(false);

    const Icon = isCopied ? Check : Copy;

    const onCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(command);
        setTimeout(()=>{
            setIsCopied(false);
        }, 1500);
    }

    return (
        <div className="w-full h-14 bg-neutral-900 rounded-md flex items-center px-6 border border-zinc-800">
            <code className="line-clamp-1 text-zinc-300 w-full">
                {children}
            </code>
            <Button 
                className="hover:bg-transparent px-0"
                variant="ghost"
                size="icon"
                onClick={onCopy}
            >
                <Icon className="h-4 w-4"/>
            </Button>
        </div>
    )
}
