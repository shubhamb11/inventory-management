import { FILTER_CATEGORY, ADD_CATEGORY_FORM } from "./actionTypes";

export const filtercategory = (category) => {
    return {
        type: FILTER_CATEGORY,
        category: category,
    };
};

export const addCategoryForm = (category) => {
    return {
        type: ADD_CATEGORY_FORM,
        category: category,
    };
};
