function Important({title, info, link}){
    return(
        <div className="w-3/4 mx-auto p-4 m-8 rounded-xl full border-3 border-green-300 relative bg-green-200" >
            <h1 className="text-4xl mb-4" >{title}</h1>
            <p className="text-xl mt-4 mb-15 indent-4" >{info}</p>
            <a className="absolute bottom-4 right-4 py-2 px-4 rounded border" href={link}>Детальніше</a>
        </div>
    )
}

export default Important