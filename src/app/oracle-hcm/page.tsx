import { BackToTop } from "@/components/BackToTop";
import {
  CaseCallout,
  CaseHero,
  CaseImage,
  CaseSectionLabel,
  CaseTextBlock,
} from "@/components/CaseStudy";

export default function OraclePage() {
  return (
    <article>
      <CaseHero
        title="Oracle HCM: Nurse Self-Scheduling"
        subtitle="Helping nurses sign up for their desired shifts"
        image="/images/oracle-hero.png"
        imageAlt="Mobile phone showing nurse self-scheduling calendar"
        imageWidth={241}
        imageHeight={487}
        framed
        divider={false}
        framePadding="0"
        frameClassName="case-hero-media--plain"
        tldr={
          <div className="case-tldr">
            <h2 className="case-tldr-heading">TL;DR</h2>
            <ul className="case-tldr-list">
              <li>
                <strong>Problem:</strong> Nurses sign up for shifts 8-10 weeks
                ahead while balancing hospital needs, seniority, and compliance
                rules, and current tools make the process error-prone and
                mentally exhausting.
              </li>
              <li>
                <strong>What I did:</strong> As a UX Design Intern on
                Oracle&apos;s Workforce Management team, I designed a
                mobile-first, AI-assisted self-scheduling flow. AI recommends a
                schedule that accounts for hospital rules and state laws, and
                nurses can adjust it manually or by prompting in natural
                language. I proposed design directions to key stakeholders and
                built high-fidelity prototypes using Oracle&apos;s Redwood design
                system.
              </li>
              <li>
                <strong>Outcome:</strong> My approach was adopted into the HCM
                team&apos;s product vision, influencing product
                direction.
              </li>
            </ul>
          </div>
        }
        metaLeft={[
          { label: "Role", value: "UX Design Intern" },
          { label: "Team", value: "Workforce Management" },
        ]}
        metaRight={[
          { label: "Timeline", value: "May 2025 – Aug 2025" },
          { label: "Tools", value: "Figma, FigJam" },
        ]}
        skills={[
          "UX Research",
          "Interaction Design",
          "Component Usage & Patterns",
          "Wireframing",
          "Prototyping",
          "Storytelling",
        ]}
      />

      <div className="case-shell case-body prose-case">
        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>Overview: helping nurses plan their busy schedules</h2>
          <p>
            Nurses have complex schedules that vary week-to-week, especially in
            inpatient settings where 24/7, round the clock coverage is needed. In
            a process called self-scheduling, nurses typically sign up for shifts
            they want to work - something that is done 8 to 10 weeks in advance.
            Whether they actually get assigned the shifts they want depends on
            several factors ranging from hospital needs, seniority status, and
            more.
          </p>
          <p>
            Currently, leading industry tools provide inefficient workflows for
            nurses to manage their complex schedules. Some nurses even switch
            between third party apps to plan their schedules for the upcoming
            scheduling period, which typically ranges from 4-6 weeks.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-timeline.png"
          alt="Timeline from August to October, where self-scheduling opens August 10, closes August 23, schedule publishes September 1, and schedule period occurs October 4-November 14"
          width={999}
          height={209}
          caption="Example of self-scheduling timeline"
          framed
        />

        <CaseTextBlock>
          <p>
            In efforts to effectively plan and maintain schedules that mesh well
            with their personal life and benefit work-life balance, how might we
            streamline the nurse self-scheduling process and design a mobile
            experience that helps nurses easily sign up for shifts they want to
            work?
          </p>
          <p>
            As a UX Design Intern, I explored different ways to meet nurse needs
            in the scheduling process and collaborated with researchers and
            designers to design a self-scheduling mobile experience.
          </p>
        </CaseTextBlock>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>RESEARCH</CaseSectionLabel>
          <h2>Nurses face a complex, error-prone scheduling process</h2>
          <p>
            There were 3 main pain points that I used to motivate my design
            solutions. These pain points included:
          </p>
          <ol>
            <li>Current workflows are not efficient and error-prone</li>
            <li>There is a constant concern of accidentally overscheduling</li>
            <li>Strategizing and comparing shifts is mentally exhausting</li>
          </ol>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-research-workflow.png"
          alt="Nurses using official scheduling software then hopping into third-party apps to better visualize their shifts"
          width={1024}
          height={332}
          caption="Nurses unable to effectively plan and visualize their scheduling commitments"
          framed
        />

        <CaseTextBlock>
          <p>
            To address these pain points, I needed to design a tool that will help
            nurses plan ahead, while giving them the freedom and control to choose
            the shifts they want and understand where they are committed to work.
          </p>
        </CaseTextBlock>

        <CaseCallout caption="Problem statement">
          <p className="lead">
            How might we{" "}
            <strong>redesign the employee self-scheduling flow</strong> to
            benefit nurse wellbeing, reduce burnout, and improve work-life
            balance?
          </p>
        </CaseCallout>

        <CaseTextBlock>
          <p>
            Using Amanda Polks, a registered nurse, as my persona: Amanda&apos;s
            primary goal is to select the shifts she wants to work in order to
            have a work schedule that fits with her personal life.
          </p>
          <p>
            In order to achieve her primary goals, some sub goals that will help
            Amanda include:
          </p>
          <ol>
            <li>
              Viewing and comparing all available shifts to choose the best match
              based on shift needs and preferences
            </li>
            <li>
              Visualizing shifts she&apos;s signing up for to understand when
              she&apos;s committed to work
            </li>
            <li>
              Meeting scheduling requirements to maintain compliance with hospital
              rules and state laws
            </li>
            <li>
              Getting help identifying suitable shifts for her so she can make
              informed decisions about her schedule
            </li>
          </ol>
        </CaseTextBlock>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>IDEATION</CaseSectionLabel>
          <h2>Exploring primary month views and flight-picker inspired concepts</h2>
          <p>
            I established a high level user flow to guide my concept sketches and
            experimented with different design approaches while evaluating whether
            the concepts would actually help Amanda meet her user goals.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-sketches.png"
          alt="Low fidelity concept sketches of a user flow within the app and mobile screens"
          width={1120}
          height={613}
          caption="User flows and concept sketches"
          framed
          framePadding="40px clamp(16px, 3vw, 47px)"
        />

        <CaseTextBlock>
          <h2>Utilizing AI to recommend schedules and propose alternatives</h2>
          <p>
            Due to complex scheduling requirements and personal needs, I explored
            how AI could help surface viable scheduling options to reduce the
            initial manual work of building a schedule from scratch. Instead of
            nurses choosing individual shifts for each scheduling period, the
            system can automatically recommend a schedule of shifts based on the
            nurse&apos;s known preferences, seniority status, department and
            hospital&apos;s needs, state laws, and more.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-ai-recommended.png"
          alt="Two phone screens showing self-scheduling opening and an AI-recommended schedule with time of day, compatible shifts, and day off callouts"
          width={932}
          height={274}
          caption="View AI-recommended schedule"
          framed
          framePadding="40px clamp(16px, 3vw, 47px)"
        />

        <CaseTextBlock>
          <p>
            What happens if a nurse has a new constraint to account for that
            wasn&apos;t considered in the initial recommended schedule? Aside from
            retaining the ability to make manual edits, I designed a workflow to
            allow nurses to dynamically generate new, optimized schedules via
            natural language.
          </p>
          <p>
            For example, if Amanda wanted to update her preferences or could no
            longer work a scheduled day, she could simply specify her needs and
            the system can present some alternative schedules for her to take on.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-ai-edits.png"
          alt="Three phone screens showing a nurse prompting for schedule changes, reviewing alternate AI-generated options, and confirming an updated schedule"
          width={890}
          height={286}
          caption="Edit and generate alternate schedules by prompting"
          framed
          framePadding="40px clamp(16px, 3vw, 47px)"
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>Impact</h2>
          <p>
            The final prototype consisted of viewing the recommended schedule,
            editing the schedule manually or with AI, and reviewing and submitting
            a schedule.
          </p>
          <p>
            My approach was adopted into the Human Capital Management (HCM)
            team&apos;s aspirational designs, influencing the
            vision and product direction.
          </p>
          <p>To recap, my solution helps Amanda:</p>
          <ol>
            <li>Easily identify suitable shifts and visualize schedules,</li>
            <li>Stay in control without doing the heavy lifting</li>
            <li>Meet scheduling requirements</li>
          </ol>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-weekview.png"
          alt="Self scheduling week view, October 25, week of October 12-18. User has 3 shifts scheduled totalling at 36 hours for the week."
          width={999}
          height={690}
          caption="Scheduling week view and requirements warning"
          framed
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>REFLECTION</CaseSectionLabel>
          <h2>Learnings</h2>
          <p>
            Some learnings, among many others, that I will be taking with me
            include:
          </p>
          <ul>
            <li>not losing sight of user goals while designing</li>
            <li>
              making sure I&apos;m focusing on a specific problem and that
              it&apos;s the right problem, and
            </li>
            <li>
              making sure I am effectively rationalizing and explaining the
              motivations behind my design decisions
            </li>
          </ul>
          <p>
            Thank you to my mentors and support team for the encouragement and
            making this project possible!
          </p>
        </CaseTextBlock>

        <hr className="case-divider" />

        <CaseTextBlock>
          <p>
            For more information about this project, please{" "}
            <a
              className="link-blue"
              href="mailto:sjwtang@gmail.com?subject=Shirley%20Tang%20portfolio%20inquiry"
            >
              send me an email
            </a>
            !
          </p>
        </CaseTextBlock>

        <BackToTop />
      </div>
    </article>
  );
}
