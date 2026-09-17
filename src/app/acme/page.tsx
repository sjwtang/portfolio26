import Image from "next/image";
import {
  CaseCallout,
  CaseHero,
  CaseImage,
  CaseSectionLabel,
  CaseTextBlock,
} from "@/components/CaseStudy";
import { ExpandableImage } from "@/components/ExpandableImage";

const finals = [
  {
    src: "/images/acme-final-popup.png",
    alt: "Weekly challenges popup on the ACME dashboard",
    width: 1943,
    height: 1168,
    title: "Complete weekly challenges",
    description:
      "Finish cases and compete against fellow investigators for rewards",
  },
  {
    src: "/images/acme-final-dashboard.png",
    alt: "ACME investigator dashboard showing cases and performance",
    width: 1943,
    height: 1168,
    title: "Monitor assigned cases and performance",
    description:
      "Understand daily metrics and prioritize cases that need attention",
  },
  {
    src: "/images/acme-final-case.png",
    alt: "ACME case details screen for investigating flagged transactions",
    width: 1943,
    height: 1168,
    title: "Investigate case details",
    description:
      "Quickly identify why cases were flagged and next steps for resolution",
  },
  {
    src: "/images/acme-final-stats.png",
    alt: "ACME My Stats screen showing impact and rewards",
    width: 1943,
    height: 1168,
    title: "Track impact and rewards",
    description:
      "Understand impact across the company and take pride in personal records",
  },
  {
    src: "/images/acme-final-training.png",
    alt: "ACME training screen for skill building",
    width: 1943,
    height: 1168,
    title: "Build skills and level up",
    description:
      "Continue career growth by setting goals and taking training courses",
  },
];

export default function AcmePage() {
  return (
    <article>
      <CaseHero
        title="ACME: Credit Card Fraud Dashboard"
        subtitle="Supporting call center investigators to stop fraudulent credit card transactions"
        image="/images/acme-hero.png"
        imageAlt="ACME credit card fraud dashboard screens"
        imageWidth={2040}
        imageHeight={1407}
        framed
        divider={false}
        titleGap={28}
        framePadding="40px 0"
        frameClassName="case-hero-frame acme-hero-frame"
        metaLeft={[
          { label: "Role", value: "UX Designer" },
          { label: "Project", value: "Graduate Interaction Design Course" },
        ]}
        metaRight={[
          { label: "Timeline", value: "Oct 2025 – Dec 2025" },
          { label: "Tools", value: "Axure RP" },
        ]}
        skills={[
          "Jobs To Be Done",
          "Conceptual Models",
          "Information Architecture",
          "Wireframing",
          "Prototyping",
          "Data Visualization",
          "Interaction Design",
          "Gamification",
        ]}
      />

      <div className="case-shell case-body prose-case">
        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>
            Overview: optimizing workflows to resolve suspicious credit card
            activity
          </h2>
          <p>
            ACME is a fictitious San Jose based decision analytics company,
            working with credit card companies to screen transactions and call
            out fraudulent activity.
          </p>
          <p>
            As part of an interaction design course in my graduate program, this
            project focused on crafting and gamifying a new experience to
            streamline the investigator experience of responding to customers and
            resolving cases.
          </p>
          <p>
            As a UX designer, I designed a dashboard to aid investigators with
            their day-to-day case loads and workflows, enabling them to quickly
            solve cases with high accuracy.
          </p>
        </CaseTextBlock>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>RESEARCH</CaseSectionLabel>
          <h2>What do investigators need in their day-to-day?</h2>
          <p>
            Typically, investigators receive cases from their assigned work
            queues and review information for signs of fraud. Their performance
            is dictated by meeting accuracy and speed goals, where each case must
            be either determined as fraud, no fraud, or escalated to another
            investigator for further examination.
          </p>
          <p>
            While driven by the desire to sustain good performance, drive their
            career, and not let teammates down, there is also an opportunity for
            us as designers to increase the investigators&apos; sense of reward
            and mitigate the repetitive nature of the job by leveling up skills
            and collecting rewards.
          </p>
        </CaseTextBlock>

        <CaseImage
          framed
          framePadding="46px 37px"
          caption="Investigator goals and pain points"
        >
          <div className="acme-persona">
            <div className="acme-persona-profile">
              <div className="acme-persona-photo">
                <Image
                  src="/images/acme-persona-crop.png"
                  alt="Adam, call center investigator"
                  width={230}
                  height={236}
                />
              </div>
              <div className="acme-persona-label">
                <p className="acme-persona-name">Adam</p>
                <p className="acme-persona-role">Call center investigator</p>
              </div>
            </div>
            <div className="acme-persona-lists">
              <div>
                <p className="acme-persona-heading">Goals:</p>
                <ul>
                  <li>
                    Efficiently get through his caseload in the optimal priority
                    order
                  </li>
                  <li>
                    Quickly get a clear understanding of what each case is about,
                    so that he can shift into the appropriate context, contact
                    the customer, and resolve the issue or override the AI.
                  </li>
                  <li>
                    Make good recommendations on forwarding cases if the given
                    activity is suspicious and he can&apos;t resolve it or it is
                    a false positive
                  </li>
                  <li>
                    Clearly communicate his findings within the case by attaching
                    relevant data and descriptions
                  </li>
                </ul>
              </div>
              <div>
                <p className="acme-persona-heading">Pain points</p>
                <ul>
                  <li>
                    He can&apos;t see how many cases are in his queue and how
                    long he has taken to work on each case.
                  </li>
                  <li>
                    It&apos;s hard to find the exact information about why the
                    transaction has been flagged and how to find the rest of the
                    information to quickly and accurately make a decision to
                    solve the case.
                  </li>
                  <li>
                    He is missing tools that allow him to clearly communicate
                    issues or patterns of activity to his peers and managers in a
                    repeatable and consistent way
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CaseImage>

        <CaseTextBlock>
          <p>
            To further outline the tasks that investigators need to complete, I
            identified Jobs To Be Done:
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/acme-jtbd.png"
          alt="Jobs to be done diagram for fraud investigators"
          width={2720}
          height={1838}
          framed
          framePadding="46px 37px"
          caption="JTBD includes: resolve a case, flag a case, escalate a case, flag model, complete game, complete training, and request assist on case"
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>IDEATION</CaseSectionLabel>
          <h2>Defining the conceptual model</h2>
          <p>
            To establish the interaction language (aka the &quot;grammar&quot; of
            the design) and guide user flows, I defined all possible objects and
            actions that the design should allow the investigator to accomplish.
            Additionally, I prioritized the object and action pairings based on
            how frequent the investigator would be performing the task to
            understand what tasks should be easily accessed from the dashboard.
          </p>
          <p>
            In the Object-Action table, X&apos;s signify object/action pairings
            that are applicable to investigators, e.g., investigators can
            &quot;complete cases&quot;, &quot;flag cases&quot;, &quot;complete
            queues&quot;, etc.
          </p>
        </CaseTextBlock>

        <CaseImage
          framed
          frameClassName="acme-frame-matrix"
          framePadding="54px 48px"
          caption="Objects-action table and prioritization matrix"
        >
          <ExpandableImage
            src="/images/acme-oa-table.png"
            alt="Object-action table for investigator tasks"
            width={1034}
            height={548}
            style={{ width: 296, maxWidth: "100%", height: "auto" }}
          />
          <ExpandableImage
            src="/images/acme-priority.png"
            alt="Prioritization matrix for object-action pairings"
            width={992}
            height={412}
            style={{ width: 288, maxWidth: "100%", height: "auto" }}
          />
        </CaseImage>

        <CaseTextBlock>
          <p>
            Based on the identified objects and actions, tasks, and
            investigators&apos; goals, the following how might we statements were
            formed:
          </p>
        </CaseTextBlock>

        <CaseCallout caption="Problem statements">
          <p className="lead">
            How might we{" "}
            <strong>
              help fraud investigators quickly make confident decisions
            </strong>{" "}
            by giving them the right information and context at the right time?
          </p>
          <p className="lead">
            How might we{" "}
            <strong>
              make repetitive fraud investigation work more motivating
            </strong>{" "}
            while encouraging accuracy, teamwork, and sustained performance?
          </p>
        </CaseCallout>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>DESIGN</CaseSectionLabel>
          <h2>Wireframes and initial concepts</h2>
          <p>
            Starting with wireframes and using the Salesforce design system, I
            began by exploring some visualizations that could assist an
            investigator to understand their performance. This included data
            around the number of cases closed per hour, how accurately the cases
            were being closed, and reinforcements of productivity such as
            displaying the user&apos;s solved cases against a set goal.
          </p>
          <p>
            Additionally, I explored ways to display case information once the
            investigator started working on a case, a stats page where the user
            could monitor their impact and rankings, and a training page to allow
            investigators to set career goals and learn skills.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/acme-wireframes.png"
          alt="Wireframes exploring performance visualizations and case flows"
          width={2975}
          height={1649}
          framed
          framePadding="28px 39px"
          caption="Wireframes created to validate visualizations and design direction"
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>VALIDATION</CaseSectionLabel>
          <h2>Stakeholder feedback</h2>
          <p>
            Feedback from the project stakeholder centered around requesting
            assists, specifically, the lack of being able to access assisted
            cases from the central dashboard. Additionally, on the
            investigator&apos;s &quot;My Stats&quot; page, it was too much
            cognitive load to interpret the dot chart showing the
            investigator&apos;s impact across categories of performance,
            finance, collaboration, and growth.
          </p>
          <p>
            To address these concerns, I added an assist entry point to the
            dashboard, explored different visualizations, and continued iterating
            on designs and optimizing the experience based on the feedback.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/acme-problems.png"
          alt="Annotated wireframes highlighting stakeholder pain points"
          width={1491}
          height={1649}
          framed
          framePadding="28px 77.5px"
          caption="Pain points uncovered during stakeholder meeting"
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>Final Shipped Designs</h2>
        </CaseTextBlock>

        <div className="acme-finals">
          {finals.map((item) => (
            <div key={item.src} className="acme-final">
              <ExpandableImage
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                style={{ width: 662, maxWidth: "100%", height: "auto" }}
              />
              <div className="acme-final-copy">
                <p className="acme-final-title">{item.title}</p>
                <p className="acme-final-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>REFLECTION</CaseSectionLabel>
          <h2>Food for Thought</h2>
          <ul>
            <li>
              When adding visualizations, it is important to not forget what
              information the user needs to understand in the grand scheme of
              things, especially in relation to their tasks at hand. What is the
              user comparing, categorizing, or normalizing?
            </li>
            <li>
              Data tells stories, and the chart or method used to communicate
              that data is all the more crucial. Just because something looks
              cool, doesn&apos;t mean it&apos;s the best option.
            </li>
            <li>
              &quot;Gamifying&quot; an experience involves understanding the
              system owner&apos;s goals - in this case, it was getting
              investigators to stay engaged continually improve their
              performance. It doesn&apos;t always equate to something like video
              games!
            </li>
          </ul>
        </CaseTextBlock>
      </div>
    </article>
  );
}
