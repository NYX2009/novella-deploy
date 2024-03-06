import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import {ArrowLeftCircle} from 'lucide-react';

const SideBar =() =>{

    return(
        <div>
            <Link
            href='/store'
            className="bg-purple-400 mb-4 flex h-20 w-60 items-end justify-start rounded-md p-4">
                <div className="w-32 md:w-40">
                    <Logo/>
                </div>
            </Link>

            <div className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:space-x-0 md:flex-col md:space-y-2">
                <NavLinks/>
                <form>
                    <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-2 bg-white">
                        <ArrowLeftCircle className="w-6"/>
                        <p className="font-bold">Sign Out</p>
                    </button>
                </form>                
            </div>
        </div>
    )
}

export default SideBar;