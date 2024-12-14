import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "@mui/material";
import SetPriceDialog from "../dialogs/setPriceDialog";

const CustomAccordion = ({ title, description }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (_value: string) => {
    setOpen(false);
  };
  return (
    <Accordion style={{ width: "100%" }}>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
        <Button
          style={{ textAlign: "right" }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Set Price
        </Button>
      </AccordionDetails>
      <SetPriceDialog
        selectedValue="asd"
        title={title}
        open={open}
        onClose={handleClose}
      />
    </Accordion>
  );
};

export default CustomAccordion;
