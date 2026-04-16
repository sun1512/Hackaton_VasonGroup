import { useNavigate } from "react-router-dom";
import { MenuIconType } from "../types/Types";


function MenuIcon({ type }: { type: MenuIconType }) {
    const navigate = useNavigate();

	if (type === "home") {
		return (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-full w-full fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] stroke-[1.8]"
            >
                <path d="M3.5 11.2 12 4l8.5 7.2" />
                <path d="M6.2 9.8V20h11.6V9.8" />
                <path d="M10.2 20v-4.9h3.6V20" />
            </svg>
		);
	}

	if (type === "wine") {
		return (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-full w-full fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] stroke-[1.8]"
            >
                <path d="M7 4h10v2.8a5 5 0 0 1-10 0z" />
                <path d="M12 11.8V18" />
                <path d="M8.5 20h7" />
            </svg>
		);
	}

	return (
		<svg
		viewBox="0 0 24 24"
		aria-hidden="true"
		className="h-full w-full fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] stroke-[1.8]"
		>
		<circle cx="12" cy="12" r="8.8" />
		<path d="M9.9 9.2a2.4 2.4 0 0 1 4.8.1c0 1.9-2.2 2.2-2.2 3.8" />
		<circle cx="12" cy="16.7" r="0.9" fill="currentColor" stroke="none" />
		</svg>
	);
}

export default MenuIcon;