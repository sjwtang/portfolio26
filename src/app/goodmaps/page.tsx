import Image from "next/image";
import {
  CaseHero,
  CaseImage,
  CaseSectionLabel,
  CaseTextBlock,
} from "@/components/CaseStudy";
import { ExpandableImage } from "@/components/ExpandableImage";
import { PhoneFrame } from "@/components/PhoneFrame";

export default function GoodMapsPage() {
  return (
    <article>
      <CaseHero
        title="GoodMaps: indoor navigation"
        subtitle="Creating an accessible wayfinding app to navigate inside complex buildings"
        image="/images/gm-hero.png"
        imageAlt="GoodMaps indoor navigation app screens"
        imageWidth={1300}
        imageHeight={623}
        framed
        divider={false}
        titleGap={24}
        framePadding="40px 0 24px"
        frameGap={51}
        heroFooter={
          <div className="gm-tool-logos">
            <Image src="/images/gm-tool1.png" alt="" width={84} height={25} />
            <Image src="/images/gm-tool2.png" alt="" width={85} height={25} />
          </div>
        }
        metaLeft={[
          { label: "Role", value: "UX Designer" },
          {
            label: "Collaborators",
            value: "Kat Heller, Jennifer Palilonis, Rei Kacanja",
          },
        ]}
        metaRight={[
          { label: "Timeline", value: "Jul 2022 – Oct 2023" },
          { label: "Tools", value: "Axure RP, Figma, Miro" },
        ]}
        skills={[
          "User Research",
          "Personas",
          "Journey Maps",
          "User Flows",
          "Information Architecture",
          "Wireframing",
          "Prototyping",
          "Interaction Design",
          "User Acceptance Testing",
        ]}
      />

      <div className="case-shell case-body prose-case">
        <hr className="case-divider" />

        <figure className="case-figure" style={{ width: "fit-content", maxWidth: "100%" }}>
          <ExpandableImage
            src="/images/gm-research.gif"
            alt="Research session collage"
            width={835}
            height={469}
            style={{ width: 835, maxWidth: "100%", height: "auto" }}
          />
        </figure>

        <CaseTextBlock>
          <h2>
            Overview: a need for a universally accessible indoor navigation app
          </h2>
          <p>
            GoodMaps originated from the American Printing House for the Blind
            (APH) in 2019, with a mission to create digital maps for a trusted
            wayfinding experience.
          </p>
          <p>
            The flagship app, GoodMaps Explore, was originally designed for blind
            users and equipped with a bare visual interface. Business
            requirements suggested a need to create an indoor navigation solution
            that is universally accessible across a spectrum, including users with
            vision impairments, mobile limitations, neurodivergent users, and
            those without accessible needs. This would involve a redesign of the
            current app, but with experiences for a range of users in mind.
          </p>
          <p>
            As a UX designer, I helped lead the end-to-end design process of the
            new GoodMaps: Indoor Navigation app from ideation to launch.
          </p>
        </CaseTextBlock>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>RESEARCH</CaseSectionLabel>
          <h2>How do users prepare when visiting unfamiliar places?</h2>
          <p>
            The project kicked off with discovery research to better understand
            users and their journeys. We conducted focus groups with sighted
            participants to learn about steps taken when planning trips to complex
            locations like airports or malls.
          </p>
          <p>
            Along with focus groups, we also conducted dyad interviews with blind
            and low vision participants to gain perspective on sentiments,
            appreciations, and frustrations when using navigation tools.
          </p>
        </CaseTextBlock>

        <figure className="case-figure">
          <div className="case-image-frame gm-frame-boards">
            <ExpandableImage
              src="/images/gm-board1.png"
              alt="Board with sticky notes describing different app features"
              width={628}
              height={262}
              fillTrigger
              style={{ width: "100%", height: "auto" }}
            />
            <ExpandableImage
              src="/images/gm-board2.png"
              alt=""
              width={628}
              height={259}
              fillTrigger
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="case-quote-with-mark case-quote--center" style={{ maxWidth: 494 }}>
            <svg
              className="case-quote-mark"
              width="37"
              height="38"
              viewBox="0 0 37 38"
              fill="none"
              aria-hidden="true"
            >
              <g opacity="0.4">
                <path
                  d="M15.836 6.03805C15.997 6.29558 16.1056 6.58228 16.1558 6.88179C16.2059 7.1813 16.1966 7.48776 16.1283 7.78367C16.06 8.07957 15.9341 8.35913 15.7578 8.60638C15.5814 8.85363 15.3581 9.06373 15.1006 9.22468C12.2861 10.9778 10.0501 13.5209 8.67187 16.5368C10.0637 16.4204 11.4583 16.7269 12.6732 17.416C13.888 18.1052 14.8666 19.1451 15.4807 20.3995C16.0949 21.6539 16.3162 23.0645 16.1155 24.4468C15.9149 25.829 15.3017 27.1185 14.3562 28.1465C13.4107 29.1745 12.1769 29.8932 10.8162 30.2086C9.45557 30.5239 8.03141 30.4212 6.73009 29.9138C5.42876 29.4065 4.31088 28.5182 3.52268 27.3651C2.73449 26.212 2.3127 24.8479 2.3125 23.4512V23.3887C2.31501 23.2097 2.32273 23.0308 2.33562 22.8522C2.35644 22.5054 2.39806 22.0197 2.479 21.4231C2.64088 20.2368 2.95769 18.6019 3.59825 16.7657C4.87475 13.0889 7.46012 8.5448 12.6494 5.30268C12.9069 5.14173 13.1936 5.03307 13.4931 4.98292C13.7926 4.93277 14.0991 4.94211 14.395 5.01039C14.6909 5.07868 14.9705 5.20458 15.2177 5.3809C15.4649 5.55723 15.675 5.78053 15.836 6.03805ZM32.0235 6.03805C32.1844 6.29558 32.2931 6.58228 32.3433 6.88179C32.3934 7.1813 32.3841 7.48776 32.3158 7.78367C32.2475 8.07957 32.1216 8.35913 31.9453 8.60638C31.7689 8.85363 31.5456 9.06373 31.2881 9.22468C28.4736 10.9778 26.2376 13.5209 24.8594 16.5368C26.2512 16.4204 27.6458 16.7269 28.8607 17.416C30.0755 18.1052 31.0541 19.1451 31.6682 20.3995C32.2824 21.6539 32.5037 23.0645 32.303 24.4468C32.1024 25.829 31.4892 27.1185 30.5437 28.1465C29.5982 29.1745 28.3644 29.8932 27.0037 30.2086C25.6431 30.5239 24.2189 30.4212 22.9176 29.9138C21.6163 29.4065 20.4984 28.5182 19.7102 27.3651C18.922 26.212 18.5002 24.8479 18.5 23.4512V23.3887C18.5025 23.2097 18.5102 23.0308 18.5231 22.8522C18.5439 22.5054 18.5856 22.0197 18.6665 21.4231C18.8284 20.2368 19.1452 18.6019 19.7857 16.7657C21.0622 13.0889 23.6476 8.5448 28.8369 5.30268C29.0944 5.14173 29.3811 5.03307 29.6806 4.98292C29.9801 4.93277 30.2866 4.94211 30.5825 5.01039C30.8784 5.07868 31.1579 5.20458 31.4052 5.3809C31.6524 5.55723 31.8625 5.78053 32.0235 6.03805Z"
                  fill="#333333"
                />
              </g>
            </svg>
            <p className="case-quote" style={{ textAlign: "left" }}>
              I’m a big sign person. So even like signs on the wall, or arrows
              on the floor, or something like that.. I’ll wander before I see
              somebody
            </p>
          </div>
        </figure>

        <CaseTextBlock>
          <h2>Themes around navigating independently and planning in advance</h2>
          <p>
            We found four main personas arise from the data with an overlap in
            their journeys. Our research findings were then used to prioritize a
            set of core features to be included in the app.
          </p>
          <p>
            Key themes uncovered through research ranged from desires for an
            increased sense of independence when navigating, to hopes of being
            able to learn about a location and mentally prepare for trips.
          </p>
          <p>Our design recommendations focused on aspects such as:</p>
          <ol>
            <li>
              Ensuring users have the ability to explore a location prior to a
              visit
            </li>
            <li>Enhancing the routing process with haptics and tones</li>
            <li>Creating custom routes</li>
            <li>Allowing users to search for destinations using categories</li>
          </ol>
        </CaseTextBlock>

        <CaseImage
          framed
          frameClassName="gm-frame-journey"
          caption="“The Explorer” journey map and persona"
        >
          <ExpandableImage
            src="/images/gm-journey.jpg"
            alt='Customer journey map of the "Explorer" persona'
            width={504}
            height={651}
            fillTrigger
            style={{ width: "100%", height: "auto" }}
          />
          <ExpandableImage
            src="/images/gm-persona.png"
            alt="User persona of the explorer persona"
            width={504}
            height={283}
            fillTrigger
            style={{ width: "100%", height: "auto" }}
          />
        </CaseImage>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>DESIGN SPRINT</CaseSectionLabel>
          <h2>Identifying key challenges</h2>
          <p>
            After wrapping up research, we entered a week-long design sprint to
            identify the top 5 challenges to solve with the product. This sprint
            consisted of an ideation workshop, storyboarding activity, and
            wireframing exercise, in which we produced a basic prototype and
            tested concepts with users.
          </p>
          <p>
            We then began our revision process to identify gaps and necessary
            features.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/gm-sprint.png"
          alt="Design sprint collaborative exercises"
          width={1105}
          height={659}
          framed
          frameClassName="gm-frame-sprint"
          caption="The design sprint engaged the product and executive team in collaborative exercises and brainstorming sessions"
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>DESIGN</CaseSectionLabel>
          <h2>Defining the high level user experience</h2>
          <p>
            One of the biggest challenges when initially designing was identifying
            which features to prioritize while considering aspects like gaps in
            the prototype, items voted as priority, and other technical
            requirements due to a lack of clear product direction.
          </p>
          <p>
            I took lead in defining features for displaying information about
            buildings and points of interest, designing the building directory,
            and exploring how users could search for information within a
            building.
          </p>
          <p>
            While outlining the high level UX for each feature, we worked
            alongside the engineering team to validate designs and confirm
            technical feasibility. To ensure usability with screen readers, we
            created and reviewed accessible design prototypes with subject matter
            experts.
          </p>
        </CaseTextBlock>

        <CaseImage
          framed
          frameClassName="gm-frame-flow"
          caption="Use cases and user flows were created to define app features"
        >
          <ExpandableImage
            src="/images/gm-usecase.png"
            alt="Use case scenarios for first time app user"
            width={173}
            height={138}
            style={{ width: 173, maxWidth: "100%", height: "auto", flexShrink: 0 }}
          />
          <ExpandableImage
            src="/images/gm-flow.png"
            alt="User flow of first time app user"
            width={1006}
            height={463}
            fillTrigger
            style={{ width: "100%", height: "auto" }}
          />
        </CaseImage>

        <CaseTextBlock>
          <p>
            As user flows and information architecture were established for each
            feature, we created wireframes and defined interactions using
            mid-fidelity prototypes.
          </p>
          <p>
            Meanwhile, a design system, icon library, and UI mockups were also
            created to guide engineers in implementation.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/gm-wireframes.png"
          alt="Low-fidelity wireframes and UI mockups"
          width={1211}
          height={625}
          framed
          frameClassName="gm-frame-wireframes"
          caption="Low-fidelity wireframes internally vetted, mid-fidelity prototypes built, and UI mockups created"
        />

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>TEST</CaseSectionLabel>
          <h2>Validating designs with users</h2>
          <p>
            Several rounds of user acceptance testing sessions were conducted to
            validate designs surrounding core experiences and features. As we
            uncovered observations with each round of testing, we continued
            iterating on designs and optimizing the experience based on feedback.
          </p>
        </CaseTextBlock>

        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>Final shipped designs</h2>
        </CaseTextBlock>

        <div className="gm-screens">
          <div className="gm-screen">
            <PhoneFrame>
              <ExpandableImage
                src="/images/gm-screen-map.png"
                alt="Mobile screen displaying indoor map"
                width={219}
                height={474}
              />
            </PhoneFrame>
            <div className="gm-screen-copy">
              <p className="gm-screen-title">Explore building maps</p>
              <p className="gm-screen-desc">
                Check in to a building to access and explore its indoor map
              </p>
            </div>
          </div>
          <div className="gm-screen">
            <PhoneFrame>
              <ExpandableImage
                src="/images/gm-screen-dir.png"
                alt="Mobile screen displaying directory of destinations"
                width={219}
                height={474}
              />
            </PhoneFrame>
            <div className="gm-screen-copy">
              <p className="gm-screen-title">Find indoor destinations</p>
              <p className="gm-screen-desc">
                Use the directory or map to browse through all destinations in
                the building
              </p>
            </div>
          </div>
          <div className="gm-screen">
            <PhoneFrame>
              <ExpandableImage
                src="/images/gm-screen-route.png"
                alt="Mobile screen displaying route preview"
                width={219}
                height={474}
              />
            </PhoneFrame>
            <div className="gm-screen-copy">
              <p className="gm-screen-title">Preview routes</p>
              <p className="gm-screen-desc">
                Select a destination and choose a desired route type to begin
                the route
              </p>
            </div>
          </div>
          <div className="gm-screen">
            <PhoneFrame>
              <ExpandableImage
                src="/images/gm-screen-nav.png"
                alt="Mobile screen displaying turn by turn directions"
                width={219}
                height={474}
              />
            </PhoneFrame>
            <div className="gm-screen-copy">
              <p className="gm-screen-title">
                Follow the turn-by-turn directions
              </p>
              <p className="gm-screen-desc">
                Use the directions and arrows overlaid on the path to reach your
                destination
              </p>
            </div>
          </div>
        </div>

        <hr className="case-divider" />

        <CaseTextBlock>
          <h2>Impact</h2>
          <p>
            After launching the app, we{" "}
            <strong className="text-semibold">
              increased our monthly average user (MAU) count by 250%
            </strong>{" "}
            and surpassed our quarterly goal. The app was also used at the{" "}
            <strong className="text-semibold">Paris 2024 Olympics</strong> U.S.
            Training Center.
          </p>
        </CaseTextBlock>

        <CaseImage
          src="/images/gm-olympics.png"
          alt="Hand holding phone showing GoodMaps app used at the Olympics"
          width={925}
          height={520}
          framed
          frameClassName="gm-frame-olympics"
          caption="GoodMaps app featured on NBS News, July 2024"
        />

        <div className="gm-testimonial">
          <div className="case-quote-with-mark">
            <svg
              className="case-quote-mark"
              width="37"
              height="38"
              viewBox="0 0 37 38"
              fill="none"
              aria-hidden="true"
            >
              <g opacity="0.4">
                <path
                  d="M15.836 6.03805C15.997 6.29558 16.1056 6.58228 16.1558 6.88179C16.2059 7.1813 16.1966 7.48776 16.1283 7.78367C16.06 8.07957 15.9341 8.35913 15.7578 8.60638C15.5814 8.85363 15.3581 9.06373 15.1006 9.22468C12.2861 10.9778 10.0501 13.5209 8.67187 16.5368C10.0637 16.4204 11.4583 16.7269 12.6732 17.416C13.888 18.1052 14.8666 19.1451 15.4807 20.3995C16.0949 21.6539 16.3162 23.0645 16.1155 24.4468C15.9149 25.829 15.3017 27.1185 14.3562 28.1465C13.4107 29.1745 12.1769 29.8932 10.8162 30.2086C9.45557 30.5239 8.03141 30.4212 6.73009 29.9138C5.42876 29.4065 4.31088 28.5182 3.52268 27.3651C2.73449 26.212 2.3127 24.8479 2.3125 23.4512V23.3887C2.31501 23.2097 2.32273 23.0308 2.33562 22.8522C2.35644 22.5054 2.39806 22.0197 2.479 21.4231C2.64088 20.2368 2.95769 18.6019 3.59825 16.7657C4.87475 13.0889 7.46012 8.5448 12.6494 5.30268C12.9069 5.14173 13.1936 5.03307 13.4931 4.98292C13.7926 4.93277 14.0991 4.94211 14.395 5.01039C14.6909 5.07868 14.9705 5.20458 15.2177 5.3809C15.4649 5.55723 15.675 5.78053 15.836 6.03805ZM32.0235 6.03805C32.1844 6.29558 32.2931 6.58228 32.3433 6.88179C32.3934 7.1813 32.3841 7.48776 32.3158 7.78367C32.2475 8.07957 32.1216 8.35913 31.9453 8.60638C31.7689 8.85363 31.5456 9.06373 31.2881 9.22468C28.4736 10.9778 26.2376 13.5209 24.8594 16.5368C26.2512 16.4204 27.6458 16.7269 28.8607 17.416C30.0755 18.1052 31.0541 19.1451 31.6682 20.3995C32.2824 21.6539 32.5037 23.0645 32.303 24.4468C32.1024 25.829 31.4892 27.1185 30.5437 28.1465C29.5982 29.1745 28.3644 29.8932 27.0037 30.2086C25.6431 30.5239 24.2189 30.4212 22.9176 29.9138C21.6163 29.4065 20.4984 28.5182 19.7102 27.3651C18.922 26.212 18.5002 24.8479 18.5 23.4512V23.3887C18.5025 23.2097 18.5102 23.0308 18.5231 22.8522C18.5439 22.5054 18.5856 22.0197 18.6665 21.4231C18.8284 20.2368 19.1452 18.6019 19.7857 16.7657C21.0622 13.0889 23.6476 8.5448 28.8369 5.30268C29.0944 5.14173 29.3811 5.03307 29.6806 4.98292C29.9801 4.93277 30.2866 4.94211 30.5825 5.01039C30.8784 5.07868 31.1579 5.20458 31.4052 5.3809C31.6524 5.55723 31.8625 5.78053 32.0235 6.03805Z"
                  fill="#333333"
                />
              </g>
            </svg>
            <p className="case-quote">
              I’m so sorry I’m crying. That hit me really fast and really hard..
              if I had access to this in the places I travel.. I could go
              anywhere I wanted. I know that seems small to you because you can
              go anywhere at any time. I’ve never had that kind of independence.
              This app would change my life.”
            </p>
          </div>
          <p className="case-quote-attr">
            – words shared by a blind participant during a research session
            while testing the beta app
          </p>
        </div>

        <figure className="case-figure gm-routing">
          <PhoneFrame>
            <ExpandableImage
              src="/images/gm-routing.gif"
              alt="Gif of routing through a conference hall"
              width={219}
              height={475}
            />
          </PhoneFrame>
          <figcaption className="case-caption">
            Routing at NAIDEX accessibility conference
          </figcaption>
        </figure>

        <hr className="case-divider" />

        <CaseTextBlock>
          <CaseSectionLabel>REFLECTION</CaseSectionLabel>
          <h2>Learnings</h2>
          <ul>
            <li>
              This was my first time working in-house on an end-to-end product
              launch, so it was very eye-opening designing alongside other
              designers and stakeholders.
            </li>
            <li>
              Testing assumptions early truly helps inform design direction and
              provides valuable feedback.
            </li>
            <li>
              It is important to maintain a healthy balance between acting upon
              testing feedback, stakeholder demands, and one&apos;s own design
              discretion.
            </li>
            <li>
              In the light of changing deadlines and direction, always ensure
              that communication between teams is maintained to prevent
              misunderstandings down the line.
            </li>
          </ul>
        </CaseTextBlock>
      </div>
    </article>
  );
}
