import { Register, RegisterAction, RegisterState } from './types'

const initialState: RegisterState = {
    RegisterInfo: {} as Register,
    isLoading: false,
    error: ''

}

export default function registerReducer (state = initialState, action : RegisterAction) {
    switch (action.type) {
        default:
            return state
    }
}