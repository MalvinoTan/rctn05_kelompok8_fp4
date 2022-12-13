import { InfinitySpin } from "react-loader-spinner";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./style.module.css";

const Movie = ({ movies, loading }) => {
    return (
        <div className={styles.container}>
            {
                loading ?
                    <InfinitySpin color="black" />
                    :
                    typeof movies === "string" ?
                        <h4>{movies}</h4>
                        :
                        movies.map((movie, movieIdx) => <MovieCard movie={movie} key={movieIdx} />)
            }
        </div>
    );
};

export default Movie;