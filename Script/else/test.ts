// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.scheduleOnce(function(){
        //    cc.director.loadScene("loginScene")
        //},7);
       // console.log("发送主角死亡事件");
        //cc.director.emit("Dead");
        //this.node.parent.emit("Dead");
        //ec.emit("Dead",1,2,3);
        
    }

    start () {

    }

    // update (dt) {}
}
