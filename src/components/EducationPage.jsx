import EducationCard from "./EducationCard"
import SearchBar from "./SearchBar"
import page from "../img/photo4.jpg"

const pages = [
    {
        img: page,
        title: "Education Card",
        info: "Lorem impsum"
    },
    {
        img: page,
        title: "Education Card",
        info: "Lorem impsum"
    },
    {
        img: page,
        title: "Education Card",
        info: "Lorem impsum"
    },
    {
        img: page,
        title: "Education Card",
        info: "Lorem impsums gsdfs"
    },
    {
        img: page,
        title: "Education Card",
        info: "Lorem impsum"
    },
]

function EducationPage({content}){

    const name = content
    return(
        <div className="w-3/4 pt-40 mx-auto" >
            <div className="w-4/4 " >
                <h1 className="text-center text-3xl" >{name}</h1>
                <p className="text-xl text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut nostrum inventore quam blanditiis atque explicabo ducimus, ullam possimus. Sunt?</p>
            </div>
            <SearchBar/>
            <div className="grid grid-cols-4 gap-8">
                {pages.map(page => (
                    <EducationCard
                        img={page.img}
                        title={page.title}
                        info={page.info}
                    />
                ))}
            </div>
        </div>
    )
}
export default EducationPage