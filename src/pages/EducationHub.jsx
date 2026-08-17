import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Home from "../components/Home"
import EducationPage from "../components/EducationPage"
import { useState, useEffect } from "react"

const CONTENTS = {
    HOME: "Головна",
    DENTISTRY: "Стоматологія",
    FARMACY: "Фармація",
    NURSERING: "Медсестринство",
}

const MODE_TO_CONTENT = {
    dentistry: CONTENTS.DENTISTRY,
    farmacy: CONTENTS.FARMACY,
    nursering: CONTENTS.NURSERING,
}

function EducationHub(){
    const [activeContent, setActiveContent] = useState(() => {
        const savedMode = localStorage.getItem("mode")
        return MODE_TO_CONTENT[savedMode] || CONTENTS.HOME
    })

    const handleContentChange = (content) => {
        setActiveContent(content)

        const modeKey = Object.keys(MODE_TO_CONTENT).find(
            key => MODE_TO_CONTENT[key] === content
        )
        if (modeKey) {
            localStorage.setItem("mode", modeKey)
        } else {
            localStorage.removeItem("mode")
        }
    }

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
            <NavBar activeContent={activeContent} onContentChange={handleContentChange} />
            <div>
                {renderContent()}
            </div>
            <Footer activeContent={activeContent} onContentChange={handleContentChange} />
        </div>
    )
}
export default EducationHub