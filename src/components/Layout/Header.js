import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import imgMeals from "../../assets/meals.jpg";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food Order</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={imgMeals} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    )
}

export default Header;