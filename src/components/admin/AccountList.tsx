import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import userApi from "../../services/userApi";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Account {
  accountId: number;
  userName: string;
  password: string;
  status: string;
  roleName: string;
  customerId: number;
}

const AccountList = () => {
  const [accountList, setAccountList] = useState<Account[] | undefined>();
  useEffect(() => {
    const fetchData = async () => {
      const accounts: any = await userApi.getAllAccount();
      setAccountList(accounts);
    };
    fetchData();
  }, []);
  return (
    <>
      <p style={{ fontWeight: "bold", textAlign: "center", fontSize: "30px" }}>
        Account List
      </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Account ID</StyledTableCell>
              <StyledTableCell align="center">User Name</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Role</StyledTableCell>
              <StyledTableCell align="center">Customer ID</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accountList?.map((row) => (
              <StyledTableRow key={row.accountId}>
                <StyledTableCell component="th" scope="row">
                  {row.accountId}
                </StyledTableCell>
                <StyledTableCell align="center">{row.userName}</StyledTableCell>
                <StyledTableCell align="center">{row.password}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">{row.roleName}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.customerId}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AccountList;
