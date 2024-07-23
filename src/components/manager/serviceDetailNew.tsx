import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PlusAdd from "../../assets/PlusAdd.png";
import { ServiceDetailResponse } from "../../interfaces/serviceDetail/ServiceDetail";
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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const fetchServiceDetails = async () => {
    const response: any = await serviceDetailApi.getAll();
    setServiceDetails(response);
    groupServiceDetails(response);
  };

  useEffect(() => {
    fetchServiceDetails();
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
      serviceName: selectedService || "",
    });
  };

  const handleEditServiceDetail = (serviceDetail: ServiceDetailResponse) => {
    setEditServiceDetail(serviceDetail);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (editServiceDetail) {
      setEditServiceDetail((prev) =>
        prev ? { ...prev, [name]: value } : null
      );
    } else if (newServiceDetail) {
      setNewServiceDetail((prev) => (prev ? { ...prev, [name]: value } : null));
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
          sx={{ marginLeft: 2 }}
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
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#4F46E5" }}>
              <StyledTableCell align="center">Service Name</StyledTableCell>
              <StyledTableCell align="center">SD Code</StyledTableCell>
              <StyledTableCell align="center">Min Range</StyledTableCell>
              <StyledTableCell align="center">Max Range</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Extra Price</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(groupedServiceDetails).map((serviceName) => {
              const details = groupedServiceDetails[serviceName];
              const isExpanded = expandedGroups[serviceName];
              return (
                <React.Fragment key={serviceName}>
                  <TableRow>
                    <TableCell
                      align="center"
                      rowSpan={isExpanded ? details.length + 1 : 1}
                      sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography>{serviceName}</Typography>
                        <IconButton
                          onClick={() => toggleGroupExpansion(serviceName)}
                        >
                          {isExpanded ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                  {isExpanded &&
                    details.map((detail) => (
                      <TableRow key={detail.serviceDetailID}>
                        <TableCell align="center">{detail.code}</TableCell>
                        <TableCell align="center">{detail.minRange}</TableCell>
                        <TableCell align="center">{detail.maxRange}</TableCell>
                        <TableCell align="center">{detail.price}</TableCell>
                        <TableCell align="center">
                          {detail.extraPricePerMM}
                        </TableCell>
                        <TableCell align="center">
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
                            // onClick={() => handleDeleteService(detail.serviceDetailID)}
                            sx={{
                              backgroundColor: "ButtonShadow",
                              color: "black",
                            }}
                          >
                            Delete
                          </Button>
                        </TableCell>
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
            {editServiceDetail ? "Edit ServiceDetail" : "New ServiceDetail"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {editServiceDetail
                ? "Update the details of the ServiceDetail."
                : "Enter the details of the new ServiceDetail."}
            </DialogContentText>
            <TextField
              margin="dense"
              label="Code"
              type="text"
              fullWidth
              id="code"
              name="code"
              value={
                editServiceDetail
                  ? editServiceDetail.code
                  : newServiceDetail?.code || ""
              }
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Min Range"
              type="number"
              fullWidth
              id="minRange"
              name="minRange"
              value={
                editServiceDetail
                  ? editServiceDetail.minRange
                  : newServiceDetail?.minRange || 0
              }
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Max Range"
              type="number"
              fullWidth
              id="maxRange"
              name="maxRange"
              value={
                editServiceDetail
                  ? editServiceDetail.maxRange
                  : newServiceDetail?.maxRange || 0
              }
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Price"
              type="number"
              fullWidth
              id="price"
              name="price"
              value={
                editServiceDetail
                  ? editServiceDetail.price
                  : newServiceDetail?.price || 0
              }
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Extra PricePerMM"
              type="number"
              fullWidth
              id="extraPricePerMM"
              name="extraPricePerMM"
              value={
                editServiceDetail
                  ? editServiceDetail.extraPricePerMM
                  : newServiceDetail?.extraPricePerMM || 0
              }
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Cancel
            </Button>
            {/* <Button onClick={handleSaveServiceDetail} color="primary">Save</Button> */}
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default ServiceDetailNew;
