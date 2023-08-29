import { Button, Radio } from "antd";
import {Link} from 'react-router-dom'

export default function () {
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
        </>
    )
}