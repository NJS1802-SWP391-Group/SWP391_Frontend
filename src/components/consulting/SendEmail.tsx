import { Button, Card, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/Diavan.png";
import DiamondImg from "../../assets/—Pngtree—jewellery stone diamond stone_14572102.png";

const SendEmail = () => {
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
              Đơn hàng{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                #240528GYY423E0
              </span>{" "}
              của bạn đã được giao thành công ngày{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                31/05/2024
              </span>
              . Vui lòng đăng nhập Diavan để xác nhận bạn đã nhận hàng và hài
              lòng với sản phẩm trong vòng 3 ngày. Sau khi bạn xác nhận, chúng
              tôi sẽ thanh toán cho Người bán vietcomtechnology.jsc. Nếu bạn
              không xác nhận trong khoảng thời gian này, Shopee cũng sẽ thanh
              toán cho Người bán.
            </div>
            <Divider variant="middle" />
            <div className="info-email" style={{ margin: "10px 0" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Thông tin đơn hàng
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
                    <li>Mã đơn hàng:</li>
                    <li>Số viên :</li>
                    <li>Ngày đặt hàng:</li>
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
                  </ul>
                </div>
              </div>
              {/* Map thông tin ở đây */}
              <div style={{ padding: "0 200px", margin: "10px 0" }}>
                <span>
                  <img src={DiamondImg} alt="" width={180} height={180} />
                </span>
                <Typography>1. Viên kim cương 1</Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <ul style={{ listStyle: "none" }}>
                      <li>Mã kim cương:</li>
                      <li>Loại dịch vụ:</li>
                      <li>Kích cỡ:</li>
                      <li>Giá dịch vụ:</li>
                      <li>Giá:</li>
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
        <Button variant="outlined">Back</Button>
        <Button variant="contained">Send</Button>
      </div>
    </div>
  );
};

export default SendEmail;
