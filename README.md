
# 🌤️ Weather Dashboard

A modern and responsive weather dashboard built with React.js and Tailwind CSS. Users can search for any city and get real-time weather information using the OpenWeatherMap API.

---

## 🚀 Tech Stack

- **Frontend Framework:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **API Provider:** [OpenWeatherMap](https://openweathermap.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Font:** [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

---

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your API key from OpenWeatherMap**
   - Sign up at: [https://openweathermap.org/api](https://openweathermap.org/api)
   - Copy your API key

4. **Create `.env` file in root**
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

5. **Update your API usage in `App.jsx`**
   ```js
   const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
   ```

6. **Run the project**
   ```bash
   npm run dev
   ```

7. **Deploy**
   - Deploy on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) with the `.env` variable added in settings.

---

## 🔌 API Integration Details

- **API Used:** OpenWeatherMap - Current Weather API  
  Endpoint:  
  ```
  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
  ```

- **Parameters:**
  - `q`: City name
  - `appid`: Your API key
  - `units`: `metric` for Celsius

- **Response Includes:**
  - Temperature
  - Humidity
  - Weather description & icon
  - Wind speed

- **Rate Limits:**
  - Free Tier: **60 calls/minute**
  - Upgrade options available at: [Pricing](https://openweathermap.org/price)

---

## 📸 Preview

![screenshot](./Weather_app.png) <!-- Add screenshot if available -->

---

## 🧠 Features

- Search for real-time weather by city
- Displays temperature, humidity, wind, condition, and icon
- Mobile-first responsive UI
- Smooth styling with Tailwind & animations
- Error and loading handling

---

## ✅ To Do / Future Enhancements

- [ ] Recent search history
- [ ] 5-day forecast using `/forecast`
- [ ] Dark/light theme toggle
- [ ] Deploy and add live link here

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
