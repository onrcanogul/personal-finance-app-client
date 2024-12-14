import { Typography } from "@mui/material";
import CustomAccordion from "./accordion";

const Activities = ({ isIncome }) => {
  return (
    <div className="activitiesDiv">
      <Typography textAlign={"center"} fontSize={"2em"}>
        {isIncome ? "Incomes" : "Expenses"}
      </Typography>
      <div style={{ width: "50%", marginTop: "30px" }}>
        <CustomAccordion
          title={"Eating a burger"}
          description={"Eating a burger"}
        />
      </div>
      <div style={{ width: "50%", marginTop: "30px" }}>
        <CustomAccordion
          title={"Eating a burger"}
          description={"Eating a burger"}
        />
      </div>
      <div style={{ width: "50%", marginTop: "30px" }}>
        <CustomAccordion
          title={"Eating a burger"}
          description={"Eating a burger"}
        />
      </div>
      <div style={{ width: "50%", marginTop: "30px" }}>
        <CustomAccordion
          title={"Eating a burger"}
          description={"Eating a burger"}
        />
      </div>
      <div style={{ width: "50%", marginTop: "30px" }}>
        <CustomAccordion
          title={"Eating a burger"}
          description={"Eating a burger"}
        />
      </div>
    </div>
  );
};

export default Activities;
