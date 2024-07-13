import RulesIcon from "../../../../assets/icons/rules.png";
import SearchIcon from "../../../../assets/icons/search.png";
import TelegramIcon from "../../../../assets/icons/telegram.png";

import Button from "../../../Button";

import css from "./style.module.css";

function SearchBar() {
  return (
    <div className={css.searchBar}>
      <div className={css.searchInput}>
        <input type="text" placeholder="Qidirish..." />
        <img src={SearchIcon} alt="" />
      </div>
      <div className={css.icons}>
        <Button className={css.buttonIcon}>
          <img src={TelegramIcon} alt="" />
        </Button>
        <Button className={css.buttonIcon}>
          <img src={RulesIcon} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
