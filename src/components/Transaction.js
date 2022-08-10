import React, { useState } from "react";
import "../style.css";
import ExpenseCard from "./ExpenseCard";
import IncomeCard from "./IncomeCard";

const Transaction = () => {
  const [active, Setactive] = useState("Income");

  return (
    <div className="main">
      <div className="main_card">
        <div className="row">
          <div class="column">
            <div class="card">
              <button onClick={() => Setactive("Income")}>Income</button>
              <button onClick={() => Setactive("Expense")}>Expense</button>
              {active === "Income" && <IncomeCard />}
              {active === "Expense" && <ExpenseCard />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
