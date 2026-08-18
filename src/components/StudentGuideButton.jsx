function StudentGuideButton({link, linkText}){
    return(
        <a className="w-4/4 bg-white shadow px-4 py-2 border text-center rounded-xl mt-4 shadow border border-2 border-gray-500 hover:bg-[#871c29] hover:text-white hover:border-[#871c29] transition " href={link}>{linkText}</a>
    )
}
export default StudentGuideButton