function LocationsBar({ active, onSelect }) {
    const items = [
        { id: "library", label: "Бібліотека" },
        { id: "sport", label: "Спортивний комплекс" },
        { id: "clinic", label: "Клініка" },
        { id: "corpuses", label: "Корпуси" },
        { id: "cafes", label: "Студентські їдальні" },
        { id: "dormitories", label: "Гуртожитки" },
        { id: "museum", label: "Музей" },
    ];

    return (
        <div className="shadow-xl bg-white flex gap-4 text-lg border mx-auto justify-center py-2 px-4 w-4/5 rounded-full">
            {items.map(item => (
                <button
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={
                        active === item.id
                            ? "text-white bg-[#871c29] px-3 py-1 rounded-full"
                            : "hover:underline"
                    }
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}
export default LocationsBar;