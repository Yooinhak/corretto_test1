import './App.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function App() {
  return (
    <div className='App'>
      <div className='top-content'>
        <div className='first-line'>
          With<div>with you company</div>
        </div>
        <div className='second-line'>Will be better.</div>
      </div>
      <div className='main-box'>
        <div className='left-box'>
          <div className='first-line'>위드유 컴퍼니만의</div>
          <div className='second-line'>독보적인 마케팅 전략</div>
          <div className='third-line'>AD Service</div>
        </div>
        <div className='right-box'>
          <div className='arrow'>
            <div className='icon'>
              <IoIosArrowBack />
            </div>
            <div className='icon'>
              <IoIosArrowForward />
            </div>
          </div>
          <div className='box' />
        </div>
      </div>
    </div>
  );
}

export default App;
