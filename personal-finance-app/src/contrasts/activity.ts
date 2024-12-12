import BaseEntity from "./base/base-entity";

interface Activity extends BaseEntity {
  name: string;
  description: string;
}

export default Activity;
