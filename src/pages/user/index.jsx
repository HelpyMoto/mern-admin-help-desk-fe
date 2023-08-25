import { Input, Radio } from "antd";

export default function () {
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
            </div>
        </>
    )
}