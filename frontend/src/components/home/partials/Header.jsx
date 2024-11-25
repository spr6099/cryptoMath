
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useState } from "react";


function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand >CryptoMath</MDBNavbarBrand>

          <MDBNavbarToggler
            type='button'
            data-target='#navbarCenteredExample'
            aria-controls='navbarCenteredExample'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openNav} className='justify-content-end' id='navbarCenteredExample'>
            <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  <Link to='/'>Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link'>
                    Register
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link><Link to="/parents/register">parents Register</Link></MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link'>
                    Login
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Link to="/admin/login">
                      <MDBDropdownItem link>
                        Admin
                      </MDBDropdownItem>
                    </Link>
                      <Link to="/parents/login">
                    <MDBDropdownItem link>
                      Parents
                    </MDBDropdownItem>
                      </Link>
                      <Link to="/teacher/login">
                    <MDBDropdownItem link>
                      Teacher
                    </MDBDropdownItem>
                      </Link>
                      <Link to="/student/login">
                    <MDBDropdownItem link>
                      students
                    </MDBDropdownItem>
                      </Link>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Header;

