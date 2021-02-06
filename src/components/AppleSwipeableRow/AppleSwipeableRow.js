import React, { Component } from 'react'
import { StyleSheet, View, I18nManager } from 'react-native'

import { RectButton, Swipeable } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import Trash from '../../assets/icons/Trash'

export default class AppleSwipeableRow extends Component {
	renderRightAction = (text, color, x, progress) => {
		const trans = progress.interpolate({
			inputRange: [ 0, 1 ],
			outputRange: [ x, 0 ]
		})
		const pressHandler = () => {
			this.close()
			alert(text)
		}
		return (
			<Animated.View
				style={{
					flex: 1,
					transform: [ { translateX: 0 } ],
					backgroundColor: '#F9F9F9',
					justifyContent: 'center',
					alignItems: 'flex-start'
				}}>
				<RectButton style={[ styles.rightAction, { backgroundColor: '#dd2c00' } ]} onPress={pressHandler}>
					<Trash />
				</RectButton>
			</Animated.View>
		)
	}
	renderRightActions = (progress) => (
		<View style={{ width: 90, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
			{this.renderRightAction('Delete', '#dd2c00', 64, progress)}
		</View>
	)
	updateRef = (ref) => {
		this._swipeableRow = ref
	}
	close = () => {
		this._swipeableRow.close()
	}
	render () {
		const { children } = this.props
		return (
			<Swipeable
				ref={this.updateRef}
				friction={2}
				rightThreshold={40}
				renderRightActions={this.renderRightActions}>
				{children}
			</Swipeable>
		)
	}
}

const styles = StyleSheet.create({
	leftAction: {
		flex: 1,
		backgroundColor: '#497AFC',
		justifyContent: 'center'
	},
	actionText: {
		color: 'white',
		fontSize: 16,
		backgroundColor: 'transparent',
		padding: 10
	},
	rightAction: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
		borderRadius: 100
	}
})
