import { NodeBuilder } from '@baklavajs/core'

export const AtkNode = new NodeBuilder('AtkNode')
    //노드 이름 설정
    .setName('Attacker')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode', 'NumberOption', 1)
    .addOption('Operation', 'SelectOption', 'Add', undefined, {
        items: ['Add', 'Subtract']
    })
    .addOutputInterface('OutputNode')
    .build()
