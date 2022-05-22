import React from 'react'
import { View, Text, StatusBar, Pressable, StyleSheet, BackHandler } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import Left from '../../assets/icons/Left'
import * as Animatable from 'react-native-animatable'
import { useFocusEffect } from '@react-navigation/native'
import { DELAY, DURATION } from '../../constant/animationTime'
import { detailNote } from '../../redux/actions'
import { connect } from 'react-redux'

const Detail = ({ route, navigation, detailNote, noteDetail }) => {
	const leftRef = React.useRef()
	const contentRef = React.useRef()
	const fabRef = React.useRef()
	const { title, message, id } = route.params

	const backHandlePress = () => {
		Promise.all([
			leftRef.current.fadeOutLeft(250),
			contentRef.current.fadeOut(250),
			fabRef.current.fadeOutRight(250)
		]).then(() => navigation.navigate('Home', { title }))
		return true
	}

	useFocusEffect(
		React.useCallback(() => {
			detailNote(id)
			BackHandler.addEventListener('hardwareBackPress', backHandlePress)

			return () => BackHandler.removeEventListener('hardwareBackPress', backHandlePress)
		}, [])
	)

	return (
		<React.Fragment>
			<StatusBar backgroundColor='#FFDA77' barStyle='dark-content' animated />
			<SharedElement id={`item.${title}.view`} style={StyleSheet.absoluteFillObject}>
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
				<Animatable.View ref={leftRef} animation='fadeInLeft' duration={DURATION} delay={DELAY}>
					<SharedElement id={`item.left.note`}>
						<Left />
					</SharedElement>
				</Animatable.View>
			</Pressable>
			<View style={{ alignItems: 'flex-start', marginHorizontal: 24 }}>
				<SharedElement id={`item.${title}.title`}>
					<Text style={{ fontFamily: 'Poppins-Medium', color: '#0F1123', fontSize: 34 }}>
						{noteDetail ? noteDetail[0].title : ''}
					</Text>
				</SharedElement>
			</View>
			<Animatable.View
				ref={contentRef}
				animation='fadeIn'
				duration={DURATION}
				delay={DELAY}
				style={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginHorizontal: 24 }}>
				<SharedElement id={`item.${title}.content`}>
					<Text style={{ fontFamily: 'Poppins-Regular', color: '#434343', fontSize: 14 }}>
						{noteDetail ? noteDetail[0].message : ''}
					</Text>
				</SharedElement>
			</Animatable.View>
			<FAB ref={fabRef} navigation={navigation} onPress={() => navigation.navigate('Edit', { title, message })} />
		</React.Fragment>
	)
}

const mapStateToProps = (state) => {
	return {
		noteDetail: state.note.detailNotes
	}
}

export default connect(mapStateToProps, { detailNote })(Detail)

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
