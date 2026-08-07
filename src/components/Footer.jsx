import ifnmu from "../img/big_ifnmu_logo.png"
function Footer(){
    return(
        <footer className="w-4/4 mt-30 p-0" >
            <div className="w-4/4  grid grid-cols-4 bg-black text-white gap-10 py-16 px-20">
            <div className="flex flex-col gap-4">
                <img className="h-20" src={ifnmu} alt="" />
                <p >location</p>
                <p>phone</p>
                <p className="border-b-2 border-green-500 pb-4" >gmail</p>
            </div>
            <div className="flex flex-col gap-4 pl-10" >
                <h1 className="text-2xl border-b-2 border-red-500 pb-4" >Social Network</h1>
                <p>Instagram</p>
                <p>Telegram</p>
                <p>YouTube</p>
                <p>Facebook</p>
            </div>
            <div className="flex flex-col gap-4 pl-10" >
                <h1 className="text-2xl border-b-2 border-red-500 pb-4" >WebSite</h1>
                <p>Home</p>
                <p>Nursering</p>
                <p>Dentistry</p>
                <p>Farmacy</p>
                <p>Student Guide</p>
            </div>
            <div className="flex flex-col gap-4 pl-10" >
                <h1 className="text-2xl border-b-2 border-red-500 pb-4" >Anouther links</h1>
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