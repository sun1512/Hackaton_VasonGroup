import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../components/MenuItems";
import { MenuIconType } from "../types/Types";


const menuItems: Array<{ id: string; label: string; icon: MenuIconType }> = [
  { id: "home", label: "Home", icon: "home" },
  { id: "vino", label: "Singolo vino", icon: "wine" },
  { id: "eventi", label: "Eventi", icon: "eventi" },
];

function EventiPage() {
  const navigate = useNavigate();
  const [participantName, setParticipantName] = useState("");
  const [challengeCode, setChallengeCode] = useState("");
  const [started, setStarted] = useState(false);

  const handleStartChallenge = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!participantName.trim() || !challengeCode.trim()) return;
    setStarted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfaf7] px-4 pb-40 pt-16 text-[#2d2424]">
      <div className="pointer-events-none absolute -left-20 top-12 h-60 w-60 rounded-full bg-[#f7d6e7] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute -right-16 top-28 h-72 w-72 rounded-full bg-[#dce8ff] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute bottom-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[#ffeec6] blur-3xl opacity-70" />

      <section className="relative z-10 mx-auto w-full max-w-5xl">
        <header className="text-center">
          <p className="text-[0.75rem] font-black uppercase tracking-[0.22em] text-[#8c2f66] md:text-sm">
            Eventi Vason Experience
          </p>
          <h1 className="mt-3 font-['Baloo_2',sans-serif] text-[clamp(2rem,5vw,3.4rem)] font-black leading-tight text-[#4f1f40]">
            Sfida Live in Cantina
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#6b5b64] md:text-base">
            Entra nella challenge con il tuo codice evento e prepara il tuo team:
            la degustazione sta per iniziare.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <article className="rounded-[2rem] border border-[rgba(155,90,129,0.25)] bg-white/90 p-7 shadow-[0_18px_34px_rgba(82,41,66,0.14)] backdrop-blur">
            <p className="inline-flex rounded-full bg-[rgba(140,47,102,0.12)] px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#8c2f66]">
              Accesso Challenge
            </p>
            <h2 className="mt-3 text-2xl font-black text-[#4f1f40]">
              Inserisci nome e codice
            </h2>
            <p className="mt-2 text-sm text-[#6d5d66]">
              Ti bastano pochi secondi: appena entri puoi iniziare la sfida
              dell'evento.
            </p>

            {!started ? (
              <form className="mt-6 grid gap-4" onSubmit={handleStartChallenge}>
                <label className="text-sm font-semibold text-[#5f4454]">
                  Nome partecipante
                  <input
                    type="text"
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                    placeholder="Es: Giulia Rossi"
                    className="mt-1.5 w-full rounded-xl border border-[#e5d6de] bg-white px-3.5 py-2.5 outline-none transition-colors focus:border-[#8c2f66]"
                    required
                  />
                </label>

                <label className="text-sm font-semibold text-[#5f4454]">
                  Codice sfida fornito
                  <input
                    type="text"
                    value={challengeCode}
                    onChange={(e) => setChallengeCode(e.target.value.toUpperCase())}
                    placeholder="Es: VASON-2026"
                    className="mt-1.5 w-full rounded-xl border border-[#e5d6de] bg-white px-3.5 py-2.5 tracking-wide outline-none transition-colors focus:border-[#8c2f66]"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="mt-1 cursor-pointer rounded-xl bg-[linear-gradient(135deg,#8c2f66_0%,#6d2152_100%)] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#fff5fb] shadow-[0_12px_20px_rgba(85,24,62,0.32)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Inizia la sfida
                </button>
              </form>
            ) : (
              <div className="mt-6 rounded-2xl border border-[#b7e6c9] bg-[#ecfdf3] p-4 text-[#186a3b]">
                <p className="text-sm font-bold">Accesso confermato ✅</p>
                <p className="mt-1 text-sm">
                  Grande {participantName}! Sei dentro con il codice {challengeCode}.
                  La tua sfida evento è pronta.
                </p>
              </div>
            )}
          </article>

          <aside className="rounded-[2rem] border border-[rgba(75,111,180,0.2)] bg-[linear-gradient(165deg,#f6f2ff_0%,#edf5ff_100%)] p-7 shadow-[0_16px_30px_rgba(56,74,116,0.14)]">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#4463a9]">
              Come funziona
            </p>
            <ul className="mt-4 space-y-4 text-sm text-[#3d4f77]">
              <li className="rounded-xl bg-white/70 p-3">
                1. Ricevi il codice sfida durante l'evento.
              </li>
              <li className="rounded-xl bg-white/70 p-3">
                2. Inserisci il tuo nome per entrare in classifica.
              </li>
              <li className="rounded-xl bg-white/70 p-3">
                3. Avvia la challenge e gioca insieme agli altri partecipanti.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <nav
        className="fixed bottom-[clamp(0.7rem,1.8vw,1rem)] left-1/2 z-20 grid w-[min(94vw,560px)] -translate-x-1/2 grid-cols-3 gap-[0.45rem] rounded-[1.25rem] border border-[rgba(255,255,255,0.92)] bg-[rgba(255,250,251,0.88)] p-2 [backdrop-filter:blur(10px)] [box-shadow:0_14px_30px_rgba(58,26,47,0.26)] max-[560px]:w-[min(96vw,430px)] max-[560px]:gap-[0.3rem] max-[560px]:p-[0.4rem]"
        aria-label="Menu principale"
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-[0.95rem] border-0 px-[0.35rem] py-2 font-bold transition-[transform,background-color,color] duration-200 ease-in-out hover:-translate-y-px max-[560px]:px-[0.2rem] max-[560px]:py-[0.45rem] ${item.id === "eventi" ? "bg-[linear-gradient(140deg,#8c2f66_0%,#6d2152_100%)] text-[#fff5fb] [box-shadow:0_7px_16px_rgba(85,24,62,0.35)]" : "bg-transparent text-[#5b4050] hover:bg-[rgba(215,169,191,0.3)]"}`}
            onClick={() => {
              if (item.id === "home") navigate("/");
              if (item.id === "vino") navigate("/vinificazione/bianca");
              if (item.id === "eventi") navigate("/eventi");
            }}
            aria-label={item.label}
          >
            <span className="inline-flex h-5.5 w-5.5" aria-hidden="true">
              <MenuIcon type={item.icon} />
            </span>
            <span className="text-[0.8rem] leading-none max-[560px]:text-[0.74rem]">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </main>
  );
}

export default EventiPage;
