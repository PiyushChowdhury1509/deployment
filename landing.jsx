import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling

class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="bg-purple-950 text-white flex justify-between">
        <span className="text-left text-xl flex items-center mx-16 font-serif text-yellow-200 font-semibold">SafeZone</span> 
        <ul className="px-96 py-2 flex space-x-8 justify-end">
          <li className="cursor-pointer hover:bg-slate-50 hover:text-neutral-950" onClick={() => this.props.onTabClick("FAQ")}>FAQ</li>
          <li className="cursor-pointer hover:bg-slate-50 hover:text-neutral-950" onClick={() => this.props.onTabClick("Help")}>Help</li>
          <li className="cursor-pointer hover:bg-slate-50 hover:text-neutral-950" onClick={() => this.props.onTabClick("About")}>About</li>
          <li className="cursor-pointer hover:bg-slate-50 hover:text-neutral-950" onClick={() => this.props.onTabClick("Documentation")}>Documentation</li>
          <li className="cursor-pointer hover:bg-slate-50 hover:text-neutral-950">Feedback</li>
        </ul>
      </nav>
    );
  }
}

class MainContent extends React.Component {
  render() {
    return (
      <main>
        <div className="main bg-purple-100 h-96 py-55">
          <div className="font-extrabold text-3xl pl-9 text-purple-950">“It’s a great honor,“Maybe I couldn’t help everyone survive, but I could, at least, save this one life.” YOUR ONE TAP CAN SAVE SOMEONE'S LIFE</div>
          <p className="py-3">Life is totally unpredictable. Anything can happen at anytime. So make yourself to be ready for others.
            Someone is waiting for you to come back home with safety. "I've learned that courage and compassion are two sides of the same coin, and that every warrior, every humanitarian, every citizen is built to live with both. In fact, to win a war, to create peace, to save a life, or just to live a good life requires of us - of every one of us - that we be both good and strong." ~ Eric Greitens</p>
        </div>
      </main>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        &copy; 2024 All rights reserved, Designed by Kirti.
      </footer>
    );
  }
}

class App extends React.Component {
  handleTabClick = (tab) => {
    window.location.href = `${tab.toLowerCase()}.html`; // Assuming the HTML files are named accordingly
  };

  render() {
    return (
      <div className="bg-purple-100">
        <NavigationBar onTabClick={this.handleTabClick} />
        <p className="text-center my-11 text-5xl text-blue-950 font-extrabold">Welcome! to 24x7 SafeZone</p>
        <div className="flex">
          {/* Images here */}
        </div>
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
