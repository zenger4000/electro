"use client"
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ pagination }) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const urlQuery = searchParams.get("q") ?? "";
    const urlPage = Number(searchParams.get("page") ?? 1);
    const urlType = searchParams.get("type") ?? "all";

    const maxButtons = 5;
    let startPage = Math.max(1, urlPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(
      pagination.totalPages,
      startPage + maxButtons - 1
    );
    startPage = Math.max(1, endPage - maxButtons + 1);
    const pages = [];
  
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
  
    return ( 
        <div>
             {!!pagination.totalHits && <div className="flex justify-center items-center flex-col"><p className="my-6">
        {pagination.totalHits} results • Page {urlPage} of{" "}{pagination.totalPages}
      </p>
        <div className="mb-3 ">
        <button
        disabled={urlPage === 1}
        onClick={() => router.push(
          `/search?q=${encodeURIComponent(urlQuery)}&page=${urlPage - 1}&type=${urlType}`, { scroll: false })}
        className="hover:text-[#83cccc]"
      >
        Prev
      </button>
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() =>router.push(`/search?q=${encodeURIComponent(urlQuery)}&page=${pageNumber}&type=${urlType}` , { scroll: false })}
          className={`${urlPage === pageNumber  ? "text-[#25aaaa]" : ""} mx-2 hover:text-[#83cccc]`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        disabled={urlPage === pagination.totalPages}
        onClick={() => router.push(`/search?q=${encodeURIComponent(urlQuery)}&page=${urlPage + 1}&type=${urlType}` , { scroll: false })}
        className="hover:text-[#83cccc]"
      >
        Next
      </button>
        </div>
      </div>
      }
        </div>
       
     );
}
 
export default Pagination;