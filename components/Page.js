import React, { Component } from 'react';

// import page components
import Meta from '../components/Meta';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// Build the page template from components
class Page extends Component {
    render() {
        return (
            <div className="center">
                {/* Content to output*/}
                <Meta />
                <Header />
                <Nav />
                {/* Render props passed to this Component */}
                {this.props.children}
              
              
              
        <Footer />

        <style jsx global>{`
.markdown {
  font-family: "Arial";
}
.markdown a {
  text-decoration: none;
  color: blue;
}
.markdown a:hover {
  opacity: 0.6;
}
.markdown h3 {
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}
`}</style>
            </div>




        );
    }
}

export default Page;

