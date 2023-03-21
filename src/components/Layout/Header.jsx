import { Fragment } from 'react'
import meal from '../../assets/meal.jpg'
import classes from './header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
      <h1>MaxMeals</h1>
      <button><HeaderCartButton/></button>
      </header>
      <img className={classes['main-image']} src={meal} alt="delicious food" />
    </Fragment>
  )
}

export default Header
