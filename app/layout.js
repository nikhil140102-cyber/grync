import { DMSans, clashGrotesk, inter } from "./fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// React Toastify
import "react-toastify/dist/ReactToastify.css";

// Bootstrap js
import ImportBsJS from "@/components/BootstrapClient";

// ScrollToTop
import ScrollToTop from "@/hooks/ScrollToTop";
// main css
import "../public/css/app.css";
import "../public/css/main.css";
import "../public/css/mobile-nav.css";

import Script from 'next/script';

export const metadata = {
	title: "Grync.io",
	description: "Grync.io",
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<head>
		<Script
		strategy="afterInteractive"
		src={`https://www.googletagmanager.com/gtag/js?id=G-ZLN02D1TK3`}
		/>
		<Script
		id="google-analytics"
		strategy="afterInteractive"
		dangerouslySetInnerHTML={{
			__html: `
				  window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());
				  gtag('config', 'G-ZLN02D1TK3', {
					page_path: window.location.pathname,
				  });
				`,
		}}
		/>

		<script
		id="Cookiebot"
		src="https://consent.cookiebot.com/uc.js"
		data-cbid="669f3dec-30ae-4692-89bc-4cb91d5eafb9"
		type="text/javascript"
		async
		></script>

	    </head>
			<body className={`${inter.variable} ${DMSans.variable} ${clashGrotesk.variable}`}>
				<ImportBsJS />
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
