import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CardContext";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numOfCartItems = items.reduce((currNum, item) => {
        return currNum + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlighted(true);

        const timer = setTimeout(() => setBtnHighlighted(false), 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;