export const videoReducer = (stateVideo, actionVideo) => {
    switch (actionVideo.type) {
        case "LOAD_VIDEOS":
            return { ...stateVideo, loading: true };

        case "LOAD_VIDEO_SUCCESS":
            return {
                ...stateVideo,
                loading: false,
                videos: actionVideo.payload,
            };

        case "LOAD_FAIL":
            return { ...stateVideo, loading: false, videos: null };

        case "UPDATE_HISTORY":
            return { ...stateVideo, history: actionVideo.payload };

        default:
            return stateVideo;
    }
};
