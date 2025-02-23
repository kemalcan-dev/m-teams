import './TopBar.sass';
import { FiArrowLeft, FiMoreHorizontal, FiExternalLink } from 'react-icons/fi';

function TopBar({ back }) {
  const mteams = () => window.open('https://www.m-tems.me', '_blank');
  const mteamsOp = () => window.open(
    '//',
    '_blank',
  );

  return (
    <div className="top-bar uk-flex uk-flex-between uk-flex-middle">
      <div className="nav">
        <div className="button mobile" onClick={back}>
          <FiArrowLeft />
        </div>
      </div>
      <div className="nav">
        <div className="uk-inline">
          <div className="button" type="button">
            <FiMoreHorizontal />
          </div>
          <div data-uk-dropdown="mode: click; offset: 5; boundary: .top-bar">
            <div className="link" onClick={mteams}>
              mteams
              <div className="icon">
                <FiExternalLink />
              </div>
            </div>
            <div className="link" onClick={mteamsOp}>
              mteamsOp
              <div className="icon">
                <FiExternalLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
