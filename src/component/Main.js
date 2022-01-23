import React, { Component } from 'react';
import Navbar from './Navbar';
import image from './Images'

export default class Main extends Component {
    Mainn = ()=>{
        return(
            <>
        <div class="main">
            <div class="grid-2">
                <div class="sup">
                    <h3>Save earth, Save Our Life</h3>
                    <p>
                       Earth is a place with many things we can discover. Around the globe, around the nations
                       we can be the one who make big impact for our life with improve our lifestyles.
                       Remember everything we do in this earth, we do it to many people. The goodness we develop is the part
                       to make this world become better. 
                    </p>
                    <button>Explore {this.props.title}</button>
                    <button>Get {this.props.title}</button>
                </div>
                <div class="imge">
                    <img src={image.pic1} alt="" />
                </div>
            </div>
    
        <div class="container-one">
            <div class="sub-head">
                    <h4>WHAT ARE OUR SERVICE?</h4>
            <p class="small">
                Make plan and Do for movement.
                Share your idea and do it together to release it all become reality.<br/>
                It begin with small movement to give
                the impact to this earth.<br/>
                So join our services and be the one who save the earth in your environment
            </p>
            </div>
            <div class="grid-3 mt-3 mb-5" id='dataa'>
            </div>
        </div>
    
       <div class="container-2">
           <h1 class="fs-1">{this.props.title}</h1>
           <span>Stunning </span>
           <p>What your life need it, what people want what we want. With use our services we can help each other.
                It help many people around the world.  You can make contributions with this website. So, please be a part of us. And write what you are thinking now
           </p>
           <img src="" alt="" />
       </div>
    
   
     
    </div>
            </>
        )
    }
  render() {
    return (
    <div>
        <Navbar/>
        <this.Mainn/>
    </div>
    )
  }
}

Main.defaultProps = {
    title:"Envr"
}