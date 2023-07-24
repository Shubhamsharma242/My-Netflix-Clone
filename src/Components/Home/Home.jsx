import React, { useEffect, useState } from "react";
import "./Home.scss";
import Row from "../Row/Row";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsPlay } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
const apiKey = "7d5cc7e2a9e8c810c5fb0cb4cee2f4a0";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const upcomingMoviess = `${url}/movie/${upcoming}?api_key=${apiKey}&page=1`;
const nowPlaying = "now_playing";
const nowplayingUrl = `${url}/movie/${nowPlaying}?api_key=${apiKey}`;
const populer = "popular";
const populerMovieListUrl = `${url}/movie/${populer}?api_key=${apiKey}`;
const topRated = "top_rated";
const topRatedMoviesUrl = `${url}/movie/${topRated}?api_key=${apiKey}`;
const genreUrl = `${url}/genre/movie/list?api_key=${apiKey}`;
const imageUrl = "https://image.tmdb.org/t/p/original";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowplayingList, setNowplayingList] = useState([]);
  const [populerList, setPopulerList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    try {
      const fatchData = async (item) => {
        const {
          data: { results },
        } = await axios.get(item);
        setUpcomingMovies(results);
      };
      const fatchDataPlayingList = async (item) => {
        const {
          data: { results },
        } = await axios.get(item);
        setNowplayingList(results);
      };
      const fatchDataPopulerList = async (item) => {
        const {
          data: { results },
        } = await axios.get(item);
        setPopulerList(results);
      };
      const fatchDataTopRated = async (item) => {
        const {
          data: { results },
        } = await axios.get(item);
        setTopRatedList(results);
      };
      const getAllGenre = async (item) => {
        const {
          data: { genres },
        } = await axios.get(item);
        setGenre(genres);
        // console.log(genres);
      };
      fatchData(upcomingMoviess);
      fatchDataPlayingList(nowplayingUrl);
      fatchDataPopulerList(populerMovieListUrl);
      fatchDataTopRated(topRatedMoviesUrl);
      getAllGenre(genreUrl);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  console.log(populerList);
  return (
    <section className="home">
      <div
        className="banner "
        style={{
          backgroundImage: populerList[0]
            ? `url(${imageUrl}/${populerList[0].poster_path})`
            : "rgb(16,16,16)",
        }}
      >
        {populerList[0] && <h1>{populerList[0].original_title}</h1>}
        {populerList[0] && <p>{populerList[0].overview}</p>}
        <div>
          <button>
            <BsPlay/>Play
          </button>
          <button>
            My List <AiOutlinePlus />
          </button>
        </div>
      </div>
      <Row title={"Upcomings"} arrMovie={upcomingMovies} />
      <Row title={"Now Playing Movies"} arrMovie={nowplayingList} />
      <Row title={"Populer Movies"} arrMovie={populerList} />
      <Row title={"Top-Rated "} arrMovie={topRatedList} />
      <div className="genreBox">
        {genre.map((item, index) => (
          <Link key={index} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
