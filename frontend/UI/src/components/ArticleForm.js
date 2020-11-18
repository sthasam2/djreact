import React from "react";
import { Form, Input, Button } from "antd";
import renderEmpty from "antd/lib/config-provider/renderEmpty";

/**
 * Form for article posting
 */
class CustomForm extends React.Component {
    /**
     * Form Event Handler
     */
    handleFormSubmit = (event) => {
        console.log("Hey");
        event.preventDefault();

        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content);
    };

    render() {
        return (
            <div
                style={{
                    background: "#dbdbdb",
                    // margin: "1rem 2rem",
                    padding: "1rem 1rem",
                }}
            >
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Item name="layout">
                        <h1>Create an article</h1>
                    </Form.Item>

                    <Form.Item label="Title">
                        <Input name="title" placeholder="Enter title..." />
                    </Form.Item>

                    <Form.Item label="Content">
                        <Input name="content" placeholder="Enter content..." />
                    </Form.Item>

                    <Form.Item>
                        <Button type="submit" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Button type="danger">Delete</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm;
