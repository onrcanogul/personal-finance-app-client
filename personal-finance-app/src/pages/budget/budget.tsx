import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import BudgetEntity from "../../contrasts/budget";
import { get } from "../../services/budget-service";
import { currentUserId } from "../../services/user-service";
import { toast } from "material-react-toastify";

const Budget = () => {
  const [budget, setBudget] = useState<BudgetEntity>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!currentUserId())
      toast.error("You have to authenticate before going on");
    else {
      const response = await get(currentUserId());
      setBudget(response);
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Card sx={{ width: "75%" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {budget?.user?.username ?? "Onurcan Oğul"}
            </Typography>
            <Typography variant="h5" sx={{ color: "text.secondary" }}>
              Incomes : {budget?.totalIncome ?? "1400"}
            </Typography>
            <Typography variant="h5" sx={{ color: "text.secondary" }}>
              Expenses : {budget?.totalExpense ?? "1300"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {isLoading && (
        <Box className="spinner">
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Budget;
