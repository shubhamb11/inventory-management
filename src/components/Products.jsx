import React from "react";
import { connect } from "react-redux";
import { addProductForm } from "../store/actions/actions";
import { Row, Col, Button, Dropdown } from "react-bootstrap";
import ProductForm from "./ProductForm";

const Products = (props) => {
    if (props.inventoryLength === 0) {
        return <h4>Please add a Inventory Type</h4>;
    }
    let productForm = props.products.map((product) => {
        return (
            <Col key={product.id} xs={12} lg={3} md={3}>
                <ProductForm id={product.id} product={product} />
            </Col>
        );
    });
    // console.log("here>?");
    const addProductForm = (category) => {
        props.addProductForm(category);
    };

    return (
        <Col lg={12} xs={12} md={12}>
            <Row className="manage-type-wrapper">
                {productForm}
                <Col xs={12} lg={2} md={3}>
                    {props.categorySelected === "all" ? (
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="primary"
                                id="dropdown-basic"
                                className="w-100"
                            >
                                Add Item
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {props.manage_type.map((cat, i) => {
                                    return (
                                        <Dropdown.Item
                                            key={i}
                                            onClick={() =>
                                                addProductForm(cat.cat_type)
                                            }
                                        >
                                            {cat.cat_type}
                                        </Dropdown.Item>
                                    );
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Button
                            className="w-100"
                            onClick={() =>
                                addProductForm(props.categorySelected)
                            }
                        >
                            Add Item
                        </Button>
                    )}
                </Col>
            </Row>
        </Col>
    );
};

const mapStateToProps = (state) => {
    // console.log(state);

    let products;
    if (state.categorySelected === "all") {
        products = state.products;
    } else {
        products = [...state.products].filter((product) => {
            if (
                product.cat_type.toLowerCase() ===
                state.categorySelected.toLowerCase()
            ) {
                return product;
            }
        });
    }
    return {
        products: products,
        categorySelected: state.categorySelected,
        inventoryLength: state.manage_type.length,
        manage_type: state.manage_type,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProductForm: (category) => {
            dispatch(addProductForm(category));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
