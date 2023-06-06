import React from "react";
import { styles } from "../../../Utils/styles/styles";
import ContactSection from "../../Home/ContactSection/ContactSection";
import StatusNowComp from "./StatusNowComp";

const StatusNow = () => {
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col gap-2 xl:gap-5 overflow-x-hidden">
      <div className="text-white" style={styles.mainParagraph}>
        <p className="text-[2rem] lg:text-[3rem] xl:text-[3.7rem] mb-4">
          StatusNow <b className="text-[#55C5CE]">|</b>
        </p>
      </div>

      <div className=" 2xl:text-[22px] xl:text-[20px] lg:text-[15px] md:text-[12px] flex flex-col gap-4 xl:gap-8">
        <p style={styles.Ourleadertext}>
          Have you ever fallen short of manpower for an impromptu task, do you
          often wish your resources to be multi-skilled, but seems like all the
          personnel is always so busy. Is managing your remote employees a real
          pain? Do you desire to know “Who” is doing “What” and “Where”? What if
          you can actually know the exact location and status of your resources,
          What if you can help them upgrade their skills when they are not
          working, What If you can actually utilize their services where you
          need them the most?
        </p>
        <p className="flex justify-center" style={styles.caseStudyBlue}>
          If that sounds like you, you've come to the right place!
        </p>
        <p style={styles.Ourleadertext}>
          <span href="blank" style={styles.caseStudyBlue} className=" ">
            Susan Melnick,
          </span>{" "}
          a local, Minnesota working mom of four, coping with this age of
          excessive connectivity needed a dynamic solution and came up with one,
          an App{" "}
          <a
            href="https://statusnowsolutions.com/"
            target="blank"
            style={styles.caseStudyBlue}
            className="hover:underline "
          >
            StatusNow
          </a>
          .
        </p>
        <p
          className="flex justify-center text-center"
          style={styles.caseStudyBlue}
        >
          “It was a private out-of-office for your phone, and you get to <br />{" "}
          opt who gets your messages/status that you leave.”
        </p>

        <div className="flex flex-col gap-4 xl:gap-8 2xl:text-[22px] xl:text-[20px] lg:text-[15px] md:text-[12px]">
          <p style={styles.Ourleadertext}>
            Susie explained in an interview, If they need to find you they’ll
            get to know where you are, what are you doing and when will you be
            able to get back to them. So they get to decide if it's urgent or
            the thing can wait until availability and can act accordingly. So
            with StatusNow, you can solve a significant problem in your own
            life: managing your personal and professional availability, and
            prioritizing responses and meetings on a daily basis.
          </p>
          <p style={styles.Ourleadertext}>
            Smartphones are ever present in our lives and staying connected 24/7
            can be pretty overwhelming, more so post-covid, you become the slave
            of your phone, and hence you're never fully present in what you're
            doing, you're not in the moment, where you should be right now! You
            have emails to respond to, a family that relies on you, friends that
            require your presence, teams that need assistance, and much more,
            sometimes you just want to put that reset button for an hour or so,
            so you can face all that efficiently right after what you're doing
            and others won't go nuts about your unavailability.
          </p>
          <p style={styles.Ourleadertext}>
            The idea didn't remain confined to just an app, Team{" "}
            <a href="/" className="hover:underline text-primary">
              Maqware
            </a>{" "}
            was onboarded on StatusNow for a comparatively small task and since
            then, has been working as a tech partner. Since 2021, Maqware has
            been able to magnify the app with a burst of custom, valuable
            features. Presently, StatusNow significantly enhances interactions
            and responsiveness to those seeking time and attention by enabling
            team leaders and their staff to maximize productivity and ultimately
            balancing the conflicting priorities of those pulling at their
            attention - consumers, clients, patients, colleagues, personal
            commitments, and so much more. With StatusNow, you can receive a
            comprehensive perspective of your organization and the currently
            available resources with a particular profile to meet clients and
            other vital resourcing objectives.
          </p>
          <p style={styles.Ourleadertext}>
            From a private out-of-office daily life organizing app, StatusNow
            has now advanced to a multi-hierarchical app. Large organizations
            find it extremely challenging to successfully manage all of their
            personnel, leaving resource management a pain point for many. It's
            often observed that resources go to waste due to inefficient
            management, or sometimes certain resources can be utilized somewhere
            else and vice versa. In order to do so, one requires to know the
            exact status of their resources or employees and StatusNow just
            provides a solution for that. We as tech enthusiasts have enabled
            StatusNow to feature
          </p>
        </div>
      </div>
      <div className="flex justify-evenly my-8">
        <StatusNowComp
          text1={"Availability based "}
          text2={"Real-time location"}
          number={"01"}
        />
        <StatusNowComp
          text1={"Resource-shared  "}
          text2={"location based Map"}
          text3={"views"}
          number={"02"}
          flexcolreverse={"flex-col-reverse"}
        />
        <StatusNowComp text1={"Chat"} text2={"Accessibility"} number={"03"} />
        <StatusNowComp
          text1={"Rule"}
          text2={"creation"}
          text3={"for admins"}
          number={"04"}
          flexcolreverse={"flex-col-reverse"}
        />
        <StatusNowComp
          text1={"An unlimited users/ employees’ "}
          text2={"profiles creation"}
          number={"05"}
        />
      </div>
      <div
        className="flex flex-col gap-2 xl:gap-4 2xl:text-[22px] xl:text-[20px] lg:text-[15px] md:text-[12px]"
        style={styles.Ourleadertext}
      >
        <p>
          At first, Team StatusNow was a little skeptical about a remote team,
          in another country, miles apart, and hence they started with us with a
          basic web portal. Ever since we've been working together. StatusNow
          was able to comprehend long-term value with a team whose vision
          conceded with theirs and a team who's not just a vendor but a
          consultant and a partner.
          <br />
          And, just a year later, StatusNow is now being used in organizations
          like Bags. inc and will assist more businesses in the upcoming years.
        </p>
        <p className="xl:mt-8 mt-4">
          Do you also wish to run your business smoothly by automating
          processes?
        </p>
        <p>
          Write an email to
          {/* hussan.ara@maqware.com */}
        </p>
        <a
          href="mailto:hussan.ara@maqware.com"
          className="hover:underline text-primary"
          target="blank"
        >
          hussan.ara@maqware.com
        </a>{" "}
        <p className="flex gap-1">
          Or have a quick call. To schedule simply click the link
          <a
            href="https://go.oncehub.com/HussanAra"
            target="blank"
            className="underline hover:text-primary"
          >
            https://go.oncehub.com/HussanAra
          </a>
        </p>
        <p>On the call you will find out:</p>
        <ul className="list-disc ml-8">
          <li>
            How can you make your business more efficient using all the new
            technologies
          </li>
          <li>
            How clients, customers, users, or employees can be managed
            effectively
          </li>
          <li>
            If you want to increase your revenue, what solution suits you best
            with the lowest cost
          </li>
          <li>
            Each step that you will require to get amazing revenue and results,
            just like StatusNow
          </li>
        </ul>
        <p>
          Hussan Ara, <br />
          Business Development Manager <br />
          Maqware Solutions
        </p>
      </div>
      <ContactSection />
    </div>
  );
};

export default StatusNow;
