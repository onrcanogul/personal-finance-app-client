import { Typography } from "@mui/material";
import CustomAccordion from "../../components/accordion/accordion";
import "./activities.css";

const Activities = () => {
  return (
    <div className="activitiesDiv">
      <Typography textAlign={"center"} fontSize={"2em"}>
        Activities
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
