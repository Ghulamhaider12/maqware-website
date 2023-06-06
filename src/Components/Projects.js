import React from "react";
import { Link } from "react-router-dom";
import assetImages from "../Assets/images/image";
import { styles } from "../Utils/styles/styles";
import Button from "./Button";

const Projects = ({ rightAlign, ShiftERP }) => {
  return (
    <div>
      {/* Content-Right-Align */}
      {rightAlign === true && (
        <div className="main-container flex  items-center pt-5">
          <div className="w-2/6 flex items-center ">
            <div
              className="-rotate-90 xl:text-[58px] lg:text-[48px] md:text-[28px] relative xl:-ml-36 lg:-ml-[7.5rem] md:-ml-[4.3rem]"
              style={styles.ReversePorject}
            >
              <p className="">STATUSNOW</p>
            </div>
            <div className="flex flex-col gap-10 lg:-mt-[40px] -mt-10">
              <p
                style={styles.StatusNow}
                className="xl:text-[20px] lg:text-[16px]"
              >
                STATUSNOW
              </p>
              <div
                style={styles.StatusNowPara}
                className="2xl:text-[28px] lg:text-[24px]"
              >
                <p>Vendor</p>
                <p>Management</p>
                <p>Platform</p>
              </div>
            </div>
          </div>
          <div className="w-4/6">
            <div className="flex justify-between items-center ">
              <div
                className="2xl:text-[18px] xl:text-[16px] w-1/2 lg:text-[13px] md:text-[11px] lg:-mt-3 "
                style={styles.formanchor}
              >
                <p>
                  Maqware Solutions transformed StatusNow, an app for managing
                  personal and professional availability, into a powerful
                  resource management tool for large organizations.
                </p>
                <p>
                  It now features real-time location, resource-sharing, chat,
                  multi-organization and branch usage, rule creation and
                  unlimited user profiles. It's used by organizations like Bags.
                  inc to balance conflicting priorities and maximize
                  productivity.
                </p>
                <div className="lg:mt-5 mt-1">
                  <Link to="/StatusNow">
                    <Button
                      fontSize={
                        "xl:text-[14px] lg:text-[12px] 2xl:text-[16px] md:text-[10px]"
                      }
                      height={"xl:h-[42px] 2xl:h-10 lg:h-[40px] md:h-[30px]"}
                      width={
                        "2xl:w-[150px] lg:w-[135px] md:w-[90px] xl:w-[140px]"
                      }
                      title={"Case Study"}
                    />
                  </Link>
                </div>
              </div>
              <img
                src={assetImages.portfolioLaptop}
                alt="laptop-img"
                className="object-fill xl:h-[500px] lg:h-[420px] 2xl:h-[655px] w-full md:max-w-[50%] -mt-2 lg:mt-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* Content-left-align*/}
      {rightAlign === false && (
        <div className="main-container flex my-10 items-center ">
          <div className="w-4/6">
            <div className="flex justify-between items-center">
              <img
                src={assetImages.LuxeLockerLaptop}
                alt="laptop-img"
                className="object-fill xl:h-[500px] lg:h-[420px] 2xl:h-[655px]  w-full md:max-w-[50%]"
              />
              <div
                className="w-1/2 2xl:text-[18px] xl:text-[16px] lg:text-[13px] md:text-[11px] lg:-mt-3"
                style={styles.formanchor}
              >
                <p>
                  Maqware Solutions helped Luxelocker develop a mobile app and
                  admin dashboard for easy user management, overcoming
                  challenges like cloud maintenance, API integration, payments,
                  subscriptions, and e-agreements by implementing features such
                  as cloud-based dashboard and mobile app, Stripe payments and
                  SignNow e-agreements, resulting in improved client
                  satisfaction and retention.
                </p>
                <div className="lg:mt-5 mt-1">
                  <Link to="/luxe-locker">
                    <Button
                      fontSize={
                        "xl:text-[14px] lg:text-[12px] 2xl:text-[16px] md:text-[10px]"
                      }
                      height={"xl:h-[42px] 2xl:h-10 lg:h-[40px] md:h-[30px]"}
                      width={
                        "2xl:w-[150px] lg:w-[135px] md:w-[90px] xl:w-[140px]"
                      }
                      title={"Case Study"}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/6 flex items-center justify-end">
            <div className="flex flex-col gap-10 lg:-mt-[40px] -mt-10 -mr-10">
              <p
                style={styles.StatusNow}
                className="xl:text-[18px] lg:text-[16px]"
              >
                LUXELOCKER
              </p>
              <div
                style={styles.StatusNowPara}
                className="2xl:text-[28px] lg:text-[24px]"
              >
                <p>Vendor</p>
                <p>Management</p>
                <p>Platform</p>
              </div>
            </div>
            <div
              className="-rotate-90 xl:text-[58px] lg:text-[48px] md:text-[28px] relative lg:-mr-[7.5rem] xl:-mr-[9.2rem] md:-mr-[4.3rem]"
              style={styles.ReversePorject}
            >
              <p className="">LUXELOCKER</p>
            </div>
          </div>
        </div>
      )}

      {ShiftERP === true && (
        <div className="main-container flex  items-center py-0">
          <div className="w-2/6 flex items-center ">
            <div
              className="-rotate-90 xl:text-[58px] lg:text-[48px] md:text-[28px] relative xl:-ml-[6.7rem] lg:-ml-[5.6rem] md:-ml-[3.1rem]"
              style={styles.ReversePorject}
            >
              <p className="">SHIFTERP</p>
            </div>
            <div className="flex flex-col gap-10 lg:-mt-[40px] -mt-10 ">
              <p
                style={styles.StatusNow}
                className="xl:text-[20px] lg:text-[16px]"
              >
                SHIFTERP
              </p>
              <div
                style={styles.StatusNowPara}
                className="2xl:text-[28px] lg:text-[24px]"
              >
                <p>Vendor</p>
                <p>Management</p>
                <p>Platform</p>
              </div>
            </div>
          </div>
          <div className="w-4/6">
            <div className="flex justify-between items-center ">
              <div
                className="2xl:text-[18px] xl:text-[16px] w-1/2 lg:text-[13px] md:text-[11px] lg:-mt-3"
                style={styles.formanchor}
              >
                <p>
                  Shift ERP, a custom ERP solution, streamlines operations and
                  improves efficiency for manufacturing companies.
                </p>
                <p>
                  Our team tailored the solution to fit the client's unique
                  needs. Shift ERP automated production processes and provided
                  real-time data tracking and reporting, allowing better
                  decision making. This custom solution is a demonstration of
                  our ability to deliver results for clients.
                </p>
                <div className="lg:mt-5 mt-1">
                  <Button
                    fontSize={
                      "xl:text-[14px] lg:text-[12px] 2xl:text-[16px] md:text-[10px]"
                    }
                    height={"xl:h-[42px] 2xl:h-10 lg:h-[40px] md:h-[30px]"}
                    width={
                      "2xl:w-[150px] lg:w-[135px] md:w-[90px] xl:w-[140px]"
                    }
                    title={"Case Study"}
                  />
                </div>
              </div>
              <img
                src={assetImages.ShiftERP}
                alt="laptop-img"
                className="object-fill xl:h-[500px] lg:h-[420px] 2xl:h-[655px] w-full md:max-w-[50%]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
