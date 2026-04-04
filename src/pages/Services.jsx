import React from "react";
import OurServices from "../components/OurServices";
import ContactUs from "../components/ContactUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";

const Services = () => {
  const breadcrumbPath = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ];
  return (
    <div>
      <div>
        <Breadcrumb path={breadcrumbPath} heading="Services" />
      </div>

      <OurServices />

      <ContactUs />

      <Testimonials />

      <Footer />
    </div>
  );
};

export default Services;
