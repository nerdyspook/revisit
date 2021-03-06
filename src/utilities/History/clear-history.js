import axios from "axios";

export const clearHistory = async (dispatchVideo) => {
    const encodedToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "DELETE",
            url: "/api/user/history/all",
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 200) {
            dispatchVideo({
                type: "UPDATE_HISTORY",
                payload: response.data.history,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
