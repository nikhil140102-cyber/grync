"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Star } from "lucide-react";
import styles from "./ToolGaps.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* signal + table icons are images now, not lucide components — swap
   these placeholder paths for your real exported files */
const signals = [
  {
    id: "customer",
    icon: "/images/newhome/d1.png",
    title: "Customer",
    subtitle: "Deal stages",
  },
  {
    id: "marketing",
    icon: "/images/newhome/d2.png",
    title: "Marketing",
    subtitle: "Open rates",
  },
  {
    id: "analytics",
    icon: "/images/newhome/d3.png",
    title: "Analytics",
    subtitle: "Past trends",
  },
  {
    id: "operations",
    icon: "/images/newhome/d4.png",
    title: "Operations",
    subtitle: "Task status",
  },
];

const gaps = [
  {
    id: "gap1",
    title: "Gap1 \u2013 Disconnected signals",
    subtitle: "Each system holds a piece",
  },
  {
    id: "gap2",
    title: "Gap2 \u2013 Delayed action",
    subtitle: "Days pass before anyone acts",
  },
];

const tableRows = [
  {
    id: "crm",
    icon: "/images/newhome/t1.png",
    category: "CRM, support and customer success",
    sees: "Contact history, deal stage, account status.",
    cannotSee: "What your other systems already know.",
    costs: "Revenue and relationships lost to bad timing.",
  },
  {
    id: "marketing-auto",
    icon: "/images/newhome/t2.png",
    category: "Marketing automation and campaigns",
    sees: "Clicks, opens, app sessions, past campaign response.",
    cannotSee: "Whether they are actually ready to act.",
    costs: "High volume, low conversion. The right message at the wrong time.",
  },
  {
    id: "bi",
    icon: "/images/newhome/t3.png",
    category: "BI, dashboards and reporting",
    sees: "Aggregated trends, last week's numbers, historical patterns.",
    cannotSee: "What is true right now, before it reaches a report.",
    costs: "Confident decisions made on data that has already expired.",
  },
  {
    id: "erp",
    icon: "/images/newhome/t4.png",
    category: "ERP, workflow, ticketing and operations",
    sees: "Task status, SLA timers, open tickets, process queues.",
    cannotSee: "Whether a ticket is attached to a revenue risk.",
    costs: "Every fix is a recovery. Never a prevention.",
  },
];

const ToolGaps = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(`.${styles.eyebrow}`, { y: 18, opacity: 0, duration: 0.5 })
        .from(
          `.${styles.heading}`,
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.25",
        )
        .from(
          `.${styles.description}`,
          { y: 18, opacity: 0, duration: 0.55 },
          "-=0.35",
        )
        .from(
          `.${styles.signalCard}`,
          {
            y: 30,
            opacity: 0,
            scale: 0.9,
            duration: 0.55,
            stagger: 0.1,
            ease: "back.out(1.8)",
          },
          "-=0.15",
        )
        .to(
          `.${styles.connectorTop}`,
          { opacity: 1, duration: 0.5, ease: "power1.out" },
          "-=0.1",
        )
        .from(
          `.${styles.gapCard}`,
          {
            y: 24,
            opacity: 0,
            scale: 0.92,
            duration: 0.55,
            stagger: 0.12,
            ease: "back.out(1.8)",
          },
          "-=0.3",
        )
        .to(
          `.${styles.connectorMid}`,
          { opacity: 1, duration: 0.45, ease: "power1.out" },
          "-=0.1",
        )
        .from(
          `.${styles.logoZone}`,
          { opacity: 0, scale: 0.8, duration: 0.6, ease: "back.out(2)" },
          "-=0.2",
        )
        .to(
          `.${styles.connectorBottom}`,
          { opacity: 1, duration: 0.4, ease: "power1.out" },
          "-=0.1",
        )
        .from(
          `.${styles.outcomePill}`,
          { opacity: 0, y: 16, scale: 0.94, duration: 0.5 },
          "-=0.1",
        )
        .from(
          `.${styles.tableCard}`,
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.1",
        )
        .from(
          `.${styles.tableRow}`,
          { opacity: 0, y: 10, duration: 0.4, stagger: 0.08 },
          "-=0.3",
        )
        .from(
          `.${styles.footerPill}`,
          { y: 16, opacity: 0, scale: 0.94, duration: 0.5 },
          "-=0.1",
        )
        .from(
          `.${styles.footerStar}`,
          { scale: 0, rotate: -60, duration: 0.5, ease: "back.out(3)" },
          "-=0.25",
        );

      /* ambient loops — deferred until entrance completes so they don't
			   get killed by GSAP's overwrite:"auto" fighting the entrance
			   tween on the same properties */
      tl.eventCallback("onComplete", () => {
        gsap.to(`.${styles.logoGlowDot}`, {
          scale: 1.6,
          opacity: 0,
          duration: 1.6,
          repeat: -1,
          ease: "power1.out",
        });

        gsap.to(`.${styles.footerStar}`, {
          rotate: 16,
          scale: 1.08,
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(`.${styles.outcomePill}`, {
          boxShadow: "0 0 0 8px rgba(20, 160, 110, 0.12)",
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>
          WHY TRADITIONAL APPROACHES FALL SHORT
        </div>

        <h2 className={styles.heading}>
          Your tools are not broken.
          <br />
          None of them was{" "}
          <span className={styles.highlight}>built to see the others</span>.
        </h2>

        <p className={styles.description}>
          Every tool in your stack does its own job well. The difficulty is that
          each one sees a single slice of the customer, and the thing that
          actually matters, the pattern across all of them, falls into the space
          between.
        </p>

        {/* ================= DIAGRAM ================= */}
        <div className={styles.diagram}>
          <div className={styles.signalRow}>
            {signals.map((s) => (
              <div key={s.id} className={styles.signalCol}>
                <div className={styles.signalCard}>
                  <img src={s.icon} alt="" className={styles.signalIcon} />
                  <strong>{s.title}</strong>
                  <small>{s.subtitle}</small>
                </div>
              </div>
            ))}
          </div>

          <svg className={styles.connectorTop} viewBox="0 0 1000 150">
            <path
              className={styles.linePath}
              d="M125,0 V50 H875 V0 M125,50 H875 M500,50 V80 M500,80 L250,120 M500,80 L750,120"
              fill="none"
            />
            <path
              className={styles.linePath}
              d="M375,0 V50 M625,0 V50"
              fill="none"
            />
          </svg>

          <div className={styles.gapRow}>
            {gaps.map((g) => (
              <div key={g.id} className={styles.gapCard}>
                <strong>{g.title}</strong>
                <small>{g.subtitle}</small>
              </div>
            ))}
          </div>

          <svg className={styles.connectorMid} viewBox="0 0 1000 120">
            <path
              className={styles.linePath}
              d="M250,0 V40 L500,70 M750,0 V40 L500,70 M500,70 V120"
              fill="none"
            />
          </svg>

          <div className={styles.logoZone}>
            <span className={styles.logoGlowDot} />
            <img
              src="/images/logo/icon.png"
              alt="grync.io"
              className={styles.logoMark}
            />
            <strong>grync.io</strong>
            <small>Intelligence Layer</small>
          </div>

          {/* simple CSS stem + arrow instead of a scaled SVG — a
					    near-vertical line inside a fluid-width/fixed-height
					    box is exactly the case that breaks non-uniform SVG
					    scaling, so this avoids that class of bug entirely */}
          <div className={styles.connectorBottom}>
            <span className={styles.connectorStem} />
            <span className={styles.connectorArrow} />
          </div>

          <div className={styles.outcomePill}>
            <CheckCircle2 size={18} />
            <span>Coordinated outcomes</span>
          </div>
        </div>

        {/* ================= TABLE ================= */}
        {/* rebuilt as ARIA-labeled div rows instead of a real <table> —
            border-radius on <tr>/<td> isn't reliably supported across
            browsers, which is why the header and rows below rendered as
            one solid block instead of the separated rounded cards with
            visible gaps that the reference shows. Data, icon paths, and
            copy are untouched — only this presentation markup changed. */}
        <div className={styles.tableCard}>
          <div className={styles.tableScroll}>
            <div className={styles.table} role="table">
              <div className={styles.tableHeaderRow} role="row">
                <div className={styles.th} role="columnheader">
                  Tool category
                </div>
                <div className={styles.th} role="columnheader">
                  What it sees
                </div>
                <div className={styles.th} role="columnheader">
                  What it cannot see
                </div>
                <div className={styles.th} role="columnheader">
                  What that costs you
                </div>
              </div>

              <div className={styles.tableBody}>
                {tableRows.map((row) => (
                  <div key={row.id} className={styles.tableRow} role="row">
                    <div className={styles.td} role="cell">
                      <div className={styles.categoryCell}>
                        <img
                          src={row.icon}
                          alt=""
                          className={styles.categoryIcon}
                        />
                        <span>{row.category}</span>
                      </div>
                    </div>
                    <div className={styles.td} role="cell">
                      {row.sees}
                    </div>
                    <div className={styles.td} role="cell">
                      {row.cannotSee}
                    </div>
                    <div className={styles.td} role="cell">
                      {row.costs}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER PILL ================= */}
        <div className={styles.footerPill}>
          <p>
            This is not a tooling problem.{" "}
            <span className={styles.footerRed}>
              It is the gap between the tools.
            </span>
          </p>
          <span className={styles.footerStar}>
            <Star size={18} fill="#f4602a" strokeWidth={0} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default ToolGaps;