//Attacker Node
import { NodeBuilder } from '@baklavajs/core'

export const AtkNode = new NodeBuilder('AtkNode',{
    twoColumn: true,
    width: 300
})
    //노드 이름 설정
    .setName('Attacker')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOutputInterface('OutputNode')
    .addOption('Attacker Name', 'InputOption')
    .addOption('Date', 'InputOption')
    .addInputInterface('MemoInput', "StringOption", "memo", {type:"MemoDot"})


    .build()


