import { useEffect, useState } from "react";
import { GrapeNode, MenuIconType } from "../types/Types";
import MenuIcon from "../components/MenuItems";
import { useNavigate } from "react-router-dom";


const vinifications = [
	{
		id: "bianco",
		name: "Bianco",
		short: "Bianco",
		description:
			"Mosto separato subito dalle bucce per ottenere vini freschi, profumati e luminosi.",
	},
	{
		id: "rosso",
		name: "Rosso",
		short: "Rosso",
		description:
			"Fermentazione con le bucce per estrarre colore, tannini e aromi piu intensi.",
	},
	{
		id: "rosato",
		name: "Rosato",
		short: "Rosato",
		description:
			"Contatto breve con le bucce per vini vivaci, fruttati e molto versatili.",
	},
	{
		id: "spumantizzazione",
		name: "Spumantizzazione",
		short: "Spumantizzazione",
		description:
			"Seconda fermentazione in bottiglia e lunga sosta sui lieviti per bollicine eleganti.",
	},
];

const grapeNodes: GrapeNode[] = [
	{ x: 50, y: 18, delay: "0s", duration: "6.2s" },
	{ x: 41, y: 27, delay: "-1.2s", duration: "6.7s", id: "bianco" },
	{ x: 59, y: 27, delay: "-0.8s", duration: "6.1s" },
	{ x: 35, y: 38, delay: "-2.1s", duration: "6.9s" },
	{ x: 50, y: 39, delay: "-0.6s", duration: "6.4s" },
	{ x: 65, y: 38, delay: "-2.5s", duration: "7.1s", id: "rosso" },
	{ x: 40, y: 51, delay: "-1.7s", duration: "6.5s", id: "rosato" },
	{ x: 56, y: 51, delay: "-2.3s", duration: "6.8s" },
	{ x: 45, y: 63, delay: "-1.1s", duration: "7.2s" },
	{ x: 60, y: 63, delay: "-0.9s", duration: "6.6s", id: "spumantizzazione" },
	{ x: 53, y: 75, delay: "-2.7s", duration: "6.3s" },
];

const menuItems: Array<{ id: string; label: string; icon: MenuIconType }> = [
	{ id: "home", label: "Home", icon: "home" },
	{ id: "vino", label: "Singolo vino", icon: "wine" },
	{ id: "quiz", label: "Quiz", icon: "quiz" },
];

function HomePage() {
	const [expandedId, setExpandedId] = useState<string | null>(null);
	const [hoveredId, setHoveredId] = useState<string | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const handlePointerDown = (event: PointerEvent) => {
		if (
			event.target instanceof Element &&
			event.target.closest("[data-grape-node='labeled']")
		) {
			return;
		}

		setExpandedId(null);
		setHoveredId(null);
		};

		document.addEventListener("pointerdown", handlePointerDown);

		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
		};
	}, []);

	return (
		<main
		className="relative grid min-h-svh place-items-center overflow-hidden p-[clamp(0.8rem,2vw,1.4rem)] max-[560px]:p-[0.6rem]"
		style={{
			backgroundImage:
			"linear-gradient(rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.22)), url('/Hackaton_VasonGroup/images/home.jpeg')",
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		}}
		>
			<style>{`
				@keyframes pop-open {
				0% {
					transform: translate(-50%, -52%) scale(0.74);
					opacity: 0.5;
				}
				100% {
					transform: translate(-50%, -56%) scale(1.03);
					opacity: 1;
				}
				}

				@keyframes floaty {
				0% {
					transform: translate(-50%, -50%);
				}
				50% {
					transform: translate(-50%, -56%);
				}
				100% {
					transform: translate(-50%, -50%);
				}
				}
			`}</style>

			<section
				className="relative z-2 mx-auto grid w-[min(1000px,100%)] place-items-center"
				aria-label="Tipi di vinificazione"
			>
				<div
				className="relative mx-auto aspect-square w-[min(94vw,820px)] rounded-[46px] max-[900px]:w-[min(97vw,720px)] max-[560px]:rounded-[26px]"
				role="list"
				>
				{grapeNodes.map((node, index) => {
					const item = node.id
					? vinifications.find(
						(vinification) => vinification.id === node.id,
						)
					: null;

					if (!item) {
					return (
						<span
						key={`empty-${node.x}-${node.y}-${index}`}
						className="pointer-events-none absolute z-2 aspect-square w-[clamp(108px,20.2%,186px)] rounded-full bg-[radial-gradient(circle_at_28%_24%,#d38ab4_0%,#b35b8d_58%,#7b3360_100%)] opacity-95 [box-shadow:inset_-8px_-10px_14px_rgba(89,32,63,0.28),inset_7px_9px_14px_rgba(255,255,255,0.32),0_11px_16px_rgba(112,52,83,0.24)] max-[560px]:w-[clamp(82px,18.2%,136px)]"
						style={{
							left: `${node.x}%`,
							top: `${node.y}%`,
							animation: `floaty ${node.duration} ease-in-out infinite`,
							animationDelay: node.delay,
						}}
						aria-hidden="true"
						></span>
					);
					}

					const isExpanded = expandedId === item.id;
					const isHovered = hoveredId === item.id;
					const showExpanded = isExpanded || isHovered;

					return (
					<button
						key={item.id}
						type="button"
						role="listitem"
						data-grape-node="labeled"
						className={`absolute cursor-pointer rounded-full border-0 text-[#fff7f5] font-['Baloo_2',sans-serif] text-[clamp(0.64rem,1.35vw,1.02rem)] font-bold tracking-[0.01em] [text-shadow:0_1px_4px_rgba(0,0,0,0.22)] transition-[transform,box-shadow,filter,width,padding] duration-260 ease-in-out focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[rgba(244,120,74,0.8)] max-[560px]:w-[clamp(82px,18.2%,136px)] max-[560px]:text-[clamp(0.56rem,1.9vw,0.78rem)] ${showExpanded ? "z-6 aspect-square w-[clamp(264px,40%,390px)] max-[560px]:w-[min(88vw,320px)] flex flex-col items-center justify-center text-center" : "z-3 aspect-square w-[clamp(108px,20.2%,186px)] flex items-center justify-center text-center"}`}
						style={{
						left: `${node.x}%`,
						top: `${node.y}%`,
						transform: showExpanded
							? "translate(-50%, -56%) scale(1.03)"
							: isHovered
							? "translate(-50%, -56%) scale(1.07)"
							: "translate(-50%, -50%)",
						background:
							"radial-gradient(circle at 28% 24%, #b34f87 0%, #7a1e56 48%, #54123c 100%)",
						boxShadow: isExpanded
							? "inset -12px -14px 22px rgba(49, 7, 33, 0.45), inset 9px 10px 18px rgba(255, 255, 255, 0.2), 0 22px 28px rgba(110, 35, 76, 0.34), 0 0 0 4px rgba(250, 133, 91, 0.42)"
							: "inset -12px -14px 22px rgba(49, 7, 33, 0.45), inset 9px 10px 18px rgba(255, 255, 255, 0.18), 0 16px 24px rgba(110, 35, 76, 0.26)",
						filter: isHovered || isExpanded ? "brightness(1.08)" : "none",
						animation: showExpanded
							? "pop-open 280ms cubic-bezier(0.2, 0.9, 0.2, 1)"
							: isHovered
							? "none"
							: `floaty ${node.duration} ease-in-out infinite`,
						animationDelay: showExpanded || isHovered ? "0s" : node.delay,
						}}
						onMouseEnter={() => setHoveredId(item.id)}
						onMouseLeave={() => {
						if (expandedId !== item.id) {
							setHoveredId(null);
						}
						}}
						onFocus={() => setHoveredId(item.id)}
						onBlur={() => {
						if (expandedId !== item.id) {
							setHoveredId(null);
						}
						}}
						onClick={() => {
						setExpandedId((current) =>
							current === item.id ? null : item.id,
						);
						setHoveredId(item.id);
						}}
						aria-label={`Apri ${item.name}`}
					>
						{showExpanded ? (
						<>
							<strong className="uppercase mt-[10%] block px-[12%] text-center text-[clamp(0.78rem,1.2vw,1.04rem)] font-extrabold  max-[560px]:text-[clamp(0.66rem,1.75vw,0.92rem)]">
								{item.name}
							</strong>
							<span className="mt-[0.4rem] block px-[12%] pb-[12%] text-center text-[clamp(0.54rem,0.92vw,0.76rem)] font-semibold max-[560px]:text-[clamp(0.48rem,1.62vw,0.62rem)]">
								{item.description}
							</span>
						</>
						) : (
						<span className="uppercase truncate block max-w-[84%] text-center text-[clamp(0.64rem,1.28vw,0.98rem)] font-extrabold leading-[1.1] max-[560px]:text-[clamp(0.54rem,1.8vw,0.75rem)]">
							{item.short}
						</span>
						)}
					</button>
					);
				})}

				<span
					className="absolute left-1/2 top-0 z-1 h-[clamp(120px,19vw,180px)] w-[clamp(14px,2.1vw,24px)] -translate-x-1/2 rounded-[99px] from-[#7f6a3f] to-[#69532f]"
					style={{ boxShadow: "inset 0 -10px 10px rgba(0, 0, 0, 0.15)" }}
					aria-hidden="true"
				></span>
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
					className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-[0.95rem] border-0 px-[0.35rem] py-2 font-bold transition-[transform,background-color,color] duration-200 ease-in-out hover:-translate-y-px max-[560px]:px-[0.2rem] max-[560px]:py-[0.45rem] ${item.id === 'home' ? "bg-[linear-gradient(140deg,#8c2f66_0%,#6d2152_100%)] text-[#fff5fb] [box-shadow:0_7px_16px_rgba(85,24,62,0.35)]" : "bg-transparent text-[#5b4050] hover:bg-[rgba(215,169,191,0.3)]"}`}
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
		</main>
	);
}

export default HomePage;
