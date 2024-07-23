import { ExpandLess, ExpandMore } from "@mui/icons-material";
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
  SelectChangeEvent,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import PlusAdd from "../../assets/PlusAdd.png";
import {
  ServiceDetailCreate,
  ServiceDetailEdit,
  ServiceDetailResponse,
} from "../../interfaces/serviceDetail/ServiceDetail";
import serviceApi from "../../services/service";
import serviceDetailApi from "../../services/serviceDetailApi";

const ServiceDetailNew = () => {
  const [serviceDetails, setServiceDetails] = useState<ServiceDetailResponse[]>(
    []
  );
  const [groupedServiceDetails, setGroupedServiceDetails] = useState<{
    [key: string]: ServiceDetailResponse[];
  }>({});
  const [expandedGroups, setExpandedGroups] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [editServiceDetail, setEditServiceDetail] =
    useState<ServiceDetailResponse | null>(null);
  const [newServiceDetail, setNewServiceDetail] =
    useState<ServiceDetailResponse | null>(null);
  const [serviceNames, setServiceNames] = useState<string[]>([]);
  const [serviceIds, setServiceIds] = useState<number[]>([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const styleTableHead = {
    fontWeight: "bold",
    fontSize: "20px",
    color: "black",
  };

  const fetchServiceDetails = async () => {
    const response: any = await serviceDetailApi.getAll();
    setServiceDetails(response);
    groupServiceDetails(response);
  };

  const fetchServiceIds = async () => {
    const response: any = await serviceApi.getAllService(); // Assuming this fetches all services
    setServiceIds(response.map((service: any) => service.serviceID));
  };

  useEffect(() => {
    fetchServiceDetails();
    fetchServiceIds();
  }, []);

  const groupServiceDetails = (details: ServiceDetailResponse[]) => {
    const grouped: { [key: string]: ServiceDetailResponse[] } = {};
    details.forEach((detail) => {
      if (!grouped[detail.serviceName]) {
        grouped[detail.serviceName] = [];
      }
      grouped[detail.serviceName].push(detail);
    });
    setGroupedServiceDetails(grouped);
    setExpandedGroups(
      Object.keys(grouped).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
    setServiceNames(Object.keys(grouped));
  };

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

  const handleDeleteServiceDetail = async (serviceDetailID: number) => {
    const data = { status: "inActive" };
    try {
      await serviceDetailApi.deleteServiceDetail(serviceDetailID, data);
      setServiceDetails((prev) =>
        prev.filter((detail) => detail.serviceDetailID !== serviceDetailID)
      );
      fetchServiceDetails();
      toast.success("Service detail deleted successfully!"); // Show success toast
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete service detail!"); // Show error toast
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const parsedValue =
      name === "price" || name === "extraPricePerMM"
        ? parseFloat(value)
        : name === "minRange" || name === "maxRange"
        ? parseInt(value, 10)
        : value;

    if (editServiceDetail) {
      setEditServiceDetail((prev) =>
        prev ? { ...prev, [name]: parsedValue } : null
      );
    } else if (newServiceDetail) {
      setNewServiceDetail((prev) =>
        prev ? { ...prev, [name]: parsedValue } : null
      );
    }
  };

  const handleSaveServiceDetail = async () => {
    if (editServiceDetail) {
      const data: ServiceDetailEdit = {
        minRange: editServiceDetail.minRange || 0,
        maxRange: editServiceDetail.maxRange || 0,
        price: editServiceDetail.price || 0,
        extraPricePerMM: editServiceDetail.extraPricePerMM || 0,
      };

      try {
        const response = await serviceDetailApi.editServiceDetail(
          editServiceDetail.serviceDetailID,
          data
        );
        console.log("resEdit:", response);
        setServiceDetails((prevServiceDetail) =>
          prevServiceDetail.map((m) =>
            m.serviceDetailID === editServiceDetail.serviceDetailID
              ? editServiceDetail
              : m
          )
        );
        fetchServiceDetails();
        setEditServiceDetail(null);
        toast.success("Service detail updated successfully!"); // Show success toast
      } catch (error) {
        console.log(error);
        toast.error("Failed to update service detail!"); // Show error toast
      }
    } else if (newServiceDetail) {
      // const nextServiceDetailID =
      //   serviceDetails.length > 0
      //     ? serviceDetails[serviceDetails.length - 1].serviceDetailID + 1
      //     : 1;
      const data: ServiceDetailCreate = {
        code: newServiceDetail.code || "",
        minRange: newServiceDetail.minRange || 0,
        maxRange: newServiceDetail.maxRange || 0,
        price: newServiceDetail.price || 0,
        extraPricePerMM: newServiceDetail.extraPricePerMM || 0,
        serviceID: newServiceDetail.serviceID || 0,
      };
      console.log("dtaa", data);
      try {
        const response = await serviceDetailApi.createServiceDetail(data);
        console.log("res:", response);
        setServiceDetails((prevServiceDetail) => [
          ...prevServiceDetail,
          {
            ...newServiceDetail,
            // serviceDetailID: nextServiceDetailID,
          },
        ]);
        fetchServiceDetails();
        setNewServiceDetail(null);
        toast.success("New service detail added successfully!"); // Show success toast
      } catch (error) {
        console.log(error);
        toast.error("Failed to add new service detail!"); // Show error toast
      }
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    const numericValue = Number(value); // Convert string to number if needed

    if (editServiceDetail) {
      setEditServiceDetail((prev) =>
        prev ? { ...prev, serviceID: numericValue } : null
      );
    } else if (newServiceDetail) {
      setNewServiceDetail((prev) =>
        prev ? { ...prev, serviceID: numericValue } : null
      );
    } else {
      setSelectedService(value);
    }
  };

  const handleCloseDialog = () => {
    setEditServiceDetail(null);
    setNewServiceDetail(null);
  };

  const toggleGroupExpansion = (serviceName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName],
    }));
  };

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
          sx={{ marginLeft: "1100px" }}
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
        sx={{ maxHeight: "60vh", marginTop: "25px" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#4F46E5" }}>
              <StyledTableCell align="center" sx={styleTableHead}>
                Service Name
              </StyledTableCell>
              <StyledTableCell align="center" sx={styleTableHead}>
                SD Code
              </StyledTableCell>
              <StyledTableCell align="center" sx={styleTableHead}>
                Min Range
              </StyledTableCell>
              <StyledTableCell align="center" sx={styleTableHead}>
                Max Range
              </StyledTableCell>
              <StyledTableCell align="center" sx={styleTableHead}>
                Price
              </StyledTableCell>
              <StyledTableCell align="center" sx={styleTableHead}>
                Extra Price
              </StyledTableCell>
              <StyledTableCell align="center" sx={styleTableHead}>
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(groupedServiceDetails).map((serviceName) => {
              const details = groupedServiceDetails[serviceName];
              const isExpanded = expandedGroups[serviceName];

              return (
                <React.Fragment key={serviceName}>
                  <TableRow>
                    <StyledTableCell colSpan={7} align="left">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleGroupExpansion(serviceName)}
                      >
                        <Typography variant="h6">{serviceName}</Typography>
                        {isExpanded ? <ExpandLess /> : <ExpandMore />}
                      </Box>
                    </StyledTableCell>
                  </TableRow>
                  {isExpanded &&
                    details.map((detail) => (
                      <TableRow key={detail.serviceDetailID}>
                        <StyledTableCell align="center">
                          {detail.serviceName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {detail.code}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {detail.minRange}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {detail.maxRange}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {detail.price}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {detail.extraPricePerMM}
                        </StyledTableCell>
                        <StyledTableCell align="center" sx={{ width: "180px" }}>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleEditServiceDetail(detail)}
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
                              handleDeleteServiceDetail(detail.serviceDetailID)
                            }
                            sx={{
                              backgroundColor: "ButtonShadow",
                              color: "black",
                            }}
                          >
                            Delete
                          </Button>
                        </StyledTableCell>
                      </TableRow>
                    ))}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {(editServiceDetail || newServiceDetail) && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogTitle>
            {editServiceDetail ? "Edit Service Detail" : "New Service Detail"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {editServiceDetail
                ? "Edit the details of the service."
                : "Enter the details of the new service."}
            </DialogContentText>
            <FormControl fullWidth margin="normal">
              <InputLabel id="service-select-label">Service</InputLabel>
              <Select
                labelId="service-select-label"
                value={
                  editServiceDetail
                    ? editServiceDetail.serviceID.toString()
                    : newServiceDetail
                    ? newServiceDetail.serviceID.toString()
                    : ""
                }
                onChange={handleSelectChange}
                name="serviceID"
                disabled={!!editServiceDetail} // Disabled when editing
              >
                {serviceIds.map((id) => (
                  <MenuItem key={id} value={id}>
                    {id}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              label="Service Detail Code"
              type="text"
              fullWidth
              id="code"
              name="code"
              value={
                (editServiceDetail
                  ? editServiceDetail.code
                  : newServiceDetail
                  ? newServiceDetail.code
                  : "") || ""
              }
              onChange={handleInputChange}
              InputProps={{
                readOnly: !!editServiceDetail,
              }}
            />
            <TextField
              margin="dense"
              label="Min Range"
              type="number"
              fullWidth
              name="minRange"
              value={
                (editServiceDetail
                  ? editServiceDetail.minRange?.toString()
                  : newServiceDetail
                  ? newServiceDetail.minRange?.toString()
                  : "") || ""
              }
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Max Range"
              type="number"
              fullWidth
              name="maxRange"
              value={
                (editServiceDetail
                  ? editServiceDetail.maxRange?.toString()
                  : newServiceDetail
                  ? newServiceDetail.maxRange?.toString()
                  : "") || ""
              }
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Price"
              type="number"
              fullWidth
              name="price"
              value={
                (editServiceDetail
                  ? editServiceDetail.price?.toString()
                  : newServiceDetail
                  ? newServiceDetail.price?.toString()
                  : "") || ""
              }
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Extra Price per MM"
              type="number"
              fullWidth
              name="extraPricePerMM"
              value={
                (editServiceDetail
                  ? editServiceDetail.extraPricePerMM?.toString()
                  : newServiceDetail
                  ? newServiceDetail.extraPricePerMM?.toString()
                  : "") || ""
              }
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSaveServiceDetail} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {/* Add ToastContainer here */}
      <ToastContainer />
    </Box>
  );
};

export default ServiceDetailNew;
