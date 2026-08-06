import EducationCard from "./EducationCard"
function EducationPage({content}){

    const name = content
    return(
        <div>
            <h1>{name}</h1>
            <EducationCard/>
        </div>
    )
}
export default EducationPage