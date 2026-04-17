import React, { useState, useEffect, useMemo } from "react";
import emailjs from "@emailjs/browser";
import MenuIcon from "../components/MenuItems";
import { useNavigate } from "react-router-dom";
import { MenuIconType } from "../types/Types";

function BiancaVinificazionePage() {
  // Dati arricchiti con "curiosità" per stimolare l'apprendimento
  const steps = [
    {
      id: 1,
      title: "Vigneto",
      img: "/Hackaton_VasonGroup/images/vigneto.jpeg",
      desc: "Tutto nasce in vigna, dove la qualità del vino si costruisce giorno dopo giorno. Le uve vengono selezionate con cura e monitorate per maturazione, grado zuccherino e acidità.",
      insight:
        "Sapevi che l'escursione termica tra giorno e notte in vigna è ciò che fissa i precursori aromatici nel acino?",
    },
    {
      id: 2,
      title: "Raccolta e Pressatura",
      img: "/Hackaton_VasonGroup/images/pressatura.jpeg",
      desc: "Durante la pressatura soffice, separiamo il mosto fiore dalle bucce per evitare l'estrazione di tannini amari, tipici dei rossi.",
      insight:
        "In questa fase il freddo è il miglior alleato: lavorare a basse temperature evita ossidazioni precoci.",
    },
    {
      id: 3,
      title: "Ammostamento",
      img: "/Hackaton_VasonGroup/images/ammostamento.png",
      desc: "Il mosto viene trasferito in vasche d'acciaio. Qui si aggiungono enzimi per liberare gli aromi intrappolati nelle pectine della polpa.",
      insight:
        "L'uso di gas inerti come l'azoto impedisce al mosto di 'imbrunire' a contatto con l'aria.",
    },
    {
      id: 4,
      title: "Flottazione",
      img: "/Hackaton_VasonGroup/images/flottazione.png",
      desc: "Un processo affascinante: bollicine di gas portano verso l'alto le impurità, lasciando il mosto sottostante limpido e pronto per fermentare.",
      insight:
        "È una tecnica più rapida della decantazione classica che utilizza azoto insuflato e agenti floculanti, salvaguardando la freschezza aromatica. ",
    },
    {
      id: 5,
      title: "Fermentazione",
      img: "/Hackaton_VasonGroup/images/fermentazione.png",
      desc: "I lieviti (Saccharomyces cerevisiae) banchettano con gli zuccheri producendo alcol, CO2 e calore.",
      insight:
        "Per i bianchi, manteniamo i 16-18°C. Se salissimo troppo, perderemmo i profumi di fiori e frutta fresca.",
    },
    {
      id: 6,
      title: "Chiarifica e Filtrazione",
      img: "/Hackaton_VasonGroup/images/chiarifica.jpeg",
      desc: "Il vino viene 'pulito'. La bentonite (un'argilla naturale) aiuta a rimuovere le proteine instabili che potrebbero rendere il vino torbido.",
      insight:
        "Oggi si usano proteine vegetali (pisello o patata) per rendere i vini adatti anche a chi ha allergie.",
    },
    {
      id: 7,
      title: "Stabilizzazione",
      img: "/Hackaton_VasonGroup/images/stabilizzazione.png",
      desc: "Portiamo il vino a temperature vicine allo zero per far precipitare i sali tartarici.",
      insight:
        "Per una stabilizzazione più efficace si possono usare agenti cristallizzanti che fisicamente aiutano a rimuovere i sali.",
    },
    {
      id: 8,
      title: "Imbottigliamento",
      img: "/Hackaton_VasonGroup/images/imbottigliamento.png",
      desc: "Il sigillo finale. Il vino viene protetto da una piccolissima dose di solfiti e confezionato in vetro.",
      insight:
        "Il tappo non è solo una chiusura, ma decide quanto e come il vino 'respirerà' nel tempo.",
    },
  ];
const quizData = [
  {
    id: 1,
    phase: "🍇 Vigneto",
    question:
      "Quale fattore in vigna aiuta a fissare i precursori aromatici nell'acino?",
    intro: "La qualità del vino nasce già qui.",
    options: [
      "L'irrigazione abbondante",
      "L'escursione termica giorno-notte",
      "La quantità di vento",
    ],
    correct: 1,
    feedback:
      "Esatto! L'escursione termica tra giorno e notte è fondamentale per sviluppare gli aromi.",
  },
  {
    id: 2,
    phase: "🧃 Pressatura",
    question:
      "Perché durante la pressatura si separa il mosto fiore dalle bucce?",
    intro: "Un passaggio chiave per i vini bianchi.",
    options: [
      "Per aumentare il colore",
      "Per evitare tannini amari",
      "Per velocizzare la fermentazione",
    ],
    correct: 1,
    feedback:
      "Giusto! Separare subito il mosto evita l'estrazione di tannini indesiderati.",
  },
  {
    id: 3,
    phase: "🧪 Ammostamento",
    question:
      "Qual è lo scopo degli enzimi aggiunti durante l'ammostamento?",
    intro: "Qui iniziano a liberarsi i profumi.",
    options: [
      "Aumentare l'alcol",
      "Liberare gli aromi dalle pectine",
      "Raffreddare il mosto",
    ],
    correct: 1,
    feedback:
      "Corretto! Gli enzimi aiutano a liberare gli aromi intrappolati nella polpa.",
  },
  {
    id: 4,
    phase: "🫧 Flottazione",
    question:
      "Come funziona il processo di flottazione del mosto?",
    intro: "Una tecnica moderna e veloce.",
    options: [
      "Le impurità vengono filtrate con carta",
      "Le impurità salgono grazie a bolle di gas",
      "Il mosto viene congelato e scongelato",
    ],
    correct: 1,
    feedback:
      "Esatto! Le bollicine trascinano le particelle verso l’alto lasciando il mosto limpido.",
  },
  {
    id: 5,
    phase: "🍷 Fermentazione",
    question:
      "Cosa producono i lieviti durante la fermentazione alcolica?",
    intro: "Il cuore della trasformazione.",
    options: [
      "Solo alcol",
      "Alcol, CO2 e calore",
      "Zuccheri e ossigeno",
    ],
    correct: 1,
    feedback:
      "Perfetto! I lieviti trasformano gli zuccheri in alcol, anidride carbonica e calore.",
  },
  {
    id: 6,
    phase: "🧼 Chiarifica",
    question:
      "Qual è il ruolo della bentonite nella chiarifica del vino?",
    intro: "Il vino diventa limpido e stabile.",
    options: [
      "Aumentare il grado alcolico",
      "Rimuovere proteine instabili",
      "Aggiungere aromi",
    ],
    correct: 1,
    feedback:
      "Esatto! La bentonite elimina le proteine che potrebbero causare torbidità.",
  },
  {
    id: 7,
    phase: "❄️ Stabilizzazione",
    question:
      "Perché il vino viene portato a temperature vicine allo zero?",
    intro: "Un passaggio spesso invisibile ma fondamentale.",
    options: [
      "Per aumentare il colore",
      "Per far precipitare i sali tartarici",
      "Per accelerare la fermentazione",
    ],
    correct: 1,
    feedback:
      "Corretto! Il freddo aiuta a eliminare i cristalli di tartaro dal vino.",
  },
  {
    id: 8,
    phase: "🍾 Imbottigliamento",
    question:
      "Qual è una funzione importante del tappo nella bottiglia?",
    intro: "L’ultimo step prima di arrivare al consumatore.",
    options: [
      "Decorare la bottiglia",
      "Controllare il passaggio di ossigeno nel tempo",
      "Aumentare il contenuto di alcol",
    ],
    correct: 1,
    feedback:
      "Giusto! Il tappo regola quanto il vino può 'respirare' durante l’invecchiamento.",
  },
];

  const menuItems: Array<{ id: string; label: string; icon: MenuIconType }> = [
    { id: "home", label: "Home", icon: "home" },
    { id: "vino", label: "Singolo vino", icon: "wine" },
    { id: "eventi", label: "Eventi", icon: "eventi" },
  ];

  const [activeStep, setActiveStep] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [firstAttemptPerfect, setFirstAttemptPerfect] = useState<
    boolean | null
  >(null);
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [couponSubmitted, setCouponSubmitted] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [isSendingCoupon, setIsSendingCoupon] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [sentToEmail, setSentToEmail] = useState("");
  const [contactData, setContactData] = useState({ email: "", phone: "" });
  const navigate = useNavigate();

  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const currentQuestion = quizData[currentQuestionIndex];
  const answeredCount = Object.keys(userAnswers).length;

  const correctAnswers = useMemo(
    () =>
      quizData.reduce((score, q) => {
        const answer = userAnswers[q.id];
        return score + (answer === q.correct ? 1 : 0);
      }, 0),
    [quizData, userAnswers],
  );

  const isPerfectScore = quizCompleted && correctAnswers === quizData.length;
  const canRedeemCoupon = isPerfectScore && firstAttemptPerfect === true;
  const blockedByFirstAttemptRule =
    isPerfectScore && firstAttemptPerfect === false;

  const handleSelect = (qId: number, optionIdx: number): void => {
    if (userAnswers[qId] !== undefined || isTransitioning || quizCompleted)
      return;
    const nextAnswers = { ...userAnswers, [qId]: optionIdx };
    setUserAnswers(nextAnswers);
    setIsTransitioning(true);

    setTimeout(() => {
      const isLastQuestion = currentQuestionIndex === quizData.length - 1;
      if (isLastQuestion) {
        const finalCorrectAnswers = quizData.reduce((score, q) => {
          const answer = nextAnswers[q.id];
          return score + (answer === q.correct ? 1 : 0);
        }, 0);

        if (firstAttemptPerfect === null) {
          setFirstAttemptPerfect(finalCorrectAnswers === quizData.length);
        }

        setQuizCompleted(true);
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
      setIsTransitioning(false);
    }, 650);
  };

  const handleRestartQuiz = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setIsTransitioning(false);
    setShowCouponForm(false);
    setCouponSubmitted(false);
    setCouponCode("");
    setCouponError("");
    setSentToEmail("");
    setIsSendingCoupon(false);
    setContactData({ email: "", phone: "" });
  };

  const buildCouponCode = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return `CuponDemo-${randomNumber}`;
  };

  const handleCouponSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactData.email || !contactData.phone) return;

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setCouponError(
        "Invio email non configurato: mancano le variabili EmailJS nel progetto.",
      );
      return;
    }

    setCouponError("");
    setIsSendingCoupon(true);
    const generatedCoupon = buildCouponCode();

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          to_email: contactData.email,
          phone_number: contactData.phone,
          coupon_code: generatedCoupon,
          message: `Ecco il tuo cupon ${generatedCoupon}`,
        },
        {
          publicKey: emailPublicKey,
        },
      );

      setCouponCode(generatedCoupon);
      setSentToEmail(contactData.email);
      setCouponSubmitted(true);
    } catch {
      setCouponError(
        "Invio non riuscito. Controlla i parametri EmailJS e riprova.",
      );
    } finally {
      setIsSendingCoupon(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    const observerOptions = { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveStep(Number(entry.target.getAttribute("data-step-id")));
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".step-container")
      .forEach((el) => observer.observe(el));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#2d2424] font-sans selection:bg-yellow-200">
      {/* PROGRESS BAR SUPERIORE */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <header className="py-20 px-4 text-center">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
          Winemaking Experience
        </span>
        <h1 className="text-5xl font-black mt-2 mb-6 text-[#1a1a1a]">
          Dalla Vite al Calice
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg">
          Scopri la scienza e l'arte che trasformano un grappolo d'uva in un
          vino bianco perfetto. Scorri per esplorare ogni fase.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-4 pb-40">
        <div className="relative">
          {/* LINEA TIMELINE DINAMICA */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-32">
            {steps.map((step, index) => {
              const isFocused = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  data-step-id={step.id}
                  className="step-container relative"
                >
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* IMMAGINE CON OVERLAY CURIOSITÀ */}
                    <div className="w-full md:w-1/2 group relative">
                      <div
                        className={`overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 ${isFocused ? "scale-100" : "scale-90 opacity-40"}`}
                      >
                        <img
                          src={step.img}
                          alt={step.title}
                          className="w-full h-100 object-cover"
                        />
                      </div>
                      {/* CARD CURIOSITÀ (ENOLOGY INSIGHT) */}
                      {isFocused && (
                        <div className="absolute -bottom-6 right-4 md:-right-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 shadow-lg max-w-62.5 animate-bounce-subtle z-20">
                          <p className="text-xs font-bold text-yellow-700 uppercase mb-1">
                            💡 Curiosità:
                          </p>
                          <p className="text-sm text-yellow-900 italic">
                            {step.insight}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CONTENUTO TESTUALE */}
                    <div
                      className={`w-full md:w-1/2 px-8 transition-all duration-500 ${isFocused ? "opacity-100 translate-x-0" : "opacity-20 translate-y-10"}`}
                    >
                      <span className="text-6xl font-black text-blue-100 block mb-4">
                        0{step.id}
                      </span>
                      <h2 className="text-3xl font-bold mb-4 text-blue-900">
                        {step.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* PUNTO CENTRALE TIMELINE */}
                  <div
                    className={`absolute left-4 md:left-1/2 top-10 md:top-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white z-10 transition-all duration-500 shadow-xl ${isFocused ? "bg-blue-600 scale-125" : "bg-gray-300"}`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- QUIZ SECTION RI-STILIZZATA --- */}
        <section className="mt-60 bg-blue-900 rounded-[3rem] py-12 px-6 text-white shadow-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -translate-y-32 translate-x-32 blur-3xl opacity-50"></div>

          <div className="relative z-10 text-center mb-16">
            <h3 className="text-4xl font-black">
              🍷 Che tipo di amante del vino sei?
            </h3>
            <p className="text-blue-200 mt-4 text-lg">
              {quizData.length} domande in un sorso 😉
            </p>
            <p className="text-blue-100/90 mt-2 text-sm md:text-base">
              Rispondi e prova a sbloccare il premio finale 🎁
            </p>
          </div>

          {!quizCompleted && currentQuestion && (
            <div className="relative z-10 max-w-3xl mx-auto text-black">
              <div className="flex items-center justify-between text-blue-100 text-sm md:text-base mb-4">
                <span>{currentQuestion.phase}</span>
                <span>
                  Domanda {currentQuestionIndex + 1} / {quizData.length}
                </span>
              </div>

              <div className="w-full h-2 rounded-full bg-blue-800/70 mb-8 overflow-hidden">
                <div
                  className="h-full bg-[linear-gradient(90deg,#fef08a_0%,#fdba74_100%)] transition-all duration-500"
                  style={{
                    width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%`,
                  }}
                />
              </div>

              <div
                key={currentQuestion.id}
                className={`bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all duration-500 ${isTransitioning ? "opacity-70 scale-[0.98]" : "opacity-100 scale-100"}`}
              >
                <p className="text-sm uppercase tracking-[0.15em] text-blue-500 font-semibold mb-2">
                  Mini percorso enologico
                </p>
                <p className="text-gray-500 mb-5">{currentQuestion.intro}</p>
                <p className="font-bold text-xl text-gray-800 mb-6">
                  {currentQuestion.question}
                </p>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, idx) => {
                    const isAnswered =
                      userAnswers[currentQuestion.id] !== undefined;
                    const isCorrect = idx === currentQuestion.correct;
                    const isSelected = userAnswers[currentQuestion.id] === idx;

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleSelect(currentQuestion.id, idx)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all border hover:cursor-pointer ${
                          !isAnswered
                            ? "hover:bg-blue-50 border-gray-200"
                            : isCorrect
                              ? "bg-green-100 border-green-500 text-green-800"
                              : isSelected
                                ? "bg-red-100 border-red-500 text-red-800"
                                : "bg-gray-50 border-transparent opacity-50"
                        }`}
                      >
                        {option}
                        {isAnswered && isCorrect && (
                          <span className="float-right">✓</span>
                        )}
                        {isAnswered && isSelected && !isCorrect && (
                          <span className="float-right">✗</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {userAnswers[currentQuestion.id] !== undefined && (
                  <p className="mt-4 text-sm text-blue-700 bg-blue-50 p-3 rounded-lg animate-pulse">
                    {currentQuestion.feedback}
                  </p>
                )}

                <p className="mt-5 text-xs text-gray-400">
                  Risposte date: {answeredCount}/{quizData.length}
                </p>
              </div>
            </div>
          )}

          {quizCompleted && (
            <div className="relative z-10 max-w-2xl mx-auto bg-white text-black rounded-3xl p-8 text-center">
              <p className="text-sm uppercase tracking-[0.15em] text-blue-500 font-semibold">
                Quiz completato
              </p>
              <h4 className="text-3xl font-black mt-2 text-gray-900">
                Hai fatto {correctAnswers} su {quizData.length}
              </h4>

              {canRedeemCoupon ? (
                <p className="text-green-700 mt-4 font-medium">
                  Bravissimo hai sbloccato un cupon da usare in uno dei nostri
                  punti vendita{" "}
                </p>
              ) : blockedByFirstAttemptRule ? (
                <p className="text-amber-700 mt-4 font-medium">
                  Complimenti per il punteggio pieno! Per riscattare il coupon
                  serviva fare tutto giusto al primo tentativo.
                </p>
              ) : (
                <p className="text-gray-600 mt-4">
                  Ottimo risultato purtroppo però non basta per ottenere il
                  cupon.
                </p>
              )}

              {canRedeemCoupon && !showCouponForm && (
                <button
                  type="button"
                  onClick={() => setShowCouponForm(true)}
                  className="mt-6 cursor-pointer rounded-xl bg-[linear-gradient(135deg,#8c2f66_0%,#6d2152_100%)] px-6 py-3 font-bold text-[#fff5fb] [box-shadow:0_10px_22px_rgba(85,24,62,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Riscatta il tuo cupon
                </button>
              )}

              {canRedeemCoupon && showCouponForm && !couponSubmitted && (
                <form
                  onSubmit={handleCouponSubmit}
                  className="mt-6 grid gap-3 text-left"
                >
                  <label className="text-sm font-medium text-gray-700">
                    Email
                    <input
                      type="email"
                      value={contactData.email}
                      onChange={(e) =>
                        setContactData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="nome@email.com"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                      required
                    />
                  </label>

                  <label className="text-sm font-medium text-gray-700">
                    Numero di telefono
                    <input
                      type="tel"
                      value={contactData.phone}
                      onChange={(e) =>
                        setContactData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="+39 333 1234567"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSendingCoupon}
                    className="mt-2 rounded-xl bg-blue-900 px-5 py-2.5 text-white font-semibold cursor-pointer hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSendingCoupon ? "Invio in corso..." : "Invia dati"}
                  </button>

                  {couponError && (
                    <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                      {couponError}
                    </p>
                  )}
                </form>
              )}

              {couponSubmitted && (
                <p className="mt-6 rounded-xl bg-green-50 border border-green-300 p-4 text-green-800">
                  Perfetto! Ti abbiamo inviato via mail il tuo coupon{" "}
                  <strong>{couponCode}</strong> all'indirizzo{" "}
                  <strong>{sentToEmail}</strong>.
                </p>
              )}

              <button
                type="button"
                onClick={handleRestartQuiz}
                className="mt-6 cursor-pointer rounded-xl border border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Riprova il quiz
              </button>
            </div>
          )}
        </section>
      </div>

      {/* NAVIGAZIONE MENU */}
      <nav
        className="fixed bottom-[clamp(0.7rem,1.8vw,1rem)] left-1/2 z-20 grid w-[min(94vw,560px)] -translate-x-1/2 grid-cols-3 gap-[0.45rem] rounded-[1.25rem] border border-[rgba(255,255,255,0.92)] bg-[rgba(255,250,251,0.88)] p-2 [backdrop-filter:blur(10px)] [box-shadow:0_14px_30px_rgba(58,26,47,0.26)] max-[560px]:w-[min(96vw,430px)] max-[560px]:gap-[0.3rem] max-[560px]:p-[0.4rem]"
        aria-label="Menu principale"
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-[0.95rem] border-0 px-[0.35rem] py-2 font-bold transition-[transform,background-color,color] duration-200 ease-in-out hover:-translate-y-px max-[560px]:px-[0.2rem] max-[560px]:py-[0.45rem] ${item.id === "vino" ? "bg-[linear-gradient(140deg,#8c2f66_0%,#6d2152_100%)] text-[#fff5fb] [box-shadow:0_7px_16px_rgba(85,24,62,0.35)]" : "bg-transparent text-[#5b4050] hover:bg-[rgba(215,169,191,0.3)]"}`}
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
    </div>
  );
}

export default BiancaVinificazionePage;
