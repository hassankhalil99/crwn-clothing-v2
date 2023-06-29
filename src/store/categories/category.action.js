import { createAction } from "../../utils/reducer/reducer.utils";
import { GATEGORIES_ACTION_TYPES } from "./category.type" ;


export const setCategories = (categoriesArray) => createAction(GATEGORIES_ACTION_TYPES.SET_CATEGORIES,categoriesArray)
