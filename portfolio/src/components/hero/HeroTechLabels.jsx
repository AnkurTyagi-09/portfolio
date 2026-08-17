const TECH = [
  "React",
  "Node.js",
  "Python",
  "RAG",
  "LLMs",
  "PostgreSQL",
];

export default function HeroTechLabels() {
  return (
    <div className="comicTechStack">
      {TECH.map((tech, index) => (
        <span
          key={tech}
          className={
            tech === "Python" ||
            tech === "RAG"
              ? "highlightTech"
              : ""
          }
          style={{
            transform:
              `rotate(${
                index % 2 === 0
                  ? "-0.7deg"
                  : "0.7deg"
              })`,
          }}
        >
          {tech}
        </span>
      ))}

      <style>{`
        .comicTechStack {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          max-width: 600px;
        }

        .comicTechStack span {
          padding: 6px 10px;

          background:
            rgba(255,255,255,.025);

          border:
            1px solid
            rgba(255,255,255,.10);

          color: #827b86;

          font-family:
            var(--font-mono);

          font-size: 7.5px;

          letter-spacing: 1px;

          text-transform: uppercase;
        }

        .comicTechStack
        .highlightTech {
          color: #c3add1;

          background:
            rgba(
              174,
              148,
              193,
              .07
            );

          border-color:
            rgba(
              174,
              148,
              193,
              .3
            );
        }
      `}</style>
    </div>
  );
}