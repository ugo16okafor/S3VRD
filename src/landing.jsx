function LandingPage() {
  return (
    <>
      <section className="bg-[url('/lumon_building_D.jpg')] bg-center bg-no-repeat bg-cover h-screen w-full text-white flex items-center justify-center">
        <div>
          <h1 className="text-white text-8xl scale-150 shadow font-league-spartan">
            Welcome to <br /> Lumon
          </h1>
        </div>
      </section>
      {/* second page */}
      <section className="font-inter text-xl">
        <div className="flex items-center justify-center gap-10 p-10">
          <div className="max-w-xl">
            <p>
              Lumon Industries is a visionary biotech corporation at the
              forefront of redefining work-life balance through its
              groundbreaking Severance procedure, which allows employees to
              fully separate their professional and personal lives. With deep
              roots in tradition and innovation, Lumon promotes a focused,
              distraction-free workplace where individuals can dedicate
              themselves entirely to meaningful contributions during work hours,
              while enjoying total mental freedom in their personal time.
            </p>
          </div>

          <div className="w-xl">
            <img
              src="/Mark.jpg"
              alt="Mark Scout"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 p-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/office.jpg"
              alt="Lumon Office"
              className="w-full rounded-md shadow-md"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <p className="text-base leading-relaxed font-inter text-xl">
              The workplace at Lumon Industries is a focused, distraction-free
              environment designed to help employees—known as “Innies”—fully
              dedicate themselves to meaningful work.
            </p>
          </div>
        </div>
        <div>
          <h2>Meet Our Staff</h2>
        </div>

        <div>
          <div>
            <p>
              With its clean, retro-inspired design and thoughtfully organized
              departments, the space promotes clarity, structure, and purpose.
              Every element, from wellness sessions to team rituals, supports a
              culture of unity, productivity, and mental balance. By separating
              the personal from the professional, Lumon empowers its employees
              to thrive in a setting built for excellence and pure contribution.
            </p>
          </div>
          <div>
            <img src="/dancing.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
