
const _state = {}
export const state = {}

export function newState(name, resOfHook){
  _state[name] = resOfHook
  state[name] = _state[name][0]
}

export function setState(name, value){
  _state[name][1](value)
  state[name] = _state[name][0]
}

export default {
  state, newState, setState
}
