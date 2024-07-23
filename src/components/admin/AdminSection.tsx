import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import consultingStaffImg from "../../assets/consultant.png";
import managerImg from "../../assets/Manager.png";
import valuationStaffImg from "../../assets/staff.png";
import orderApi from "../../services/orderApi";
import userApi from "../../services/userApi";
import AccountList from "./AccountList";
import OrderChart from "../chart/OrderChart";
import RevenueChart from "../chart/RevenueChart";
import adminApi from "../../services/adminService/adminApi";
import ServiceChart from "../chart/ServiceChart";

export interface ChartReponse {
  total: number;
  trend: number;
  adminDatas: AdminData[];
}

export interface AdminData {
  date: string;
  value: number;
}

export interface ServiceChart {
  serviceID: number;
  serviceName: string;
  quantity: number;
}

const AdminSection = () => {
  const [countCustomer, setCountCustomer] = useState();
  const [countAccount, setCountAccount] = useState<number>();
  const [countOrder, setCountOrder] = useState();
  const [countConsulting, setCountConsulting] = useState();
  const [countValuation, setCountValuation] = useState();
  const [countManager, setCountManager] = useState();
  const [chartOrderQuantity, setChartOrderQuantity] = useState<ChartReponse>();
  const [chartRevenue, setChartRevenue] = useState<ChartReponse>();
  const [chartService, setChartService] = useState<ServiceChart[]>();

  const getChartData = async () => {
    const getOrderQuantity: any = await adminApi.getChartOrder();
    setChartOrderQuantity(getOrderQuantity);
    const getRevenue: any = await adminApi.getChartRevenue();
    setChartRevenue(getRevenue);
    const getService: any = await adminApi.getChartService();
    setChartService(getService);
  };
  useEffect(() => {
    const fechData = async () => {
      const countAccount: any = await userApi.countAccount();
      setCountAccount(countAccount);
      const countCustomer: any = await userApi.countCustomer();
      setCountCustomer(countCustomer);
      const countOrder: any = await orderApi.countOrder();
      setCountOrder(countOrder);
      const countConsulting: any = await userApi.countConsultingStaff();
      setCountConsulting(countConsulting);
      const countValuation: any = await userApi.countValuationStaff();
      setCountValuation(countValuation);
      const countManager: any = await userApi.countManager();
      setCountManager(countManager);
    };
    fechData();
  }, []);

  useEffect(() => {
    getChartData();
  }, []);
  console.log(chartRevenue);

  const chartOrderQuantityData = chartOrderQuantity?.adminDatas.map((x) => {
    return x.value;
  });
  const chartOrderQuantityLabel = chartOrderQuantity?.adminDatas.map((x) => {
    return x.date.slice(0, 10);
  });

  const chartRevenueData = chartRevenue?.adminDatas.map((x) => {
    return x.value;
  });
  const chartRevenueLabel = chartRevenue?.adminDatas.map((x) => {
    return x.date.slice(0, 10);
  });

  const chartServiceData = chartService?.map((x) => {
    return x.quantity;
  });
  const chartServiceLabel = chartService?.map((x) => {
    return x.serviceName;
  });

  return (
    <Card sx={{ height: "auto", margin: "20px 0", padding: "10px" }}>
      {/* <div
        style={{
          margin: "20px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card
          sx={{
            padding: "10px 250px 30px 100px",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <div
            style={{
              padding: 5,
              backgroundColor: "black",
              borderRadius: "100px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ManageAccountsIcon />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                padding: 5,
                borderRadius: "10px",
                gap: 3,
              }}
            >
              Account
            </p>
            <p style={{ fontSize: "30px", color: "black" }}>{countAccount}</p>
          </div>
        </Card>
        <Card
          sx={{
            padding: "10px 250px 30px 100px",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <div
            style={{
              padding: 5,
              backgroundColor: "black",
              borderRadius: "100px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ListAltIcon />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                padding: 5,
                borderRadius: "10px",
                gap: 3,
              }}
            >
              Order
            </p>
            <p style={{ fontSize: "30px", color: "black" }}>{countOrder}</p>
          </div>
        </Card>
        <Card
          sx={{
            padding: "10px 250px 30px 100px",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <div
            style={{
              padding: 5,
              backgroundColor: "black",
              borderRadius: "100px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaceRetouchingNaturalIcon />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                padding: 5,
                borderRadius: "10px",
                gap: 3,
              }}
            >
              Customer
            </p>
            <p style={{ fontSize: "30px", color: "black" }}>{countCustomer}</p>
          </div>
        </Card>
      </div> */}
      <div
        style={{
          margin: "20px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card
          sx={{
            padding: "10px 250px 30px 100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <div
            style={{
              padding: 5,

              borderRadius: "100px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={consultingStaffImg}
              width={50}
              height={50}
              alt="consultingStaffImg"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                padding: 5,
                borderRadius: "10px",
                gap: 3,
              }}
            >
              Consulting
            </p>
            <p style={{ fontSize: "30px", color: "black" }}>
              {countConsulting}
            </p>
          </div>
        </Card>
        <Card
          sx={{
            padding: "10px 250px 30px 100px",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <div
            style={{
              padding: 5,
              borderRadius: "100px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={valuationStaffImg}
              width={50}
              height={50}
              alt="valuationStaffImg"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                padding: 5,
                borderRadius: "10px",
                gap: 3,
              }}
            >
              Valuation
            </p>
            <p style={{ fontSize: "30px", color: "black" }}>{countValuation}</p>
          </div>
        </Card>
        <Card
          sx={{
            padding: "10px 250px 30px 100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <div
            style={{
              padding: 5,

              borderRadius: "100px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={managerImg} width={50} height={50} alt="managerImg" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                padding: 5,
                borderRadius: "10px",
                gap: 3,
              }}
            >
              Manager
            </p>
            <p style={{ fontSize: "30px", color: "black" }}>{countManager}</p>
          </div>
        </Card>
      </div>
      <div style={{ margin: "40px 0" }}>
        <OrderChart
          data={chartOrderQuantityData}
          labels={chartOrderQuantityLabel}
          total={chartOrderQuantity?.total}
        />
        <Typography variant="h6" textAlign={"center"}>
          Total Order Chart
        </Typography>
      </div>
      <div style={{ margin: "40px 0" }}>
        <RevenueChart
          data={chartRevenueData}
          labels={chartRevenueLabel}
          total={chartRevenue?.total}
        />
        <Typography variant="h6" textAlign={"center"}>
          Revenue Chart
        </Typography>
      </div>
      <div style={{ margin: "40px 0" }}>
        <ServiceChart data={chartServiceData} labels={chartServiceLabel} />
        <Typography variant="h6" textAlign={"center"}>
          Service's rate of occurrence
        </Typography>
      </div>
      <div>
        <AccountList />
      </div>
    </Card>
  );
};

export default AdminSection;
