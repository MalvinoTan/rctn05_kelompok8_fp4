import { Modal, Button } from "react-bootstrap";
import styles from "./style.module.css";

const DetailModal = ({ show, onHide, movie }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {movie.Title} ({movie.Year})
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <img src={movie.Poster} alt={movie.Title} className={styles.img} />
                <section className={styles.section}>
                    Overview: <br />
                    <em>{movie.Plot}</em>
                </section>
                <hr />
                <p className={styles.detail}>
                    Release Date: {movie.Released}<br />
                    Rating: {movie.imdbRating}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DetailModal;