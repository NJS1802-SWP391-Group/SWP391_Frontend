import ValuationStaffIcon from "@mui/icons-material/Assessment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ApprovalIcon from "@mui/icons-material/CheckCircle";
import ConsultingStaffIcon from "@mui/icons-material/Group";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import ManagerPage from "../../pages/manager/managerApprovalPage";

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "#4F46E5",
    color: "#FFF",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "#FFF",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState<string>("Approval");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <StyledIconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="start"
      >
        <MenuIcon />
      </StyledIconButton>
      <StyledDrawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <Typography
            variant="h6"
            sx={{ padding: 2, textAlign: "center", color: "#FFF" }}
          >
            Navigation
          </Typography>
          <List>
            <StyledListItem>
              <StyledButton
                onClick={() => setTask("Assign")}
                startIcon={<AssignmentIcon />}
                fullWidth
              >
                Assign
              </StyledButton>
            </StyledListItem>
            <StyledListItem>
              <StyledButton
                onClick={() => setTask("Approval")}
                startIcon={<ApprovalIcon />}
                fullWidth
              >
                Approval
              </StyledButton>
            </StyledListItem>
            <StyledListItem>
              <StyledButton
                onClick={() => setTask("Valuation Staff")}
                startIcon={<ValuationStaffIcon />}
                fullWidth
              >
                Valuation Staff
              </StyledButton>
            </StyledListItem>
            <StyledListItem>
              <StyledButton
                onClick={() => setTask("Consulting Staff")}
                startIcon={<ConsultingStaffIcon />}
                fullWidth
              >
                Consulting Staff
              </StyledButton>
            </StyledListItem>
          </List>
        </Box>
      </StyledDrawer>
      {task === "Approval" && <ManagerPage />}
    </Box>
  );
};

export default Sidebar;
