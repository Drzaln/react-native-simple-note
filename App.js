import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import Detail from './src/screens/Detail/Detail'
import Home from './src/screens/Home/Home'

const App = () => {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	)
}

export default App

const Stack = createSharedElementStackNavigator()
const MyStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				// header: (props) => {
				// 	return <Header {...props} />
				// },
				gestureEnabled: false,
				transitionSpec: {
					open: { animation: 'timing', config: { duration: 250 } },
					close: { animation: 'timing', config: { duration: 250 } }
				},
				cardStyleInterpolator: ({ current: { progress } }) => {
					return {
						cardStyle: {
							opacity: progress
						}
					}
				},
				cardStyle: { backgroundColor: '#F9F9F9' }
			}}
			headerMode='none'>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='Detail' component={Detail} />
		</Stack.Navigator>
	)
}
