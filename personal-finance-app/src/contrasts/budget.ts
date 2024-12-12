import BaseEntity from "./base/base-entity";
import User from "./user";

interface Budget extends BaseEntity {
  userId: string;
  user: User;
  totalIncome: number;
  totalExpense: number;
}

export default Budget;
