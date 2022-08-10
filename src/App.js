import "./App.css";
//import { Button } from "@mui/material";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import NewTransactions from "./components/NewTransactions";
import Transaction from "./components/Transaction";

function App() {
  return (
    <div className="App">
      <>
        <div>
          <Balance />
        </div>
      </>
    </div>
  );
}

export default App;
