import React from 'react'
import { View, Text, StatusBar, Pressable, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import { SharedElement } from 'react-navigation-shared-element'
import { connect } from 'react-redux'
import EmptyNote from '../../assets/icons/EmptyNote'
import Plus from '../../assets/icons/Plus'
import AppleSwipeableRow from '../../components/AppleSwipeableRow/AppleSwipeableRow'
import { deleteNote } from '../../redux/actions'

const Home = ({ navigation, notes, deleteNote }) => {
	return (
		<React.Fragment>
			<StatusBar backgroundColor='#F9F9F9' barStyle='dark-content' animated />
			<Header />
			{notes && notes.length ? (
				<ScrollView
					overScrollMode='never'
					contentContainerStyle={{ paddingVertical: 8 }}
					showsVerticalScrollIndicator={false}>
					{notes.map((note) => {
						const { id, title, message } = note
						return (
							<AppleSwipeableRow key={id} onPress={() => deleteNote(id)}>
								<NoteItem
									onPress={() => navigation.navigate('Detail', { title, message, id })}
									note={note}
								/>
							</AppleSwipeableRow>
						)
					})}
				</ScrollView>
			) : (
				<EmptyState />
			)}
			<FAB onPress={() => navigation.navigate('Add')} />
		</React.Fragment>
	)
}

const mapStateToProps = (state) => {
	return {
		notes: state.note.allNotes
	}
}

export default connect(mapStateToProps, { deleteNote })(Home)

const EmptyState = () => {
	const { width } = useWindowDimensions()
	const iconWidth = Math.floor(width) - 220
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View style={{ width: iconWidth, height: iconWidth - 5 }}>
				<EmptyNote />
			</View>
			<Text
				style={{
					fontFamily: 'Poppins-Medium',
					color: '#0F1123',
					fontSize: 24,
					opacity: 0.26,
					marginTop: 32,
					includeFontPadding: false
				}}>
				Empty Note
			</Text>
		</View>
	)
}

const Header = () => {
	return (
		<View style={{ marginHorizontal: 24, marginTop: 16 }}>
			<Text style={{ fontFamily: 'Poppins-SemiBold', color: '#0F1123', fontSize: 36, includeFontPadding: false }}>
				Notes
			</Text>
		</View>
	)
}

const NoteItem = ({ onPress, note }) => {
	const { title, message } = note
	return (
		<Pressable onPress={onPress} rippleColor='transparent'>
			<View
				style={{
					marginHorizontal: 24,
					marginVertical: 8,
					borderRadius: 18,
					padding: 12,
					justifyContent: 'flex-start',
					height: 98
				}}>
				<SharedElement id={`item.${title}.view`} style={StyleSheet.absoluteFillObject}>
					<View
						style={{
							...StyleSheet.absoluteFillObject,
							borderRadius: 18,
							backgroundColor: '#FFDA77',
							elevation: 1
						}}
					/>
				</SharedElement>
				<View style={{ alignItems: 'flex-start' }}>
					<SharedElement id={`item.${title}.title`}>
						<Text
							style={{ fontFamily: 'Poppins-Medium', color: '#0F1123', fontSize: 18 }}
							numberOfLines={1}>
							{title}
						</Text>
					</SharedElement>
				</View>
				<View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 4 }}>
					<Text style={{ fontFamily: 'Poppins-Regular', color: '#434343', fontSize: 14 }} numberOfLines={2}>
						{message}
					</Text>
				</View>
			</View>
		</Pressable>
	)
}

const FAB = ({ onPress }) => {
	return (
		<Pressable
			onPress={onPress}
			style={{
				width: 54,
				height: 54,
				borderRadius: 54 / 2,
				alignItems: 'center',
				justifyContent: 'center',
				position: 'absolute',
				bottom: 50,
				right: 30
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
			<Plus />
		</Pressable>
	)
}
