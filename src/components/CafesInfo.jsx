import cafe1 from "../img/cafe1.jpg"
import cafe2 from "../img/cafe2.jpg"
import cafe3 from "../img/cafe3.jpg"
import StudentGuideButton from "./StudentGuideButton"

const cafes = [
    {
        img: cafe1,
        name: "Кафе «Смайл», (вул. Грушевського, 2)",
        link: "https://goo.gl/maps/jKkQYDp4Bge7jwYA8",
    },
    {
        img: cafe2,
        name: "Кафе «Академка», (вул. Низова, З б)",
        link: "https://goo.gl/maps/jNFXbE9sdZJtKfQj9",
    },
    {
        img: cafe3,
        name: "Кафе фармацевтичного корпусу, (вул. Галицька, 124 К)",
        link: "https://goo.gl/maps/gZL2rGBv5FLTFrbA7",
    },
]

function CafesInfo(){
    return(
        <div className="flex gap-6" >
            {cafes.map(cafe => (
                <div className="shadow rounded-xl p-4 flex flex-col gap-2 justify-between" >
                    <img className="rounded"  src={cafe.img} alt="" />
                    <div className="flex flex-col gap-4 justify-between" >
                        <h1>{cafe.name}</h1>
                        <StudentGuideButton link={cafe.link} linkText="Google maps" />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CafesInfo