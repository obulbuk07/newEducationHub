import navlogo from "../img/navbar_logo.jpg"
import ifnmulogo from "../img/ifnmu_logo.png"
import { Link } from "react-router-dom";

function StudentGuideNavBar(){
    return(
        <div className="flex  w-12/12 mb-8 z-150  gap-8 mx-auto py-2 shadow-md fixed top-0 bg-white px-10 justify-between items-center">
            <div className="flex gap-2">
                <img className="w-10 h-10" src={navlogo} alt="" /> 
                <p className="text-3xl pl-2" >Student Guide</p>
            </div>
            <div className="flex gap-4 text-">
                <a className="hover:underline" href="https://www.ifnmu.edu.ua/">ІФНМУ</a>
                <a className="hover:underline" href="https://www.ifnmu.edu.ua/professional-medical-college-ifnmu-2/">Коледж ІФНМУ</a>
                <a className="hover:underline" href="https://www.ifnmu.edu.ua/">Оголошення</a>
                <a className="hover:underline" href="https://www.ifnmu.edu.ua/class-schedule/">Розклад занять</a>
                <a className="hover:underline" href="https://www.ifnmu.edu.ua/wp-content/uploads/2025/03/%D0%A0%D0%B5%D0%BA%D0%B2%D1%96%D0%B7%D0%B8%D1%82%D0%B8-%D0%86%D0%A4%D0%9D%D0%9C%D0%A3.pdf">Реквізити для оплати</a>
                <a className="hover:underline" href="https://www.ifnmu.edu.ua/home/public-information/amount-of-fees-for-education-training-retraining-qualification-improvement-of-education-seekers/">Розмір плати за навчання</a>
                <Link className="hover:underline" to="/" >Education Hub</Link>
            </div>
            <img className=" h-8" src={ifnmulogo} alt="" />
        </div>
    )
}
export default StudentGuideNavBar;