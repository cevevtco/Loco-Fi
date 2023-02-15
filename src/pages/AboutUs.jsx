import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div
        className="bg-gray-900 p-10 mt-6 animate-slideup "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="flex justify-between items-center sm:flex-row flex-col  text-3xl font-bold text-center text-[#f97f10] mb-10">
          About Loco-Fi
        </h1>
        <p className="text-lg text-white leading-relaxed mb-10">
          <span className="text-2xl font-bold"> Welcome to Loco-Fi</span>... the
          place for music lovers of all genres! Our website is dedicated to
          bringing you the latest trends, and updates from the world of music.
          We believe that music has the power to bring people together, and
          that’s why we’re passionate about creating a community that celebrates
          this art form.
        </p>

        <p className="text-lg text-white leading-relaxed mb-10">
          Whether you’re a fan of pop, rock, hip-hop, classical, or any other
          genre, you’ll find everything you need to know here. From in-depth
          interviews with your favorite artists to the latest album releases,
          we’ve got you covered.
        </p>

        <p className="text-lg text-white leading-relaxed mb-10">
          We believe that music is for everyone, and that’s why we strive to
          make our website accessible and inclusive for everyone. Whether you’re
          a casual listener or a die-hard fan, you’ll feel right at home here.
        </p>

        <p className="text-lg text-white leading-relaxed mb-10">
          So why not join the conversation today and become a part of the music
          community? We can’t wait to hear from you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
