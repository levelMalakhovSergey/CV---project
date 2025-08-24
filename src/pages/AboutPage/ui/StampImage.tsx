import { useState } from "react";
import '../styles/StampImage.scss';

const StampImage = ({ src, alt, stampText = 'HIRED' }:{src: any, alt:string, stampText?:string}) => {
    const [stamped, setStamped] = useState(false);
  
    const handleStamp = () => {
      if (!stamped) {
        setStamped(true);
      }else{
        setStamped(false);
      }
    };
  
    return (
      <div className="stamp-container">
        <img
          src={src}
          alt={alt}
          onClick={handleStamp}
          className={`base-image ${stamped ? 'stamped' : ''}`}
        />
        {stamped && (
          <div className="stamp-overlay">
            <span className="stamp-text">{stampText}</span>
          </div>
        )}
      </div>
    );
  };
  
  export default StampImage;