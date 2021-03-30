import './App.css';
import React, { useState, useEffect } from 'react';
import SideBar  from "./components/SideBar";
import Card  from "./components/Card";
import DetailCard  from "./components/DetailCard";
import DescriptionCard  from "./components/DescriptionCard";
import Pagination  from "./components/Pagination";
import Search  from "./components/Search";
import BackButton  from "./components/BackButton";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import axios from 'axios'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState([]);
  const [prevUrl, setPrevUrl] = useState([]);
  const [currentPage, setCurrentPage] = useState(["https://pokeapi.co/api/v2/pokemon/"]);
  const [searchUrl, setSearchUrl] = useState(["https://pokeapi.co/api/v2/pokemon/"]);
  const [page, setPage] =useState(["Home"]);
  const [detailData, setDetailData] = useState([]);
  const [reqDone, setReqDone] = useState(false);

  useEffect(() => {
    axios.get(currentPage).then(res => {
      res.data.results.map(p => axios.get(p.url.slice(0, -1)).then(res => {
        p.height = res.data.height
        p.id = res.data.id
        p.weight = res.data.weight
        p.back_default = res.data.sprites.back_default
        p.front_default = res.data.sprites.front_default
        p.back_shiny = res.data.sprites.back_shiny
        p.front_shiny = res.data.sprites.front_shiny
        p.types = res.data.types
        p.img = res.data.sprites.other.["official-artwork"].front_default
        console.log("hi from p axios")
        setReqDone(true)
      }))
      setPokemon(res.data.results.map(p => p))
      setNextUrl(res.data.next)
      setPrevUrl(res.data.previous)
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 2500); /*Timer used to not having errors with api*/
    })
  }, [currentPage])

  function goDetailPage(value) {
    console.log(value)
    setPage("Detail")
    setDetailData(value)
  }
  function goNextUrl () {
    setIsLoaded(false)
    setCurrentPage(nextUrl)
  }
  function goPrevUrl () {
    setIsLoaded(false)
    setCurrentPage(prevUrl)
  }
  function searchPokemon(pokemon){
    try {
      let p = { 
        data:{

        }
      }
      axios.get(searchUrl + pokemon).then(res => {
        p.data.height = res.data.height
        p.data.id = res.data.id
        p.data.weight = res.data.weight
        p.data.back_default = res.data.sprites.back_default
        p.data.front_default = res.data.sprites.front_default
        p.data.back_shiny = res.data.sprites.back_shiny
        p.data.front_shiny = res.data.sprites.front_shiny
        p.data.types = res.data.types
        p.data.img = res.data.sprites.other.["official-artwork"].front_default
        /*console.log(p)*/
        setDetailData(p)
        setPage("Detail")
      })
    } catch (error) {
      setPage("Home")
    }
    
  }
  function goBack() {
    setPage("Home")
  }

  return (
    <div className="App">
        <Grid container>
          <Hidden xsDown>
            <Grid item sm={3}>
              <SideBar />
            </Grid>
          </Hidden>
          {
            page == "Home" && isLoaded ? 
            <Grid item xs={12} sm={9} className="content">
              <div className="searchContainer">
                <Search onSearch={value => (searchPokemon(value))} />
              </div>
              <Grid container className="cardContainer">   
                {pokemon.map(p => (
                  <Grid item xs={6} sm={6} md={4} className="individualCard">
                    <Card goDetailPage={value => (goDetailPage(value))} key={p.name} pokemonName={p.name} pokemonUrl={p.url} data={p}/>
                  </Grid>
                ))}
                <div className="pagination">
                  <Pagination 
                    goNextUrl={goNextUrl} 
                    goPrevUrl={goPrevUrl}
                  />
                </div>
              </Grid>
          </Grid> : 
          page == "Detail" && isLoaded ? 
          <Grid item xs={12} sm={9} className="detailCardContainer">
            <div className="headerDetail">
              <div className="goBackButton">
                <BackButton goBack={goBack}/>
              </div>
              <div className="searchContainerDetail">
                <Search onSearch={value => (searchPokemon(value))} />
              </div>
            </div>
            <Grid container className="cardContainer">
              <Grid item xs={12} sm={4} className="gridDetailCard2">
                <div className="detailCard2">
                  <DetailCard 
                    mainImage={detailData.data.img}
                    frontDefaultImage={detailData.data.front_default}
                    backDefaultImage={detailData.data.back_default}
                  />  
                </div>
              </Grid>
              <Grid item xs={12} sm={8} className="gridDetailCard2">
                <div className="descriptionCard2">
                  <DescriptionCard 
                    name={detailData.data.name} 
                    height={detailData.data.height}
                    id={detailData.data.id}
                    weight={detailData.data.weight}
                    back_shiny={detailData.data.back_shiny}
                    front_shiny={detailData.data.front_shiny}
                    types={detailData.data.types}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid> : <p>loading</p>
          } 
        </Grid>
    </div>
  );
}

export default App;
