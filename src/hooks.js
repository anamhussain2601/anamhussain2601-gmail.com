import React, { useState } from "react";

export default function Button() {
    const [buttonText, setButtonText] = useState("Click me, please")
    const [count, updateCount] = useState(0)

    const style = {
        'padding': '1rem',
        'borderRadius': '1rem',
        'backgroundColor': '#545ed8',
        'color': 'white',
        'fontSize': '16px'
    }

    function handleClick() {
        updateCount(count + 1)
        return setButtonText("Thanks, been clicked!");
    }

    return (
        <div>
            <p>You clicked <b>{count}</b> times</p>
            <button onClick={handleClick} style={style}>
                {buttonText}
            </button>
        </div>
    )
}