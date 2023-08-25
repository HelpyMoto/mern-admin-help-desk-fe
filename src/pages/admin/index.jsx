import { Button, Radio } from "antd";

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
                <Button type="primary">Create New</Button>
            </div>
        </>
    )
}