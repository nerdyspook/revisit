import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoRemoveCircle } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useVideo } from "../../context/VideoContext";
import { addToHistory } from "../../utilities/History/add-history";
import { removeFromHistory } from "../../utilities/History/remove-history";
import { addToWatchLater } from "../../utilities/WatchLater/add-watch-later";
import { removeFromWatchLater } from "../../utilities/WatchLater/remove-watch-later";
import "./VideoCard.scss";

const VideoCard = ({ thumbnail, title, creator, length, views, id, icon }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [showOptions, setShowOptions] = useState(false);

    const {
        stateVideo: { videos, history, watchLater },
        dispatchVideo,
    } = useVideo();

    const watchVideo = (id) => {
        const singleVideo = videos.find((video) => video._id === id);
        sessionStorage.setItem("current", JSON.stringify(singleVideo));
        history.find((video) => video._id === id) ??
            addToHistory(singleVideo, dispatchVideo);

        navigate(`/watch/${id}`);
    };

    const watchLaterButtonHandler = (id) => {
        const singleVideo = videos.find((video) => video._id === id);

        if (watchLater.find((video) => video._id === id)) {
            removeFromWatchLater(id, dispatchVideo);
        } else {
            addToWatchLater(singleVideo, dispatchVideo);
        }

        setShowOptions(false);
    };

    const removeHandler = (id) => {
        if (pathname === "/history") {
            removeFromHistory(id, dispatchVideo);
        } else if (pathname === "/watch-later") {
            removeFromWatchLater(id, dispatchVideo);
        }
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
                    {pathname !== "/watch-later" && (
                        <BsThreeDotsVertical
                            onClick={() => setShowOptions((prev) => !prev)}
                        />
                    )}

                    {pathname === "/history" && (
                        <IoRemoveCircle onClick={() => removeHandler(id)} />
                    )}
                    {pathname === "/watch-later" && (
                        <IoRemoveCircle onClick={() => removeHandler(id)} />
                    )}
                </div>
            </div>

            <div className={`modal ${showOptions ? "" : "hidden"}`}>
                <div className="modal-details">
                    {showOptions && (
                        <div className="options">
                            <div
                                className="watch-later"
                                onClick={() => {
                                    watchLaterButtonHandler(id);
                                }}
                            >
                                {watchLater.length === 0
                                    ? "Add to Watch Later"
                                    : watchLater.find(
                                          (video) => video._id === id
                                      )
                                    ? "Added to Watch Later"
                                    : "Add to Watch Later"}
                            </div>
                            <div
                                className="library"
                                onClick={() => setShowOptions(false)}
                            >
                                Add to Library
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="modal-back hidden"></div>
        </div>
    );
};

export default VideoCard;
