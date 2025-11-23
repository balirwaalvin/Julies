# Julies 🌸

A beautiful, modern React Native mobile application with Firebase authentication. Julies provides a seamless authentication experience with an elegant UI design.

## ✨ Features

- **User Authentication** - Secure Firebase-based authentication system
- **Login & Sign Up** - Smooth onboarding experience with animated UI
- **User Dashboard** - Personalized dashboard showing account information
- **Account Management** - Full control over account settings and deletion
- **Cross-Platform** - Runs on iOS, Android, and Web
- **Modern UI/UX** - Beautiful design with smooth animations and transitions
- **Safe Area Support** - Optimized for modern devices with notches
- **Error Handling** - Comprehensive error boundaries and user feedback

## 🛠️ Tech Stack

- **[React Native](https://reactnative.dev/)** - Cross-platform mobile framework
- **[Expo](https://expo.dev/)** - Development platform for React Native
- **[Firebase](https://firebase.google.com/)** - Backend authentication and database
- **[React Navigation](https://reactnavigation.org/)** - Navigation library for React Native
- **[React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)** - Handle safe area insets

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) - Install globally with `npm install -g expo-cli`
- For iOS development: [Xcode](https://developer.apple.com/xcode/)
- For Android development: [Android Studio](https://developer.android.com/studio)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/balirwaalvin/Julies.git
   cd Julies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   
   The project uses Firebase for authentication. The configuration is already set up in `firebaseConfig.js`, but for production use, you should:
   
   - Create your own [Firebase project](https://console.firebase.google.com/)
   - Enable Email/Password authentication in Firebase Console
   - Replace the configuration in `firebaseConfig.js` with your own credentials

   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     // ... other config
   };
   ```

## 📱 Running the App

### Start the Development Server

```bash
npm start
```

This will start the Expo development server. You'll see a QR code in the terminal.

### Run on iOS

```bash
npm run ios
```

Requirements: macOS with Xcode installed

### Run on Android

```bash
npm run android
```

Requirements: Android Studio and Android SDK installed

### Run on Web

```bash
npm run web
```

Opens the app in your default web browser.

### Using Expo Go App

1. Install [Expo Go](https://expo.dev/client) on your mobile device
2. Scan the QR code from the terminal with:
   - **iOS**: Camera app
   - **Android**: Expo Go app

## 📁 Project Structure

```
Julies/
├── assets/              # Images, icons, and other static assets
├── components/          # Reusable React components
│   └── MobileFrame.js   # Mobile device frame wrapper
├── constants/           # App constants (colors, themes, etc.)
├── context/             # React Context providers
│   └── AuthContext.js   # Authentication context and state management
├── screens/             # Application screens
│   ├── LoginScreen.js   # User login screen
│   ├── SignupScreen.js  # User registration screen
│   └── DashboardScreen.js # User dashboard
├── App.js               # Main application component with navigation
├── SimpleApp.js         # Simplified app version
├── index.js             # Entry point
├── firebaseConfig.js    # Firebase configuration
├── app.json             # Expo configuration
├── package.json         # Dependencies and scripts
└── babel.config.js      # Babel configuration
```

## 🎨 Features in Detail

### Authentication System
- Email and password-based authentication
- Secure user session management
- Auto-login for returning users
- Account deletion capability

### User Interface
- Smooth animations and transitions
- Modern card-based design
- Custom color scheme with brand colors
- Responsive layouts for all screen sizes
- Loading states and error handling

### Navigation
- Stack-based navigation
- Conditional rendering based on auth state
- Seamless screen transitions

## 🔒 Security

- Firebase Authentication handles password encryption
- Secure credential storage
- Protected routes requiring authentication
- Error boundaries to catch and handle runtime errors

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Balirwa Alvin**

- GitHub: [@balirwaalvin](https://github.com/balirwaalvin)

## 🙏 Acknowledgments

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

**Happy Coding! 🚀**
