import React from 'react'
import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import Left from '../../assets/icons/Left'
import * as Animatable from 'react-native-animatable'

const DURATION = 500
const DELAY = 600

const Edit = ({ navigation }) => {
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
				<SharedElement id={`item.view.note`} style={StyleSheet.absoluteFillObject}>
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
				<View style={{ alignItems: 'flex-start', marginHorizontal: 24, marginVertical: 16 }}>
					<SharedElement id={`item.title.note`}>
						<Text style={{ fontFamily: 'Poppins-Medium', color: '#0F1123', fontSize: 34 }}>Title</Text>
					</SharedElement>
				</View>
			</View>
		</React.Fragment>
	)
}

export default Edit
