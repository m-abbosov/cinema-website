import {useParams} from "react-router-dom";
import Header from "../../components/Header";
import SearchBar from "../../components/pages/Home/SearchBar";
import css from "./style.module.css";

import {useState} from "react";
import TelegramIcon from "../../assets/icons/telegram.png";

enum WatchType {
  ONLINE,
  TRAILER,
}

function DetailPage() {
  const [watchType, setWatchType] = useState(0);
  const {id} = useParams();
  console.log(id);

  return (
    <div className={css.detail}>
      <Header />
      <SearchBar />

      <main>
        <div className={css.moreInfo}>
          <div className={css.moreInfoLeft}>
            <div className={css.info}>
              <b>Nomi</b>
              <p>Intersteller</p>
            </div>
            <div className={css.info}>
              <b>Janr</b>
              <p>Drama</p>
            </div>
            <div className={css.info}>
              <b>Davlati</b>
              <p>USA, UK</p>
            </div>
            <div className={css.info}>
              <b>Tili</b>
              <p>English</p>
            </div>
            <div className={css.info}>
              <b>Yili</b>
              <p>2014</p>
            </div>
          </div>
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/s/g/3/large-newposter8503-movie-interstellar-hd-wallpaper-background-original-imaf5ttsfnfgt2zh.jpeg?q=90&crop=false"
            className={css.moreInfoRight}
          />
        </div>

        <div className={css.watchBox}>
          <div className={css.watchOrDownload}>
            <button
              className={watchType === WatchType.ONLINE ? css.active : ""}
              onClick={() => setWatchType(WatchType.ONLINE)}
            >
              ONLINE KO’RISH
            </button>
            <button
              className={watchType === WatchType.TRAILER ? css.active : ""}
              onClick={() => setWatchType(WatchType.TRAILER)}
            >
              TREYLER
            </button>
            <button>
              TELEGRAM ORQALI YUKLASH <img src={TelegramIcon} alt="" />
            </button>
          </div>
          <div className={css.movieBox}>
            {watchType === WatchType.TRAILER && (
              <iframe
                src="https://www.youtube.com/embed/m2vijtILDuk?si=NNdtFuA-ptuIRcrB"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}

            {watchType === WatchType.ONLINE && (
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                src="https://www.youtube.com/embed/zSWdZVtXT7E?si=M33ZbxHRxYZIFLF7"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DetailPage;
