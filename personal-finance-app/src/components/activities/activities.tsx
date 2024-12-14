import { Box, CircularProgress, Typography } from "@mui/material";
import CustomAccordion from "./accordion";
import Activity, { ActivityType } from "../../contrasts/activity";
import React, { useEffect } from "react";
import { getByActivityType } from "../../services/activity-service";

const Activities = ({ isIncome }) => {
  const [activities, setActivities] = React.useState<Activity[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    debugger;
    const activityType = isIncome ? ActivityType.Income : ActivityType.Expense;
    filterActivities(activityType);
  }, [isIncome]);

  const filterActivities = async (activityType: number) => {
    const filteredActivities = await getByActivityType(activityType);
    setActivities(filteredActivities);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  };

  return (
    <div className="activitiesDiv">
      <Typography textAlign={"center"} fontSize={"2em"}>
        {isIncome ? "Incomes" : "Expenses"}
      </Typography>
      {activities.map((activity, key) => {
        return (
          <div key={key} style={{ width: "50%", marginTop: "30px" }}>
            <CustomAccordion
              key={key}
              title={activity.name}
              description={activity.description}
            />
          </div>
        );
      })}
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
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 1000, // Öne çıkmasını sağlar
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Activities;
