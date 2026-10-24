import { BackToTop } from "@/components/BackToTop";
import {
  CaseCallout,
  CaseHero,
  CaseImage,
  CaseSectionLabel,
  CaseTextBlock,
} from "@/components/CaseStudy";
import { ExpandableImage } from "@/components/ExpandableImage";

export default function OraclePage() {
  return (
    <article>
      <CaseHero
        title="Oracle HCM: Nurse Self-Scheduling"
        subtitle="Helping nurses sign up for their desired shifts"
        image="/images/oracle-hero.png"
        imageAlt="Nurse self-scheduling product collage with a month calendar, an AI prompt for night shifts, and a day-level recommended schedule"
        imageWidth={2303}
        imageHeight={791}
        imageQuality={100}
        imageUnoptimized
        fullBleed
        divider={false}
        tldr={
          <div className="case-tldr">
            <h2 className="case-tldr-heading">TL;DR</h2>
            <ul className="case-tldr-list">
              <li>
                <strong>Problem:</strong> Nurses plan their shifts weeks in
                advance while balancing hospital needs, seniority, and
                compliance rules. Existing tools make scheduling error-prone and
                mentally exhausting.
              </li>
              <li>
                <strong>What I did:</strong> Designed a mobile-first, AI-assisted
                self-scheduling experience that recommends compliant schedules
                and lets nurses refine them manually or using prompts. Presented
                design concepts to stakeholders and built high-fidelity
                prototypes.
              </li>
              <li>
                <strong>Outcome:</strong> My proposed approach was incorporated
                into the HCM team&apos;s aspirational designs, influencing
                product vision and direction.
              </li>
            </ul>
            <div className="case-tldr-actions">
              <a className="case-tldr-jump" href="#final-designs">
                Jump to final designs ↓
              </a>
            </div>
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
          alt="Nurse looking at a phone beside a timeline from August to October, with the quote “It's August, and I already need to pick my shifts for October.” August is labeled Choose shifts and October is labeled Shifts start."
          width={1024}
          height={297}
          caption="Example of self-scheduling timeline"
          framed
          quality={100}
          unoptimized
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
          <ol className="oracle-pain-list">
            <li>Current workflows are not efficient and error-prone</li>
            <li>There is a constant concern of accidentally overscheduling</li>
            <li>Strategizing and comparing shifts is mentally exhausting</li>
          </ol>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-research-workflow.png"
          alt="Existing calendar tools lack an ability to visualize shift commitments at a glance"
          width={2231}
          height={789}
          caption="Nurses unable to effectively plan and visualize their scheduling commitments"
          framed
          unoptimized
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
          <h2>From first draft explorations to a final direction</h2>
          <p>
            I explored initial concepts, incorporated
            design review feedback from fellow designers and stakeholders, and
            refined the experience to better support nurses&apos; scheduling needs.
            Ultimately, we leaned towards a direction that adopted both a full
            month and week view, to allow nurses to understand their schedules at
            a high level and to delve deeper into each week if desired.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-wireframes.png"
          alt="Three rows of mobile screens: initial primary month view concepts, concepts after design reviews, and high-fidelity month-to-week shift selection"
          width={2507}
          height={4455}
          caption="Concept iterations: initial ideas to a final design direction"
          framed
          quality={100}
          unoptimized
        />

        <CaseTextBlock>
          <h2>Utilizing AI to recommend schedules and propose alternatives</h2>
          <p>
            Due to complex scheduling requirements and personal needs, I explored
            how AI could help surface viable scheduling options to{" "}
            <strong>
              reduce the initial manual work of building a schedule from scratch
            </strong>
            . Instead of
            nurses choosing individual shifts for each scheduling period, the
            system can automatically recommend a schedule of shifts based on the
            nurse&apos;s known preferences, seniority status, department and
            hospital&apos;s needs, state laws, and more.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-ai-recommended.png"
          alt="Two phone screens showing a work calendar to start self-scheduling and an AI-recommended October schedule, with a callout that days with AI-detected compatible shifts have a colorful border"
          width={1549}
          height={854}
          caption="View AI-recommended schedule"
          framed
          quality={100}
          unoptimized
        />

        <CaseTextBlock>
          <p>
            What happens if a nurse has a new constraint to account for that
            wasn&apos;t considered in the initial recommended schedule? Aside from
            retaining the ability to make manual edits, I designed a workflow to
            allow nurses to dynamically generate new, optimized schedules via
            natural language. Nurses can{" "}
            <strong>
              quickly adjust complex schedules without manually searching for
              compatible shifts, while ensuring their scheduling requirements are
              met
            </strong>
            .
          </p>
          <p>
            For example, if Amanda wanted to update her preferences or could no
            longer work a scheduled day, she could simply specify her needs and
            the system can present some alternative schedules for her to take on.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-ai-edits.png"
          alt="Two phone screens showing a nurse specifying desired scheduling requirements and AI proposing optimal scheduling alternatives"
          width={1947}
          height={859}
          caption="Edit and generate alternate schedules by prompting"
          framed
          quality={100}
          unoptimized
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <h2 id="final-designs">Final designs</h2>
        </CaseTextBlock>

        <div className="acme-finals">
          <div className="acme-final oracle-final">
            <ExpandableImage
              src="/images/oracle-identify-shifts.png"
              alt="Two phone screens showing a month calendar of selected shifts and a day view with recommended shifts and staffing insights"
              width={1465}
              height={897}
              quality={100}
              unoptimized
              fillTrigger
              style={{ width: "100%", height: "auto" }}
            />
            <div className="acme-final-copy">
              <p className="acme-final-title">
                Easily identify suitable shifts and visualize schedule
              </p>
              <p className="acme-final-desc">
                Nurses can pick shifts based on recommendations and understand
                where they are committing to work
              </p>
            </div>
          </div>
          <div className="acme-final oracle-final">
            <ExpandableImage
              src="/images/oracle-stay-in-control.png"
              alt="Scheduling interface showing nurses can edit and generate alternative schedules with AI"
              width={1291}
              height={899}
              quality={100}
              unoptimized
              fillTrigger
              style={{ width: "100%", height: "auto" }}
            />
            <div className="acme-final-copy">
              <p className="acme-final-title">
                Stay in control without doing the heavy lifting
              </p>
              <p className="acme-final-desc">
                Nurses can leverage AI to make edits and generate different
                scheduling options
              </p>
            </div>
          </div>
          <div className="acme-final oracle-final">
            <ExpandableImage
              src="/images/oracle-meet-requirements.png"
              alt="Scheduling interface showing compliance with hospital, department, and state requirements"
              width={807}
              height={897}
              quality={100}
              unoptimized
              fillTrigger
              className="oracle-meet-requirements-image"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="acme-final-copy">
              <p className="acme-final-title">
                Meet scheduling requirements
              </p>
              <p className="acme-final-desc">
                Nurses can ensure their schedules follow hospital and department
                rules, and state laws
              </p>
            </div>
          </div>
        </div>

        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>Impact</h2>
          <p>
            My approach was adopted into the Human Capital Management (HCM)
            team&apos;s aspirational designs, influencing the
            vision and product direction.
          </p>
        </CaseTextBlock>

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

        <BackToTop />
      </div>
    </article>
  );
}
