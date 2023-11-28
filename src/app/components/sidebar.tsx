import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Sidebar = () => {
    const { logout } = useContext(AuthContext)
    return (
        <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen bg-lime-50">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-lime-200">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto">
                <img src="/farma.png" alt="Farma Logo" width={100} height={24} />
            </div>
            <ul className="space-y-2 font-medium">
                <li>
                <a href="/oa" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray hover:bg-lime-100 dark:hover:bg-lime-500 group">
                    <svg className="w-5 h-5 text-farma transition duration-75 dark:lime-gray-400 group-hover:text-lime-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3">Objetos de Aprendizagem</span>
                </a>
                </li>            
                
                <li>
                    <button onClick={logout} className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-gray hover:bg-lime-100 dark:hover:bg-lime-500 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-farma transition duration-75 dark:text-lime-400 group-hover:text-lime-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                        </svg>
                        <span className="ms-3">
                            Sair
                        </span>
                    </button>
                </li>
            </ul>
            </div>
        </aside>
    );
  };
  
  export default Sidebar;