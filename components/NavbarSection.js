import LinksSection from '../pages/Links/LinksSection'
import LogoSection from '../pages/Logo/LogoSection'

const NavbarSection = () => {
        return (
          <nav className="section font-semibold px-16 text-gray-800 fixed w-full top-0 flex header_section bg-gray-100 shadow z-10">
            <LogoSection />
            <LinksSection />
          </nav>
        )
}

export default NavbarSection
