import ifnmu from "../img/big_ifnmu_logo.png"

function Footer({activeContent, onContentChange}){
    return(
        <footer className="w-4/4 mt-30 p-0" >
            <div className="w-4/4  grid grid-cols-4 bg-black text-white gap-10 py-16 px-20">
            <div className="flex flex-col gap-4">
                <img className="h-20" src={ifnmu} alt="" />
                <p >м. Івано-Франківськ, вул. Галицька, 2,</p>
                <p>+38(0342)53-32-95</p>
                <p className="border-b-2 border-green-500 pb-4" >ifnmu@ifnmu.edu.ua</p>
            </div>
            <div className="flex flex-col gap-4 pl-10" >
                <h1 className="text-2xl border-b-2 border-red-500 pb-4" >Соціальні мережі</h1>
                <a className="hover:underline" href="https://www.instagram.com/collegeifnmu/">Instagram</a>
                <a className="hover:underline" href="https://www.facebook.com/collegeifnmu/">Facebook</a>
                <a className="hover:underline" href="https://t.me/collegeifnmu">Telegram</a>
                <a className="hover:underline" href="https://youtu.be/2pyi5pXK-Pw">Youtube</a>
            </div>
            <div className="flex flex-col gap-4 pl-10" >
                <h1 className="text-2xl border-b-2 border-red-500 pb-4" >Навігація по сайту</h1>
                <p>Головна</p>
                <p>Медсестринство</p>
                <p>Стоматологія</p>
                <p>Фармація</p>
                <p>Student Guide</p>
            </div>
            <div className="flex flex-col gap-4 pl-10" >
                <h1 className="text-2xl border-b-2 border-red-500 pb-4" >Додаткові посилання</h1>
                <p>IFNMU</p>
                <p>Authors</p>
                <p>Collegeifnmu</p>
                <p>About</p>
            </div>
            </div>
            
            <div className="col-span-4 text-center bg-blue-600 text-white py-4" >
                <p>
                    @2026 Oleksandr Bulbuk - All rights reserver
                </p>
            </div>
        </footer>
    )
}
export default Footer