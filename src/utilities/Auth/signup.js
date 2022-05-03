import axios from "axios";

export const signupUser = async (
    firstName,
    lastName,
    email,
    password,
    dispatchAuth,
    navigate,
    location
) => {
    try {
        const response = await axios({
            method: "POST",
            url: "/api/auth/signup",
            data: { firstName, lastName, email, password },
        });

        if (response.status === 201) {
            dispatchAuth({
                type: "GET_USER_DETAILS",
                payload: response.data.createdUser,
            });
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem("name", response.data.createdUser.firstName);

            const redirectPath = location?.state?.path || "/";
            navigate(redirectPath, { replace: true });
        }
    } catch (e) {
        console.log("Error:", email, e);
    }
};
