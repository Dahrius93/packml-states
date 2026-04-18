import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  activeState: 'aborted',
  ebuttonPressed: false,
  transitioningExecuted: false,
}

const stateSlice = createSlice({
  name: 'state',
  initialState: defaultState,
  reducers: {
    reset: (state, action) => {
      const { activeState, ebuttonPressed } = state

      if (activeState === 'aborted') {
        state.activeState = 'Resetting'
      }
      if (activeState === 'aborted' && !ebuttonPressed) {
        state.activeState = 'Idle'
      }
      if (activeState === 'aborted' && ebuttonPressed) {
        state.activeState = 'aborted'
      } else {
        state.activeState = 'aborted'
      }
    },
    start: (state, action) => {
      const { activeState, ebuttonPressed, transitioningExecuted } = state
      if (activeState === 'idle' && !ebuttonPressed) {
        state.activeState = 'starting'
      }
      if (activeState === 'starting' && transitioningExecuted) {
        state.activeState = 'execute'
      }
    },
    stop: (state, action) => {
      const { activeState, transitioningExecuted } = state
      if (activeState === 'execute') {
        state.activeState = 'stopping'
      }
      if (activeState === 'stopping' && transitioningExecuted) {
        state.activeState = 'stopped'
      }
    },
    abort: (state, action) => {
      const { activeState, transitioningExecuted } = state
      if (activeState !== 'aborting') {
        state.activeState = 'aborting'
      }
      if (activeState === 'aborting' && transitioningExecuted) {
        state.activeState = 'aborted'
      }
    },
  },
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions

export default stateSlice.reducer
