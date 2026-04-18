import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  activeState: 'Aborted',
  ebuttonPressed: false,
}

const stateSlice = createSlice({
  name: 'state',
  initialState: defaultState,
  reducers: {
    reset: (state) => {
      const { activeState, ebuttonPressed } = state
      if (activeState === 'Aborted' && !ebuttonPressed) {
        state.activeState = 'Clearing'
      }
      if (activeState === 'Stopped' && !ebuttonPressed) {
        state.activeState = 'Resetting'
      }
    },
    start: (state) => {
      const { activeState, ebuttonPressed } = state
      if (activeState === 'Idle' && !ebuttonPressed) {
        state.activeState = 'Starting'
      }
    },
    stop: (state) => {
      const { activeState } = state
      if (activeState === 'Execute') {
        state.activeState = 'Stopping'
      }
    },
    abort: (state) => {
      const { activeState } = state
      if (activeState !== 'Aborting') {
        state.activeState = 'Aborting'
      }
    },
    transitioningExecute: (state) => {
      const { activeState } = state
      if (activeState === 'Resetting') {
        state.activeState = 'Idle'
      }
      if (activeState === 'Clearing') {
        state.activeState = 'Stopped'
      }
      if (activeState === 'Starting') {
        state.activeState = 'Execute'
      }
      if (activeState === 'Aborting') {
        state.activeState = 'Aborted'
      }
      if (activeState === 'Stopping') {
        state.activeState = 'Stopped'
      }
    },
  },
})

export const { reset, start, stop, abort, transitioningExecute } =
  stateSlice.actions

export default stateSlice.reducer
