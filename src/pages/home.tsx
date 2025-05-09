import { useNavigate } from 'react-router-dom';
import jpFlag from '../assets/flags/jp.svg';
import skFlag from '../assets/flags/sk.svg';
import usaFlag from '../assets/flags/usa.svg';
import './Home.css'; // 👈 Add this line

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="flag-row">
        <img src={jpFlag} alt="Japan" className="flag" onClick={() => navigate('/jp')} />
        <img src={skFlag} alt="South Korea" className="flag" onClick={() => navigate('/sk')} />
        <img src={usaFlag} alt="USA" className="flag" onClick={() => navigate('/usa')} />
      </div>
    </div>
  );
}
