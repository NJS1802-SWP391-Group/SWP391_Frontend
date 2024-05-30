// const Certificate = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { managerResponse } = location.state || {};

//   const certificateRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Kiểm tra nếu không có managerResponse, navigate về trang chủ
//     if (!managerResponse) {
//       navigate("/");
//     }
//   }, [managerResponse, navigate]); // Thêm managerResponse và navigate vào dependency array

//   const generatePDF = () => {
//     const input = certificateRef.current;
//     if (input) {
//       const doc = new jsPDF();
//       doc.html(input, {
//         callback: function (doc) {
//           doc.save("certificate.pdf");
//         },
//       });
//     }
//   };

//   return (
//     <Box>
//       {managerResponse && ( // Kiểm tra nếu có managerResponse thì render certificate
//         <>
//           <Box ref={certificateRef} id="certificate" sx={{ padding: 3 }}>
//             <Typography variant="h4" gutterBottom>
//               DIAVAN Certificate
//             </Typography>
//             <Typography variant="h6">Diamond: {managerResponse.diamond}</Typography>
//             <Typography variant="h6">Service: {managerResponse.service}</Typography>
//             <Typography variant="h6">
//               Valuation Staff: {managerResponse.valuationStaff}
//             </Typography>
//             <Typography variant="h6">
//               Valuing Price: {managerResponse.valuingPrice}
//             </Typography>
//             <Typography variant="h6">Status: {managerResponse.status}</Typography>
//           </Box>
//           <Button variant="contained" onClick={generatePDF} sx={{ marginTop: 3 }}>
//             Download PDF
//           </Button>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Certificate;

// const Certificate = () => {
//   return (
//     <Box>
//       <Box sx={{ padding: 3 }}>
//         <Typography variant="h4" gutterBottom>
//           DIAVAN Certificate
//         </Typography>
//         <Typography variant="h6">Diamond: </Typography>
//         <Typography variant="h6">Service: </Typography>
//         <Typography variant="h6">Valuation Staff: </Typography>
//         <Typography variant="h6">Valuing Price: </Typography>
//         <Typography variant="h6">Status: </Typography>
//       </Box>
//       <Button variant="contained" sx={{ marginTop: 3 }}>
//         Download PDF
//       </Button>
//     </Box>
//   );
// };

// export default Certificate;
