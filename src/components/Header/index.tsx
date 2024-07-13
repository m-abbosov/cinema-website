import {useNavigate} from "react-router-dom";
import Button from "../Button";
import css from "./style.module.css";
function Header() {
  const navigate = useNavigate();
  return (
    <header className={css.header}>
      <Button onClick={() => navigate("/login")}>Kirish</Button>
      <Button onClick={() => navigate("/register")}>Ro'yxatdan o'tish</Button>
    </header>
  );
}

export default Header;
