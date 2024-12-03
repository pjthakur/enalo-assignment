import React from "react";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";

const DemoForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className="DemoForm">
      {/* <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        layout="horizontal"
      >
        <Input.Group>
        <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="email"

        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder="Email*"/>
      </Form.Item>
      </Input.Group>
      <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Province is required',
            },
          ]}
        >
          <Select placeholder="Please Select">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Form.Item>
      <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Province is required',
            },
          ]}
        >
          <Select placeholder="4:00 PM Available">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Form.Item>
        <Form.Item
        name="intro"
        rules={[
          {
            required: true,
            message: 'Please input Intro',
          },
        ]}
      >
        <Input.TextArea placeholder="Message" />
      </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
      <Form>
        <div className="User">
            <input type="text" placeholder="Full Name*"></input>
            <input type="email" placeholder="Email*"></input>
        </div>
        <div className="Select">
            <select name="cars" id="cars" >
                <option value="volvo">Please Select</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars" disabled>
                <option value="volvo">4:00 Available</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <textarea placeholder="Message"/>
        <button>Book Appointment</button>
      </Form>
    </div>
  );
};

export default DemoForm;
