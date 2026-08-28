import umsaLogo from "../img/umsa.png"
import StudentGuideButton from "./StudentGuideButton"
function Umsa(){
    return(
        <div className="col-span-2 flex gap-4 p-4 rounded-xl shadow-xl" >
            <img className="w-1/5 object-contain" src={umsaLogo} alt="" />
            <div className=" w-3/4 py-4 flex flex-col justify-around">
                <h2 className="text-xl w-4/4" >Громадська організація “Українська медична студентська асоціація” (УМСА)</h2>
                <p>Є частиною Міжнародної федерації асоціацій студентів-медиків (IFMSA)</p>
                <p>Запрошуємо тебе стати частинкою нашої сім'ї!</p>
                <div className="flex gap-2 w-4/4" >
                    <StudentGuideButton className="w-4/4" link="https://uadd.me/ifnmu_parlament" linkText="Детальніше" />
                    <StudentGuideButton className="w-4/4" link="https://www.instagram.com/ifnmu_live/" linkText="Instagram" />
                </div>
            </div>
            
        </div>
    )
}
export default Umsa