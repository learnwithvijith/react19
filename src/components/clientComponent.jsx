"use client"; 

import { useState } from "react";

export default function ClientComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Client-Side Interactivity:</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}