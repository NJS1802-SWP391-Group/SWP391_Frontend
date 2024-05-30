import React, {
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import "./ConsultingStaffPage.css";
import orderApi from "../../services/orderApi";
import { OrderInterface } from "../../interfaces/order/orderInterface";
import NavBarSystem from "../../components/system/NavBarSystem";
import { Container } from "@mui/material";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

const ConsultingStaffPage = () => {
  const [orders, setOrders] = useState<OrderInterface[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<OrderInterface | null>(
    null
  );

  // const handleOrderClick = (
  //   order: any
  // ): MouseEventHandler<HTMLTableRowElement> | undefined => {
  //   setSelectedOrder(order);
  // };

  useEffect(() => {
    const fectOrders = async () => {
      try {
        const orderList: any = await orderApi.getAll();
        setOrders(orderList);
      } catch (error) {
        console.log(error);
      }
    };
    fectOrders();
  }, []);
  console.log(orders);

  // const options: MUIDataTableOptions = {
  //   onRowClick: (rowData, rowMeta) => {
  //     const orderIndex = rowMeta.dataIndex;
  //     const selected = orders[orderIndex];
  //     setSelectedOrder(selected);
  //   },
  // };

  return (
    // <MUIDataTable
    //     title="Consulting List"
    //     data={orders}
    //     columns={columns}
    //     options={options}
    //   />
    // {selectedOrder && (
    //   <div>
    //     <h2>Selected Order</h2>
    //     {/* Hiển thị thông tin của selectedOrder */}
    //   </div>
    // )}
    <>
      <NavBarSystem marginBottom="100px" />
      <Container>Consulting staff page</Container>
    </>
  );
};

export default ConsultingStaffPage;
