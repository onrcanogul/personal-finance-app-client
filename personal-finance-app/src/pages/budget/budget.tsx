import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const Budget = () => {
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
              Onurcan Oğul
            </Typography>
            <Typography variant="h5" sx={{ color: "text.secondary" }}>
              Incomes : 1500 TL
            </Typography>
            <Typography variant="h5" sx={{ color: "text.secondary" }}>
              Expenses : 2000 TL
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Budget;
