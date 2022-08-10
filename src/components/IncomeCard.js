import React, { useState } from "react";
import "../style.css";
import styles from "../button.module.css";

const IncomeCard = (props) => {
  const [displayIcon, setDisplayIcon] = useState(props.value[0].id);

  const clickBtn = (data) => {
    props.onChange(data);
    setDisplayIcon(data.id);
    //console.log("==============", data.id);
  };

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
                  /*(displayIcon === data.id
                    ? styles.active
                    : displayIcon === data.id
                    ? styles.active2
                    : styles.active3)*/
                }
              >
                {data.value}
              </div>
            </div>
          );
        })}
      </div>
      <div>{props.in}</div>
    </>
  );
};

export default IncomeCard;
