import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
    const { movieId } = useParams("movidId")
    const [movie, setMovie] = useState({})
    console.log(movieId)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`/movie/${movieId}`)
            console.log(response)
            setMovie(response.data)
        }
        fetchData()
    }, [movieId])

    if (!movie) return <div>...loading</div>
    else {
        return (
            <section>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt="poster" />
            </section>
        )
    }
}

export default DetailPage;
