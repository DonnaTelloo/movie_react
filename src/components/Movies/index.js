import React, { Component } from "react";
import styles from "./style.module.scss";
import { API_KEY, API_LINK, API, IMG_LINK } from "../../api";
import axios from "axios";
import { Link } from "react-router-dom";

class Movies extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Loading: true,
            Movies: []
        }
        console.log(this);
    }

    async ArticlesFetch(){
        let ArticleItems = this.state.Movies;
        await axios.get(`${API_LINK}${this.props.API}${API_KEY}`)
        .then((response) => {
            ArticleItems.push(response.data.results);
            setTimeout(() => {
                this.setState({
                    Movies: ArticleItems[0],
                    Loading: false
                })
            }, 2000);
        })
    }

  

    componentDidMount(){
        this.ArticlesFetch();
    }

    render(){
        if(this.state.Loading){
            
        }
        return(
            <div className={styles.ArticlesContainer}>
                <div className={styles.ArticlesContainerHeading}>
                    <h1>{ this.props.heading }</h1>
                    <span>See More</span>
                </div>
                { this.state.Loading ? (
                    <div className={styles.ArticlesSkeleton}>
                        {Array.apply(0, Array(14)).map(function (x, i) {
                            return  <div className={styles.ArticleSkeleton}></div>
                        })}
                    </div>
                ) : (
                    <div className={styles.Articles}>
                    { this.state.Movies.map((item, index) =>{
                        if(index >= 14){return};
                        return (
                            <div className={styles.Article} key={index}>
                                <img src={IMG_LINK + "t/p/original" + item.poster_path} alt=""/>
                                <Link to={`/movie/${item.id}`}><h1 title={item.title}>{ item.title.length > 19 ? item.title.substr(0, 19) + " ..." : item.title }</h1></Link>
                            </div>
                        )
                    }) }
                    </div>
                ) }
            </div>
        )
    }
}

export default Movies;