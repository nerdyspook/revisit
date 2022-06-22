import React from "react";
import { Link, useParams } from "react-router-dom";
import { useVideo } from "../../context/VideoContext";
import VideoCard from "../../components/VideoCard/VideoCard";

const SinglePlaylist = () => {
    const {
        stateVideo: { playlists },
    } = useVideo();

    const { playlistId } = useParams();

    const playlist = playlists.find((playlist) => playlist._id === playlistId);

    return (
        <div className="videos">
            {playlists.length ? (
                playlist.videos.map((video, index) => (
                    <div className="videos__wrap" key={index}>
                        <VideoCard
                            key={index}
                            video={video}
                            id={video._id}
                            thumbnail={video.thumbnail}
                            title={video.title}
                            creator={video.creator}
                            length={video.videoLength}
                            views={video.views}
                            icon={video.channelIcon}
                        />
                    </div>
                ))
            ) : (
                <div className="regret">
                    Nothing here
                    <Link to="/">
                        <div className="btn"> GO back home</div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SinglePlaylist;
