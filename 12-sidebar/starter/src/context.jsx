import { createContext,useState,useContext } from "react";


const AppContext = createContext();

export const AppProvider = ({children})=>{
    
     const [isSidebarOpen, setIsSideBarOpen]=useState(false)
     const [isModalOpen, setIsModalOpen]=useState(false)


     const openSidebar=()=>{
        setIsSideBarOpen(true);
     }
     const closeSidebar=()=>{
        setIsSideBarOpen(false);
     }
     const openModal=()=>{
        setIsModalOpen(true);
     }
     const closeModal=()=>{
        setIsModalOpen(false);
     }

    return <AppContext.Provider value={{isModalOpen,isSidebarOpen,openSidebar,closeSidebar,openModal,closeModal}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
} 