import axios from "axios";
import { useQuery } from "react-query";
 

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:5000/users/${email}`);
}
const fetchCoursesByChanelID = (id) => {
    return axios.get(`http://localhost:5000/channels/${id}`);
}


export const DependentQueries = ({email}) => {


    
    const {data:user} = useQuery(['user',email],() => fetchUserByEmail(email));
    const chanelId = user?.data.channelId;

    
    const {data:chanel} = useQuery(['chanel',chanelId], () => fetchCoursesByChanelID(chanelId),{
        enabled:!!chanelId
    })


    console.log(chanel);



    return <h1>dependent queroes</h1>
}