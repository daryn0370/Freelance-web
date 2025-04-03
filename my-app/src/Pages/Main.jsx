import { Link } from 'react-router-dom';
import './Main.css';
import Header from '../components/Header';
import Photo from '../Images/Working.png';

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main-content">
          <div className="text-section">
            <h1 className="heading">Ищите фрилансера?</h1>
            <p className="subheading">
              Нанимайте отличных фрилансеров, быстро. Kazlance поможет вам нанять элитных фрилансеров в любой момент.
            </p>
            <button className="hire-button">Нанять</button>
          </div>
          <div className="image-section">
            <img src={Photo} alt="Freelancer" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
