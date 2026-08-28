import StudentGuideButton from "./StudentGuideButton";
import parlament from "../img/student_parlament.jpg"

function StudParlament(){
    return(
        <div className=" flex gap-4 p-4 rounded-xl shadow-xl" >
            <img className="w-1/5 object-contain" src={parlament} alt="" />
            <div className=" w-3/4 py-4 flex flex-col justify-around">
                <h2 className="text-xl w-4/4" >Студентський парламент ІФНМУ</h2>
                <div className="flex gap-2 w-4/4" >
                    <StudentGuideButton className="w-4/4" link="https://uadd.me/ifnmu_parlament" linkText="Детальніше" />
                    <StudentGuideButton className="w-4/4" link="https://www.instagram.com/ifnmu_live/" linkText="Instagram" />
                </div>
            </div>
            
        </div>
    )

}
export default StudParlament