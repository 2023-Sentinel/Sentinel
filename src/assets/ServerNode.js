import { NodeBuilder } from '@baklavajs/core'

export const SVNode = new NodeBuilder('SVNode',{
    twoColumn: true,
    width: 300
})
    //노드 이름 설정
    .setName('Server')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOutputInterface('OutputNode')
    .addOption('IPAddress', 'InputOption')
    .addOption('Date', 'InputOption')

    .build()
