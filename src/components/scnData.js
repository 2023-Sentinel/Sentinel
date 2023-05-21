export default [
    {
        title: "북한 소행의 농협 해킹사건",
        content: "Vue를 이용하면 비누같이 매끈한 앱을 만들 수 있습니다",
        date: "September 24, 2021",
        data:{
            "nodes": [
                {
                    "type": "AtkNode",
                    "id": "node_16846819296030",
                    "name": "Attacker",
                    "options": [
                        [
                            "Attacker Name",
                            "abc"
                        ],
                        [
                            "Date",
                            null
                        ]
                    ],
                    "state": {},
                    "interfaces": [
                        [
                            "InputNode",
                            {
                                "id": "ni_16846819296031",
                                "value": null
                            }
                        ],
                        [
                            "OutputNode",
                            {
                                "id": "ni_16846819296032",
                                "value": null
                            }
                        ],
                        [
                            "MemoInput",
                            {
                                "id": "ni_16846819296033",
                                "value": "memo"
                            }
                        ]
                    ],
                    "position": {
                        "x": 48,
                        "y": 161
                    },
                    "width": 300,
                    "twoColumn": true,
                    "customClasses": ""
                },
                {
                    "type": "RouterNode",
                    "id": "node_16846819314594",
                    "name": "Router",
                    "options": [
                        [
                            "IPAddress",
                            "def"
                        ],
                        [
                            "Date",
                            null
                        ]
                    ],
                    "state": {},
                    "interfaces": [
                        [
                            "InputNode",
                            {
                                "id": "ni_16846819314595",
                                "value": null
                            }
                        ],
                        [
                            "OutputNode",
                            {
                                "id": "ni_16846819314596",
                                "value": null
                            }
                        ],
                        [
                            "MemoInput",
                            {
                                "id": "ni_16846819314597",
                                "value": "memo"
                            }
                        ]
                    ],
                    "position": {
                        "x": 416,
                        "y": 118
                    },
                    "width": 300,
                    "twoColumn": true,
                    "customClasses": ""
                },
                {
                    "type": "PCNode",
                    "id": "node_16846819331138",
                    "name": "PC",
                    "options": [
                        [
                            "IPAddress",
                            "ghi"
                        ],
                        [
                            "Date",
                            null
                        ]
                    ],
                    "state": {},
                    "interfaces": [
                        [
                            "InputNode",
                            {
                                "id": "ni_16846819331149",
                                "value": null
                            }
                        ],
                        [
                            "OutputNode",
                            {
                                "id": "ni_168468193311410",
                                "value": null
                            }
                        ],
                        [
                            "MemoInput",
                            {
                                "id": "ni_168468193311411",
                                "value": "memo"
                            }
                        ]
                    ],
                    "position": {
                        "x": 550,
                        "y": 408
                    },
                    "width": 300,
                    "twoColumn": true,
                    "customClasses": ""
                }
            ],
            "connections": [
                {
                    "id": "168468193498214",
                    "from": "ni_16846819296032",
                    "to": "ni_16846819314595"
                },
                {
                    "id": "168468193662217",
                    "from": "ni_16846819314596",
                    "to": "ni_16846819331149"
                }
            ],
            "panning": {
                "x": 0,
                "y": 0
            },
            "scaling": 1
        },
        number: 0,
    },
    {
        title: "Lapsus 그룹의 APT 공격",
        content: "음식이 아니라 셰프를 직접 배달해드립니다",
        date: "October 20, 2020",
        number: 1,
    },
    {
        title: "신원 미상의 공격자",
        content:
            "거리를 설정하면 가장 가까운 파이터를 소개해드려요! 서로 싸워보세요",
        date: "April 24, 2019",
        number: 2,
    },
];