import VideoCard from "../../components/VideoCard/VideoCard";
import Categories from "../../components/Categories/Categories";
import "./Home.scss";

const Home = () => {
    return (
        <div>
            <Categories />
            <div className="banner"></div>
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

export default Home;
