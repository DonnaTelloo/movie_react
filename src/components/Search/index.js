import React from 'react';
import styles from './style.module.scss';
import { FaSearch } from 'react-icons/fa';

function Search(){
    return (
        <div className={styles.Search}>
            <input type="text" />
            <button><FaSearch></FaSearch></button>
        </div>
    )
}

export default Search;

// 90a46068457d472a952cf14a3f4e6abc