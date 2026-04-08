 import LeftCntnt from './LeftCntnt'
import RightCntnt from './RightCntnt'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full flex items-center justify-between px-10">
        <LeftCntnt/>
        <RightCntnt/>
          </div>
    </div>
  )
}

export default Home