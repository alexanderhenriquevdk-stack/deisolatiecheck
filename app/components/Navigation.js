"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowNav(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "14px 24px",
        background: showNav ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: showNav ? "blur(16px)" : "none",
        borderBottom: showNav ? "1px solid #e5e7eb" : "1px solid transparent",
        transition: "all 0.35s ease",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #16a34a, #22c55e)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: 900,
            color: "#fff",
          }}
        >
          ✓
        </div>
        <span
          style={{
            fontSize: "19px",
            fontWeight: 800,
            color: "#14532d",
            letterSpacing: "-0.3px",
          }}
        >
          De Isolatie<span style={{ color: "#16a34a" }}>Check</span>
        </span>
      </Link>

      {/* Desktop nav */}
      <div
        className="nav-desktop"
        style={{ display: "flex", gap: "28px", alignItems: "center" }}
      >
        <Link
          href="/faq"
          className="nav-link"
          style={{
            color: "#64748b",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          Veelgestelde vragen
        </Link>
        <Link
          href="/blog"
          className="nav-link"
          style={{
            color: "#64748b",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          Blog
        </Link>
        <Link
          href="/#calculator"
          className="cta-btn"
          style={{
            background: "#16a34a",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "10px 22px",
            fontSize: "13px",
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.25s ease",
            boxShadow: "0 2px 12px rgba(22,163,74,0.2)",
          }}
        >
          Bereken je subsidie
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="nav-mobile"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          display: "none",
        }}
      >
        <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
          <div style={{ height: "2px", background: "#1e293b", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <div style={{ height: "2px", background: "#1e293b", borderRadius: "2px", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <div style={{ height: "2px", background: "#1e293b", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#fff",
            borderBottom: "1px solid #e5e7eb",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <Link
            href="/faq"
            onClick={() => setMenuOpen(false)}
            style={{ color: "#1e293b", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}
          >
            Veelgestelde vragen
          </Link>
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            style={{ color: "#1e293b", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}
          >
            Blog
          </Link>
          <Link
            href="/#calculator"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#16a34a", color: "#fff", borderRadius: "10px",
              padding: "12px", textAlign: "center", fontWeight: 700,
              fontSize: "14px", textDecoration: "none",
            }}
          >
            Bereken je subsidie
          </Link>
        </div>
      )}
    </nav>
  );
}
