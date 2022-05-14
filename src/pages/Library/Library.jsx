import React from "react";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import { useVideo } from "../../context/VideoContext";
import "./Library.scss";

const Library = () => {
    const { stateVideo, dispatchVideo } = useVideo();
    const { playlists } = stateVideo;

    return (
        <div className="videos">
            {playlists.length !== 0 ? (
                playlists.map((playlist, index) => (
                    <PlaylistCard
                        playlist={playlist}
                        key={index}
                        dispatchVideo={dispatchVideo}
                    />
                ))
            ) : (
                <div className="regret">Sorry no playlists created by you!</div>
            )}
        </div>
    );
};

export default Library;
