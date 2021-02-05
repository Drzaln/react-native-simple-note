import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import Detail from './src/screens/Detail/Detail'
import Edit from './src/screens/Edit/Edit'
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
					open: { animation: 'timing', config: { duration: 500 } },
					close: { animation: 'timing', config: { duration: 500 } }
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
			headerMode='none'
			initialRouteName='Home'>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen
				name='Detail'
				component={Detail}
				sharedElements={(route, otherRoute, showing) => {
					if (otherRoute.name === 'Edit' && showing) {
						return [ `item.left.note`, `item.title.note` ]
					} else {
						return [
							{ id: `item.view.note` },
							{ id: `item.fab` },
							{ id: `item.content.note` },
							{ id: `item.title.note` }
						]
					}
				}}
			/>
			<Stack.Screen
				name='Edit'
				component={Edit}
				sharedElements={(route, otherRoute, showing) => {
					[ { id: `item.view.note` }, { id: `item.title.note` }, { id: `item.left.note` } ]
				}}
			/>
		</Stack.Navigator>
	)
}
