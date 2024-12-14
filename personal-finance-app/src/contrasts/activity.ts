import BaseEntity from "./base/base-entity";

interface Activity extends BaseEntity {
  name: string;
  description: string;
  type: ActivityType;
}
export enum ActivityType {
  Expense = 1,
  Income = 2,
}

export default Activity;
