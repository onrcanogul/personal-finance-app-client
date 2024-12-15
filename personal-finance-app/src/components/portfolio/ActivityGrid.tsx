import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(
  title: string,
  price: number,
  createdDate: string,
  updatedDate: string
) {
  return { title, price, createdDate, updatedDate };
}

const rows = [
  createData(
    "Going to Football match",
    1500,
    new Date().toString(),
    new Date().toString()
  ),
];

export default function ActivityTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Price&nbsp;(TL)</TableCell>
            <TableCell align="right">Created Date</TableCell>
            <TableCell align="right">Updated Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">
                <EditIcon />
              </TableCell>
              <TableCell align="right">
                <DeleteIcon />
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.createdDate}</TableCell>
              <TableCell align="right">{row.updatedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
