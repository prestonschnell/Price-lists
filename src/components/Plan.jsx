import {useState} from 'react'
import './Plan.css'

const Plan = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(prev => !prev);
  };

  return (
    <div className='plan-container'>
      <div className="title">
        <p>Plans & Pricing</p>
      </div>


      <div className="slider">
        <p>MONTHLY</p>
        <button
          id="background-button"
          onClick={handleToggle}
          style={{
            background: isYearly ? '#4caf50' : '#ccc',
            border: 'none',
            borderRadius: '20px',
            width: '50px',
            height: '24px',
            position: 'relative',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
        >
          <span
            id="inner-button"
            style={{
              display: 'block',
              background: '#fff',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              position: 'absolute',
              top: '2px',
              left: isYearly ? '26px' : '2px',
              transition: 'left 0.3s'
            }}
          ></span>
        </button>
        <p>YEARLY</p>
      </div>
    </div>
  )
}

export default Plan
