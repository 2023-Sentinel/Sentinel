import { NodeBuilder } from '@baklavajs/core'

export const PCNode = new NodeBuilder('PCNode')
    //노드 이름 설정
    .setName('PC')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOption('IPAddress', 'InputOption')
    .addOption('Date', 'InputOption')
    /*
    .addOption('Operation', 'SelectOption', 'Add', undefined, {
        items: ['Add', 'Subtract']
    })*/

    .addOutputInterface('OutputNode')
    .build()
