import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Home from "../components/Home"
import EducationPage from "../components/EducationPage"

function EducationHub(){
    return(
        <div>
            <NavBar/>
            <div>
                <Home/>
                <EducationPage/>
            </div>
            <Footer/>
        </div>
    )
}
export default EducationHub