// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginScene extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        this.node.getChildByName("background").getChildByName("light").runAction(cc.sequence(cc.rotateTo(5,5*360),cc.callFunc(function(){
            cc.find("Canvas/background/process").active=false;
            cc.find("Canvas/background/light").active=false;
            cc.find("Canvas/background/kaishiyouxi_tex").active=true;
        }
        )));
        
        let i = 0;
        this.schedule(function(){
            cc.find("Canvas/background/process").getComponent(cc.Label).string=i+"%";
           i=i+1;
        },0.05,100,);
        cc.find("Canvas/background/kaishiyouxi_tex").on(cc.Node.EventType.TOUCH_START,function(){
            cc.director.loadScene("SceneOne");
        })
    }

    // update (dt) {}
}
