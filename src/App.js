import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './component/Footer';
import Banner from './component/Banner';
import Mycard from './component/Mycard';

function App() {
  return (
    <div className="App">
      {/* navbar */}
             <Navbar className="bg-primary" >
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:'30px'}}>
          <img src='https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo-1969.png'
                      width="30"
                      height="30"></img>{' '}
            Demo</Navbar.Brand>
        </Container>
      </Navbar>
      {/* banner */}
      <Banner/>
      {/* cards */}
      <Mycard/>
      {/* footer */}
      <Footer/>

    </div>
  );
}

export default App;
