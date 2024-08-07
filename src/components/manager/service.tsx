import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlusAdd from "../../assets/PlusAdd.png";
import {
  ServiceChange,
  ServiceResponse,
} from "../../interfaces/services/Service";
import serviceApi from "../../services/service";

const Service = () => {
  const [serviceList, setServiceList] = useState<ServiceResponse[]>([]);
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

  const fetchServiceList = async () => {
    try {
      const response: any = await serviceApi.getAllService();
      if (response && response.length > 0) {
        await setServiceList(response);
      }
    } catch (error) {
      toast.error("Failed to fetch services.");
    }
  };

  useEffect(() => {
    const initUseEffect = async () => {
      await fetchServiceList();
    };
    initUseEffect();
  }, []);

  const handleEditService = (service: ServiceResponse) => {
    setEditService(service);
  };

  const handleDeleteService = async (serviceId: number) => {
    const data: ServiceChange = {
      status: "inActive",
    };
    try {
      await serviceApi.changeService(serviceId, data);
      setServiceList((prevService) =>
        prevService.filter((m) => m.serviceID !== serviceId)
      );
      fetchServiceList();
      toast.success("Service deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete the service.");
    }
  };

  const handleAddService = async () => {
    // const nextServiceID =
    //   serviceList.length > 0
    //     ? serviceList[serviceList.length - 1].serviceID + 1
    //     : 1;
    await setNewService({
      serviceID: 0,
      name: "",
      description: "",
      status: "Active",
    });
  };

  const handleSaveService = async () => {
    if (editService) {
      const data: ServiceResponse = {
        serviceID: editService.serviceID,
        name: editService.name,
        description: editService.description,
        status: "Active",
      };

      try {
        await serviceApi.editService(editService.serviceID, data);
        setServiceList((prevService) =>
          prevService.map((m) =>
            m.serviceID === editService.serviceID ? { ...m, ...data } : m
          )
        );
        setEditService(null);
        toast.success("Service updated successfully.");
      } catch (error) {
        toast.error("Failed to update the service.");
      }
    } else if (newService) {
      // const nextServiceID =
      //   serviceList.length > 0
      //     ? serviceList[serviceList.length - 1].serviceID + 1
      //     : 1;

      const data: ServiceResponse = {
        serviceID: newService.serviceID,
        name: newService.name,
        description: newService.description,
        status: "Active",
      };

      try {
        const response = await serviceApi.createService(data);
        console.log("first", response);
        setServiceList((prevService) => [
          ...prevService,
          {
            ...newService,
          },
        ]);
        setNewService(null);
        toast.success("New service added successfully.");
        fetchServiceList();
      } catch (error) {
        toast.error("Failed to add the new service.");
      }
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
    console.log("first", event);
    setPage(newPage);
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
          sx={{ marginLeft: 130 }}
          onClick={handleAddService}
        >
          <img src={PlusAdd} height={20} width={20} alt="PlusAdd" />
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
                  <div style={{ display: "flex", gap: 1 }}>
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
                  </div>
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
              label="Service Name"
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
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSaveService}>Save</Button>
          </DialogActions>
        </Dialog>
      )}

      <ToastContainer />
    </Box>
  );
};

export default Service;
