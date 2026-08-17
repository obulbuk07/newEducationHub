import point from "../img/point.png"
import StudentGuideButton from "./StudentGuideButton";

function SimpleLocation({img, title, info, location, textlink, link}){
    return(
        <div className="w-4/4 mx-auto justify-center flex mt-10 gap-4 pt-4">
            <img className="w-4/9 rounded shadow-xl" src={img} alt="" />
            <div className="flex flex-col gap-4 justify-around">
                <h1 className="text-2xl">{title}</h1>
                <p>{info}</p>
                <div className="flex gap-2 justify items-center">
                    <img src={point} className="w-10" alt="loc" />
                    <p>{location}</p>
                </div>
                <StudentGuideButton link={link} linkText={textlink} />
            </div>
        </div>
    )
}
export default SimpleLocation;