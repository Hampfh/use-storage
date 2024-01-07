import { RootState } from "./store"
import { createSelector as cs } from "@reduxjs/toolkit"

export const selectPersistedField = cs(
	[(state: RootState) => state, (_, field: string) => field],
	(state, field) => state.persisted[field]
)