import axiosLink from "../../axiosLink";

export const FETCH_SHORT_LINK_SUCCESS = 'FETCH_SHORT_LINK_SUCCESS';

export const fetchShortLinkSuccess = link => ({type: FETCH_SHORT_LINK_SUCCESS, link});

export const shortLink = postData => {
    return async (dispatch) => {
        try {
            const response = await axiosLink.post('/links', postData);
            console.log(response.data);
            dispatch(fetchShortLinkSuccess(response.data));
        } catch (e) {
            console.error(e);
        }
    };
};