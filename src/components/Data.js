//Not necessary
import React from "react";

const Data = () => {
  return (
    <div>
      <div className="main_card">
        <div className="row">
          <div class="column">
            <div class="card">
              <h3>Balance</h3>
              <p>$1000</p>
              <Expense />
              <div className="row">
                <div class="column">
                  <div class="card">
                    <NewTransactions />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="main_card">
            <div className="row">
              <div class="column">
                <div class="card">
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={() => Setactive("Income")}
                  >
                    Income
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={() => Setactive("Expense")}
                  >
                    Expense
                  </Button>
                  {active === "Income" && <IncomeCard />}
                  {active === "Expense" && <ExpenseCard />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
