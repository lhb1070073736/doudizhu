const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.schedule(this.callFun1,5);
        //this.scheduleOnce(this.callFun2,5);
        //let ec =new cc.EventTarget();
        //ec.on("Dead",this.callFun3);
        //this.node.parent.on("Dead",function(){console.log("parent接收死亡")});
        //ec.off("Dead");
        //console.log("发送主角死亡事件");
        //ec.emit("Dead",1,2,3);
        
    }

    

    start () {
        
    }

    // update (dt) {}
    callFun1(){
        console.log("CallFun1");
    }
    callFun2(){
        //console.log("CallFun2");
        //this.unschedule(this.callFun1);
        //this.unscheduleAllCallbacks();
        cc.director.loadScene("SceneOne");
    }
    callFun3(){
        console.log("主角死亡");
    }

    callFun4(cs1,cs2,cs3){
        console.log(cs1);
        console.log(cs2);
        console.log(cs3);
    }

}
