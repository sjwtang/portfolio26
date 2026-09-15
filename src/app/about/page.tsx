import Image from "next/image";
import { OutlineButton } from "@/components/OutlineButton";

const experience = [
  { role: "UX Designer", rest: "@ Oracle (2026)" },
  { role: "UX Design Intern", rest: "@ Oracle (2025)" },
  { role: "UX Designer", rest: "@ GoodMaps (2022 – 2024)" },
  { role: "UX Design & Research Intern", rest: "@ GoodMaps (2022)" },
  { role: "UX Designer", rest: "@ UCLA Human-Computer Interaction Lab (2022)" },
  { role: "UI/UX Design Intern", rest: "@ Ipsos (2021)" },
];

const publications = [
  {
    title:
      "“Evaluating an AI-enhanced power wheelchair obstacle alert system: Effects of multimodal warning design on warning-response behavior”",
    venue: "– Transportation Research Part F: Traffic Psychology and Behaviour (2026)",
  },
  {
    title:
      '"Human factors in remote driving and remote assistance: a systematic review for road transport automation"',
    venue: "– Cognition, Technology, & Work (2026)",
  },
  {
    title:
      "“Navigation Assistance Via Haptic Technology for Blind or Low-Vision Users: A Scoping Review”",
    venue:
      "– Proceedings of the Human Factors and Ergonomics Society (2025)",
  },
  {
    title:
      "“Augmenting Pathologists with NaviPath: Design and Evaluation of a Human-AI Collaborative Navigation System”",
    venue: "– ACM CHI Conference, Honorable Mention (2023)",
  },
];

const recognition = [
  {
    title: "Grad Slam Finalist",
    rest: "– Top 10 Finalist, San José State University (2026)",
  },
  {
    title: "Get Involved Challenge Winner",
    rest: "– Volunteer, ERG & Campus Events, Oracle (2025)",
  },
  {
    title: "BU Forge Catalyst Designathon",
    rest: "– Creative Arts Track, Honorable Mention (2022)",
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <Image
            src="/images/about-hello.jpg"
            alt="Hey, it's great to meet you virtually"
            width={1631}
            height={497}
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="about-hero-portrait">
          <Image
            src="/images/about-portrait.png"
            alt="it's me, Shirley"
            width={632}
            height={574}
            priority
            unoptimized
            style={{ width: "min(100%, 500px)", height: "auto" }}
          />
        </div>
      </section>

      <div className="about-hero-actions">
        <OutlineButton href="https://www.linkedin.com/in/shirleyjtang">
          LinkedIn
        </OutlineButton>
        <OutlineButton
          href="mailto:sjwtang@gmail.com?subject=Shirley%20Tang%20portfolio%20inquiry"
          external={false}
        >
          Email
        </OutlineButton>
        <OutlineButton href="https://drive.google.com/file/d/1kyyxN3mthFoLITRr6x6GE5hE4r0bOc3M/view?usp=sharing">
          Resume
        </OutlineButton>
      </div>

      <hr className="case-divider about-divider" />

      <section className="about-body">
        <div className="about-text-block">
          <h2>Who is Shirley?</h2>
          <p>
            Born and raised in California, my love for storytelling extends back
            to my childhood, where I would make my sister partake in my imaginary
            skits to perform for my family. Today, I translate that passion into
            crafting stories for people through products I get to work on as a
            designer.
          </p>
          <p>
            Prior to college, I thought design was purely an aesthetic thing.
            Equipped with a background in cognitive science and statistics, I
            initially aimed for a career in research: memory and habits are among
            my top interests and I enjoy learning about how they shape our
            everyday lives.
          </p>
          <p>
            After joining a club&apos;s design project team out of curiosity, I
            learned that design is far beyond the aesthetics: it in fact involves
            problem solving, critical thinking, lots of collaboration, and so
            much more. These aspects were a fresh perspective to an industry that
            I did not know existed, which soon became of great fascination to me.
          </p>
          <p>
            To me, design is about working with peers to create inspiring,
            meaningful, and impactful experiences for the greater community.
          </p>
        </div>

        <figure className="about-doodle">
          <Image
            src="/images/about-doodle.jpg"
            alt=""
            width={1584}
            height={426}
            style={{ width: "100%", maxWidth: 777, height: "auto" }}
          />
        </figure>

        <div className="about-text-block">
          <p>
            From designing in academia to the start-up space, I have cultivated a
            strong skillset in user research, design thinking, and user flows,
            allowing me to build engaging user experiences that target desired
            audiences.
          </p>
          <p>
            If I am able to contribute positively to someone&apos;s life with my
            designs - whether small or big - that warms my ❤️.
          </p>
        </div>

        <hr className="case-divider about-divider" />

        <div className="about-text-block">
          <h2>Other Things I Enjoy..</h2>
        </div>

        <figure className="about-hobbies">
          <Image
            src="/images/about-hobbies.jpg"
            alt="Exploring new cafes, watching kdramas, dancing, and embroidering"
            width={2048}
            height={1856}
            style={{ width: "100%", maxWidth: 1044, height: "auto" }}
          />
        </figure>

        <div className="about-resume-card">
          <div className="about-resume-section">
            <h2>Experience</h2>
            <ul>
              {experience.map((item) => (
                <li key={item.role + item.rest}>
                  <strong>{item.role}</strong> {item.rest}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-resume-section">
            <h2>Publications</h2>
            <ul className="about-pubs">
              {publications.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <br />
                  {item.venue}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-resume-section">
            <h2>Recognition</h2>
            <ul>
              {recognition.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> {item.rest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
