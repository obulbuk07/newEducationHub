import { Link } from "react-router-dom"
import studentguide from "../img/student_guide_logo.jpg"

function StudentGuideBlock(){
    return(
        <div className="grid grid-cols-5 gap-4 col-span-2 bg-red-400 p-4 rounded-xl shadow-xl text-white" >
            <img className="bg-white w-40 h-40 rounded-xl p-2 col-span-2  " src={studentguide} alt="" />
            <div className="col-span-3" >
                <h2 className="col-span-3 text-xl pb-3" >Student Guide</h2>
                <p className="col-span-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, unde!</p>
            </div>
           
            <Link className="col-span-5 text-center border-3 rounded-xl border-white flex items-center justify-center text-xl py-2 hover:bg-white hover:text-red-400 transition" to="/guide">Перейти</Link>
        </div>
    )
}
export default StudentGuideBlock