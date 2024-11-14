import "remixicon/fonts/remixicon.css";

const Header = () => {
  
  return (
    <div className="fixed w-full z-30 px-8 py-14 flex justify-end items-center">
      <button className=" bg-black border-4 px-8 py-2 text-xs rounded-full hover:bg-gray-500">Hire Me</button>
      <i className="ri-more-2-line text-2xl ml-3"></i>
    </div>
  );
};

export default Header;
