// Scans control_panel/feedback.md for real notes (ignoring the template's
// italic "*(e.g. ...)*" hints and its explanatory prose) and reports whether
// there's anything to act on. Real input only ever follows a "Your note:"
// marker — inline on that line, or on the lines beneath it.
// Writes has_notes to GITHUB_OUTPUT and a list to the job summary.
const fs = require("fs");

const FILE = "control_panel/feedback.md";
let text = "";
try { text = fs.readFileSync(FILE, "utf8"); } catch { /* file missing */ }

const notes = [];
let afterMarker = false;
for (const line of text.split(/\r?\n/)) {
  if (/^#{1,6}\s+/.test(line)) { afterMarker = false; continue; } // a heading ends a note area

  const m = line.match(/^>\s*Your notes?:\s*(.*)$/i);
  if (m) {
    const rest = m[1].replace(/\*\([^)]*\)\*/g, "").trim(); // drop italic hints
    if (rest) notes.push(rest);
    afterMarker = true;
    continue;
  }

  if (afterMarker) {
    const t = line.replace(/^>\s?/, "").trim();
    if (!t) continue;                  // blank line
    if (/^[-*_]{3,}$/.test(t)) continue; // horizontal rule
    if (t.startsWith("#")) continue;
    notes.push(t);
  }
}

const has = notes.length > 0;
const body = has
  ? "### Notes found in `control_panel/feedback.md`\n\n" + notes.map((n) => "- " + n).join("\n")
  : "No written notes found in `control_panel/feedback.md` — nothing to do.";

if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `has_notes=${has}\n`);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, body + "\n");
console.log(body);
