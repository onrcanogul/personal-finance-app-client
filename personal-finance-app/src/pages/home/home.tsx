import CustomCard from "../../components/card/card";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="homeDiv">
        <CustomCard
          name={"Expenses"}
          description={
            "Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description "
          }
          image={"asdasd"}
        />
        <CustomCard
          name={"Incomes"}
          description={
            "Incomes Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description"
          }
          image={"asdasd"}
        />
        <CustomCard
          name={"Portfolio"}
          description={
            "Porfolio Description Expenses Description Expenses DescriptionExpenses Description Expenses Description Expenses Description Expenses Description Expenses Description"
          }
          image={"asdasd"}
        />
      </div>
      <div className="homeDiv">
        <CustomCard
          name={"Activity"}
          description={
            "Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description "
          }
          image={"asdasd"}
        />
        <CustomCard
          name={"Budget"}
          description={
            "Incomes Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description Expenses Description"
          }
          image={"asdasd"}
        />
        <CustomCard
          name={"Report"}
          description={
            "Porfolio Description Expenses Description Expenses DescriptionExpenses Description Expenses Description Expenses Description Expenses Description Expenses Description"
          }
          image={"asdasd"}
        />
      </div>
    </>
  );
};

export default Home;
