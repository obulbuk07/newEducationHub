import SimpleLocation from "./SimpleLocation";
import library from "../img/library.jpg"
import StudentGuideButton from "./StudentGuideButton";

function Library(){
    return(
        <div className="flex flex-col">
            <SimpleLocation
                img={library} 
                title="Бібліотека"
                info="Університетська бібліотека — це зручний простір для навчання, пошуку літератури та підготовки до занять. Тут ви знайдете багатий фонд навчальних посібників, доступ до електронних баз даних та затишні читальні зали з Wi-Fi. Нагадуємо: для отримання книг та користування читальним залом необхідно мати при собі студентський квиток та вчасно повертати взяті матеріали."
                location="м.Івано-Франківськ, вул. Галицька, 7a."
                textlink="Дивитися на GoogleMaps"
                link="https://www.google.com/maps/place/%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%86%D0%A4%D0%9D%D0%9C%D0%A3/@48.9188515,24.6991442,16z/data=!4m6!3m5!1s0x4730c12100ef9ea5:0x8884924617a6c63a!8m2!3d48.9220073!4d24.7086888!16s%2Fg%2F11q94q8d3h?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <StudentGuideButton link="#" linkText="Сайт бібліотеки" />
        </div>
    )
}
export default Library;