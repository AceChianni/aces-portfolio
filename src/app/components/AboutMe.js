"use client";

const AboutMe = () => {
  return (
    <div className="justify-center bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-forest-green-900">
        About Me
      </h1>

      <div className="flex justify-center mb-6"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-brown-800">
          Education
        </h2>
        <div className="flex justify-center mb-4">
          <img
            src="/edu.jpg"
            alt="Education"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <p className="text-lg text-gray-700 mb-1">
          <strong>Bachelor's in Psychology</strong>
        </p>
        <p className="text-lg text-gray-700">
          Northwestern State University of Louisiana (2017)
        </p>
        <p className="text-lg text-gray-700 mt-4">
          <strong>CodeX Academy Bootcamp</strong> (2017)
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-brown-800">Skills</h2>
        <div className="flex justify-center mb-4">
          <img
            src="/skills.png"
            alt="Skills"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>Photography</li>
          <li>Graphic Design</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;
