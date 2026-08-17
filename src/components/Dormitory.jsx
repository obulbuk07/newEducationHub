import dormintoryLogo from "../img/dormintory_logo.png"
import StudentGuideButton from "./StudentGuideButton"

function Dormintory({location, link}){
    return(
        <div className="  rounded-xl shadow p-4 grid grid-cols-2">
            <img className="w-20 row-span-2" src={dormintoryLogo} alt="" />
            <p className="" >{location}</p>
            <StudentGuideButton link={link} linkText="Дивитись на гугл мапс"/>
        </div>
    )
}
export default Dormintory