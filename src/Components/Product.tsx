import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
        <div>
            <h1>Product</h1>
            <p>Coming soon..</p>
            {items.map((props) => {
                return(
                    <div>
                        <div className="content">
                            <h5>{props.title}</h5>
                            <p>{props.description}</p>
                            <p>${props.price}</p>
                        </div>
                        <img src={props.image} alt="" />
                    </div>
                )
            })}
        </div>
    
        )
}

//Product