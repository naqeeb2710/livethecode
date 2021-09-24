import React from "react";
import {Myinfo} from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import {Logo, LogoSectionAbout} from "../logo-section/logoSection.jsx";
import {FirstPrize, PrizeHeading} from "../prize tracks/prizes.jsx";
import {ThemeList, ThemeHeading} from "../Topic/Theme.jsx";
import {Prizeinfo} from "../../Module/General";
import {Accordion} from "../FAQ/faq.jsx";
import {Sponsor, SponsorsHead, SponsorUS} from "../Sponsors/sponsors.jsx";

import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer.jsx";
import {Member, JoinTeam} from "../team/team.jsx";
import pattern from "./pattern4.png";
import Media from "../media/media.jsx";

import {
  TOP_SECTION,
  TeamInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  FOOTER,
  Themeinfo,
  panels
} from "../../Module/General";
import NewSponsors from "../Sponsors/NewSponsors.jsx";
import {Timeline} from "../timeline/Timeline.jsx";

// javascript Map for sponsors


// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} learnmore={s.learnmore}/>
        </Col>
      ))}
    </Row>
  );
}
function ThemeGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          <ThemeList icons={s.icons} types={s.types}  />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={4}>
          <Member
            name={s.Name}
            role={s.role}
            img={s.img}
            instagram={s.instagram}
            linkedin={s.linkedin}
          />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map(s => (
        <Col className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage(props) {
  return (
    <div
      id="home"
      className="Whole_div"
      style={{backgroundImage: `url(${pattern})`}}
    >
      <div className="color_sectiom">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img src={TOP_SECTION.IMG_SRC} />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>
        {/* Timeline section  */}
        <Timeline />

        {/* theme section */}
        <Row className="prizesection">
          <ThemeHeading types="Hackathon Themes" />
          {Themeinfo.map(ThemeGroup)}
        </Row>

        <Row className="prizesection non-coding">
          <PrizeHeading type="Frequently Asked Questions" />
          {/* <h2>coming soon</h2> */}
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

      
       

        {/* ********Prizes here ***** */}
        <Row className="prizesection">
          <PrizeHeading type="Prize section" />
          {Prizeinfo.map(PrizeGroup)}
        </Row>

                {/* ********Prizes ending here ***** */}

        

        {/* ********Sponsors here ***** */}

        <Row id="sponsors" className="sponsorSection">
          <SponsorsHead />
          <SponsorUS />
          {/* {sponsorLogos.map(SponsorGroup)} */}
          <NewSponsors />
        </Row>
        {/* ********Sponsors ending here ***** */}

        <Birds top="120vh" left="0vh" type="" />

        {/* ********Team here ***** */}
        <h1>Our Team</h1>
        {FOOTER.JOIN_TEAM.required && <JoinTeam />}
        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
