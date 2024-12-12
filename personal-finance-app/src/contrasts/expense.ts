import Activity from "./activity";
import BaseEntity from "./base/base-entity";
import User from "./user";

interface Expense extends BaseEntity {
  price: number;
  userId: string;
  activityId: string;
  user: User;
  activity: Activity;
}

export default Expense;
