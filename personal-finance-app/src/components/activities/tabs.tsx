import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import Activities from "./activities";
import { Box } from "@mui/material";
import "./tabs.css";

export default function ActivitiesTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {" "}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        <Tab icon={<AttachMoneyIcon />} label="Incomes" value="1" />
        <Tab icon={<MoneyOffIcon />} label="Expenses" value="2" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {value == 1 && <Activities isIncome={true} />}
        {value == 2 && <Activities isIncome={false} />}
      </Box>
    </>
  );
}
