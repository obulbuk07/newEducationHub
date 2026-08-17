import corpuselogo from "../img/corpuse_logo.png"
function Corpuse({name, link}){
    return(
        <div className="flex rounded gap-4 items-center border p-4 relative">
            <img className="w-20 h-20" src={corpuselogo} alt="" />
            <div className="flex flex-col items-start justify-center">
                <h2 className="w-80">{name}</h2>
            <   a className="border p-2 absolute bottom-2 right-2" href={link}>Google maps</a>
            </div>
            
        </div>
    )
}
export default Corpuse