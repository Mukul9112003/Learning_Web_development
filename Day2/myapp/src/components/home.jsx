import React, { useEffect, useRef, useState } from "react";

export default function Home(props) {
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const btnref = useRef(null);
  const [form, setForm] = useState({});
  const [Hovercard, setHover] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      const data = await response.json();

      setCards(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <label htmlFor="email">Email</label>

      <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={handleChange}
      />

      {count < 8 && (
        <button ref={btnref} onClick={handleClick}>
          Count {count}
        </button>
      )}

      {count === 5 ? (
        <h1>
          Now it is dangerous and after {8 - count} clicks the button will
          disappear
        </h1>
      ) : (
        ""
      )}

      <div className="container mt-4">
        {cards.map((card) => {
          return (
            <div
              className="col-md-4 mb-4"
              key={card.id}
              onMouseEnter={() => setHover(card.id)}
              onMouseLeave={() => setHover(null)}
            >
              {Hovercard === card.id && <h6>Hovered: {card.title}</h6>}

              <h5 className="card-title">{card.title}</h5>

              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>

              <p className="card-text">{card.body}</p>

              <a href="#" className="card-link">
                Card link
              </a>

              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
