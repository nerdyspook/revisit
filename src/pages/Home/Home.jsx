import VideoCard from "../../components/VideoCard/VideoCard";
import Categories from "../../components/Categories/Categories";
import "./Home.scss";
import { useEffect, useState } from "react";
import { loadVideos } from "../../utilities/Videos/load-videos";
import { useVideo } from "../../context/VideoContext";

const Home = () => {
    const {
        stateVideo: { loading, videos },
        dispatchVideo,
    } = useVideo();

    const [filterCategory, setFilterCategory] = useState("All");

    let filteredVideos;

    filterCategory === "All"
        ? (filteredVideos = videos)
        : (filteredVideos = videos.filter(
              (item) =>
                  item.category === filterCategory.toLowerCase() ||
                  item.continent === filterCategory.toLowerCase()
          ));

    useEffect(() => {
        loadVideos(dispatchVideo);
    }, []);

    return (
        <div className="home">
            <Categories filter={setFilterCategory} category={filterCategory} />
            <div className="banner">
                <div className="banner__text">Feed your wanderlust</div>
            </div>
            <div className="videos">
                {filteredVideos.map((item, index) => (
                    <div className="videos__wrap" key={index}>
                        <VideoCard
                            key={index}
                            video={item}
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
        </div>
    );
};

export default Home;
