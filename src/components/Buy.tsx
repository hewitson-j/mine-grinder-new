import "./Buy.css";

export default function Buy() {
  return (
    <div id="buy" className="buy">
      <h2>Buy Book</h2>
      <p>
        You can buy the book by following{" "}
        <a href="https://www.amazon.com/dp/B0C3XJ1TWJ/ref=sr_1_2?crid=3B6W6VX39RZF8&keywords=kindle+books+mine+grinder&qid=1682796082&s=books&sprefix=kindle+books+mine+grinde%2Cstripbooks%2C181&sr=1-2">
          this
        </a>{" "}
        link or by clicking the button below.
      </p>
      <button id="buy-button-container">
        <a
          href="https://www.amazon.com/dp/B0C3XJ1TWJ/ref=sr_1_2?crid=3B6W6VX39RZF8&keywords=kindle+books+mine+grinder&qid=1682796082&s=books&sprefix=kindle+books+mine+grinde%2Cstripbooks%2C181&sr=1-2"
          id="buy-button"
        >
          Buy Now
        </a>
      </button>
    </div>
  );
}
