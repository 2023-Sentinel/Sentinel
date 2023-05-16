import { NodeBuilder } from '@baklavajs/core'

export const PPLNode = new NodeBuilder('PPLNode',{
    twoColumn: true,
    width: 300
})
    //노드 이름 설정
    .setName('Person')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOutputInterface('OutputNode')
    .addOption('Person Spec', 'InputOption')
    .addOption('Date', 'InputOption')
    .addInputInterface('MemoInput', "StringOption", "memo", {type:"MemoDot"})

    .build()
