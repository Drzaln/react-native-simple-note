import React from 'react'
import { View, Text, StyleSheet, Pressable, StatusBar, TextInput } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import Left from '../../assets/icons/Left'
import * as Animatable from 'react-native-animatable'
import { DELAY, DURATION } from '../../constant/animationTime'
import { editNote } from '../../redux/actions'
import { connect } from 'react-redux'

const Edit = ({ navigation, route, editNote }) => {
	const [ editableTitle, setEditableText ] = React.useState(false)
	const [ editableContent, setEditableContent ] = React.useState(false)
	const [ heightTitle, setHeightTitle ] = React.useState(69)
	const [ heightContent, setHeightContent ] = React.useState(69)
	const [ newTitle, setNewTitle ] = React.useState('')
	const [ newMessage, setNewMessage ] = React.useState('')
	const { title, message } = route.params

	React.useEffect(() => {
		setNewTitle(title)
		setNewMessage(message)
	}, [])

	const payload = {
		newTitle,
		newMessage
	}

	const saveHandlePress = () => {
		Promise.all([ setEditableText(false), setEditableContent(false), editNote(title, payload) ]).then(() =>
			navigation.navigate('Detail', { title: newTitle })
		)
		return true
	}

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
				onPress={() => navigation.goBack()}>
				<SharedElement id={`item.left.note`}>
					<Left />
				</SharedElement>
				<Animatable.Text
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
					Edit Note
				</Animatable.Text>
			</Pressable>
			<View style={{ flex: 1 }}>
				<SharedElement id={`item.${title}.view`} style={StyleSheet.absoluteFillObject}>
					<View
						style={[
							StyleSheet.absoluteFillObject,
							{
								backgroundColor: '#FFDA77',
								borderTopLeftRadius: 18,
								borderTopRightRadius: 18
							}
						]}
					/>
				</SharedElement>
				<View style={{ alignItems: 'flex-start', marginHorizontal: 24, marginTop: 16 }}>
					{editableTitle && newTitle ? (
						<TextInput
							style={{
								height: Math.max(35, heightTitle),
								fontFamily: 'Poppins-Medium',
								color: '#0F1123',
								fontSize: 34,
								alignItems: 'flex-start'
							}}
							onChangeText={(text) => setNewTitle(text)}
							value={newTitle}
							underlineColorAndroid='transparent'
							textAlign='left'
							placeholder='Title'
							multiline
							autoFocus
							onContentSizeChange={(event) => {
								setHeightTitle(event.nativeEvent.contentSize.height)
							}}
						/>
					) : (
						<SharedElement id={`item.${title}.title`}>
							<Text
								style={{ fontFamily: 'Poppins-Medium', color: '#0F1123', fontSize: 34 }}
								onPress={() => setEditableText(true)}>
								{newTitle}
							</Text>
						</SharedElement>
					)}
				</View>
				<View style={{ marginHorizontal: 24, alignItems: 'flex-start' }}>
					{editableContent && newMessage ? (
						<TextInput
							style={{
								height: Math.max(35, heightContent),
								fontFamily: 'Poppins-Regular',
								color: '#434343',
								fontSize: 14,
								alignItems: 'flex-start'
							}}
							onChangeText={(text) => setNewMessage(text)}
							value={newMessage}
							underlineColorAndroid='transparent'
							textAlign='left'
							placeholder='Note'
							multiline
							autoFocus
							onContentSizeChange={(event) => {
								setHeightContent(event.nativeEvent.contentSize.height)
							}}
						/>
					) : (
						<SharedElement id={`item.${title}.content`}>
							<Text
								style={{ fontFamily: 'Poppins-Regular', color: '#434343', fontSize: 14 }}
								onPress={() => setEditableContent(true)}>
								{newMessage}
							</Text>
						</SharedElement>
					)}
				</View>
			</View>
			<FAB onPress={() => saveHandlePress()} />
		</React.Fragment>
	)
}

export default connect(null, { editNote })(Edit)

const FAB = ({ onPress }) => {
	return (
		<View
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
					<Text style={{ fontFamily: 'Poppins-Medium', color: '#F9F9F9', fontSize: 18 }}>Save</Text>
				</View>
			</Pressable>
		</View>
	)
}
