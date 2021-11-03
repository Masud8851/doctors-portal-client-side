import React from "react";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Typography from "@mui/material/Typography";

const services = [
	{
		name: "Fluride Treatment",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores facilis, id in dolorem quisquam nam a officiis asperiores.",
		img: fluoride,
	},
	{
		name: "Cavity Filling",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores facilis, id in dolorem quisquam nam a officiis asperiores.",
		img: cavity,
	},
	{
		name: "Teeth Whitening",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores facilis, id in dolorem quisquam nam a officiis asperiores.",
		img: whitening,
	},
];

const Services = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Container>
				<Typography
					sx={{ fontWeight: 500, color: "success.main", m: 2 }}
					variant="h5"
					component="div"
				>
					OUR SERVICES
				</Typography>
				<Typography sx={{ fontWeight: 600, m: 3 }} variant="h4" component="div">
					Services We Provide
				</Typography>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{services.map((service, index) => (
						<Grid item xs={4} sm={4} md={4} key={index}>
							<Service service={service}></Service>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Services;
