import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center min-h-screen px-20">
        <div className="md:w-1/2">
          <img
            src="../assets/restaurant.jpg"
            alt="about"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-4xl font-bold">Welcome to Bite Box Cafe</div>
          <p className="mt-4">
            Bite Box Cafe is a place where foodies and coffee lovers come
            together. We are passionate about great food, excellent coffee and a
            warm and welcoming atmosphere.
          </p>
          <p className="mt-4">
            Our chefs are dedicated to providing you with a mouth-watering menu
            that will tantalize your taste buds. From classic breakfast dishes
            to delectable dinner options, we have something for everyone.
          </p>
          <p className="mt-4">
            Our baristas are skilled in the art of coffee making and are
            dedicated to providing you with a perfect cup every time. From rich
            and smooth lattes to bold and adventurous cold brews, we have a
            coffee drink that will satisfy your cravings.
          </p>
          <p className="mt-4">
            At Bite Box Cafe, we believe that great food and great coffee should
            be enjoyed in a warm and welcoming atmosphere. That is why we have
            created a cozy and inviting space that is perfect for relaxing with
            friends or getting some work done.
          </p>
        </div>
      </div>
      {/* Stats */}
      <div className=" flex justify-center  bg-gray-200 py-8">
        <div className="mt-4 flex flex-wrap gap-16">
          <div className="p-4 ">
            <div className="text-5xl font-bold">1000+</div>
            <div className="text-xl">Happy Customers</div>
          </div>
          <div className="p-4 ">
            <div className="text-5xl font-bold">100+</div>
            <div className="text-xl">Reviews</div>
          </div>
          <div className="p-4 ">
            <div className="text-5xl font-bold">50+</div>
            <div className="text-xl">Menu Items</div>
          </div>
          <div className="p-4 ">
            <div className="text-5xl font-bold">10+</div>
            <div className="text-xl">Awards</div>
          </div>
        </div>
      </div>

      {/* Social Medias */}

      <div className="flex justify-center py-8 flex-col items-center gap-6 my-10">
        <div className="text-3xl font-bold">Find us on</div>
        <div className="flex flex-wrap gap-10">
          <a
            href="https://www.facebook.com/biteboxcafe"
            target="_blank"
            rel="noreferrer"
            className="w-[50px] h-[50px] flex items-center justify-center"
          >
            <i className="text-blue-600 text-4xl">
              <FaFacebook />
            </i>
          </a>
          <a
            href="https://www.instagram.com/biteboxcafe"
            target="_blank"
            rel="noreferrer"
            className="w-[50px] h-[50px] flex items-center justify-center"
          >
            <i className="text-pink-500 text-4xl">
              <FaInstagram />
            </i>
          </a>
          <a
            href="https://www.twitter.com/biteboxcafe"
            target="_blank"
            rel="noreferrer"
            className="w-[50px] h-[50px] flex items-center justify-center"
          >
            <i className="text-blue-400 text-4xl">
              <FaTwitter />
            </i>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
