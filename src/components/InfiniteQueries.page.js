import axios from "axios"
import { Fragment } from "react"
import { useQuery, useInfiniteQuery } from "react-query"


const fetchColors = ({pageParam = 1}) => {
    return axios.get(`http://localhost:5000/colors?_limit=2&_page=${pageParam}`)
}


export const InfiniteQueriesPage = () => {

    const { 
        data,
        isError,
        isLoading,
        error, 
        hasNextPage, 
        fetchNextPage,
        isFetching,
        isFetchingNextPage
    } = useInfiniteQuery(['colors'], fetchColors,{
        getNextPageParam: (lastpage,pages) => {
            console.log(pages);
            if(pages.length < 4) {
                return pages.length + 1;
            }else {
                return undefined;
            }
        }
    })

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return<div>{error.message}</div>
    }
    return <>
        {data?.pages.map((group,idx) => {
            return <Fragment key={idx}>
                {group.data.map(color=> {
                    return <h2 key={color.id}>{color.id}. {color.label}</h2>
                })}
            </Fragment>
        })}
        <div>
            <button onClick={fetchNextPage} disabled={!hasNextPage}>Load more</button>
        </div>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>

}