import FooterItem from "../helpers/FooterItem";
import { LinkedIn, Github } from "../icons/Icons";

function Footer() {
  return (
    <section className="mt-28 text-center">
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-wrap justify-center gap-3 pb-4">
          <FooterItem
            link={"https://www.linkedin.com/in/alexandros-tsagkaropoulos/"}
          >
            <LinkedIn />
          </FooterItem>
          <FooterItem link={"https://github.com/alextsagkas"}>
            <Github />
          </FooterItem>
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
