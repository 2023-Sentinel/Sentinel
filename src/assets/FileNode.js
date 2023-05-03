//File Node
import { NodeBuilder } from '@baklavajs/core'

export const FLNode = new NodeBuilder('FileNode')
    //노드 이름 설정
    .setName('File')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOption('FileName', 'InputOption')
    .addOption('Date', 'InputOption')
    .addOutputInterface('OutputNode')
    .build()
