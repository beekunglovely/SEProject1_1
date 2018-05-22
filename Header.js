import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className ="mt-3">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ระบบฐานข้อมูลสนับสนุนการบริหารจัดการกลุ่มวิสาหกิจเพื่อสังคม</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">ข้อมูลเกษตรกร</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">ข้อมูลวัตถุดิบ</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ตัวเลือก
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                   เเก้ไขข้อมูล
                  </DropdownItem>
                  <DropdownItem>
                    ตรวจสอบข้อมูล
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    ออกจากระบบ
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}