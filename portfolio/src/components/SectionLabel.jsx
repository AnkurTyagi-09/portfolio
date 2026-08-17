export default function SectionLabel({
  label,
  small = false,
}) {
  return (
    <div
      className={`comicSectionLabel ${small ? "small" : ""}`}
    >
      <span className="sectionLabelIndex">
        //
      </span>

      <span className="sectionLabelText">
        {label}
      </span>

      <span className="sectionLabelRule" />

      <style>{`
        .comicSectionLabel {
          width: fit-content;
          margin-bottom: 18px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .sectionLabelIndex {
          min-width: 23px;
          height: 20px;
          padding: 0 5px;
          display: inline-grid;
          place-items: center;
          color: #211b22;
          background: #ddcfa3;
          border: 1px solid #2a232b;
          box-shadow: 3px 3px 0 rgba(76,55,82,.17);
          font-size: 6px;
          letter-spacing: .5px;
          transform: rotate(-1.5deg);
        }

        .sectionLabelText {
          color: #817a85;
          font-size: 7px;
          letter-spacing: 1.5px;
        }

        .sectionLabelRule {
          width: 34px;
          height: 1px;
          background: rgba(255,255,255,.11);
        }

        .comicSectionLabel.small {
          margin-bottom: 10px;
        }

        .comicSectionLabel.small .sectionLabelIndex {
          min-width: 19px;
          height: 17px;
          font-size: 5px;
        }

        .comicSectionLabel.small .sectionLabelText {
          font-size: 6px;
        }

        .comicSectionLabel.small .sectionLabelRule {
          width: 24px;
        }
      `}</style>
    </div>
  );
}
