"use client";

import { useState, useEffect, useRef } from "react";

// ============================================
// 📋 INSTRUCTIE: Google Sheets koppeling
// Volg de stappen in de README om je Google Sheets
// webhook URL te krijgen, en plak die hieronder.
// ============================================
const GOOGLE_SHEETS_URL = "G-3J4HX42QRH"; // ← Plak je Google Apps Script URL hier

const INSULATION_DATA = {
  dak: {
    label: "Dakisolatie",
    icon: "🏠",
    pricePerM2: 45,
    subsidySingle: 16.25,
    subsidyDouble: 32.5,
    minM2: 20,
    description: "Voorkom tot 30% warmteverlies via het dak",
    savings: 350,
  },
  vloer: {
    label: "Vloerisolatie",
    icon: "⬛",
    pricePerM2: 30,
    subsidySingle: 5.5,
    subsidyDouble: 11.0,
    minM2: 20,
    description: "Warme voeten en lagere stookkosten",
    savings: 250,
  },
  spouwmuur: {
    label: "Spouwmuurisolatie",
    icon: "🧱",
    pricePerM2: 25,
    subsidySingle: 5.25,
    subsidyDouble: 10.5,
    minM2: 10,
    description: "Snelste terugverdientijd van alle maatregelen",
    savings: 300,
  },
  bodem: {
    label: "Bodemisolatie",
    icon: "🌍",
    pricePerM2: 35,
    subsidySingle: 3.0,
    subsidyDouble: 6.0,
    minM2: 20,
    description: "Ideaal voor woningen met kruipruimte",
    savings: 200,
  },
  gevel: {
    label: "Gevelisolatie",
    icon: "🏗️",
    pricePerM2: 120,
    subsidySingle: 20.25,
    subsidyDouble: 40.5,
    minM2: 10,
    description: "De meest complete oplossing voor buitenmuren",
    savings: 400,
  },
  glas: {
    label: "HR++ Glasisolatie",
    icon: "🪟",
    pricePerM2: 250,
    subsidySingle: 25.0,
    subsidyDouble: 50.0,
    minM2: 3,
    description: "Direct merkbaar verschil in comfort",
    savings: 280,
  },
};

const formatCurrency = (n) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

const AnimatedNumber = ({ value, duration = 800 }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const prevRef = useRef(0);
  useEffect(() => {
    let start = prevRef.current;
    let startTime = null;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (value - start) * eased);
      setDisplay(current);
      if (progress < 1) {
        ref.current = requestAnimationFrame(animate);
      } else {
        prevRef.current = value;
      }
    };
    ref.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(ref.current);
  }, [value]);
  return <span>{formatCurrency(display)}</span>;
};

const ProgressRing = ({ percent }) => {
  const r = 52,
    c = 2 * Math.PI * r;
  return (
    <svg width="124" height="124" viewBox="0 0 124 124" style={{ transform: "rotate(-90deg)" }}>
      <circle cx="62" cy="62" r={r} fill="none" stroke="#e8f5e9" strokeWidth="10" />
      <circle
        cx="62" cy="62" r={r} fill="none"
        stroke="url(#ringG)" strokeWidth="10" strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={c - (c * Math.min(percent, 100)) / 100}
        style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1)" }}
      />
      <defs>
        <linearGradient id="ringG" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function DeIsolatieCheck() {
  const [selected, setSelected] = useState([]);
  const [m2Values, setM2Values] = useState({});
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ naam: "", email: "", telefoon: "", postcode: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const calcRef = useRef(null);

  const submitToGoogleSheets = async () => {
    if (!formData.naam || !formData.email || !formData.telefoon) return;
    setFormLoading(true);
    try {
      const leadData = {
        ...formData,
        isolatietypes: selected.map((k) => INSULATION_DATA[k].label).join(", "),
        totalSubsidy: totalSubsidy,
        totalCost: totalCost,
        netCost: netCost,
        totalSavings: totalSavings,
        datum: new Date().toLocaleString("nl-NL"),
      };
      if (GOOGLE_SHEETS_URL) {
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });
      }
      setFormSubmitted(true);
    } catch (err) {
      console.error("Formulier fout:", err);
      setFormSubmitted(true); // Toon succes ook bij fout (lead niet verliezen)
    }
    setFormLoading(false);
  };

  const toggleSelect = (key) =>
    setSelected((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  const setM2 = (key, val) =>
    setM2Values((prev) => ({ ...prev, [key]: Math.max(0, Number(val) || 0) }));

  const isDouble = selected.length >= 2;

  const totalCost = selected.reduce((sum, key) => {
    const d = INSULATION_DATA[key];
    return sum + d.pricePerM2 * (m2Values[key] || d.minM2);
  }, 0);

  const totalSubsidy = selected.reduce((sum, key) => {
    const d = INSULATION_DATA[key];
    const m2 = m2Values[key] || d.minM2;
    return sum + (isDouble ? d.subsidyDouble : d.subsidySingle) * m2;
  }, 0);

  const totalSavings = selected.reduce((sum, key) => sum + INSULATION_DATA[key].savings, 0);
  const subsidyPercent = totalCost > 0 ? (totalSubsidy / totalCost) * 100 : 0;
  const netCost = totalCost - totalSubsidy;

  const scrollToCalc = () => calcRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{
      fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif",
      background: "#ffffff",
      color: "#1a2e1a",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: #bbf7d0; color: #14532d; }
        input:focus { border-color: #16a34a !important; box-shadow: 0 0 0 3px rgba(22,163,74,0.1) !important; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-12px); } to { opacity: 1; transform: translateX(0); } }
        .fade-up { animation: fadeUp 0.7s ease both; }
        .fade-up-d1 { animation: fadeUp 0.7s ease 0.1s both; }
        .fade-up-d2 { animation: fadeUp 0.7s ease 0.2s both; }
        .fade-up-d3 { animation: fadeUp 0.7s ease 0.3s both; }
        .card-hover:hover { border-color: #86efac !important; box-shadow: 0 4px 24px rgba(22,163,74,0.08) !important; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(22,163,74,0.25) !important; }
        .nav-link:hover { color: #16a34a !important; }
      `}</style>

      {/* Navigation is now in separate component */}

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", textAlign: "center",
        padding: "120px 24px 80px", position: "relative",
        background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 60%)",
        overflow: "hidden",
      }}>
        {/* Subtle decorative elements */}
        <div style={{
          position: "absolute", top: "-120px", right: "-80px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-60px", left: "-100px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22,163,74,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="fade-up" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "50px",
          padding: "8px 18px", fontSize: "13px", fontWeight: 700,
          color: "#15803d", marginBottom: "28px",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
          ISDE Subsidie 2026 — Tot 30% terug op isolatie
        </div>

        <h1 className="fade-up-d1" style={{
          fontSize: "clamp(34px, 5.5vw, 64px)", fontWeight: 900,
          lineHeight: 1.08, letterSpacing: "-2px", maxWidth: "780px",
          color: "#0f172a", margin: "0 0 22px",
        }}>
          Ontdek in{" "}
          <span style={{
            background: "linear-gradient(135deg, #16a34a, #4ade80)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>30 seconden</span>{" "}
          hoeveel subsidie jij krijgt
        </h1>

        <p className="fade-up-d2" style={{
          fontSize: "clamp(16px, 2vw, 19px)", color: "#64748b",
          maxWidth: "540px", lineHeight: 1.7, margin: "0 0 40px",
        }}>
          Bereken direct je ISDE-subsidie, besparing op energiekosten en netto investering. Wij regelen alles — van advies tot uitvoering.
        </p>

        <button className="fade-up-d3 cta-btn" onClick={scrollToCalc} style={{
          background: "linear-gradient(135deg, #16a34a, #22c55e)",
          color: "#fff", border: "none", borderRadius: "60px",
          padding: "18px 44px", fontSize: "17px", fontWeight: 800,
          cursor: "pointer", letterSpacing: "0.2px",
          boxShadow: "0 4px 24px rgba(22,163,74,0.25)",
          transition: "all 0.3s ease",
        }}>
          Bereken mijn subsidie →
        </button>

        {/* Stats */}
        <div className="fade-up-d3" style={{
          marginTop: "72px", display: "flex", gap: "56px",
          flexWrap: "wrap", justifyContent: "center",
        }}>
          {[
            { num: "1.200+", label: "Woningen verduurzaamd" },
            { num: "€2,1M+", label: "Subsidie aangevraagd" },
            { num: "98%", label: "Klanttevredenheid" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "26px", fontWeight: 900, color: "#16a34a" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "32px",
        justifyContent: "center", alignItems: "center",
        padding: "32px 24px",
        background: "#f8fafc",
        borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0",
      }}>
        {["Erkend isolatiebedrijf", "ISDE-gecertificeerd", "Gratis woningscan", "Subsidie gegarandeerd geregeld", "Binnen 2 weken geïsoleerd"].map((t, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "8px",
            color: "#475569", fontSize: "13px", fontWeight: 600,
          }}>
            <span style={{
              width: "20px", height: "20px", borderRadius: "50%",
              background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {t}
          </div>
        ))}
      </div>

      {/* CALCULATOR */}
      <div id="calculator" ref={calcRef} style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%)",
        paddingTop: "20px",
      }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{
            fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 900,
            letterSpacing: "-1.5px", textAlign: "center", marginBottom: "12px", color: "#0f172a",
          }}>
            Bereken jouw{" "}
            <span style={{
              background: "linear-gradient(135deg, #16a34a, #4ade80)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>subsidie</span>
          </h2>
          <p style={{
            textAlign: "center", color: "#64748b", fontSize: "16px",
            maxWidth: "560px", margin: "0 auto 48px", lineHeight: 1.7,
          }}>
            Selecteer de isolatiemaatregelen die je wilt laten uitvoeren en ontdek direct hoeveel je terugkrijgt.
          </p>

          {/* Step indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "44px" }}>
            {["Kies isolatie", "Vul m² in", "Jouw resultaat"].map((label, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "30px", height: "30px", borderRadius: "50%",
                  background: step >= i ? "#16a34a" : "#e2e8f0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", fontWeight: 800, transition: "all 0.3s",
                  color: step >= i ? "#fff" : "#94a3b8",
                }}>{i + 1}</div>
                <span style={{
                  fontSize: "13px", fontWeight: 600,
                  color: step >= i ? "#1e293b" : "#94a3b8",
                }}>{label}</span>
                {i < 2 && <div style={{
                  width: "36px", height: "2px",
                  background: step > i ? "#16a34a" : "#e2e8f0",
                  margin: "0 6px", borderRadius: "2px",
                }} />}
              </div>
            ))}
          </div>

          {/* STEP 0: Select insulation */}
          {step === 0 && (
            <>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "14px",
              }}>
                {Object.entries(INSULATION_DATA).map(([key, data]) => {
                  const isSel = selected.includes(key);
                  return (
                    <div
                      key={key} className="card-hover"
                      style={{
                        background: isSel ? "#f0fdf4" : "#fff",
                        border: isSel ? "2px solid #4ade80" : "2px solid #e5e7eb",
                        borderRadius: "16px", padding: "22px",
                        cursor: "pointer", transition: "all 0.25s ease",
                        position: "relative",
                        boxShadow: isSel ? "0 4px 20px rgba(22,163,74,0.1)" : "0 1px 4px rgba(0,0,0,0.04)",
                      }}
                      onClick={() => toggleSelect(key)}
                    >
                      {/* Checkbox */}
                      <div style={{
                        position: "absolute", top: "14px", right: "14px",
                        width: "24px", height: "24px", borderRadius: "7px",
                        background: isSel ? "#16a34a" : "#fff",
                        border: isSel ? "none" : "2px solid #d1d5db",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.2s ease",
                      }}>
                        {isSel && <CheckIcon />}
                      </div>
                      <span style={{ fontSize: "28px", display: "block", marginBottom: "10px" }}>{data.icon}</span>
                      <div style={{ fontSize: "15px", fontWeight: 700, color: "#1e293b", marginBottom: "5px" }}>{data.label}</div>
                      <div style={{ fontSize: "12.5px", color: "#94a3b8", lineHeight: 1.5 }}>{data.description}</div>
                      <div style={{ marginTop: "12px", fontSize: "12px", color: "#16a34a", fontWeight: 700 }}>
                        {isDouble && isSel ? formatCurrency(data.subsidyDouble) : formatCurrency(data.subsidySingle)}/m²
                        {isDouble && isSel && (
                          <span style={{
                            marginLeft: "6px", background: "#dcfce7",
                            padding: "2px 8px", borderRadius: "20px", fontSize: "10px",
                            color: "#15803d", fontWeight: 800,
                          }}>2× BONUS</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {selected.length >= 2 && (
                <div style={{
                  textAlign: "center", marginTop: "20px", padding: "14px 24px",
                  background: "#f0fdf4", borderRadius: "12px",
                  border: "1px solid #bbf7d0", fontSize: "14px", fontWeight: 600,
                  color: "#15803d",
                }}>
                  🎉 Combinatiebonus actief — je subsidiebedragen zijn verdubbeld!
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "28px" }}>
                <button className="cta-btn" onClick={() => selected.length > 0 && setStep(1)} style={{
                  padding: "14px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: 700,
                  cursor: selected.length > 0 ? "pointer" : "default",
                  background: selected.length > 0 ? "#16a34a" : "#e2e8f0",
                  color: selected.length > 0 ? "#fff" : "#94a3b8",
                  border: "none", transition: "all 0.25s ease",
                  boxShadow: selected.length > 0 ? "0 4px 16px rgba(22,163,74,0.2)" : "none",
                }}>
                  Volgende: Oppervlakte invullen →
                </button>
              </div>
            </>
          )}

          {/* STEP 1: M2 input */}
          {step === 1 && (
            <>
              <div style={{ maxWidth: "480px", margin: "0 auto" }}>
                {selected.map((key) => {
                  const data = INSULATION_DATA[key];
                  const val = m2Values[key] || "";
                  return (
                    <div key={key} style={{
                      marginBottom: "18px", background: "#fff",
                      borderRadius: "14px", padding: "22px",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                        <span style={{ fontSize: "22px" }}>{data.icon}</span>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "15px", color: "#1e293b" }}>{data.label}</div>
                          <div style={{ fontSize: "12px", color: "#94a3b8" }}>Minimaal {data.minM2} m² vereist</div>
                        </div>
                      </div>
                      <div style={{ position: "relative" }}>
                        <input
                          type="number"
                          placeholder={`Bijv. ${data.minM2 * 2}`}
                          value={val}
                          onChange={(e) => setM2(key, e.target.value)}
                          style={{
                            width: "100%", padding: "13px 50px 13px 16px",
                            background: "#f8fafc", border: "2px solid #e2e8f0",
                            borderRadius: "10px", color: "#1e293b", fontSize: "15px",
                            outline: "none", fontFamily: "inherit",
                            transition: "all 0.2s ease",
                          }}
                        />
                        <span style={{
                          position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)",
                          color: "#94a3b8", fontSize: "14px", fontWeight: 600,
                        }}>m²</span>
                      </div>
                      {(m2Values[key] || 0) > 0 && (m2Values[key] || 0) < data.minM2 && (
                        <div style={{ color: "#f59e0b", fontSize: "12px", marginTop: "8px", fontWeight: 500 }}>
                          ⚠ Minimaal {data.minM2} m² nodig voor subsidie
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "28px" }}>
                <button onClick={() => setStep(0)} style={{
                  padding: "14px 28px", borderRadius: "50px", fontSize: "14px", fontWeight: 700,
                  background: "#f1f5f9", color: "#475569", border: "none", cursor: "pointer",
                  transition: "all 0.2s",
                }}>← Terug</button>
                <button className="cta-btn" onClick={() => {
                  if (selected.every((k) => (m2Values[k] || 0) >= INSULATION_DATA[k].minM2)) setStep(2);
                }} style={{
                  padding: "14px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: 700,
                  cursor: selected.every((k) => (m2Values[k] || 0) >= INSULATION_DATA[k].minM2) ? "pointer" : "default",
                  background: selected.every((k) => (m2Values[k] || 0) >= INSULATION_DATA[k].minM2) ? "#16a34a" : "#e2e8f0",
                  color: selected.every((k) => (m2Values[k] || 0) >= INSULATION_DATA[k].minM2) ? "#fff" : "#94a3b8",
                  border: "none", transition: "all 0.25s ease",
                  boxShadow: selected.every((k) => (m2Values[k] || 0) >= INSULATION_DATA[k].minM2) ? "0 4px 16px rgba(22,163,74,0.2)" : "none",
                }}>
                  Bekijk mijn resultaat →
                </button>
              </div>
            </>
          )}

          {/* STEP 2: Results */}
          {step === 2 && (
            <>
              <div style={{
                background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)",
                border: "1px solid #bbf7d0", borderRadius: "24px",
                padding: "44px 32px", textAlign: "center", position: "relative",
                boxShadow: "0 8px 40px rgba(22,163,74,0.08)",
              }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "24px", marginBottom: "16px", flexWrap: "wrap" }}>
                  <ProgressRing percent={subsidyPercent} />
                  <div>
                    <div style={{
                      fontSize: "12px", color: "#64748b", fontWeight: 700,
                      letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "4px",
                    }}>Jouw ISDE-subsidie</div>
                    <div style={{
                      fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900,
                      background: "linear-gradient(135deg, #16a34a, #4ade80)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      lineHeight: 1.1,
                    }}>
                      <AnimatedNumber value={totalSubsidy} />
                    </div>
                    <div style={{ fontSize: "14px", color: "#15803d", fontWeight: 600, marginTop: "4px" }}>
                      {Math.round(subsidyPercent)}% van je investering terug
                    </div>
                  </div>
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                  gap: "16px", marginTop: "32px",
                }}>
                  {[
                    { label: "Geschatte investering", value: <AnimatedNumber value={totalCost} />, color: "#1e293b" },
                    { label: "Na subsidie", value: <AnimatedNumber value={netCost} />, color: "#16a34a" },
                    { label: "Jaarlijkse besparing", value: <>~<AnimatedNumber value={totalSavings} /></>, color: "#1e293b" },
                    { label: "Terugverdientijd", value: netCost > 0 && totalSavings > 0 ? `~${Math.ceil(netCost / totalSavings)} jaar` : "—", color: "#1e293b" },
                  ].map((stat, i) => (
                    <div key={i} style={{
                      background: "#fff", borderRadius: "14px", padding: "20px",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    }}>
                      <div style={{
                        fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.2px",
                        color: "#94a3b8", marginBottom: "6px", fontWeight: 700,
                      }}>{stat.label}</div>
                      <div style={{ fontSize: "22px", fontWeight: 800, color: stat.color }}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Form */}
              {!formSubmitted ? (
                <div style={{
                  background: "#fff", border: "1px solid #e5e7eb",
                  borderRadius: "20px", padding: "36px", marginTop: "36px",
                  maxWidth: "480px", marginLeft: "auto", marginRight: "auto",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}>
                  <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                      Gratis woningscan aanvragen
                    </div>
                    <div style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>
                      Ontvang een persoonlijk isolatieadvies en exacte subsidieberekening. Geheel vrijblijvend.
                    </div>
                  </div>
                  {[
                    { key: "naam", placeholder: "Je volledige naam", type: "text" },
                    { key: "email", placeholder: "E-mailadres", type: "email" },
                    { key: "telefoon", placeholder: "Telefoonnummer", type: "tel" },
                    { key: "postcode", placeholder: "Postcode", type: "text" },
                  ].map((field) => (
                    <input
                      key={field.key}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      style={{
                        width: "100%", padding: "13px 16px", marginBottom: "12px",
                        background: "#f8fafc", border: "2px solid #e2e8f0",
                        borderRadius: "10px", color: "#1e293b", fontSize: "14px",
                        outline: "none", fontFamily: "inherit", boxSizing: "border-box",
                        transition: "all 0.2s ease",
                      }}
                    />
                  ))}
                  <button
                    className="cta-btn"
                    onClick={submitToGoogleSheets}
                    disabled={formLoading}
                    style={{
                      width: "100%", padding: "14px",
                      background: formLoading ? "#86efac" : "#16a34a", color: "#fff", border: "none",
                      borderRadius: "12px", fontSize: "15px", fontWeight: 700,
                      cursor: formLoading ? "wait" : "pointer", marginTop: "4px",
                      boxShadow: "0 4px 16px rgba(22,163,74,0.2)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {formLoading ? "Bezig met versturen..." : "Plan mijn gratis woningscan →"}
                  </button>
                  <div style={{ textAlign: "center", marginTop: "12px", fontSize: "12px", color: "#94a3b8" }}>
                    🔒 Je gegevens zijn veilig. Geen spam, dat beloven we.
                  </div>
                </div>
              ) : (
                <div style={{
                  background: "#f0fdf4", border: "1px solid #bbf7d0",
                  borderRadius: "20px", padding: "40px", marginTop: "36px",
                  maxWidth: "480px", marginLeft: "auto", marginRight: "auto",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: "44px", marginBottom: "14px" }}>🎉</div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#14532d", marginBottom: "8px" }}>
                    Top, {formData.naam.split(" ")[0]}!
                  </div>
                  <div style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.7 }}>
                    We nemen binnen 24 uur contact met je op om een gratis woningscan in te plannen. Tot snel!
                  </div>
                </div>
              )}

              <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "28px" }}>
                <button onClick={() => setStep(1)} style={{
                  padding: "12px 24px", borderRadius: "50px", fontSize: "14px", fontWeight: 700,
                  background: "#f1f5f9", color: "#475569", border: "none", cursor: "pointer",
                }}>← Aanpassen</button>
                <button onClick={() => {
                  setStep(0); setSelected([]); setM2Values({});
                  setFormSubmitted(false); setFormData({ naam: "", email: "", telefoon: "", postcode: "" });
                }} style={{
                  padding: "12px 24px", borderRadius: "50px", fontSize: "14px", fontWeight: 700,
                  background: "#f1f5f9", color: "#475569", border: "none", cursor: "pointer",
                }}>Opnieuw berekenen</button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{
          fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900,
          letterSpacing: "-1px", textAlign: "center", marginBottom: "12px", color: "#0f172a",
        }}>Zo werkt het</h2>
        <p style={{
          textAlign: "center", color: "#64748b", fontSize: "16px",
          maxWidth: "520px", margin: "0 auto 48px", lineHeight: 1.7,
        }}>
          In vier eenvoudige stappen van koude muren naar een warm, duurzaam huis.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}>
          {[
            { num: "1", title: "Bereken", desc: "Gebruik onze calculator en ontdek direct je subsidie en besparingspotentieel." },
            { num: "2", title: "Woningscan", desc: "Onze expert komt gratis langs voor een persoonlijk isolatieadvies op maat." },
            { num: "3", title: "Uitvoering", desc: "Ons erkend isolatiebedrijf voert het werk vakkundig uit — meestal binnen één dag." },
            { num: "4", title: "Subsidie", desc: "Wij regelen je volledige ISDE-subsidieaanvraag. Jij ontvangt het geld." },
          ].map((item) => (
            <div key={item.num} style={{
              background: "#fff", border: "1px solid #e5e7eb",
              borderRadius: "16px", padding: "28px", textAlign: "center",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "#f0fdf4", border: "2px solid #bbf7d0",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", fontWeight: 900, color: "#16a34a",
                margin: "0 auto 18px",
              }}>{item.num}</div>
              <div style={{ fontSize: "17px", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900,
            letterSpacing: "-1px", textAlign: "center", marginBottom: "12px", color: "#0f172a",
          }}>Wat klanten zeggen</h2>
          <p style={{
            textAlign: "center", color: "#64748b", fontSize: "16px",
            maxWidth: "480px", margin: "0 auto 48px", lineHeight: 1.7,
          }}>Meer dan 1.200 tevreden woningeigenaren gingen je voor.</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "18px",
          }}>
            {[
              { name: "Mark & Lisa, Rotterdam", text: "Dak en vloer laten isoleren. De subsidieaanvraag werd volledig voor ons geregeld. Binnen 6 weken €1.840 ontvangen!", stars: 5 },
              { name: "Sandra, Den Bosch", text: "Super service! Spouwmuur was binnen 2 uur klaar. Merken direct verschil in comfort en de gasrekening is flink gedaald.", stars: 5 },
              { name: "Ahmed, Dordrecht", text: "Combinatie van bodemisolatie en HR++ glas. Alles netjes uitgevoerd en subsidie van €2.200 gekregen. Aanrader!", stars: 5 },
            ].map((r, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid #e5e7eb",
                borderRadius: "16px", padding: "26px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <div style={{ color: "#f59e0b", fontSize: "15px", marginBottom: "12px", letterSpacing: "2px" }}>
                  {"★".repeat(r.stars)}
                </div>
                <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#475569", marginBottom: "16px" }}>
                  "{r.text}"
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#16a34a" }}>{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <div style={{
          background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)",
          border: "1px solid #bbf7d0", borderRadius: "24px",
          padding: "56px 32px",
        }}>
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900,
            marginBottom: "14px", color: "#0f172a", letterSpacing: "-1px",
          }}>Klaar om te besparen?</h2>
          <p style={{
            color: "#64748b", fontSize: "16px", maxWidth: "460px",
            margin: "0 auto 28px", lineHeight: 1.7,
          }}>
            Doe de gratis subsidiecheck en ontdek hoeveel jij kunt terugkrijgen. Binnen 24 uur persoonlijk advies.
          </p>
          <button className="cta-btn" onClick={scrollToCalc} style={{
            background: "linear-gradient(135deg, #16a34a, #22c55e)",
            color: "#fff", border: "none", borderRadius: "60px",
            padding: "18px 44px", fontSize: "17px", fontWeight: 800,
            cursor: "pointer", boxShadow: "0 4px 24px rgba(22,163,74,0.25)",
            transition: "all 0.3s ease",
          }}>
            Start mijn subsidiecheck →
          </button>
        </div>
      </div>

      {/* Footer is now in separate component */}
    </div>
  );
}
