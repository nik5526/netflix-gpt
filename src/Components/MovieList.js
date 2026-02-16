import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="py-2 pl-5 pt-4 ">
      <h1 className=" text-2xl text-white font-bold py-2">{title}</h1>
      <div className="flex overflow-x-scroll py-2">
        <div className="flex gap-[6px] ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
