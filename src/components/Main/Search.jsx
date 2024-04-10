import { useState } from "react";
import { useWeather } from "../../context/weatherContext";
import styles from "./Search.module.css";

function Search() {
  const { setSearchQuery } = useWeather();
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(query);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Tirana"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.button} type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0,0,256,256"
        >
          <g
            fill="#22b8cf"
            fillRule="nonzero"
            stroke="#22b8cf"
            strokeWidth="3"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(5.12,5.12)">
              <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
            </g>
          </g>
        </svg>
      </button>
    </form>
  );
}

export default Search;
