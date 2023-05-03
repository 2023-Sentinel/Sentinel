import { NodeBuilder } from '@baklavajs/core'

export const RouterNode = new NodeBuilder('RouterNode')
    //노드 이름 설정
    .setName('Router')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOption('IPAddress', 'InputOption')
    .addOption('Date', 'InputOption')
    .addOutputInterface('OutputNode')
    .build()
