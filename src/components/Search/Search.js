import { useState } from "react";
import { getMovies } from "../../api";
import styles from "./style.module.css";

const Search = ({ setMovies, setLoading }) => {

    const [input, setInput] = useState("");

    const handleClick = (keyword) => {
        setLoading(true);
        getMovies(keyword).then(res => {
            if (res.data.Response === "False") {
                setMovies(res.data.Error);
            } else {
                setMovies(res.data.Search);
            }
            setLoading(false);
        });
    };

    return (
        <div className={styles.container}>
            <input value={input} placeholder="Search Movie Title" type="search" onChange={(e) => setInput(e.target.value)} />
            <button type="button" onClick={() => handleClick(input)}>Search</button>
        </div>
    );
};

export default Search;