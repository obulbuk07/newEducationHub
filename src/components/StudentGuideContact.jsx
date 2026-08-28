import contact1 from "../img/main_contacts1.jpg"
import contact2 from "../img/main_contacts2.jpg"
import contact3 from "../img/main_contacts3.jpg"
import contact4 from "../img/main_contacts4.jpg"
import contact5 from "../img/main_contacts5.jpg"
import contact6 from "../img/main_contacts6.jpg"

function StudentGuideContact(){
    return(
        <div className="grid grid-cols-2 gap-6 w-3/5 pt-12 mt-20 mx-auto" >
            <h2 className="col-span-2 text-3xl" >Контакти</h2>
            <img className="rounded-xl shadow-xl"  src={contact1} alt="" />
            <img className="rounded-xl shadow-xl"  src={contact2} alt="" />
            <img className="rounded-xl shadow-xl"  src={contact3} alt="" />
            <img className="rounded-xl shadow-xl"  src={contact4} alt="" />
            <img className="rounded-xl shadow-xl"  src={contact5} alt="" />
            <img className="rounded-xl shadow-xl"  src={contact6} alt="" />
        </div>
    )
}
export default StudentGuideContact