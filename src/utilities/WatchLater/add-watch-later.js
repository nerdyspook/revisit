import axios from "axios";

export const addToWatchLater = async (video, dispatchVideo) => {
    const encodedToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "POST",
            url: "/api/user/watchLater",
            data: { video },
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 201) {
            dispatchVideo({
                type: "UPDATE_WATCH_LATER",
                payload: response.data.watchLater,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
