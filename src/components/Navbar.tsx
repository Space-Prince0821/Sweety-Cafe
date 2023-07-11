import Link from "next/link";

export function NavBar() {
    return (
        <nav className="bg-white sticky top-0 z-50 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                <Link href="/" className="flex items-center">
                    <span className="self-center text-2xl font-medium whitespace-nowrap text-black tracking-widest ">SWEETY CAFE</span>
                </Link>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default ">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 tracking-widest font-medium text-xl">
                        <li>
                            <Link href="/" className="hover:text-slate-300 active:text-slate-300" aria-current="page">HOME</Link>
                        </li>

                        <li>
                            <Link href="#about" className="hover:text-slate-300 active:text-slate-300">ABOUT</Link>
                        </li>
                        
                        <li>
                            <Link href="#menu" className="hover:text-slate-300">MENU</Link>
                        </li>

                        <li>
                            <Link href="#contact" className="hover:text-slate-300">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}