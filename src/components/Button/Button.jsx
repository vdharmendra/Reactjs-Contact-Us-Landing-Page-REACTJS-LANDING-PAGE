import styles from "./Button.module.css";
const Button = ({isSecondray, icon, text, ...rest}) => {
     
  return (
   
    <button {...rest} className={isSecondray ? styles.secondary_btn : styles.primary_btn} >
        {icon}
        {text} 
    </button>
  );
}

export default Button;