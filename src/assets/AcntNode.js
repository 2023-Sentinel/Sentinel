//Account Node
import { NodeBuilder } from '@baklavajs/core'

export const AccountNode = new NodeBuilder('AccountNode',{
    twoColumn: true,
    width: 300
})
    //노드 이름 설정
    .setName('Account')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOutputInterface('OutputNode')
    .addOption('Account Name', 'InputOption')
    .addOption('Date', 'InputOption')

    .build()


