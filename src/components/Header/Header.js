import styles from "./style.module.css";

const Header = ({ title, logo }) => {
    return (
        <header className={styles.container}>
            <img src={logo} alt={title} />
            <h1>{title}</h1>
        </header>
    );
};

export default Header;