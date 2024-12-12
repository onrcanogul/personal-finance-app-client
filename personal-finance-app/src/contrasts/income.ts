import Activity from "./activity";
import BaseEntity from "./base/base-entity";
import User from "./user";

interface Income extends BaseEntity {
  price: number;
  userId: string;
  activityId: string;
  user: User;
  activity: Activity;
}

export default Income;
