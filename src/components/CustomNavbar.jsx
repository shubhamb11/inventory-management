import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { filtercategory } from "../store/actions/actions";
import { Link } from "react-router-dom";

const CustomNavbar = (props) => {
    const filtercategory = (category) => {
        props.filtercategory(category);
    };
    console.log(props);

    let temp = new Map();
    let categories = props.manage_type.map((category) => {
        console.log(category);
        if (!temp.has(category.cat_type)) {
            temp.set(category.cat_type);
            return (
                <Link to="/" key={category.cat_type} className="remove-dec">
                    <div onClick={() => filtercategory(category.cat_type)}>
                        {category.cat_type}
                    </div>
                </Link>
            );
        }
    });
    return (
        <Navbar bg="light" expand="lg">
            {/* <Link to="/" className="remove-dec"> */}
            <Navbar.Brand onClick={() => filtercategory("all")}>
                Objector
            </Navbar.Brand>
            {/* </Link> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="remove-dec">
                        <div onClick={() => filtercategory("all")}>All</div>
                    </Link>
                    {categories}
                    <Link to="/manage" className="remove-dec">
                        <div>Manage types</div>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapStateToProps = (state) => {
    return {
        manage_type: state.manage_type,
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
