import axios from "axios";

export const removeFromWatchLater = async (id, dispatchVideo) => {
    const encodedToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/user/watchLater/${id}`,
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 200) {
            dispatchVideo({
                type: "UPDATE_WATCH_LATER",
                payload: response.data.watchLater,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
