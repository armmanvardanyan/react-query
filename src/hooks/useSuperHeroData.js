import axios from "axios";
import { useQuery } from "react-query";



const fetchSuperHero = ({queryKey}) => {
    const [_,heroId] = queryKey;
    return axios.get(`http://localhost:5000/superheroes/${heroId}`);
}

export const UseSuperHeroData = (heroId) => {

    return useQuery(['super-hero',heroId],fetchSuperHero)

    
}