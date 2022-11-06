import { useState } from "react";
import { useQuery } from "react-query"
import { useSuperHeroesData } from "../hooks/useSuperHerosData";





export const RqSuperHero = () => {

    //const [int,setInt] = useState(3000)

    const onSuccess = (data) => {
        console.log(data);
        if(data.length >= 4) {
            //setInt(false)
        }
        console.log("side effect after data fetching");
    }

    const onError = (err) => {
        console.log(err);
        console.log("side effect after error");
    }

    const {data,isError,isLoading,isFetching,error,refetch} = useSuperHeroesData(onSuccess,onError)
  


    if(isError) {
        return <h2>{error.message}</h2>
    }

    if(isLoading || isFetching) {
        return <h2>Loading...</h2>
    }
    
    return (
        <>
            <h2>React Query Super Heroes</h2>
            <button onClick={()=> refetch()}>Fetch heroes</button> 
            {data?.map(hero => {
                return <div key={hero}>{hero}</div>
            })}
        </>
    )
}

//https://www.youtube.com/watch?v=2TX8ojaSwF0&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=6&ab_channel=Codevolution