import React, { useState } from "react";
import "./Watch.scss";
import { useNavigate } from "react-router-dom";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import VideoCardSmall from "../../components/VideoCardSmall/VideoCardSmall";

const Watch = () => {
    const [more, setMore] = useState(false);

    const navigate = useNavigate();
    const handleAvatarRedirect = () => {
        navigate("/previewchannel");
    };

    return (
        <div className="watch">
            <div className="watch__wrap">
                <div className="watch__left">
                    <div className="watch__video">
                        <iframe
                            title="myvideo"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY"
                            frameBorder="0"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>

                    <div className="watch__leftBottom">
                        <h1 className="watch__title">Amazon Prime video</h1>

                        <div className="watch__videoInfo">
                            <div className="watch__videoInfoLeft">
                                <p className="watch__text">
                                    3,448 views • April 25, 2022
                                </p>
                            </div>

                            <div className="watch__videoInfoRight">
                                <div className="watch__likeContainer">
                                    <div className="watch__likeWrap">
                                        <div className="watch__likeBtnContainer color--gray">
                                            <AiFillLike className="watch__icon" />
                                            <p>20K</p>
                                        </div>
                                        <div className="watch__likeBtnContainer color--gray">
                                            <AiFillDislike className="watch__icon" />
                                            <p>20</p>
                                        </div>
                                    </div>

                                    <div className="watch__likeDislikeRatio"></div>
                                </div>

                                <div className="watch__likeBtnContainer color--gray">
                                    <RiPlayListAddFill className="watch__icon play-addIcon" />
                                    <p>Save</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="watch__details">
                        <div className="watch__detailsContainer">
                            <div className="videothumb__details watch__avatarWrap">
                                <img
                                    className="watch__avatar"
                                    onClick={handleAvatarRedirect}
                                    src="https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s68-c-k-c0x00ffffff-no-rj"
                                    alt=""
                                />

                                <div className="videothumb__channel">
                                    <h1 className="videothumb__title">
                                        Nerdyspook
                                    </h1>
                                    <p className="videothumb__text watch__subCount">
                                        1M Subscribers
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="watch__description">
                            <p className={`description ${more && "more"}`}>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Cum repellat doloremque eius
                                nulla ducimus delectus dolorem facilis. Et ad
                                inventore quidem quo, voluptatum perferendis
                                eaque suscipit deserunt doloremque at molestias.
                            </p>
                            <p
                                className="read-more"
                                onClick={() => setMore((more) => !more)}
                            >
                                {more ? "Show less" : "show more"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="watch__right">
                    <VideoCardSmall />
                    <VideoCardSmall />
                    <VideoCardSmall />
                    <VideoCardSmall />
                </div>
            </div>
        </div>
    );
};

export default Watch;
