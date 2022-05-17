import React from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context/VideoContext";
import { clearHistory } from "../../utilities/History/clear-history";
import "./History.scss";

const History = () => {
    const {
        stateVideo: { history },
        dispatchVideo,
    } = useVideo();

    return (
        <>
            <div className="top"></div>
            {history.length <= 0 ? (
                <div className="top">
                    <h1>Sorry you have no history</h1>
                </div>
            ) : (
                <div className="videos history__videos">
                    {history.map((item, index) => (
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

                    <button
                        className="clear btn"
                        onClick={() => {
                            clearHistory(dispatchVideo);
                        }}
                    >
                        Clear History
                    </button>
                </div>
            )}
        </>
    );
};

export default History;
