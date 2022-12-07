import { LinkedIn, Github } from "./icons/Icons";

function Footer() {
  return (
    <section className="mt-28 text-center">
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-wrap justify-center gap-3 pb-4">
          <a
            href="https://www.linkedin.com/in/alexandros-tsagkaropoulos/"
            className="inline-flex items-center rounded-lg bg-bgDark-400 p-2 font-semibold text-white"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/alextsagkas"
            className="inline-flex items-center rounded-lg bg-bgDark-400 p-2
               font-semibold text-white"
          >
            <Github />
          </a>
        </div>
      </div>
      <p className="mt-1 mb-4 text-sm opacity-50">
        &copy; {new Date().getFullYear()} Alexandros Tsagkaropoulos. All rights
        reserved.
      </p>
    </section>
  );
}

export default Footer;
