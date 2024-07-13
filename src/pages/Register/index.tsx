import {Link} from "react-router-dom";
import Button from "../../components/Button";
import css from "./style.module.css";

function Register() {
  return (
    <div className={css.register}>
      <div className={css.register_container}>
        <div className={css.register_header}>
          <h2>Register</h2>
        </div>
        <form>
          <div className={css.form_group}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className={css.form_group}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className={css.form_group}>
            <label htmlFor="retype-password">Re-type Password:</label>
            <input
              type="password"
              id="retype-password"
              name="password"
              required
            />
          </div>

          <Button>Register</Button>
          <Link className={css.link} to="/login">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
