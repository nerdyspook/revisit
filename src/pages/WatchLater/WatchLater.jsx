import React from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context/VideoContext";

const WatchLater = () => {
    const {
        stateVideo: { watchLater },
    } = useVideo();

    return (
        <>
            <div className="top"></div>
            {watchLater.length <= 0 ? (
                <div className="top">
                    <h1>Sorry you have not added to watch later</h1>
                </div>
            ) : (
                <div className="videos watchlater__videos">
                    {watchLater.map((item, index) => (
                        <div className="videos__wrap" key={index}>
                            {" "}
                            <VideoCard
                                key={index}
                                id={item._id}
                                thumbnail={item.thumbnail}
                                title={item.title}
                                creator={item.creator}
                                length={item.videoLength}
                                views={item.views}
                                icon={item.channelIcon}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default WatchLater;
