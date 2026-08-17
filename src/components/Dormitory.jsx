import dormintoryLogo from "../img/dormintory_logo.png"

function Dormintory({location, link}){
    return(
        <div className="border p-4 grid grid-cols-2">
            <img className="w-10 row-span-2" src={dormintoryLogo} alt="" />
            <p className="" >{location}</p>
            <a className="border py-2 px-4 " href={link}>Дивитися на GoogleMaps</a>
        </div>
    )
}
export default Dormintory