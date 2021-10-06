

import adgitm from "./Assets/teami/adgitm.jpeg";
import codechef from "./Assets/teami/codechef.jpeg";
import iist from "./Assets/teami/iist.png";
import mukul from "./Assets/teami/mukul.png";
import praveen from "./Assets/teami/praveen.jpg";
import harsh from "./Assets/teami/harsh.jpg";
import arsh from "./Assets/teami/arsh.jpeg";
import sanket from "./Assets/teami/sanket.jpeg";
import mait from "./Assets/teami/mait.jpeg";




/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";

const TOP_SECTION = {
  TITLE: "Live The Code",
  Typed_effect: ["Weeks of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on Last Week of September 2021 with over 100+ teams, 500+ students from across the nation for 48 hours of creation, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://youtu.be/ZZ7EuBgNqAk",
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
    "Live The Code is a week-long running hackathon that will be held on the last week of September, We call for hackers, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers. Throughout the weekend hackers at Live The Code will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO_EFFECT: false,
  LOGO: "https://drive.google.com/file/d/1ljJxdnX9YBiWNI5hBGG18Iy2dbn2sOPa/view?usp=sharing"
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://youtu.be/ZZ7EuBgNqAk"
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
      type: "Overall First",
      content:
        "Coil Prize, SAWO community box, Devfolio Swag kit, Taskade LifeTime Access, Streamyard Essential Plan, Egghead 1 year plan (all the courses), GFG 1200 coupon - applicable on all courses, Clerky LifeTime Package worth $800, $35"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "Overall Second",
      content:
        "Coil Prize, SAWO community box, Devfolio Swag kit, Taskade LifeTime Access, Streamyard Essential Plan, Egghead 1 year plan (all the courses), GFG 800 coupon - applicable on all courses, $20"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Overall Third ",
      content:
        "Coil Prize, SAWO community box,  Devfolio Swag kit, Taskade LifeTime Access, Streamyard Essential Plan, Egghead 1 year plan (all the courses), GFG 500 coupon - applicable on all courses, $15"
    }
  ],
  [
    //Array 2
    {
      icon: <i class="first fas fa-4x fa-award"></i>,
      type: "Overall Fourth And Fifth",
      content:
        "Devfolio swag kit, egg head coupon, taskade 2 year, Gfg 300 coupon, Coding ninjas 25%off coupon ",
    },
    {
      icon: <i class="first fas fa-4x fa-award"></i>,
      type: "Polygon - Devfolio Hackathon Season Prize",
      content:
        "Polygon will be giving away a cash prize for the best hack built on top of Ethereum (Rs.10000) during the hackathon. For teams that integrate Polygon in their hacks as well the prize money will be higher (Rs.15000) along with eligibility for internship/full-time role interviews and a chance to land seed funding of upto 5000 USD ",
      learnmore:"https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c"
    },
    {
      icon: <i class="first fas fa-4x fa-award"></i>,
      type: "Tezos - Devfolio Hackathon Season Prizer",
      content: "20000 INR for best Dapp built on Tezos,Continuity grant opportunity up to 5,000 USD for an outstanding project and Every valid submission made in the Tezos track will be rewarded with exclusive Schwag Kits. ",
      learnmore:"https://www.notion.so/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff"
    }
  ], 
  [
    //Array 3
    {
      icon: <i class="first fa-4x fas fa-award"></i>,
      type: "Filecoin - Devfolio Hackathon Season Prize",
      content: "20000 INR for best use of IPFS and/or Filecoin",
      learnmore:"https://devfolio.notion.site/Filecoin-Devfolio-Hackathon-Season-Prize-998fc3fe477e474086ae1d5ed1685203"
      
    },
    {
      icon: <i class="first fa-4x fas fa-award"></i>,
      type: "Sawo Lab API Prize",
      content: "100$ and Community Box to the winning team for using Sawo Labs API" ,  
      learnmore:"https://sawolabs.com/hackathon/redeemnow/?hackathon_name=LivetheCode"
    },
    {
      icon: <i class=" first fa-4x fas fa-award"></i>,
      type: "Celo - Devfolio Hackathon Season Prize",
      content: "20000 INR for best Dapp built on Celo",
      learnmore:"https://www.notion.so/Celo-Devfolio-Hackathon-Season-Prize-8b98dac17f134abeae863d5d98c01ff0"
    }
  ], 
  [
    //Array 4
    {
      icon: <i class="first fa-4x fas fa-award"></i>,
      type: "Coil API Prize",
      content: "3 Coil Prizes for overall winners and Coil Prizes for all who integrate coil API " 
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    },
  ],
];
const Themeinfo = [
  [
    //Array 1
    {
      icons: <i class=" second fa-4x fab fa-envira"></i>,
      types: "Enviromental Issue",
    },
    {
      icons: <i class=" First fas fa-4x fa-female"></i>,
      types: "Women Safety",
    },
    {
      icons: <i class=" third fas fa-4x fa-vr-cardboard"></i>,
      types: "AR/VR ",
    }
  ],
  [
    //Array 1
    {
      icons: <i class=" second fa-4x fas fa-space-shuttle"></i>,
      types: "Space Technology",
    },
    {
      icons: <i class=" First fa-4x fas fa-robot"></i>,
      types: "Artificial Intelligence",
    },
    {
      icons: <i class=" First fa-4x fas fa-hand-holding-usd"></i>,
      types: "FinTech ",
    }
  ],
  [
    //Array 1
    {
      icons: <i class=" second fa-4x far fa-lightbulb"></i>,
      types: "Open Innvoation",
    },
  ],

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
      Name: "CodeChef MAIT Chapter",
      role: "Organizer",
      instagram: "https://www.instagram.com/codechefchaptermait/",
      linkedin: "https://www.linkedin.com/company/codechefmait/",
      img: mait
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
    },
    
  ],
  [
    //Array 3
    {
      Name: "Arsh Goyal",
      role: "Judge",
      instagram: "https://www.instagram.com/arshgoyalyt/",
      linkedin: "https://www.linkedin.com/in/arshgoyal/",
      img: arsh
    },
    {
      Name: "Sanket Singh",
      role: "Judge",
      instagram: "https://instagram.com/isanketsingh?utm_medium=copy_link",
      linkedin: "https://www.linkedin.com/in/singhsanket143",
      img: sanket
    },
    {
      Name: "Praveen Kumar Purushothaman",
      role: "Judge",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/praveentech/",
      img: praveen
    },
  ]
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
  frequentlyAskedQuestions,
  Themeinfo
};
