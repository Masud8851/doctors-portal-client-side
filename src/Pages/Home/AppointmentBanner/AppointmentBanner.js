import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBg = {
	background: `url(${bg})`,
	marginTop: "200px",
	backgroundColor: "rgba(45, 58, 74, 0.9)",
	backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
	return (
		<div>
			<Box style={appointmentBg} sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<img
							style={{ width: "400px", marginTop: "-110px" }}
							src={doctor}
							alt=""
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							textAlign: "left",
							alignItems: "center",
						}}
					>
						<Box>
							<Typography
								variant="h6"
								sx={{ mb: 3 }}
								style={{ color: "#5ce7ed" }}
							>
								Appointment
							</Typography>
							<Typography
								variant="h3"
								sx={{ mb: 3 }}
								style={{ color: "white", fontWeight: 300 }}
							>
								Make an appointment <br /> Today
							</Typography>
							<Typography
								variant="h4"
								sx={{ my: 3 }}
								style={{ color: "white", fontSize: 14, fontWeight: 200 }}
							>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Deleniti, placeat incidunt? Fugit consequuntur voluptatibus
								voluptatum soluta excepturi provident enim nihil aliquid tempora
								nemo!
							</Typography>
							<Button
								variant="contained"
								style={{ backgroundColor: "#5ce7ed" }}
							>
								Learn More
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default AppointmentBanner;
