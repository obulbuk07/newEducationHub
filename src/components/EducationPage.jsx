import { useState, useMemo } from "react"
import EducationCard from "./EducationCard"
import SearchBar from "./SearchBar"
import pag from "../img/photo4.jpg"
import nurseringPages from "../nurseringPages.json"
import farmacyPages from "../farmacyPages.json"
import dentistryPages from "../dentistryPages.json"
import nurseringBanner from "../img/nurse_banner.jpg"
import farmacyBanner from "../img/farmacy_banner.jpg"
import dentistryBanner from "../img/dental_banner.jpg"

function EducationPage({content}){
    const name = content
    const [query, setQuery] = useState("")

    let data = []
    let bannerTitle = ""
    let bannerInfo = ""
    let bannerImg
    if(name === 'dentistry'){
        data = dentistryPages;
        bannerTitle = "Стоматологія"
        bannerInfo = "Для студентів спеціальності 221 Стоматологія ОПП «Стоматологія ортопедична» створені віртуальні навчальні блоки, на яких розміщені відео і алгоритми проведення різноманітних зуботехнічних маніпуляцій."
        bannerImg = dentistryBanner
    }else if(name === "nursering"){
        data = nurseringPages;
        bannerTitle = "Медсестринство"
        bannerInfo = "Для студентів спеціальності 223 Медсестринство створені віртуальні навчальні блоки, на яких розміщені відео і алгоритми проведення різноманітних маніпуляцій, тестові завдання, матеріали для підготовки до Крок М, посібники із тактичної медицини, блоки віртуальної симуляції та ін."
        bannerImg = nurseringBanner
    }else if(name === "farmacy"){
        data = farmacyPages;
        bannerTitle = "Фармація"
        bannerInfo = "Для студентів спеціальності 226 «Фармація, промислова фармація» ОПП «Фармація» створені віртуальні навчальні блоки, на яких розміщені відео і алгоритми виконання різноманітних практичних навичок."
        bannerImg = farmacyBanner
    }

    const filteredData = useMemo(() => {
        if (!query.trim()) return data
        return data.filter(page =>
            page.title?.toLowerCase().includes(query.toLowerCase())
        )
    }, [data, query])

    return(
        <div className="w-3/4 pt-40 mx-auto" >
            <div className="w-4/4 flex gap-4 " >
                <div className=" rounded w-2/4 p-2 flex flex-col justify-around" >
                    <h1 className="text-4xl pb-2" >{bannerTitle}</h1>
                    <p className="text-xl text-gray-600" >{bannerInfo}</p>
                </div>
                <img className="w-2/5 rounded shadow" src={bannerImg} alt="" />
            </div>
            <SearchBar query={query} onQueryChange={setQuery} />
            <div className="grid grid-cols-4 gap-8">
                {filteredData.map(page => (
                    <EducationCard
                        key={page.index}
                        img={pag}
                        title={page.title}
                        index={page.index}
                        elements={page.elements}
                        mode={name}
                    />
                ))}
            </div>
        </div>
    )
}
export default EducationPage