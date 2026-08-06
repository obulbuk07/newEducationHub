import { Link } from "react-router-dom"

const items = ["Home", "Dentistry", "Farmacy", "Nursering"]

function NavBar({activeContent, onContentChange}){
    return(
        <div>
            {items.map(item => (
                <button
                    key={item}
                    onClick={() => onContentChange(item)}
                >
                    {item}
                </button>
                
            ))}
            <Link to="/guide">Student Guide</Link>
        </div>
    )
}
export default NavBar