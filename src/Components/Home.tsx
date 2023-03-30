import { useState } from "react"
import "./Home.css"
import axios from "axios"

export default function Home() {


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

const [input,setInput] = useState('')
const [result,setResult] = useState<Product[]>([])

    const fetchData = (value:string) => {
        axios.get(import.meta.env.VITE_API_STORE)
            .then(res => { 
                const result = res.data.filter((product:any) => {
                    return (
                        value && 
                        product && 
                        product.title && 
                        product.title.toLowerCase().includes(value)
                    )
                })
                setResult(result)
            })
    }

    const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setInput(value)
        fetchData(value)
    }

    return (
            <div>
                <h1>Home</h1>
                <p>Search Store</p>
                <div className="input-container">
                    <input 
                        type="Search" 
                        placeholder="Search Product" 
                        value={input}
                        onChange={handlChange}
                    />
                </div>
                <div className='content-container'>
            <ul>
                {result.map((props : Product) => {
                    return(
                        <li key={props.id}>
                            <>
                                <div className="content">
                                <h3>{props.title}</h3>
                                <img src={props.image} alt="" />
                                <p>{props.description}</p>
                                <p>${props.price}</p>
                                </div>
                            </>
                        </li>
                    )
                })}
            </ul>
        </div>
            </div>
    )
}