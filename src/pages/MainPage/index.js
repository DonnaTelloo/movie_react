import React, { Component } from 'react';
import Movies from '../../components/Movies/index';
import Header from '../../components/Header/index';
import Search from '../../components/Search/index';
import { API } from '../../api';

class MainPage extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Search></Search>
                <Movies heading="Popular Movies" API={API.PopularMovies}></Movies>
                <Movies heading="Top Rated Movies" API={API.TopRatedMovies}></Movies>
            </>
        );
    }
}

export default MainPage;