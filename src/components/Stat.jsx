function Stat(){
    return(
        <div className="w-4/4 grid grid-cols-3 gap-3" >
            <h1 className="col-span-3 text-center text-3xl pt-20" >Чого ми уже досягли?</h1>
            <p className="col-span-3 text-center py-5" >Кількість сторінок створена на сьогоднішній день</p>
            <div className="p-6 relative text-white w-4/4 rounded-xl bg-blue-400 shadow-xl">
                <h2 className="text-xl pb-2" >Медсестринство</h2>
                <p>Всього створено сторінок:</p>
                <p className="absolute bottom-8  text-xl right-8">112</p>
            </div>
            <div className="p-6 relative text-white w-4/4 rounded-xl bg-green-400 shadow-xl">
                <h2 className="text-xl pb-2" >Фармація</h2>
                <p>Всього створено сторінок:</p>
                <p className="absolute bottom-8  text-xl right-8">46</p>
            </div>
            <div className="p-6 relative text-white w-4/4 rounded-xl bg-red-400 shadow-xl">
                <h2 className="text-xl pb-2" >Стоматологія</h2>
                <p>Всього створено сторінок:</p>
                <p className="absolute bottom-8  text-xl right-8">34</p>
            </div>
            <div className="bg-gray-400 col-span-3 p-6 text-white rounded-xl shadow-xl flex justify-between" > 
                <h1>Сумарно:</h1>
                <p>1,4 ГБ</p>
            </div>
            
        </div>
    )
}
export default Stat;