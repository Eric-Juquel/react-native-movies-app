import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '../../screens/Home';
import {
  getActionMovies,
  getFamilyMovies,
  getMovieDetails,
  getPopularMovies,
  getUpcomingMovies,
  searchMovieTv,
} from '../services/moviesServices';

export interface MoviesState {
  upcomingMovies: Movie[];
  popularMovies: Movie[];
  familyMovies: Movie[];
  actionMovies: Movie[];
  filteredMovies: Movie[];
  movieDetails: Movie | null;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  upcomingMovies: [],
  popularMovies: [],
  familyMovies: [],
  actionMovies: [],
  filteredMovies: [],
  movieDetails: null,
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Get Upcoming Movies
    builder.addCase(getUpcomingMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getUpcomingMovies.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.upcomingMovies = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(getUpcomingMovies.rejected, state => {
      state.loading = false;
      state.error = 'Error fetching data.';
    });

    // Get Popular Movies
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

    // Get Action Movies
    builder.addCase(getActionMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getActionMovies.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.actionMovies = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(getActionMovies.rejected, state => {
      state.loading = false;
      state.error = 'Error fetching data.';
    });

    // Get Family Movies
    builder.addCase(getFamilyMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getFamilyMovies.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.familyMovies = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(getFamilyMovies.rejected, state => {
      state.loading = false;
      state.error = 'Error fetching data.';
    });

    // Get Movie Details
    builder.addCase(getMovieDetails.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getMovieDetails.fulfilled,
      (state, action: PayloadAction<Movie>) => {
        state.movieDetails = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(getMovieDetails.rejected, state => {
      state.loading = false;
      state.error = 'Error fetching data.';
    });

    // Search for Movie or Tv by Keyword
    builder.addCase(searchMovieTv.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      searchMovieTv.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.filteredMovies = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(searchMovieTv.rejected, state => {
      state.loading = false;
      state.error = 'Error fetching data.';
    });
  },
});

export default moviesSlice.reducer;
