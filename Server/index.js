const { db } = require("./config/firebase.js");
const express = require("express");
const logger = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");
const CustomError = require("./utils/CustomError.js");
const globalErrorHandler = require("./controllers/errorController.js");
const { google } = require('googleapis');

const petProfileRoute = require("./routes/petProfileRoute.js");
const petRecordRoute = require("./routes/petRecordRoute.js");
const breedRecommendationRoute = require("./routes/breedRecommendationRoute.js");
const usersRouter = require("./routes/usersRouter.js");
const reminderRouter = require("./routes/remindersRouter.js")


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());


app.use("/petbay/api/v1/pet-profiles/", petProfileRoute);
app.use("/petbay/api/v1/pet-records/", petRecordRoute)
app.use("/petbay/api/v1/breed-recommendation/",breedRecommendationRoute);
app.use("/petbay/api/v1/users", usersRouter);
app.use("/petbay/api/v1/reminders", reminderRouter);

app.all("*", (req, res, next) => {
  const err = new CustomError(
    `Invalid Call! URL Not Found: ${req.originalUrl}`,
    404
  );
  next(err);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(globalErrorHandler);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
