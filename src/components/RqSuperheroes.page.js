import axios from "axios"
import { useQuery } from "react-query"


const fetchSuperHeroes = () => {
    return axios.get('http://localhost:5000/superheroes');
}


export const RqSuperHero = () => {

    const {data,isLoading,isError,error, isFetching, refetch} = useQuery("super-heroes", fetchSuperHeroes,{
        cacheTime:5000 //default 30000 (5 minutes)
    });


    if(isError) {
        return <h2>{error.message}</h2>
    }

    if(isLoading) {
        return <h2>Loading...</h2>
    }
    
    return (
        <>
            <h2 onClick={() => refetch()}>React Query Super Heroes</h2>
            {data?.data.map(hero => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}

//https://www.youtube.com/watch?v=2TX8ojaSwF0&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=6&ab_channel=Codevolution