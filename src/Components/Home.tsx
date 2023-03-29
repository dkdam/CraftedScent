import { useState } from "react"
import "./Home.css"

export default function Home() {

    const [input,setInput] = useState('')

    return (
            <div>
                <h1>Home</h1>
                <p>Search Store</p>
                <div className="input-container">
                    <input 
                        type="Search" 
                        placeholder="Search Product" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div>
    )
}