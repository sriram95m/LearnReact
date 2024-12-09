import React, { useState } from "react";
import Square from "./Square";
import "./tictactoe.css"
import PlayerDetails from "./PlayerDetails";

export default function tictactoe() {
    let currentSelection = "X"
    let initialArr = [currentSelection, "", "", "", "", "", "", "", "", ""]
    const [arr, setArr] = useState(initialArr)

    function getCurrentPlayer(id) {
        console.log(id);
        currentSelection = arr[0];
        
        //togglePlayer
        initialArr = arr;
        if(arr[0] === "X")
            {
                initialArr[0] = "O";
            }
            else{
                initialArr[0] = "X";
            }

        //assign to array
        initialArr[id] = currentSelection;

        setArr(initialArr);
        var winner = checkForWinner(initialArr);
        if(winner !== "")
        {
            alert("winner is ", winner)
        }
        return currentSelection;
    }

    function togglePlayer(){
        if(arr[0] === "X")
        {
            initialArr = arr;
            initialArr[0] = "O";
        }
        else{
            initialArr = arr;
            initialArr[0] = "X";
        }
        // arr[0] = currentSelection;
        // setArr(currentSelection);
    }

    function checkForWinner(gameArray){
        const winnerIndices = ["1,2,3", "4,5,6", "7,8,9", "1,4,7", "2,5,8", "3,6,9", "1,5,9", "3,5,7"]
        for(var index in winnerIndices){
            var indices = winnerIndices[index].split(",");
            if(gameArray[indices[0]] !== "" && gameArray[indices[0]] === gameArray[indices[1]] && gameArray[indices[1]] === gameArray[indices[2]]){
                return arr[indices[0]];
            }
        }
        return "";
    }

    return(
        <><div className="tic-tac-toe">
            <div style={{height:"40vh"}}>
            <PlayerDetails currentPlayerSymbol={arr[0]}/>
            </div>
            
            <div className="tic-tac-toe__squares_rows">
                <div>
                <Square id={1} getCurrentPlayer={getCurrentPlayer} />
                <Square id={2} getCurrentPlayer={getCurrentPlayer} />
                <Square id={3} getCurrentPlayer={getCurrentPlayer} />
                </div>
                <div>
                <Square id={4} getCurrentPlayer={getCurrentPlayer} />
                <Square id={5} getCurrentPlayer={getCurrentPlayer} />
                <Square id={6} getCurrentPlayer={getCurrentPlayer} />
                </div>
                <div>
                <Square id={7} getCurrentPlayer={getCurrentPlayer} />
                <Square id={8} getCurrentPlayer={getCurrentPlayer} />
                <Square id={9} getCurrentPlayer={getCurrentPlayer} />
                </div>
            </div>
        </div>
        </>
    )
}