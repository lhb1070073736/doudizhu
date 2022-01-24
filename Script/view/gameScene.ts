import PukeSprite from "../model/pukeMar";
const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Prefab)
    pukeFrefab:cc.Prefab=null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.find("Canvas/GameScene").active=true;
        cc.find("Canvas/viewMsgBox").active=false;
        //cc.instantiate(this.pukeFrefab);
    }

    start () {
        //点击返回弹出msgbox
        cc.find("Canvas/GameScene/button/youxi_fanhui").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/viewMsgBox").active=true;
        })
        //msgbox点击取消-->关闭msgbox，
        cc.find("Canvas/viewMsgBox/btnNo").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/viewMsgBox").active=false;
        })
        //msgbox点击关闭按钮-->关闭msgbox
        cc.find("Canvas/viewMsgBox/btnClose").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/viewMsgBox").active=false;
        })
        //msgbox点击确定-->切换入SceneOne
        cc.find("Canvas/viewMsgBox/btnYes").on(cc.Node.EventType.TOUCH_START,function(){
            cc.director.loadScene("SceneOne");
        })
        
        // // cc.find("Canvas/puke/red_0").getComponent(cc.Sprite).spriteFrame=this.node.getComponent("pukeConfig").black_0;
        // let node1 = new cc.Node;
        // cc.find("Canvas/pukePool2").addChild(node1,1,"puke21");
        // node1.addComponent(cc.Sprite);
        // node1.getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/pukePool2/puke2/bg").getComponent(cc.Sprite).spriteFrame;
        // // update (dt) {}
        // let pukeclass = PukeSprite.getInstance();
        // //pukeclass.init();
        // console.log(pukeclass);
        
    }


}
