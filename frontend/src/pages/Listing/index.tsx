import axios from "axios"
import MovieCard from "components/movieCard"
import Pagination from "components/pagination"
import { useEffect, useState } from "react"
import { BASE_URL } from "utils/requests"
import { MoviePage } from "types/movie"
function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    useEffect(() => {

        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
            .then(obj => {
                const data = obj.data as MoviePage;
                /*  console.log(data); */
                setPageNumber(data.number)

                setPage(data)
            });

    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }


    return (
        <>
            <div className="container">

                <div className="row">

                    <Pagination page={page} onChange={handlePageChange}></Pagination>

                    {page.content.map(movie =>
                    (
                        <div key={movie.id}className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie}></MovieCard>
                        </div>
                    )
                    )}


                </div>

            </div>
        </>
    )
}

export default Listing