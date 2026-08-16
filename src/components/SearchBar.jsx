function SearchBar({ query, onQueryChange, onSearch }){
    return(
        <div className="w-2/4 mx-auto flex items-center flex-col py-30">
            <h2 className="text-2xl text-gray-700">Search what are you interesting about?</h2>
            <p className="pt-5 text-gray-400">enter key words here</p>
            <div className="w-full flex flex-row gap-4">
                <input
                    className="w-4/4 py-2 px-4 mt-4 rounded-xl border-3 shadow-xl border-gray-400 focus:border-blue-500"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    type="text"
                />
                <button onClick={onSearch} className="border py-2 px-4 mt-4 rounded">Seach</button>
            </div>
        </div>
    )
}
export default SearchBar