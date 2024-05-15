import { Chip } from "@nextui-org/chip";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-lg font-bold mb-3">
          &copy; 2024 <span className="font-bold">Cloud51</span> Store
        </p>
        <div className="flex flex-col items-center justify-center">
          <a href="tel:0888393339" className="text-sm mt-1">
            Hotline:{" "}
            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              0888.39.33.39
            </Chip>
          </a>
          <span className="text-sm mt-2 gap-1">
            Address:{" "}
            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
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
