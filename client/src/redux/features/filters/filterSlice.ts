import { createSlice } from "@reduxjs/toolkit";

interface JobType {
  [key: string]: boolean;
}

interface StateType {
  jobType: JobType;
  experience: string;
  salary: null | number;
}

const initialState: StateType = {
  jobType: {
    partTime: false,
    fullTime: false,
    remote: false,
    freelance: false,
    contract: false,
  },
  experience: "",
  salary: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setJobType: (state, action) => {
      const { value, checked } = action.payload;
      state.jobType = { ...state.jobType, [value]: checked };
    },
    setExperience: (state, action: { payload: string }) => {
      state.experience = action.payload;
    },
    setSalary: (state, action) => {
      state.salary = action.payload;
    },
    clearFilters: (state) => {
      state.jobType = initialState.jobType;
      state.experience = initialState.experience;
      state.salary = initialState.salary;
    },
  },
});

export const { setJobType, setExperience, setSalary, clearFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
