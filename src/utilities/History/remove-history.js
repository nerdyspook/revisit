import axios from "axios";

export const removeFromHistory = async (id, dispatchVideo) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/user/history/${id}`,
            headers: {
                authorization: token,
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
