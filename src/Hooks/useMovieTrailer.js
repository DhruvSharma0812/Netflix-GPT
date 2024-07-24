import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // Fetch Trailer using Moive id and update the store with traielr video
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        // console.log (json);

        const filteredData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filteredData.length ? filteredData[Math.floor(Math.random() * filteredData.length)] : json.results[0];
        // const trailer = filteredData[0];
        console.log(trailer.key)
        dispatch (addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useMovieTrailer