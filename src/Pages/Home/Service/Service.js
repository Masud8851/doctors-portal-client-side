import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = (props) => {
	const { name, description, img } = props.service;

	return (
		<div>
			<Card sx={{ minWidth: 275, boxShadow: 0 }}>
				<CardMedia
					component="img"
					height="194"
					image={img}
					style={{ width: "auto", height: "80px", margin: "0 auto" }}
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="h5" component="div">
						{name}
					</Typography>

					<Typography variant="body2" color="text.secondary">
						{description}
						<br />
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default Service;
