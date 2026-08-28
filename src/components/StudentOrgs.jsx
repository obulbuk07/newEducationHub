import studentOrgsLogo from "../img/student_org.PNG"
import cosmetologyStudents from "../img/cosmetology_students.jpg"
import paramedic from "../img/students_paramedic.jpg"
import parlament from "../img/student_parlament.jpg"
import snt from "../img/snt.jpg"
import emsa from "../img/emsa.jpg"
import reabilitation from "../img/reabilitation_students.jpg"
import farmacy from "../img/farmacy_students.PNG"
import profkom from "../img/profkom.jpg"
import studrada from "../img/studrada.jpg"
import english from "../img/english.jpg"
import dentistry_students from "../img/dentistry_students.png"
import prosvita from "../img/prosvita.jpg"

import SimpleStudentOrg from "./SimpleStudentOrg"
import StudParlament from "./StudParlament"
import Umsa from "./Umsa"



const studentOrgs = [
    {
        img: cosmetologyStudents,
        name:"Асоціація студентів-косметологів",
        link:"https://www.instagram.com/cosmetologists_ifnmu?igsh=MXZycDF5MjVsM2V2aA==",
        textLink: "Instagram",
    },
    {
        img: paramedic,
        name:"Асоціація парамедиків ",
        link:"https://www.instagram.com/paramedics.ifnmu?igsh=bDJiaXBteHAzZHdv",
        textLink: "Instagram",
    },
    {
        img: reabilitation,
        name:"Студентська Асоціація Фахівців з Реабілітаці",
        link:"https://www.instagram.com/sars.ifnmu?igsh=MXhvcWJ4OHJtbDBlNQ==",
        textLink: "Instagram",
    },
    {
        img: emsa,
        name:"Європейська Медична Студентська Асоціація (ЕМSА)",
        link:"https://www.instagram.com/emsa_ivano.frankivsk?igsh=MWRnbnhqZDQ4NncxdQ==",
        textLink: "Instagram",
    },
    {
        img: farmacy,
        name:"Асоціація студентів фармацевтів",
        link:"https://www.instagram.com/pharmacists_ifnmu?igsh=MTc2YTA3MTM4ejhuZQ==",
        textLink: "Instagram",
    },
    {
        img: profkom,
        name:"Студентський профком ІФНМУ",
        link:"https://www.ifnmu.edu.ua/home/public-information/student-trade-union/",
        textLink: "Детальніше",
    },
    {
        img: studrada,
        name:"Студентська Рада Коледжу",
        link:"https://www.instagram.com/stud.rada.med.college_ifnmu?igsh=b292NTJ0cnBsd2Fq",
        textLink: "Instagram",
    },
    {
        img: snt,
        name:"Студентське наукове товариство",
        link:"https://www.instagram.com/sss_ifnmu?igsh=MTc0N2VxeXVuc2Nicg==",
        textLink: "Детальніше",
    },
    {
        img: english,
        name:"Speaking Club Renovation",
        link:"https://www.instagram.com/speaking.club.renovation?igshid=MzRlODBiNWFlZA%3D%3D",
        textLink: "Детальніше",
    },
    {
        img: dentistry_students,
        name:"Асоціація Студентів Стоматологів (АСС ІФО)",
        link:"https://www.instagram.com/acc_ifo",
        textLink: "Детальніше",
    },
    {
        img: prosvita,
        name:"Просвіта ІФНМУ",
        link:"https://www.instagram.com/prosvita.ifnmu?igsh=MTd4OWE5dGdhY2ZiNQ==",
        textLink: "Детальніше",
    },
]
function StudentOrgs(){
    return(
        <div className="flex flex-col w-3/4 mx-auto">
            <h1 className="text-center text-3xl mt-20 mb-10" >Студентські організації</h1>
            <img className="w-2/4 mx-auto rounded-xl shadow" src={studentOrgsLogo} alt="" />
            <p className="mt-4 w-3/4 text-center mx-auto my-4 pt-4" >Шукаєш можливостей для особистого розвитку, лідерства та незабутніх спогадів? Приєднуйся до студентських організацій Університету! Тут ти зможеш зустріти нових друзів, займатися проєктами, організовувати заходи та впливати на життя університетського співтовариства. Реалізуй свої ідеї та створи свою незабутню студентську подорож разом з нами! Приєднуйся та почуй себе частиною незабутнього колективу.</p>
            <div className="grid grid-cols-2 gap-6 w-4/4 mx-auto mt-10" >
                {studentOrgs.map(studentOrg => (
                <SimpleStudentOrg
                    img={studentOrg.img}
                    name={studentOrg.name}
                    link={studentOrg.link}
                    textLink={studentOrg.textLink}
                />
                ))}
                <StudParlament/>
                <Umsa/>
            </div>
            
        </div>
    )
}
export default StudentOrgs