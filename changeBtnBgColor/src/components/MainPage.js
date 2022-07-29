import React, {useState} from 'react'

const MainPage = () => {
    const [changeColor, setChangeColor] =useState(false)

    // function for handleClick
    const handleClick = () => {
        setChangeColor(!changeColor)
    }

  return (
    <React.Fragment>
    <section>
      <div className="h-screen centered">
          <button
          onClick={handleClick}
          className={`px-20 py-10 text-3xl capitalize font-bold text-white rounded-lg ${(changeColor === true)? 'bg-green-700 text-red-500' : 'bg-blue-700'}`} 
          >click me</button>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage