const Footer = () => {
  return (
    <footer className="hidden w-full items-end bg-rp-eggshell px-3 sm:block sm:flex sm:h-[124px]">
      <div className="w-full pb-2 text-center text-sm">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-rp-dark-raspberry"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/shalri"
          className="text-sm font-bold text-rp-dark-raspberry"
          target="_blank"
        >
          FScode &middot; Shalri
        </a>
      </div>
    </footer>
  );
};

export default Footer;
