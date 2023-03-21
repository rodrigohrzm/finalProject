import {ReactComponent as Basket} from './assets/Basket.svg';
import { Link } from "react-router-dom"
import React from "react"

const Card = ({ title, price, description, imageSrc }) => {
    return(
        <div class="cardContainer">
            <img src={imageSrc} />
            <text>{title}</text>
            <text>{price}</text>
            <text>{description}</text>
            <button><Link to={"/"}>
                Order a delivery <Basket class="ico" />
            </Link></button>
        </div>
    );
}

export default Card;