import React from "react";

interface Product {
  _id: string;
  name: string;
  domain: string[];
  image: string;
  email: string;
}

interface MentorDetailsProps {
  handleClose: () => void;
  mentor: Product;
}

const MentorDetails: React.FC<MentorDetailsProps> = ({ handleClose, mentor }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/[.5]">
        <button className="close-btn fixed top-10 right-10" onClick={handleClose}>
          ×
        </button>
        <div className="flex flex-row justify-center">
          <div>
            <h1>{mentor.name}</h1>
            <img src={mentor.image} alt={mentor.name} />
            <p>Domain: {mentor.domain.join(', ')}</p>
            <p>Email: {mentor.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;