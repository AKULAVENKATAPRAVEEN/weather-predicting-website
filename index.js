const axios = require('axios');

exports.handler = async (event) => {
    const city = event.queryStringParameters?.city;

    if (!city) {
        return {
            statusCode: 400,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ error: "City parameter is required" }),
        };
    }

    const apiKey = process.env.OPENWEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        return {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ error: "API call failed", details: error.message }),
        };
    }
};
