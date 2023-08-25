import React from "react";
import { Column, Line, Pie } from "@ant-design/plots";
import { Button, DatePicker, Radio, Select } from "antd";

export default function () {
    const visitorData = [
        {
            date: "Jan 2023",
            visitor: 1200
        },
        {
            date: "Feb 2023",
            visitor: 3200
        },
        {
            date: "Mar 2022",
            visitor: 800
        },
        {
            date: "Apr 2023",
            visitor: 1200
        },
        {
            date: "May 2023",
            visitor: 800
        },
        {
            date: "Jun 2023",
            visitor: 900
        },
        {
            date: "Jul 2023",
            visitor: 1900
        },
        {
            date: "Aug 2023",
            visitor: 900
        },
        {
            date: "Sep 2023",
            visitor: 2100
        },
        {
            date: "Oct 2023",
            visitor: 1300
        },
        {
            date: "Nov 2023",
            visitor: 1800
        },
        {
            date: "Dec 2023",
            visitor: 1200
        },
    ]

    var visitorConfig = {
        data: visitorData,
        xField: "date",
        yField: "visitor",
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };

    const userData = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        }
    ];

    const userConfig = {
        appendPadding: 10,
        data: userData,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };

    return (
        <div style={{ padding: "10px 3%" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button> 5500 Visitors</Button>
                <Button> 200 Tickets</Button>
                <Button> 900 Users</Button>
                <Button> 57 Vendors</Button>
            </div> <br /><br />


            <div style={{ border: "1px solid lightgray", padding: "50px", borderRadius: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <big>Visitors </big>
                    <Select style={{ width: "150px" }} defaultValue={"2023"}>
                        <option value="2023"></option>
                        <option value="2022"></option>
                        <option value="2021"></option>
                    </Select>
                </div> <br />
                <Line {...visitorConfig} />
            </div><br /><br />

            <div className="chart-flex" >

                <div className="chart">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <big>Users</big>
                        <Radio.Group
                            optionType="button"
                            defaultValue={"All"}
                            options={["All", "Active", "Disabled"]}
                        />
                    </div>
                    <Pie {...userConfig} />
                </div>

                <div className="chart">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <big>Tickets </big>
                        <DatePicker defaultPickerValue={22} />
                    </div> <br />
                    <Column {...visitorConfig} />
                </div>

            </div> <br /><br />

        </div>
    )
}

