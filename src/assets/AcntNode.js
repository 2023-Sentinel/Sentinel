//Account Node
import { NodeBuilder } from '@baklavajs/core'

export const AccountNode = new NodeBuilder('AccountNode')
    //노드 이름 설정
    .setName('Account')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOption('Account Name', 'InputOption')
    .addOption('Date', 'InputOption')
    .addOutputInterface('OutputNode')
    .build()


