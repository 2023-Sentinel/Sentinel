//test Node
import { NodeBuilder } from '@baklavajs/core'

export const Memotest = new NodeBuilder('Memotest',{
    twoColumn: true,
    width: 300
})
    //노드 이름 설정
    .setName('Memotest')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOutputInterface('OutputNode')
    .addOption("ButtonOption", "ButtonOption")
    .addOption(
        "ButtonOption",
        "TriggerOption",
        () => {
            return { testtext: "this is a test" };
        },
        "TestSidebarOption"
    )

    .build()


