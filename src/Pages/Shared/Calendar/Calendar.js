import React from "react";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

const Calendar = ({ date, setDate }) => {
	// const [date, setDate] = React.useState(new Date());
	return (
		<div>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<StaticDatePicker
					displayStaticWrapperAs="desktop"
					value={date}
					onChange={(newValue) => {
						setDate(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</div>
	);
};

export default Calendar;