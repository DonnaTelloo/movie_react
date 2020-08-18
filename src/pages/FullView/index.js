import React, { Component, useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, API_LINK, API, IMG_LINK } from "../../api";
import axios from "axios";
import Header from '../../components/Header/index'; 
import styles from './style.module.scss';
import { MdMovie } from 'react-icons/md'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const FullView = (props) => {

    const [state, setState] = useState({
        MovieDetails: [],
        BackgroundImage: null
    });

    useLayoutEffect(() => {
        let movieid = props.match.params.slug;
        axios.get(`${API_LINK}${API.Movie}/${movieid}${API_KEY}`)
        .then((response) => {
            setState({
                MovieDetails: response.data,
                BackgroundImage: response.data.backdrop_path
            })
        })
    }, [console.log(state.MovieDetails)])

        return (
            <>
                { Object.keys(state.MovieDetails).length > 0 ? (<>
                    <Header></Header>
                <div className={styles.MovieBackgroundImage} style={{backgroundImage: `url(http://image.tmdb.org/t/p/original${state.BackgroundImage})` }}></div>
                <div className={styles.MovieDetails}>
                    <div className={styles.left}>
                        <img src={IMG_LINK + "t/p/original" + state.MovieDetails.poster_path} />
                    </div>
                    <div className={`${styles.right} ${styles.col-m-b-15}`}>
                        <h1>{ state.MovieDetails.title }</h1>
                        <p className={styles.description}>{ state.MovieDetails.overview }</p>
                        <ul className={styles.genres}>
                            {state.MovieDetails.genres.map(item => <li className={styles.genre}><MdMovie color="#FF8949" size="25"></MdMovie> <span>{ item.name }</span></li>)}
                        </ul>
                    </div>
                </div>
                </>) : (
                    <div className={styles.loader}>
                        <Loader
                            type="Bars"
                            color="#1a1a1a"
                            height={100}
                            width={100}
                        />
                 </div>
                )}
            </>
        );
}

export default FullView;