import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoRemoveCircle } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useVideo } from "../../context/VideoContext";
import { addToHistory } from "../../utilities/History/add-history";
import { removeFromHistory } from "../../utilities/History/remove-history";
import "./VideoCard.scss";

const VideoCard = ({ thumbnail, title, creator, length, views, id, icon }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const {
        stateVideo: { videos },
        dispatchVideo,
    } = useVideo();
    const watchVideo = (id) => {
        const singleVideo = videos.find((video) => video._id === id);
        sessionStorage.setItem("current", JSON.stringify(singleVideo));
        addToHistory(singleVideo, dispatchVideo);
        navigate(`/watch/${id}`);
    };

    return (
        <div className="video">
            <div
                className="video__top"
                onClick={() => {
                    watchVideo(id);
                }}
            >
                <img src={thumbnail} alt="thumbnail" />
                <span>{length}</span>
            </div>

            <div className="video__down">
                <img
                    className="channel__img"
                    src={icon}
                    alt="channel logo"
                    onClick={() => {
                        watchVideo(id);
                    }}
                />

                <div
                    className="video__info"
                    onClick={() => {
                        watchVideo(id);
                    }}
                >
                    <div className="video__title">{title}</div>
                    <div className="video__details">
                        <span>{views} views • few months ago</span>
                    </div>
                    <div className="video__channel">
                        <p>{creator}</p>
                    </div>
                </div>
                <div className="video__options">
                    <BsThreeDotsVertical />

                    {pathname === "/history" && (
                        <IoRemoveCircle
                            onClick={() => removeFromHistory(id, dispatchVideo)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
