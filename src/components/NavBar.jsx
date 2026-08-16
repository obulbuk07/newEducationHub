import { Link } from "react-router-dom"
import ifnmuLogo from "../img/ifnmu_logo.png"
import eduhubLogo from "../img/edu_hub_logo.png"

const items = ["Home", "Dentistry", "Farmacy", "Nursering"]

function NavBar({activeContent, onContentChange}){
    return(
        <div className="w-4/4 shadow-xl flex items-center justify-between z-150 bg-white px-8 py-2 fixed" >
            <img className="w-10" src={eduhubLogo} alt="" />
            <div className="flex gap-5 ">
                {items.map(item => (
                    <button
                        key={item}
                        onClick={() => onContentChange(item)}
                        className={ ` rounded-xl px-3 py-1 hover:underline  transition-colors duration-300 ease-in-out ${ 
                            activeContent === item
                                ? "bg-green-500  text-white"
                                : "bg-white text-black"
                        } `}
                    >
                        {item}
                    </button>
                
                ))}
                <Link className="hover:underline py-1" to="/guide">Student Guide</Link>
            </div>
            <img className="h-10" src={ifnmuLogo} alt="" />
        </div>
    )
}
export default NavBar