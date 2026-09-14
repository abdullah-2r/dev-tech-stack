import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-10 bg-white px-4 py-4 text-[#2b3a4a]">
      <div className="border-t border-[#e2e8f0] pt-6">
        <div className="mx-auto max-w-[1280px] px-6 py-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Dev Stack" className="h-8" />
            </div>

            <p className="max-w-[280px] text-sm leading-6 text-[#475569]">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex gap-5 text-sm text-[#3b82f6]">
              <span>GitHub</span>
              <span>Twitter</span>
              <span>LinkedIn</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#0f172a]">Product</h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#0f172a]">Company</h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#0f172a]">Legal</h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 max-w-[1280px] pt-4 text-sm text-[#475569]">
        <div className="flex items-center justify-between gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;