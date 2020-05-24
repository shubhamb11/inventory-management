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
} from "../actions/actionTypes";

const initState = {
    categorySelected: "all",
    sub_fields_types: ["text", "number", "Date"],
    cat_count: 1,
    manage_type: [
        {
            id: 0,
            cat_type: "Demo Title",
            title: "Demo Field 1",
            fields: [
                {
                    name: "Demo Field 1",
                    type: "text",
                    value: "",
                    id: 1,
                },
                {
                    name: "Demo Field 2",
                    type: "Number",
                    value: 10,
                    id: 2,
                },
                {
                    name: "Demo Field 3",
                    type: "text",
                    value: "Demo Value",
                    id: 3,
                },
            ],
        },
    ],
    products: [],
    prod_count: 0,
};

const reducer = (state = initState, action) => {
    let categoryType,
        temp = {},
        product = {};
    switch (action.type) {
        case FILTER_CATEGORY:
            return {
                ...state,
                categorySelected: action.category,
            };
        case ADD_CATEGORY_FORM:
            temp = {
                id: state.cat_count,
                cat_type: "",
                title: "",
                fields: [
                    {
                        name: "",
                        type: "",
                        id: Date.now(),
                    },
                ],
            };
            return {
                ...state,
                manage_type: [...state.manage_type, temp],
                cat_count: state.cat_count + 1,
            };
        case ADD_FIELD_TYPE:
            let newField = {
                name: "",
                type: "",
                id: Date.now(),
            };
            categoryType = state.manage_type.map((cat) => {
                if (cat.id === action.id) {
                    cat.fields.push(newField);
                }
                return cat;
            });
            console.log(state.manage_type);

            return {
                ...state,
                manage_type: categoryType,
            };
        case UPDATE_CATEGORY_FORM:
            categoryType = state.manage_type.find(
                (cat) => cat.id === action.id
            );
            if (action.data.name === "name" || action.data.name === "type") {
                categoryType.fields.map((field) => {
                    if (field.id.toString() === action.data.id.toString()) {
                        action.data.name === "name"
                            ? (field.name = action.data.val)
                            : (field.type = action.data.val);
                    }
                });
            } else {
                Object.keys(categoryType).map(function (key, index) {
                    if (key === action.data.name)
                        categoryType[key] = action.data.val;
                    return categoryType;
                });
            }
            // console.log(categoryType);
            return {
                ...state,
                manage_type: [...state.manage_type],
            };
        case ADD_PRODUCT_FORM:
            [...state.manage_type].map((cat) => {
                if (cat.cat_type === action.category) {
                    product = { ...cat, id: state.prod_count };
                    product.fields.map((field) => {
                        field.value = "";
                        return field;
                    });
                }

                return product;
            });

            return {
                ...state,
                products: [...state.products, product],
                prod_count: state.prod_count + 1,
            };
        case UPDATE_PRODUCT_FORM:
            product = [...state.products].find((prod) => {
                if (prod.id === action.id) {
                    prod.fields.map((field) => {
                        if (field.name === action.data.name)
                            field.value = action.data.val;
                        return field;
                    });
                    return prod;
                }
                return product;
            });
            return {
                ...state,
                products: [...state.products],
            };
        case DELETE_PRODUCT:
            let products = state.products.filter(
                (prod) => prod.id !== action.id
            );

            return {
                ...state,
                products,
            };
        case DELETE_CATEGORY:
            let manage_type = state.manage_type.filter(
                (cat) => cat.id !== action.id
            );

            return {
                ...state,
                manage_type,
                cat_count: (state.cat_count -= 1),
            };
        case DELETE_FIELD:
            categoryType = state.manage_type.map((cat) => {
                if (cat.id === action.catId) {
                    let x = cat.fields.filter(
                        (field) =>
                            field.id.toString() !== action.fieldId.toString()
                    );
                    console.log("car", x);
                    cat.fields = x;
                    // return cat;
                    //  retucat;
                }
                console.log("car1", cat);
                return cat;
            });

            return {
                ...state,
                manage_type: categoryType,
            };
        default:
            return state;
    }
};

export default reducer;
