import { Fragment } from 'react';
import Head from 'next/head';

// Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import WhyChoose from 'components/WhyChoose';

const Home = () => {
  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>Big Lou Mobile Welding and Metal Fabrication Service | Nassau | 24-Hour Emergency</title>
        <meta name="description" content="Professional mobile welding, metal fabrication, and 24-hour emergency service in Nassau. On-site certified welding for construction equipment, trucks, trailers, and more. Call (516) 265-9889" />
        <meta name="keywords" content="mobile welding, metal fabrication, welder nassau, on site welding, construction equipment repair, truck repair, 24 hour emergency welding, certified welding, MIG welding, TIG welding" />
      </Head>

      <main className="content-wrapper overflow-hidden">

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <About
              headingH1="Welcome to Big Lou Mobile Welding"
              subHeading="Professional On-Site Service"
              para="Big Lou Mobile Welding and Metal Fabrication Service brings certified welding expertise directly to your location in Nassau. We specialize in on-site metal fabrication, construction equipment repair, and emergency welding services."
              para2="With years of experience and a commitment to quality craftsmanship, we handle everything from truck repairs and trailer fabrication to custom metalwork and marine repairs. Our versatile team is skilled in MIG, TIG, Arc, Stick welding, and plasma cutting."
              para3="Available 24 hours a day, 7 days a week, we're here when you need us most. No job is too big or too small – we come to you with all the equipment needed to get the job done right."
              imgPosition="left"
              src="/img/welcome-to-constructions.webp"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="wrapper whychoose-bg">
          <div className="container py-14 py-md-16">
            <WhyChoose />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
