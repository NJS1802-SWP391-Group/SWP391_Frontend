import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
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
import { ServiceResponse } from "../../interfaces/services/Service";
import serviceApi from "../../services/service";

const Service = () => {
  const [serviceList, setServiceList] = useState<ServiceResponse[]>([]);
  console.log("service:", serviceList);
  const [newService, setNewService] = useState<ServiceResponse | null>(null);
  const [editService, setEditService] = useState<ServiceResponse | null>(null);
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
    const fetchServiceList = async () => {
      const response: any = await serviceApi.getAll();
      console.log("FetchData", response);
      if (response && response.length > 0) {
        setServiceList(response);
      }
    };

    const initUseEffect = async () => {
      await fetchServiceList();
    };
    initUseEffect();
  }, []);

  const handleEditService = (service: ServiceResponse) => {
    setEditService(service);
  };

  const handleDeleteService = (serviceID: number) => {
    setServiceList((prevService) =>
      prevService.filter((m) => m.serviceID !== serviceID)
    );
  };

  const handleAddService = () => {
    const nextServiceID =
      serviceList.length > 0
        ? serviceList[serviceList.length - 1].serviceID + 1
        : 1;
    setNewService({
      serviceID: nextServiceID,
      name: "",
      description: "",
      status: "Active",
    });
  };

  const handleSaveService = () => {
    if (editService) {
      setServiceList((prevService) =>
        prevService.map((m) =>
          m.serviceID === editService.serviceID ? editService : m
        )
      );
      setEditService(null);
    } else if (newService) {
      const nextServiceID =
        serviceList.length > 0
          ? serviceList[serviceList.length - 1].serviceID + 1
          : 1;
      const data: ServiceResponse = {
        serviceID: nextServiceID,
        name: "",
        description: "",
        status: "Active",
      };
      const response = serviceApi.createService(data).then(
        (response: any) => {
          console.log("res:", response);
        },
        (error) => {
          console.log(error);
        }
      );
      console.log("res:", response);
      setServiceList((prevService) => [
        ...prevService,
        {
          ...newService,
          serviceID:
            serviceList.length > 0
              ? serviceList[serviceList.length - 1].serviceID + 1
              : 1,
        },
      ]);
      setNewService(null);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (editService) {
      setEditService((prevService) =>
        prevService ? { ...prevService, [name]: value } : null
      );
    } else if (newService) {
      setNewService((prevService) =>
        prevService ? { ...prevService, [name]: value } : null
      );
    }
  };

  const handleCloseDialog = () => {
    setEditService(null);
    setNewService(null);
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

  const paginatedServiceResponseList = serviceList.slice(
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
          sx={{ marginLeft: 140 }}
          onClick={handleAddService}
        >
          <img src={PlusAdd} height={20} width={20} alt="PLusAdd" />
          <Typography sx={{ paddingLeft: "4px", fontSize: "10px" }}>
            New service
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
              <StyledTableCell sx={styleTableHead}>Service</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Name</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Description</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Status</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedServiceResponseList.map((serviceResponse) => (
              <StyledTableRow key={serviceResponse.serviceID}>
                <StyledTableCell>{serviceResponse.serviceID}</StyledTableCell>
                <StyledTableCell>{serviceResponse.name}</StyledTableCell>
                <StyledTableCell>{serviceResponse.description}</StyledTableCell>
                <StyledTableCell>{serviceResponse.status}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleEditService(serviceResponse)}
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
                      handleDeleteService(serviceResponse.serviceID)
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
        count={serviceList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {editService && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogTitle>Edit Service</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Update the details of the Service.
            </DialogContentText>

            <TextField
              margin="dense"
              label="Service name"
              type="text"
              fullWidth
              id="name"
              name="name"
              value={editService.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              id="description"
              name="description"
              value={editService.description}
              onChange={handleInputChange}
            />
            <FormControl fullWidth>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="status"
                name="status"
                value={editService.status}
                label="Status"
                // onChange={handleInputChange}
              >
                <MenuItem value={"Active"}>Active</MenuItem>
                <MenuItem value={"Inactive"}>Inactive</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSaveService}>Save</Button>
          </DialogActions>
        </Dialog>
      )}

      {newService && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogTitle>New Service</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the details of the new Service.
            </DialogContentText>

            <TextField
              margin="dense"
              label="Service Name"
              type="text"
              fullWidth
              id="name"
              name="name"
              value={newService.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              id="description"
              name="description"
              value={newService.description}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveService} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Service;
