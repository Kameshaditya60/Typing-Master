# Online Typing Test

A clean, modern typing test application built with Node.js, Express, and vanilla JavaScript. Test your typing speed and accuracy with real-time feedback and detailed statistics.

## 🚀 Features

- **Real-time typing feedback** - Character-by-character visual feedback
- **Multiple time options** - 30 seconds, 1 minute, and 2 minutes tests
- **Accurate WPM calculation** - Words Per Minute based on standard 5-character word metric
- **Precision accuracy tracking** - Real-time accuracy percentage
- **Auto-scrolling text** - Text automatically follows your typing position
- **Professional UI** - Clean, responsive design with smooth animations
- **Dynamic content** - Random paragraphs from external API
- **Comprehensive results** - Detailed statistics after each test
- **Instant restart** - Quick restart functionality for continuous practice

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Template Engine**: EJS
- **Styling**: Custom CSS with gradients and animations
- **API Integration**: External paragraph API for dynamic content

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kameshaditya60/Typing-Master.git
   cd Typing-Master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🎮 How to Use

1. **Select Test Duration**: Choose between 30s, 1min, or 2min
2. **Start Typing**: Click on the input area and start typing the displayed text
3. **Real-time Feedback**: 
   - Green highlighting for correct characters
   - Red highlighting for incorrect characters
   - Blue cursor showing current position
4. **View Results**: See your WPM, accuracy, and time when the test completes
5. **Restart**: Click the restart button to take another test

## 📊 Statistics Explained

- **WPM (Words Per Minute)**: Calculated using the standard formula where 5 characters = 1 word
- **Accuracy**: Percentage of correctly typed characters
- **Time**: Duration of the typing test

## 🗂️ Project Structure

```
typing-test/
├── app.js                    # Express server configuration
├── package.json              # Project dependencies and scripts
├── .env                      # Environment variables (not in repo)
├── .gitignore                # Git ignore rules
├── README.md                 # Project documentation
├── views/
│   └── index.ejs             # Main HTML template
├── public/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   └── js/
│       └── script.js         # Frontend JavaScript logic
```

## 🚀 Deployment

### Heroku Deployment

1. **Install Heroku CLI**
2. **Login to Heroku**
   ```bash
   heroku login
   ```
3. **Create Heroku app**
   ```bash
   heroku create your-typing-test-app
   ```
4. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set PARAGRAPH_API_KEY=your_api_key
   ```
5. **Deploy**
   ```bash
   git push heroku main
   ```

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```
2. **Deploy**
   ```bash
   vercel
   ```

## 🎨 Customization

### Styling Customization
- Edit `public/css/style.css` for visual changes
- Modify color scheme by updating CSS custom properties
- Adjust animations and transitions

### Feature Extensions
- Add sound effects for typing feedback
- Implement user accounts and statistics history
- Create multiplayer typing races
- Add different typing modes (code, numbers, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the free paragraph API providers "https://www.themealdb.com"
- Inspired by popular typing test websites
- Built as a learning project for web development

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact me at kameshkumaraditya@gmail.com

---

**Happy Typing! 🎯**
