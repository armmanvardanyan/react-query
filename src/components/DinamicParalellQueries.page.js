import axios from "axios"
import { useQueries } from "react-query"

const fetchSuperHeroe = (id) => {
    return axios.get(`http://localhost:5000/superheroes/${id}`);
}


export const DinamicParallelQUeries = ({heroIds}) => {

const result = useQueries(
  heroIds.map(heroId => {
        return {
            queryKey: ["super-hero",heroId],
            queryFn: () => fetchSuperHeroe(heroId),
        }
    })
)
console.log({result});

return <div>
        DinamicParallelQUeries
    </div>
} 