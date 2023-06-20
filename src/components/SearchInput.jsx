import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SearchInput() {
  const { query } = useParams();
  const [searchQuery, satSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <>
      <div className="sm:w-[600px] w-full py-2">
        <input
          type="search"
          onChange={(e) => {
            satSearchQuery(e.target.value);
          }}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
          autoFocus
          className="border border-gray-400 w-full md:py-2 py-1 outline-none px-5 rounded-full hover:shadow"
        />
      </div>
    </>
  );
}

export default SearchInput;
