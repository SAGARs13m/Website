import React from 'react';
import "./courses.css";
import full from './full.jpg';
import AI from './AI.png';
import chatgpt from './chatgpt.png';
import cloud from './cloud.png';
import AWS from './AWS.png';
import cloudprogramming from './cloudprogramming.jpg';
import cybersecurity from './cybersecurity.png';
import dataE from './dataE.png';

 function courses(){
    return(
        <body>
        <div class="row1" >
        <h1 class="text2"><u>Find our on-demand courses</u></h1>
    <div class="column1">
        <img class ="i" src={full} alt="Loading"/>
        <h3 class="text3">Full Stack Development</h3>
        <p><button class="button">EXPLORE MORE</button></p>
    </div>
    <div class="column1">
        <img class ="i" src={AI} alt="Loading"/>
        <h3 class="text3">AI Fundametals</h3>
        <p><button class="button">EXPLORE MORE</button></p>
    </div>
    <div class="column1">
        <img class ="i" src={chatgpt} alt="Loading"/>
        <h3 class="text3">ChatGPT</h3>
        <p><button class="button">EXPLORE MORE</button></p>
    </div>
    <div class="column1">
        <img class ="i" src={cloud} alt="Loading"/>
        <h3 class="text3">Cloud Computing Mastery</h3>
        <p><button class="button">EXPLORE MORE</button></p>
    </div>
    </div>
    <div class="row2">
    <div class="column2">
        <img class ="i" src={AWS} alt="Loading"/>
        <h3 class="text3">Cloud Computing</h3>
        <p><button class="button">EXPLORE MORE</button></p>
    </div>
    <div class="column2">
        <img class ="i" src={cloudprogramming} alt="Loading"/>
        <h3 class="text3">Cloud Data Engineering Program</h3>
        <p><button class="button">EXPLORE MORE</button></p>
    </div>
    <div class="column2">
        <img class ="i" src={cybersecurity} alt="Loading"/>
        <h3 class="text3">Cyber security Practitioner Program</h3>
        <p><button class="button">EXPLORE MORE</button></p>
    </div>
    <div class="column2">
        <img class ="i" src={dataE} alt="Loading"/>
        <h3 class="text3">Data Engineering Foundations</h3>
        <p><button class="button">EXPLORE MORE</button></p>
    </div>
    </div>
    </body>
    )
 }

 export default courses;