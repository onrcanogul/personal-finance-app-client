import BaseEntity from "./base/base-entity";
import User from "./user";

interface Report extends BaseEntity {
  userId: string;
  user: User;
}

export default Report;
