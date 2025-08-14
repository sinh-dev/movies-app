import './Background.css';
import image1 from '../assets/images/time_is_the_enemy.png';
import image2 from '../assets/images/I_will_win.png';
import image3 from '../assets/images/batman.png';

const Background = ({playStatus, heroCount}) => {
    if (playStatus) {
        return(
            <video className='background' autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
        )
    }
    else if (heroCount === 0) {
        return( <img src={image1} className='background'/> )
    }
    else if (heroCount === 1) {
        return( <img src={image2} className='background'/> )
    }
    else if (heroCount === 2) {
        return( <img src={image3} className='background'/> )
    }
}

export default Background;