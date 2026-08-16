import { PROJECTS } from "../data";
import SectionLabel from "../components/SectionLabel";
import ChapterTransition from "../components/story/ChapterTransition";
import ProjectMonolith from "../components/projects/ProjectMonolith";

export default function Projects() {
  return (
    <>
      <ChapterTransition
        pre="The signal moves forward and illuminates what's been built."
        eyebrow="03 / Builds"
        heading="Structures in the distance."
      />

      <section
        style={{
          padding: "0 clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vw, 8rem)",
          minHeight: "100vh",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel label="03 — Project Archive" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "clamp(2rem, 5vw, 3.5rem)",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "var(--bright)",
                letterSpacing: -1,
              }}
            >
              Selected work.
            </h2>
            <a
              href="https://github.com/AnkurTyagi-09"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: 2,
                color: "var(--muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                borderBottom: "1px solid var(--dim)",
                paddingBottom: 2,
              }}
            >
              All projects ↗
            </a>
          </div>

          <div>
            {PROJECTS.map((p, i) => (
              <ProjectMonolith key={p.title} p={p} index={i} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}