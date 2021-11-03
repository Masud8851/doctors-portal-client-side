import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Grid from "@mui/material/Grid";
import { Button, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";

const bannerBg = {
	background: `url(${bg})`,
};

const verticalCenter = {
	display: "flex",
	alignItems: "center",
	height: 450,
};

const Banner = () => {
	return (
		<div>
			<Container style={bannerBg} sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid
						style={{ ...verticalCenter, textAlign: "left" }}
						item
						xs={12}
						md={6}
					>
						<Box>
							<Typography variant="h4">
								Your New Smile <br />
								Starts Here
							</Typography>
							<Typography
								variant="h6"
								sx={{ fontSize: 14, color: "gray", my: 5 }}
							>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
								facilis ex tempore, ipsa facere dicta quidem temporibus numquam
								delectus aut.
							</Typography>
							<Button
								variant="contained"
								style={{ backgroundColor: "#5ce7ed" }}
							>
								Get Appointment
							</Button>
						</Box>
					</Grid>
					<Grid item xs={12} md={6} style={verticalCenter}>
						<img style={{ width: "350px" }} src={chair} alt="" />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Banner;
