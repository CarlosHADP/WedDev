import { useParams } from "react-router-dom"


export default function MovieDetailPage(){
    const {id} = useParams()


    return(
        <>
        <h1>Movie Detail aaabbaa Page</h1>
        <p>O id do filme é {id}</p>
        </>
    )
}