import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./VideoCard.scss";

const VideoCard = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img
                    src="https://i.ytimg.com/vi/CHSnz0bCaUk/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDpGpbVz4_eJQddh_hNCbwOKrJXUA"
                    alt=""
                />
                <span>01:30</span>
            </div>

            <div className="video__down">
                <img
                    className="channel__img"
                    src="https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s68-c-k-c0x00ffffff-no-rj"
                    alt=""
                />

                <div className="video__info">
                    <div className="video__title">
                        Create app in 1hr 30mins # made by anonymous
                    </div>
                    <div className="video__details">
                        <span>5M views • 69 days ago</span>
                    </div>
                    <div className="video__channel">
                        <p>NerdySpook</p>
                    </div>
                </div>
                <BsThreeDotsVertical className="video__options" />
            </div>
        </div>
    );
};

export default VideoCard;
