import { useState } from "react";
import UserCard from "../../components/card/user-card";
import Spinner from "../../components/spinner/spinner";
import { Grid, Typography } from "@mui/material";
import ActivityGrid from "../../components/portfolio/ActivityGrid";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false); //gonna be true
  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        width: "100%",
      }}
    >
      <Grid item xs={12} lg={12} md={12}>
        <UserCard name={"Onurcan"} income={1400} expense={1500} />
        <Spinner isLoading={isLoading} />
      </Grid>

      <Grid item xs={12} sm={4} md={5} mt={4}>
        <Typography textAlign={"center"}>Incomes</Typography>
        <ActivityGrid />
      </Grid>
      <Grid item xs={12} sm={4} md={5} mt={4}>
        <Typography textAlign={"center"}>Expenses</Typography>
        <ActivityGrid />
      </Grid>
    </Grid>
  );
};

export default Portfolio;
