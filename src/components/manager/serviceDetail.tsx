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
import { ServiceChange } from "../../interfaces/services/Service";
import serviceDetailApi from "../../services/serviceDetailApi";
const ServiceDetail = () => {
  const [serviceDetailList, setServiceDetailList] = useState<
    ServiceDetailResponse[]
  >([]);

  const [newServiceDetail, setNewServiceDetail] =
    useState<ServiceDetailResponse | null>(null);
  const [editServiceDetail, setEditServiceDetail] =
    useState<ServiceDetailResponse | null>(null);
  const [changeService, setChangeService] =
    useState<ServiceDetailResponse | null>(null);
  console.log("first", setChangeService);
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

  const fetchServiceDetailList = async () => {
    const response: any = await serviceDetailApi.getAll();
    console.log("FetchData", response);
    if (response && response.length > 0) {
      setServiceDetailList(response);
    }
  };

  useEffect(() => {
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
      status: "Active",
      serviceName: "",
      serviceID: 0,
    });
  };

  const handleEditServiceDetail = (serviceDetail: ServiceDetailResponse) => {
    setEditServiceDetail(serviceDetail);
  };

  const handleDeleteService = async (serviceDetailID: number) => {
    console.log("id", serviceDetailID);
    const data: ServiceChange = {
      status: changeService?.status ?? "",
    };
    const response = await serviceDetailApi.deleteServiceDetail(
      serviceDetailID,
      data
    );
    console.log("first", response);
    fetchServiceDetailList();
    setServiceDetailList((prevServiceDetail) =>
      prevServiceDetail.filter((m) => m.serviceDetailID !== serviceDetailID)
    );
  };

  const handleSaveServiceDetail = async () => {
    if (editServiceDetail) {
      const data: ServiceDetailResponse = {
        serviceDetailID: editServiceDetail.serviceDetailID,
        code: editServiceDetail.code,
        minRange: editServiceDetail.minRange,
        maxRange: editServiceDetail.maxRange,
        price: editServiceDetail.price,
        extraPricePerMM: editServiceDetail.extraPricePerMM,
        status: "Active",
        serviceName: editServiceDetail.serviceName,
        serviceID: editServiceDetail.serviceID,
      };

      try {
        const response = await serviceDetailApi.editServiceDetail(
          editServiceDetail.serviceDetailID,
          data
        );
        console.log("resEdit:", response);
        setServiceDetailList((prevServiceDetail) =>
          prevServiceDetail.map((m) =>
            m.serviceDetailID === editServiceDetail.serviceDetailID
              ? editServiceDetail
              : m
          )
        );
        fetchServiceDetailList();
        setEditServiceDetail(null);
      } catch (error) {
        console.log(error);
      }
    } else if (newServiceDetail) {
      const nextServiceDetailID =
        serviceDetailList.length > 0
          ? serviceDetailList[serviceDetailList.length - 1].serviceDetailID + 1
          : 1;
      const data: ServiceDetailResponse = {
        serviceDetailID: nextServiceDetailID,
        code: newServiceDetail.code,
        minRange: newServiceDetail.minRange,
        maxRange: newServiceDetail.maxRange,
        price: newServiceDetail.price,
        extraPricePerMM: newServiceDetail.extraPricePerMM,
        status: "Active",
        serviceName: "",
        serviceID: newServiceDetail.serviceID,
      };
      console.log("dtaa", data);
      try {
        const response = await serviceDetailApi.createServiceDetail(data);
        console.log("res:", response);
        setServiceDetailList((prevServiceDetail) => [
          ...prevServiceDetail,
          {
            ...newServiceDetail,
            serviceID: nextServiceDetailID,
          },
        ]);
        fetchServiceDetailList();
        setNewServiceDetail(null);
      } catch (error) {
        console.log(error);
      }
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
    console.log("event", event);
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
          sx={{ marginLeft: 120 }}
          onClick={handleAddServiceDetail}
        >
          <img src={PlusAdd} height={20} width={20} alt="PlusAdd" />
          <Typography sx={{ paddingLeft: "4px", fontSize: "10px" }}>
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
              <StyledTableCell sx={styleTableHead}>SD Code</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>
                Service Name
              </StyledTableCell>

              <StyledTableCell sx={styleTableHead}>Min Range</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Max Range</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Price</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Extra Price</StyledTableCell>

              <StyledTableCell sx={styleTableHead}>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedServiceDetailResponseList.map((serviceDetailResponse) => (
              <StyledTableRow key={serviceDetailResponse.code}>
                <StyledTableCell>{serviceDetailResponse.code}</StyledTableCell>
                <StyledTableCell>
                  {serviceDetailResponse.serviceName}
                </StyledTableCell>
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
              label="Min Range"
              type="text"
              fullWidth
              id="minRange"
              name="minRange"
              value={editServiceDetail.minRange}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Max Range"
              type="text"
              fullWidth
              id="maxRange"
              name="maxRange"
              value={editServiceDetail.maxRange}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Price"
              type="text"
              fullWidth
              id="price"
              name="price"
              value={editServiceDetail.price}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="ExtraPricePerMM"
              type="text"
              fullWidth
              id="extraPricePerMM"
              name="extraPricePerMM"
              value={editServiceDetail.extraPricePerMM}
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
              id="code"
              name="code"
              value={newServiceDetail.code}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Min Range"
              type="text"
              fullWidth
              id="minRange"
              name="minRange"
              value={newServiceDetail.minRange}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Max Range"
              type="text"
              fullWidth
              id="maxRange"
              name="maxRange"
              value={newServiceDetail.maxRange}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Price"
              type="text"
              fullWidth
              id="price"
              name="price"
              value={newServiceDetail.price}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Extra PricePerMM"
              type="text"
              fullWidth
              id="extraPricePerMM"
              name="extraPricePerMM"
              value={newServiceDetail.extraPricePerMM}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Service ID"
              type="text"
              fullWidth
              id="serviceID"
              name="serviceID"
              value={newServiceDetail.serviceID}
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
