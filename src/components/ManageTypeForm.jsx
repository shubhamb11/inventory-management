import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

const ManageTypeForm = (props) => {
    const handleForm = (e) => {
        console.log("form handled");
    };

    let fields;

    return (
        <div className="manage-type=form-wrapper">
            <Card>
                <Card.Header>{props.category}</Card.Header>
                <Card.Body>
                    <Form onChange={() => handleForm()}>
                        <Form.Group>
                            <Form.Label>Object type</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Small text"
                            />
                            <Form.Label>Object title</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Small text"
                            />
                            <div className="dynamic-filed-types">
                                <Form.Label>Fields</Form.Label>
                                {fields}
                            </div>
                            <Button>Add Field dropdown</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        manage_type: state.manage_type,
    };
};

export default connect(mapStateToProps)(ManageTypeForm);
