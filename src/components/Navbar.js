import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return(
        <nav className="fixed top-0 z-50 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center">
                <div className="flex items-center">
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="logoSidebar inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <a href="#" className="flex ml-2 md:mr-24">
                    <span className="items-center text-xl font-semibold sm:text-5xl whitespace-nowrap dark:text-white">LOGO</span>
                </a>
                </div>
                <div className="flex-1 items-center ml-3">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered bg-white rounded-2xl" />
                    </div>
                </div>
                <div className="flex-none items-center ml-3">
                    <div>
                        <a type="button" className="btn btn-ghost text-white" aria-expanded="false">
                            <FontAwesomeIcon icon={faRightFromBracket} />&nbsp;&nbsp;&nbsp;Logout
                        </a>
                        <a type="button" className="btn btn-ghost text-white" aria-expanded="false">
                            <FontAwesomeIcon icon={faBars} />
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;