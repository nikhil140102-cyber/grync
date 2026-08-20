import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
function Usecases() {
    return (
        <div className="sofax-accordion-section-wrapper">
            <div className="accordion sofax-accordion-section-v2" id="sofax-accordion2">
                <div className="accordion-item sofax-accordion-item ">
                    <h3 className="accordion-header sofax-accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                        >
                            Disconnected tools break the customer journey.
                        </button>
                        <div className="accordion-icon">
                            <Image src={Icon} alt="Icon" />
                        </div>
                    </h3>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#sofax-accordion2"
                    >
                        <div className="accordion-body sofax-accordion-body">
                            Track real-time behaviour and engage users—no engineering needed, improving user experience.
                        </div>
                    </div>
                </div>
                <div className="accordion-item sofax-accordion-item ">
                    <h3 className="accordion-header sofax-accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                        >
                            Too many platforms, not enough impact.
                        </button>
                        <div className="accordion-icon">
                            <Image src={Icon} alt="Icon" />
                        </div>
                    </h3>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
                        <div className="accordion-body sofax-accordion-body">
                            Deliver dynamic in-app messages, banners, and onboarding flows all within the app triggered by live actions, accelerating activation and value.
                        </div>
                    </div>
                </div>
                <div className="accordion-item sofax-accordion-item ">
                    <h3 className="accordion-header sofax-accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                        >
                            Campaigns miss real behaviour signals.
                        </button>
                        <div className="accordion-icon">
                            <Image src={Icon} alt="Icon" />
                        </div>
                    </h3>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
                        <div className="accordion-body sofax-accordion-body">
                            Run automated campaigns based on real-time user behaviour, boosting conversions and revenue.
                        </div>
                    </div>
                </div>
                <div className="accordion-item sofax-accordion-item ">
                    <h3 className="accordion-header sofax-accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                        >
                            Teams work in silos, insights get lost.
                        </button>
                        <div className="accordion-icon">
                            <Image src={Icon} alt="Icon" />
                        </div>
                    </h3>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
                        <div className="accordion-body sofax-accordion-body">
                            Auto-identify qualified leads and trigger outreach seamlessly, aligning sales and product teams.
                        </div>
                    </div>
                </div>
                <div className="accordion-item sofax-accordion-item ">
                    <h3 className="accordion-header sofax-accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                        >
                            Dashboards lack action, context, and triggers.
                        </button>
                        <div className="accordion-icon">
                            <Image src={Icon} alt="Icon" />
                        </div>
                    </h3>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
                        <div className="accordion-body sofax-accordion-body">
                            Send hyper-relevant emails triggered by live product data, driving retention and engagement.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Usecases;
