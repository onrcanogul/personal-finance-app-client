import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  DialogContent,
  InputAdornment,
  TextField,
} from "@mui/material";
import { create as createExpense } from "../../services/expense-service";
import { create as createIncome } from "../../services/income-service";
import { currentUserId } from "../../services/user-service";
import { useState } from "react";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  title: string;
  isIncome: boolean;
  activityId: string;
}

function SetPriceDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, isIncome, activityId } = props;
  const [price, setPrice] = useState<number>();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleClick = async () => {
    debugger;
    if (isIncome)
      await createIncome({
        price,
        userId: currentUserId(),
        activityId: activityId,
      });
    else
      await createExpense({
        price,
        userId: currentUserId(),
        activityId: activityId,
      });
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth={true}>
      <DialogTitle textAlign={"center"}>{props.title}</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Amount"
          id="filled-start-adornment"
          sx={{ m: 1, width: "50%" }}
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">TL</InputAdornment>
              ),
            },
          }}
          variant="filled"
        />
        <Button
          variant="contained"
          sx={{ width: "50%" }}
          endIcon={<AddIcon />}
          onClick={handleClick}
        >
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default SetPriceDialog;
