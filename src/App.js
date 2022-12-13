import logo from "./assets/img/favicon.png";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Movie from "./components/Movie/Movie";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import { ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getMovies } from "./api";
import malvino from "./assets/img/malvino.jpeg";
import taofik from "./assets/img/taofik.jpg";

const App = () => {

    const aboutData = {
        malvino: {
            id: "RCTN-KS05-006",
            name: "Malvino Austin Tanura",
            progress: [
                "Pengembangan aplikasi website"
            ],
            image: malvino
        },
        taofik: {
            id: "RCTN-KS05-025",
            name: "Taofik Arianto",
            progress: [
                "Pembuatan desain figma",
                "Pembuatan panduan dan cara penggunaan aplikasi"
            ],
            image: taofik
        }
    }

    const percentage = 100;

    const [movies, setMovies] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getMovies("man").then(res => setMovies(res.data.Search));
    }, []);

    return (
        <div className="app_container">
            <Header title="MovieFinder" logo={logo} />
            <Search setMovies={setMovies} setLoading={setLoading} />
            <Movie movies={movies} loading={loading} />
            <hr />
            <div style={{ textAlign: "center" }}>
                <h2 style={{ padding: "2rem" }}>About Us</h2>
                <h3>Final Project Kelompok 08 - MovieFinder</h3>
                <h3><small>Progress Percentage</small></h3>
            </div>
            <ProgressBar variant="success" now={percentage} label={`${percentage}%`} animated={45} style={{ width: "70%", margin: "0 auto" }} className="my-4" />
            <AboutSection data={aboutData.malvino} />
            <AboutSection data={aboutData.taofik} />
            <Footer />
        </div>
    );
}

export default App;
