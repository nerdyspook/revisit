import React, { useState } from "react";
import "./PlaylistModal.scss";
import { IoCloseCircle, IoAddOutline } from "react-icons/io5";
import { addVideoToPlaylist } from "../../utilities/Playlist/add-playlist-video";
import { useVideo } from "../../context/VideoContext";
import { addPlaylist } from "../../utilities/Playlist/add-playlist";
import { removeVideoFromPlaylist } from "../../utilities/Playlist/remove-playlist-video";

const PlaylistModal = ({ setShowPlaylistModal, videoDetails }) => {
    const {
        stateVideo: { playlists },
        dispatchVideo,
    } = useVideo();

    const [showInput, setShowInput] = useState(false);
    const [playlistTitle, setPlaylistTitle] = useState("");

    const inPlaylist = (videoId, playlistId, playlists) =>
        playlists
            ?.find((playlist) => playlist._id === playlistId)
            ?.videos.some((playlist) => playlist._id === videoId);

    const playlistCheckboxHandler = (event, playlistId) => {
        event.target.checked
            ? addVideoToPlaylist(playlistId, videoDetails, dispatchVideo)
            : removeVideoFromPlaylist(
                  videoDetails._id,
                  playlistId,
                  dispatchVideo
              );
    };

    return (
        <form className="playlist__modal-inside">
            <div className="top">
                <p>Save to...</p>
                <IoCloseCircle
                    className="modal-icon"
                    onClick={() => setShowPlaylistModal(false)}
                />
            </div>
            <div className="playlists">
                <ul>
                    {playlists.map((playlist) => (
                        <li key={playlist._id}>
                            <input
                                className="playlist-checkbox"
                                type="checkbox"
                                checked={inPlaylist(
                                    videoDetails._id,
                                    playlist._id,
                                    playlists
                                )}
                                name={playlist.title}
                                id={playlist._id}
                                onChange={(e) =>
                                    playlistCheckboxHandler(e, playlist._id)
                                }
                            />
                            <label htmlFor={playlist._id}>
                                {playlist.title}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {showInput ? (
                <div className="create bottom">
                    <input
                        type="text"
                        placeholder="Enter playlist name..."
                        value={playlistTitle}
                        onChange={(e) => setPlaylistTitle(e.target.value)}
                        required
                    />
                    <button
                        className="create__button btn"
                        onClick={() => {
                            addPlaylist(playlistTitle, dispatchVideo);
                            setPlaylistTitle("");
                            setShowInput(false);
                        }}
                    >
                        CREATE
                    </button>
                </div>
            ) : (
                <div className="bottom">
                    <IoAddOutline
                        className="modal-icon"
                        onClick={() => setShowInput(true)}
                    />
                    <p>Create new playlist</p>
                </div>
            )}
        </form>
    );
};

export default PlaylistModal;
