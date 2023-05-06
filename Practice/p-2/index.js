const express = require('express');
const path = require('path');

const app = express();
const public_path = path.join(__dirname,'public');

app.use(express.static(public_path));

app.listen(5001);