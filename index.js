const express = require("express");

const route = require("./routes/sendMail");

const app = express();
// declaring the app as an express instance
app.use(express.json());
// parsing the express data to json format

// use the api endpoints here
app.use("/api", route);

app.use((err, req, res, next) => {
	const errStatus = err.status || 500;
	const errMessage = err.message || "Something went wrong !";
	return res.status(errStatus).json({
		success: false,
		status: errStatus,
		message: errMessage,
		stack: err.stack,
	});
});

const port = 5000;

app.listen(port, () => {
	console.log(`App is now running on port [${port}]`);
});
