import Target from "./Target"
import StudentGuideBlock from "./StudentGuideBlock"
import Contact from "./Contact"

function HomeInfo(){
    return(
        <div className="grid grid-cols-5 gap-6 mt-30" >
            <Target/>
            <Contact/>
            <StudentGuideBlock/>
        </div>
    )
}
export default HomeInfo