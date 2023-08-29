import { Button, Radio, Table, Space, Modal, Input } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function () {
  const [canEdit, setCanEdit] = useState(false);
  const [edit, setEdit] = useState(null);
  const [columns, seTcolumns] = useState([
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <a>
            <EditOutlined
              onClick={() => {
                editHandler(record);
              }}
            />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ]);

  // function deleteHandler(key) {
  //   console.log(data);
  //   const updatedData = data.filter(item => item.key !== key);
  //   console.log(updatedData)
  //   setData(updatedData);
  // }

  function editHandler(record) {
    setCanEdit(true);
    setEdit({ ...record });
    setEdit((prevEdit) => ({
      ...prevEdit,
      status: "Booked",
    }));
  }

  function handleNameChange(e) {
    const { name, value } = e.target;

    setEdit((prevEdit) => ({
      ...prevEdit,
      [name]: value,
    }));
  }

  const [data, setData] = useState([
    {
      key: 1,
      name: "John Brown",
      experience: "5",
      address: "New York No. 1 Lake Park",
      status: "Ideal",
    },
    {
      key: 2,
      name: "Jim Green",
      experience: "4",
      address: "London No. 1 Lake Park",
      status: "Ideal",
    },
    {
      key: 3,
      name: "Joe Black",
      experience: "7",
      address: "Sydney No. 1 Lake Park",
      status: "Ideal",
    },
    {
      key: 4,
      name: "Sakleen",
      experience: "6",
      address: "Allahabad, Civil Lines",
      status: "Ideal",
    },
    {
      key: 5,
      name: "Palak",
      experience: "4.5",
      address: "Malviyanagar, UP",
      status: "Ideal",
    },
  ]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Radio.Group
          options={["Mechanic", "Cleaner", "Driver"]}
          optionType="button"
          buttonStyle="solid"
          defaultValue="Mechanic"
        />
        <Link to="/ticket/createTicket">
          <Button type="primary">Create New</Button>
        </Link>
        <Table columns={columns} dataSource={data} scroll={{ y: 200 }} />;
        <Modal
          title="Edit Details"
          open={canEdit}
          okText="Save"
          onCancel={() => {
            setCanEdit(false);
          }}
          onOk={() => {
            const updatedData = data.map((item) =>
              item.key === edit.key ? edit : item
            );
            setData(updatedData);
            setCanEdit(false);
          }}
        >
          <Input name="name" value={edit?.name} onChange={handleNameChange} />
        </Modal>
      </div>
    </>
  );
}
