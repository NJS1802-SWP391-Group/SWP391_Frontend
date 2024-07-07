import { Button, Card, Container, Divider, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/Diavan.png";
import DiamondImg from "../../assets/—Pngtree—jewellery stone diamond stone_14572102.png";
import { InforEmail } from "../../interfaces/email/EmailInterface";
import emailApi from "../../services/emailApi";
import orderApi from "../../services/orderApi";

const SendEmail = () => {
  const { state } = useLocation();
  const inforEmail: InforEmail = state;
  const navigate = useNavigate();

  const onCLickBack = () => {
    navigate(-1);
  };

  const handleSendEmail = (orderId: number) => {
    emailApi
      .sendEmail({
        orderID: orderId,
      })
      .then((response: any) => {
        console.log("Send email:", response);
        if (response === "Sent successfully") {
          alert("Send email successfully");
          navigate(-1);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const onClickSeal = async (orderId: number) => {
    const data: any = await orderApi.sealOrder(orderId);
    alert(data);
    navigate("/consulting-page");
  };

  const onClickUnSeal = async (orderId: number) => {
    const data = await orderApi.unsealOrder(orderId);
    alert(data);
    navigate("/consulting-page");
  };

  const onClickReturn = (orderId: number) => {
    orderApi
      .returnOrder(orderId)
      .then((response: any) => {
        console.log("Return response", response.data);
        alert(response);
        navigate("/consulting-page");
      })
      .catch((error) => {
        console.log("Return error", error);
      });
  };
  return (
    <div>
      <Container>
        <Card
          sx={{
            alignItems: "center",
            borderRadius: "25px",
            border: "1px solid black",
          }}
        >
          <div
            className="header-email"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ padding: "10px 10px" }}>
              <img src={Logo} alt="logo" width={"70px"} height={"70px"} />
            </span>
            <Typography variant="h4">Diavan</Typography>
          </div>

          <br />
          <div style={{ padding: "0 5%" }}>
            <div className="typography-email" style={{ margin: "10px 0" }}>
              Xin chào {inforEmail.firstName} {inforEmail.lastName},
              <br />
              Đơn nhận định giá {""}
              <span style={{ fontWeight: "bold", color: "green" }}>
                {inforEmail.code}
              </span>{" "}
              của bạn đã được hoàn thành vào ngày{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                {inforEmail.completeDate}
              </span>
              . Vui lòng đến Diavan để làm các thủ tục nhận lại sản phẩm. Nếu
              sau 30 ngày mà quý khách vẫn chưa đến nhận thủ tục nhận lại,Diavan
              sẽ tiến hành niêm phong đơn định giá theo quy định của công ty
            </div>
            <Divider variant="middle" />
            <div className="info-email" style={{ margin: "10px 0" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Thông tin đơn nhận định giá
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 200px",
                }}
              >
                <div>
                  <ul style={{ listStyle: "none" }}>
                    <li>Mã đơn nhận:</li>
                    <li>Số lượng:</li>
                    <li>Ngày thanh toán:</li>
                    <li>Ngày hoàn thành:</li>
                  </ul>
                </div>
                <div>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <span
                        style={{
                          textDecorationLine: "underline",
                          color: "green",
                        }}
                      >
                        {inforEmail.code}
                      </span>
                    </li>

                    <li>{inforEmail.quantity}</li>
                    <li
                      style={{
                        textDecorationLine: "underline",
                        color: "green",
                      }}
                    >
                      {inforEmail.time}
                    </li>
                    <li
                      style={{
                        textDecorationLine: "underline",
                        color: "green",
                      }}
                    >
                      {inforEmail.completeDate}
                    </li>
                  </ul>
                </div>
              </div>
              {/* Map thông tin ở đây */}
              {inforEmail.detailValuations.map((item, index) => (
                <div style={{ padding: "0 200px", margin: "10px 0" }}>
                  <span>
                    <img src={DiamondImg} alt="" width={180} height={180} />
                  </span>
                  <Typography>
                    {index + 1}.Chi tiết đơn hàng {index + 1}
                  </Typography>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <ul style={{ listStyle: "none" }}>
                        <li>Mã đơn:</li>
                        <li>Loại dịch vụ:</li>
                        <li>Kích cỡ:</li>
                        <li>Giá dịch vụ:</li>
                        <li>Giá trị kim cương:</li>
                      </ul>
                    </div>
                    <div style={{ marginRight: "15px" }}>
                      <ul style={{ listStyle: "none" }}>
                        <li>{item.code}</li>
                        <li>{item.serviceName}</li>
                        <li>{item.estimateLength}(mm)</li>
                        <li>{item.servicePrice}</li>
                        <li>{item.price}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              <Divider variant="middle" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 200px",
                  margin: "10px 0",
                }}
              >
                <Typography>Tổng thanh toán:</Typography>
                <Typography sx={{ marginRight: "115px" }}>
                  {inforEmail.totalPay}
                </Typography>
              </div>
              <Divider variant="middle" />
              <div style={{ padding: "0 200px", margin: "10px 0" }}>
                <Typography fontWeight="bold">Bước tiếp theo</Typography>
                <Typography fontStyle="italic">
                  Vui lòng đến Diavan Componay để nhận lại kim cương và giấy
                  thẩm định. <br /> Chúc bạn luôn có những trải nghiệm tuyệt vời
                  khi trải nghiệm dịch vụ của Diavan.
                </Typography>
              </div>
              <div style={{ padding: "0 200px", margin: "10px 0" }}>
                Trân trọng, <br />
                Đội ngũ Diavan
              </div>
              <Divider variant="middle" />
            </div>
          </div>
        </Card>
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 185px",
        }}
      >
        <Button
          onClick={() => {
            onCLickBack();
          }}
          variant="outlined"
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ marginLeft: "5px" }}
          color="error"
          disabled={inforEmail.status === "Completed" ? false : true}
          onClick={() => onClickSeal(inforEmail.orderID)}
        >
          Seal
        </Button>
        <Button
          variant="contained"
          sx={{ marginLeft: "5px" }}
          color="success"
          disabled={inforEmail.status === "Sealed" ? false : true}
          onClick={() => {
            onClickUnSeal(inforEmail.orderID);
          }}
        >
          UnSeal
        </Button>
        <Button
          variant="contained"
          sx={{ marginLeft: "5px" }}
          color="success"
          disabled={inforEmail.status === "Completed" ? false : true}
          onClick={() => {
            onClickReturn(inforEmail.orderID);
          }}
        >
          Return
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleSendEmail(inforEmail.orderID);
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default SendEmail;
