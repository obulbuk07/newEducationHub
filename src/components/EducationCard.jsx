function EducationCard({img, title, info}){
    return(
        <div className="border p-4 rounded-xl flex flex-col gap-2 shadow-xl overflow-hidden  justify-between ">
            <div className="flex flex-col gap-4">
                <img className="w-4/4 rounded" src={img} alt="" />
                <h3 className="text-xl" >{title}</h3>
            </div>
            
            <div className="flex justify-between flex-col">
                <p className="w-4/4 break-words">{info}</p>
                <button className="border-2 border-blue-500 rounded-xl py-2 px-5 mt-4 hover:bg-blue-500  hover:text-white transition" >more</button>
            </div>
            
        </div>
    )
}
export default EducationCard