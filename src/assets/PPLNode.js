import { NodeBuilder } from '@baklavajs/core'

export const PPLNode = new NodeBuilder('PPLNode')
    //노드 이름 설정
    .setName('Person')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOption('Person Spec', 'InputOption')
    .addOption('Date', 'InputOption')
    .addOutputInterface('OutputNode')
    .build()
