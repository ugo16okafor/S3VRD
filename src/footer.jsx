function Footer() {
  return (
    <>
      <footer className="bg-dark text-white px-6 py-10 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-lg font-bold mb-2">Lumon Industries</h2>
            <p>“A life divided is a life perfected.”</p>
            <p className="mt-2 italic text-gray-400">All praise Kier.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Severance Procedure
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Macrodata Refinement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Innie Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Report Emotional Drift
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Wellness Sessions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Outie Services Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Helpline (Tone Only)
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Emergency Elevator Protocol
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>
            © 2025 Lumon Industries. Unauthorized memory reintegration is a
            terminable offense.
          </p>
          <p className="mt-1">“You are not you. And that's okay.”</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
