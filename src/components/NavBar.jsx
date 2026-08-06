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
        </div>
    )
}
export default NavBar