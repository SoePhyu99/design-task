import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Frame from "./Frame";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
}

const Testimonials = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((json: User[]) => setUsers(json))
    );
  }, []);
  return (
    <Frame>
      <div className="py-[100px] relative">
        <h1 className="text-[36px] mb-[30px] text-center font-playfairdisplay text-heading">
          Testimonials
        </h1>
        {currentPage !== 0 && (
          <button
            className="absolute top-[50%] left-[-21px] bg-white p-[12.5px] rounded-full border border-[#c4c4c4] cursor-pointer"
            onClick={() => setCurrentPage((current) => current - 1)}
          >
            <FaChevronLeft
              width={"20px"}
              height={"20px"}
              className="text-[#c4c4c4]"
            />
          </button>
        )}
        {currentPage !== Math.floor(users.length / 4) && (
          <button
            className="absolute top-[50%] right-[-21px] bg-white p-[12.5px] rounded-full border border-[#c4c4c4] cursor-pointer"
            onClick={() => setCurrentPage((current) => current + 1)}
          >
            <FaChevronRight
              width={"20px"}
              height={"20px"}
              className="text-[#c4c4c4]"
            />
          </button>
        )}
        <div className="grid grid-cols-4 gap-[30px]">
          {users
            .slice(currentPage * 4, currentPage * 4 + 4)
            .map((user, index) => (
              <div
                key={index}
                className="px-[25px] py-[46.7px] border border-border flex flex-col gap-[16.8px] text-center"
              >
                <div className="w-[120px] h-[120px] mx-auto bg-amber-200"></div>
                <div>
                  <h2 className="text-[14px] font-bold font-dmsans">
                    {user.name}
                  </h2>
                  <p className="text-[12px]">{user.email}</p>
                </div>
                <p className="text-[14px] font-dmsans">
                  Absolutely breathtaking! The craftsmanship of my diamond ring.
                </p>
              </div>
            ))}
        </div>
        <div className="flex gap-[8px] mt-[30px] justify-center">
          {[0, 1, 2].map((page) => (
            <GoDotFill
              key={page}
              width={"8px"}
              className={`${
                page === currentPage ? "text-primary" : "text-border"
              } cursor-pointer`}
              onClick={() => {
                setCurrentPage(page);
              }}
            />
          ))}
        </div>
      </div>
    </Frame>
  );
};

export default Testimonials;
