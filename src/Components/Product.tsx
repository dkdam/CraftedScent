import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

export default function Product() {

    const [items,setItems] = useState([])

    const store = async() => {
        axios.get('http://fakestoreapi.com/products').then(res => {
                setItems(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        store()
    },[])

    return (
        <div className='content-container'>
            <h1>Product</h1>
            <ul>
            {items.map((props : ProductProps) => {
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
    
        )
}

//Product