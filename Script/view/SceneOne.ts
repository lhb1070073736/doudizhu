// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //活动
        cc.find("Canvas/background/huodong").on(cc.Node.EventType.TOUCH_START,function(){
            //cc.find("Canvas/background").active=false;
            cc.find("Canvas/activity").active=true;
        })
        cc.find("Canvas/activity/dating_tc_guanbi").on(cc.Node.EventType.TOUCH_START,function(){
           // cc.find("Canvas/background").active=true;
            cc.find("Canvas/activity").active=false;
        })
        //任务
        cc.find("Canvas/background/renwu").on(cc.Node.EventType.TOUCH_START,function(){
            //cc.find("Canvas/background").active=false;
            cc.find("Canvas/task").active=true;
        })
        cc.find("Canvas/task/dating_tc_guanbi").on(cc.Node.EventType.TOUCH_START,function(){
           // cc.find("Canvas/background").active=true;
            cc.find("Canvas/task").active=false;
        })
        //商城
        cc.find("Canvas/background/shangcheng").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/background").active=false;
            cc.find("Canvas/store").active=true;
        })
        cc.find("Canvas/store/dating_shangcheng_kuang/dating_shangcheng_guanbi").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/background").active=true;
            cc.find("Canvas/store").active=false;
        })
        //个人设置
        cc.find("Canvas/background/txk2").on(cc.Node.EventType.TOUCH_START,function(){
            //cc.find("Canvas/background").active=false;
            cc.find("Canvas/personalCenter").active=true;
        })
        cc.find("Canvas/personalCenter/xiaotanchuang_grzx_gb").on(cc.Node.EventType.TOUCH_START,function(){
            //cc.find("Canvas/background").active=true;
            cc.find("Canvas/personalCenter").active=false;
        })
        //设置
        cc.find("Canvas/background/shezhi").on(cc.Node.EventType.TOUCH_START,function(){
            //cc.find("Canvas/background").active=false;
            cc.find("Canvas/set").active=true;
        })
        cc.find("Canvas/set/xiaotanchuang_shezhi_gb").on(cc.Node.EventType.TOUCH_START,function(){
            //cc.find("Canvas/background").active=true;
            cc.find("Canvas/set").active=false;
        })
        //音乐开关
        //开
        cc.find("Canvas/set/xiaotanchuang_shezhi_guan").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/set/xiaotanchuang_shezhi_guan").active=false;
            cc.find("Canvas/set/xiaotanchuang_shezhi_kai").active=true;
        })
        //关
        cc.find("Canvas/set/xiaotanchuang_shezhi_kai").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/set/xiaotanchuang_shezhi_guan").active=true;
            cc.find("Canvas/set/xiaotanchuang_shezhi_kai").active=false;
        })
        //初级场
        cc.find("Canvas/background/node/dating_chujichang").on(cc.Node.EventType.TOUCH_START,function(){
            cc.director.loadScene("GameScene");
        })
        //中级场
        cc.find("Canvas/background/node/dating_zhongjichang").on(cc.Node.EventType.TOUCH_START,function(){
            cc.director.loadScene("GameScene");
        })
        //高级场
        cc.find("Canvas/background/node/dating_gaojichang").on(cc.Node.EventType.TOUCH_START,function(){
            cc.director.loadScene("GameScene");
        })
        //添加防穿组件
        //this.node.addComponent(cc.BlockInputEvents);
    }

    // update (dt) {}
}
