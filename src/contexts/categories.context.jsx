import { createContext,useEffect,useState } from "react";
import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../Firebase/firebase.utils.js";


export const CategoriesContext=createContext({
    categoriesMap:{},

})

export const CategoriesProvider=({children})=>{
    
    const [categoriesMap,setCategoriesMap]=useState({});
    console.log(SHOP_DATA);
    useEffect(()=>{
        const getGategoriesMap=async () =>{             
        const categoryMap= await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap);
        console.log(categoryMap);

    }
    getGategoriesMap();
        
    },[]);
    const value={categoriesMap};
    return (

        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>        
    )
}