import React from 'react';
import "./home.css";
import MyImage from './t2.jpg';
import a1 from './a1.png';
import a222 from './a222.png';
import a3 from './a3.png';

 function home(){
    return(
        <main>
          <h1 class="head">FULL STACK WEB DEVELOPMENT</h1>
        <div class="aligned">
            <img src={MyImage} alt="description" width="500" />
            <span>Full stack development is the process of developing both the frontend and backend of applications. Any application has a frontend (user-facing) component and a backend (database and logic) component. The frontend contains the user interface and code related to user interactions with the application.</span>
        </div>
        <p class="text"><u>SOME TECHNOLOGIES</u></p>
        <div class="row">
            <div class="column">
              <img class="width" src={a1} alt="image" />
            </div>
            <div class="column">
              <img class="width" src={a222} alt="image2" />
            </div>
            <div class="column">
              <img class="width" src={a3} alt="image3" />
            </div>
          </div>
        </main>
    )
 }

 export default home;