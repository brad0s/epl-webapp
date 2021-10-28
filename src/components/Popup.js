import React from 'react';

const Popup = ({ show, close, title, children }) => {
  console.log(`show: ${show}`);
  return (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title"> {title} </h2>
              <button className="close" onClick={() => close()}>
                <span>x</span>
              </button>
            </header>
            <main className="modal_content">{children}</main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Close
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
