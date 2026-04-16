import React, { useState, useEffect } from 'react';
import MenuIcon from '../components/MenuItems';
import { useNavigate } from 'react-router-dom';
import { MenuIconType } from '../types/Types';

function BiancaVinificazionePage() {
	const steps = [
		{ id: 1, title: "Vigneto", img: "../../images/vigneto.jpeg", desc: "Selezione delle uve e monitoraggio della maturazione in campo." },
		{ id: 2, title: "Raccolta e Pressatura", img: "../../images/pressatura.jpeg", desc: "Vendemmia e separazione delicata del mosto dalle bucce." },
		{ id: 3, title: "Ammostamento", img: "../../images/ammostamento.jpeg", desc: "Trasferimento del mosto nei serbatoi di fermentazione." },
		{ id: 4, title: "Flottazione", img: "../../images/flottazione.jpg", desc: "Illimpidimento del mosto tramite risalita delle impurità." },
		{ id: 5, title: "Fermentazione", img: "../../images/fermentazione.webp", desc: "Trasformazione degli zuccheri in alcol a temperatura controllata." },
		{ id: 6, title: "Chiarifica/Filtrazione", img: "../../images/chiarifica.jpeg", desc: "Rimozione dei residui solidi per ottenere un vino limpido." },
		{ id: 7, title: "Stabilizzazione", img: "../../images/stabilizzazione.png", desc: "Trattamento a freddo per prevenire precipitazioni tartariche." },
		{ id: 8, title: "Imbottigliamento", img: "../../images/imbottigliamento.jpg", desc: "Confezionamento finale e preparazione per la distribuzione." },
	];

	const quizData = [
		{ id: 1, question: "Tra questi chiarificanti, chi NON è un allergene?", options: ["Albumina", "Caseina", "Proteine vegetali"], correct: 2, feedback: "Le proteine vegetali sono alternative 'allergen-free'." },
		{ id: 2, question: "Cosa si utilizza per far partire la fermentazione in modo controllato?", options: ["Lieviti selezionati", "Enzimi citolici", "Anidride carbonica"], correct: 0, feedback: "I lieviti selezionati permettono di guidare la fermentazione." },
		{ id: 3, question: "In quale periodo arriva solitamente l'uva in cantina?", options: ["Aprile-Giugno", "Agosto-Ottobre", "Dicembre-Febbraio"], correct: 1, feedback: "La vendemmia in Italia avviene tra fine estate e autunno." },
		{ id: 4, question: "Pensi che in un vino bianco sia importante la temperatura di fermentazione?", options: ["Sì", "No"], correct: 0, feedback: "Sì! Le basse temperature preservano i profumi delicati." }
	];

	const menuItems: Array<{ id: string; label: string; icon: MenuIconType }> = [
		{ id: "home", label: "Home", icon: "home" },
		{ id: "vino", label: "Singolo vino", icon: "wine" },
		{ id: "quiz", label: "Quiz", icon: "quiz" },
	];

	const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
	const [activeStep, setActiveStep] = useState<number | null>(null);
	const navigate = useNavigate();


	// Gestione dell'osservatore per l'effetto focus
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '-50% 0px -50% 0px', // Definisce una "striscia" centrale di attivazione
			threshold: 0
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = Number(entry.target.getAttribute('data-step-id'));
					setActiveStep(id);
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);
		const elements = document.querySelectorAll('.step-container');
		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	const handleSelect = (qId: number, optionIdx: number): void => {
		if (userAnswers[qId] !== undefined) return;
		setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
	};

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-20">
					Processo di Vinificazione in Bianco
				</h2>

				{/* --- TIMELINE SECTION --- */}
				<div className="relative mb-32">
					<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
					<div className="space-y-24">
						{steps.map((step, index) => {
							const isFocused = activeStep === step.id;
							
							return (
								<div 
									key={step.id} 
									data-step-id={step.id}
									className="step-container relative flex items-center justify-between transition-opacity duration-500"
									style={{ opacity: isFocused ? 1 : 0.4 }} // Effetto opacità per chi non è in focus
								>
									{/* --- LATO DESKTOP --- */}
									<div className={`hidden md:flex w-5/12 ${index % 2 === 0 ? 'justify-end text-right pr-16' : 'order-last justify-start text-left pl-16'}`}>
										<div className={`max-w-sm transition-transform duration-500 ${isFocused ? 'scale-105' : 'scale-100'}`}>
											{step.img && (
												<img src={step.img} alt={step.title} className="rounded-lg shadow-md mb-4 inline-block" />
											)}
											<p className="text-gray-600 leading-relaxed italic">"{step.desc}"</p>
										</div>
									</div>

									{/* --- CENTRO (La Palla) --- */}
									<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center">
										<div className={`absolute transition-all duration-500 ${isFocused ? '-top-20': '-top-10'}`}>
											<h3 className={`text-xl font-bold uppercase tracking-wider transition-colors duration-500 bg-gray-50 px-2 ${isFocused ? 'text-blue-600 scale-110' : 'text-blue-900'}`}>
												{step.title}
											</h3>
										</div>
										
										{/* La Bolla con scale dinamico */}
										<div className={`z-10 w-12 h-12 border-4 border-white rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ease-out ${
											isFocused 
											? 'bg-blue-700 scale-[1.6] shadow-blue-300' 
											: 'bg-blue-600 scale-100'
										}`}>
											<span className="text-white text-sm font-bold">{step.id}</span>
										</div>
									</div>

									{/* --- LATO MOBILE --- */}
									<div className="ml-16 md:hidden w-full">
										<div className={`bg-white p-5 rounded-xl shadow-md border transition-all duration-500 ${isFocused ? 'border-blue-400 ring-2 ring-blue-100' : 'border-gray-100'}`}>
											<h3 className="font-bold text-blue-600 mb-2">{step.title}</h3>
											<p className="text-sm text-gray-500">{step.desc}</p>
										</div>
									</div>

									<div className="hidden md:block w-5/12"></div>
								</div>
							);
						})}
					</div>
				</div>

				{/* --- QUIZ SECTION --- */}
				<div className="mt-40 mb-12 border-t border-gray-200 pt-20">
					<h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
						Metti alla prova le tue conoscenze! 🍷
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
				</div>
			</div>
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