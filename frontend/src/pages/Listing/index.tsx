import axios from "axios"
import MovieCard from "components/movieCard"
import Pagination from "components/pagination"
import { useEffect, useState } from "react"
import { BASE_URL } from "utils/requests"
import { MoviePage } from "types/movie"
function Listing() {
    
    const [pageNumber, setPageNumber] = useState(0);
    
    useEffect(() => {

        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(obj => {
            const data = obj.data as MoviePage;
            console.log(data);
            setPageNumber(data.number)
        });

    }, []);




    return (
        <>  
        <div className="container">

            <div className="row">
            <Pagination></Pagination>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
            </div>

        </div>
        </>
    )
}

export default Listing