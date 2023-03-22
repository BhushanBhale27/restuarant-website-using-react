import { Fragment } from "react";
import meal from "../../assets/meal.jpg";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header} >
        <h1>MaxMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']} >
      <img src={meal} alt="delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
