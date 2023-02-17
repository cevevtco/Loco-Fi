import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <div
        className="bg-gray-900 dark:bg-gray-100  p-10 animate-slideup "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="flex justify-between items-center sm:flex-row flex-col  text-3xl font-bold text-center text-[#f97f10] mb-10 font-['poppins']">
          Privacy Policy
        </h1>
        <p className="text-lg text-white dark:text-black leading-relaxed mb-10">
          At Loco-Fi, we are committed to protecting the privacy of our users.
          This Privacy Policy outlines the types of information we collect, how
          we use it, and how we keep it safe. Our goal is to provide you with a
          safe and secure experience while using our services.
        </p>
        <h2 className="text-2xl font-bold text-white dark:text-black mb-10">
          Information We Collect
        </h2>
        <p className="text-lg text-white dark:text-black leading-relaxed mb-10">
          We collect information such as your name, email address, and usage
          data when you sign up for our services. We may also collect
          information about how you use our services through the use of cookies
          and other technologies. This information is used to provide and
          improve our services, to communicate with you, and to personalize your
          experience.
        </p>
        <h2 className="text-2xl font-bold text-white dark:text-black mb-10">
          How We Use Your Information
        </h2>
        <p className="text-lg text-white dark:text-black leading-relaxed mb-10">
          We use your information to provide and improve our services, to
          communicate with you, and to personalize your experience. We may use
          your information to send you promotional messages, updates, and news
          about our services. We may also use your information for research and
          analytics purposes, to improve our products and services, and to
          personalize your experience. We may share your information with
          third-party partners for advertising and marketing purposes. However,
          we will always obtain your consent before sharing your information
          with third parties for any purpose other than providing our services
          to you.
        </p>
        <h2 className="text-2xl font-bold text-white dark:text-black mb-10">
          How We Protect Your Information
        </h2>
        <p className="text-lg text-white dark:text-black leading-relaxed mb-10">
          We take the security of your information very seriously and have
          implemented technical, administrative, and physical security measures
          to protect your information from unauthorized access, use, or
          disclosure. We regularly review and update these measures to ensure
          the continued protection of your information.
        </p>
        <h2 className="text-2xl font-bold text-white dark:text-black mb-10">
          Changes to Our Privacy Policy
        </h2>
        <p className="text-lg text-white dark:text-black leading-relaxed mb-10">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or to comply with legal requirements. We will notify
          you of any material changes to this Privacy Policy by posting the
          updated policy on our website and updating the “Last Updated” date at
          the top of this page. We encourage you to periodically review this
          Privacy Policy to stay informed about how we are protecting the
          information we collect.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
