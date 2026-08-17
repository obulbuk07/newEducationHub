import LocationsBar from "./LocationsBar"
import SimpleLocation from "./SimpleLocation";
import Dormintoris from "./Dormintoris";
import Corpuses from "./Corpuses";
import Library from "./Library";

import sport from "../img/sport_compleks.jpg"
import clinic from "../img/clinic.jpg"

const locations = [
    {
        img: sport, 
        title: "Спортивний комплекс",
        info: "Спортивний комплекс Університету запрошує всіх студентів для тренувань, підтримання форми та активного відпочинку. У нас доступні сучасні тренажерні зали, секції з різних видів спорту та майданчики для командних ігор. Нагадуємо: відвідування занять можливе за наявності спортивної форми, а для зарахування норм із фізичного виховання необхідно регулярно відвідувати обрану секцію.",
        location: "м.Івано-Франківськ, вул. Целевича, 34",
        textlink: "Дивитися на GoogleMaps",
        link: "#"
    },
    {
        img: clinic, 
        title: "Університетська клініка",
        info: "Отримати якісну медичну допомогу та консультації фахівців можна в нашій Університетській клініці, де працюють досвідчені лікарі та використовується сучасне обладнання. Нагадуємо: щоб відпрацювати пропущені через хворобу заняття, студент повинен надати офіційну медичну довідку, видану або завірену нашою клінікою.",
        location: "м.Івано-Франківськ, вул. Короля Данила, 15",
        textlink: "Дивитися на GoogleMaps",
        link: "https://goo.gl/maps/UMmuVKSz8ZWVjN7V7"
    },
]

function Locations(){
    return(
        <div className="w-3/4 mx-auto mt-20">
            <h1 className="text-4xl text-center" >Локації університету</h1>
            <p className="text-center py-4">Choose what you need</p>
            <LocationsBar/>
            {locations.map(location => (
                <SimpleLocation
                    img={location.img}
                    title={location.title}
                    info={location.info}
                    location={location.location}
                    textlink={location.textlink}
                    link={location.link}
                />
            ))}
            <Library/>
            <Dormintoris/>
            <Corpuses/>
        </div>
    )
}
export default Locations;