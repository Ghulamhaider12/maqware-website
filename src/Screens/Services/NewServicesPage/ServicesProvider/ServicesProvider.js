import React from "react";
import assetImages from "../../../../Assets/images/image";
import ServicesProviderComp from "./ServicesProviderComp";

const ServicesProvider = () => {
  return (
    <div>
      <ServicesProviderComp
        heading={"Web Development"}
        serviceId={"webDevelopment"}
        Inverse={true}
        text={
          "We develop simple yet practical software solutions for your Business needs. Whether you want to start your product from scratch, or looking for experts to improve your existing one, contact us to get the most user-oriented solution. Let’s talk to learn more about the developmental life cycle or any particular phase of your product."
        }
        image={assetImages.web}
      />
      <ServicesProviderComp
        heading={"App Development"}
        serviceId={"appDevelopment"}
        Inverse={false}
        text={
          "We employ the latest technologies to develop high-performing, scalable, user-friendly Mobile Apps, leveraging Smartphone’s capabilities. Our mobile app developers are seasoned experts in custom mobile app development. Their dexterity ranges from retail to healthcare, fleet management, hospitality, and marketplace solutions. This culminates in a memorable end-user experience to spur your brand’s growth."
        }
        image={assetImages.app}
      />
      <ServicesProviderComp
        heading={"Blockchain Development"}
        serviceId={"blockchainDevelopment"}
        Inverse={true}
        text={
          "Boost Agility, Transparency and Security with Blockchain. Blockchain is indeed the evolution of technology. We help organizations boost efficiency, flexibility, agility, and security through custom blockchain development services. Our skilled blockchain developers create customized, decentralized apps, increasing the traceability and security of data and transactions."
        }
        image={assetImages.BlockChainBg}
      />
      <ServicesProviderComp
        heading={"Game Development"}
        serviceId={"gameDevelopment"}
        Inverse={false}
        text={
          "With the ever-changing, diverse market, game development is quite competitive. Our team of expert game developers transform your idea into a striking game that makes the audience want to play. We provide top-notch game development services, including 2D and 3D games, AI games, Unreal and Virtual Reality-based games, and cross-platform game development. So interactive that they leave players Hooked."
        }
        image={assetImages.gamedevebg}
      />
      <ServicesProviderComp
        heading={"Digital Marketing"}
        serviceId={"digitalMarketing"}
        Inverse={true}
        text={
          "We are your partners for innovative and impactful Digital Marketing Solutions Aiming to increase your social media presence and generate more business? Look no further; you've come to the right spot! Our digital marketing gurus brilliantly strategize platform-specific campaigns, leveraging features of each social media platform and serving optimized content pieces that target audiences love to consume and that convert."
        }
        image={assetImages.digitalMarketingbg}
      />
      <ServicesProviderComp
        heading={"SEO Services"}
        serviceId={"seoServices"}
        Inverse={false}
        text={
          "We help your business reach the top searches. Our SEO experts have years of experience and a deep understanding of how search engines work. We employ a personalized approach to SEO and customize our strategy to address the unique needs of your brand and industry. To ensure we are achieving the desired outcomes, we track and assess performance and make any required improvements throughout the process."
        }
        image={assetImages.seo}
      />
      <ServicesProviderComp
        heading={"Graphic Design"}
        serviceId={"graphicDesign"}
        Inverse={true}
        text={
          "It’s hard to get noticed in a world of visual noise. We provide highly ingenious graphic design services to help you attain the perfect blend of creativity. Our designers adore challenges and have years of expertise in creating videos, infographics, 3D animations, logos, and much more. You can rely on our expertise to ensure the visuals capture your audience’s attention since good design adds value faster than it adds costs!"
        }
        image={assetImages.graphic}
      />
      <ServicesProviderComp
        heading={"UI/UX Design"}
        serviceId={"uiuxDesign"}
        Inverse={false}
        text={
          "Our team of exceptionally imaginative UI/UX designers understands the brand for what it is, the client, and the end user's behavior to craft delightful experiences that stay with the users.We rely on a human-centered approach to build a magnificent User Interface and a smooth User Experience.We design experiences, not just interfaces"
        }
        image={assetImages.uiux}
      />
      <ServicesProviderComp
        heading={"Cloud Computing"}
        serviceId={"cloudComputing"}
        Inverse={true}
        text={
          "We help augment accessibility with Cloud services. Maqware Solutions builds platforms, integrates, deploys, and optimizes your applications on AWS, Azure, and Google Cloud utilizing DevOps services. We work with all cloud deployment models, including public, private, and hybrid clouds, and makes sure the provision of the optimal mix of cost-effectiveness and control over your resources and data."
        }
        image={assetImages.CloudCompBg}
      />
    </div>
  );
};

export default ServicesProvider;
