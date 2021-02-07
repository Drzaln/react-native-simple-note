import { ADD_NOTE, DELETE_NOTE, DETAIL_NOTE, EDIT_NOTE } from '../actionTypes'

const initialState = {
	allNotes: [],
	detailNotes: {}
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_NOTE: {
			return {
				allNotes: [ ...state.allNotes, action.payload ].sort((a, b) => new Date(b.id) - new Date(a.id))
			}
		}
		case DETAIL_NOTE: {
			let detail = state.allNotes.filter((note) => note.id === action.id)
			return {
				...state,
				detailNotes: detail
			}
		}
		case DELETE_NOTE: {
			return {
				...state,
				allNotes: state.allNotes.filter((note) => note.id !== action.id)
			}
		}
		case EDIT_NOTE:
			return {
				...state,
				allNotes: state.allNotes.map((note) => {
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
			}
		default:
			return state
	}
}
