import StudentGuideButton from "./StudentGuideButton"
import grants from "../img/grants.jpg"
import mentalHealth from "../img/mental_health.jpg"

function StudentGuideContent(){
    return(
        <div className="grid grid-cols-2 gap-2 w-3/4 mx-auto mt-20" >
            <h1 className="col-span-2 text-3xl my-8">Додаткова інформація</h1>
            <div className="p-4 pt-6 flex flex-col gap-4 shadow-xl rounded-xl bg-white" >
                <img className="w-3/4 mx-auto" src={mentalHealth} alt="" />
                <p>Відчуваєте втому, стрес або потребуєте підтримки? Центр ментального здоров’я ІФНМУ завжди поруч, щоб вислухати, підтримати й допомогти. Звертайтеся – разом ми знайдемо рішення!</p>
                <StudentGuideButton link="https://www.ifnmu.edu.ua/center-for-mental-health-ifnmu/" linkText="Записатися на консульнтацію"/>
            </div>
            <div className="p-4 flex pt-6 flex-col gap-4 shadow-xl rounded-xl bg-white">
                <img className="w-3/4 mx-auto" src={grants} alt="" />
                <p>Ділимося цікавими можливостями від партнерів! Для студентів, викладачів, науковців та всіх активних людей нашої Університетської родини.</p>
                <StudentGuideButton link="https://en.wst.com.pl/education_offer/computer_science" linkText="Детальніше"/>
            </div>
            <div className="col-span-2 border h-30 bg-white shadow-xl rounded-xl p-4 relative" >
                <h1 className="text-2xl" >Деталі про вартість, правила поселення і проживання угуртожитках читайте на офіційній сторінці студентського профспілкового комітету</h1>
                <div className="absolute bottom-4 right-2" >
                    <StudentGuideButton  link="https://www.ifnmu.edu.ua/home/public-information/student-trade-union/" linkText="Детальніше" />
                </div>
                
            </div>
        </div>
    )
}
export default StudentGuideContent