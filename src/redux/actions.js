import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from './actionTypes'

export const addNote = (payload) => ({
	type: ADD_NOTE,
	payload
})

export const deleteNote = (id) => ({
	type: DELETE_NOTE,
	id
})

export const editNote = (title, payload) => ({
	type: EDIT_NOTE,
	title,
	payload
})
