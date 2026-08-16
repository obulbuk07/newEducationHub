import { Link } from "react-router-dom"
import EduHubPageContent from "@/components/EduHubPageContent"
function StudentGuide(){
    return(
        <div>
            <h1 className="text-3xl" >StudentGuide</h1>
            <Link to="/">Education Hub</Link>
            <EduHubPageContent/>
        </div>
    )
}
export default StudentGuide