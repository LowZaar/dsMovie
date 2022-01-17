import { useParams } from 'react-router-dom';
import FormCard from 'components/formCard';
function Form() {

    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`}/>
    )
}

export default Form;