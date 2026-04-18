import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  activeState: 'Aborted',
  ebuttonPressed: false,
  blinkReset: true,
  blinkStart: false,
  blinkSC: false,
}

const stateSlice = createSlice({
  name: 'state',
  initialState: defaultState,
  reducers: {
    reset: (state) => {
      const { activeState, ebuttonPressed } = state
      if (activeState === 'Aborted' && !ebuttonPressed) {
        state.activeState = 'Clearing'
        state.blinkSC = true
        state.blinkReset = false
        state.blinkStart = false
      }
      if (activeState === 'Stopped' && !ebuttonPressed) {
        state.activeState = 'Resetting'
        state.blinkSC = true
        state.blinkReset = false
        state.blinkStart = false
      }
    },
    start: (state) => {
      const { activeState, ebuttonPressed } = state
      if (activeState === 'Idle' && !ebuttonPressed) {
        state.activeState = 'Starting'
        state.blinkSC = true
        state.blinkReset = false
        state.blinkStart = false
      }
    },
    stop: (state) => {
      const { activeState } = state
      if (activeState === 'Execute') {
        state.activeState = 'Stopping'
        state.blinkSC = true
        state.blinkReset = false
        state.blinkStart = false
      }
    },
    abort: (state) => {
      const { activeState } = state
      if (activeState !== 'Aborting') {
        state.activeState = 'Aborting'
        state.blinkSC = true
        state.blinkReset = false
        state.blinkStart = false
      }
    },
    hold: (state) => {
      const { activeState } = state
      if (activeState === 'Execute') {
        state.activeState = 'Holding'
      }
      if (activeState === 'Held') {
        state.activeState = 'Un-Holding'
      }
    },
    suspend: (state) => {
      const { activeState } = state
      if (activeState === 'Execute') {
        state.activeState = 'Suspending'
      }
      if (activeState === 'Suspended') {
        state.activeState = 'Un-Suspending'
      }
    },
    transitioningExecute: (state) => {
      const { activeState } = state
      if (activeState === 'Resetting') {
        state.activeState = 'Idle'
        state.blinkSC = false
        state.blinkReset = false
        state.blinkStart = true
      }
      if (activeState === 'Clearing') {
        state.activeState = 'Stopped'
        state.blinkSC = false
        state.blinkReset = true
        state.blinkStart = false
      }
      if (activeState === 'Starting') {
        state.activeState = 'Execute'
        state.blinkSC = false
        state.blinkReset = false
        state.blinkStart = false
      }
      if (activeState === 'Aborting') {
        state.activeState = 'Aborted'
        state.blinkSC = false
        state.blinkReset = true
        state.blinkStart = false
      }
      if (activeState === 'Stopping') {
        state.activeState = 'Stopped'
        state.blinkSC = false
        state.blinkReset = true
        state.blinkStart = false
      }
      if (activeState === 'Holding') {
        state.activeState = 'Held'
      }
      if (activeState === 'Suspending') {
        state.activeState = 'Suspended'
      }
      if (activeState === 'Un-Holding') {
        state.activeState = 'Execute'
      }
      if (activeState === 'Un-Suspending') {
        state.activeState = 'Execute'
      }
    },
  },
})

export const {
  reset,
  start,
  stop,
  abort,
  transitioningExecute,
  hold,
  suspend,
} = stateSlice.actions

export default stateSlice.reducer
