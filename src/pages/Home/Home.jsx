import React from "react";

import styles from "./home.module.scss";

import mockup from "../../assets/image-mockups.png";

import online from "../../assets/icon-online.svg";
import onboarding from "../../assets/icon-onboarding.svg";
import api from "../../assets/icon-api.svg";
import budgeting from "../../assets/icon-budgeting.svg";

import currency from "../../assets/image-currency.jpg";
import plane from "../../assets/image-plane.jpg";
import restaurant from "../../assets/image-restaurant.jpg";
import confetti from "../../assets/image-confetti.jpg";

const Home = () => {
  const SectionHero = () => (
    <section className="grid md:grid-cols-2 gap-5 items-center min-h-[70vh]">
      <div className={`relative md:order-last ${styles.mockupContainer}`}>
        <img
          src={mockup}
          alt="app mockup"
          className={`block absolute ${styles.mockup}`}
        />
      </div>
      <div className="mt-12 md:mt-0 px-3 md:px-10 text-center md:text-left mt-auto">
        <h1
          className={`text-xl md:text-5xl font-bold text-gray-800 mt-[5rem] md:mt-0 md:my-3 leading-loose`}
        >
          Next generation digital banking
        </h1>
        <p className="leading-12">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <a
          href="#"
          className={`block ${styles.cta}  py-1.5 px-4 rounded-3xl text-white md:w-auto hover:opacity-75 w-2/5 md:w-3/12 my-5 text-center font-bold`}
        >
          Request Invite
        </a>
      </div>
    </section>
  );

  const ReasonSection = ({ img, alt, title, content }) => (
    <div className="text-center md:text-left">
      <img
        src={img}
        alt={alt}
        className="h-[45px] md:h-[55px] mx-auto md:mx-0"
      />
      <h2 className="text-lg md:text-2xl font-medium my-4">{title}</h2>
      <p>{content}</p>
    </div>
  );

  const Reason = () => (
    <section className="bg-gray-100 py-[2rem] px-3 md:px-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-5">
        Why choose Easybank?
      </h1>
      <p className="md:w-2/5 leading-12">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="grid gap-10 justify-between items-center md:grid-cols-4 my-10">
        <ReasonSection
          img={online}
          alt="online banking"
          title="Online Banking"
          content="Our modern web and mobile applications allow you to keep track of your finances 
                    wherever you are in the world."
        />
        <ReasonSection
          img={budgeting}
          alt="Simple Budgeting"
          title="Simple Budgeting"
          content=" See exactly where your money goes each month. Receive notifications when you’re 
                  close to hitting your limits."
        />
        <ReasonSection
          img={onboarding}
          alt="Fast Onboarding"
          title="Fast Onboarding"
          content="We don’t do branches. Open your account in minutes online and start taking control 
                  of your finances right away."
        />
        <ReasonSection
          img={api}
          alt=" Open API"
          title=" Open API"
          content=" Manage your savings, investments, pension, and much more from one account. Tracking 
                    your money has never been easier."
        />
      </div>
    </section>
  );

  const Article = ({ img, alt, author, title, content }) => (
    <article className="bg-white shadow rounded-lg">
      <img
        src={img}
        alt={alt}
        className="w-[100%] h-[150px] md:h-[200px] object-cover rounded-tr-lg rounded-tl-lg"
      />
      <div className="p-4">
        <p className="text-gray-500">By {author}</p>
        <h2 className="text-lg md:text-xl font-medium my-4">{title}</h2>
        <p>{content}</p>
      </div>
    </article>
  );
  const LatestArticle = () => (
    <section className="py-[2rem] bg-white px-3 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">Latest Articles</h2>
      <div className="grid gap-10 justify-between items-center md:grid-cols-4 my-10">
        <Article
          img={currency}
          alt="Receive money in any currency with no fees"
          title="Receive money in any currency with no fees"
          author="Claire Robinson"
          content="The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …"
        />
        <Article
          img={restaurant}
          alt="Treat yourself without worrying about money"
          title="Treat yourself without worrying about money"
          author="Wilson Hutton"
          content="The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …"
        />
        <Article
          img={plane}
          alt="Take your Easybank card wherever you go"
          title="Take your Easybank card wherever you go"
          author="Wilson Hutton"
          content="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                  while you’re abroad. We’ll even show you …"
        />
        <Article
          img={confetti}
          alt="Our invite-only Beta accounts are now live!"
          title="Our invite-only Beta accounts are now live!"
          author="Claire Robinson"
          content=" After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                  It’s easy to request an invite through the site ..."
        />
      </div>
    </section>
  );
  return (
    <>
      <SectionHero />
      <Reason />
      <LatestArticle />
    </>
  );
};

export default Home;
