// import React, { useState, useEffect } from 'react';
// import MenuIcon from '../components/MenuItems';
// import { useNavigate } from 'react-router-dom';
// import { MenuIconType } from '../types/Types';

// function BiancaVinificazionePage() {
// 	const steps = [
// 	{
// 		id: 1,
// 		title: "Vigneto",
// 		img: "/Hackaton_VasonGroup/images/vigneto.jpeg",
// 		desc: "Tutto nasce in vigna, dove la qualità del vino si costruisce giorno dopo giorno. Le uve vengono selezionate con cura e monitorate costantemente per valutarne maturazione, grado zuccherino e acidità. Tecniche agronomiche sostenibili e controlli mirati permettono di ottenere grappoli sani ed equilibrati, pronti per dare origine a un vino di qualità."
// 	},
// 	{
// 		id: 2,
// 		title: "Raccolta e Pressatura",
// 		img: "/Hackaton_VasonGroup/images/pressatura.jpeg",
// 		desc: "La vendemmia avviene nel momento ideale di maturazione, spesso nelle ore più fresche per preservare aromi e freschezza. Durante la pressatura, le uve vengono lavorate delicatamente per estrarre il mosto senza rompere eccessivamente le bucce, evitando così l’estrazione di sostanze indesiderate. In questa fase si possono utilizzare antiossidanti come l’anidride solforosa per proteggere il mosto dall’ossidazione."
// 	},
// 	{
// 		id: 3,
// 		title: "Ammostamento",
// 		img: "/Hackaton_VasonGroup/images/ammostamento.jpeg",
// 		desc: "Il mosto ottenuto viene trasferito nei serbatoi di fermentazione. Qui si controllano parametri fondamentali come temperatura e ossigenazione. Possono essere aggiunti enzimi pectolitici per migliorare l’estrazione degli aromi e facilitare le fasi successive di chiarifica."
// 	},
// 	{
// 		id: 4,
// 		title: "Flottazione",
// 		img: "/Hackaton_VasonGroup/images/flottazione.png",
// 		desc: "Questa fase consente di chiarificare il mosto eliminando le particelle solide in sospensione. Attraverso l’immissione di gas (come azoto), le impurità risalgono in superficie formando una schiuma che viene rimossa. Spesso si utilizzano coadiuvanti come gelatine o proteine vegetali per aggregare meglio le particelle."
// 	},
// 	{
// 		id: 5,
// 		title: "Fermentazione",
// 		img: "/Hackaton_VasonGroup/images/fermentazione.png",
// 		desc: "È il cuore del processo: i lieviti trasformano gli zuccheri in alcol e aromi. La temperatura viene controllata con precisione per esaltare le caratteristiche del vino. Possono essere impiegati lieviti selezionati per guidare il profilo aromatico, insieme a nutrienti per garantire una fermentazione regolare e completa."
// 	},
// 	{
// 		id: 6,
// 		title: "Chiarifica/Filtrazione",
// 		img: "/Hackaton_VasonGroup/images/chiarifica.jpeg",
// 		desc: "Il vino viene reso limpido eliminando residui solidi e particelle in sospensione. Si utilizzano agenti chiarificanti come bentonite, caseina o proteine vegetali, che legano le impurità facilitandone la rimozione. La filtrazione finale garantisce stabilità e brillantezza al prodotto."
// 	},
// 	{
// 		id: 7,
// 		title: "Stabilizzazione",
// 		img: "/Hackaton_VasonGroup/images/stabilizzazione.png",
// 		desc: "Per evitare la formazione di cristalli o alterazioni nel tempo, il vino viene sottoposto a trattamenti di stabilizzazione, spesso a freddo. Questo processo previene la precipitazione dei sali tartarici in bottiglia. Possono essere utilizzati stabilizzanti specifici per mantenere la limpidezza e la qualità nel tempo."
// 	},
// 	{
// 		id: 8,
// 		title: "Imbottigliamento",
// 		img: "/Hackaton_VasonGroup/images/imbottigliamento.png",
// 		desc: "Ultimo passaggio prima della distribuzione: il vino viene imbottigliato in condizioni controllate per evitare contaminazioni e ossidazioni. In questa fase può essere aggiunta una minima quantità di solfiti per garantire la conservazione. Il prodotto è ora pronto per arrivare al consumatore mantenendo intatte le sue caratteristiche."
// 	}
// 	];

// 	const quizData = [
// 		{ id: 1, question: "Tra questi chiarificanti, chi NON è un allergene?", options: ["Albumina", "Caseina", "Proteine vegetali"], correct: 2, feedback: "Le proteine vegetali sono alternative 'allergen-free'." },
// 		{ id: 2, question: "Cosa si utilizza per far partire la fermentazione in modo controllato?", options: ["Lieviti selezionati", "Enzimi citolici", "Anidride carbonica"], correct: 0, feedback: "I lieviti selezionati permettono di guidare la fermentazione." },
// 		{ id: 3, question: "In quale periodo arriva solitamente l'uva in cantina?", options: ["Aprile-Giugno", "Agosto-Ottobre", "Dicembre-Febbraio"], correct: 1, feedback: "La vendemmia in Italia avviene tra fine estate e autunno." },
// 		{ id: 4, question: "Pensi che in un vino bianco sia importante la temperatura di fermentazione?", options: ["Sì", "No"], correct: 0, feedback: "Sì! Le basse temperature preservano i profumi delicati." }
// 	];

// 	const menuItems: Array<{ id: string; label: string; icon: MenuIconType }> = [
// 		{ id: "home", label: "Home", icon: "home" },
// 		{ id: "vino", label: "Singolo vino", icon: "wine" },
// 		{ id: "quiz", label: "Quiz", icon: "quiz" },
// 	];

// 	const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
// 	const [activeStep, setActiveStep] = useState<number | null>(null);
// 	const navigate = useNavigate();


// 	// Gestione dell'osservatore per l'effetto focus
// 	useEffect(() => {
// 		const observerOptions = {
// 			root: null,
// 			rootMargin: '-50% 0px -50% 0px', // Definisce una "striscia" centrale di attivazione
// 			threshold: 0
// 		};

// 		const observerCallback = (entries: IntersectionObserverEntry[]) => {
// 			entries.forEach((entry) => {
// 				if (entry.isIntersecting) {
// 					const id = Number(entry.target.getAttribute('data-step-id'));
// 					setActiveStep(id);
// 				}
// 			});
// 		};

// 		const observer = new IntersectionObserver(observerCallback, observerOptions);
// 		const elements = document.querySelectorAll('.step-container');
// 		elements.forEach((el) => observer.observe(el));

// 		return () => observer.disconnect();
// 	}, []);

// 	const handleSelect = (qId: number, optionIdx: number): void => {
// 		if (userAnswers[qId] !== undefined) return;
// 		setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
// 	};

// 	return (
// 		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
// 			<div className="max-w-5xl mx-auto">
// 				<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-20">
// 					Processo di Vinificazione in Bianco
// 				</h2>

// 				{/* --- TIMELINE SECTION --- */}
// 				<div className="relative mb-32">
// 					<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
// 					<div className="space-y-24">
// 						{steps.map((step, index) => {
// 							const isFocused = activeStep === step.id;
							
// 							return (
// 								<div 
// 									key={step.id} 
// 									data-step-id={step.id}
// 									className="step-container relative flex items-center justify-between transition-opacity duration-500"
// 									style={{ opacity: isFocused ? 1 : 0.4 }} // Effetto opacità per chi non è in focus
// 								>
// 									{/* --- LATO DESKTOP --- */}
// 									<div className={`hidden md:flex w-5/12 ${index % 2 === 0 ? 'justify-end text-right pr-16' : 'order-last justify-start text-left pl-16'}`}>
// 										<div className={`max-w-sm transition-transform duration-500 ${isFocused ? 'scale-105' : 'scale-100'}`}>
// 											{step.img && (
// 												<img src={step.img} alt={step.title} className="rounded-lg shadow-md mb-4 inline-block" />
// 											)}
// 											<p className="text-gray-600 leading-relaxed italic">"{step.desc}"</p>
// 										</div>
// 									</div>

// 									{/* --- CENTRO (La Palla) --- */}
// 									<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center">
// 										<div className={`absolute transition-all duration-500 ${isFocused ? '-top-20': '-top-10'}`}>
// 											<h3 className={`text-xl font-bold uppercase tracking-wider transition-colors duration-500 bg-gray-50 px-2 ${isFocused ? 'text-blue-600 scale-110' : 'text-blue-900'}`}>
// 												{step.title}
// 											</h3>
// 										</div>
										
// 										{/* La Bolla con scale dinamico */}
// 										<div className={`z-10 w-12 h-12 border-4 border-white rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ease-out ${
// 											isFocused 
// 											? 'bg-blue-700 scale-[1.6] shadow-blue-300' 
// 											: 'bg-blue-600 scale-100'
// 										}`}>
// 											<span className="text-white text-sm font-bold">{step.id}</span>
// 										</div>
// 									</div>

// 									{/* --- LATO MOBILE --- */}
// 									<div className="ml-16 md:hidden w-full">
// 										<div className={`bg-white p-5 rounded-xl shadow-md border transition-all duration-500 ${isFocused ? 'border-blue-400 ring-2 ring-blue-100' : 'border-gray-100'}`}>
// 											<h3 className="font-bold text-blue-600 mb-2">{step.title}</h3>
// 											<p className="text-sm text-gray-500">{step.desc}</p>
// 										</div>
// 									</div>

// 									<div className="hidden md:block w-5/12"></div>
// 								</div>
// 							);
// 						})}
// 					</div>
// 				</div>

// 				{/* --- QUIZ SECTION --- */}
// 				<div className="mt-40 mb-12 border-t border-gray-200 pt-20">
// 					<h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
// 						Metti alla prova le tue conoscenze! 🍷
// 					</h3>
// 					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// 						{quizData.map((q) => (
// 							<div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
// 								<p className="font-bold text-gray-800 mb-4">{q.question}</p>
// 								<div className="space-y-2">
// 								{q.options.map((option, idx) => {
// 									const isAnswered = userAnswers[q.id] !== undefined;
// 									const isCorrect = idx === q.correct;
// 									const isSelected = userAnswers[q.id] === idx;

// 									return (
// 									<button
// 										key={idx}
// 										disabled={isAnswered}
// 										onClick={() => handleSelect(q.id, idx)}
// 										className={`w-full text-left px-4 py-2 rounded-lg transition-all border hover:cursor-pointer ${
// 										!isAnswered 
// 											? "hover:bg-blue-50 border-gray-200" 
// 											: isCorrect 
// 											? "bg-green-100 border-green-500 text-green-800" 
// 											: isSelected 
// 												? "bg-red-100 border-red-500 text-red-800" 
// 												: "bg-gray-50 border-transparent opacity-50"
// 										}`}
// 									>
// 										{option}
// 										{isAnswered && isCorrect && <span className="float-right">✓</span>}
// 										{isAnswered && isSelected && !isCorrect && <span className="float-right">✗</span>}
// 									</button>
// 									);
// 								})}
// 								</div>
// 								{userAnswers[q.id] !== undefined && (
// 								<p className="mt-4 text-sm text-blue-700 bg-blue-50 p-3 rounded-lg animate-pulse">
// 									{q.feedback}
// 								</p>
// 								)}
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 			<nav
// 				className="fixed bottom-[clamp(0.7rem,1.8vw,1rem)] left-1/2 z-20 grid w-[min(94vw,560px)] -translate-x-1/2 grid-cols-3 gap-[0.45rem] rounded-[1.25rem] border border-[rgba(255,255,255,0.92)] bg-[rgba(255,250,251,0.88)] p-2 [backdrop-filter:blur(10px)] [box-shadow:0_14px_30px_rgba(58,26,47,0.26)] max-[560px]:w-[min(96vw,430px)] max-[560px]:gap-[0.3rem] max-[560px]:p-[0.4rem]"
// 				aria-label="Menu principale"
// 			>
// 				{menuItems.map((item) => (
// 				<button
// 					key={item.id}
// 					type="button"
// 					className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-[0.95rem] border-0 px-[0.35rem] py-2 font-bold transition-[transform,background-color,color] duration-200 ease-in-out hover:-translate-y-px max-[560px]:px-[0.2rem] max-[560px]:py-[0.45rem] ${item.id === 'vino' ? "bg-[linear-gradient(140deg,#8c2f66_0%,#6d2152_100%)] text-[#fff5fb] [box-shadow:0_7px_16px_rgba(85,24,62,0.35)]" : "bg-transparent text-[#5b4050] hover:bg-[rgba(215,169,191,0.3)]"}`}
// 					onClick={
// 						() => {
// 							if (item.id === 'home') navigate("/");
// 							if (item.id === 'vino') navigate("vinificazione/bianca");
// 						}
// 					}
// 					aria-label={item.label}
// 				>
// 					<span className="inline-flex h-5.5 w-5.5" aria-hidden="true">
// 						<MenuIcon type={item.icon} />
// 					</span>
// 					<span className="text-[0.8rem] leading-none max-[560px]:text-[0.74rem]">
// 						{item.label}
// 					</span>
// 				</button>
// 				))}
// 			</nav>
// 		</div>
//     );
// }

// export default BiancaVinificazionePage;












import React, { useState, useEffect } from 'react';
import MenuIcon from '../components/MenuItems';
import { useNavigate } from 'react-router-dom';
import { MenuIconType } from '../types/Types';

function BiancaVinificazionePage() {
    // Dati arricchiti con "curiosità" per stimolare l'apprendimento
    const steps = [
        {
            id: 1,
            title: "Vigneto",
            img: "/Hackaton_VasonGroup/images/vigneto.jpeg",
            desc: "Tutto nasce in vigna, dove la qualità del vino si costruisce giorno dopo giorno. Le uve vengono selezionate con cura e monitorate per maturazione, grado zuccherino e acidità.",
            insight: "Sapevi che l'escursione termica tra giorno e notte in vigna è ciò che fissa i precursori aromatici nel acino?"
        },
        {
            id: 2,
            title: "Raccolta e Pressatura",
            img: "/Hackaton_VasonGroup/images/pressatura.jpeg",
            desc: "Durante la pressatura soffice, separiamo il mosto fiore dalle bucce per evitare l'estrazione di tannini amari, tipici dei rossi.",
            insight: "In questa fase il freddo è il miglior alleato: lavorare a basse temperature evita ossidazioni precoci."
        },
        {
            id: 3,
            title: "Ammostamento",
            img: "/Hackaton_VasonGroup/images/ammostamento.jpeg",
            desc: "Il mosto viene trasferito in vasche d'acciaio. Qui si aggiungono enzimi per liberare gli aromi intrappolati nelle pectine della polpa.",
            insight: "L'uso di gas inerti come l'azoto impedisce al mosto di 'imbrunire' a contatto con l'aria."
        },
        {
            id: 4,
            title: "Flottazione",
            img: "/Hackaton_VasonGroup/images/flottazione.png",
            desc: "Un processo affascinante: bollicine di gas portano verso l'alto le impurità, lasciando il mosto sottostante limpido e pronto per fermentare.",
            insight: "È una tecnica molto più rapida della decantazione classica, salvaguardando la freschezza aromatica."
        },
        {
            id: 5,
            title: "Fermentazione",
            img: "/Hackaton_VasonGroup/images/fermentazione.png",
            desc: "I lieviti (Saccharomyces cerevisiae) banchettano con gli zuccheri producendo alcol, CO2 e calore.",
            insight: "Per i bianchi, manteniamo i 16-18°C. Se salissimo troppo, perderemmo i profumi di fiori e frutta fresca."
        },
        {
            id: 6,
            title: "Chiarifica e Filtrazione",
            img: "/Hackaton_VasonGroup/images/chiarifica.jpeg",
            desc: "Il vino viene 'pulito'. La bentonite (un'argilla naturale) aiuta a rimuovere le proteine instabili che potrebbero rendere il vino torbido.",
            insight: "Oggi si usano proteine vegetali (pisello o patata) per rendere i vini adatti anche ai consumatori vegani."
        },
        {
            id: 7,
            title: "Stabilizzazione",
            img: "/Hackaton_VasonGroup/images/stabilizzazione.png",
            desc: "Portiamo il vino a temperature vicine allo zero per far precipitare i sali tartarici.",
            insight: "Hai mai trovato dei 'cristallini' sul fondo di una bottiglia? È tartrato, innocuo, ma indice di una stabilizzazione naturale."
        },
        {
            id: 8,
            title: "Imbottigliamento",
            img: "/Hackaton_VasonGroup/images/imbottigliamento.png",
            desc: "Il sigillo finale. Il vino viene protetto da una piccolissima dose di solfiti e confezionato in vetro.",
            insight: "Il tappo non è solo una chiusura, ma decide quanto e come il vino 'respirerà' nel tempo."
        }
    ];

    const quizData = [
        { id: 1, question: "Quale minerale naturale si usa per chiarificare e rimuovere le proteine?", options: ["Silice", "Bentonite", "Quarzo"], correct: 1, feedback: "La Bentonite è un'argilla fondamentale per la stabilità proteica dei bianchi." },
        { id: 2, question: "Cosa succede se la temperatura di fermentazione è troppo alta?", options: ["Si perdono gli aromi fini", "Il vino diventa più dolce", "Aumenta l'acidità"], correct: 0, feedback: "Il calore eccessivo fa evaporare gli esteri aromatici delicati." },
        { id: 3, question: "A cosa serve la flottazione?", options: ["A far invecchiare il vino", "A separare le bucce", "A illimpidire il mosto"], correct: 2, feedback: "La flottazione rimuove le fecce solide tramite risalita di gas." },
		{ id: 4, question: "Tra questi chiarificanti, chi NON è un allergene?", options: ["Albumina", "Caseina", "Proteine vegetali"], correct: 2, feedback: "Le proteine vegetali sono alternative 'allergen-free'." },
		{ id: 5, question: "Cosa si utilizza per far partire la fermentazione in modo controllato?", options: ["Lieviti selezionati", "Enzimi citolici", "Anidride carbonica"], correct: 0, feedback: "I lieviti selezionati permettono di guidare la fermentazione." },
		{ id: 6, question: "In quale periodo arriva solitamente l'uva in cantina?", options: ["Aprile-Giugno", "Agosto-Ottobre", "Dicembre-Febbraio"], correct: 1, feedback: "La vendemmia in Italia avviene tra fine estate e autunno." },
		{ id: 7, question: "Pensi che in un vino bianco sia importante la temperatura di fermentazione?", options: ["Sì", "No"], correct: 0, feedback: "Sì! Le basse temperature preservano i profumi delicati." }
    ];

	const menuItems: Array<{ id: string; label: string; icon: MenuIconType }> = [
		{ id: "home", label: "Home", icon: "home" },
		{ id: "vino", label: "Singolo vino", icon: "wine" },
		{ id: "quiz", label: "Quiz", icon: "quiz" },
	];

    const [activeStep, setActiveStep] = useState<number>(1);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
    const navigate = useNavigate();

	const handleSelect = (qId: number, optionIdx: number): void => {
		if (userAnswers[qId] !== undefined) return;
		setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
	};

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setScrollProgress((currentScroll / totalScroll) * 100);
        };

        const observerOptions = { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveStep(Number(entry.target.getAttribute('data-step-id')));
                }
            });
        }, observerOptions);

        document.querySelectorAll('.step-container').forEach(el => observer.observe(el));
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#fcfaf7] text-[#2d2424] font-sans selection:bg-yellow-200">
            {/* PROGRESS BAR SUPERIORE */}
            <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-200 z-50">
                <div className="h-full bg-blue-500 transition-all duration-150" style={{ width: `${scrollProgress}%` }}></div>
            </div>

            <header className="py-20 px-4 text-center">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Winemaking Experience</span>
                <h1 className="text-5xl font-black mt-2 mb-6 text-[#1a1a1a]">Dalla Vite al Calice</h1>
                <p className="max-w-2xl mx-auto text-gray-500 text-lg">
                    Scopri la scienza e l'arte che trasformano un grappolo d'uva in un vino bianco perfetto. 
                    Scorri per esplorare ogni fase.
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
                                <div key={step.id} data-step-id={step.id} className="step-container relative">
                                    <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        
                                        {/* IMMAGINE CON OVERLAY CURIOSITÀ */}
                                        <div className="w-full md:w-1/2 group relative">
                                            <div className={`overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 ${isFocused ? 'scale-100' : 'scale-90 opacity-40'}`}>
                                                <img src={step.img} alt={step.title} className="w-full h-100 object-cover" />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
                                                    <h3 className="text-2xl font-bold">{step.title}</h3>
                                                </div>
                                            </div>
                                            {/* CARD CURIOSITÀ (ENOLOGY INSIGHT) */}
                                            {isFocused && (
                                                <div className="absolute -bottom-6 right-4 md:-right-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 shadow-lg max-w-[250px] animate-bounce-subtle z-20">
                                                    <p className="text-xs font-bold text-yellow-700 uppercase mb-1">💡 L'esperto dice:</p>
                                                    <p className="text-sm text-yellow-900 italic">{step.insight}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* CONTENUTO TESTUALE */}
                                        <div className={`w-full md:w-1/2 px-8 transition-all duration-500 ${isFocused ? 'opacity-100 translate-x-0' : 'opacity-20 translate-y-10'}`}>
                                            <span className="text-6xl font-black text-blue-100 block mb-4">0{step.id}</span>
                                            <h2 className="text-3xl font-bold mb-4 text-blue-900">{step.title}</h2>
                                            <p className="text-lg text-gray-600 leading-relaxed mb-6">{step.desc}</p>
                                        </div>
                                    </div>

                                    {/* PUNTO CENTRALE TIMELINE */}
                                    <div className={`absolute left-4 md:left-1/2 top-10 md:top-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white z-10 transition-all duration-500 shadow-xl ${isFocused ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* --- QUIZ SECTION RI-STILIZZATA --- */}
                <section className="mt-60 bg-blue-900 rounded-[3rem] p-12 text-white shadow-3xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -translate-y-32 translate-x-32 blur-3xl opacity-50"></div>
                    
                    <div className="relative z-10 text-center mb-16">
                        <h3 className="text-4xl font-black">Diventa un Sommelier Digitale</h3>
                        <p className="text-blue-200 mt-4 text-lg">Hai seguito il percorso? Vediamo cosa hai imparato!</p>
                    </div>

 					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
 						{quizData.map((q) => (
							<div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
								<p className="font-bold text-gray-800 mb-4">{q.question}</p>
								<div className="space-y-2">
								{q.options.map((option, idx) => {
									const isAnswered = userAnswers[q.id] !== undefined;
									const isCorrect = idx === q.correct;
									const isSelected = userAnswers[q.id] === idx;

									return (
									<button
										key={idx}
										disabled={isAnswered}
										onClick={() => handleSelect(q.id, idx)}
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
										{isAnswered && isCorrect && <span className="float-right">✓</span>}
										{isAnswered && isSelected && !isCorrect && <span className="float-right">✗</span>}
									</button>
									);
								})}
								</div>
								{userAnswers[q.id] !== undefined && (
								<p className="mt-4 text-sm text-blue-700 bg-blue-50 p-3 rounded-lg animate-pulse">
									{q.feedback}
								</p>
								)}
							</div>
						))}
					</div>
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
					className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-[0.95rem] border-0 px-[0.35rem] py-2 font-bold transition-[transform,background-color,color] duration-200 ease-in-out hover:-translate-y-px max-[560px]:px-[0.2rem] max-[560px]:py-[0.45rem] ${item.id === 'vino' ? "bg-[linear-gradient(140deg,#8c2f66_0%,#6d2152_100%)] text-[#fff5fb] [box-shadow:0_7px_16px_rgba(85,24,62,0.35)]" : "bg-transparent text-[#5b4050] hover:bg-[rgba(215,169,191,0.3)]"}`}
					onClick={
						() => {
							if (item.id === 'home') navigate("/");
							if (item.id === 'vino') navigate("vinificazione/bianca");
						}
					}
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