import Dormintory from "./Dormitory"

import dormintory from "../img/dormintory.jpg"

const dorms = [
    {
        location: "Гуртожиток №1-2 (вул. Тролейбусна, 10)",
        link: "https://goo.gl/maps/7Ro1Ww2cHSMbrHFb7"
    },
    {
        location: "Гуртожиток №3 (вул. Мазепи, 171)",
        link: "https://goo.gl/maps/dz4c5a5eiypmttUn6"
    },
    {
        location: "Гуртожиток №4 (Південний бульвар, 32)",
        link: "https://goo.gl/maps/DrxLKa2mY4fuUMha8"
    },
]
function Dormintoris(){
    return(
        <div >
            <h1 className="text-3xl my-4">Гуртожитки</h1>
            
            <div className="grid grid-cols-2 gap-4">
                <img className="rounded row-span-3" src={dormintory} alt="" />
                
                {dorms.map(dorm => (
                    <Dormintory
                        location={dorm.location}
                        link={dorm.link}
                    />
                ))}
                
            </div>
            
        </div>
    )
}
export default Dormintoris