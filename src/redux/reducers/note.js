import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, UPDATE } from '../actionTypes'

export default function (state = [], action) {
	switch (action.type) {
		case ADD_NOTE: {
			return state.concat([ action.payload ])
		}
		case DELETE_NOTE: {
			return state.filter((note) => note.content.id !== action.id)
		}
		case EDIT_NOTE: {
			return state.map((note) => (note.id === action.id ? { ...note, editing: !note.editing } : note))
		}
		case UPDATE:
			return state.map((note) => {
				if (note.id === action.id) {
					return {
						...note,
						title: action.payload.newTitle,
						message: action.payload.newMessage,
						editing: !note.editing
					}
				} else {
					return note
				}
			})
		default:
			return state
	}
}
