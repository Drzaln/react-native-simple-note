import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import Add from './src/screens/Add/Add'
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
				gestureEnabled: false,
				transitionSpec: {
					open: { animation: 'timing', config: { duration: 400 } },
					close: { animation: 'timing', config: { duration: 400 } }
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
			<Stack.Screen
				name='Home'
				component={Home}
				sharedElements={(route, otherRoute, showing) => {
					if (otherRoute.name === 'Add' && showing) {
						return [ { id: `item.fab.note`, animation: 'fade' } ]
					}
				}}
			/>
			<Stack.Screen
				name='Detail'
				component={Detail}
				sharedElements={(route, otherRoute, showing) => {
					if (otherRoute.name === 'Edit' && showing) {
						return [
							{ id: `item.title.note` },
							{ id: `item.content.note` },
							{ id: `item.left.note` },
							{ id: `item.fab.note` }
						]
					} else {
						return [ { id: `item.view.note` }, { id: `item.title.note` } ]
					}
				}}
			/>
			<Stack.Screen
				name='Edit'
				component={Edit}
				sharedElements={(route, otherRoute, showing) => {
					return [
						{ id: `item.view.note` },
						{ id: `item.title.note` },
						{ id: `item.content.note` },
						{ id: `item.left.note` },
						{ id: `item.fab.note` }
					]
				}}
			/>
			<Stack.Screen
				name='Add'
				component={Add}
				sharedElements={(route, otherRoute, showing) => {
					return [ { id: `item.fab.note`, animation: 'fade' } ]
				}}
			/>
		</Stack.Navigator>
	)
}
