const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <body style="font-family: sans-serif; text-align: center; padding-top: 50px;">
            <h1>Experiment 7: Automated Blue-Green Deployment</h1>
            <h2 style="color: #2e7d32;">Status: SUCCESSFUL</h2>
            <p>Developed by: <b>Arunbalaji</b></p>
            <div style="margin-top: 20px; padding: 10px; border: 2px solid #ccc; display: inline-block;">
                Current Environment: <span style="font-weight: bold; color: green;">GREEN</span>
            </div>
        </body>
    `);
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});