import React from 'react'
import { View, Text, StatusBar, Pressable, StyleSheet, BackHandler } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import Left from '../../assets/icons/Left'
import * as Animatable from 'react-native-animatable'
import { useFocusEffect } from '@react-navigation/native'
import { DELAY, DURATION } from '../../constant/animationTime'

const Detail = ({ navigation }) => {
	const leftRef = React.useRef()
	const contentRef = React.useRef()
	const fabRef = React.useRef()

	const backHandlePress = () => {
		Promise.all([
			leftRef.current.fadeOut(250),
			contentRef.current.fadeOut(250),
			fabRef.current.fadeOutRight(250)
		]).then(() => navigation.goBack())
		return true
	}

	useFocusEffect(
		React.useCallback(() => {
			BackHandler.addEventListener('hardwareBackPress', backHandlePress)

			return () => BackHandler.removeEventListener('hardwareBackPress', backHandlePress)
		}, [])
	)

	return (
		<React.Fragment>
			<StatusBar backgroundColor='#FFDA77' barStyle='dark-content' animated />
			<SharedElement id={`item.view.note`} style={StyleSheet.absoluteFillObject}>
				<View
					style={[
						StyleSheet.absoluteFillObject,
						{
							backgroundColor: '#FFDA77'
						}
					]}
				/>
			</SharedElement>
			<Pressable
				style={{
					marginHorizontal: 24,
					marginVertical: 16
				}}
				hitSlop={{ left: 16, right: 16, top: 16, bottom: 16 }}
				onPress={() => backHandlePress()}>
				<Animatable.View ref={leftRef} animation='fadeIn' duration={DURATION} delay={DELAY}>
					<SharedElement id={`item.left.note`}>
						<Left />
					</SharedElement>
				</Animatable.View>
			</Pressable>
			<View style={{ alignItems: 'flex-start', marginHorizontal: 24 }}>
				<SharedElement id={`item.title.note`}>
					<Text style={{ fontFamily: 'Poppins-Medium', color: '#0F1123', fontSize: 34 }}>Title</Text>
				</SharedElement>
			</View>
			<Animatable.View
				ref={contentRef}
				animation='fadeIn'
				duration={DURATION}
				delay={DELAY}
				style={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginHorizontal: 24 }}>
				<SharedElement id={`item.content.note`}>
					<Text style={{ fontFamily: 'Poppins-Regular', color: '#434343', fontSize: 14 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum.
					</Text>
				</SharedElement>
			</Animatable.View>
			<FAB ref={fabRef} navigation={navigation} onPress={() => navigation.navigate('Edit')} />
		</React.Fragment>
	)
}

export default Detail

const FAB = React.forwardRef(({ onPress }, ref) => {
	return (
		<Animatable.View
			ref={ref}
			animation='fadeInRight'
			duration={DURATION}
			delay={DELAY}
			style={{
				width: 120,
				height: 54,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 54 / 2,
				position: 'absolute',
				bottom: 50,
				right: 30
			}}>
			<Pressable
				onPress={onPress}
				style={{
					width: 120,
					height: 54,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 54 / 2
				}}>
				<SharedElement id={`item.fab.note`} style={StyleSheet.absoluteFillObject}>
					<View
						style={[
							StyleSheet.absoluteFillObject,
							{
								backgroundColor: '#FFA45B',
								borderRadius: 54 / 2
							}
						]}
					/>
				</SharedElement>
				<View style={{ alignItems: 'flex-start' }}>
					<Text style={{ fontFamily: 'Poppins-Medium', color: '#F9F9F9', fontSize: 18 }}>Edit</Text>
				</View>
			</Pressable>
		</Animatable.View>
	)
})
