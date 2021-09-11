

import adgitm from "./Assets/teami/adgitm.jpeg";
import codechef from "./Assets/teami/codechef.jpeg";
import iist from "./Assets/teami/iist.png";
import mukul from "./Assets/teami/mukul.png";
import praveen from "./Assets/teami/praveen.jpg";
import harsh from "./Assets/teami/harsh.jpg";



/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";

const TOP_SECTION = {
  TITLE: "Live The Code",
  Typed_effect: ["Weeks of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on Last Week of September 2021 with over 100+ teams, 400+ students from across the nation for 48 hours of creation, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://docs.google.com/forms/d/e/1FAIpQLScYiyGKouI3cffX8sUcbJyFfy6_IS44yKoajJdsZTC9DuxkMg/viewform?usp=sf_link",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://livethecode.devfolio.co/",
};

const SOCIALS = {
  instagram: "https://www.instagram.com/codechefadgitm/",
  discord: "https://discord.com/invite/aVrVdTxsFh",
  linkedin: "https://www.linkedin.com/company/codechefadgitm/",
  twitter: "https://mobile.twitter.com/CAdgitm",
  devpost: "https://limbo-hacks-12968.devpost.com/",
  email: "mailto:codechefadgitmchapter@gmail.com",
  mail:"codechefadgitmchapter@gmail.com"
};

const MIDDLE_SECTION = {
  TITLE: "What is Live The Code ?",
  LONG_DESCRIPTION:
    "Live The Code is week long running hackathon that will be held on last week of september , We calls for hackers, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at Live The Code will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO_EFFECT: false,
  LOGO: "https://drive.google.com/file/d/1ljJxdnX9YBiWNI5hBGG18Iy2dbn2sOPa/view?usp=sharing"
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://docs.google.com/forms/d/e/1FAIpQLScYiyGKouI3cffX8sUcbJyFfy6_IS44yKoajJdsZTC9DuxkMg/viewform?usp=sf_link"
  },
  JOIN_TEAM: {
    required: false,
    src: ""
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "overall First",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "overall Second",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Second",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      icon: <i class="first fas fa-4x fa-award"></i>,
      type: "Polygon - Devfolio Hackathon Season Prize",
      content:
        "Polygon will be giving away a cash prize for the best hack built on top of Ethereum (Rs.10000) during the hackathon. For teams that integrate Polygon in their hacks as well the prize money will be higher (Rs.15000) along with eligibility for internship/full-time role interviews and a chance to land seed funding of upto 5000 USD "
    },
    {
      icon: <i class="first fas fa-4x fa-award"></i>,
      type: "Tezos - Devfolio Hackathon Season Prizer",
      content: "20000 INR for best Dapp built on Tezos,Continuity grant opportunity up to 5,000 USD for an outstanding project and Every valid submission made in the Tezos track will be rewarded with exclusive Schwag Kits. "
    },
    {
      icon: <i class=" first fa-4x fas fa-award"></i>,
      type: "Celo - Devfolio Hackathon Season Prize",
      content: "20000 INR for best Dapp built on Celo"
    }
  ], 
  [
    //Array 3
    {
      icon: <i class="first fa-4x fas fa-award"></i>,
      type: "Filecoin - Devfolio Hackathon Season Prize",
      content: "20000 INR for best use of IPFS and/or Filecoin"
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "CodeChef ADGITM Chapter",
      role: "Organizer",
      instagram: "https://www.instagram.com/codechefadgitm/",
      linkedin: "https://www.linkedin.com/company/codechefadgitm/",
      img: codechef
    },
    {
      Name: "Dr. Akhilesh Das Gupta Institute of Technology & Management,",
      role: "Organizer",
      instagram: "https://www.instagram.com/adgitmdelhi/",
      linkedin: "https://www.linkedin.com/school/northern-india-engineering-college/",
      img: adgitm
    },
    {
      Name: "CodeChef IIST Chapter",
      role: "Organizer",
      instagram: "https://www.instagram.com/codechef_iist_chapter/",
      linkedin: "https://www.linkedin.com/company/codechef-iist-chapter/",
      img: iist
    }
  ],
  [
    //Array 2
    {
      Name: "Praveen Kumar Purushothaman",
      role: "Judge",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/praveentech/",
      img: praveen
    },
    {
      Name: "Mukul Kumar",
      role: "Judge",
      instagram: "https://www.instagram.com/mukulcode/",
      linkedin: "https://www.linkedin.com/in/mukulcode/",
      img: mukul
    },
    {
      Name: "Harsh Vardhan",
      role: "Judge",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/harsh-vardhan-654866123/",
      img: harsh
    }
  ],
  // [
  //   //Array 3
  //   {
  //     Name: "Pravallika",
  //     role: "Organizer",
  //     github: "",
  //     linkedin: "",
  //     img: Pravallika
  //   },
  //   {
  //     Name: "Keshav",
  //     role: "Organizer",
  //     github: "",
  //     linkedin: "",
  //     img: keshav
  //   }
//   ]
 ];


const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
        'Hackathons are community events, where you get to interact with students from all around the world as well as forming teams to create future tech.'      },
      {
        label: "I have no idea what coding is?",
        content: "Thats why you must attend our event, we will guide you through everything with awesome workshops,tech talk and many more."
      },
      {
        label: "Do i need to pay any money?",
        content: "Absolutely not ! our event is free and open for all , if incase anyone asks for money you can dm any of our moderator."
      },
      {
        label: "What are the conduct of guidlines?",
        content: "We strongly follow the DEVFOLIO code of conduct, Our team members will enforce this code throughout the event. "
      },

      {
        label: " Is it necessary to form the team of 4 students ?",
        content: "No the team can range from 2 to 4 members."
      }
    ],
    [
      {
        label: "How to participate?",
        content: "All you need is to fill our form above and we will guide you through everything in email."
      },
      {
        label: "I have more doubts?",
        content: "Reach us directly at (codechefadgitmchapter@gmail.com) we would happy to help you."
      }
      ,
      {
        label: "Can i Mentor",
        content: "Yes we are looking for mentors, fill the form we would be glad to have you."
      }
      ,
      {
        label: "Is the registration open to all colleges?",
        content: "Yes, it's open to all engineering/ polytechnic/ science colleges. "
      },
      
      {
        label: "Should the team members be from the different college?",
        content: "Yes, all members can be from different colleges, departments and years."
      },

    ]
  ],

];


export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  // sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions
};
