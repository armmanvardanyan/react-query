import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"


const fetchColors = (pageNum) => {
    return axios.get(`http://localhost:5000/colors?_limit=2&_page=${pageNum}`)
}

export const PaginatedQueries = () => {

    const  [pageNum,setPageNum] = useState(1)

    const {data,isError,error,isLoading,isFetching} = useQuery(['colors',pageNum],() => fetchColors(pageNum), {
        keepPreviousData: true,
    })


    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>{error.message}</div>
    }



    return <>
       {data?.data.map(color => {
        return <div key={color.id}>{color.id}. {color.label}</div>
       })}
      <div>
        <button 
            disabled={pageNum === 1} 
            onClick={() => setPageNum(pageNum-1)}
        >
            Prev
        </button>
        <button 
            disabled={pageNum === 4} 
            onClick={() => setPageNum(pageNum+1)}
        >
            Next
        </button>
      </div>
      {isFetching && "Loading"}
    </>

}