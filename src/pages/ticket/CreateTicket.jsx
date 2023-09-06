import React, { useState } from 'react';
import { Select, Button, Form, Input } from 'antd';

const { Option } = Select;

const CreateTicket = () => {
  // State to manage the options
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProblem, setSelectedProblem] = useState(null);


  // Functions to handle option selection
  const handleOptionChange = (value) => {
    console.log(value);
    setSelectedOption(value);
  };

  const handleServiceChange = (value) => {
    setSelectedService(value);
  };

  const handleProblemChange = (value) => {
    setSelectedProblem(value);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Select
        placeholder="Select Mode"
        style={{ width: 200 }}
        onChange={handleOptionChange}
        defaultValue="option1"
      >
        <Option value="option1">On-Time</Option>
        <Option value="option2">Schedule</Option>
      </Select>

      {selectedOption === 'option1' && (
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
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please enter your location",
            },
          ]}
        >
          <Input placeholder="Abs js" />
        </Form.Item>
        <Form.Item
          label="Vehicle Modal"
          name="modal"
          rules={[
            {
              required: true,
              message: "Please enter Vehicle Modal",
            },
          ]}
        >
          <Input placeholder="Ferari" />
        </Form.Item>
        <Form.Item
          label="Vehicle Number "
          name="number"
          rules={[
            {
              required: true,
              message: "Please enter Vehicle Number",
            },
          ]}
        >
          <Input placeholder="UP-70 A23" />
        </Form.Item>        
        <Form.Item
            label="Problem"
            name="problem"
            rules={[
              {
                required: true,
                message: "Please Select Your Problem",
              },
            ]}
          >
            <Select
              placeholder="Select Problem"
              onChange={handleProblemChange}
            >
              <Option value="cleaner">Cleaner</Option>
              <Option value="driver">Driver</Option>
              <Option value="mechanic">Mechanic</Option>
            </Select>
        </Form.Item>
        <Form.Item
          label="Customer ID"
          name="customer"
          rules={[
            {
              required: true,
              message: "Please Enter Id of Customer",
            },
          ]}
        >
          <Input placeholder="890bg" />
        </Form.Item>
        <Form.Item
          label="Service Provider ID"
          name="service"
          rules={[
            {
              required: true,
              message: "Please Enter Mechanic's ID",
            },
          ]}
        >
          <Input placeholder="321ab" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      )}

      {selectedOption === 'option2' && (
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
          label="Customer ID"
          name="customer"
          rules={[
            {
              required: true,
              message: "Please Enter Customer ID",
            },
          ]}
        >
          <Input placeholder="830ab" />
        </Form.Item>        
        <Form.Item
          label="Pickup Details"
          name="details_of_pickup"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type='date' placeholder="Date" />
          <Input type='time' placeholder='Time'/>
          <Input type='string' placeholder='Location' />
        </Form.Item>
        <Form.Item
          label="Drop Details"
          name="details_of_drop"
          rules={[
            {
              required: true,
              message: "Please enter Admin Id!",
            },
          ]}
        >
        <Input type='date' placeholder="Date" />
        <Input type='time' placeholder='Time'/>
        <Input type='string' placeholder='Location' />
        </Form.Item>
        <Form.Item
          label="Vehicle Modal "
          name="modal"
          rules={[
            {
              required: true,
              message: "Please enter Vehicle Modal",
            },
          ]}
        >
          <Input placeholder="Suzuki" />
        </Form.Item>
        <Form.Item
          label="Vehicle Number"
          name="number"
          rules={[
            {
              required: true,
              message: "Please Enter Vehicle Number",
            },
          ]}
        >
          <Input placeholder="UP70 2B" />
        </Form.Item>
        <Form.Item
            label="Service Level"
            name="service"
            rules={[
              {
                required: true,
                message: "Please Select Service Level",
              },
            ]}
          >
            <Select
              placeholder="Select Service Level"
              onChange={handleServiceChange}
            >
              <Option value="basic">Basic</Option>
              <Option value="advance">Advance</Option>
            </Select>
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

      )}
    </div>
  );
};

export default CreateTicket;
