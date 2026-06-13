const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Google Skills Lab - Docker</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .container {
            text-align: center;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }
          h1 {
            color: #333;
            margin: 0;
          }
          p {
            color: #666;
            margin: 10px 0 0 0;
          }
          .success {
            color: #4caf50;
            font-weight: bold;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🐳 Docker Container Running!</h1>
          <p>Google Skills Lab - Successfully Deployed</p>
          <p class="success">✓ Container is working perfectly</p>
          <p>Port: ${port}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`✓ App running at http://localhost:${port}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
});