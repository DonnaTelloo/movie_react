import React from 'react';
import styles from "./style.module.scss";
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

function Header(){
    // const { t, i18n } = useTranslation();
    return (
        <>
            <header>
                <div className={styles.logo}>
                    <Link to="/"><h1>MOVIE.GE</h1></Link>
                </div>
                <p>dasda</p>
            </header>
        </>
    )
}

export default Header;

// 90a46068457d472a952cf14a3f4e6abc