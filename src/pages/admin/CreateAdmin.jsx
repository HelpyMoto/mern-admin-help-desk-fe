import React from "react";
import { Button, Form, Input } from "antd";

const CreateAdmin = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 400,
          width: "80%",
          display: "block",
          margin: "auto",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name "
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please enter Admin Full Name",
            },
          ]}
        >
          <Input placeholder="eg. abcd" />
        </Form.Item>
        <Form.Item
          label="Email "
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter Admin Email Id",
            },
          ]}
        >
          <Input placeholder="eg. abcd123@gmail.com" />
        </Form.Item>
        <Form.Item
          label="Address "
          name="adress"
          rules={[
            {
              required: true,
              message: "Please enter Your Address",
            },
          ]}
        >
          <Input placeholder="584- 45 This ThisGanj" />
        </Form.Item>
        <Form.Item
          label="Number"
          name="number"
          rules={[
            {
              required: true,
              message: "Please Enter Admin Number",
            },
          ]}
        >
          <Input placeholder="eg. 1234567890" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateAdmin;
