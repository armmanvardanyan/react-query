import axios from "axios"
import { useQuery } from "react-query"


const fetchSuperHeroes = () => {
    return axios.get('http://localhost:5000/superheroes');
}


export const RqSuperHero = () => {

    const {data,isLoading,isError,error, isFetching, refetch} = useQuery("super-heroes", fetchSuperHeroes,{
       //cacheTime: 5000, // this says cache data during 5 seconds then data will be garbage collected default 30000 (5 minutes)
       // staleTime: 30000, // this says that there is no need to refetch data during 5 minutes seconds default 0
        //refetchOnMount: false, //dont refetch data if component rerendered
        //refetchOnWindowFocus: false
        //refetchInterval: 1000 ,// refetch data every 1 second (but not in case when window lose focus)
        //refetchIntervalInBackground: true // refetchInterval works also for losed window focus case 
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