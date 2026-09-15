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
        title="Oracle HCM: nurse self-scheduling"
        subtitle="Helping nurses sign up for their desired shifts"
        image="/images/oracle-hero.png"
        imageAlt="Mobile phone showing nurse self-scheduling calendar"
        imageWidth={241}
        imageHeight={487}
        framed
        divider={false}
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
          caption="Example of a typical self-scheduling timeline"
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
          <h2>Identifying nurse challenges and needs</h2>
          <p>
            There were 3 main pain points that I used to motivate my design
            solutions. These pain points included:
          </p>
          <ol>
            <li>Current workflows are not efficient and error-prone</li>
            <li>There is a constant concern of accidentally overscheduling</li>
            <li>Strategizing and comparing shifts is mentally exhausting</li>
          </ol>
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
          <h2>Concept exploration</h2>
          <p>
            I established a high level user flow to guide my concept sketches and
            experimented with different design approaches, all the while
            evaluating whether the concepts would actually help Amanda meet her
            user goals.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/oracle-sketches.png"
          alt="Low fidelity concept sketches of a user flow within the app and mobile screens"
          width={1120}
          height={613}
          caption="User flows and concept sketches"
          framed
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
            My approach will be adopted into the Human Capital Management (HCM)
            team&apos;s long term aspirational designs, influencing the long-term
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
          caption="Scheduling week view (note: design has been modified from original design system)"
          framed
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>REFLECTION</CaseSectionLabel>
          <h2>Learnings</h2>
          <p>
            Some learnings, among many others, that I took away from this project
            include:
          </p>
          <ul>
            <li>Not losing sight of user goals while designing</li>
            <li>
              Making sure I&apos;m focusing on a specific problem and that
              it&apos;s the right problem
            </li>
            <li>
              Always effectively rationalizing and explaining the motivations
              behind my design decisions
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
      </div>
    </article>
  );
}
