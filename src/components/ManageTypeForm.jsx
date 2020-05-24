import React from "react";
import { Form, Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import {
    addFieldType,
    updateCategoryForm,
    removeCategory,
    removeField,
} from "../store/actions/actions";

const ManageTypeForm = (props) => {
    const handleForm = (e) => {
        console.log(e);

        let temp = {
            name: e.target.name,
            val: e.target.value,
            id: e.target.id,
        };
        console.log("temp", temp);

        props.updateCategoryForm(category.id, temp);
    };

    const addFieldType = (id) => {
        props.addFieldType(id);
    };
    let category = props.categories.find((cat) => cat.id === props.id);

    let fields = category.fields.map((field, i) => {
        return (
            <div key={i}>
                <Dropdown as={ButtonGroup} className="field-inputs">
                    <Form.Control
                        size="sm"
                        type="text"
                        name="name"
                        id={field.id.toString()}
                        defaultValue={field.name}
                        placeholder="Small text"
                    />

                    <Dropdown.Toggle
                        split
                        variant="secondary"
                        id="dropdown-split-basic"
                    />

                    <Dropdown.Menu>
                        {props.sub_fields_types.map((sub_fields_type, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <Dropdown.Item>
                                        <Button
                                            className="sub-field-btns"
                                            style={{ width: "100%" }}
                                            id={field.id.toString()}
                                            name="type"
                                            value={sub_fields_type}
                                            onClick={(e) => handleForm(e)}
                                        >
                                            {sub_fields_type}
                                        </Button>
                                    </Dropdown.Item>
                                </React.Fragment>
                            );
                        })}
                        <Dropdown.Item
                            style={{ textAlign: "center" }}
                            key={i}
                            onClick={() =>
                                props.removeField(category.id, field.id)
                            }
                        >
                            Remove
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    });
    // console.log(category);
    // let formData = {};

    let objectTitles = category.fields.map((field, i) => {
        return (
            <React.Fragment key={i}>
                <Dropdown.Item className="drop-down-item-wrapper">
                    <Button
                        variant="secondary"
                        style={{
                            width: "100%",
                        }}
                        id={field.id.toString()}
                        name="title"
                        value={field.name}
                        onClick={(e) => handleForm(e)}
                    >
                        {field.name}
                    </Button>
                </Dropdown.Item>
            </React.Fragment>
        );
    });

    return (
        <div id={category.id} className="manage-type-form-wrapper">
            <Card>
                <Button
                    className="remove-btn"
                    onClick={() => props.removeCategory(category.id)}
                >
                    x
                </Button>
                <Card.Header>{category.cat_type}</Card.Header>
                <Card.Body>
                    <Form onChange={(e) => handleForm(e)}>
                        <Form.Group>
                            <Form.Label>Object type</Form.Label>
                            <Form.Control
                                component="input"
                                type="text"
                                placeholder="Enter field name"
                                name="cat_type"
                                defaultValue={category.cat_type}
                            />
                            <Form.Label>Object title</Form.Label>

                            <Dropdown>
                                <Dropdown.Toggle
                                    className="lg-dropdown-btn"
                                    variant="secondary"
                                    id="dropdown-basic"
                                >
                                    Select title
                                </Dropdown.Toggle>
                                <Dropdown.Menu>{objectTitles}</Dropdown.Menu>
                            </Dropdown>
                            <div className="dynamic-filed-types">
                                <Form.Label>Fields</Form.Label>
                                {fields}
                            </div>
                            <Button
                                className="w-100"
                                onClick={() => addFieldType(category.id)}
                            >
                                Add Field
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        sub_fields_types: state.sub_fields_types,
        categories: state.manage_type,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFieldType: (category) => {
            dispatch(addFieldType(category));
        },
        updateCategoryForm: (id, data) => {
            dispatch(updateCategoryForm(id, data));
        },
        removeCategory: (id) => {
            dispatch(removeCategory(id));
        },
        removeField: (catId, fieldId) => {
            dispatch(removeField(catId, fieldId));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageTypeForm);
