import 'react-native-gesture-handler'
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/redux/store'
enableScreens()

const MyApp = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
)

AppRegistry.registerComponent(appName, () => MyApp)
