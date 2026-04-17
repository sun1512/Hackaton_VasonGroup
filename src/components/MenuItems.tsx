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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>

	);
}

export default MenuIcon;