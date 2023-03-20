import { Link } from "react-router-dom"
import Card from "./Card"

const dishes = [
  {
    title: "Greek Salad",
    description:
      "The famous greek salad of cripsy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("./assets/greek salad.jpg"),
  },
  {
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("./assets/bruschetta.jpg"),
  },
  {
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been ourced and is as authentic as can be imagined.",
      getImageSrc: () => require("./assets/lemon dessert.jpg"),
  },
];


// {dishes.map((dish) => (
// function Specials() {<Card
//   title={dish.title}
//   description={dish.description}
//   imageSrc={dish.getImageSrc()}
// />
// ))}

function Specials() {
    return (
      <section class="specialDishes">
      <div class="topArea">
        <h2>This week's Specials!</h2>
        <button><Link to={"/"}>Online Menu</Link></button>
      </div>
      <div class="cardsGrid">
        <div class="Card">
        </div>
      </div>
      </section>
    );
  }

export default Specials;