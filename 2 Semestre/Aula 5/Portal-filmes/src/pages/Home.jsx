import CardContainer from "../components/CardContainer";
import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard.jsx"

export default function Home(){
    return(
        <>
            <CardContainer titulo="Filmes antigos">
                {
                    movies.map(filme => [
                        <MovieCard key={filme.id} {...filme}/>
                    ])
                }
            </CardContainer>
        </>
    )
}