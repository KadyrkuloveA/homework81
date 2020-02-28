import {FETCH_SHORT_LINK_SUCCESS} from "../actions/linkActions";

const initialState = {
    link: []
};

const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHORT_LINK_SUCCESS:
            return {...state, link: action.link};
        default:
            return state;
    }
};

export default linkReducer;