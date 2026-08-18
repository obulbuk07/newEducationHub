import BigLogo from "../img/big_logo.jpg"

function StudentGuideBanner(){
    return(
        <div className=" bg-white rounded-xl shadow-xl flex flex-row-reverse p-4 gap-10 items-center justify-between mx-auto w-3/4 mb-8 mt-30">
            <img className="w-80" src={BigLogo} alt="" />
            <p className="text-xl pr-10" ><span className="text-[#871c29] font-bold text-xl" >Student Guide</span> стане вашим надійним навігатором у навчанні. Проєкт створено для першокурсників, які тільки знайомляться з життям у нашому фаховому медичному коледжі чи Університеті, щоб допомогти їм легко та швидко адаптуватися до нового середовища.

Також путівник буде корисним і для студентів старших курсів, які прагнуть дізнатися більше про сервіси, ресурси та додаткові можливості, що надає наш заклад.</p>
        </div>
    )
}
export default StudentGuideBanner;