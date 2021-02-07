import { ADD_NOTE, DELETE_NOTE, DETAIL_NOTE, EDIT_NOTE } from './actionTypes'

export const addNote = (payload) => ({
	type: ADD_NOTE,
	payload
})

export const detailNote = (id) => ({
	type: DETAIL_NOTE,
	id
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
