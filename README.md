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


##🛠️ Tech Stack

Frontend:

    HTML/CSS/JavaScript (Vanilla JS)
    Hosted on AWS S3 (Static Website)

Backend:

    AWS Lambda (Serverless compute)
    API Gateway (Secure HTTP endpoints)
    OpenWeatherMap API (Weather data)


## ⚙️ How It Works

1️⃣ User Input
The user enters a city name into the input field on the website.

2️⃣ API Gateway Request
The frontend sends a request to your AWS API Gateway endpoint with the city name.

3️⃣ Lambda Execution
API Gateway triggers an AWS Lambda function that:

    Reads the city name

    Uses a secure environment variable to access the OpenWeatherMap API

    Fetches real-time weather data

    Returns it as clean JSON

4️⃣ Weather Data Rendered
The frontend dynamically updates the UI using the returned data:

    🌡️ Temperature

    ☁️ Weather condition

    💧 Humidity

    🌬️ Wind speed

5️⃣ Dynamic Feedback
User interface is updated instantly with weather info — and handles errors (e.g. invalid city) gracefully!


## 🚀 Getting Started Locally

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/AKULAVENKATAPRAVEEN/weather-predicting-website.git
