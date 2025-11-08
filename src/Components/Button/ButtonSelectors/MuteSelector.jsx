import PropTypes from 'prop-types';
import '../Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons';


function MuteSelector({isMuted, onToggleMute}) {
  
    return (
      <>
        <button className="pixel-btn" onClick={onToggleMute} >
          {isMuted ? <FontAwesomeIcon icon={faVolumeXmark} />  : <FontAwesomeIcon icon={faVolumeHigh} /> } 
        </button>
        <div className="flex bottom-0 right-0">
        </div>
      </>
    )
  }

  MuteSelector.propTypes = {
    isMuted: PropTypes.bool.isRequired,
    onToggleMute: PropTypes.func.isRequired,
  };
  
  export default MuteSelector
  