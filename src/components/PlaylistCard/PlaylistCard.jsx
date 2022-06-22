import React from "react";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import "./PlaylistCard.scss";
import { removePlaylist } from "../../utilities/Playlist/remove-playlist";
import { useNavigate } from "react-router-dom";

const PlaylistCard = ({ playlist, dispatchVideo }) => {
    const navigate = useNavigate();

    return (
        <div
            className="playlist__card"
            onClick={() => navigate(`${playlist._id}`)}
        >
            <div className="playlist__card__top">
                <div
                    className="playlist__img"
                    style={{
                        background: `url(${
                            playlist.videos.length
                                ? playlist.videos[0].thumbnail
                                : "https://i.ibb.co/k6vV6Jm/empty.png"
                        })`,
                        backgroundSize: "contain",
                    }}
                >
                    <div className="video_count">
                        <span className="count">{playlist.videos.length}</span>
                        <RiPlayList2Fill />
                    </div>
                </div>
            </div>
            <div className="playlist__card__bottom">
                <div className="details">
                    <div className="title">{playlist.title}</div>
                    <div className="view__playlist">VIEW PLAYLIST</div>
                </div>
                <div className="delete">
                    <MdDelete
                        className="icon"
                        onClick={() =>
                            removePlaylist(playlist._id, dispatchVideo)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default PlaylistCard;
