const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          Thank you Mr. <span className="text-yellow-400">Le Minh Luan</span>{" "}
          for the wonderful and dedicated lessons!
        </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} Author: Pham Truong Tam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
