import React from 'react'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
      <a href='https://www.linkpicture.com/view.php?img=LPic64ad661c1b6861708777206'>
        <img src='https://www.linkpicture.com/q/HL.png' className='logo' alt='image' />
      </a>      
      <div className="links">
        <a href="/">Home</a>
        <a href="/companies">Companies</a>
        <a href="/open-source">Open-source</a>
      </div>
      </nav>      
    </div>
  )
}
