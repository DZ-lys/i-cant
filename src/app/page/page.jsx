"use client";
import Square from "@/componants/Square";
import styles from "./page.module.css";
import { useState } from "react";

const sudo = () => {
  const [numbers, setNumbers] = useState([5, 2, 3, 4, 1, 6, 7, 8, 9]);

  const incr = () => {
    numbers.sort((a, b) => {
      b - a;
    });
    setNumbers([...incr]);
  };

  return (
    <div className={styles.pageBody}>
      <div className={styles.incrCon}>
        <button>incr</button>
        <button>decr</button>
      </div>
      {numbers.map((num) => {
        return <Square value={num} />;
      })}
    </div>
  );
};

export default sudo;
