import { Alert, Grid } from "@mui/material";
import CustomCard from "../../components/card/card";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = (path: string) => {
    navigate(path);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={2}
        className="home-cards"
        style={{ width: "90%" }}
      >
        <Grid item xs={12} sm={12} lg={12}>
          <Alert severity="success" sx={{ width: "100%", marginTop: "30px" }}>
            You can navigate pages from sidebar.
          </Alert>
        </Grid>
        <Grid item xs={12} sm={3} lg={3}>
          <CustomCard
            name={"Expenses"}
            description={
              "Track and manage your expenses effectively. View detailed expense descriptions and insights for better financial planning. "
            }
            image={"src/assets/expenses.jpg"}
            onClick={() => handleClickButton("/activity?type=expenses")}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={3}>
          <CustomCard
            name={"Incomes"}
            description={
              "Monitor your income sources in one place. Analyze detailed income breakdowns to make smarter financial decisions."
            }
            image={"src/assets/income2.webp"}
            onClick={() => handleClickButton("/activity?type=incomes")}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={3}>
          <CustomCard
            name={"Portfolio"}
            description={
              "Manage your financial portfolio seamlessly. Access detailed portfolio information and gain insights for future investments."
            }
            image={"src/assets/profile.jpg"}
            onClick={() => handleClickButton("/portfolio")}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={3}>
          <CustomCard
            name={"Activity"}
            description={
              "Log and track your financial activities. View a summary of key actions and make data-driven financial adjustments."
            }
            image={"src/assets/activity.avif"}
            onClick={() => handleClickButton("/activity")}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={3}>
          <CustomCard
            name={"Budget"}
            description={
              "Create, manage, and optimize your budgets. Access detailed budget insights and ensure your goals are met efficiently."
            }
            image={"src/assets/budget.jpg"}
            onClick={() => handleClickButton("/budget")}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={3}>
          <CustomCard
            name={"Report"}
            description={
              "Generate comprehensive financial reports. Analyze key metrics and make informed decisions with detailed data."
            }
            image={"src/assets/report.jpg"}
            onClick={() => handleClickButton("/report")}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
