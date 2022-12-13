import { useState } from "react";
import { getMovieDetail } from "../../api";
import DetailModal from "../DetailModal/DetailModal";
import styles from "./style.module.css";

const MovieCard = ({ movie }) => {

    const [modalShow, setModalShow] = useState(false);

    const [movieDetail, setMovieDetail] = useState(null);

    const handleClick = (id) => {
        getMovieDetail(id).then(res => {
            setMovieDetail(res.data);
            setModalShow(true);
        });
    };

    return (
        <>
            <div className={styles.container}>
                <img src={movie.Poster} alt={movie.Title} />
                <div className={styles.overlay}></div>
                <div className={styles.button} onClick={() => handleClick(movie.imdbID)}>
                    <span>Details</span>
                </div>
            </div>
            {
                movieDetail ?
                    <DetailModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        movie={movieDetail}
                    />
                    :
                    <></>
            }
        </>
    );
};

export default MovieCard;