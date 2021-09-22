import React from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components
import { HeroImage } from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//images
import NoImage from "../images/no_image.jpg";
import { useHomeFetch } from "../hooks/useHomeFetch";

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadMore,
  } = useHomeFetch();

  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <>
      {!searchTerm && state?.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={`${state.results[0].original_title}`}
          text={`${state.results[0].overview}`}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      {state?.results[0] && (
        <Grid header={searchTerm ? "Related Movies" : "Popular Movies"}>
          {state?.results.map((movie) => (
            <Thumb
              key={movie.id}
              movieId={movie.id}
              clickable
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
            ></Thumb>
          ))}
        </Grid>
      )}
      {loading && <Spinner />}
      {state?.page < state?.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadMore(true)}></Button>
      )}
    </>
  );
};

export default Home;
