import React from "react";
import VideoCard from "../../components/VideoCard/VideoCard";

const WatchLater = () => {
    return (
        <div className="videos">
            {[...new Array(20)].map((item, index) => (
                <div className="videos__wrap" key={index}>
                    {" "}
                    <VideoCard key={index} />
                </div>
            ))}
        </div>
    );
};

export default WatchLater;
