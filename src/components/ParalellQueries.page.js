import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:5000/superheroes');
}

const fetchFriends = () => {
    return axios.get('http://localhost:5000/friends');
}


export const ParallelQUeries = () => {

     const {data: superHeroes} =useQuery("super-heroes", fetchSuperHeroes);
     const {data: friends} = useQuery("friends", fetchFriends);


    return <div>
        ParallelQUeries
    </div>
} 