import { useState } from "react";
import { useQuery, useMutation } from "react-query"
import { Link } from "react-router-dom";
import { useAddSuperHeroDAta, useSuperHeroesData } from "../hooks/useSuperHerosData";





export const RqSuperHero = () => {

    const [name,setName] = useState("")
    const [alterEgo,setAlterEgo] = useState("")

    //const [int,setInt] = useState(3000)

    const onSuccess = (data) => {
        if(data?.data.length >= 4) {
            //setInt(false)
        }
        console.log("side effect after data fetching");
    }

    const onError = (err) => {
        console.log(err);
        console.log("side effect after error");
    }

    const {data,isError,isLoading,isFetching,error,refetch} = useSuperHeroesData(onSuccess,onError)

    const {data: mutationData, mutate, isSuccess} = useAddSuperHeroDAta()


    const addHeroHandler = (e) => {
        e.preventDefault()
        mutate({
            name,
            alterEgo
        })
    }


    if(isError) {
        return <h2>{error.message}</h2>
    }

    if(isLoading || isFetching) {
        return <h2>Loading...</h2>
    }
    
    return (
        <>
            <h2>React Query Super Heroes</h2>
            <div>
                <input type={"text"} value={name} onChange={ e => setName(e.target.value) }/>
                <input type={"text"} value={alterEgo} onChange={ e => setAlterEgo(e.target.value) }/>
                <button onClick={addHeroHandler}>Add hero</button>
            </div>
            <button onClick={refetch}>Fetch heroes</button> 
            {data?.data.map(hero => {
                return <div key={hero.id}>
                    <Link to={`/rqsuperheroes/${hero.id}`}>{hero.name}</Link>
                </div>
            })}
            {/*data?.map(hero => {
                return <div key={hero}>{hero}</div>
            })*/}
        </>
    )
}

//https://www.youtube.com/watch?v=2TX8ojaSwF0&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=6&ab_channel=Codevolution