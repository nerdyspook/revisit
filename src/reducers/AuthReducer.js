export const authReducer = (state, action) => {
    switch (action.type) {
        case "GET_USER_DETAILS":
            return {
                ...state,
                userDetails: action.payload,
                isAuth: true,
            };

        case "LOGOUT":
            return { ...state, userDetails: [], isAuth: false };

        default:
            return state;
    }
};
