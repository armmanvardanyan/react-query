import axios from "axios"
import { useEffect, useState } from "react"


export const Superhero = () => {

    const [isLoading,setIsLoading] = useState(true)
    const [data,setData] = useState([])
    const [error,setError] = useState("")

    useEffect(() => {
        axios.get('http://localhost:5000/superheroes').then(res => {
            setData(res.data)
            setIsLoading(false)
        }).catch(err => {
            setError(err.message);
            setIsLoading(false);
        })
    },[])

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }

    return (
        <>
            <h2>Super Heroes</h2>
            {data.map(hero => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}