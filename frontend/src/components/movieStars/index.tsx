import {ReactComponent as StarFull} from 'assets/imgs/starFull.svg';
import {ReactComponent as StarHalf} from 'assets/imgs/starHalf.svg';
import {ReactComponent as StarEmpty} from 'assets/imgs/starEmpty.svg';
import './styles.css';

function MovieStars() {
    return (

        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;