import { useState, useEffect } from "react";

function HeroContent() {
    const texts = [
        "AI-Native. Hyper-Connected. Built for Real-Time Impact.",
        "AI-Native. Hyper-Connected. Built for Real-Time Impact.",
		// "Unified platform that eliminates data silos, provides real-time customer insights, and drives scalable, personalized experiences."
    ];
    const [textIndex, setTextIndex] = useState(0);
    const [strikeThrough, setStrikeThrough] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (textIndex === 0) {
                setStrikeThrough(false);
            }
            setTimeout(() => {
                setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setStrikeThrough(false);
            }, 5000);
        }, 6000);

        return () => clearInterval(interval);
    }, [textIndex]);

    return (
        <div className="sofax-hero-content center">
            <h2 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
                Activate more customers.
            </h2><br/>
            <h2 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
                Retain them longer.
            </h2><br/>
            <h2 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
                Expand revenue faster.
            </h2><br/>
            <p>AI-native hyperconnected platform that transforms product and web usage into compounding growth loops — without duct-taping tools or relying on engineering.</p>

        </div>
    );
}

export default HeroContent;