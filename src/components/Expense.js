import React from "react";
import { Box, Card, CardContent, styled, Typography } from "@mui/material";

/*const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    weight: 10px;
    height: 60px;
  }
`;*/

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

const ExpenseBox = styled(Card)`
  display: flex;
  flex-direction: column;
  border-radious: 4px;
  padding: 15px 30px;
  margin: 10px;
  width: 140px;
  height: 30px;
`;

const CardStyle = styled(Card)`
  padding: 15px 20px;
`;

const Text = styled(Typography)`
  font-size: 14px;

  color: #5b657a;
`;

const Expense = ({ transaction, minustransaction }) => {
  const amount = transaction.map((tran) => tran.amount);
  const exp = minustransaction.map((min) => min.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((amount, item) => (amount += item), 0)
    .toFixed(2);

  const expense = (
    exp
      .filter((item) => item < 0)
      .reduce((amount, item) => (amount += item), 0) * -1
  ).toFixed(2);

  return (
    <div>
      <Container>
        <ExpenseBox>
          <Text>Income</Text>
          <Text>${income}</Text>
        </ExpenseBox>

        <ExpenseBox>
          <Text>Expense</Text>
          <Text>${expense}</Text>
        </ExpenseBox>
      </Container>
    </div>
  );
};

export default Expense;
