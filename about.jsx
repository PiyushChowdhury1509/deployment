import React from 'react';
import ReactDOM from 'react-dom';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a felis quis risus suscipit lobortis. Proin bibendum augue nec leo posuere, id posuere est fermentum. In hac habitasse platea dictumst. Vivamus sit amet efficitur metus. Sed faucibus, dolor non volutpat fermentum, libero purus auctor sem, ac sodales libero velit a nulla. Duis sodales massa ac enim condimentum venenatis. Ut elementum fermentum lectus, a fermentum ipsum posuere et. Donec luctus erat nec ligula sodales gravida. Mauris auctor erat et magna laoreet lobortis. Nullam vitae quam non turpis interdum congue.</p>
        <p>Etiam nec lacus eget tellus sollicitudin consectetur vel id magna. Sed fermentum consequat mauris, et fermentum mi cursus non. In hac habitasse platea dictumst. Cras ut erat lacus. In hac habitasse platea dictumst. Phasellus interdum felis eget sem consequat, quis varius neque interdum. Integer tempor ex eget arcu efficitur, quis convallis enim eleifend. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim repellat ea cumque placeat ducimus qui, deleniti eveniet fugiat dolorum tenetur optio mollitia, blanditiis quae porro nesciunt? Iure adipisci est delectus necessitatibus labore soluta voluptatem sed placeat atque, possimus rem. Dolorem velit quod fuga totam officiis natus ut officia maxime obcaecati, recusandae reprehenderit minus cumque exercitationem reiciendis. Earum, quia est? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="index.html" className="homepage-btn">Go to Home</a>
        <footer>
          &copy; 2024  All rights reserved.
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<AboutUs />, document.getElementById('root'));
