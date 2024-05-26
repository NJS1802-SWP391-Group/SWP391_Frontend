import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchButton from "../../assets/Search.png";
const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
        padding: "10px",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search order detail code"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <img
                  src={SearchButton}
                  width="35"
                  height="35"
                  alt="SearchButton"
                  className="SearchButton"
                />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            borderRadius: "50px",
            border: "1px solid #000",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#000",
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
