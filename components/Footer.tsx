import { Chip } from "@nextui-org/chip";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-6 shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-lg font-bold mb-3">
          &copy; 2024 <span className="font-bold">Cloud 51</span> Store
        </p>
        <div className="flex flex-col items-center justify-center">
          <a href="tel:0888393339" className="text-sm mt-1">
            Hotline:{" "}
            <Chip
              variant="faded"
              classNames={{
                base: "bg-gradient-to-br from-orange-300 to-orange-500 border-small border-white/50 shadow-red-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              0888.39.33.39
            </Chip>
          </a>
          <span className="text-sm mt-2 gap-1">
            Address:{" "}
            <Chip
              variant="faded"
              classNames={{
                base: "bg-gradient-to-br from-orange-300 to-orange-500 border-small border-white/50 shadow-red-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              51/12 Đường 3/2, NK, CT
            </Chip>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
