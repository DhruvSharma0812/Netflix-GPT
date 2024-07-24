
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector (store => store.movies?.tailerVideos)
    useMovieTrailer (movieId);

    return ( 
        <div className='top-0 left-0 w-screen h-screen aspect-video'>
            <iframe 
                className='top-0 left-0 w-full h-full aspect-video border-none'
                src= {"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&&controls=0&modestbranding=1&playsinline=1"}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                frameBorder= "0" 
                referrerpolicy="strict-origin-when-cross-origin" 
            >
            </iframe>
        </div>
    )
}

export default VideoBackground
