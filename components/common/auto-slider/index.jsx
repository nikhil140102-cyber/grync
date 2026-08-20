"use client";
import Icon1 from "@/public/images/service/icon1.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "User Behaviour",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Funnels",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "User Journeys",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Trigger Based Workflow",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Feature Flags",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "In-App Walkthrough",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Contextual Product Analytics",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Email Notifications",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Audience Segmentation",
	},
];

const swiperSettings = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: "auto",
};

function AutoSlider() {
	return (
		<section className="sofax-service-slider" style={{ backgroundColor: "var(--accent-color)" }}>
			<div className="sofax-slider-service-section">
				<Swiper {...swiperSettings}>
					{sliderData.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="sofax-service-slider-wrap">
								<div className="sofax-service-slider-icon">
									<Image
										src={item.img}
										alt="Icon"
										className="black-icon" // Add a class for styling
									/>
								</div>
								<div className="sofax-service-slider-data text-black">
									<h2>{item.txt}</h2>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default AutoSlider;