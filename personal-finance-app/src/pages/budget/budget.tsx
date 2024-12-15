import { useEffect, useState } from "react";
import BudgetEntity from "../../contrasts/budget";
import { get } from "../../services/budget-service";
import { currentUserId } from "../../services/user-service";
import { toast } from "material-react-toastify";
import UserCard from "../../components/card/user-card";
import Spinner from "../../components/spinner/spinner";

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
      <UserCard
        name={budget?.user?.username ?? "Onurcan Oğul"}
        income={budget?.totalIncome ?? "1400"}
        expense={budget?.totalExpense ?? "1300"}
      />
      <Spinner isLoading />
    </div>
  );
};

export default Budget;
