import { combineReducers, createStore } from 'redux'

const getAllModules = () => {
  const allModules = require.context('modules', true, /index.js$/)
  const reducers = {}
  allModules.keys().forEach((filename) => {
    const ctx = allModules(filename)
    if (ctx && ctx.moduleName) {
      const key = ctx.moduleName
      reducers[key] = ctx.reducers
    }
  })
  return { reducers }
}

const data = getAllModules()
const allReducers = combineReducers({
  ...data.reducers,
})

const store = createStore(
  allReducers,
)

export default store
