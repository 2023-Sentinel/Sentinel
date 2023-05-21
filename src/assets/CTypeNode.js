//Account Node
import { NodeBuilder } from '@baklavajs/core'

export const CustomNode = new NodeBuilder('CustomNode',{
    twoColumn: true,
    width: 300
})
    //노드 이름 설정
    .setName('Custom Node')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOutputInterface('OutputNode')
    .addOption('Custom In', 'InputOption')
    .addOption('Custom In2', 'InputOption')
    .addOption('Date', 'InputOption')
    .addInputInterface('MemoInput', "StringOption", "memo", {type:"MemoDot"})
    .build()
