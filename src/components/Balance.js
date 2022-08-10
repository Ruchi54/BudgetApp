import React, { useState } from "react";
import "../style.css";
import Expense from "./Expense";
import ExpenseCard from "./ExpenseCard";
import IncomeCard from "./IncomeCard";
import NewTransactions from "./NewTransactions";
import { Button } from "@mui/material";
import BackspaceSharpIcon from "@mui/icons-material/BackspaceSharp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { evaluate } from "mathjs";
import styled from "@emotion/styled";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import CommuteSharpIcon from "@mui/icons-material/CommuteSharp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";

const Buttons = styled(Button)`
  border-radious: 4px;
  padding: 15px 30px;
  margin: 10px;
  width: 120px;
  height: 30px;
  background-color: #7b56ff;
`;

//Radio button
//Expance
const objects = [
  {
    id: 1,
    value: (
      <HomeSharpIcon
        sx={{
          color: "#d8a84f",
        }}
      />
    ),
  },
  {
    id: 2,
    value: (
      <ShoppingBasketSharpIcon
        sx={{
          color: "#c337a5",
        }}
      />
    ),
  },
  {
    id: 3,
    value: (
      <CommuteSharpIcon
        sx={{
          color: "#5abce9",
        }}
      />
    ),
  },
];

//Income
let object = [
  {
    id: 1,
    value: (
      <MonetizationOnOutlinedIcon
        sx={{
          color: "#d8a84f",
        }}
      />
    ),
  },
  {
    id: 2,
    value: (
      <CakeRoundedIcon
        sx={{
          color: "#c337a5",
        }}
      />
    ),
  },
  {
    id: 3,
    value: (
      <ReplayRoundedIcon
        sx={{
          color: "#5fe95a",
        }}
      />
    ),
  },
];

const Balance = () => {
  const [active, Setactive] = useState("Income");

  //For Calculator
  const [transaction, setTransaction] = useState([]);
  const [minustransaction, setMinusTransaction] = useState([]);
  const [expression, setExpression] = useState("");

  const input = (value) => {
    let newExpression = expression + value;
    setExpression(newExpression);
  };

  const calculate = () => {
    let result = expression;

    const newData = {
      id: new Date().getTime(),
      amount: +result,
      type: Values,
    };

    setTransaction([...transaction].concat(newData));
    setExpression("");
  };

  const calculateMinus = (value) => {
    let result = value + evaluate(expression);

    const newData = {
      id: new Date().getTime(),
      amount: +result,
      type: Value,
    };

    setMinusTransaction([...minustransaction].concat(newData));
    setExpression("");
  };

  //For total BALANCE
  const total_data = [...transaction].concat([...minustransaction]);

  const amount = total_data.map((tran) => tran.amount);

  const total =
    amount >= 0
      ? amount.reduce((amount, item) => (amount += item), 0).toFixed(2)
      : (amount.reduce((amount, item) => (amount -= item), 0) * -1).toFixed(2);

  //Delete Budget
  const deleteBudget = (id) => {
    let updatedBudget = [...transaction].filter((bud) => bud.id !== id);
    setTransaction(updatedBudget);
  };

  const deleteMinusBudget = (id) => {
    let updatedBudget = [...minustransaction].filter((bud) => bud.id !== id);
    setMinusTransaction(updatedBudget);
  };

  //Radio button
  const [Value, setValue] = useState([objects[0]]);
  const [Values, setValues] = useState([object[0]]);

  const Changed = (data) => {
    setValue(data.id);
    setValues(data.id);
  };
  return (
    <div className="row">
      <div className="column">
        <div className="balance_card">
          <h3 style={{ color: "white", fontSize: "25px" }}>Balance</h3>
          <p style={{ color: "white", fontSize: "20px" }}>${total}</p>
          <Expense
            transaction={transaction}
            minustransaction={minustransaction}
          />

          <div className="transaction_card">
            <NewTransactions
              ivalue={Value}
              transaction={transaction}
              minustransaction={minustransaction}
              deleteBudget={deleteBudget}
              deleteMinusBudget={deleteMinusBudget}
            />
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <div className="buttons">
            <Buttons
              variant="contained"
              weight="20px"
              onClick={() => Setactive("Income")}
            >
              Income
            </Buttons>
            <Buttons
              variant="contained"
              size="medium"
              onClick={() => Setactive("Expense")}
            >
              Expense
            </Buttons>
          </div>
          {active === "Income" && (
            <IncomeCard
              value={object}
              onChange={Changed}
              in={
                <div>
                  <div>
                    <textarea
                      value={expression}
                      style={{ fontSize: "20px" }}
                    ></textarea>

                    <AddCircleIcon
                      onClick={calculate}
                      className="svg_addicons"
                    />
                  </div>

                  <div className="calculator">
                    <div
                      className="calculator__number"
                      onClick={() => input("1")}
                    >
                      1
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("2")}
                    >
                      2
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("3")}
                    >
                      3
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("4")}
                    >
                      4
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("5")}
                    >
                      5
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("6")}
                    >
                      6
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("7")}
                    >
                      7
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("8")}
                    >
                      8
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("9")}
                    >
                      9
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input(".")}
                    >
                      .
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("0")}
                    >
                      0
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => {
                        setExpression("");
                      }}
                    >
                      <BackspaceSharpIcon />
                    </div>
                  </div>
                </div>
              }
            />
          )}
          {active === "Expense" && (
            <ExpenseCard
              value={objects}
              onChange={Changed}
              am={
                <>
                  <div className="type_amount">
                    <textarea
                      style={{ fontSize: "20px" }}
                      value={expression}
                    ></textarea>

                    <AddCircleIcon
                      onClick={() => calculateMinus("-")}
                      className="svg_addicons"
                    />
                  </div>
                  <div className="calculator">
                    <div
                      className="calculator__number"
                      onClick={() => input("1")}
                    >
                      1
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("2")}
                    >
                      2
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("3")}
                    >
                      3
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("4")}
                    >
                      4
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("5")}
                    >
                      5
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("6")}
                    >
                      6
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("7")}
                    >
                      7
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("8")}
                    >
                      8
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("9")}
                    >
                      9
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input(".")}
                    >
                      .
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => input("0")}
                    >
                      0
                    </div>
                    <div
                      className="calculator__number"
                      onClick={() => {
                        setExpression("");
                      }}
                    >
                      <BackspaceSharpIcon />
                    </div>
                  </div>
                </>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
