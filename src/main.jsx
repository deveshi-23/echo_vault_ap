import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const capabilities = [
  {
    no: "01",
    title: "LISTEN",
    copy: "Meaningful speech, captured in the moment.",
    detail:
      "A discreet microphone keeps the important parts of the day within reach.",
  },
  {
    no: "02",
    title: "REMEMBER",
    copy: "Useful context, kept close.",
    detail:
      "People, plans, ideas and tasks become searchable memory — not a noisy transcript.",
  },
  {
    no: "03",
    title: "UNDERSTAND",
    copy: "AI that connects the dots.",
    detail:
      "EchoVault reads intent and context together, so the next step feels obvious.",
  },
  {
    no: "04",
    title: "ACT",
    copy: "From understanding to momentum.",
    detail: "Turn a thought into a reminder, a plan or a connected automation.",
  },
];

const memories = [
  {
    type: "PLAN",
    text: "Follow up with Arjun after the product review.",
    meta: "Today · 4:42 PM",
    tag: "Work",
  },
  {
    type: "IDEA",
    text: "Explore a quieter onboarding for first-time users.",
    meta: "Today · 2:18 PM",
    tag: "Product",
  },
  {
    type: "PERSON",
    text: "Maya prefers a morning walk before stand-up.",
    meta: "Yesterday · 8:11 AM",
    tag: "People",
  },
];

function Arrow({ small = false }) {
  return (
    <span className={small ? "arrow small" : "arrow"} aria-hidden="true">
      ↗
    </span>
  );
}

function Pendant({ compact = false }) {
  return (
    <div
      className={compact ? "pendant-wrap compact" : "pendant-wrap"}
      aria-label="EchoVault pendant product render"
    >
      <div className="pendant-halo" />
      <div className="pendant-chain" />
      <div className="pendant-body">
        <div className="pendant-sheen" />
        <div className="pendant-mark">E</div>
        <div className="pendant-port" />
      </div>
      <div className="pendant-shadow" />
    </div>
  );
}

function SectionKicker({ children }) {
  return (
    <div className="kicker">
      <span />
      {children}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Product", "#product"],
    ["How it works", "#how-it-works"],
    ["Intelligence", "#intelligence"],
    ["Dashboard", "#dashboard"],
  ];
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="wordmark">
        ECHOVAULT<span>®</span>
      </a>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a href={href} key={label} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a href="#final" className="nav-cta">
        Get started <Arrow small />
      </a>
      <button
        className="menu-button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <i />
        <i />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-copy">
        <SectionKicker>Personal intelligence / 01</SectionKicker>
        <h1>
          Your memory.
          <br />
          <em>Your context.</em>
          <br />
          Your AI.
        </h1>
        <p className="hero-lede">
          A wearable personal AI assistant that listens, understands, remembers,
          and acts on your behalf.
        </p>
        <div className="button-row">
          <a className="button primary" href="#product">
            Explore EchoVault <Arrow small />
          </a>
          <a className="button text-button" href="#how-it-works">
            See how it works <span>↓</span>
          </a>
        </div>
      </div>
      <div className="hero-product">
        <Pendant />
        <div className="product-caption">
          <span>01 / 04</span>
          <span>ECHOVAULT PENDANT</span>
        </div>
      </div>
      <div className="hero-note">
        <span className="pulse" />
        Quietly present. Always in context.
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section" id="product">
      <div className="intro-stamp">
        EV
        <br />
        <span>01</span>
      </div>
      <div className="intro-content">
        <SectionKicker>The product</SectionKicker>
        <h2>
          More than a<br />
          <em>voice assistant.</em>
        </h2>
        <p>
          EchoVault turns everyday speech into persistent context and meaningful
          action — without asking you to stop and take notes.
        </p>
        <a className="inline-link" href="#how-it-works">
          Follow the signal <Arrow small />
        </a>
      </div>
      <div className="intro-aside">
        <div className="mini-line">
          <span>Designed for the in-between</span>
          <b>2026</b>
        </div>
        <p>
          Built for the moments that usually disappear: a passing idea, a
          promise made, the detail you want to remember later.
        </p>
      </div>
    </section>
  );
}

function CapabilityStory() {
  const [active, setActive] = useState(1);
  return (
    <section className="capabilities section" id="how-it-works">
      <div className="section-heading">
        <SectionKicker>The loop</SectionKicker>
        <h2>
          One small wearable.
          <br />
          <em>A bigger picture.</em>
        </h2>
        <p>The intelligence is in the relationship between each step.</p>
      </div>
      <div className="capability-layout">
        <div className="capability-list">
          {capabilities.map((item, i) => (
            <button
              className={active === i ? "capability active" : "capability"}
              key={item.no}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="cap-number">{item.no}</span>
              <span className="cap-title">{item.title}</span>
              <span className="cap-copy">{item.copy}</span>
              <Arrow small />
            </button>
          ))}
        </div>
        <div className="capability-stage">
          <div className="stage-orbit orbit-a" />
          <div className="stage-orbit orbit-b" />
          <div className="stage-core">
            <span>0{active + 1}</span>
            <strong>{capabilities[active].title}</strong>
            <p>{capabilities[active].detail}</p>
          </div>
          <div className="stage-foot">
            ECHOVAULT / CONTEXT ENGINE <span>● ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  const nodes = [
    { name: "PENDANT", desc: "Meaningful speech" },
    { name: "PHONE", desc: "Private bridge" },
    { name: "AI", desc: "Context + intent" },
    { name: "MEMORY", desc: "Useful recall" },
    { name: "ACTION", desc: "The next step" },
  ];
  return (
    <section className="pipeline-section section">
      <div className="section-heading split">
        <div>
          <SectionKicker>Under the surface</SectionKicker>
          <h2>
            From a thought
            <br />
            <em>to an action.</em>
          </h2>
        </div>
        <p>
          Five quiet handoffs turn an ordinary sentence into something useful.
        </p>
      </div>
      <div className="pipeline" aria-label="EchoVault system architecture">
        {nodes.map((node, i) => (
          <div className="pipeline-node" key={node.name}>
            <div className="node-top">
              <span>0{i + 1}</span>
              <span className="node-dot" />
            </div>
            <strong>{node.name}</strong>
            <small>{node.desc}</small>
            {i < nodes.length - 1 && (
              <div className="connector">
                <i />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pipeline-foot">
        <span>DATA FLOW / ENCRYPTED IN TRANSIT</span>
        <span>LISTEN → REMEMBER → UNDERSTAND → ACT</span>
      </div>
    </section>
  );
}

function PendantShowcase() {
  return (
    <section className="showcase section">
      <div className="showcase-product">
        <Pendant compact />
        <span className="crosshair one" />
        <span className="crosshair two" />
        <div className="callout callout-a">
          <b>01</b>
          <span>
            MICROPHONE
            <br />
            <small>Meaningful speech capture</small>
          </span>
        </div>
        <div className="callout callout-b">
          <b>02</b>
          <span>
            BLE
            <br />
            <small>Connected communication</small>
          </span>
        </div>
        <div className="callout callout-c">
          <b>03</b>
          <span>
            WEARABLE FORM
            <br />
            <small>Designed for everyday use</small>
          </span>
        </div>
      </div>
      <div className="showcase-copy">
        <SectionKicker>Object / 01</SectionKicker>
        <h2>
          Designed to
          <br />
          <em>disappear into life.</em>
        </h2>
        <p>
          Quietly tactile. Deliberately simple. EchoVault is a piece of personal
          technology that earns its place by staying out of the way.
        </p>
        <div className="spec-row">
          <span>FORM</span>
          <strong>Minimal / tactile / wearable</strong>
        </div>
        <div className="spec-row">
          <span>STATUS</span>
          <strong>Connected through your phone</strong>
        </div>
      </div>
    </section>
  );
}

function MemoryExperience() {
  return (
    <section className="memory section">
      <div className="section-heading split">
        <div>
          <SectionKicker>Context, kept</SectionKicker>
          <h2>
            It doesn't just hear you.
            <br />
            <em>It remembers what matters.</em>
          </h2>
        </div>
        <p>
          Not a transcript of everything. A living layer of the details you
          choose to keep close.
        </p>
      </div>
      <div className="memory-grid">
        <div className="memory-sidebar">
          <span className="ui-label">MEMORY / TODAY</span>
          {["All memories", "People", "Plans", "Ideas", "Tasks"].map((x, i) => (
            <div
              className={i === 0 ? "side-item selected" : "side-item"}
              key={x}
            >
              <span>{x}</span>
              <small>
                {i === 0
                  ? "24"
                  : i === 1
                    ? "08"
                    : i === 2
                      ? "06"
                      : i === 3
                        ? "05"
                        : "05"}
              </small>
            </div>
          ))}
          <div className="memory-sidebar-foot">
            Synced just now
            <br />
            <span className="status-dot" /> Device connected
          </div>
        </div>
        <div className="memory-main">
          <div className="memory-top">
            <span>
              <b>Monday, September 22</b>
              <br />
              <small>Three moments worth keeping</small>
            </span>
            <button className="square-button" aria-label="Search memories">
              ⌕
            </button>
          </div>
          {memories.map((memory, i) => (
            <article className={`memory-card card-${i}`} key={memory.text}>
              <div className="memory-card-top">
                <span className="memory-type">{memory.type}</span>
                <span className="memory-tag">{memory.tag}</span>
              </div>
              <h3>{memory.text}</h3>
              <div className="memory-meta">
                <span>{memory.meta}</span>
                <Arrow small />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const chartPoints =
  "0,128 18,120 36,124 54,98 72,111 90,87 108,96 126,73 144,81 162,61 180,76 198,53 216,66 234,46 252,64 270,57 288,83 306,78 324,101 342,89 360,112 378,106 396,122 414,116 432,131 450,126 468,136 486,128 504,139 522,131 540,144 558,140 576,149 594,143 612,152 630,145 648,155 666,149 684,160 702,153 720,165 738,158 756,171 774,165 792,176 810,170 828,178 846,172 864,180 882,176 900,182";

function VoiceInsights() {
  const [selected, setSelected] = useState(6);
  return (
    <section className="insights section" id="intelligence">
      <div className="section-heading split">
        <div>
          <SectionKicker>Daily voice insights</SectionKicker>
          <h2>
            Your voice,
            <br />
            <em>throughout the day.</em>
          </h2>
        </div>
        <p>
          EchoVault can reveal patterns in how you communicate through
          measurable speech characteristics — never a definitive read of how you
          feel.
        </p>
      </div>
      <div className="insights-shell">
        <div className="insights-header">
          <div>
            <span className="ui-label">VOICE PATTERN / SEPT 22</span>
            <h3>Pitch variation</h3>
          </div>
          <div className="insight-legend">
            <span>
              <i className="legend-line" />
              Today
            </span>
            <span>
              <i className="legend-dash" />
              Daily baseline
            </span>
          </div>
        </div>
        <div className="chart-wrap">
          <div className="y-labels">
            <span>HIGH</span>
            <span>MID</span>
            <span>LOW</span>
          </div>
          <svg
            viewBox="0 0 900 210"
            role="img"
            aria-label="Representative 24-hour pitch variation chart"
          >
            <line x1="0" x2="900" y1="45" y2="45" className="chart-grid" />
            <line x1="0" x2="900" y1="105" y2="105" className="chart-grid" />
            <line x1="0" x2="900" y1="165" y2="165" className="chart-grid" />
            <polyline points={chartPoints} className="baseline" />
            <polyline
              points="0,128 18,120 36,124 54,98 72,111 90,87 108,96 126,73 144,81 162,61 180,76 198,53 216,66 234,46 252,64 270,57 288,83 306,78 324,101 342,89 360,112 378,106 396,122 414,116 432,131 450,126 468,136 486,128 504,139 522,131 540,144 558,140 576,149 594,143 612,152 630,145 648,155 666,149 684,160 702,153 720,165 738,158 756,171 774,165 792,176 810,170 828,178 846,172 864,180 882,176 900,182"
              className="chart-line"
            />
            {[6, 13, 23, 31].map((i) => (
              <circle
                key={i}
                cx={i * 27}
                cy={[61, 46, 101, 145][[6, 13, 23, 31].indexOf(i)]}
                r={selected === i ? 5 : 3}
                className={
                  selected === i ? "chart-point selected" : "chart-point"
                }
                onClick={() => setSelected(i)}
              />
            ))}
          </svg>
          <div className="x-labels">
            <span>09 AM</span>
            <span>12 PM</span>
            <span>03 PM</span>
            <span>06 PM</span>
            <span>09 PM</span>
          </div>
        </div>
        <div className="selected-moment">
          <div className="moment-time">
            {selected === 23
              ? "02:35 PM"
              : selected === 31
                ? "05:15 PM"
                : "10:20 AM"}
            <span>Observed moment</span>
          </div>
          <div>
            <b>Higher than daily average</b>
            <span>Pitch variation increased · Speaking rate faster</span>
          </div>
          <Arrow />
        </div>
        <div className="metric-row">
          {[
            ["PITCH", "184 Hz"],
            ["VARIATION", "+18%"],
            ["SPEAKING RATE", "142 wpm"],
            ["PAUSES", "02:14"],
          ].map(([x, y]) => (
            <div key={x}>
              <span>{x}</span>
              <b>{y}</b>
            </div>
          ))}
        </div>
      </div>
      <p className="disclaimer">
        Insights are based on observed speech characteristics such as pitch
        variation, speaking rate, loudness and pauses. They indicate possible
        vocal patterns, not definitive emotional states.
      </p>
    </section>
  );
}

function Automation() {
  return (
    <section className="automation section">
      <div className="automation-copy">
        <SectionKicker>Intelligence, in motion</SectionKicker>
        <h2>
          From understanding
          <br />
          <em>to action.</em>
        </h2>
        <p>
          When context is clear, the next step can be simple. Say it once and
          let EchoVault carry it forward.
        </p>
        <a className="inline-link" href="#dashboard">
          See the dashboard <Arrow small />
        </a>
      </div>
      <div className="automation-flow">
        <div className="flow-row muted">
          <span>YOU SPEAK</span>
          <b>“Remind me to call Arjun tomorrow.”</b>
        </div>
        <div className="flow-arrow">↓</div>
        <div className="flow-row">
          <span>ECHOVAULT UNDERSTANDS</span>
          <b>
            Call Arjun <i>· tomorrow · 10:30 AM</i>
          </b>
        </div>
        <div className="flow-arrow">↓</div>
        <div className="flow-row complete">
          <span>
            ACTION COMPLETE <em>✓</em>
          </span>
          <b>Reminder created</b>
          <small>Added to your connected calendar</small>
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section className="dashboard section" id="dashboard">
      <div className="section-heading split">
        <div>
          <SectionKicker>One place to return to</SectionKicker>
          <h2>
            Everything EchoVault
            <br />
            <em>remembers, in one place.</em>
          </h2>
        </div>
        <p>
          A calm, useful surface for the intelligence your pendant collects
          throughout the day.
        </p>
      </div>
      <div className="dashboard-window">
        <aside className="dash-sidebar">
          <div className="dash-brand">
            E<span>V</span>
          </div>
          <div className="dash-nav">
            {[
              "Overview",
              "Memories",
              "Conversations",
              "Speech Review",
              "Voice Insights",
              "Automations",
            ].map((x, i) => (
              <div
                className={i === 0 ? "dash-nav-item active" : "dash-nav-item"}
                key={x}
              >
                <span className={`dash-icon icon-${i}`} />
                {x}
              </div>
            ))}
          </div>
          <div className="dash-nav bottom">
            {["Activity", "Device", "Settings"].map((x) => (
              <div className="dash-nav-item" key={x}>
                <span className="dash-icon" />
                {x}
              </div>
            ))}
          </div>
        </aside>
        <main className="dash-main">
          <div className="dash-top">
            <div>
              <span className="ui-label">MONDAY, SEPTEMBER 22</span>
              <h3>Good evening, Maya.</h3>
            </div>
            <div className="dash-avatar">M</div>
          </div>
          <div className="dash-grid">
            <div className="dash-card memory-summary">
              <div className="dash-card-head">
                <span>MEMORY SUMMARY</span>
                <Arrow small />
              </div>
              <strong>24</strong>
              <p>moments kept this week</p>
              <div className="spark-bars">
                {[3, 7, 4, 8, 6, 10, 7, 12, 9, 14, 11, 15, 13, 17].map(
                  (x, i) => (
                    <i style={{ height: `${x * 3}px` }} key={i} />
                  ),
                )}
              </div>
            </div>
            <div className="dash-card voice-summary">
              <div className="dash-card-head">
                <span>DAILY VOICE INSIGHTS</span>
                <Arrow small />
              </div>
              <div className="voice-summary-main">
                <strong>+18%</strong>
                <span>
                  pitch variation
                  <br />
                  at 02:35 PM
                </span>
              </div>
              <svg viewBox="0 0 300 70" preserveAspectRatio="none">
                <polyline points="0,54 25,48 50,53 75,32 100,42 125,20 150,35 175,24 200,44 225,36 250,50 275,45 300,54" />
              </svg>
            </div>
            <div className="dash-card recent-memory">
              <div className="dash-card-head">
                <span>RECENT MEMORY</span>
                <span className="memory-tag">WORK</span>
              </div>
              <h4>Follow up with Arjun after the product review.</h4>
              <p>Today · 4:42 PM</p>
              <div className="dash-card-foot">
                Open memory <Arrow small />
              </div>
            </div>
            <div className="dash-card device-summary">
              <div className="dash-card-head">
                <span>ECHOVAULT</span>
                <span className="connected">
                  <i /> CONNECTED
                </span>
              </div>
              <div className="device-line">
                <Pendant compact />
                <div>
                  <strong>86%</strong>
                  <span>Battery</span>
                </div>
              </div>
              <div className="device-bottom">
                <span>BLE / STABLE</span>
                <span>LISTENING</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

function Activity() {
  return (
    <section className="activity section">
      <div className="activity-header">
        <SectionKicker>Always in context</SectionKicker>
        <h2>
          A quiet record
          <br />
          <em>of the day.</em>
        </h2>
      </div>
      <div className="activity-list">
        {[
          [
            "09:14",
            "Conversation captured",
            "A meaningful moment was added to your day",
          ],
          ["11:42", "Memory created", "“Follow up with Arjun”"],
          [
            "14:35",
            "Voice pattern detected",
            "Higher expressive variation observed",
          ],
          ["16:20", "Reminder created", "Call Arjun · Tomorrow at 10:30 AM"],
          [
            "19:10",
            "Daily insights generated",
            "Your voice, throughout the day",
          ],
        ].map((item, i) => (
          <div className="activity-item" key={item[0]}>
            <time>{item[0]}</time>
            <span
              className={i === 2 ? "activity-dot active" : "activity-dot"}
            />
            <div>
              <b>{item[1]}</b>
              <small>{item[2]}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="final">
      <div className="footer-main">
        <div>
          <div className="wordmark footer-mark">
            ECHOVAULT<span>®</span>
          </div>
          <h2>
            Your life has context.
            <br />
            <em>Now your AI can remember it.</em>
          </h2>
        </div>
        <div className="footer-cta">
          <p>
            Memory, understanding, voice insights and action — brought into the
            way you live.
          </p>
          <a className="button primary" href="#top">
            Explore EchoVault <Arrow small />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 EchoVault</span>
        <div>
          <a href="#product">Product</a>
          <a href="#how-it-works">How it works</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#">Privacy</a>
        </div>
        <span>Made for the moments that matter.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <CapabilityStory />
        <Pipeline />
        <PendantShowcase />
        <MemoryExperience />
        <VoiceInsights />
        <Automation />
        <Dashboard />
        <Activity />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
