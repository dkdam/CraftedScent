import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Carousel.css';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const Carousel: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
        setProducts(response.data.slice(0, 5));
        });
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
        handleNextSlide();
        }, 3000);
    
        return () => clearInterval(intervalId);
    }, [activeSlide]);

    const handlePrevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setActiveSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel-container">
        {products.map((product, index) => (
            <div key={product.id} className={`carousel-slide ${activeSlide === index ? 'active' : ''}`}>
            <img src={product.image} alt={product.title} className="carousel-image" />
            </div>
        ))}
        <button className="carousel-button prev" onClick={handlePrevSlide}>
            &#8249;
        </button>
        <button className="carousel-button next" onClick={handleNextSlide}>
            &#8250;
        </button>
        </div>
    );
};

export default Carousel;
