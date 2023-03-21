import Review from "./Review"

const reviews = [
  {
    name: "Larry Capaja",
    score: "5 / 5",
    review:
      "Perfect! Five stars!",
    getImageSrc: () => require("./assets/handsome.png"),
  },
  {
    name: "Norma Stitz",
    score: "5 / 5",
    review:
      "What a lovely place to eat",
      getImageSrc: () => require("./assets/handsomette.png"),
  },
  {
    name: "Kerry Caverga",
    score: "5 / 5",
    review:
      "I love these bruschettas!",
      getImageSrc: () => require("./assets/review1.jpg"),
  },
  {
    name: "Mike Hawk",
    score: "5 / 5",
    review:
      "I'll never give you up, Little Lemon!",
      getImageSrc: () => require("./assets/review2.jpg"),
  },
];

function CustomersSay() {
  return (
    <section class="reviewArea">
      <h2>Testimonials</h2>
    <div class="reviewGrid">
      {reviews.map((review) => (<Review
        name={review.name}
        score={review.score}
        review={review.review}
        imageSrc={review.getImageSrc()}
      /> ))}
    </div>
    </section>
  );
}

  export default CustomersSay;