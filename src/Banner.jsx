import Image from 'react-bootstrap/Image';
import banner from './assets/vrbanner.jpg'

const Banner = () => {
    return <Image src={banner}  style={{ width: '100%' }} fluid />;
}

export default Banner