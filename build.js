const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create main HTML file
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heavens Above - Astronomical Data</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #0c0c2e, #1a1a4a);
            color: white;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 50px;
        }
        
        .header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.8;
        }
        
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }
        
        .feature-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-card h3 {
            color: #4ecdc4;
            margin-bottom: 15px;
            font-size: 1.5rem;
        }
        
        .deployment-info {
            background: rgba(76, 175, 80, 0.2);
            border: 1px solid #4caf50;
            padding: 20px;
            border-radius: 10px;
            margin-top: 30px;
        }
        
        .deployment-info h3 {
            color: #4caf50;
            margin-bottom: 10px;
        }
        
        .footer {
            text-align: center;
            margin-top: 50px;
            opacity: 0.7;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✨ Heavens Above</h1>
            <p>Explore the wonders of the universe</p>
        </div>
        
        <div class="features">
            <div class="feature-card">
                <h3>🌌 Star Maps</h3>
                <p>Interactive star maps and celestial navigation tools for astronomers and stargazers.</p>
            </div>
            
            <div class="feature-card">
                <h3>🛰️ Satellite Tracking</h3>
                <p>Real-time satellite tracking and orbital data for space enthusiasts.</p>
            </div>
            
            <div class="feature-card">
                <h3>📡 Astronomical Data</h3>
                <p>Comprehensive database of stars, planets, and deep space objects.</p>
            </div>
        </div>
        
        <div class="deployment-info">
            <h3>🚀 Successfully Deployed on Vercel!</h3>
            <p>This application has been automatically deployed using GitHub Actions and Vercel.</p>
            <p><strong>Deployment Time:</strong> <span id="deployment-time"></span></p>
        </div>
        
        <div class="footer">
            <p>Built with ❤️ using GitHub Actions & Vercel</p>
        </div>
    </div>

    <script>
        document.getElementById('deployment-time').textContent = new Date().toLocaleString();
    </script>
</body>
</html>`;

// Write HTML file
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
console.log('✅ Build completed successfully!');
