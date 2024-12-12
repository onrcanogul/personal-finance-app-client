interface User {
  id: string;
  username: string;
  incomes: any;
  expenses: any;
  refreshToken: string;
  refreshTokenExpiration: Date;
}

export default User;
