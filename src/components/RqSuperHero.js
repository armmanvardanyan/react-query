import { useParams } from "react-router-dom";
import { UseSuperHeroData } from "../hooks/useSuperHeroData"

export const RqSuperHeroPage = () => {
    
    const  params = useParams()


    const {data,isLoading,isError, error} = UseSuperHeroData(params.heroId)

    if(isLoading) {
        return <div>LOading..</div>
    }

    if(isError) {
        return <div>{error.message}</div>
    }


    return <div>
        {data?.data.name} - {data?.data.alterEgo}
    </div>
}