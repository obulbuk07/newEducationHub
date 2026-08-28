import StudentGuideButton from "./StudentGuideButton";

function SimpleStudentOrg({img, name, link, textLink}){
    return(
        <div className=" flex gap-4 p-4 rounded-xl shadow-xl" >
            <img className="w-1/5 object-contain" src={img} alt="" />
            <div className=" w-3/4 py-4 flex flex-col justify-around">
                <h2 className="text-xl w-4/4" >{name}</h2>
                <StudentGuideButton className="w-4/4" link={link} linkText={textLink} />
            </div>
            
        </div>
    )

}
export default SimpleStudentOrg