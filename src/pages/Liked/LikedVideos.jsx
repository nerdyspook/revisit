import React from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context/VideoContext";

const LikedVideos = () => {
    const {
        stateVideo: { liked },
    } = useVideo();
    console.log(liked);

    return (
        <>
            <div className="top"></div>
            {liked.length <= 0 ? (
                <div className="top">
                    <h1>Sorry you have no liked videos</h1>
                </div>
            ) : (
                <div className="videos">
                    {liked.map((item, index) => (
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

export default LikedVideos;
