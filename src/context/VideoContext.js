import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducers/VideoReducer";

const VideoContext = createContext(null);

const VideoContextProvider = ({ children }) => {
    const [stateVideo, dispatchVideo] = useReducer(videoReducer, {
        loading: true,
        videos: [],
    });

    return (
        <VideoContext.Provider value={{ stateVideo, dispatchVideo }}>
            {children}
        </VideoContext.Provider>
    );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoContextProvider };
