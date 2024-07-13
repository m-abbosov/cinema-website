import {useState} from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/pages/Home/SearchBar";

import CartoonIcon from "../../assets/icons/cartoon.svg";
import CinemaIcon from "../../assets/icons/cinema.svg";
import MoviePlayIcon from "../../assets/icons/movie_play_icon.svg";

import {useNavigate} from "react-router-dom";
import css from "./style.module.css";

import "keen-slider/keen-slider.min.css";
import {KeenSliderPlugin, useKeenSlider} from "keen-slider/react";

enum MovieType {
  MOVIE,
  SERIES,
  CARTOON,
}

const carousel: KeenSliderPlugin = (slider) => {
  const z = 600;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

function Home() {
  const [movieType, setMovieType] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const navigate = useNavigate();

  const fakeData = [
    {
      id: 0,
      title: "Intersteller",
      poster:
        "https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/s/g/3/large-newposter8503-movie-interstellar-hd-wallpaper-background-original-imaf5ttsfnfgt2zh.jpeg?q=90&crop=false",
    },
    {
      id: 1,
      title: "The Shawshank Redemption",
      poster:
        "https://rukminim2.flixcart.com/image/850/1000/k77xx8w0/poster/c/g/t/medium-the-shawshank-redemption-movie-poster-for-room-with-gloss-original-imafphnwmxjkvfjf.jpeg?q=90&crop=false",
    },
    {
      id: 2,
      title: "Schindler's List",
      poster:
        "https://i.etsystatic.com/9309762/r/il/ab2837/3921526016/il_570xN.3921526016_o0h9.jpg",
    },
    {
      id: 3,
      title: "Forrest Gump",
      poster:
        "https://i.etsystatic.com/17910158/r/il/8a2f69/3490319489/il_fullxfull.3490319489_f98e.jpg",
    },
    {
      id: 4,
      title: "Inception",
      poster:
        "https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/7/y/y/large-newposter8952-wall-poster-a-wallpapers-inception-animated-original-imaf5tgggcfznyfd.jpeg?q=90&crop=false",
    },
    {
      id: 5,
      title: "The Matrix",
      poster:
        "https://cdn.shopify.com/s/files/1/1057/4964/products/the-matrix-vintage-movie-poster-original-subway-2-sheet-45x59-5660.jpg?v=1666926056",
    },
  ];

  const handleNavigate = () => {
    navigate("/1");
  };

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [carousel]
  );

  return (
    <div className={css.home}>
      <Header />
      <SearchBar />
      <main className={css.main}>
        <div className={css.categories}>
          <button
            className={`${css.category} ${
              movieType === MovieType.MOVIE ? css.active : ""
            }`}
            onClick={() => setMovieType(MovieType.MOVIE)}
          >
            <img src={MoviePlayIcon} alt="" />
            <span>KINO</span>
          </button>
          <button
            className={`${css.category} ${
              movieType === MovieType.SERIES ? css.active : ""
            }`}
            onClick={() => setMovieType(MovieType.SERIES)}
          >
            <img src={CinemaIcon} alt="" />
            <span>SERIAL</span>
          </button>
          <button
            className={`${css.category} ${
              movieType === MovieType.CARTOON ? css.active : ""
            }`}
            onClick={() => setMovieType(MovieType.CARTOON)}
          >
            <img src={CartoonIcon} alt="" />
            <span>MULTFILM</span>
          </button>
        </div>
        <div className={css.premieres}>
          <h2>PREMYERALAR</h2>
          <div className={css.scane}>
            <div className={`${css.carousel} keen-slider`} ref={sliderRef}>
              {fakeData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`carousel__cell ${
                      index === currentSlide ? css.activeSlide : ""
                    } `}
                    onClick={() => navigate("/" + item.id + 1)}
                  >
                    <img src={item.poster} className={css.moreInfoRight} />
                    <h3>{item.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={css.moviesList}>
          <div onClick={handleNavigate} className={css.movie}></div>
          <div onClick={handleNavigate} className={css.movie}></div>
          <div onClick={handleNavigate} className={css.movie}></div>
          <div onClick={handleNavigate} className={css.movie}></div>
        </div>
      </main>
    </div>
  );
}

export default Home;
