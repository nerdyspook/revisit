import React from "react";
import VideoCard from "../../components/VideoCard/VideoCard";

const Search = () => {
    return (
        <div>
            <div className="videos">
                {[...new Array(20)].map((item, index) => (
                    <div className="videos__wrap" key={index}>
                        {" "}
                        <VideoCard key={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
