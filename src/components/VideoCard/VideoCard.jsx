import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./VideoCard.scss";

const VideoCard = ({ thumbnail, title, creator, length, views }) => {
    return (
        <div className="video">
            <div className="video__top">
                <img src={thumbnail} alt="thumbnail" />
                <span>{length}</span>
            </div>

            <div className="video__down">
                <img
                    className="channel__img"
                    src="https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s68-c-k-c0x00ffffff-no-rj"
                    alt="channel logo"
                />

                <div className="video__info">
                    <div className="video__title">{title}</div>
                    <div className="video__details">
                        <span>{views} views • 69 days ago</span>
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
