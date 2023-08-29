import {Link} from 'react-router-dom'
import { Avatar, Button, Input, Radio } from "antd";
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

export default function () {

    const data = [
        {
            key: '1',
            name: 'Brown',
            userid: "user34657",
            address: 'New York No. 1 Lake Park',
            access: ['read', 'write'],
        },
        {
            key: '2',
            name: 'Green',
            userid: "user34657",
            address: 'London No. 1 Lake Park',
            access: ['read'],
        },
        {
            key: '3',
            name: 'Black',
            userid: "user34657",
            address: 'Sydney No. 1 Lake Park',
            access: ['read', 'write'],
        },
        {
            key: '4',
            name: 'Black',
            userid: "user34657",
            address: 'Sydney No. 1 Lake Park',
            access: ['read', 'write'],
        },
        {
            key: '2',
            name: '-',
            userid: "user34657",
            address: 'London No. 1 Lake Park',
            access: ['read'],
        },
        {
            key: '3',
            name: 'Black',
            userid: "user34657",
            address: 'Sydney No. 1 Lake Park',
            access: ['read', 'write'],
        },
        {
            key: '4',
            name: '-',
            userid: "user34657",
            address: 'Sydney No. 1 Lake Park',
            access: ['read', 'write'],
        },
        {
            key: '4',
            name: 'Black',
            userid: "user34657",
            address: 'Sydney No. 1 Lake Park',
            access: ['read', 'write'],
        },
        {
            key: '2',
            name: 'Green',
            userid: "user34657",
            address: 'London No. 1 Lake Park',
            access: ['read'],
        },
        {
            key: '3',
            name: '-',
            userid: "user34657",
            address: 'Sydney No. 1 Lake Park',
            access: ['read', 'write'],
        },
        {
            key: '4',
            name: '-',
            userid: "user34657",
            address: 'Sydney No. 1 Lake Park',
            access: ['read', 'write'],
        }
    ];
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                <Radio.Group
                    options={["Active", "Blocked"]}
                    optionType="button"
                    buttonStyle="solid"
                    defaultValue="Active"
                />
                <Link to='/admin/createAdmin'>
                    <Button type="primary">Create New</Button>
                </Link>
            </div>
            <Table dataSource={data}>  
                    <Column title="Full Name" dataIndex="name" key="name" /> 
                <Column title="UserId" dataIndex="userid" key="userid" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                    title="access"
                    dataIndex="access"
                    key="access"
                    render={(access) => (
                        <>
                            {access.map((tag) => (
                                <Tag color="blue" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <a>Edit</a>
                            <a>Delete</a>
                        </Space>
                    )}
                />
            </Table>
        </>
    )
}
 