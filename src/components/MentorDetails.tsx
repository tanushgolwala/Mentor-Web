import React from "react";

interface MentorDetailsProps {
  handleClose: () => void;
}

const MentorDetails: React.FC<MentorDetailsProps> = ({ handleClose }) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
          <div className="wrapper">
            <div className="card-switch">
              <label className="switch">
                <input type="checkbox" className="toggle" />
                <span className="slider"></span>
                <span className="card-side"></span>
                <div className="flip-card__inner">
                  <div className="flip-card__front">
                    <div className="title">Log in</div>
                    {/* <LoginForm
                      handleLogInSubmit={handleLogInSubmit}
                      handleChange={handleChange}
                      formData={formData}
                    /> */}
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;
