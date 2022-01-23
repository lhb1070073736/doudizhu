
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.find("Canvas/GameScene").active=true;
        cc.find("Canvas/viewMsgBox").active=false;
        
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
        
    }

    // update (dt) {}
}
