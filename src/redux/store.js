import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStore } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import rootReducer from './reducers'

const persistConfig = {
	key: 'allNote',
	storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)
