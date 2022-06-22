import axios from "axios";

export const removeVideoFromPlaylist = async (
    videoId,
    playlistId,
    dispatchVideo
) => {
    const encodedToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/user/playlists/${playlistId}/${videoId}`,
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 200) {
            dispatchVideo({
                type: "UPDATE_SINGLE_PLAYLIST",
                payload: response.data.playlist,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
