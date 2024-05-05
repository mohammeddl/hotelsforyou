import Discover from "../components/Home/Discover";
import Search from "../components/Home/Search";
import Destination from "../components/Home/Destination";
import Rooms from "../components/Home/Rooms";
import Banner from "../components/Home/Banner";

function Home() {
  return (
    <>
    <Search/>
    <Banner/>
    <Discover/>
    <Destination/>
    <Rooms/>
    </>
  );
}

export default Home;
