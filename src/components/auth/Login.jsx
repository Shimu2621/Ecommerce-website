import { Button, Form, Input, Spin } from "antd";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    console.log("Finish");
  };
  return (
    <div className="user_login_container">
      <h3>Login</h3>
      <div className="mb-3">
        <Form
          //   {...layout}
          //   form={form}
          name="control-hooks"
          className="login-form"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Email is required",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              prefix={<MdEmail />}
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password is required",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              prefix={<CiLock />}
            />
          </Form.Item>

          <Form.Item>
            <div className="d-flex justify-content-center">
              <Button
                size="lg"
                type="primary"
                htmlType="submit"
                className="primary_btn"
              >
                {loading ? (
                  <div>
                    <Spin size="small" />
                    Logging..
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
      {/* <Toaster richColors position="top-center" /> */}
    </div>
  );
};

export default Login;
