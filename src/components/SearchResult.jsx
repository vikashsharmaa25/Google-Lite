import React, { useContext, useEffect, useState } from "react";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { context } from "../utils/ContextApi";
import { fetchDataFromApi } from "../utils/api";
import SearchItemTemplate from "./SearchItemTemplate";
import SearchImageItemTemplate from "./SearchImageItemTemplate";
import Pagination from "./Pagination";

function SearchResult() {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const { imageSearch } = useContext(context);

  useEffect(() => {
    fetchSearchResult();
  }, [query, startIndex, imageSearch]);

  const fetchSearchResult = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }

    fetchDataFromApi(payload).then((res) => {
      // console.log(res);
      setResult(res);
    });
  };

  if (!result) return;

  const { items, queries, searchInformation } = result;

  return (
    <>
      <div className="flex flex-col min-h-[100vh]">
        <SearchResultHeader />
        <main className="grow">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex text-sm text-[#70757a] mb-3 ">
              {`About ${searchInformation.formattedTotalResults} result in (${searchInformation.formattedSearchTime})`}
            </div>
            <div>
              {!imageSearch ? (
                <div>
                  {items.map((item, index) => (
                    <SearchItemTemplate key={index} data={item} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
                  {items.map((item, index) => (
                    <SearchImageItemTemplate key={index} data={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
        <Pagination queries={queries} />
        <Footer />
      </div>
    </>
  );
}

export default SearchResult;
