function LocationsBar(){
    return(
        <div className=" shadow-xl flex gap-4 text-lg border mx-auto justify-center py-2 px-4 w-4/5 rounded-full">
            <button className="text-white bg-[#871c29] px-3 py-1 rounded-full" >Бібліотека</button>
            <button className="hover:underline" >Спортивний комплекс</button>
            <button className="hover:underline" >Клініка</button>
            <button className="hover:underline" >Корпуси</button>
            <button className="hover:underline" >Студентські їдальні</button>
            <button className="hover:underline" >Гуртожитки</button>
            <button className="hover:underline" >Музей</button>
        </div>
    )
}
export default LocationsBar;