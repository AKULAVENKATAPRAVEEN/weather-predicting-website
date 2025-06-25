# 🌦️ Weather Predicting Website (100% AWS Hosted)

A clean and responsive weather forecast web app that allows users to search for real-time weather information of any city using OpenWeatherMap API — securely integrated using AWS Lambda and API Gateway.

---

## 🔗 Live Demo

👉 [🌐 View Live on AWS S3](http://weather-app-praveen.s3-website.ap-south-1.amazonaws.com)

✅ Fully hosted on **Amazon S3**  
✅ Backend powered by **AWS Lambda + API Gateway**  
✅ Secure API integration without exposing keys

---

## 🔥 Features

- 🌍 Search for weather by city name
- 🌡️ Displays:
  - Temperature
  - Feels like
  - Weather condition (cloudy, clear, rain, etc.)
  - Humidity
  - Wind speed
- 📱 Responsive design (mobile-friendly)
- 🚫 Graceful error handling for invalid city names
- 🔒 Secure backend via Lambda (API key not exposed in frontend)

---

## ☁️ Architecture

| Component    | Service Used         |
|--------------|----------------------|
| Frontend     | AWS S3 (static website hosting) |
| Backend API  | AWS Lambda (Node.js) |
| API Gateway  | AWS API Gateway (REST) |
| Weather Data | OpenWeatherMap API   |

---

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- AWS Lambda
- AWS API Gateway
- Amazon S3
- OpenWeatherMap API

---

## 🚀 Getting Started Locally

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/AKULAVENKATAPRAVEEN/weather-predicting-website.git
