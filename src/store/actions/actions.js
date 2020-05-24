import {
    FILTER_CATEGORY,
    ADD_CATEGORY_FORM,
    ADD_FIELD_TYPE,
    UPDATE_CATEGORY_FORM,
    ADD_PRODUCT_FORM,
    UPDATE_PRODUCT_FORM,
    DELETE_PRODUCT,
    DELETE_CATEGORY,
    DELETE_FIELD,
} from "./actionTypes";

export const filtercategory = (category) => {
    return {
        type: FILTER_CATEGORY,
        category: category,
    };
};

export const addCategoryForm = () => {
    return {
        type: ADD_CATEGORY_FORM,
    };
};

export const addFieldType = (id) => {
    return {
        type: ADD_FIELD_TYPE,
        id: id,
    };
};

export const updateCategoryForm = (id, obj) => {
    return {
        type: UPDATE_CATEGORY_FORM,
        id: id,
        data: obj,
    };
};

export const addProductForm = (category) => {
    return {
        type: ADD_PRODUCT_FORM,
        category: category,
    };
};

export const updateProductForm = (id, obj) => {
    return {
        type: UPDATE_PRODUCT_FORM,
        id: id,
        data: obj,
    };
};

export const removeCategory = (id) => {
    return {
        type: DELETE_CATEGORY,
        id: id,
    };
};
export const removeProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        id: id,
    };
};

export const removeField = (catId, fieldId) => {
    return {
        type: DELETE_FIELD,
        catId: catId,
        fieldId: fieldId,
    };
};
