import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, API_LINK, API, IMG_LINK } from "../../api";
import axios from "axios";
import Header from '../../components/Header/index'; 
import styles from './style.module.scss';
import { MdMovie } from 'react-icons/md'


class FullView extends Component {
    constructor(props){
        super(props)

        this.state = ({
            MovieDetails: [],
            BackgroundImage: null
        })
    }

    componentDidMount(){
        let movieid = this.props.match.params.slug;
        axios.get(`${API_LINK}${API.Movie}/${movieid}${API_KEY}`)
        .then((response) => {
            console.log(response);
            this.setState({
                MovieDetails: response.data,
                BackgroundImage: response.data.backdrop_path
            })
        })
    }

    render() {
        return (
            <>
                <Header></Header>
                <div className={styles.MovieBackgroundImage} style={{backgroundImage: `url(http://image.tmdb.org/t/p/original${this.state.BackgroundImage})` }}></div>
                <div className={styles.MovieDetails}>
                    <div className={styles.left}>
                        <img src={IMG_LINK + "t/p/original" + this.state.MovieDetails.poster_path} />
                    </div>
                    <div className={styles.right}>
                        {this.state.MovieDetails.genres.map(genre => <><MdMovie></MdMovie> <span>{ genre.name }</span></>)}
                        <p>{ this.state.MovieDetails.overview }</p>
                    </div>
                </div>
            </>
        );
    }
}

export default FullView;