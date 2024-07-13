import {Link} from "react-router-dom";
import Button from "../../components/Button";
import css from "./style.module.css";

import {useFormik} from "formik";
import * as Yup from "yup";
import useAuth from "../../api/useAuth";

function Register() {
  const {register, loading, error} = useAuth();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      register(values.username, values.password);
    },
  });

  // console.log(loading);
  // console.log(error);

  return (
    <div className={css.register}>
      <div className={css.register_container}>
        <div className={css.register_header}>
          <h2>Register</h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={css.form_group}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              autoComplete="username"
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
              autoComplete="new-password"
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
          <div className={css.form_group}>
            <label htmlFor="retype-password">Confirm Password:</label>
            <input
              type="password"
              id="retype-password"
              autoComplete="new-password"
              {...formik.getFieldProps("confirmPassword")}
              className={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? css.inputError
                  : ""
              }
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p>{formik.errors.confirmPassword}</p>
            ) : null}
          </div>

          <Button disabled={loading} type="submit">
            {loading ? "Loading..." : "Register"}
          </Button>
          <Link className={css.link} to="/login">
            Login
          </Link>

          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Register;
