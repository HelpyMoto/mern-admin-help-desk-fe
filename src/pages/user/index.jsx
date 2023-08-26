import { Avatar, Input, Radio } from "antd";
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

export default function () {

    const data = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            phone: 9876543210,
            address: 'New York No. 1 Lake Park',
            description: "lorem to a dev...",
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            phone: 9876543210,
            address: 'London No. 1 Lake Park',
            description: "demo for the desc....",
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            phone: 9876543210,
            address: 'Sydney No. 1 Lake Park',
            description: "-",
        },
        {
            key: '4',
            firstName: 'Joe',
            lastName: 'Black',
            phone: 9876543210,
            address: 'Sydney No. 1 Lake Park',
            description: "-",
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            phone: 9876543210,
            address: 'London No. 1 Lake Park',
            description: "demo for the desc....",
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            phone: 9876543210,
            address: 'Sydney No. 1 Lake Park',
            description: "-",
        },
        {
            key: '4',
            firstName: 'Joe',
            lastName: 'Black',
            phone: 9876543210,
            address: 'Sydney No. 1 Lake Park',
            description: "-",
        },
        {
            key: '4',
            firstName: 'Joe',
            lastName: 'Black',
            phone: 9876543210,
            address: 'Sydney No. 1 Lake Park',
            description: "-",
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            phone: 9876543210,
            address: 'London No. 1 Lake Park',
            description: "demo for the desc....",
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            phone: 9876543210,
            address: 'Sydney No. 1 Lake Park',
            description: "-",
        },
        {
            key: '4',
            firstName: 'Joe',
            lastName: 'Black',
            phone: 9876543210,
            address: 'Sydney No. 1 Lake Park',
            description: "-",
        }
    ];
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                <Radio.Group
                    options={["All", "Primium", "Blocked"]}
                    optionType="button"
                    buttonStyle="solid"
                    defaultValue="All"
                />
                <Input
                    style={{ maxWidth: "300px" }}
                    placeholder="Search by Name, Email or Phone" />
            </div> <br />

            <Table dataSource={data}> 
                <ColumnGroup title="Name">
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                </ColumnGroup>
                <Column title="Phone" dataIndex="phone" key="phone" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                    title="Description"
                    dataIndex="description"
                    key="description" />
                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <a>Veiw</a>
                            <a>Edit</a>
                            <a style={{color:"red"}}>Delete</a>
                        </Space>
                    )}
                />
            </Table>

        </>
    )
}