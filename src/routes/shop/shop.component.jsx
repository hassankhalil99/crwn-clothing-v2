import { Routes ,Route, useParams } from "react-router-dom";
import { Fragment, useContext,useState,useEffect } from "react";
import { CategoriesContext} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";



const Shop=()=>{
    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext);
    
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=":category" element={<Category />} />
        </Routes>                 
    );
}
export default Shop;