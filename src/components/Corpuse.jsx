import corpuselogo from "../img/corpuse_logo.png"
import StudentGuideButton from "./StudentGuideButton"

function Corpuse({name, link}){
    return(
        <div className="flex rounded-xl shadow gap-4 items-center border p-4 relative">
            <img className="w-20 h-20" src={corpuselogo} alt="" />
            <div className="flex flex-col items-start justify-center">
                <h2 className="w-70">{name}</h2>
            
                <div className="absolute bottom-5 right-2">
                    <StudentGuideButton link={link} linkText="Google maps"/>
                </div>
            </div>
            
        </div>
    )
}
export default Corpuse