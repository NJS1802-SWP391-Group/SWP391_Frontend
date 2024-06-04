import {
  Box,
  IconButton,
  InputAdornment,
  Menu,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PlusButton from "../../assets/PlusButton.png";
import SearchButton from "../../assets/Search.png";
import { ManagerAssignResponse } from "../../interfaces/manager/managerResponse";
import managerAssignsApi from "../../services/managerService/managerApi";

const AssignManager: React.FC = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [selectedManagerResponse, setSelectedManagerResponse] =
    useState<ManagerAssignResponse | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const [searchQuery, setSearchQuery] = useState("");
  const [managers, setManagers] = useState([
    { name: "Nguyen Gia Bao" },
    { name: "Nguyen Gia Tri" },
    { name: "Nguyen Gia Linh" },
    { name: "Nguyen Gia Bi" },
    { name: "Nguyen Gia Bo" },
  ]);
  const [managerAssignList, setManagerAssignList] = useState<
    ManagerAssignResponse[]
  >([]);

  useEffect(() => {
    const fetchManagerAssignList = async () => {
      const response: any = await managerAssignsApi.getAll();
      if (response && response.length > 0) {
        setManagerAssignList(response);
      }
    };

    const initUseEffect = async () => {
      await fetchManagerAssignList();
    };
    initUseEffect();
  }, []);
  console.log("fetchData", managerAssignList);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpen = (managerResponse: ManagerAssignResponse) => {
    setSelectedManagerResponse(managerResponse);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedManagerResponse(null);
  };

  const handleManagerSelect = (valuationStaffName: string) => {
    if (selectedManagerResponse) {
      setManagerAssignList((prevList) =>
        prevList.map((item) =>
          item.orderCode === selectedManagerResponse.orderCode
            ? { ...item, valuationStaffName }
            : item
        )
      );
      handleCloseMenu();
    }
  };

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLElement>,
    managerResponse: ManagerAssignResponse
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedManagerResponse(managerResponse);
    setMenuPosition({ top: event.clientY, left: event.clientX });
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedManagerResponse(null);
  };

  const filteredValuationStaffs = managers.filter((valuationStaff) =>
    valuationStaff.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedManagerResponseList = managerAssignList.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ padding: 2 }}>
      <TableContainer component={Paper} sx={{ maxHeight: "50vh" }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#4F46E5" }}>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Order Code
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Diamond code
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Service Name
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Price
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Estimate Length
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Assign
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedManagerResponseList.map((managerResponse) => (
              <StyledTableRow key={managerResponse.orderCode}>
                <StyledTableCell>{managerResponse.orderCode}</StyledTableCell>
                <StyledTableCell>
                  {managerResponse.orderDetailCode}
                </StyledTableCell>
                <StyledTableCell>{managerResponse.serviceName}</StyledTableCell>
                <StyledTableCell>
                  {managerResponse.servicePrice}
                </StyledTableCell>
                <StyledTableCell>
                  {managerResponse.estimateLength}
                </StyledTableCell>
                <StyledTableCell>
                  {managerResponse.valuationStaffName ? (
                    managerResponse.valuationStaffName
                  ) : (
                    <IconButton
                      onClick={(event) =>
                        handleOpenMenu(event, managerResponse)
                      }
                    >
                      <img
                        src={PlusButton}
                        width="35"
                        height="35"
                        alt="PlusButton"
                      />
                    </IconButton>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={managerAssignList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorReference="anchorPosition"
        anchorPosition={{ top: menuPosition.top, left: menuPosition.left }}
      >
        <Box sx={{ padding: 2, height: "60px" }}>
          <TextField
            variant="outlined"
            placeholder="Search Valuation Staff"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <img
                      src={SearchButton}
                      width="25"
                      height="25"
                      alt="SearchButton"
                    />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                height: "45px",
                width: "250px",
                borderRadius: "65px",
                border: "0.5px solid #000",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#000",
                },
                paddingRight: "8px",
              },
            }}
          />
        </Box>
        <Box sx={{ maxHeight: "200px", overflow: "auto", marginTop: 2 }}>
          {filteredValuationStaffs.map((valuationStaff) => (
            <Box
              key={valuationStaff.name}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
              onClick={() => handleManagerSelect(valuationStaff.name)}
            >
              <Box>{valuationStaff.name}</Box>
              <IconButton>
                <img src={PlusButton} width="20" height="20" alt="PlusButton" />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Menu>
      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            borderRadius: "10px",
            width: "300px",
            padding: 2,
            marginLeft: "1200px",
          }}
        >
          <Box>
            <TextField
              variant="outlined"
              placeholder="Search Valuation Staff"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <img
                        src={SearchButton}
                        width="25"
                        height="25"
                        alt="SearchButton"
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  height: "45px",
                  width: "250px",
                  borderRadius: "15px",
                  border: "0.5px solid #000",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000",
                  },
                  paddingRight: "8px",
                },
              }}
            />
          </Box>
          <Box sx={{ maxHeight: "200px", overflow: "auto", marginTop: 2 }}>
            {filteredValuationStaffs.map((valuationStaff) => (
              <Box
                key={valuationStaff.name}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  borderBottom: "1px solid #ccc",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
                onClick={() => handleManagerSelect(valuationStaff.name)}
              >
                <Box>
                  <Box>{valuationStaff.name}</Box>
                </Box>
                <IconButton>
                  <img
                    src={PlusButton}
                    width="20"
                    height="20"
                    alt="PlusButton"
                  />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};

export default AssignManager;
