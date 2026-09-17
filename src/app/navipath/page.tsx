import {
  CaseCallout,
  CaseHero,
  CaseImage,
  CaseSectionLabel,
  CaseTextBlock,
} from "@/components/CaseStudy";
import { ExpandableImage } from "@/components/ExpandableImage";
import { OutlineButton } from "@/components/OutlineButton";

export default function NaviPathPage() {
  return (
    <article>
      <CaseHero
        title="NaviPath: AI-Assisted Mitosis Search"
        subtitle="Integrating artificial intelligence to enhance pathologist workflows in identifying mitoses"
        image="/images/np-hero.png"
        imageAlt="Laptop displaying image of tissue scan"
        imageWidth={1305}
        imageHeight={744}
        framed
        divider={false}
        titleGap={24}
        framePadding="40px 0"
        frameClassName="case-hero-frame np-hero-frame"
        metaLeft={[
          { label: "Role", value: "UX Designer" },
          { label: "Collaborators", value: "Hongyan Gu" },
        ]}
        metaRight={[
          { label: "Timeline", value: "Jan 2022 – Apr 2022" },
          { label: "Tools", value: "Adobe XD, Miro" },
        ]}
        skills={[
          "Personas",
          "User Flows",
          "Wireframing",
          "Prototyping",
          "Usability Testing",
        ]}
      />

      <div className="case-shell case-body prose-case">
        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>
            Honorable mention at ACM Conference on Human Factors in Computing
            Systems (CHI) 2023
          </h2>
          <p>
            Access this project&apos;s publication, “Augmenting Pathologists with
            NaviPath: Design and Evaluation of a Human-AI Collaborative
            Navigation System“ at the ACM digital library.
          </p>
          <p>
            <OutlineButton href="https://dl.acm.org/doi/10.1145/3544548.3580694">
              See publication
            </OutlineButton>
          </p>
        </CaseTextBlock>

        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>
            Overview: helping pathologists optimize the mitosis-identifying
            process
          </h2>
          <p>
            Areas of mitosis can suggest the presence of meningioma, which is
            something pathologists routinely check for when evaluating digitized
            tissue scans. To leverage artificial intelligence in the medical
            domain, we sought to design a tool that could help pathologists find
            mitoses more efficiently.
          </p>
          <p>
            Our solution is NaviPath: an AI-enabled navigational tool that helps
            pathologists identify areas of mitosis based on a set of interactive
            cellular criteria telling users where to look. NaviPath is built upon
            a digital pathology viewer and guides pathologists through levels of
            magnification with AI recommendations.
          </p>
          <p>
            Overall, we found that navigation efficiency, participant precision,
            and recall for identifying target pathology patterns were
            significantly improved (p&lt;0.05) using NaviPath.
          </p>
          <p>
            As a UX designer, I led the research and design process from
            synthesizing user research, designing a prototype, and moderating
            usability tests to uncover insights on how pathologists interact with
            AI systems.
          </p>
        </CaseTextBlock>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>DISCOVERY</CaseSectionLabel>
          <h2>Synthesizing data from user interviews</h2>
          <p>
            I analyzed 6 user interviews that focused on learning about the
            pathologist navigation process.
          </p>
          <p>We found that pathologists tended to:</p>
          <ol>
            <li>
              View scans holistically at a low magnification, then at regions of
              interest in higher magnifications
            </li>
            <li>
              Use macroscopic patterns visible in low magnifications to locate
              regions of interest
            </li>
            <li>Search systematically in high magnifications</li>
          </ol>
          <p>
            Using this data, I created a post-graduate year 4 pathology resident
            persona to guide our focus on the target users.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/np-persona.png"
          alt="Pathology resident persona"
          width={762}
          height={564}
          caption="Pathology resident persona"
          framed
          framePadding="40px 100px"
          objectFit="cover"
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>The problem</h2>
          <p>
            Previous literature suggests pathologist constraints with time,
            focus, and price when using digital pathology tools compared to
            traditional microscopes. Additionally, pathologists have been found
            to generally prefer retaining agency when working with AI systems.
          </p>
          <p>
            While we wanted the system to integrate AI, it was important to
            encourage more human engagement, rather than leading with AI.
          </p>
        </CaseTextBlock>

        <CaseCallout caption="Problem statement" framePadding="40px 50px">
          <p className="lead">
            How might we implement a navigation system that can provide AI
            recommendations to pathologists identifying mitosis, without
            disrupting their current workflow?
          </p>
        </CaseCallout>

        <CaseTextBlock>
          <h2>Reviewing technical needs</h2>
          <p>
            One of the technical needs involved four levels of magnification that
            pathologists could use to look for mitosis: a tissue level that shows
            the entire scan, a local level that magnifies enough to show cellular
            structures, a cellular level, and a mitotic level for detailed
            inspection.
          </p>
          <p>
            I created a user flow to visualize how interactions between levels
            would take place, in which we found that the system would essentially
            be a tree traversal: users would be able to follow down a path of
            recommendations across magnification levels.
          </p>
        </CaseTextBlock>

        <CaseImage
          caption="User tasks and flows demonstrate interactions with the magnification levels"
          framed
          framePadding="29px 48px"
          frameStyle={{
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <ExpandableImage
            src="/images/np-tasks.jpg"
            alt="Miro board with user task sticky notes"
            width={1209}
            height={382}
            fillTrigger
            style={{ width: "100%", height: "auto" }}
          />
          <ExpandableImage
            src="/images/np-requirements.jpg"
            alt="System requirements board"
            width={1209}
            height={287}
            fillTrigger
            style={{ width: "100%", height: "auto" }}
          />
        </CaseImage>

        <CaseTextBlock>
          <h2>Aligning with system requirements</h2>
          <p>
            System design requirements shifted as we continued to uncover user
            needs and technical constraints. These requirements included the
            system being multi-faceted, self-explainable, and adjustable.
          </p>
          <p>
            We also had to prioritize a couple of points across different
            dimensions:
          </p>
          <ol>
            <li>
              Considering users: how do we logically present the recommendations
              to pathologists?
            </li>
            <li>
              Considering human-computer interaction: what designs can properly
              convey our intended function?
            </li>
            <li>
              Considering AI: what is needed for mitosis detection and how can we
              justify our recommendations?
            </li>
          </ol>
        </CaseTextBlock>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>DESIGN</CaseSectionLabel>
          <h2>Iterating on the navigation experience</h2>
          <p>
            Wireframes for the tissue and cell levels helped fuel exploration
            around how to incorporate potential elements of the system based on
            research. We iterated on prioritized features such as recommendation
            hotspots and criteria filters.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/np-wireframes.png"
          alt="Sketched, low-fidelity wireframes"
          width={1211}
          height={1307}
          caption="Low-fidelity wireframes of the system interface and recommendation slider"
          framed
          framePadding="40px 47px"
        />

        <CaseTextBlock>
          <h2>Challenges</h2>
          <p>
            One challenge was determining how to represent the criteria that
            users could toggle to actively filter recommendations. During the
            first round of testing, we opted to include six different criteria
            in the interface and continued refining how they were presented.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/np-iterations.png"
          alt="Design iterations of the system interface"
          width={1211}
          height={1155}
          caption="Design iterations of the system interface"
          framed
          framePadding="40px 47px"
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>TEST</CaseSectionLabel>
          <h2>Understanding pain points and mental models</h2>
          <p>The goals of usability testing included:</p>
          <ol>
            <li>
              Checking if users could understand and use the criteria provided by
              the system
            </li>
            <li>
              Determining whether the assumptions about the users&apos; workflow
              correspond with the users&apos; mental models, and
            </li>
            <li>
              Exploring whether there are any design inconsistencies or pain
              points within the user interface or interactions.
            </li>
          </ol>
          <p>
            The session consisted of four parts: a project overview, system
            function section, co-design session, and design review.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/np-testing.png"
          alt="Moderating usability testing sessions at the lab"
          width={1209}
          height={357}
          caption="Moderating usability testing sessions at the lab"
          framed
          framePadding="40px 48px"
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>TEST</CaseSectionLabel>
          <h2>Working sessions with pathologists</h2>
          <p>
            We shifted our focus from testing ease of use to evaluating accuracy
            and effectiveness when using the system. The next round of testing
            aimed at validating NaviPath against using only human or only AI
            approaches.
          </p>
          <ol>
            <li>Does NaviPath lead to higher quality mitosis reporting?</li>
            <li>Will NaviPath save pathologists&apos; time and effort?</li>
            <li>Does NaviPath add value to participants&apos; workflow?</li>
          </ol>
          <p>
            Three testing conditions were created, where pathologists (n=15)
            either:
          </p>
          <ol>
            <li>
              Navigated a pathology tumor scan viewer without any AI assistance
            </li>
            <li>Navigated using NaviPath, or</li>
            <li>Were compared to an AI-automatic reporting system</li>
          </ol>
          <p>
            Participant interactions, reporting of mitoses, and time-elapsed were
            recorded.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/np-mvp.png"
          alt="High fidelity developed NaviPath screen"
          width={1209}
          height={422}
          caption="NaviPath MVP displaying hotspots of mitosis areas"
          framed
          framePadding="40px 48px"
        />

        <CaseTextBlock>
          <CaseSectionLabel>FINDINGS</CaseSectionLabel>
          <h2>Greater efficiency and better performance with NaviPath</h2>
          <p>
            We found that NaviPath produced significantly better performance
            compared to manual navigation and higher precision and recall
            compared to the AI-only system.
          </p>
          <p>
            Though participants spent more time on average using NaviPath, they
            saw significantly more mitoses in unit time compared to manual
            navigation.
          </p>
          <p>
            And lastly, panning and zooming interactions were significantly
            reduced using NaviPath compared to manual navigation.
          </p>
        </CaseTextBlock>

        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>Final shipped designs</h2>
        </CaseTextBlock>

        <div className="np-final">
          <ExpandableImage
            src="/images/np-final.png"
            alt="Final NaviPath interface"
            width={546}
            height={314}
            style={{ width: 546, maxWidth: "100%", height: "auto" }}
          />
          <div className="np-final-copy">
            <p className="np-final-title">Identifying Mitoses using NaviPath</p>
            <p className="np-final-desc">
              AI recommendations and flexibility in toggling various cellular
              criteria enhance the ability to find areas of mitoses in digitized
              tissue scans.
            </p>
          </div>
        </div>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>REFLECTION</CaseSectionLabel>
          <h2>Learnings</h2>
          <ul>
            <li>
              It was a challenging and novel experience designing within the
              medical space and in consideration of such complex design
              requirements.
            </li>
            <li>
              With a more flexible timeline, it would have been helpful to
              continue ideating on features and testing design ideas early.
            </li>
            <li>
              Establishing a set routine to follow for each testing session and
              encouraging the exploration of ideas will help continue uncovering
              more in future studies.
            </li>
          </ul>
        </CaseTextBlock>
      </div>
    </article>
  );
}
