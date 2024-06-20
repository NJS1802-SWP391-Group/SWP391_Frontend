import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import PlusAdd from "../../assets/PlusAdd.png";
import { ServiceDetailResponse } from "../../interfaces/serviceDetail/ServiceDetail";
import serviceDetailApi from "../../services/serviceDetailApi";
const ServiceDetail = () => {
  const [serviceDetailList, setServiceDetailList] = useState<
    ServiceDetailResponse[]
  >([]);

  const [newServiceDetail, setNewServiceDetail] =
    useState<ServiceDetailResponse | null>(null);
  const [editServiceDetail, setEditServiceDetail] =
    useState<ServiceDetailResponse | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const styleTableHead = {
    fontWeight: "bold",
    fontSize: "20px",
    color: "black",
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  useEffect(() => {
    const fetchServiceDetailList = async () => {
      const response: any = await serviceDetailApi.getAll();
      console.log("FetchData", response);
      if (response && response.length > 0) {
        setServiceDetailList(response);
      }
    };

    const initUseEffect = async () => {
      await fetchServiceDetailList();
    };
    initUseEffect();
  }, []);

  const handleAddServiceDetail = () => {
    setNewServiceDetail({
      serviceDetailID: 0,
      code: "",
      minRange: 0,
      maxRange: 0,
      price: 0,
      extraPricePerMM: 0,
      status: "",
      serviceID: 0,
    });
  };

  const handleEditServiceDetail = (serviceDetail: ServiceDetailResponse) => {
    setEditServiceDetail(serviceDetail);
  };

  const handleDeleteService = (serviceDetailID: number) => {
    setServiceDetailList((prevServiceDetail) =>
      prevServiceDetail.filter((m) => m.serviceDetailID !== serviceDetailID)
    );
  };

  const handleSaveServiceDetail = () => {
    if (editServiceDetail) {
      setServiceDetailList((prevServiceDetail) =>
        prevServiceDetail.map((m) =>
          m.serviceDetailID === editServiceDetail.serviceDetailID
            ? editServiceDetail
            : m
        )
      );
      setEditServiceDetail(null);
    } else if (newServiceDetail) {
      setServiceDetailList((prevServiceDetail) => [
        ...prevServiceDetail,
        {
          ...newServiceDetail,
          FeID: `FE${prevServiceDetail.length + 1}`,
          CreatedTime: new Date().toISOString(),
        },
      ]);
      setNewServiceDetail(null);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (editServiceDetail) {
      setEditServiceDetail((prevServiceDetail) =>
        prevServiceDetail ? { ...prevServiceDetail, [name]: value } : null
      );
    } else if (newServiceDetail) {
      setNewServiceDetail((prevServiceDetail) =>
        prevServiceDetail ? { ...prevServiceDetail, [name]: value } : null
      );
    }
  };

  const handleCloseDialog = () => {
    setEditServiceDetail(null);
    setNewServiceDetail(null);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedServiceDetailResponseList = serviceDetailList.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          sx={{ marginLeft: 127 }}
          onClick={handleAddServiceDetail}
        >
          <img src={PlusAdd} height={20} width={20} />
          <Typography sx={{ paddingLeft: "4px" }}>
            New service detail
          </Typography>
        </Button>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: "50vh", marginTop: "25px" }}
      >
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#4F46E5" }}>
              <StyledTableCell sx={styleTableHead}>
                Code Service
              </StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Min Range</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Max Range</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Price</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Extra Price</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Status</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedServiceDetailResponseList.map((serviceDetailResponse) => (
              <StyledTableRow key={serviceDetailResponse.code}>
                <StyledTableCell>{serviceDetailResponse.code}</StyledTableCell>
                <StyledTableCell>
                  {serviceDetailResponse.minRange}
                </StyledTableCell>
                <StyledTableCell>
                  {serviceDetailResponse.maxRange}
                </StyledTableCell>
                <StyledTableCell>{serviceDetailResponse.price}</StyledTableCell>
                <StyledTableCell>
                  {serviceDetailResponse.extraPricePerMM}
                </StyledTableCell>
                <StyledTableCell>
                  {serviceDetailResponse.status}
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() =>
                      handleEditServiceDetail(serviceDetailResponse)
                    }
                    sx={{
                      marginRight: 1,
                      backgroundColor: "lightgrey",
                      color: "black",
                      opacity: "90%",
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() =>
                      handleDeleteService(serviceDetailResponse.serviceDetailID)
                    }
                    sx={{ backgroundColor: "ButtonShadow", color: "black" }}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={serviceDetailList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {editServiceDetail && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogTitle>Edit ServiceDetail</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Update the details of the ServiceDetail.
            </DialogContentText>
            <TextField
              margin="dense"
              label="ServiceDetail Code"
              type="text"
              fullWidth
              name="ServiceDetailID"
              value={editServiceDetail.code}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Min Range"
              type="text"
              fullWidth
              name="MinRange"
              value={editServiceDetail.minRange}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Max Range"
              type="text"
              fullWidth
              name="MaxRange"
              value={editServiceDetail.maxRange}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Price"
              type="text"
              fullWidth
              name="Price"
              value={editServiceDetail.price}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="ExtraPricePerMM"
              type="text"
              fullWidth
              name="ExtraPricePerMM"
              value={editServiceDetail.extraPricePerMM}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Status"
              type="text"
              fullWidth
              name="Status"
              value={editServiceDetail.status}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveServiceDetail} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {newServiceDetail && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogTitle>New ServiceDetail</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the details of the new ServiceDetail.
            </DialogContentText>
            <TextField
              margin="dense"
              label="ServiceDetail Code"
              type="text"
              fullWidth
              name="ServiceDetailCode"
              value={newServiceDetail.code}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Price"
              type="text"
              fullWidth
              name="Price"
              value={newServiceDetail.price}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Min Range"
              type="text"
              fullWidth
              name="MinRange"
              value={newServiceDetail.minRange}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Max Range"
              type="text"
              fullWidth
              name="MaxRange"
              value={newServiceDetail.maxRange}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Extra PricePerMM"
              type="text"
              fullWidth
              name="ExtraPricePerMM"
              value={newServiceDetail.extraPricePerMM}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Status"
              type="text"
              fullWidth
              name="Status"
              value={newServiceDetail.status}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveServiceDetail} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default ServiceDetail;
