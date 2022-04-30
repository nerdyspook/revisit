import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoCardSmall.scss";

const VideoCardSmall = ({ channelView = false }) => {
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
                    src="https://i.ytimg.com/vi/_nSalXeU11Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5g7epiuXklAkiM8OKPqIvDSL8Mg"
                    alt="thumbnail"
                    className={`videoSmall__thumbnail ${
                        channelView && "videoSmall__channelView__img"
                    }`}
                />
                <div className="videoSmall__left__duration">00:00</div>
            </div>

            <div className="videoSmall__right">
                <p className="videoSmall__title">Ronin songs</p>

                <div className="videoSmall__texts videothumb__texts">
                    {!channelView && (
                        <p className="videothumb__text">Amazon prime videp</p>
                    )}

                    <p className="videothumb__text">3,448 views • 5 days ago</p>
                </div>
            </div>
        </div>
    );
};

export default VideoCardSmall;
