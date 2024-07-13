import css from "./style.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button className={css.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
