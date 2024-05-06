const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-lg font-bold mb-3">
          &copy; 2024 <span className="font-bold">Cloud51</span> Store
        </p>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-row md:mr-6 mb-4 md:mb-0 gap-5">
            <a href="tel:0888393339" className="text-sm mt-1">
              Hotline:{" "}
              <span className="text-blue-200 hover:text-blue-100">
                0888.39.33.39
              </span>
            </a>
            <p className="text-sm mt-1">Address: 51/12 Đường 3/2, NK, CT</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
