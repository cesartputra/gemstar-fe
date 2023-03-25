import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns, faFile, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return(
        <>
            <Navbar />

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                    <li>
                        <div className="avatar ml-3">
                            <div className="rounded-full w-24 h-24">
                                <img src="./images/profile.png" alt="Profile Pic" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="flex items-center rounded-lg dark:text-white">
                            <span className="ml-3">Cesar Tribuana Putra</span>
                        </a>
                    </li>
                    <li className="pb-2">
                        <p className="text-xs flex items-center rounded-lg dark:text-white ml-3">Senior Client Services</p>
                    </li>
                    <hr className="pb-2"></hr>
                    <li>
                        <p className="text-xs flex items-center rounded-lg dark:text-white ml-3">NAVIGATION</p>
                    </li>
                    <li>
                        <a href="#" className="flex items-center rounded-lg dark:text-white">
                            <span className="ml-3"><FontAwesomeIcon icon={faColumns} />&nbsp;&nbsp;&nbsp;Dashboard</span>
                        </a>
                    </li>
                    <li className="pb-4">
                        <a href="#" className="flex items-center rounded-lg dark:text-white">
                            <span className="ml-3"><FontAwesomeIcon icon={faFile} />&nbsp;&nbsp;&nbsp;Approvals</span>
                        </a>
                    </li>
                    <hr className="pb-2"></hr>
                    <li>
                        <p className="text-xs flex items-center rounded-lg dark:text-white ml-3">MY ACCOUNT</p>
                    </li>
                    <li>
                        <a href="#" className="flex items-center rounded-lg dark:text-white">
                            <span className="ml-3"><FontAwesomeIcon icon={faUsers} />&nbsp;&nbsp;&nbsp;My Clients</span>
                        </a>
                    </li>
                    <li className="pb-4">
                        <a href="#" className="flex items-center rounded-lg dark:text-white">
                            <span className="ml-3"><FontAwesomeIcon icon={faGear} />&nbsp;&nbsp;&nbsp;Edit profiles</span>
                        </a>
                    </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;