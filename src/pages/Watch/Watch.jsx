import React, { useEffect, useState } from "react";
import "./Watch.scss";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import VideoCardSmall from "../../components/VideoCardSmall/VideoCardSmall";
import { useVideo } from "../../context/VideoContext";
import { loadVideos } from "../../utilities/Videos/load-videos";
import { getRandomInt } from "../../utilities/random-list-size";
import { addToLiked } from "../../utilities/Liked/add-liked";
import { removeFromLiked } from "../../utilities/Liked/remove-liked";

const Watch = () => {
    const [more, setMore] = useState(false);

    const navigate = useNavigate();
    const handleAvatarRedirect = () => {
        navigate("/previewchannel");
    };

    const { videoId } = useParams();
    const {
        stateVideo: { videos, liked },
        dispatchVideo,
    } = useVideo();

    const {
        _id: id,
        title: videoTitle,
        creator: videoCreator,
        src: videoSrc,
        views: videoViews,
        channelIcon: channel,
        createdAt,
        description,
    } = JSON.parse(sessionStorage.getItem("current"));

    const [min, max] = getRandomInt(videos.length);

    const likeHandler = (id) => {
        const singleVideo = videos.find((video) => video._id === id);

        liked.find((video) => video._id === id)
            ? removeFromLiked(id, dispatchVideo)
            : addToLiked(singleVideo, dispatchVideo);
    };

    useEffect(() => {
        loadVideos(dispatchVideo);
    }, []);

    return (
        <div className="watch">
            <div className="watch__wrap">
                {videoId === id ? (
                    <div className="watch__left">
                        <div className="watch__video">
                            <iframe
                                title={videoTitle}
                                src={videoSrc}
                                frameBorder="0"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>

                        <div className="watch__leftBottom">
                            <h1 className="watch__title">{videoTitle}</h1>

                            <div className="watch__videoInfo">
                                <div className="watch__videoInfoLeft">
                                    <p className="watch__text">
                                        {videoViews} views • {createdAt}
                                    </p>
                                </div>

                                <div className="watch__videoInfoRight">
                                    <div className="watch__likeContainer">
                                        <div className="watch__likeWrap">
                                            <div className="watch__likeBtnContainer color--gray">
                                                <AiFillLike
                                                    className={`watch__icon ${
                                                        liked.find(
                                                            (video) =>
                                                                video._id === id
                                                        ) && "liked"
                                                    }`}
                                                    onClick={() =>
                                                        likeHandler(id)
                                                    }
                                                />
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
                                        src={channel}
                                        alt="channel icon"
                                    />

                                    <div className="videothumb__channel">
                                        <h1 className="videothumb__title">
                                            {videoCreator}
                                        </h1>
                                        <p className="videothumb__text watch__subCount">
                                            1M Subscribers
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="watch__description">
                                <p className={`description ${more && "more"}`}>
                                    {description}
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
                ) : (
                    <div className="watch__left">Sorry video not found</div>
                )}

                <div className="watch__right">
                    {videos.slice(min, max).map((item, index) => (
                        <VideoCardSmall
                            key={index}
                            id={item._id}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            creator={item.creator}
                            length={item.videoLength}
                            views={item.views}
                            icon={item.channelIcon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Watch;
