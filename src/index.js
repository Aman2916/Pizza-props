import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to
            <p>choose from . All from our stone oven, all organic ,</p>
            <p style={{ textAlign: "center" }}>all delicious.</p>
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaOb={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Oops no menu to show :) Please come back later.</p>
      )}
    </main>
  );
}
function Pizza({ pizzaOb }) {
  //const { name, photoName, ingredients } =

  return (
    <li className={`pizza ${pizzaOb.soldOut ? "sold-out " : " "}`}>
      <img src={pizzaOb.photoName} alt={pizzaOb.name} />
      <div>
        <h3>{pizzaOb.name}</h3>
        <p>{pizzaOb.ingredients}</p>
        <span>{pizzaOb.soldOut ? "SOLD OUT" : pizzaOb.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hours = new Date().getHours();
  const openHour = 9;
  const closed = 22;
  const isOpen = hours >= openHour && hours <= closed;

  return (
    <div className="order">
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closed} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 hours and {closed}
            :00 hours
          </p>
        )}
      </footer>
    </div>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're Open untill {closeHour}:00 Order now or Buy Online .</p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
