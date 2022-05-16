import axios from "axios";

export const removeFromHistory = async (id, dispatchVideo) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/user/history/${id}`,
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
