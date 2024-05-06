import { useState } from 'react';

const ViciCreative = ({ creative }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="vici-creative-container"
        onClick={() => setOpen(true)}
        style={{
          backgroundImage: 'url(' + creative.preview + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="vici-showcase-container-overlay">
          <h5>View Preview</h5>
        </div>
      </div>
      <div className="vici-creative-popup" style={open ? { display: 'flex' } : { display: 'none' }}>
        {open ? (
          <iframe
            name={creative.name}
            src={creative.src}
            width="300"
            height="600"
            marginWidth="0"
            marginHeight="0"
            hspace="0"
            vspace="0"
            frameBorder="0"
            scrolling="no"
            className="vici-creative"
          ></iframe>
        ) : (
          <div className="vici-placeholder"></div>
        )}
        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    </>
  );
};

export default ViciCreative;
