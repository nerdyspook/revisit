import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoCardSmall.scss";

const VideoCardSmall = ({
    channelView = false,
    thumbnail,
    title,
    creator,
    views,
    length,
}) => {
    const navigate = useNavigate();
    const handleClickRedirect = () => {
        navigate("/watch");
    };

    return (
        <div
            onClick={handleClickRedirect}
            className={`videoSmall ${channelView && "videoSmall__channelView"}`}
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
