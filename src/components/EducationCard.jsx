import { useNavigate } from 'react-router-dom';

function EducationCard({img, title, index, elements}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/content/${index}`);
    }
    return(
        <div className="border p-4 rounded-xl flex flex-col gap-2 shadow-xl overflow-hidden  justify-between ">
            <div className="flex flex-col gap-4">
                <img className="w-4/4 rounded" src={img} alt="" />
                <h3 className="text-xl" >{title}</h3>
            </div>
            
            <div className="flex justify-between flex-col">
                <button className="border-2 border-green-500 rounded-xl py-2 px-5 mt-4 hover:bg-green-500  hover:text-white transition" onClick={() => (
                    handleClick()
                )} >Більше</button>
            </div>
            
        </div>
    )
}
export default EducationCard