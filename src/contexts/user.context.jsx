import { createContext ,useState} from "react";


export const UserContext=createContext({
    currentUSer:null,
    setCurrentUSer:()=>null

})

export const UserProvider=({children})=>{
    const [currentUSer,setCurrentUSer]=useState(null);
    const value={currentUSer,setCurrentUSer};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
    
} 