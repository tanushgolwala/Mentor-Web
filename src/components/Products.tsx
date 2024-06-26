import React, { useEffect, useState } from "react";
import MentorDetails from "./MentorDetails";
import mentorImage from "../assets/placeholders/man2.png";

interface Product {
  _id: string;
  name: string;
  domain: [];
  image: string;
  email: string;
}

function Products(): JSX.Element {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/find-mentor/") //YE URL CHANGE KARNA HAI
      .then((res) => res.json())
      .then((json: Product[]) => setData(json));
  }, []);

  const [showMentorDetail, setShowMentorDetail] = useState(false);

  function handleDivClick(item: Product) {
    const subject = "Contacting you for mentorship from Mentorify platform";
    const body =
      "Dear Sir/Madam,\n\nI am interested in your mentorship. Can we schedule a meeting?\n\nRegards,\n<Your Name>";

    const mailtoUrl = `mailto:${item.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  }

  function handleMentorInfoClose() {
    setShowMentorDetail(false);
  }

  return (
    <div>
      {showMentorDetail && (
        <MentorDetails handleClose={handleMentorInfoClose} mentor={data[0]} />
      )}
      <div className="flex items-center justify-center flex-wrap">
        {data.map((item: Product) => (
          <div
            key={item._id}
            className="flex items-center justify-between p-5"
            onClick={() => handleDivClick(item)}
          >
            <div className="flex flex-col  items-center justify-center space-y-3 shadow-2xl h-96 w-80 cursor-pointer hover:drop-shadow-xl transition-all duration-500 rounded-xl border-black border">
              <img
                src={mentorImage}
                alt={item.name}
                className="w-52 rounded-full bg-blue-100 shadow-xl mb-5"
              />
              <div className="flex flex-col justify-start flex-wrap px-3">
                <h3 className="text-gray-600">{item.name}</h3>
                <h4 className="text-gray-600">{item.email}</h4>
                <ul className="text-gray-500 text-sm mb-3">
                  {item.domain.map((item, index) => (
                    <li key={index} style={{ padding: "0px 2px " }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
