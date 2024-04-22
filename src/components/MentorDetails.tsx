import React from "react";

interface Product {
  _id: string;
  name: string;
  domain: [];
  image: string;
  email: string;
}

interface MentorDetailsProps {
  handleClose: () => void;
}

const MentorDetails: React.FC<MentorDetailsProps> = ({ handleClose }) => {
  return (
    <div>
      <div className="fixed flex top-0 left-0 z-10 h-screen w-screen bg-black/[.5]">
        {/* <h1>Mentor Info</h1> */}
        <button
          className="close-btn fixed top-10 right-10"
          onClick={handleClose}
        >
          ×
        </button>
        <div className="self-center justify-self-center">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;
