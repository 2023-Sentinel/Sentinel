import { NodeBuilder } from '@baklavajs/core'

export const RouterNode = new NodeBuilder('RouterNode',{
    twoColumn: true,
    width: 300
})
    //노드 이름 설정
    .setName('Router')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOutputInterface('OutputNode')

    .addOption('IPAddress', 'InputOption')
    .addOption('Date', 'InputOption')

    .build()
