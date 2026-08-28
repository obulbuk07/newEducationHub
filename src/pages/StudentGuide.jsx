import { Link } from "react-router-dom"
import StudentGuideBanner from "@/components/StudentGuideBanner"
import StudentGuideNavBar from "@/components/StudentGuideNavBar"
import Locations from "@/components/Locations"
import Footer from "@/components/Footer"
import StudentGuideContent from "@/components/StudentGuideContent"
import StudentOrgs from "@/components/StudentOrgs"
import StudentGuideContact from "@/components/StudentGuideContact"

function StudentGuide(){
    return(
        <div>
            
            <StudentGuideNavBar/>
            <StudentGuideBanner/>
            {/*<Important
                title="Вартість, правила поселення і проживання."
                info="Деталі про вартість, правила поселення і проживання у гуртожитках читайте на офіційній сторінці студентського профспілкового комітету."
                link="https://www.ifnmu.edu.ua/home/public-information/student-trade-union/"
            />*/}
            <Locations/>
            <StudentGuideContent/>
            <StudentOrgs/>
            <StudentGuideContact/>
            <Footer/>
        </div>
    )
}
export default StudentGuide