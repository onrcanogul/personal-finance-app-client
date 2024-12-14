import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  DialogContent,
  InputAdornment,
  TextField,
} from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SetPriceDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth={true}>
      <DialogTitle textAlign={"center"}>
        Set Price for Eating Burger
      </DialogTitle>
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
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">TL</InputAdornment>
              ),
            },
          }}
          variant="filled"
        />
        <Button variant="contained" sx={{ width: "50%" }} endIcon={<AddIcon />}>
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default SetPriceDialog;
