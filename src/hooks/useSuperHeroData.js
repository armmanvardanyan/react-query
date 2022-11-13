import axios from "axios";
import { useQuery , useQueryClient } from "react-query";



const fetchSuperHero = ({queryKey}) => {
    const [_,heroId] = queryKey;
    return axios.get(`http://localhost:5000/superheroes/${heroId}`);
}

export const UseSuperHeroData = (heroId) => {

    const queryClient = useQueryClient();

    return useQuery(['super-hero',heroId],fetchSuperHero,{
        initialData: () => {
            const hero = queryClient.getQueryData("super-heroes")?.data?.find(hero => hero.id === parseInt(heroId))
            if(hero) {
                return {
                    data: hero
                }
            }else {
                // Otherwise, return undefined and let it fetch from a hard loading state!
                return undefined;
            }
        } 
    })

    
}