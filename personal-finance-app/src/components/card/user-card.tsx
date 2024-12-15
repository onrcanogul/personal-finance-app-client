import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const UserCard = ({ name, income, expense }) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {name}
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            Incomes : {income}
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            Expenses : {expense}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
