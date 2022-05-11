import axios from "axios";

export const addToLiked = async (video, dispatchVideo) => {
    const encodedToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "POST",
            url: "/api/user/likes",
            data: { video },
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 201) {
            dispatchVideo({
                type: "UPDATE_LIKED",
                payload: response.data.likes,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
