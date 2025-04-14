const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// config for ngrok saved at  C:\Users\Varun Patani\AppData\Local/ngrok/ngrok.yml

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Netflix Clone</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Arial', sans-serif;
            }
            
            body {
                background-color: #fff;
                color: #000;
            }
            
            .container {
                width: 100%;
                min-height: 100vh;
                //background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                            url('https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/9c9af369-7a8c-4c8f-8e4a-d6c9d655f713/IN-en-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg');
                background-size: cover;
                background-position: center;
                padding: 10px 8%;
                position: relative;
            }
            
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 0;
            }
            
            .logo {
                width: 150px;
                cursor: pointer;
                color: #e50914;
                font-size: 32px;
                font-weight: bold;
            }
            
            .btn {
                display: inline-block;
                background: #e50914;
                color: white;
                padding: 8px 20px;
                font-size: 16px;
                border-radius: 4px;
                text-decoration: none;
                cursor: pointer;
                border: none;
            }
            
            .language-btn {
                background: transparent;
                border: 1px solid white;
                padding: 7px 15px;
                margin-right: 15px;
                color: white;
                cursor: pointer;
                border-radius: 3px;
            }
            
            .content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                width: 90%;
                max-width: 900px;
            }
            
            .content h1 {
                font-size: 60px;
                line-height: 70px;
                font-weight: 600;
                margin-bottom: 20px;
            }
            
            .content h3 {
                font-weight: 400;
                margin-bottom: 20px;
                font-size: 24px;
            }
            
            .content p {
                font-size: 18px;
                margin-bottom: 30px;
            }
            
            .email-signup {
                background: white;
                border-radius: 4px;
                display: flex;
                align-items: center;
                margin: 30px auto;
                overflow: hidden;
                max-width: 600px;
            }
            
            .email-signup input {
                flex: 1;
                border: 0;
                outline: 0;
                margin-left: 20px;
                font-size: 16px;
                padding: 15px 0;
            }
            
            .email-signup .btn {
                font-size: 16px;
                padding: 15px 30px;
                font-weight: bold;
                text-transform: uppercase;
                border-radius: 0;
            }
            
            @media only screen and (max-width: 768px) {
                .content h1 {
                    font-size: 40px;
                    line-height: 50px;
                }
                
                .content h3, .content p {
                    font-size: 18px;
                }
                
                .email-signup {
                    flex-direction: column;
                }
                
                .email-signup input {
                    padding: 15px 20px;
                    width: 100%;
                    margin: 0;
                }
                
                .email-signup .btn {
                    width: 100%;
                    margin-top: 10px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <div class="logo">NETFLIX</div>
                <div>
                    <select class="language-btn">
                        <option value="">English</option>
                        <option value="">Hindi</option>
                    </select>
                    <button class="btn">Sign In</button>
                </div>
            </header>
            
            <div class="content">
                <h1>Unlimited movies, TV shows, and more</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <form class="email-signup" action="/signup" method="POST">
                    <input type="email" name="email" placeholder="Email address" required>
                    <button type="submit" class="btn">Get Started &gt;</button>
                </form>
            </div>
        </div>
        
        <script>
            document.querySelector('.btn').addEventListener('click', function() {
                alert('This is a demo Netflix clone. Sign in functionality is not implemented.');
            });
        </script>
    </body>
    </html>
  `);
});

// New route to handle signup form submission
app.post('/signup', (req, res) => {
  const email = req.body.email;
  
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Netflix</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Arial', sans-serif;
            }
            
            body {
                background-color: #000;
                color: #fff;
            }
            
            .container {
                width: 100%;
                min-height: 100vh;
                background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                            url('https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/9c9af369-7a8c-4c8f-8e4a-d6c9d655f713/IN-en-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg');
                background-size: cover;
                background-position: center;
                padding: 10px 8%;
                position: relative;
            }
            
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 0;
            }
            
            .logo {
                width: 150px;
                cursor: pointer;
                color: #e50914;
                font-size: 32px;
                font-weight: bold;
            }
            
            .welcome-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                width: 90%;
                max-width: 900px;
                background-color: rgba(0, 0, 0, 0.75);
                padding: 60px;
                border-radius: 5px;
            }
            
            .welcome-content h1 {
                font-size: 48px;
                margin-bottom: 30px;
                color: #e50914;
            }
            
            .welcome-content .email {
                font-size: 24px;
                margin-bottom: 40px;
                font-weight: 300;
            }
            
            .btn {
                display: inline-block;
                background: #e50914;
                color: white;
                padding: 12px 30px;
                font-size: 18px;
                border-radius: 4px;
                text-decoration: none;
                cursor: pointer;
                border: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <div class="logo">NETFLIX</div>
            </header>
            
            <div class="welcome-content">
                <h1>Welcome to Netflix</h1>
                <div class="email">Hi ${email}</div>
                <a href="/" class="btn">Back to Home</a>
            </div>
        </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));