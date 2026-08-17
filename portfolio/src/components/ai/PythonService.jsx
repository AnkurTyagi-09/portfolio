import { motion } from "framer-motion";

export default function PythonService() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18, rotate: 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 1 }}
      viewport={{ once: true, amount: .5 }}
      transition={{ duration: .55 }}
      className="pythonCaseNote"
    >
      <div className="pythonCaseLabel">PYTHON / SERVICE LOG</div>

      <pre>
        <span className="purple">POST</span> /query{"\n"}
        <span className="green">200 OK</span>{"\n\n"}
        embedding     <b>ready</b>{"\n"}
        vector_store  <b>connected</b>{"\n"}
        retriever     <b className="greenText">active</b>
      </pre>

      <div className="pythonQuote">
        “The model is only the final panel.”
      </div>

      <style>{`
        .pythonCaseNote {
          position: relative;
          width: min(300px,100%);
          padding: 34px 18px 18px;
          background: #17151b;
          border: 2px solid #2a232c;
          box-shadow: 7px 7px 0 rgba(80,60,87,.28);
        }

        .pythonCaseLabel {
          position: absolute;
          top: -12px;
          left: 14px;
          padding: 6px 9px;
          background: #ddcfa3;
          color: #1d181e;
          border: 1px solid #292229;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.1px;
        }

        .pythonCaseNote pre {
          margin: 0;
          color: #aaa2ad;
          font-family: var(--font-mono);
          font-size: 9px;
          line-height: 1.8;
        }

        .pythonCaseNote .purple { color: #b49bc7; }
        .pythonCaseNote .green { color: #9acdb8; }

        .pythonCaseNote b {
          color: #ddcfa9;
          font-weight: 500;
        }

        .pythonCaseNote .greenText {
          color: #9acdb8;
        }

        .pythonQuote {
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,.08);
          color: #6e6872;
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 11px;
        }
      `}</style>
    </motion.aside>
  );
}
