import Banner from "./Banner"
import Stat from "./Stat"
import Owner from "./Owner"
import HomeInfo from "./HomeInfo"
function Home(){
    return(
        <div className="pt-40 w-3/4 mx-auto">
            <Banner/>
            <Stat/>
            <Owner/>
            <HomeInfo/>
        </div>
    )
}
export default Home