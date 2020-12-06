import { createSelector } from 'reselect'
import { moduleName } from 'modules/InputTexts'

export const selectData = createSelector(
  (state) => state[moduleName],
  (data) => data,
)
