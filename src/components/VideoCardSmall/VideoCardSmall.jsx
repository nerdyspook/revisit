import React from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context/VideoContext";
import { addToHistory } from "../../utilities/History/add-history";
import "./VideoCardSmall.scss";

const VideoCardSmall = ({
    channelView = false,
    id,
    thumbnail,
    title,
    creator,
    views,
    length,
}) => {
    const navigate = useNavigate();
    const {
        stateVideo: { videos, history },
        dispatchVideo,
    } = useVideo();

    const watchVideo = (id) => {
        const singleVideo = videos.find((video) => video._id === id);
        sessionStorage.setItem("current", JSON.stringify(singleVideo));
        history.find((video) => video._id === id) ??
            addToHistory(singleVideo, dispatchVideo);
        navigate(`/watch/${id}`);
    };

    return (
        <div
            className={`videoSmall ${channelView && "videoSmall__channelView"}`}
            onClick={() => watchVideo(id)}
        >
            <div className="videoSmall__left">
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    className={`videoSmall__thumbnail ${
                        channelView && "videoSmall__channelView__img"
                    }`}
                />
                <div className="videoSmall__left__duration">{length}</div>
            </div>

            <div className="videoSmall__right">
                <p className="videoSmall__title">{title}</p>

                <div className="videoSmall__texts videothumb__texts">
                    {!channelView && (
                        <p className="videothumb__text">{creator}</p>
                    )}

                    <p className="videothumb__text">
                        {views} views • 5 days ago
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCardSmall;
