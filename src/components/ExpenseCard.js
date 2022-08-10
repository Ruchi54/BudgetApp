import React, { useState } from "react";

import "../style.css";
import styles from "../button.module.css";

const ExpenseCard = (props) => {
  const clickBtn = (data) => {
    props.onChange(data);
    setDisplayIcon(data.id);
  };

  const [displayIcon, setDisplayIcon] = useState(props.value[0].id);
  return (
    <>
      <div className="icon_row">
        {props.value.map((data, i) => {
          return (
            <div>
              <div
                key={i}
                onClick={() => clickBtn(data)}
                className={
                  styles.btn +
                  " " +
                  (displayIcon === data.id ? styles.active : styles.active1)
                }
              >
                {data.value}
              </div>
            </div>
          );
        })}
      </div>

      <div>{props.am}</div>
    </>
  );
};

export default ExpenseCard;
