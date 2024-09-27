import React from 'react'
import '../../scss/styles.scss'
import Introduction from 'pages/Introduction'
import NavProduct from './navbar/NavProduct'
import NavSolution from './navbar/NavSolution'
const index = () => {
  return (
    <div className="flex justify-around">
      <div> Logo</div>
      <div className="flex">
        <Introduction />
        <NavProduct />
        <NavSolution />
      </div>
    </div>
  )
}

export default index
