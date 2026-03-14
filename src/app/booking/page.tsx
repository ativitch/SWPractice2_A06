import TopMenu from "@/components/TopMenu";
import DateReserve from "@/components/DateReserve";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#f3f0ec]">
      <div className="flex justify-center px-4 py-10">
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "white",
            padding: 4,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <h1 className="text-2xl font-semibold text-gray-800">
            Venue Booking
          </h1>

          <TextField
            name="Name-Lastname"
            label="Name-Lastname"
            variant="standard"
            fullWidth
          />

          <TextField
            name="Contact-Number"
            label="Contact-Number"
            variant="standard"
            fullWidth
          />

          <FormControl fullWidth variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
              labelId="venue-label"
              id="venue"
              label="Venue"
              defaultValue=""
            >
            <MenuItem value="The Bloom Pavilion">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark Space">Spark Space</MenuItem>
            <MenuItem value="The Grand Table">The Grand Table</MenuItem>
          </Select>
          </FormControl>

          <DateReserve />

          <Button variant="contained">Book Venue</Button>
        </Box>
      </div>
    </main>
  );
}