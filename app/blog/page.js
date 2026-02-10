import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "next/link";

export const metadata = {
  title: "Blog | Alles over isolatie en subsidie | De Isolatie Check",
  description:
    "Tips, nieuws en advies over woningisolatie, ISDE subsidie en energiebesparing. Leer hoe je je huis verduurzaamt en maximaal bespaart.",
  alternates: {
    canonical: "https://deisolatiecheck.nl/blog",
  },
};

const BLOG_POSTS = [
  {
    slug: "isde-subsidie-2026-complete-gids",
    title: "ISDE Subsidie 2026: De Complete Gids",
    excerpt:
      "Alles wat je moet weten over de ISDE-subsidie in 2026. Welke bedragen gelden er, hoe vraag je het aan, en hoe maximaliseer je je subsidie?",
    date: "10 februari 2026",
    readTime: "8 min",
    category: "Subsidie",
  },
  {
    slug: "dakisolatie-kosten-besparing",
    title: "Dakisolatie: Kosten, Besparing en Terugverdientijd",
    excerpt:
      "Tot 30% van de warmte in je huis ontsnapt via het dak. Ontdek wat dakisolatie kost, hoeveel je bespaart en wanneer je investering is terugverdiend.",
    date: "8 februari 2026",
    readTime: "6 min",
    category: "Isolatie",
  },
  {
    slug: "combinatiebonus-dubbele-subsidie",
    title: "Combinatiebonus: Zo Krijg Je Dubbele Subsidie",
    excerpt:
      "Wist je dat je subsidiebedragen verdubbelen als je twee of meer isolatiemaatregelen combineert? Ontdek hoe je maximaal profiteert.",
    date: "5 februari 2026",
    readTime: "5 min",
    category: "Subsidie",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <div style={{ background: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            padding: "140px 24px 60px",
            textAlign: "center",
            background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              color: "#0f172a",
              marginBottom: "14px",
            }}
          >
            Blog
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "#64748b",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Tips, nieuws en advies over isolatie, subsidie en energiebesparing.
          </p>
        </section>

        {/* Blog Grid */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 24px 80px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  textDecoration: "none",
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "16px",
                  padding: "28px",
                  transition: "all 0.2s",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                  <span
                    style={{
                      background: "#f0fdf4",
                      color: "#15803d",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                    {post.readTime} lezen
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#0f172a",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  {post.excerpt}
                </p>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#16a34a",
                  }}
                >
                  Lees meer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </>
  );
}
