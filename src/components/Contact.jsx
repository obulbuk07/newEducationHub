function Contact(){
    return(
        <div className="col-span-3 bg-blue-400 row-span-2 rounded-xl shadow-xl text-white pt-4">
             <form className="flex flex-col gap-2 p-4 md:w-2/3 w-3/3 mx-auto  " >
                <h1 className="text-2xl text-center mb-6">Маєш зауваження або пропозиції? Напиши нам!</h1>
                <label htmlFor="name">Ім'я</label>
                <input className="  border-1 focus:shadow shadow-white focus:outline-none focus:border-1 rounded-full px-4 py-2 mb-4 w-3/3" id="name" type="text" />
                <label htmlFor="email">Ел. Пошта</label>
                <input className="  border-1 focus:shadow shadow-white focus:outline-none focus:border-1 rounded-full px-4 py-2 mb-4 w-3/3" id="email" type="text" />
                <label htmlFor="messege">Повідомлення</label>
                <textarea className="  border-1 focus:border-1 focus:shadow shadow-white focus:outline-none rounded px-4 py-2 w-3/3 h-40 mb-4" name="" id=""></textarea>
                <button className=" rounded-xl w-2/3 p-2 w-3/3 border-3 border-white hover:bg-white hover:text-blue-400 transition">Send</button>
            </form>
        </div>
    )
}
export default Contact