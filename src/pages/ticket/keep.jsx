<>
        <div
            style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            }}
        >
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
                <h3>Mechanic Details</h3>
                <br />
                <Form.Item
                label="Name "
                name="fullName"
                rules={[
                    {
                    required: true,
                    message: "Please enter Mechanic Full Name",
                    },
                ]}
                >
                <Input placeholder="eg. abcd" />
                </Form.Item>
                <Form.Item
                label="Id"
                name="mechanicId"
                rules={[
                    {
                    required: true,
                    message: "Please enter Mechanic Id!",
                    },
                ]}
                >
                <Input placeholder="eg. abcd123" />
                </Form.Item>
                <Form.Item
                label="Email "
                name="email"
                rules={[
                    {
                    required: true,
                    message: "Please enter Mechanic Email Id",
                    },
                ]}
                >
                <Input placeholder="eg. abcd123@gmail.com" />
                </Form.Item>
                <Form.Item
                label="Address "
                name="address"
                rules={[
                    {
                    required: true,
                    message: "Please input Mechanic Address",
                    },
                ]}
                >
                <Input placeholder="eg. Building name - 123 malvinagar, up" />
                </Form.Item>
                <Form.Item
                label="Experience"
                name="number"
                rules={[
                    {
                    required: true,
                    message: "Please input Mechanic Experience",
                    },
                ]}
                >
                <Input placeholder="11" />
                </Form.Item>
                <Form.Item
                label="Photo Url "
                name="photo"
                rules={[
                    {
                    required: true,
                    message: "Please input Mechanic Photo Url",
                    },
                ]}
                >
                <Input placeholder="eg. https:image.com" />
                </Form.Item>
                <Form.Item
                label="Number"
                name="number"
                rules={[
                    {
                    required: true,
                    message: "Please input Mechanic UserId!",
                    },
                ]}
                >
                <Input placeholder="eg. 1234567890" />
                </Form.Item>
            </Form>
            </div>
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
                <h3>User Details</h3>
                <br />
                <Form.Item
                label="Name "
                name="fullName"
                rules={[
                    {
                    required: true,
                    message: "Please enter Mechanic Full Name",
                    },
                ]}
                >
                <Input placeholder="eg. abcd" />
                </Form.Item>
                <Form.Item
                label="Id"
                name="userId"
                rules={[
                    {
                    required: true,
                    message: "Please enter Mechanic Id!",
                    },
                ]}
                >
                <Input placeholder="eg. abcd123" />
                </Form.Item>
                <Form.Item
                label="Email "
                name="email"
                rules={[
                    {
                    required: true,
                    message: "Please enter Mechanic Email Id",
                    },
                ]}
                >
                <Input placeholder="eg. abcd123@gmail.com" />
                </Form.Item>
                <Form.Item
                label="Address "
                name="address"
                rules={[
                    {
                    required: true,
                    message: "Please input Mechanic Address",
                    },
                ]}
                >
                <Input placeholder="eg. Building name - 123 malvinagar, up" />
                </Form.Item>
                <Form.Item
                label="Pick-Up"
                name="number"
                rules={[
                    {
                    required: true,
                    message: "Please input Mechanic Experience",
                    },
                ]}
                >
                <Input placeholder="10:30 pm" />
                </Form.Item>
                <Form.Item
                label="Photo Url "
                name="photo"
                rules={[
                    {
                    required: true,
                    message: "Please input Mechanic Photo Url",
                    },
                ]}
                >
                <Input placeholder="eg. https:image.com" />
                </Form.Item>
                <Form.Item
                label="Number"
                name="number"
                rules={[
                    {
                    required: true,
                    message: "Please input Mechanic UserId!",
                    },
                ]}
                >
                <Input placeholder="eg. 1234567890" />
                </Form.Item>
            </Form>
            </div>
        </div>
        <div
            style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <Form.Item wrapperCol={{ offset: 8, span: 16,}}
            >
            <Button type="primary" htmlType="submit">
                Create
            </Button>
            </Form.Item>
        </div>
