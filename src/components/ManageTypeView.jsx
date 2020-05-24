import React from "react";
import ManageTypeForm from "./ManageTypeForm";
import { connect } from "react-redux";
import "./comp-styles/manage-type-view.scss";
import { Row, Col, Button } from "react-bootstrap";
import { addCategoryForm } from "../store/actions/actions";

const ManageTypeView = (props) => {
    const addCategoryForm = () => {
        console.log("add a form");
        props.addCategoryForm();
    };

    let manageTypeForm = props.manage_type.map((category) => {
        return (
            <Col key={category} xs={12} lg={2} md={3}>
                <ManageTypeForm />
            </Col>
        );
    });

    return (
        <Row className="manage-type-wrapper">
            {manageTypeForm}
            <Col xs={12} lg={2} md={3}>
                <Button onClick={() => addCategoryForm()}>
                    Add Type dropdown
                </Button>
            </Col>
        </Row>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        manage_type: state.manage_type,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCategoryForm: (category) => {
            dispatch(addCategoryForm(category));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageTypeView);
