import React from "react";

const CardContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => null,
    removeItem: () => null
});

export default CardContext;