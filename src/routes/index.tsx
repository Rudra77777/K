import { useEffect, useState } from "react";
import { ArrowDown, Heart, Mail, Sparkles } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const timelineMoments = [
  { time: "00:00", dateTime: "PT0M", moment: "Last seen online 👀" },
  { time: "00:15", dateTime: "PT15M", moment: "Hippo starts wondering 🤨" },
  { time: "00:30", dateTime: "PT30M", moment: "Suspicion increases 📈" },
  { time: "01:00", dateTime: "PT1H", moment: "Official ghosting allegations 😭" },
] as const;

const confettiPieces = Array.from({ length: 16 }, (_, index) => index);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Kriti, My Favorite Hippo | A Little Apology" },
      {
        name: "description",
        content: "A little pink apology for Kriti, with love from her favourite human.",
      },
      { property: "og:title", content: "For Kriti, My Favorite Hippo" },
      {
        property: "og:description",
        content: "A tiny, heartfelt apology made just for Kriti.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApologyPage,
});

function ApologyPage() {
  const [answer, setAnswer] = useState<"forgiven" | "mad" | null>(null);
  const [confettiRun, setConfettiRun] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const openLetter = () => {
    const letter = document.getElementById("letter");
    if (!letter) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    letter.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const forgive = () => {
    setAnswer("forgiven");
    setConfettiRun((run) => run + 1);
  };

  return (
    <main className="apology-page">
      <div className="floating-hearts" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <span key={index}>{index % 3 === 0 ? "✦" : "♥"}</span>
        ))}
      </div>

      <header className="site-header page-shell">
        <div className="signature">
          <span className="signature-mark" aria-hidden="true">K + H</span>
          <span className="signature-copy">
            <strong>A tiny sorry note</strong>
            <span>for my favorite Hippo</span>
          </span>
        </div>
        <span className="header-note"><Heart size={14} fill="currentColor" /> made just for you</span>
      </header>

      <section className="hero page-shell" id="top" aria-labelledby="greeting-title">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-mark" /> A little note from your human</p>
          <h1 className="hero-title" id="greeting-title">
            Heyyy <span className="hero-title-accent">Kritiiii! 💗</span>
          </h1>
          <p className="hero-subtitle">Okay <strong>Hippo</strong>, I made something for you...</p>
          <Button className="gift-button" size="lg" onClick={openLetter}>
            <Mail aria-hidden="true" /> Open your little surprise <Heart aria-hidden="true" fill="currentColor" />
          </Button>
          <p className="hero-footnote"><Sparkles size={14} aria-hidden="true" /> A very small note with a very big sorry.</p>
        </div>

        <div className="hero-art" data-reveal>
          <div className="hippo-stage">
            <HippoIllustration />
            <span className="float-label float-label-top"><Heart fill="currentColor" /> tiny apology</span>
            <span className="float-label float-label-bottom"><Sparkles /> extra love inside</span>
          </div>
        </div>
      </section>

      <section className="section-block letter-section" aria-labelledby="letter-title">
        <div className="section-inner">
          <p className="section-kicker" data-reveal>from me, to you</p>
          <h2 className="section-heading" id="letter-title" data-reveal>
            Okay, I owe you an <span>apology...</span>
          </h2>
          <article className="letter-card" id="letter" data-reveal aria-label="A heartfelt apology for Kriti">
            <div className="letter-topline">
              <span>A little note, written with love</span>
              <Heart aria-hidden="true" fill="currentColor" />
            </div>
            <div className="letter-body">
              <p className="letter-line">Heyyy Kritiiii (Hippo 😋),</p>
              <p className="letter-line">First of all, I'm sorryyy! 😭💗</p>
              <p className="letter-line">
                I know I went offline for an hour without saying anything, and I get why that might have made you feel like I was ghosting you.
              </p>
              <p className="letter-line">
                But trust me, Hippo, I wasn't ignoring you or intentionally disappearing. Sometimes I get caught up in things, but I should've at least let you know instead of just going offline.
              </p>
              <p className="letter-line">
                I promise you weren't being ghosted. There was no secret mission to escape from Hippo. 😭🦛
              </p>
              <p className="letter-line">
                You deserve better communication than that, and I'll try not to leave you wondering like that again.
              </p>
              <p className="letter-line">
                So please accept this tiny pink apology from your favourite human (hopefully still favourite 😔).
              </p>
              <p className="letter-line">Now can we stop being mad at each other? 🥹💗</p>
              <p className="letter-line">P.S. You're still a hippo. A very cute one, unfortunately. 😋💕</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-block case-section" aria-labelledby="case-title">
        <div className="section-inner" data-reveal>
          <div className="case-heading-row">
            <div>
              <p className="section-kicker">the very serious investigation</p>
              <h2 className="section-heading" id="case-title">THE CASE OF THE <span>MISSING HUMAN 🕵️</span></h2>
            </div>
            <div className="case-stamp" aria-label="Innocent, but still sorry">
              <strong>INNOCENT</strong>
              <span>(but still sorry)</span>
            </div>
          </div>

          <ol className="timeline" aria-label="The one-hour incident timeline">
            {timelineMoments.map((moment) => (
              <li className="timeline-item" key={moment.time}>
                <time dateTime={moment.dateTime}>{moment.time}</time>
                <p>{moment.moment}</p>
              </li>
            ))}
          </ol>

          <p className="plot-twist"><Sparkles aria-hidden="true" /> Plot twist: I WASN'T GHOSTING YOU!</p>
        </div>
      </section>

      <section className="section-block forgiveness-section" aria-labelledby="forgiveness-title">
        <div className="forgiveness-inner" data-reveal>
          <p className="section-kicker">whenever you're ready</p>
          <h2 className="section-heading" id="forgiveness-title">So... are we good, Hippo? <span>🥺</span></h2>
          <p className="forgiveness-copy">No rush, Hippo. Whatever you're feeling is okay.</p>
          <div className="forgiveness-actions">
            <Button className="gift-button" size="lg" onClick={forgive}>
              I forgive you <Heart aria-hidden="true" fill="currentColor" />
            </Button>
            <Button
              className="gift-button gift-button-secondary"
              size="lg"
              variant="outline"
              onClick={() => setAnswer("mad")}
            >
              Still mad <span aria-hidden="true">😤</span>
            </Button>
          </div>

          {answer === "forgiven" && (
            <div className="heart-confetti" key={confettiRun} aria-hidden="true">
              {confettiPieces.map((piece, index) => (
                <span key={piece}>{index % 4 === 0 ? "✦" : "♥"}</span>
              ))}
            </div>
          )}

          {answer && (
            <div className="forgiveness-response" role="status" aria-live="polite">
              <div className="response-hippo"><HippoIllustration mood={answer === "mad" ? "sad" : "happy"} /></div>
              <div>
                <p className="response-message">
                  {answer === "forgiven"
                    ? "YAYYYYY! HIPPO HAS FORGIVEN ME!! 😭💗"
                    : "Okay okay, I deserve that 😭 I'll wait until my favourite Hippo is ready."}
                </p>
                {answer === "forgiven" && (
                  <p className="response-promise">I promise I'll communicate better next time.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="closing-section section-inner" aria-labelledby="closing-title">
        <p className="section-kicker">one last thing</p>
        <h2 className="section-heading" id="closing-title">One last thing, Kriti...</h2>
        <p className="closing-line">An hour offline doesn't mean an hour without caring. 💗</p>
        <p className="closing-note">You're important, Hippo. Don't forget that.</p>
        <Heart className="closing-heart" aria-hidden="true" fill="currentColor" />
      </section>

      <footer className="site-footer">
        <span>Made with love, just for you.</span>
        <Heart aria-hidden="true" fill="currentColor" />
        <span aria-label="hippo and hearts">🦛💕</span>
      </footer>
    </main>
  );
}

function HippoIllustration({ mood = "happy" }: { mood?: "happy" | "sad" }) {
  const isSad = mood === "sad";

  return (
    <svg
      className="hippo-illustration"
      viewBox="0 0 360 320"
      role="img"
      aria-label={isSad ? "A little hippo holding flowers" : "A happy hippo holding a heart"}
    >
      <ellipse className="hippo-ground" cx="180" cy="285" rx="92" ry="14" />
      <path className="hippo-skin" d="M101 111c-17-19-14-49 2-55 16-7 30 10 31 32m93 0c1-22 15-39 31-32 16 6 19 36 2 55" />
      <path className="hippo-ear-inner" d="M111 84c-3-10-2-17 3-19 6-2 10 6 11 15m119 4c1-9 5-17 11-15 5 2 6 9 3 19" />
      <path className="hippo-skin" d="M88 145c0-48 38-77 92-77s92 29 92 77v43c0 59-34 94-92 94s-92-35-92-94z" />
      <path className="hippo-brow" d={isSad ? "M129 133l18 7m84-7-18 7" : "M129 128l15-2m87 2-15-2"} />
      <ellipse className="hippo-eye" cx="141" cy="146" rx="5.5" ry="8" />
      <ellipse className="hippo-eye" cx="219" cy="146" rx="5.5" ry="8" />
      <ellipse className="hippo-cheek" cx="119" cy="176" rx="15" ry="8" />
      <ellipse className="hippo-cheek" cx="241" cy="176" rx="15" ry="8" />
      <ellipse className="hippo-muzzle" cx="180" cy="184" rx="79" ry="46" />
      <ellipse className="hippo-nostril" cx="158" cy="179" rx="5" ry="7" />
      <ellipse className="hippo-nostril" cx="202" cy="179" rx="5" ry="7" />
      <path className={isSad ? "hippo-sad-mouth" : "hippo-happy-mouth"} d={isSad ? "M160 208q20-20 40 0" : "M157 196q23 21 46 0"} />
      <path className="hippo-arm" d="M102 219c11-8 26-5 37 6l27 28c7 8 7 19-1 26-8 7-19 5-26-3l-31-35c-7-8-10-15-6-22zm156 0c-11-8-26-5-37 6l-27 28c-7 8-7 19 1 26 8 7 19 5 26-3l31-35c7-8 10-15 6-22z" />
      {isSad ? (
        <g aria-hidden="true">
          <path className="hippo-stem" d="M178 250q-10-18-18-28m21 29q9-21 19-31m-17 32q-2-22 1-40" />
          <g className="hippo-flower-petal">
            <circle cx="158" cy="215" r="7" />
            <circle cx="169" cy="209" r="7" />
            <circle cx="169" cy="221" r="7" />
            <circle cx="157" cy="227" r="7" />
            <circle cx="151" cy="220" r="7" />
          </g>
          <circle className="hippo-flower-center" cx="160" cy="219" r="5" />
          <g className="hippo-flower-petal">
            <circle cx="191" cy="204" r="7" />
            <circle cx="202" cy="198" r="7" />
            <circle cx="202" cy="210" r="7" />
            <circle cx="190" cy="216" r="7" />
            <circle cx="184" cy="209" r="7" />
          </g>
          <circle className="hippo-flower-center" cx="193" cy="208" r="5" />
          <g className="hippo-flower-petal">
            <circle cx="177" cy="191" r="7" />
            <circle cx="188" cy="185" r="7" />
            <circle cx="188" cy="197" r="7" />
            <circle cx="176" cy="203" r="7" />
            <circle cx="170" cy="196" r="7" />
          </g>
          <circle className="hippo-flower-center" cx="179" cy="195" r="5" />
        </g>
      ) : (
        <g className="hippo-heart-float" aria-hidden="true">
          <path className="hippo-heart-fill" d="M180 259c-8-7-28-20-28-34 0-15 19-19 28-6 9-13 28-9 28 6 0 14-20 27-28 34z" />
          <path className="hippo-bow" d="M173 231c-7-8-18-4-14 3 3 5 10 4 14-3zm14 0c7-8 18-4 14 3-3 5-10 4-14-3z" />
          <circle className="hippo-bow" cx="180" cy="231" r="4" />
        </g>
      )}
    </svg>
  );
}