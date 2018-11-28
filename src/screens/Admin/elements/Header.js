import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown, DropdownItem, Image } from "semantic-ui-react";

import ActionCreators from "../../../redux/actionCreators";

const Header = props => {
  return (
    <Menu>
      <Menu.Item as={Link} to="/">
        <Image src={"/logo.png"} size="small" />
      </Menu.Item>
      <Menu.Item as={Link} to="/admin">
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/admin/users">
        Usuários
      </Menu.Item>
      <Menu.Item as={Link} to="/admin/runs">
        Corridas
      </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown item text={props.auth.user.name}>
          <Dropdown.Menu>
            <DropdownItem as={Link} to="/restrito">
              Modo: Usuário
            </DropdownItem>
            <DropdownItem as={Link} to="/restrito/my-account">
              Minha Conta
            </DropdownItem>
            <DropdownItem as={Link} to="/restrito/change-password">
              Alterar Senha
            </DropdownItem>
            <DropdownItem onClick={props.logout}>Sair</DropdownItem>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (email, passwd) => ActionCreators.signinRequest(email, passwd),
    logout: () => dispatch(ActionCreators.destroyAuthRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
