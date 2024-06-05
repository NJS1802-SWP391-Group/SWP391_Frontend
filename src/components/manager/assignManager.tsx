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
import SaveButton from "../../assets/SaveButton.png";
import SearchButton from "../../assets/Search.png";
import { ManagerAssignResponse } from "../../interfaces/manager/managerResponse";
import { ValuationStaffResponse } from "../../interfaces/valuationStaff/valuationStaffResponse";
import managerAssignsApi from "../../services/managerService/managerApi";
import valuationStaffApi from "../../services/managerService/valuationStaffApi";

export interface RequetsBody {
  orderDetailID: number;
  valuationStaffID: number | undefined;
}
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
  const [requestBody, setRequestBody] = useState<RequetsBody>();
  const [showSelection, setShowSelection] = useState(false);

  const handleShow = () => {
    setShowSelection(true);
  };

  const [managers, setManagers] = useState<ValuationStaffResponse[]>([]);
  useEffect(() => {
    const fetchValuationStaffList = async () => {
      const res: any = await valuationStaffApi.getValuationStaff();
      console.log("ValuationList:", res);
      if (res && res.length > 0) {
        setManagers(res);
      }
    };

    const initUseEffect = async () => {
      await fetchValuationStaffList();
    };
    initUseEffect();
  }, []);

  const [managerAssignList, setManagerAssignList] = useState<
    ManagerAssignResponse[]
  >([]);

  useEffect(() => {
    const fetchManagerAssignList = async () => {
      const response: any = await managerAssignsApi.getAll();
      console.log("FetchData:", response);
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

  const [valuationSelectedStaff, setValuationSelectedStaff] =
    useState<number>();

  const handleManagerSelect = (accountId: number) => {
    if (selectedManagerResponse) {
      const selectedManager = managers.find(
        (manager) => manager.accountId === accountId
      );
      const updatedManagerList = managerAssignList.map((item) =>
        item.orderDetailCode === selectedManagerResponse.orderDetailCode
          ? {
              ...item,
              accountId,
              valuationStaffName: selectedManager?.userName ?? null,
            }
          : item
      );
      setValuationSelectedStaff(accountId);
      setManagerAssignList(updatedManagerList);
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

  console.log(valuationSelectedStaff);
  const handleSave = (orderDetailID: number, accountId: number | undefined) => {
    const newRequestBody = {
      orderDetailID: orderDetailID,
      valuationStaffID: accountId,
    };
    console.log("Request body: ", newRequestBody);
    managerAssignsApi.assignValuationStaff(newRequestBody).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const filteredValuationStaffs = managers.filter((valuationStaff) =>
    valuationStaff.userName.toLowerCase().includes(searchQuery.toLowerCase())
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
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Save
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedManagerResponseList.map((managerResponse) => (
              <StyledTableRow key={managerResponse.orderDetailID}>
                <StyledTableCell>
                  {managerResponse.orderDetailID}
                </StyledTableCell>
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
                <StyledTableCell defaultValue={valuationSelectedStaff}>
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
                        width="33"
                        height="33"
                        alt="PlusButton"
                      />
                    </IconButton>
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  <IconButton
                    onClick={(event) =>
                      handleSave(
                        managerResponse.orderDetailID,
                        valuationSelectedStaff
                      )
                    }
                  >
                    <img
                      src={SaveButton}
                      width="32"
                      height="32"
                      alt="SaveButton"
                    />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorReference="anchorPosition"
              anchorPosition={{
                top: menuPosition.top,
                left: menuPosition.left,
              }}
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
                    key={valuationStaff.accountId}
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
                  >
                    <Box>{valuationStaff.userName}</Box>
                    <IconButton
                      onClick={() =>
                        handleManagerSelect(valuationStaff.accountId)
                      }
                    >
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
            </Menu>
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
                key={valuationStaff.accountId}
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
                onClick={() => handleManagerSelect(valuationStaff.accountId)}
              >
                <Box>
                  <Box>{valuationStaff.userName}</Box>
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
