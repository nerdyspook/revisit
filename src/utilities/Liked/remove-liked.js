import axios from "axios";

export const removeFromLiked = async (id, dispatchVideo) => {
    const encodedToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/user/likes/${id}`,
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 200) {
            dispatchVideo({
                type: "UPDATE_LIKED",
                payload: response.data.likes,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
