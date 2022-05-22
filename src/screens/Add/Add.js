import React from 'react'
import { View, Text, StatusBar, Pressable, StyleSheet, TextInput, BackHandler } from 'react-native'
import Left from '../../assets/icons/Left'
import * as Animatable from 'react-native-animatable'
import { DELAY, DURATION } from '../../constant/animationTime'
import { SharedElement } from 'react-navigation-shared-element'
import { useFocusEffect } from '@react-navigation/native'
import { connect } from 'react-redux'
import { addNote } from '../../redux/actions'

const Add = ({ navigation, addNote }) => {
	const [ heightTitle, setHeightTitle ] = React.useState(69)
	const [ heightContent, setHeightContent ] = React.useState(69)
	const [ title, setTitle ] = React.useState('')
	const [ message, setMessage ] = React.useState('')
	const leftRef = React.useRef()
	const titleScreenRef = React.useRef()
	const contentScreenRef = React.useRef()
	const fabRef = React.useRef()
	let id = new Date()

	const backHandlePress = () => {
		Promise.all([
			leftRef.current.fadeOutLeft(250),
			titleScreenRef.current.fadeOut(250),
			contentScreenRef.current.fadeOut(250),
			fabRef.current.fadeOutRight(250)
		]).then(() => navigation.goBack())
		return true
	}

	const payload = {
		id: id.toString(),
		title,
		message
	}

	const submitHandlePress = () => {
		if (title && message) {
			Promise.all([ addNote(payload) ]).then(() => navigation.goBack())
			return true
		}
	}

	useFocusEffect(
		React.useCallback(() => {
			BackHandler.addEventListener('hardwareBackPress', backHandlePress)

			return () => BackHandler.removeEventListener('hardwareBackPress', backHandlePress)
		}, [])
	)

	return (
		<React.Fragment>
			<StatusBar backgroundColor='#F9F9F9' barStyle='dark-content' animated />
			<Pressable
				style={{
					marginHorizontal: 24,
					marginVertical: 6,
					flexDirection: 'row',
					alignItems: 'center'
				}}
				hitSlop={{ left: 16, right: 16, top: 16, bottom: 16 }}
				onPress={() => backHandlePress()}>
				<Animatable.View ref={leftRef} animation='fadeInLeft' duration={DURATION} delay={DELAY}>
					<Left />
				</Animatable.View>
				<Animatable.Text
					ref={titleScreenRef}
					animation='fadeIn'
					duration={DURATION}
					delay={DELAY}
					style={{
						fontFamily: 'Poppins-SemiBold',
						color: '#0F1123',
						fontSize: 36,
						includeFontPadding: false,
						marginLeft: 32
					}}>
					Add Note
				</Animatable.Text>
			</Pressable>
			<View style={{ flex: 1 }}>
				<SharedElement id={`item.fab.note`} style={StyleSheet.absoluteFillObject}>
					<View
						style={[
							StyleSheet.absoluteFillObject,
							{
								backgroundColor: '#FFA45B',
								borderTopLeftRadius: 18,
								borderTopRightRadius: 18
							}
						]}
					/>
				</SharedElement>
				<Animatable.View ref={contentScreenRef} animation='fadeIn' duration={DURATION} delay={DELAY}>
					<View style={{ marginHorizontal: 24, marginTop: 16 }}>
						<TextInput
							style={{
								height: Math.max(35, heightTitle),
								fontFamily: 'Poppins-Medium',
								color: '#0F1123',
								fontSize: 34
							}}
							onChangeText={(text) => setTitle(text)}
							value={title}
							placeholder='Title'
							underlineColorAndroid='transparent'
							textAlign='left'
							multiline
							onContentSizeChange={(event) => {
								setHeightTitle(event.nativeEvent.contentSize.height)
							}}
						/>
					</View>
					<View style={{ marginHorizontal: 24 }}>
						<TextInput
							style={{
								height: Math.max(35, heightContent),
								fontFamily: 'Poppins-Regular',
								color: '#434343',
								fontSize: 14,
								alignItems: 'flex-start'
							}}
							onChangeText={(text) => setMessage(text)}
							value={message}
							underlineColorAndroid='transparent'
							textAlign='left'
							placeholder='Note'
							multiline
							onContentSizeChange={(event) => {
								setHeightContent(event.nativeEvent.contentSize.height)
							}}
						/>
					</View>
				</Animatable.View>
			</View>
			<FAB ref={fabRef} onPress={submitHandlePress} />
		</React.Fragment>
	)
}

export default connect(null, { addNote })(Add)

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
				<View
					style={[
						StyleSheet.absoluteFillObject,
						{
							backgroundColor: '#FFDA77',
							borderRadius: 54 / 2
						}
					]}
				/>
				<View style={{ alignItems: 'flex-start' }}>
					<Text style={{ fontFamily: 'Poppins-Medium', color: '#0F1123', fontSize: 18 }}>Save</Text>
				</View>
			</Pressable>
		</Animatable.View>
	)
})
