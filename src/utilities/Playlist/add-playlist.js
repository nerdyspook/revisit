import axios from "axios";

// This API call creates a new playlist to the playlists of the user in the db.
export const addPlaylist = async (title, dispatchVideo) => {
    const encodedToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "POST",
            url: "/api/user/playlists",
            data: {
                playlist: { title, description: "" },
            },
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 201) {
            dispatchVideo({
                type: "UPDATE_PLAYLISTS",
                payload: response.data.playlists,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
