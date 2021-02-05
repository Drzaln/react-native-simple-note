import React from 'react'
import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import Left from '../../assets/icons/Left'
import * as Animatable from 'react-native-animatable'
import { DELAY, DURATION } from '../../constant/animationTime'

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
				<View style={{ alignItems: 'flex-start', marginHorizontal: 24, marginTop: 16 }}>
					<SharedElement id={`item.title.note`}>
						<Text style={{ fontFamily: 'Poppins-Medium', color: '#0F1123', fontSize: 34 }}>Title</Text>
					</SharedElement>
				</View>
				<View style={{ alignItems: 'flex-start', marginHorizontal: 24 }}>
					<SharedElement id={`item.content.note`}>
						<Text style={{ fontFamily: 'Poppins-Regular', color: '#434343', fontSize: 14 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex. Excepteur sint occaecat cupidatat non proident, sunt in culpa
							qui officia deserunt mollit anim id est laborum.
						</Text>
					</SharedElement>
				</View>
			</View>
			<FAB onPress={() => {}} />
		</React.Fragment>
	)
}

export default Edit

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
