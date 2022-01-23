import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
// import '../Main.css'
const imae = require('../images/lukasz-szmigiel-w7fx1m6iKig-unsplash.jpg')


export function Section1(){
    return(
     <section className="navbar">
        <ul>
            <li><i className="fas fa-house-user"></i></li>
            <li><i className="fas fa-bell"></i></li>
            <li><i className="fas fa-id-badge"></i></li>
            <li><i className="fas fa-cog"></i></li>
            <li><i className="fas fa-globe-asia"></i></li>
        </ul>
    </section>
    )
}

export function Section2(){
    return(
    <section className="utama g-2">
        <div className="g-1">
            <div className="flex">
                <div className="f-1">
                    <a href="" className="add"><i className="fas fa-plus"></i> Add Device</a>
                    <h3>Good afternoon, Me</h3>
                    <p>Have a nice day</p>        
                </div>
                <div className="f-2">
                    <h3>13:21 PM</h3>
                    <p>Have a nice day</p>  
                </div>
             </div>
        </div>
        <div className="g-2-main">
            <div className="nav-g2">
                    <ul>
                        <li><a href="">Living room Camera</a></li>
                        <li><a href="">Dining room</a></li>
                        <li><a href="">Bad room</a></li>
                        <li><a href="">Bath room</a></li>
                        <li><a href="">Backyard</a></li>
                    </ul>
            </div>
            <div className="g-2-sub-main">
                <div className="flex">
                    <div className="f-1">
                        <i className="fas fa-camera"></i><span>Living Room Camera </span>
                    </div>
                    <div className="f-2">
                       <div className="toogle"></div>
                    </div>
                </div>
                <div className="image-camera">
                    <image src={imae} alt=""/>
                </div>
                <div className="g2-sub">
                     <div className="g-1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam officiis totam, eos blanditiis cupiditate doloremque dolor nam aperiam asperiores voluptatem?
                     </div>
                     <div className="g-1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam officiis totam, eos blanditiis cupiditate doloremque dolor nam aperiam asperiores voluptatem?
                    </div>
                    <div className="g-1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam officiis totam, eos blanditiis cupiditate doloremque dolor nam aperiam asperiores voluptatem?
                    </div>
                    <div className="g-1">
                        
                   </div>
                </div>
            </div>
    </div>
    </section>
    )
}

export function Section3(){
    return(
    <section className="g-3-cuaca">
            <div className="main-image">
                <image src="../images/sun-cloud.png" alt=""/>
            </div>
            <div className="rn">Party Cloudy</div>
            <div className="flex">
                <div className="one">

                </div>
                <div className="two">

                </div>
            </div>
    </section>
    )
}

export class Beranda extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
   
     render() {
        return (
            <>
                <Helmet>
                <title>Weather App</title>
                <link rel="stylesheet" href="style.css"/>
                <script src="script.js"></script>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                </Helmet>
                <main>
                <Section1 />
                <Section2 />
                <Section3/>
                </main>
            
            </>
        )
    }
}
