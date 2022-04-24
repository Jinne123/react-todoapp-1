import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MainResults.css";
import axios from "axios";

const HtmlResults2 = () => {
  const [pokemaan, setPokemaan] = useState("");
  const [pokemaan2, setPokemaan2] = useState("");
  const [checked, setChecked] = useState(false);
  const [winner, setWinner] = useState("");

  let { id, id2 } = useParams();

  const componentDidMount2 = (e) => {
    e.preventDefault();
    axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then((data) => {
      setPokemaan(data.data);
      console.log(data.data);
    });

    axios.get("https://pokeapi.co/api/v2/pokemon/" + id2).then((data) => {
      setPokemaan2(data.data);
      console.log(data.data);
    });

    if (pokemaan2.weight > pokemaan.weight) {
      setWinner(pokemaan2);
    } else {
      setWinner(pokemaan);
    }
    setChecked(true);
    console.log(winner);
  };

  const winnerhtml = <div></div>;

  return (
    <div className="results2">
      <Link to="/">
        <input type="submit" value="New battle"></input>
      </Link>

      <form onSubmit={(e) => componentDidMount2(e)}>
        <input type="submit" value="Show results"></input>
      </form>

      {checked ? winnerhtml : ""}
      <img src={winner?.sprites?.front_default} alt="" />
    </div>
  );
};

export default HtmlResults2;
