
import Login from '../../components/login';
import HeroBackground from '../../common/heroBackground';
export default function Signin() {
  return (
    <div>
      <HeroBackground imgSrc="/images/blur.jpg" hasOverlay={true}>

        <Login/>
      </HeroBackground>

    </div>
  )
}
