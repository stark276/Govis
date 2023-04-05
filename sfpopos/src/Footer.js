import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div class="Footer">
      &copy;
    <span id="copyright">
        <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>
    </span>
      <p>Kaniet's Copyright 2023</p> 
      
    </div>
  )
}

export default Footer
