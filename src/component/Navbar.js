import React, { Component } from 'react';
import '../style.css'
export default class Navbar extends Component {
    constructor(props) {
      super(props)
      this.state = {
         title:''
      }
    }
    Nav = ()=>{
        return(
            <>
            <div className="navbar">
               <div className="sub">
                   <h3>{this.props.title}</h3>
               </div>
               <div className="sup">
                   <ul>
                       <li>Environment</li>
                       <li>Our Role</li>
                       <li>Earth Care</li>
                       <li>Green Replacement</li>
                   </ul>
               </div>
               <div className="subb">
                   <i className="fas fa-user"></i>
                   <i className="fas fa-shopping-cart"></i>
                   <a href="">Donasi</a>
               </div>
           </div>
           <div class="burger">
               <h3>{this.props.title}</h3>
               <a href="javascript:void(0)" id="pil"><i class="fas fa-bars"></i></a>
           </div>
           <div class="sub-burger">
                     <ul>
                       <li>Lingkungan</li>
                       <li>Peran</li>
                       <li>Peduli</li>
                       <li>Gerakan Hijau</li>
                   </ul>
               <i class="fas fa-user"></i>
               <i class="fas fa-shopping-cart"></i>
               <a href="">Donasi</a>
           </div>
           </>
        )
    }

  
    
  render() {
    return (
        <>
            {/* <this.Nav/> */}

            <this.Nav/>
        </>
       
        
    )
  }
}
Navbar.defaultProps = {
    title:"Envr"
}