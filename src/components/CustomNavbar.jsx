import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { filtercategory } from "../store/actions/actions";

const CustomNavbar = (props) => {
    const filtercategory = (category) => {
        props.filtercategory(category);
    };
    let categories = props.categories.map((category) => {
        return (
            <Nav.Link
                href={"#" + category}
                key={category}
                onClick={() => filtercategory(category)}
            >
                {category}
            </Nav.Link>
        );
    });
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Objector</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {categories}
                    <Nav.Link href="#manageType">Manage types</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filtercategory: (category) => {
            dispatch(filtercategory(category));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);
