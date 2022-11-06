import axios from "axios";
import { useQuery } from "react-query";



const fetchSuperHero = (id) => {
    return axios.get(`http://localhost:5000/superheroes/${id}`);
}

export const UseSuperHeroData = (heroId) => {

    return useQuery(['super-hero',heroId], () => fetchSuperHero(heroId))

    
}