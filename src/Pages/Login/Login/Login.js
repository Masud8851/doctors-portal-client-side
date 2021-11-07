import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import login from "../../../images/login.png";

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};

	const handleLogin = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<Container>
				<Grid sx={{ mt: 1 }} container spacing={2}>
					<Grid item xs={12} md={6}>
						<Typography variant="body1" gutterBottom>
							Login
						</Typography>
						<form onSubmit={handleLogin}>
							<TextField
								sx={{ width: "75%", m: 1 }}
								id="standard-basic"
								type="email"
								label="Your Email"
								name="email"
								onChange={handleOnChange}
								variant="standard"
							/>
							<TextField
								sx={{ width: "75%", m: 1 }}
								id="standard-basic"
								label="Password"
								type="password"
								name="password"
								onChange={handleOnChange}
								variant="standard"
							/>

							<Button
								sx={{ width: "75%", m: 1 }}
								type="submit"
								variant="contained"
							>
								Login
							</Button>
						</form>
					</Grid>
					<Grid item xs={12} md={6}>
						<img style={{ width: "100%" }} src={login} alt="login" />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Login;
