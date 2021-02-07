import { ADD_NOTE, DELETE_NOTE } from './actionTypes'

export const addNote = (content) => ({
	type: ADD_NOTE,
	payload: {
		content
	}
})

export const deleteNote = (id) => ({
	type: DELETE_NOTE,
	id
})
