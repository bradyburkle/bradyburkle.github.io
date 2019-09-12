import React, { Component } from "react";
import ResumeItem from "./ResumeItem/ResumeItem2";

const companyData = {
  nt1: {
    img:
      "https://cdn1.marklogic.com/wp-content/uploads/2018/06/logo-customers-northern-trust.svg",
    companyName: "Northern Trust Hedge Fund Services",
    role: "Business Specialist",
    color: "dark-green",
    yearStart: "2017",
    yearEnd: "2018",
    tagColor: "default",
    linkRef: "/nt/specialist",
    summary: "During 2017 a role was created to allow me to focus more extensively on business processes and systems.  In this role, I would no longer be restricted to a focus still with accounting and regulatory reporting processes, but now became a shared resource available to the entire Citadel/NT relationship to examine their processes and suggest enhancements.",
    tags: [
      "business systems",
      "process analysis",
      "automation",
      "programming",
      "dashboards",
      "efficiency"
    ]
  },
  nt2: {
    img:
      "https://cdn1.marklogic.com/wp-content/uploads/2018/06/logo-customers-northern-trust.svg",
    alt: "Northern Trust Hedge Fund Services",
    role: "Senior Consultant - Fund Accounting and Financial Control",
    color: "dark-green",
    yearStart: "2015",
    yearEnd: "2017",
    tagColor: "default",
    linkRef: "/nt/fc",
    summary: "Summary of the role",
    tags: [
      "accounting",
      "finance",
      "business systems",
      "financial analysis",
      "financial analytics",
      "fixed income"
    ]
  },
  nt3: {
    img:
      "https://cdn1.marklogic.com/wp-content/uploads/2018/06/logo-customers-northern-trust.svg",
    alt: "Northern Trust Hedge Fund Services",
    role: "Senior Consultant - Investor Services",
    color: "dark-green",
    yearStart: "2013",
    yearEnd: "2015",
    tagColor: "default",
    linkRef: "/nt/is",
    summary: "I began my time at Northern Trust Hedge Fund Services working with clients in an investor services role. My client was the firm's largest, Citadel LLC, among five other firms (one private equity).  From this role I gained exposure to other groups within the Citadel relationship, which would lead me to my next stages with NT.",
    tags: [
      "investor relations",
      "client relations",
      "operations",
      "aml",
      "kyc",
      "fatca",
      "fund documents",
      "legal agreements"
    ]
  },
  ahc: {
    img:
      "https://i.ibb.co/wdY9xDM/anderson-hill-Artboard-13-copy-2-preview.jpg",
    color: "light-blue",
    alt: "Anderson Hill Capital",
    role: "Director of Fund Services - Consultant",
    yearStart: "2018",
    yearEnd: "2019",
    tagColor: "primary",
    linkRef: "/ahc",
    summary:
      "After leaving NTHFS in February of 2018, I knew I wanted to focus more on programming and take some time off. I was approached by the two partners of a newly formed fund partnership with a focus in cryptocurrencies.  The firm was having issues with data integration, verification, and reconciliation from the disconnectedness of the crypto exchanges and wallets being used.  The firm was also looking to create a fund administration unit that could help other firms with these issues.  Using Javascript to work with exchange APIs, I was able to solve these issues and create defined systems and controls for reporting, accounting, and performance processes.",
    tags: [
      "consulting",
      "cryptocurrencies",
      "hedge funds",
      "fund accounting",
      "tax",
      "investor allocations",
      "api",
      "programming",
      "fund administration"
    ]
  },
  env1: {
    img: "https://www.envestnet.com/sites/all/themes/envestnet/images/logo.png",
    color: "light-blue",
    alt: "Envestnet",
    role: "Client Services",
    yearStart: "2012",
    yearEnd: "2013",
    tagColor: "info",
    linkRef: "/env/cs",
    summary:
      "My next role with Envestnet shifted me from a largely back office operational role, to a client service role working hand in hand with investment advisors to provide solutions to their platform needs. ",
    tags: [
      "client relations",
      "investor relations",
      "finance",
      "investment advisory"
    ]
  },
  env2: {
    img: "https://www.envestnet.com/sites/all/themes/envestnet/images/logo.png",
    color: "light-blue",
    alt: "Envestnet",
    role: "Operations Specialist",
    yearStart: "2011",
    yearEnd: "2012",
    tagColor: "info",
    linkRef: "/env/ops",
    summary:
      "Envestnet is a provider of web-platform solutions within the Registered Investment Advisory service ($16B AUA at the time).  They provided me with my first opportunity out of college and fresh to Chicago.  I began in a role as an operations specalist, providing support for asset management accounts on the Envestet platform. This role led me to working with custodians and advisors to resolve account related issues.",
    tags: ["operations", "business systems"]
  }
};

const resumeDataBullets = {
  env1: [
    {
      title: "Client Solutions",
      dataPts: [
        "	Approving account asset liquidations and subsequent handling of proceeds",
        "Working to streamline clients' back-office workflow through web-platform solutions within the Registered Investment Advisory service ($16 Billion in assets under administration)."
      ]
    },
    {
      title: "Web Support",
      dataPts: [
        "	Approving account asset liquidations and subsequent handling of proceeds",
        "Working to streamline clients' back-office workflow through web-platform solutions within the Registered Investment Advisory service ($16 Billion in assets under administration)."
      ]
    }
  ],
  env2: [
    {
      title: "Account Maintenance",
      dataPts: [
        "Reviewed and approved investor advisor account requests.",
        "Worked with custodians to provide account maintenance solutions."
      ]
    },
    {
      title: "Trade Operations",
      dataPts: [
        "Reviewed and completed platform initated service requests.",
        "Collaborated with traders, product specialists, and advisors to complete portfolio rebalance and trade requests."
      ]
    }
  ],
  ahc: [
    {
      title: "Consulting",
      dataPts: [
        "Advised AHC on the formation of their mixed-asset hedge fund (Neil Fund LP) with a focus on cryptocurrency",
        "Created controlled processes and procedures to adhere to fund organizational documents",
        "Maintained books and records for Neil Fund",
        "Performed quarterly allocations of PnL",
        "Performed monthly pricing and valuation estimates",
        "Created and implemented investor reporting procedures, including statement design and commentary",
        "Performed a reconcilliation and recreation of the fund's trades, account balances, and profit allocations prior to its formal creation, gathering and analyzing thousands of historical trades across multiple exchanges, wallets, and chains"
      ]
    },
    {
      title: "Director of Fund Operations",
      dataPts: [
        "Served as the Director of Fund Operations for Anderson Hill's niche fund administration unit, Daht Fund Services LLC",
        "Created prototypes using Adobe XD and Photoshop to pitch prospective clients on system designs and layouts",
        "Using Javascript, created API integration into the funds books for real time data from seven different cryptocurrency exchanges"
      ]
    },
    {
      title: "Tax Preparation",
      dataPts: [
        "Advised AHC on the formation of their mixed-asset hedge fund (Neil Fund LP) with a focus on cryptocurrency",
        "Leveraged trade data integration to analyze and report the funds' taxes for 2018",
        "Responsible for preparing and delivering Form 1065, Form 8949, and Investor K1s."
      ]
    }
  ],
  nt2: [
    {
      title: "Monthly Close Processes",
      dataPts: [
        "Create and post journal entries (Oracle PeopleSoft) as part of monthly fund closing procedures",
        "Maintain trial balances and working fund financials",
        "Perform fund allocations through a 6-tiered fund structure with multistrategy blends",
        "Creation, implementation, and maintenance of automated VBA-written macros to transform raw Peoplesoft ledger data into automatically formed financial statements"
      ]
    },
    {
      title: "Financial Analysis/Analytics",
      dataPts: [
        "Perform extensive research on prior month close and trading activity to prepare insights derived from balance sheet, income statement, and capital activity analysis.",
        "Create written analysis, and present findings verbally to the client each month, of the underlying drivers of fluctuations.",
        "Analyzing abnormal fluctations and investigating these changes across business units to proactively identify issues."
      ]
    },
    {
      title: "Debt",
      dataPts: [
        "Worked with Citadel and external parties to finalize asset backed debt covenants.",
        "Converted loan term sheets into automated inputs for accrual tracking, payment monitoring, and pricing.",
        "Calculated, reconciled, and executed interest payments and resizing on recurring loan agreements",
        "Provided weekly return estimates on pledged collateral to loan issuers and resolving any underlying inquiries",
        "Review and escalate any return thresholds exceeding certain metrics to the client CFO",
        "Performed calculations and testing to ensure debt covenance adherance and warn when additional capital pledge or release may be necessary"
      ]
    },
    {
      title: "Reporting",
      dataPts: [
        "Supported Citadel's Client-Partner Group with information on fund performance and attribution to assist in executive summary and investor pitch decks",
        "Prepared, reviewed, and delivered fund and firm-level performance figures in response to media inquiries and award submissions (e.g., Edelman, Institutional Investor, Bloomberg, etc.)",
        "Responsible for final reviews related to investor reporting statements monthly",
        "Responsible for design and implementation of investor statements",
        "Reported and answered inquiries related to performance and expense details from certain parties in China and Hong Kong"
      ]
    },
    {
      title: "Ad Hoc",
      dataPts: [
        "Responsible for new fund creation and setup in accounting and allocation systems based on interpretations of fund PPM and Operating docsfor new entities.",
        "Work with Citadel Legal to form special item investor capital activity such as mandatory distributions and various specialized adjustments",
        "Calculate and issue ALL cash distributions for Citadel's entire investor base across all funds for mandatory distributions at year end 2017"
      ]
    },
    {
      title: "Cash and Treasury Operations",
      dataPts: [
        "Worked with cash management to establish and verify payment instructions for all investors",
        "Responsible for all calculations and inputs of investor cash capital activity",
        "Responsible for input and verification of fund rebalancing and cash movements throughout the fund structure",
        "Created an automated process to control and expedite the rebalancing process which operates on a time-sensitive deadline"
      ]
    },
    {
      title: "Audit",
      dataPts: [
        "Prepare and review year end audited financial statements",
        "Work with external and internal auditors to provide support and resolve issues related to interim and year end audit questions."
      ]
    }
  ],
  nt1: [
    {
      title: "Business Systems",
      dataPts: [
        "Created a proprietary workflow tool used by teams in North American and India to better align and communicate the monthly procedures and processes of fund closing.",
        "Lead a team to automate a wide variety of processes leading to a reduction in monthly fund close time from 15 business days, to six business days.",
        "Designed and created an automated process to identify and report outstanding positional and pricing breaks and aging",
        "Leveraged the data from this process to create a data insight dashboard circulated to department directors on a daily basis",
        "Designed and created an automated process to reconcile broker data on swap positions and pricing with in-house data to quickly identify gaps or mismatches"
      ]
    }
  ],
  nt3: [
    {
      title: "Investor Relations",
      dataPts: [
        "Process capital activity for hedge fund clients",
        "Manage private equity capital calls, drawdowns, distributions, and investor allocations",
        "Facilitate and perform review of monthly reporting, investor statements, and ad hoc requests for clients",
        "Perform AML/KYC due dilligence on client investors, including escalation of high risk parties",
        "Work with auditors to resolve inquiries throughout the year",
        "Perform investor relations responsibilities for particular, smaller client firms",
        "Work with investor base to ensure proper documentation, timing, and cash delivery on capital activity requests.",
        "Ensure investors provide thorough and complete subscription, redemption, transfer, re-registration documentation.",
        "Perform FATCA due dilligence on investor base.",
        "Create process improvements through advanced Excel techniques",
        "Worked with Citadel Shanghai to onboard, verify, and set up payment for the first direct Chinese instiutional investor in a US hedge fund",
        "Navigated new regulatory jurisdiction practices and procedures for this unique relationship"
      ]
    }
  ],
  osu: []
};

// •	Approving account asset liquidations and subsequent handling of proceeds, totaling in the hundreds of thousands of dollars daily.
// •	Working to streamline clients' back-office workflow through web-platform solutions within the Registered Investment Advisory service ($16 Billion in assets under administration).
// •	Providing industry-leading support by establishing and maintaining cooperative relationships with clients.
// •	Collaborating with colleagues and custodians to foster an environment of problem-solving and results.
// WST
// •	Learned the techniques and methodology to corporate valuation
// •	Practiced heavily in Excel on methods to forecasting future valuations of companies based upon growth measures
// •	Projected Wal Mart Stores Income Statements, Balance Sheets, Statements of Cash Flow, Debt, and Discounted Cash Flows to 2014 to give projections for implied price per share
// •	Compared the projections of Wal Mart against other top companies within the sector
// •	Discovered the best ways to compare those companies in an effort to determine which may be the best to purchase
// •	Had the opportunity to interact in a forum with Wall Street professionals and learn about some of the realities of the business

// •	Utilized my advance knowledge of computers to keep the website updated as was seen fit by the organization
// •	Built schedules for hundreds of local tutors to work with students at area schools
// •	Responsible for compiling mailing lists for the organization as a way to keep its participants informed to new information.
const tagIds = Object.keys(companyData);

class ResumeList extends Component {
  render() {
    let resumeListAHC = resumeDataBullets.ahc.map(el => {
      return <ul>{el.title}</ul>;
    });

    let [...bulletsAHC] = resumeDataBullets.ahc.map(titleObj => {
      return titleObj.dataPts.map(string => (
        <div>
          <li>{string}</li>
          <br />
        </div>
      ));
    });
    //////////////////////////////////////////////
    let resumeListNT1 = resumeDataBullets.nt1.map(el => {
      return <ul>{el.title}</ul>;
    });

    let [...bulletsNT1] = resumeDataBullets.nt1.map(titleObj => {
      return titleObj.dataPts.map(string => (
        <div>
          <li>{string}</li>
          <br />
        </div>
      ));
    });
    /////////////////////////////
    let resumeListNT2 = resumeDataBullets.nt2.map(el => {
      return <ul>{el.title}</ul>;
    });

    let [...bulletsNT2] = resumeDataBullets.nt2.map(titleObj => {
      return titleObj.dataPts.map(string => (
        <div>
          <li>{string}</li>
          <br />
        </div>
      ));
    });
    //////////////////////////////

    let resumeListNT3 = resumeDataBullets.nt3.map(el => {
      return <ul>{el.title}</ul>;
    });

    let [...bulletsNT3] = resumeDataBullets.nt3.map(titleObj => {
      return titleObj.dataPts.map(string => (
        <div>
          <li>{string}</li>
          <br />
        </div>
      ));
    });
    //////////////////////////////
    let resumeListENV1 = resumeDataBullets.env1.map(el => {
      return <ul>{el.title}</ul>;
    });

    let [...bulletsENV1] = resumeDataBullets.env1.map(titleObj => {
      return titleObj.dataPts.map(string => (
        <div>
          <li>{string}</li>
          <br />
        </div>
      ));
    });

    //////////////////////////////
    let resumeListENV2 = resumeDataBullets.env2.map(el => {
      return <ul>{el.title}</ul>;
    });

    let [...bulletsENV2] = resumeDataBullets.env2.map(titleObj => {
      return titleObj.dataPts.map(string => (
        <div>
          <li>{string}</li>
          <br />
        </div>
      ));
    });
    return (
      <div>
        <ResumeItem
          data={resumeListAHC}
          info={companyData.ahc}
          bullets={bulletsAHC}
          tagId={tagIds[3]}
        />
        <ResumeItem
          data={resumeListNT1}
          info={companyData.nt1}
          bullets={bulletsNT1}
          tagId={tagIds[0]}
        />
        <ResumeItem
          data={resumeListNT2}
          info={companyData.nt2}
          bullets={bulletsNT2}
          tagId={tagIds[1]}
        />
        <ResumeItem
          data={resumeListNT3}
          info={companyData.nt3}
          bullets={bulletsNT3}
          tagId={tagIds[2]}
        />
        <ResumeItem
          info={companyData.env1}
          data={resumeListENV1}
          bullets={bulletsENV1}
          tagId={tagIds[4]}
        />
        <ResumeItem
          info={companyData.env2}
          data={resumeListENV2}
          bullets={bulletsENV2}
          tagId={tagIds[5]}
        />
      </div>
    );
  }
}

export default ResumeList;
