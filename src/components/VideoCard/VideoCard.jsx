import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context/VideoContext";
import "./VideoCard.scss";

const VideoCard = ({ thumbnail, title, creator, length, views, id, icon }) => {
    const navigate = useNavigate();

    const {
        stateVideo: { videos },
    } = useVideo();
    const watchVideo = (id) => {
        const singleVideo = videos.find((video) => video._id === id);
        sessionStorage.setItem("current", JSON.stringify(singleVideo));
        navigate(`watch/${id}`);
    };

    return (
        <div
            className="video"
            onClick={() => {
                watchVideo(id);
            }}
        >
            <div className="video__top">
                <img src={thumbnail} alt="thumbnail" />
                <span>{length}</span>
            </div>

            <div className="video__down">
                <img className="channel__img" src={icon} alt="channel logo" />

                <div className="video__info">
                    <div className="video__title">{title}</div>
                    <div className="video__details">
                        <span>{views} views • few months ago</span>
                    </div>
                    <div className="video__channel">
                        <p>{creator}</p>
                    </div>
                </div>
                <BsThreeDotsVertical className="video__options" />
            </div>
        </div>
    );
};

export default VideoCard;
