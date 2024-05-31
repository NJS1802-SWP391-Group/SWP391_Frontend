import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchButton from "../../assets/Search.png";

interface SearchBarProps {
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  handleSearchChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "350px",
        margin: "0 auto",
        padding: "5px",
        marginTop: "10px",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search order detail code"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <img
                  src={SearchButton}
                  width="25"
                  height="25"
                  alt="SearchButton"
                  className="SearchButton"
                />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            height: "45px",
            borderRadius: "25px",
            border: "0.5px solid #000",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#000",
            },
            paddingRight: "8px",
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
