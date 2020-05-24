import { FILTER_CATEGORY, ADD_CATEGORY_FORM } from "../actions/actionTypes";

const initState = {
    categories: ["All", "Chainsaws", "Bulldozers"],
    sub_fields_types: ["small"],
    manage_type: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FILTER_CATEGORY:
            console.log("FILTER_CATEGORY ", action.category);
            break;
        case ADD_CATEGORY_FORM:
            console.log("adding a form");
            let temp = {
                cat_type: "",
                title: "",
                fields: {
                    name: "",
                    type: "",
                },
            };
            return {
                ...state,
                manage_type: [...state.manage_type, temp],
            };
        default:
            return state;
    }
};

export default reducer;
