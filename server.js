const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.send('<h1>APK Host Server</h1><p>Download your sihappver1.2.apk from <a href="/sihappver1.2.apk">here</a></p>');
});

app.listen(port, () => {
  console.log(`APK host server listening on port ${port}`);
});
