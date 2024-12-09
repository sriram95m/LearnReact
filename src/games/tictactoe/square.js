import React from "react";
import { useState } from "react";
import "./tictactoe.css"

export default function Square({id, getCurrentPlayer}) {
    const [value, setValue] = useState("");
    function handleClick() {
        if(value === "")
        {
            let currentPlayer = getCurrentPlayer(id);
            setValue(currentPlayer);
        }
    }
    return <>
    <button type="button" onClick={handleClick} className="toe__square">{value}</button>
    </>
}