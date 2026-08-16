import { Link } from "react-router-dom"
function StudentGuide(){
    return(
        <div>
            <h1 className="text-3xl" >StudentGuide</h1>
            <Link to="/">Education Hub</Link>
        </div>
    )
}
export default StudentGuide