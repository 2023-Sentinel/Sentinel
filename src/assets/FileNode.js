//File Node
import { NodeBuilder } from '@baklavajs/core'

export const FLNode = new NodeBuilder('FileNode',{
    twoColumn: true,
    width: 300
})
    //노드 이름 설정
    .setName('File')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOutputInterface('OutputNode')
    .addOption('FileName', 'InputOption')
    .addOption('Date', 'InputOption')
    .build()
