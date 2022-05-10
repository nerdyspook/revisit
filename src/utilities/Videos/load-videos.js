import axios from "axios";

export const loadVideos = async (dispatchVideo) => {
    try {
        dispatchVideo({ type: "LOAD_VIDEOS" });
        const response = await axios({
            method: "GET",
            url: "/api/videos",
        });

        if (response.status === 200) {
            dispatchVideo({
                type: "LOAD_VIDEO_SUCCESS",
                payload: response.data.videos,
            });
        }
    } catch (e) {
        dispatchVideo({ type: "LOAD_FAIL" });
        console.log("Error: ", e);
    }
};
