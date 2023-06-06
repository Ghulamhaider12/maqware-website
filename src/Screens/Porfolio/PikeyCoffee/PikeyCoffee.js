import React from "react";
import assetImages from "../../../Assets/images/image";
import { styles } from "../../../Utils/styles/styles";
import ContactSection from "../../Home/ContactSection/ContactSection";
import PikeyCoffeeComp from "./PikeyCoffeeComp";
import ProjectPlanningComp from "./ProjectPlanningComp";
import SketchingComp from "./SketchingComp";
import UserJourneyComp from "./UserJourneyComp";

const PikeyCoffee = () => {
  const cards = [
    {
      heading: "Fast Ordering",
      text: "Users can choose their desired menu & make a quick order",
    },
    {
      heading: "Information",
      text: "Description about each menu item results in quick decision",
    },
    {
      heading: "Payment options",
      text: "Cash on delivery & in-app payment, both options are available",
    },
    {
      heading: "Order confirmation",
      text: "Confirmation screen within checkout flow allows users to easily modify their order",
    },
    {
      heading: "Outlets location",
      text: "Minimap shows the nearest location",
    },
    {
      heading: "No-queuing",
      text: "Ordering via app saves time in ques",
    },
  ];
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col gap-5 overflow-x-hidden">
      <div className="text-white flex flex-col gap-2">
        <p
          className="text-[2rem] lg:text-[3rem] xl:text-[3.7rem] mb-4"
          style={styles.maintext}
        >
          Pikey Coffee - A Beverage App <b className="text-[#55C5CE]">|</b>
        </p>
        <p
          className=" 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[12px]"
          style={styles.Ourleadertext}
        >
          Pikey Coffee Co. Mobile app was designed for potential customers who
          love to consume handmade coffee but are short on time. Since consumers
          have time constraints when it comes to waiting daily for the brewing
          process to enjoy a cup of their favorite beverage, an app could save
          time. The objective of creating a Mobile App was to allow customers of
          Pikey Coffee in Los Vegas to easily view and order beverage and food
          menu items in advance, and get them delivered to their homes or
          offices, saving time.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p
          className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] mb-4"
          style={styles.aboutUsHeading}
        >
          The Story of the Cafe
        </p>
        <p
          className=" 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
          style={styles.Ourleadertext}
        >
          The Couple Phil & Erin Shipley, Initiated this coffee venture paying
          homage to the Traveller community of the United Kingdom which is home
          to Phil, he wanted to bring their love of motorcycles, something he
          shares, and delicious coffee to Vegas which was his first United
          States home.
        </p>
        <p
          className="flex justify-center gap-1 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
          style={styles.caseStudyBlue}
        >
          “Vegas has a special significance for us,”
          <span
            style={styles.Ourleadertext}
            className="2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
          >
            Erin said.
          </span>
        </p>
        <p
          className="flex justify-center 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
          style={styles.Ourleadertext}
        >
          The city was Phil’s first stateside home, and his moving to Vegas led
          to a course of events that brought the couple together. Pikey Coffee
          is a very classy-by-itself kind of Cafe and has brought a very
          different, unique British feel with it. The owners figured, customers
          have time constraints and not everybody can come in daily even if they
          love the taste. There has to be some digital solution in these
          fast-track lives to cater to those consumers. And what could be better
          than their own menu-ordering App! <br /> Team Maqware understood the
          problem and carved a solution that was in line with the couple’s
          business strategy and the solution promised to ease their upcoming
          issues too. They could expand their customer base, make regular
          customers and reward loyal ones.
        </p>
      </div>
      <div className="">
        <img
          src={assetImages.PIKEYCOFFEEInterior}
          alt="PIKEYCOFFEEInterior.png"
          className=""
        />
      </div>

      {/* The Challenge */}
      <div className="flex flex-col gap-3 ">
        <p
          className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] mb-4"
          style={styles.aboutUsHeading}
        >
          The Challenge
        </p>
        <p
          className=" 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
          style={styles.Ourleadertext}
        >
          We were given the following prompt at the beginning stage of this
          project.
        </p>
        <p
          className="flex justify-center gap-1 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
          style={styles.caseStudyBlue}
        >
          Design a Food - Beverage ordering Mobile app for Pikey Coffee Co.
        </p>
      </div>

      {/* The Problem */}
      <div className="flex flex-col gap-3">
        <p
          className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] mb-4"
          style={styles.aboutUsHeading}
        >
          The Problem
        </p>

        <div className="flex ">
          <div
            className=" 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px] md:flex md:flex-1 "
            style={styles.Ourleadertext}
          >
            {" "}
            <div className="flex flex-col xl:gap-4 gap-4">
              <p>
                Consumer buying behavior is continually evolving, more and more
                in favor of ordering food from restaurants and fast food chains
                via mobile devices.
              </p>
              <p>
                Given the abundance of meal delivery services like UberEats,
                Deliveroo, and Postmates, hungry customers now have a huge
                variety of options with quick and efficient delivery or pickup.
              </p>
              <p>
                In addition, the star product coffee is not something people
                consume sometimes, for many, a hot cup of their desired coffee
                is an essential part of their morning routine. Hence has to be
                ordered daily. Therefore, the problem statement:
              </p>
              <p>
                How can Pikey Coffee offer a mobile ordering solution to
                customers which improves customer satisfaction, and loyalty and
                allows it to compete with large competitors and food delivery
                apps?
              </p>
            </div>
          </div>
          <div className="md:flex-1 md:flex justify-end -mt-10 md:visible xs:hidden ">
            <div className="flex flex-col ">
              <p
                className=" text-[1.3rem] lg:text-[1.5rem] xl:text-[2rem] mb-4"
                style={styles.aboutUsHeading}
              >
                Problems to Solve
              </p>
              <div className="flex gap-2">
                <span className="h-8 w-1 bg-primary"></span>
                <p
                  className=" 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[12px] flex flex-1 w-80 "
                  style={styles.Ourleadertext}
                >
                  After the research and analysis phases were completed, we
                  decided for the solution to be a mobile app that would allow
                  users to order in advance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Bensfits */}
        <div className="my-10">
          <p
            className="text-center 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
            style={styles.cardtext_heading}
          >
            Here are some of the key benefits of using this overall solution
            <br /> within this use case:
          </p>
          <div className="grid grid-cols-3 grid-rows-2 my-6 overflow-hidden lg:gap-5 gap-2">
            {cards.map((el, idx) => (
              <PikeyCoffeeComp key={idx} heading={el.heading} text={el.text} />
            ))}
          </div>
        </div>

        {/* User Journey Map */}
        <div className="flex flex-col gap-10 ">
          <div>
            <p
              className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] mb-4"
              style={styles.aboutUsHeading}
            >
              User Journey Map
            </p>
            <p
              className=" 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
              style={styles.Ourleadertext}
            >
              After researching about potential customers, building the personas
              and user stories, a user journey map was created:
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <UserJourneyComp
              heading={"Action"}
              list1={"Task List"}
              list2={"Feeling Adjective"}
              list3={"Improvement Opportunities"}
            />
            <span className="h-[1px] w-full bg-[#262626]"></span>
            <UserJourneyComp
              heading={"Get App"}
              list1={"Download the app Create account Email verification"}
              list2={"Curious about type of available beverages and food menu"}
              list3={
                "Chat bot suggesting combos on basis of previous orders Offering order credit for referring app"
              }
            />
            <span className="h-[1px] w-full bg-[#262626]"></span>
            <UserJourneyComp
              heading={"Decide Order"}
              list1={
                "View prices, sizes & available options & combos Select desired item(s)"
              }
              list2={
                "Unsure about which item to order Detailed description & customer reviews helps in decision making"
              }
              list3={
                "Include options to turn on disability mode UI filters for accessibility Order combo saved for future suggestion"
              }
            />
            <span className="h-[1px] w-full bg-[#262626]"></span>
            <UserJourneyComp
              heading={"Pay"}
              list1={
                "Choose delivery or pick-up Pick a payment method Enter card details for selected option"
              }
              list2={"Can have exact delivery / pickup time"}
              list3={
                "Discount codes Reward points encashment Weekly payment of regular order"
              }
            />
            <span className="h-[1px] w-full bg-[#262626]"></span>
            <UserJourneyComp
              heading={"View Confirmation"}
              list1={"Check app & email for receipt"}
              list2={"Happy the order went through correctly"}
              list3={"Enabling of chat with rider option"}
            />
            <span className="h-[1px] w-full bg-[#262626]"></span>
            <UserJourneyComp
              heading={"Collect Order"}
              list1={"Order Collection"}
              list2={
                "Excited to check out the order Relieved to save time Reward points added"
              }
              list3={
                "Discount codes Packages for regular customers Free beverage/food item with next order after specific points"
              }
            />
          </div>
        </div>

        {/* Project Planning */}

        <div className="flex flex-col gap-10 ">
          <div>
            <p
              className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] mb-4"
              style={styles.aboutUsHeading}
            >
              Project Planning{" "}
              <span className=" text-[1.3rem] lg:text-[1.4rem] xl:text-[1.7rem]">
                (PikeyCoffee App Development Process)
              </span>
            </p>
            <p
              className=" 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
              style={styles.Ourleadertext}
            >
              All the stakeholders mainly divided the project into the following
              phases:
            </p>
          </div>
          <div className="flex w-full gap-5 lg:my-4 my-2">
            <div className="w-1/4">
              <ProjectPlanningComp
                heading={"Phase |"}
                l1={"Sketching"}
                l2={"Wireframing"}
                l3={"Designing"}
                l4={"Prototyping"}
                l5={"Revisions"}
                l6={"Approval"}
              />
            </div>
            <div className="w-1/4">
              <ProjectPlanningComp
                heading={"Phase ||"}
                l1={"Scrum"}
                l2={"Coding & Development"}
                l3={"API’s Integration"}
                l4={"Payment methods Integration"}
                l5={"Permissions"}
              />
            </div>
            <div className="w-1/4">
              <ProjectPlanningComp
                heading={"Phase |||"}
                l1={"Product Testing"}
                l2={"User Acceptance Testing"}
              />
            </div>
            <div className="w-1/4">
              <ProjectPlanningComp
                heading={"Phase |V"}
                l1={"Approvals"}
                l2={"Launch"}
                l3={"Maintenance"}
              />
            </div>
          </div>
        </div>

        {/* Sketching */}
        <div className="flex flex-col gap-4">
          <div>
            <SketchingComp
              heading={"Sketching"}
              text={
                "Our UX/UI designer, working closely with the scrum master and developers, sketched big-picture storyboards and close-up storyboards."
              }
              img={assetImages.SketchPikey}
            />
          </div>
          <div>
            <SketchingComp
              heading={"Wireframing"}
              text={
                "In the pre-design phase, wireframing is the first step in digitalizing ideas. It visually explained how the product will look like."
              }
              img={assetImages.Wireframes}
            />
          </div>
          <div>
            <SketchingComp
              heading={"Designing"}
              text={
                "Right after aligning the client side, our team came up with 3 design concepts, one with a lighter background, one with darker, and another with black. The client opted for the black one and picked some of the elements from other designs."
              }
              img={assetImages.PikeyMOCKUP}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-4">
          {/* Revisions and approvals */}
          <div className="flex flex-col lg:gap-2 gap-1 ">
            <p
              className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] "
              style={styles.aboutUsHeading}
            >
              Revisions and approvals
            </p>
            <p
              className=" 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
              style={styles.Ourleadertext}
            >
              The design phase is not a unidirectional thing, it's more of a
              process that requires multiple revisions for continuous
              improvements and client approvals at each milestone. After the
              prototype was approved by the client team, it is forwarded to the
              engineers.
            </p>
          </div>

          {/* Scrum */}
          <div className="flex flex-col lg:gap-2 gap-1 ">
            <p
              className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] "
              style={styles.aboutUsHeading}
            >
              Scrum
            </p>
            <p
              className=" 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
              style={styles.Ourleadertext}
            >
              Scrum master, taking in the loop all the SQAs and developers, then
              organized sprints and user stories on Jira.
            </p>
          </div>
          {/* Coding and Dev */}
          <div className="flex flex-col lg:gap-2 gap-1 ">
            <p
              className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] "
              style={styles.aboutUsHeading}
            >
              Coding & Development
            </p>
            <p
              className=" 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
              style={styles.Ourleadertext}
            >
              We used Laravel for the backend, XML, and Kotlin for front-end
              development.
            </p>
          </div>

          {/* Testing */}
          <div className="flex flex-col lg:gap-2 gap-1 ">
            <p
              className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] "
              style={styles.aboutUsHeading}
            >
              Testing
            </p>
            <p
              className=" 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
              style={styles.Ourleadertext}
            >
              Our team performs tests on a sprint basis, it goes side by side
              with the development process. After the product was ready from our
              side, it went for user acceptability testing with the client.
            </p>
          </div>

          {/* Launch & Maintenance */}
          <div className="flex flex-col lg:gap-2 gap-1 ">
            <p
              className=" text-[2rem] lg:text-[2.5rem] xl:text-[3rem] "
              style={styles.aboutUsHeading}
            >
              Launch & Maintenance
            </p>
            <p
              className=" 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[12px]"
              style={styles.Ourleadertext}
            >
              Apps require ongoing maintenance, and we routinely introduce new
              features based on demand and usability.
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default PikeyCoffee;
