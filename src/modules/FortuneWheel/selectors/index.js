import { createSelector } from 'reselect'
import { moduleName } from 'modules/FortuneWheel'

export const selectSettings = createSelector(
  (state) => state[moduleName].settings,
  (data) => data,
)

export const selectCurrentSelectedValue = createSelector(
  (state) => state[moduleName].currentDetail,
  (data) => data,
)
