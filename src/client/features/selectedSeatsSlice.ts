import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedSeatsState {
  selectedSeats: number[];
}

const selectedSeatsSlice = createSlice({
  name: 'selectedSeats',
  initialState: [] as SelectedSeatsState['selectedSeats'],
  reducers: {
    selectSeat: (state, action: PayloadAction<number>) => {
      state.push(action.payload);
    },
    deselectSeat: (state, action: PayloadAction<number>) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export const { selectSeat, deselectSeat } = selectedSeatsSlice.actions;

export default selectedSeatsSlice;
