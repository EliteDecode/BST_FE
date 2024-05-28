import React from "react";
import Title from "../general/Title";
import { Box, Typography } from "@mui/material";
import { Button } from "antd";

const CyberSecurity = () => {
  const whatYouLearnCyber = [
    {
      title: "Foundational Cyber Security",
      list: [
        "Network Security: Grasp core network security concepts like firewalls, intrusion detection/prevention systems (IDS/IPS), and secure network protocols.",
        "System Security: Learn about operating system hardening, vulnerability management, and application security best practices.",
        "Cryptography: Explore encryption and decryption techniques used to protect data confidentiality and integrity.",
      ],
    },
    {
      title: "Threat Analysis & Detection",
      list: [
        "Cybersecurity Threats & Landscapes: Gain in-depth knowledge of various cyber threats, including malware, phishing attacks, social engineering, and zero-day exploits.",
        "Incident Response: Understand the incident response lifecycle, including detection, containment, eradication, and recovery procedures.",
        "Traditional Threat Detection Techniques: Master signature-based and anomaly-based intrusion detection systems used for threat identification.",
      ],
    },
    {
      title: "Machine Learning & AI for Cyber Security",
      list: [
        "Introduction to Machine Learning: Learn fundamental ML concepts like supervised and unsupervised learning, essential for understanding AI applications in security.",
        "Anomaly Detection with Machine Learning: Explore how AI can be used to detect anomalies in network traffic and system behavior, potentially indicating cyber threats.",
        "Machine Learning for Threat Analysis: Learn how to leverage ML algorithms to classify and prioritize cyber threats based on historical data and real-time network activity.",
        "AI-powered Security Automation: Discover how AI can automate security tasks like threat hunting, incident response, and vulnerability scanning, improving efficiency.",
      ],
    },
    {
      title: "Implementing ML & AI for Cyber Security Projects",
      list: [
        "Security Data Engineering: Learn how to prepare and pre-process security data for effective use with ML and AI models.",
        "Feature Engineering for Cyber Security: Develop skills to extract relevant features from data to enhance the performance of ML models in a security context.",
        "Building & Deploying ML Models for Cyber Security: Gain hands-on experience building and deploying ML models for tasks like network anomaly detection and malware classification.",
      ],
    },
    {
      title: "The Future of AI-powered Security",
      list: [
        "Ethical Considerations: Explore the ethical implications of using AI in cyber security, such as bias and explainability of AI decisions.",
        "Emerging Trends: Stay ahead of the curve by learning about the latest advancements in AI-powered security solutions and their potential impact on the cyber security landscape.",
      ],
    },
  ];

  return (
    <div>
      <Typography
        className="text-[16px] font-semibold"
        sx={{ fontSize: "16px", fontFamily: "Raleway", lineHeight: "1.8rem" }}>
        Empower yourself with the cutting-edge skills to become a champion of
        the digital frontier in our Advanced Cyber Security with Machine
        Learning & AI program. <br /> <br /> This intensive 1-year course equips
        you to defend the next generation of technology with a powerful arsenal
        of skills. We go beyond technical expertise. Our program ignites your
        critical thinking, vigilance, and teamwork skills, qualities coveted by
        top employers in the ever-evolving cyber security landscape. Spots are
        limited. <br /> <br /> Don't miss your chance to become a leader in the
        fight against cyber threats. Enroll today! In this intensive program,
        you'll gain a comprehensive understanding of cyber security principles
        while exploring cutting-edge techniques that utilize ML and AI for
        proactive defense.
      </Typography>
      <Typography
        className="text-[16px] font-black "
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: 3,
          fontFamily: "Raleway",
          lineHeight: "1.8rem",
        }}>
        <span className="text-red-600">(*)</span> Low budget accommodation is
        also available.
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "Bold",
          color: "#000066",
          fontFamily: "Raleway",

          fontWeight: "Bold",
          marginTop: "1%",

          "@media (max-width:767px)": {
            fontSize: "25px",
          },
        }}>
        What You'll Learn
      </Typography>
      <p>Here's a breakdown of the key areas you'll conquer:</p>
      <div className="">
        <div className="mx-auto max-w-screen-xl  py-8  lg:py-16">
          <div className="space-y-8 lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
            {whatYouLearnCyber.map((item, index) => (
              <div
                className={`mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl border border-gray-200 bg-white p-6 text-gray-900 xl:p-8`}
                key={index}>
                <h3 className={`text-3xl font-bold `}>0{index + 1}.</h3>

                <a
                  className={`cursor-pointer bg-gray-900 text-white
                    w-full rounded-md p-3  text-sm font-semibold shadow-sm hover:-translate-y-1`}>
                  {item.title}
                </a>
                <ul
                  role="list"
                  className="mb-8 space-y-4 text-left text-gray-600 text-sm">
                  {item.list.map((point, index2) => (
                    <li className="flex items-center space-x-3" key={index2}>
                      <svg
                        className={`h-5 w-5 flex-shrink-0 bg-gray-900 text-white rounded-full p-0.5 `}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"></path>
                      </svg>
                      <span className="text-[11px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button className="mt-5 text-white bg-[#000066]">
        Click Here to Apply Now
      </Button>
    </div>
  );
};

export default CyberSecurity;
