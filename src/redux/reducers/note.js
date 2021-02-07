import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actionTypes'

export default function (state = [], action) {
	switch (action.type) {
		case ADD_NOTE: {
			return state.concat([ action.payload ]).sort((a, b) => new Date(b.id) - new Date(a.id))
		}
		case DELETE_NOTE: {
			return state.filter((note) => note.id !== action.id)
		}
		case EDIT_NOTE:
			return state.map((note) => {
				if (note.title === action.title) {
					return {
						...note,
						title: action.payload.newTitle,
						message: action.payload.newMessage
					}
				} else {
					return note
				}
			})
		default:
			return state
	}
}
