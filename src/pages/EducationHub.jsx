import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Home from "../components/Home"
import EducationPage from "../components/EducationPage"
import { useState } from "react"

const CONTENTS = {
    HOME: "Головна",
    DENTISTRY: "Стоматологія",
    FARMACY: "Фармація",
    NURSERING: "Медсестринство",
}

function EducationHub(){
    const [activeContent, setActiveContent] = useState(CONTENTS.HOME)

    const renderContent = () => {
        switch(activeContent){
            case CONTENTS.HOME:
                return <Home/>;
            case CONTENTS.DENTISTRY:
                return <EducationPage content="dentistry"/>;
            case CONTENTS.FARMACY:
                return <EducationPage content="farmacy"/>;
            case CONTENTS.NURSERING:
                return <EducationPage content="nursering"/>;
        }
    } 

    return(
        <div>
            <NavBar activeContent={activeContent} onContentChange={setActiveContent} />
            <div>
                {renderContent()}
            </div>
            <Footer activeContent={activeContent} onContentChange={setActiveContent} />
        </div>
    )
}
export default EducationHub