import { GATEGORIES_ACTION_TYPES } from "./category.type"
export const CATEGORIES_INITIAL_STATE = {
    categories:[]
}



export const categoriesReducers = (state=CATEGORIES_INITIAL_STATE,action={})=>{

    const {type,payload}=action
    switch(type){
    case GATEGORIES_ACTION_TYPES.SET_CATEGORIES:
        return{...state,categories:payload}
    default:return state
    }
}