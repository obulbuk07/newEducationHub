import CorpusesGallery from "./CorpusesGallery"
import Corpuse from "./Corpuse"
const corpuses = [
    {
        name: "Корпус загальноосвітніх дисциплін (вул. С.Бандери, 77)",
        link: "https://goo.gl/maps/PuNSyeGgJ2bfMasM9"
    },
    {
        name: "Фізична культура (вул. Целевича, 34)",
        link: "https://goo.gl/maps/NrN3JMdG4JDyLD6S8"
    },
    {
        name: "Центральний корпус, дирекція коледжу (вул. Галицька, 2)",
        link: "https://goo.gl/maps/C6EGSBn3oBHrSqHH7"
    },
    {
        name: "Морфологічний корпус ІФНМУ (майдан Шептицького, 21)",
        link: "https://goo.gl/maps/GrxcddbsQ4Sk9ZoT7"
    },
    {
        name: "Кафедра біологічної та медичної хімії імені академіка Г.О. Бабенка (вул. Гетьмана Мазепи, 34)",
        link: "https://goo.gl/maps/xR2ETfubictHYZB36"
    },
    {
        name: "Кафедра внутрішньої медицини №2 та медсестринства, кафедра соціальної медицини та громадського здоров'я (вул. Гетьмана Мазепи, 114)",
        link: "https://goo.gl/maps/NUwe47xBcY9PoxFV6"
    },
    {
        name: "Кафедра гігієни та екології (вулиця Федьковича, 91)",
        link: "https://goo.gl/maps/PSm2rw9JC4u7g7nf8"
    },
    {
        name: "Стоматологічний корпус (вулиця Незалежності, 17)",
        link: "https://goo.gl/maps/BC9rRxaG2AJu5Xa46"
    },
    {
        name: "Фізіологічний корпус (вул. Грушевського, 7)",
        link: "https://goo.gl/maps/9q3wW39Si2NdpVZx6"
    },
    {
        name: "Фармацевтичний факультет (вул. Галицька, 124 К)",
        link: "https://goo.gl/maps/gZL2rGBv5FLTFrbA7"
    },
    {
        name: "Кафедра медичної інформатики, медичної та біологічної фізики (Фортечний провулок, 4)",
        link: "https://goo.gl/maps/Uuedr11ZeZ5MuGcX8"
    },
    {
        name: "Івано-Франківська обласна клінічна лікарня (вулиця Федьковича, 91)",
        link: "https://goo.gl/maps/RMq4kLyyyXgiqiiz9"
    },
    {
        name: "Кафедра мовознавства.Корпус на вул. Бандери, 79А (секція англійської мови)",
        link: "https://goo.gl/maps/Te8mwKzYbhDszNs87"
    },
    {
        name: "Кафедра мовознавства.Корпус на вул. Тролейбусна, 10 (секція латинської мови)",
        link: "https://goo.gl/maps/1uqCVe7MvKszVd1479"
    },
    {
        name: "Кафедра інфекційних хвороб та епідеміології (вул. Максимовича, 5-Б)",
        link: "https://goo.gl/maps/CvzxSQ8z46cryXWk9"
    },
]

function Corpuses(){
    return(
        <div>
            <h1 className="text-3xl text-center " >Corpuses</h1>
            <CorpusesGallery/>
            <div className="grid grid-cols-2 gap-3">
                {corpuses.map(corpuse => (
                    <Corpuse
                        name={corpuse.name}
                        link={corpuse.link}
                    />
                ))}
            </div>
        </div>
        
    )
}
export default Corpuses