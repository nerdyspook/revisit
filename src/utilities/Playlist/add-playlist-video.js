import axios from "axios";

// This API call adds a new video to the playlist of the user in the db.
export const addVideoToPlaylist = async (id, video, dispatchVideo) => {
    const encodedToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "POST",
            url: `/api/user/playlists/${id}`,
            data: { video },
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 201) {
            dispatchVideo({
                type: "UPDATE_SINGLE_PLAYLIST",
                payload: response.data.playlist,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
