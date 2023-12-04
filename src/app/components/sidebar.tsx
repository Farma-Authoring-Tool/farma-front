import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AiOutlineLogout, AiOutlineRead } from "react-icons/ai";

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
                <AiOutlineRead size={20} />
                <span className="ms-3"> Objetos de Aprendizagem </span>
                </a>
                </li>            
                
                <li>
                    <button onClick={logout} className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-gray hover:bg-lime-100 dark:hover:bg-lime-500 group">
                        <AiOutlineLogout size={20} />
                        <span className="ms-3"> Sair </span>
                    </button>
                </li>
            </ul>
            </div>
        </aside>
    );
  };
  
  export default Sidebar;