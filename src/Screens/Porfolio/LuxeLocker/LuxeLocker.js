import React from "react";
import assetImages from "../../../Assets/images/image";
import { styles } from "../../../Utils/styles/styles";
import ContactSection from "../../Home/ContactSection/ContactSection";

const LuxeLocker = () => {
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col gap-5 overflow-x-hidden">
      <div className="text-white flex flex-col gap-8">
        <p
          className="text-[2rem] lg:text-[3rem] xl:text-[3.7rem] mb-4"
          style={styles.maintext}
        >
          Luxelocker Case Study <b className="text-[#55C5CE]">|</b>
        </p>
        <p
          className=" 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[12px]"
          style={styles.Ourleadertext}
        >
          Storage-as-an-investment service provider, the idea didn't remain
          confined to just an app, Team{" "}
          <a
            href="https://luxelocker.com/"
            className="hover:underline text-secondary"
            target="blank"
          >
            luxelocker
          </a>{" "}
          wanted to make booking and managing units handy and user-oriented.
          Moreover, the giant sought to make user management feasible for
          administrators. To pull it off, we knew we needed a mobile application
          for end-users and a dashboard for administrators, then integrate them
          so that, when someone registers, admins can automatically manage them.
        </p>
        <p
          className=" 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[12px]"
          style={styles.Ourleadertext}
        >
          Luxelocker collaborated with{" "}
          <a href="/" className="hover:underline text-secondary">
            Maqware Solutions
          </a>{" "}
          to develop an outright digital switch, offering a seamless yet secure
          user experience and a backend dashboard for managing both local and
          offshore teams, and users simultaneously. After several meetings with
          stakeholders, the concerns were quite evident;
        </p>
      </div>

      <div className="flex">
        <div
          className="w-4/6 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[12px] flex flex-col gap-8"
          style={styles.Ourleadertext}
        >
          <ul className="list-disc ml-8">
            <li>System wasn't inline with the competitors</li>
            <li>Outdated Business</li>
            <li>Inability to track users</li>
            <li>No access log of users</li>
            <li>Had no mobile app</li>
            <li>No customer management system</li>
          </ul>
          <p>
            Our teams started strategizing with the stakeholders to address
            these pain spots. In line with the blueprints provided by the
            stakeholders, we started building the app and dashboard
            simultaneously.
          </p>

          <p>
            Teams had to develop a multi-hierarchical dashboard that's easy to
            navigate yet supports the required features to fulfill the
            requirements. Additionally, the app must be integrated into the
            dashboard to keep the admins informed of the activities of users.
            Also, we had to suggest multiple 3rd-party Software Development Kits
            (SDK’s) integration and testing.
          </p>

          <p>
            Our concerns centered on delivering this massive project within
            confined time constraints. To name a few challenges:
          </p>
          <ul className="list-disc ml-8 ">
            <li>Maintaining the project on cloud</li>
            <li>Integrating APIs </li>
            <li>Adding payment methods </li>
            <li>Ensuring smooth payments and subscriptions </li>
            <li>Annexing e-agreements</li>
          </ul>
        </div>
        <div className="w-2/6 overflow-hidden flex justify-end">
          <div className="w-80">
            <img
              src={assetImages.LuxeLockerMobile}
              alt="LuxeLockerMobile"
              className="object-fill "
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-2/6 overflow-hidden flex justify-start ">
          <div className="w-80 lg:-ml-6 -mt-4 lg:-mt-5 ">
            <img
              src={assetImages.LuxeLockerMobile2}
              alt="LuxeLockerMobile"
              className=" "
            />
          </div>
        </div>
        <div
          className="w-4/6 2xl:text-[24px] xl:text-[22px] lg:text-[18px] md:text-[12px] flex flex-col gap-6"
          style={styles.Ourleadertext}
        >
          <p>
            Working with a totally remote team raised some concerns for Team
            Luxelocker, but those reservations subsided as we started delivering
            sprints as planned. Their team recognized the long-term potential
            advantages of working with a team that functioned as if it were
            their own.
          </p>

          <p>
            Given that multiple teams were collaborating on the project, we
            tackled the challenges head-on and made sure that the entire thing
            was delivered as planned, along with adding a variety of features to
            expand its worth.
          </p>

          <div>
            Our team ingeniously transformed issues into features such as:
            <ul className="list-disc ml-6 py-4">
              <li className="my-3">
                Maintaining both the dashboard and mobile app on cloud to do
                away with local servers{" "}
              </li>
              <li className="my-3">
                Using a reliable platform, like{" "}
                <a
                  href="https://stripe.com/"
                  className="hover:underline text-secondary"
                  target="blank"
                >
                  Stripe,
                </a>{" "}
                to make and receive payments easily and securely{" "}
              </li>
              <li className="my-3">
                Utilising{" "}
                <a
                  href="https://www.signnow.com/?gspk=c2VtYW50aWNsYWJz&gsxid=BAhVRNK1fO0m&sid=1-g-Cj0KCQiAn4SeBhCwARIsANeF9DJr-33gWFahKrf9GOhmX-1NefjUn6IutV3tuwDJHohTiUHG0x_k-ngaAuwpEALw_wcB"
                  className="hover:underline text-secondary"
                  target="blank"
                >
                  SignNow
                </a>{" "}
                to digitally sign e-agreements{" "}
              </li>
              <li className="my-3">
                Interactive map development with precise locations and amenities{" "}
              </li>
              <li className="my-3">
                Accessibility of hardware and security cameras to provide
                comfort and control{" "}
              </li>
              <li className="my-3">
                Effortless development of new campuses and automatic display to
                users whilst navigating on their apps
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <h1
          className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] mb-3"
          style={styles.aboutUsHeading}
        >
          User Flow
        </h1>
        <div className="">
          <div className="flex ml-5 xl:ml-4 2xl:ml-8  w-[90%] mx-auto">
            <img
              src={assetImages.Flowchart}
              alt="flowchart"
              className=" h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="pb-3">
        <div
          className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[12px] flex flex-col gap-4"
          style={styles.Ourleadertext}
        >
          <p>
            It's our usual practice to consider our clients' projects as if they
            were our own. Our experts offer advice on the finest industry
            standards, best practices, and cutting-edge technologies at every
            stage of development. Thus, we have already planned out a few
            features for potential future opportunities. Just to name a few:
          </p>
          <ul className="list-disc ml-8">
            <li>
              Fragmentation doing Module deployment will allow other services to
              continue operating normally if a problem arises with one of the
              products.
            </li>
            <li>
              {" "}
              Adding functionality to the dashboard to prevent interaction with
              third parties like{" "}
              <a
                href="https://www.salesmate.io/"
                className="hover:underline text-secondary"
                target="blank"
              >
                Salesmate
              </a>{" "}
            </li>
            <li>
              {" "}
              Adding in-app chat capabilities will allow suppliers, vendors,
              users, and administrators to stay informed about the status of
              units.
            </li>
          </ul>
          <p>
            Now, half a year later, the Luxelocker team is ecstatic to have
            customized digital solutions that are simple to use and navigate and
            have enhanced client satisfaction and retention.
          </p>
        </div>
        <div className=" ">
          <img
            src={assetImages.LuxeLockerDesktop}
            alt="LuxeLockerDesktop"
            className="object-fill h-full w-full"
          />
        </div>
        <div
          className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[12px] flex flex-col gap-4"
          style={styles.Ourleadertext}
        >
          <p>
            {" "}
            Do you also wish to run your business smoothly by automating your
            business processes?
          </p>
          <p>
            Write an email to <br />{" "}
            <a
              href="mailto:hussan.ara@maqware.com"
              className="hover:underline text-secondary"
              target="blank"
            >
              hussan.ara@maqware.com
            </a>{" "}
          </p>
          <p>Or have a quick call. To schedule simply click the link</p>
          <a
            href="https://go.oncehub.com/HussanAra"
            target="blank"
            className="hover:underline text-secondary"
          >
            https://go.oncehub.com/HussanAra
          </a>{" "}
          <p>On the call you will find out:</p>
          <ul className="list-disc ml-8">
            <li className="my-3">
              How can you make your business more efficient using all the new
              technologies
            </li>
            <li className="my-3">
              How clients, customers, users, or employees can be managed
              effectively
            </li>
            <li className="my-3">
              If you want to increase your revenue, what solution suits you best
              with the lowest costs
            </li>
            <li className="my-3">
              Each step that you will require to get amazing revenue and
              results, just like StatusNow
            </li>
          </ul>
          <p className="pt-8">
            HussanAra, <br />
            Business Development Manager <br />
            Maqware Solutions
          </p>
          <p className="pt-5">
            About the author:
            <br /> Hussan Ara is a creative spirit with a flair for writing
            content that is well perceived by the audience. She writes about
            various subjects, with tech studies
            <br /> and the latest trends being her ultimate favorites.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default LuxeLocker;
