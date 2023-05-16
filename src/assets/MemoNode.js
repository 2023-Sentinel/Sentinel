import { NodeBuilder } from '@baklavajs/core'

export const MemoNode = new NodeBuilder("MemoNode", {
    twoColumn: true,
    width: 180
})
    .setName("Memo Node")
    .addOutputInterface("MemoConnect",{type:"MemoDot"})

    .addOption("memoarea", "TextareaOption", "MemoTest")
    // .addOption("ButtonOption", "ButtonOption")
    // .addOption("ButtonOption", "TriggerOption",
    //     ()=>{
    //         return {testtext: "this is a test"};
    //     },
    //     "CustomSidebarOption"
    // )

    // .onCalculate(n => {
    //     let value = n.getOptionValue("Memo");
    //     n.getInterface("Memo").value = value;
    // })
    // .addOutputInterface("Memo")
    .build();