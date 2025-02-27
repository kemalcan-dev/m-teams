import './Info.sass';
import { useGlobal } from 'reactn';
import logo from '../../../assets/logo.png';
import Config from '../../../config';

function Info() {
  const version = useGlobal('version')[0];

  return (
    <div className="info">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="Picture" />
        </div>
        <div className="text">
          Welcome to
          {' '}
          {Config.appName || 'm-teams'}
          !
          <br />
          <br />
          {Config.appName || 'm-teams'}
          {' '}
          is a messaging app that enables real-time messaging, audio and video calls,
          groups and conferencing.
        </div>
      </div>
      <div className="text">
        Copyright &copy;
        {' '}
        {Config.brand || 'm-teams'}
        <br />
        v
        {version}
      </div>
    </div>
  );
}

export default Info;
