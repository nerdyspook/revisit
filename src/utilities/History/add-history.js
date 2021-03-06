import axios from "axios";

export const addToHistory = async (video, dispatchVideo) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const response = await axios({
            method: "POST",
            url: "/api/user/history",
            data: { video },
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 201) {
            dispatchVideo({
                type: "UPDATE_HISTORY",
                payload: response.data.history,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
