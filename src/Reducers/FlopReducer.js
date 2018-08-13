import { UPDATE_FLOP } from '../Actions/FlopActions'

export default function flopReducer (state = [], { type, payload }) {
    switch (type) {
        case UPDATE_FLOP:
            return state.concat(payload)
        default:
            return state
    }
}