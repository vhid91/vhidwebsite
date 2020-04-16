const publicFolder = process.env.PUBLIC_URL

export const timeLine = [
  {
    year: "2016",
    details: [
      {
        month: "April",
        detail:
          "Part time website developer for CNSC website at CNSC Office of the President"
      }
    ]
  },
  {
    year: "2018",
    details: [
      {
        month: "April",
        detail: "Graduated BSIT at Camarines Norte State College"
      },
      {
        month: "June",
        detail: "Got NCII Certificate for Computer System Servicing"
      },
      {
        month: "July",
        detail: "Became Software Developer at Questronix Corp"
      },
      {
        month: "August",
        detail:
          "Deployed at UnionBank of the Philippines for  One Unionbanker Hub project"
      }
    ]
  },
  {
    year: "2019",
    details: [
      {
        month: "February",
        detail: "Became Software Engineer at Questronix Corp"
      }
    ]
  }
];

export const projects = [
  {
    img: `${publicFolder}/img/sfnhs.png`,
    name: "San Felipe National Highschool Website"
  },
  {
    img: `${publicFolder}/img/cnscwebsite.jpg`,
    name: "CNSC Website"
  },
  {
    img : `${publicFolder}/img/timekeeping.png`,
    name: "Adsoph Technology Solution DTR system"
  },
  {
    img: `${publicFolder}/img/nat.png`,
    name: "Nathaniel Hotel - Restaurant POS"
  },
  {
    img: `${publicFolder}/img/cnscthesisportal.png`,
    name: "Camarines Norte State College Thesis Portal"
  },
  {
    img: "",
    type : "Backend - IBM Api Connect",
    name: "One Union Banker Hub"
  },
  {
    img : `${publicFolder}/img/dtrsystem.png`,
    type : "Frontend - React Native",
    name : "DTR System - Mobile"
  }
];
