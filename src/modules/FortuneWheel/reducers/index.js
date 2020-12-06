import { combineReducers } from 'redux'
import settings from 'modules/FortuneWheel/reducers/settings'
import currentDetail from 'modules/FortuneWheel/reducers/currentDetail'

const rootReducers = combineReducers({
  currentDetail,
  settings,
})

export default rootReducers
