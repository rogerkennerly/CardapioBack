const express = require("express");

const app = express();

app.get("/", (request, response) => {});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
