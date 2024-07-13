import {useFormik} from "formik";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import useAuth from "../../api/useAuth";
import Button from "../../components/Button";
import css from "./style.module.css";

function Login() {
  const {login, loading, error} = useAuth();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      login(values.username, values.password);
    },
  });
  return (
    <div className={css.login}>
      <div className={css.login_container}>
        <div className={css.login_header}>
          <h2>Login</h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={css.form_group}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              {...formik.getFieldProps("username")}
              className={
                formik.touched.username && formik.errors.username
                  ? css.inputError
                  : ""
              }
            />

            {formik.touched.username && formik.errors.username ? (
              <p>{formik.errors.username}</p>
            ) : null}
          </div>
          <div className={css.form_group}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              className={
                formik.touched.password && formik.errors.password
                  ? css.inputError
                  : ""
              }
            />
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
          </div>
          <Button disabled={loading} type="submit">
            {loading ? "Loading..." : "Login"}
          </Button>
          <Link className={css.link} to="/register">
            Register
          </Link>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
