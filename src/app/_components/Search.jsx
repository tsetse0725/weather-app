import { SearchIcon } from "lucide-react";

export const Search = ({ value, onChange }) => {
  console.log(" Search компонент render хийлээ!");

  return (
    <div className="absolute top-4 left-4 z-50 flex items-center gap-2 bg-white rounded-md p-2 shadow-md w-[300px]">
      <SearchIcon size={20} />
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => {
          console.log(" Би бичиж байна:", e.target.value);
          onChange(e);
        }}
        className="flex-1 bg-transparent outline-none text-black"
      />
    </div>
  );
};
