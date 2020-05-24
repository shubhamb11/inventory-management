import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updateProductForm, removeProduct } from "../store/actions/actions";

const ProductForm = (props) => {
    const handleForm = (e) => {
        let temp = {
            name: e.target.name,
            val: e.target.value,
        };
        props.updateProductForm(props.product.id, temp);
    };
    let title;
    let products = props.product.fields.map((productField, i) => {
        title = productField.value
            ? productField.name === productField.title
            : "";
        console.log(title);

        return (
            <div key={i}>
                <Form.Label>{productField.name}</Form.Label>
                <Form.Control
                    component="input"
                    type={productField.type}
                    placeholder="Enter field name"
                    defaultValue={productField.value}
                    name={productField.name}
                />
            </div>
        );
    });

    // let formData = {};
    return (
        <div className="product-form-wrapper">
            <Card>
                <Button
                    className="remove-btn"
                    onClick={() => props.removeProduct(props.product.id)}
                >
                    x
                </Button>
                <Card.Header>
                    {props.product.cat_type}-{title}
                </Card.Header>
                <Card.Body>
                    <Form onChange={(e) => handleForm(e)}>
                        <Form.Group>{products}</Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        // manage_type: state.manage_type,
        // product: state.product,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateProductForm: (id, data) => {
            dispatch(updateProductForm(id, data));
        },
        removeProduct: (id) => {
            dispatch(removeProduct(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
