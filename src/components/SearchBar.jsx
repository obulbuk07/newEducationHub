import searchIcon from "../img/search_icon.png"

function SearchBar({ query, onQueryChange, onSearch }){
    return(
        <div className="w-3/4 mx-auto flex items-center flex-col py-30">
            <h2 className="text-3xl pb-2 text-gray-700">Знайди те, що тобі потрібно</h2>
            <p className="pt-5 text-gray-400 pb-6">Введи ключові слова</p>
            <div className="w-full flex flex-row gap-4">
                <input
                    className="w-4/4 py-2 px-4 mt-4 rounded-xl border-3 shadow-xl border-gray-400 focus:border-blue-500"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    type="text"
                />
                <img className=" w-7 h-7 mt-6" src={searchIcon} alt="" />
            </div>
        </div>
    )
}
export default SearchBar