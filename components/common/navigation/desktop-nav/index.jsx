import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
		<DesktopNav>
			<NavItem dropdown title="Demos">
				<Dropdown>
					<DropdownItem dropdown title="MultiPage">
						<Dropdown noShape>
							<DropdownItem url="multi-page/home-one">Sales Management</DropdownItem>
							<DropdownItem url="multi-page/home-two">Cripto App</DropdownItem>
							<DropdownItem url="multi-page/home-three">Team Management</DropdownItem>
							<DropdownItem url="multi-page/home-four">Social Agency</DropdownItem>
							<DropdownItem url="multi-page/home-five">Digital Agency</DropdownItem>
							<DropdownItem url="multi-page/home-six">CRM</DropdownItem>
							<DropdownItem url="multi-page/home-seven">AI SasS</DropdownItem>
							<DropdownItem url="multi-page/home-eight">IT Services</DropdownItem>
							<DropdownItem url="multi-page/home-nine">Email Marketing</DropdownItem>
							<DropdownItem url="multi-page/home-ten">Web Hosting</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="OnePage">
						<Dropdown noShape>
							<DropdownItem url="one-page/home-one">Sales Management</DropdownItem>
							<DropdownItem url="one-page/home-two">Cripto App</DropdownItem>
							<DropdownItem url="one-page/home-three">Team Management</DropdownItem>
							<DropdownItem url="one-page/home-four">Social Agency</DropdownItem>
							<DropdownItem url="one-page/home-five">Digital Agency</DropdownItem>
							<DropdownItem url="one-page/home-six">CRM</DropdownItem>
							<DropdownItem url="one-page/home-seven">AI SasS</DropdownItem>
							<DropdownItem url="one-page/home-eight">IT Services</DropdownItem>
							<DropdownItem url="one-page/home-nine">Email Marketing</DropdownItem>
							<DropdownItem url="one-page/home-ten">Web Hosting</DropdownItem>
						</Dropdown>
					</DropdownItem>
				</Dropdown>
			</NavItem>
			<NavItem url="about-us">About Us</NavItem>
			<NavItem dropdown title="Pages">
				<Dropdown>
					<DropdownItem url="about-us">About Us</DropdownItem>
					<DropdownItem url="pricing">Pricing</DropdownItem>
					<DropdownItem dropdown title="Blog">
						<Dropdown noShape>
							<DropdownItem url="blog">Our Blog</DropdownItem>
							<DropdownItem url="single-blog">Blog Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="Service">
						<Dropdown noShape>
							<DropdownItem url="service">Service</DropdownItem>
							<DropdownItem url="single-service">Service Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title={"Team"}>
						<Dropdown noShape>
							<DropdownItem url="team">Team</DropdownItem>
							<DropdownItem url="single-team">Team Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title={"Career"}>
						<Dropdown noShape>
							<DropdownItem url="career">Career</DropdownItem>
							<DropdownItem url="single-career">Career Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title={"Portfolio"}>
						<Dropdown noShape>
							<DropdownItem url="portfolio">Our Portfolio</DropdownItem>
							<DropdownItem url="single-portfolio">Portfolio Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="Utility">
						<Dropdown noShape>
							<DropdownItem url="faq">FAQ</DropdownItem>
							<DropdownItem url="error-page">Error Page</DropdownItem>
							<DropdownItem url="coming-soon">Coming Soon</DropdownItem>
							<DropdownItem url="terms-and-condition">Terms & Condition</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="Account">
						<Dropdown noShape>
							<DropdownItem url="sign-up">Sign Up</DropdownItem>
							<DropdownItem url="sign-in">Sign In</DropdownItem>
							<DropdownItem url="reset-password">Reset Password</DropdownItem>
						</Dropdown>
					</DropdownItem>
				</Dropdown>
			</NavItem>
			<NavItem dropdown title="Blog">
				<Dropdown>
					<DropdownItem url="blog">Our Blog</DropdownItem>
					<DropdownItem url="single-blog">Blog Details</DropdownItem>
				</Dropdown>
			</NavItem>
			<NavItem url="contact-us">Contact Us</NavItem>
		</DesktopNav>
	);
}

export default DesktopMenu;
