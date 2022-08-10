import { List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DiscountIcon from "@mui/icons-material/Discount";
import "../style.css";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import CommuteSharpIcon from "@mui/icons-material/CommuteSharp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";

const ContainerList = styled(ListItemText)`
  align-items: flex;
`;

const NewTransactions = (props) => {
  console.log(props.minustransaction);

  //Income Icon
  const getIncomeIcon = (type) => {
    return type === 1 ? (
      <div>
        <MonetizationOnOutlinedIcon
          sx={{
            color: "#d8a84f",
            backgroundColor: "#ecdab8",
            borderRadius: "22%",
            width: "25px",
            height: "25px",
            float: "left",
            marginRight: "20px",
          }}
        />
        <span style={{ fontSize: "15px", marginRight: "25px" }}>Salary</span>
      </div>
    ) : type === 2 ? (
      <div>
        <CakeRoundedIcon
          sx={{
            color: "#c337a5",
            backgroundColor: "#f7b7e9",
            borderRadius: "22%",
            width: "25px",
            height: "25px",
            float: "left",
            marginRight: "20px",
          }}
        />
        <span style={{ fontSize: "15px", marginRight: "40px" }}>Gift</span>
      </div>
    ) : (
      <div>
        <ReplayRoundedIcon
          sx={{
            color: "#5fe95a",
            backgroundColor: "#e2e99c",
            borderRadius: "22%",
            width: "25px",
            height: "25px",
            float: "left",
            marginRight: "20px",
          }}
        />
        <span style={{ fontSize: "15px", marginRight: "19px" }}>Refund</span>
      </div>
    );
  };

  //Expense Icon
  const getICon = (type) => {
    return type === 1 ? (
      <div>
        <HomeSharpIcon
          sx={{
            color: "#d8a84f",
            backgroundColor: "#ecdab8",
            borderRadius: "22%",
            width: "25px",
            height: "25px",
            float: "left",
            marginRight: "20px",
          }}
        />
        <span style={{ fontSize: "15px", marginRight: "35px" }}>Rent</span>
      </div>
    ) : type === 2 ? (
      <div>
        <ShoppingBasketSharpIcon
          sx={{
            color: "#c337a5",
            backgroundColor: "#f7b7e9",
            borderRadius: "22%",
            width: "25px",
            height: "25px",
            float: "left",
            marginRight: "20px",
          }}
        />
        <span style={{ fontSize: "15px" }}>Shopping</span>
      </div>
    ) : (
      <div>
        <CommuteSharpIcon
          sx={{
            color: "#5abce9",
            backgroundColor: "#bde5f7",
            borderRadius: "22%",
            width: "25px",
            height: "25px",
            float: "left",
            marginRight: "20px",
          }}
        />
        <span style={{ fontSize: "15px" }}>Transport</span>
      </div>
    );
  };
  return (
    <div>
      <div>
        <div className="balance__empty">Recent Transactions</div>
        {/*<DiscountIcon className="svg_icons" />*/}
        {/*<p>
          Start adding <br></br> a new transaction
         </p>*/}

        <List style={{ marginTop: "10px" }}>
          {props.transaction.map((data) => {
            const color = data.amount > 0 ? "#a9e61c" : "#ff6fb7";
            return (
              <ListItem style={{ marginTop: "5px", paddingTop: "20px" }}>
                <ContainerList>{getIncomeIcon(data.type)}</ContainerList>
                <ContainerList
                  style={{
                    color: `${color}`,
                    paddingLeft: "30px",
                  }}
                >
                  +{data.amount}
                </ContainerList>
                <DeleteIcon
                  className="delete"
                  onClick={() => props.deleteBudget(data.id)}
                />
              </ListItem>
            );
          })}

          {props.minustransaction.map((data) => {
            const color = data.amount > 0 ? "#a9e61c" : "#ff6fb7";
            return (
              <ListItem style={{ marginTop: "5px", paddingTop: "20px" }}>
                <ContainerList>{getICon(data.type)}</ContainerList>
                <ContainerList
                  style={{ color: `${color}`, paddingLeft: "30px" }}
                >
                  {data.amount}
                </ContainerList>
                <DeleteIcon
                  className="delete"
                  onClick={() => props.deleteMinusBudget(data.id)}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default NewTransactions;
