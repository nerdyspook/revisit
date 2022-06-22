import axios from "axios";

export const removePlaylist = async (playlistId, dispatchVideo) => {
    const encodedToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/user/playlists/${playlistId}`,
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 200) {
            dispatchVideo({
                type: "UPDATE_PLAYLISTS",
                payload: response.data.playlist ?? [],
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
