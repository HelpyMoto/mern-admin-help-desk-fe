import { Avatar, Input, Radio } from "antd";
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

export default function () {

    const data = [
        {
            key: '1',
            fullName: 'John Deo',
            phone: 9876543210,
            address: 'New York No. 1 Lake Park',
            Verifeid: "Success",
        },
        {
            key: '2',
            fullName: 'Jim Black',
            phone: 9876543210,
            address: 'London No. 1 Lake Park',
            Verifeid: "Pending",
        },
        {
            key: '3',
            fullName: 'Joe Duo',
            phone: 9876543210,
            address: 'Sydney No. 1 Lake Park',
            Verifeid: "Cancel",
        },
        {
            key: '4',
            fullName: 'Leocurse ',
            phone: 9876543210,
            address: 'Sydney No. 1 Lake Park',
            Verifeid: "Pending",
        }
    ];
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                <Radio.Group
                    options={["Mechanic", "Cleaner", "Driver"]}
                    optionType="button"
                    buttonStyle="solid"
                    defaultValue="Mechanic"
                />
                <Input
                    style={{ maxWidth: "300px" }}
                    placeholder="Search by Name, Email or Phone" />
            </div> <br />

            <Table dataSource={data}>  
                    <Column title="Full Name" dataIndex="fullName" key="fullName" /> 
                <Column title="Phone" dataIndex="phone" key="phone" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                    title="Verifeid"
                    dataIndex="Verifeid"
                    key="Verifeid" />
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