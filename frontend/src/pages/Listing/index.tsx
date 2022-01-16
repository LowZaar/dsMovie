import axios from "axios"
import MovieCard from "components/movieCard"
import Pagination from "components/pagination"
import { BASE_URL } from "utils/requests"
function Listing() {

    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(obj => {
        console.log(obj.data)
    })

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