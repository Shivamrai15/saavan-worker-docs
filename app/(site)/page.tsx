import { Terminal } from "@/components/terminal";
import RetroGrid from "@/components/ui/grid";
import { FaGithub, FaCloudflare } from "react-icons/fa6";
import { TfiPlus } from "react-icons/tfi";

const HomePage = () => {
    return (
        <div className="h-full overflow-y-auto bg-neutral-900" >
            <header className="h-full relative">
                <div className="absolute size-full flex items-center justify-center">
                    <div className="max-w-3xl w-full space-y-6 px-6">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-center" ><span className="text-blue-400">JioSaavan</span> Unofficial API</h1>
                        <p className="font-medium text-center">A lightweight and easy-to-use Cloudflare worker built with Hono.js🔥 lets developers get data directly from JioSaavn without having to use web scraping.</p>
                    </div>
                </div>
                <RetroGrid />
            </header>
            <main className="flex justify-center px-6 bg-neutral-950 py-28 md:py-40" id="deploy">
                <div className="max-w-3xl w-full space-y-20">
                    <div className="w-full flex items-center justify-center">
                        <div className="max-w-lg w-full h-20 md:h-24 border border-neutral-700 relative">
                            <TfiPlus className="absolute -top-3 -left-3 h-6 w-6 text-neutral-700" />
                            <TfiPlus className="absolute -top-3 -right-3 h-6 w-6 text-neutral-700" />
                            <TfiPlus className="absolute -bottom-3 -left-3 h-6 w-6 text-neutral-700" />
                            <TfiPlus className="absolute -bottom-3 -right-3 h-6 w-6 text-neutral-700" />
                            <div className="h-full w-full flex items-center justify-center">
                                <h1 className="text-3xl md:text-5xl font-bold" >Deployment</h1>
                            </div>
                        </div>
                    </div>
                    <section className="w-full p-6 md:p-12 bg-gradient-to-b from-neutral-800/70 to-neutral-900/90 rounded-xl space-y-16 shadow-[0_-120px_300px_0px_rgba(191,106,27,.2)]">
                        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
                            <div className="w-full md:w-36 md:aspect-square bg-neutral-800 rounded-md flex flex-col p-4 justify-center hover:-translate-y-3 hover:-rotate-2 duration-500 transition-transform">
                                <code className="text-xs text-zinc-500 font-medium cursor-default">
                                    git clone .
                                </code>
                                <code className="text-xs text-zinc-400 font-medium cursor-default">
                                    git add remote
                                </code>
                                <code className="text-xs text-zinc-300 font-medium cursor-default">
                                    git push.
                                </code>
                            </div>
                            <div className="w-full md:w-36 md:aspect-square bg-neutral-800 rounded-md p-4 flex items-center justify-center hover:-translate-y-3 hover:-rotate-2 duration-500 transition-transform">
                                <FaGithub className="h-10 w-10" />
                            </div>
                            <div className="w-full md:w-36 md:aspect-square bg-neutral-800 rounded-md p-4 flex items-center justify-center hover:-translate-y-3 hover:-rotate-2 duration-500 transition-transform">
                                <FaCloudflare className="h-10 w-10" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-zinc-200 font-medium">One command deploy</p>
                            <p className="text-sm text-zinc-400">Deploy this light weight worker in seconds with one command</p>
                        </div>
                    </section>
                    <section className="w-full">
                        <h1 className="text-xl md:text-2xl font-semibold pb-8" >Project Setup</h1>
                        <div className="w-full flex gap-x-6">
                            <div className="flex flex-col items-center">
                                <span className="h-8 w-8 bg-neutral-800 font-extrabold rounded-full flex items-center justify-center shrink-0">
                                    1
                                </span>
                                <span
                                    className="w-0.5 h-full bg-neutral-800"
                                />
                            </div>
                            <div className="py-1 w-full space-y-5 h-full pb-8">
                                <h2 className="text-lg font-semibold">Clone project</h2>
                                <p className="text-zinc-400 text-base" >Clone the project locally using command git clone</p>
                                <Terminal command="git clone https://github.com/Shivamrai15/saavan-worker.git" >
                                    <span className="text-green-500">git </span>
                                    <span>
                                        clone https://github.com/Shivamrai15/saavan-worker.git
                                    </span>
                                </Terminal>
                            </div>
                        </div>
                        <div className="w-full flex gap-x-6">
                            <div className="flex flex-col items-center">
                                <span className="h-8 w-8 bg-neutral-800 font-extrabold rounded-full flex items-center justify-center shrink-0">
                                    2
                                </span>
                                <span
                                    className="w-0.5 h-full bg-neutral-800"
                                />
                            </div>
                            <div className="py-1 w-full space-y-5 h-full pb-8">
                                <h2 className="text-lg font-semibold">Install dependencies</h2>
                                <p className="text-zinc-400 text-base" >Start by installing all the dependencies</p>
                                <Terminal command="bun install" >
                                    <span className="text-green-500">bun </span>
                                    <span>install</span>
                                </Terminal>
                            </div>
                        </div>
                        <div className="w-full flex gap-x-6">
                            <div className="flex flex-col items-center">
                                <span className="h-8 w-8 bg-neutral-800 font-extrabold rounded-full flex items-center justify-center shrink-0">
                                    3
                                </span>
                                <span
                                    className="w-0.5 h-full bg-neutral-800"
                                />
                            </div>
                            <div className="py-1 w-full space-y-5 h-full pb-8">
                                <h2 className="text-lg font-semibold">Run locally</h2>
                                <p className="text-zinc-400 text-base" >To run locally on your machine run this command</p>
                                <Terminal command="bun run dev">
                                    <span className="text-green-500">bun </span>
                                    <span>run dev</span>
                                </Terminal>
                            </div>
                        </div>
                        <div className="w-full flex gap-x-6">
                            <div className="flex flex-col items-center">
                                <span className="h-8 w-8 bg-neutral-800 font-extrabold rounded-full flex items-center justify-center shrink-0">
                                    4
                                </span>
                                <span
                                    className="w-0.5 h-full bg-neutral-800"
                                />
                            </div>
                            <div className="py-1 w-full space-y-5 h-full">
                                <h2 className="text-lg font-semibold">Deploy</h2>
                                <p className="text-zinc-400 text-base" >To deploy project on cloudflare workers run this command</p>
                                <Terminal command="bun run deploy">
                                    <span className="text-green-500">bun </span>
                                    <span>run deploy</span>
                                </Terminal>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default HomePage;