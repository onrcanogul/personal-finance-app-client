import { Box, CircularProgress } from "@mui/material";

const Spinner = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <Box className="spinner">
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Spinner;
