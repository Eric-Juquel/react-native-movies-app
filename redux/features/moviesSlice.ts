import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '../../screens/Home';
import {getPopularMovies} from '../services/moviesServices';

export interface MoviesState {
  upcomingMovies: [];
  popularMovies: Movie[];
  familyMovies: Movie[];
  actionMovies: Movie[];
  movieDetails: Movie | null;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  upcomingMovies: [],
  popularMovies: [],
  familyMovies: [],
  actionMovies: [],
  movieDetails: null,
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPopularMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getPopularMovies.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.popularMovies = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(getPopularMovies.rejected, state => {
      state.loading = false;
      state.error = 'Error fetching data.';
    });
  },
});

export default moviesSlice.reducer;
