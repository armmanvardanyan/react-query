import axios from "axios"
import { useQuery } from "react-query"


const fetchSuperHeroes = () => {
    return axios.get('http://localhost:5000/supersheroes');
}


export const RqSuperHero = () => {
    const {data,isLoading,isError,error} = useQuery("super-heroes", fetchSuperHeroes);

    if(isError) {
        return <h2>{error.message}</h2>
    }

    if(isLoading) {
        return <h2>Loading...</h2>
    }
    
    return (
        <>
            <h2>React Query Super Heroes</h2>
            {data?.data.map(hero => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}