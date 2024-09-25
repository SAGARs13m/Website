import React from 'react';
import "./about.css";
import img from './1.webp';


function about() {
    return (
<body>

<div class="about-section">
  <h1>About Us Page</h1>
  <p>Ready for a data transformation? Leave us a message, and let’s start the conversation on AI and Cloud brilliance. </p>
</div>

<h2 class="our">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src={img} alt="Jane" class="photo" />
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={img} alt="Mike" class="photo"  />
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src={img} alt="John" class="photo" />
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

</body>

    );
}

export default about;