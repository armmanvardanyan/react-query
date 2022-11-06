import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:5000/superheroes');
}

export const useSuperHeroesData = ( onSuccess,onError   ) => {

    return useQuery("super-heroes", fetchSuperHeroes,{
        //cacheTime: 5000, // this says cache data during 5 seconds then data will be garbage collected default 30000 (5 minutes)
        // staleTime: 30000, // this says that there is no need to refetch data during 5 minutes seconds default 0
         //refetchOnMount: false, //dont refetch data if component rerendered
         //refetchOnWindowFocus: false
         //refetchInterval: int ,// refetch data every 1 second (but not in case when window lose focus)
         //refetchIntervalInBackground: true // refetchInterval works also for losed window focus case 
         //enabled: false //pause fetching
         onSuccess,
         onError ,
         select: (data) => {
             // returned value will override data value in useQuery
             return data.data.map(hero => hero.name.toUpperCase())
         }
     });


}

