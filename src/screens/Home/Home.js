import React from 'react'
import { View, Text, StatusBar, Pressable, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SharedElement } from 'react-navigation-shared-element'
import Plus from '../../assets/icons/Plus'

const Home = ({ navigation }) => {
	return (
		<React.Fragment>
			<StatusBar backgroundColor='#F9F9F9' barStyle='dark-content' animated />
			<Header />
			<ScrollView
				overScrollMode='never'
				contentContainerStyle={{ paddingVertical: 8 }}
				showsVerticalScrollIndicator={false}>
				<NoteItem onPress={() => navigation.navigate('Detail')} />
			</ScrollView>
			<FAB />
		</React.Fragment>
	)
}

export default Home

const Header = () => {
	return (
		<View style={{ marginHorizontal: 24, marginTop: 16 }}>
			<Text style={{ fontFamily: 'Poppins-SemiBold', color: '#0F1123', fontSize: 36 }}>Notes</Text>
		</View>
	)
}

const NoteItem = ({ onPress }) => {
	return (
		<Pressable onPress={onPress}>
			<View
				style={{
					marginHorizontal: 24,
					marginVertical: 8,
					borderRadius: 18,
					padding: 12,
					justifyContent: 'center',
					height: 90
				}}>
				<SharedElement id={`item.view.note`} style={StyleSheet.absoluteFillObject}>
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
					<SharedElement id={`item.title.note`}>
						<Text style={{ fontFamily: 'Poppins-Medium', color: '#0F1123', fontSize: 18 }}>Title</Text>
					</SharedElement>
				</View>
				<View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
					<Text style={{ fontFamily: 'Poppins-Regular', color: '#434343', fontSize: 14 }} numberOfLines={2}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum.
					</Text>
				</View>
			</View>
		</Pressable>
	)
}

const FAB = () => {
	return (
		<View
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
				<View
					style={[
						StyleSheet.absoluteFillObject,
						{
							backgroundColor: '#FFA45B',
							borderRadius: 54 / 2
						}
					]}
				/>
			<Plus />
		</View>
	)
}
