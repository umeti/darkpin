
const _state = {}
export const state = {}

export function newState(name, resOfHook) {
  _state[name] = resOfHook
  state[name] = _state[name][0]
}

export function setState(name, value) {
  _state[name][1](value)
  state[name] = value
}

export default {
  state, newState, setState,
  api_salt: process.env.api_salt,
  dev: process.env.NODE_ENV
    == "development" ? true : false,
}
