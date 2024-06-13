import { Button, Card, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/Diavan.png";
import DiamondImg from "../../assets/—Pngtree—jewellery stone diamond stone_14572102.png";
import { useNavigate } from "react-router-dom";

const SendEmail = () => {
  const navigate = useNavigate();

  const onCLickBack = () => {
    navigate(-1);
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
              Xin chào VoMongLuan,
              <br />
              Đơn nhận định giá {""}
              <span style={{ fontWeight: "bold", color: "green" }}>
                #240528GYY423E0
              </span>{" "}
              của bạn đã được hoàn thành vào ngày{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                31/05/2024
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
                        #240528GYY423E0
                      </span>
                    </li>

                    <li>2</li>
                    <li
                      style={{
                        textDecorationLine: "underline",
                        color: "green",
                      }}
                    >
                      28/05/2024 15:28:07
                    </li>
                    <li
                      style={{
                        textDecorationLine: "underline",
                        color: "green",
                      }}
                    >
                      28/05/2024 15:28:07
                    </li>
                  </ul>
                </div>
              </div>
              {/* Map thông tin ở đây */}
              <div style={{ padding: "0 200px", margin: "10px 0" }}>
                <span>
                  <img src={DiamondImg} alt="" width={180} height={180} />
                </span>
                <Typography>1.Chi tiết đơn hàng 1</Typography>
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
                      <li>123</li>
                      <li>Standard Valuation</li>
                      <li>10(mm)</li>
                      <li>100$</li>
                      <li>2000$</li>
                    </ul>
                  </div>
                </div>
              </div>
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
                <Typography sx={{ marginRight: "115px" }}>100$</Typography>
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
        <Button variant="contained">Send</Button>
      </div>
    </div>
  );
};

export default SendEmail;
