import EducationCard from "./EducationCard"
import SearchBar from "./SearchBar"
import pag from "../img/photo4.jpg"
import nurseringPages from "../result.json"
import farmacyPages from "../result.json"
import dentistryPages from "../result.json"


function EducationPage({content}){

    const name = content
    let data = null
    if(name === 'dentistry'){
        data = dentistryPages;
    }else if(name === "nursering"){
        data = nurseringPages;
    }else if(name === "farmacy"){
        data = farmacyPages;
    }

    return(
        <div className="w-3/4 pt-40 mx-auto" >
            <div className="w-4/4 " >
                <h1 className="text-center text-3xl" >{name}</h1>
                <p className="text-xl text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut nostrum inventore quam blanditiis atque explicabo ducimus, ullam possimus. Sunt?</p>
            </div>
            <SearchBar/>
            <div className="grid grid-cols-4 gap-8">
                {data.map(page => (
                    <EducationCard
                        img = {pag}
                        title={page.title}
                        index = {page.index}
                        elements = {page.elements}
                    />
                ))}
            </div>
        </div>
    )
}
export default EducationPage