"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const confettiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const colors = ["#f5c400", "#e8a000", "#222", "#ff6b6b", "#6bcfff", "#b5ff6b"];
    const wrap = confettiRef.current;
    if (!wrap) return;
    for (let i = 0; i < 55; i++) {
      const d = document.createElement("div");
      const size = 6 + Math.random() * 10;
      d.style.cssText = `
        position:absolute;
        border-radius:50%;
        opacity:.75;
        left:${Math.random() * 100}%;
        width:${size}px;
        height:${size}px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        animation:fall ${3 + Math.random() * 5}s ${Math.random() * 6}s linear infinite;
      `;
      wrap.appendChild(d);
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@400;700;900&display=swap');
        @keyframes fall {
          0%   { transform: translateY(-60px) rotate(0deg); opacity: .9; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        body { background: #f5f0e8; min-height: 100vh; }
        .names-gradient {
          font-family: 'Pacifico', cursive;
          font-size: clamp(30px, 8vw, 46px);
          background: linear-gradient(135deg, #e8a000, #f5c400);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(1px 2px 2px rgba(180,100,0,.25));
        }
        .character-float {
          animation: float 3.6s ease-in-out infinite;
        }
      `}</style>

      {/* Confetti */}
      <div
        ref={confettiRef}
        style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}
      />

      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Montserrat', sans-serif",
        position: "relative",
      }}>
        {/* Card */}
        <div style={{
          position: "relative",
          zIndex: 1,
          background: "#faf6ed",
          borderRadius: 28,
          padding: "48px 40px 44px",
          maxWidth: 520,
          width: "94vw",
          textAlign: "center",
          boxShadow: "0 12px 48px rgba(0,0,0,.12)",
          overflow: "hidden",
        }}>

          {/* Balloons SVG */}
          <svg style={{ position: "absolute", top: 18, left: 18, opacity: .55, width: 70 }}
            viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="20" cy="28" rx="16" ry="20" fill="none" stroke="#222" strokeWidth="2.5"/>
            <ellipse cx="42" cy="18" rx="16" ry="20" fill="none" stroke="#222" strokeWidth="2.5"/>
            <ellipse cx="62" cy="30" rx="14" ry="18" fill="none" stroke="#222" strokeWidth="2.5"/>
            <line x1="20" y1="48" x2="18" y2="115" stroke="#222" strokeWidth="2" strokeDasharray="3 3"/>
            <line x1="42" y1="38" x2="40" y2="115" stroke="#222" strokeWidth="2" strokeDasharray="3 3"/>
            <line x1="62" y1="48" x2="60" y2="115" stroke="#222" strokeWidth="2" strokeDasharray="3 3"/>
          </svg>

          {/* Squiggles */}
          {[
            { cls: "sq1", style: { top: "52%", left: "6%", transform: "rotate(-30deg)" } },
            { cls: "sq2", style: { top: "68%", left: "4%", transform: "rotate(20deg)" } },
            { cls: "sq3", style: { top: "42%", right: "5%", transform: "rotate(15deg)" } },
            { cls: "sq4", style: { top: "60%", right: "3%", transform: "rotate(-25deg)" } },
          ].map(({ cls, style }) => (
            <span key={cls} style={{ position: "absolute", opacity: .35, fontSize: 26, fontWeight: 900, color: "#222", ...style }}>~</span>
          ))}

          {/* Dot decorations */}
          {[
            { top: "44%", left: "12%" }, { top: "58%", left: "8%" }, { top: "72%", left: "14%" },
            { top: "38%", right: "10%" }, { top: "55%", right: "6%" }, { top: "70%", right: "12%" },
          ].map((s, i) => (
            <div key={i} style={{ position: "absolute", width: 8, height: 8, background: "#222", borderRadius: "50%", opacity: .5, ...s }} />
          ))}

          {/* Dashes */}
          {[
            { top: "50%", left: "5%", transform: "rotate(30deg)" },
            { top: "65%", right: "7%", transform: "rotate(-20deg)" },
          ].map((s, i) => (
            <div key={i} style={{ position: "absolute", width: 18, height: 4, background: "#222", borderRadius: 3, opacity: .4, ...s }} />
          ))}

          {/* Title */}
          <p style={{
            fontSize: "clamp(18px, 4.5vw, 22px)",
            fontWeight: 900,
            letterSpacing: ".12em",
            color: "#1a1a1a",
            lineHeight: 1.3,
            marginBottom: 6,
            textTransform: "uppercase",
          }}>
            Te invitamos a nuestra<br />reunión de graduación
          </p>

          {/* Names */}
          <div className="names-gradient" style={{ marginBottom: 4 }}>
            Felipe – Sebastian
          </div>

          {/* Character */}
          <Image
            className="character-float"
            src="/minecraft_grad.png"
            alt="Steve de Minecraft graduado"
            width={230}
            height={230}
            style={{ display: "block", margin: "0 auto 12px", objectFit: "contain", filter: "drop-shadow(0 8px 18px rgba(0,0,0,.18))" }}
            priority
          />

          {/* Date bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            fontSize: "clamp(14px, 3.5vw, 18px)",
            fontWeight: 700,
            letterSpacing: ".18em",
            color: "#1a1a1a",
            marginBottom: 8,
          }}>
            <span>JUNIO</span>
            <span style={{ display: "inline-block", width: 2, height: 22, background: "#1a1a1a", borderRadius: 2 }} />
            <span>27</span>
            <span style={{ display: "inline-block", width: 2, height: 22, background: "#1a1a1a", borderRadius: 2 }} />
            <span>5:00 PM</span>
          </div>

          {/* Address */}
          <p style={{ fontSize: "clamp(13px, 3vw, 15px)", fontWeight: 600, color: "#444", marginBottom: 22, letterSpacing: ".04em" }}>
            Vía antigua a Cumaral
          </p>

          {/* QR */}
          <a
            href="https://maps.app.goo.gl/SfwKCHoTN9bJqxSC8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block" }}
          >
            <div style={{
              display: "inline-block",
              background: "#fff",
              border: "3px solid #1a1a1a",
              borderRadius: 14,
              padding: 10,
              marginBottom: 6,
              cursor: "pointer",
            }}>
              <Image
                src="/qr_ubicacion.png"
                alt="QR Ubicación"
                width={120}
                height={120}
                style={{ display: "block", objectFit: "contain" }}
              />
            </div>
          </a>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".06em", color: "#333" }}>Ubicación</p>

        </div>
      </div>
    </>
  );
}
