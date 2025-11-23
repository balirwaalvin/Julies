import { AppRegistry, Platform } from 'react-native';
import App from './App';

console.log("Index.js: Registering component");

AppRegistry.registerComponent('main', () => App);

import MobileFrame from './components/MobileFrame';

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') ?? document.getElementById('main');
  console.log("Index.js: Mounting to root tag:", rootTag);
  if (rootTag) {
    // FIX: Ensure root tag has height and flex layout
    rootTag.style.display = 'flex';
    rootTag.style.flexDirection = 'column';
    rootTag.style.flex = '1';
    rootTag.style.minHeight = '100vh';
    
    // Wrap the App component with MobileFrame
    const FramedApp = () => (
      <MobileFrame>
        <App />
      </MobileFrame>
    );

    AppRegistry.registerComponent('main', () => FramedApp);
    AppRegistry.runApplication('main', { rootTag });
  } else {
    console.error("Index.js: Root tag not found!");
  }
}
