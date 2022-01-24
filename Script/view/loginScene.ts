import { audioConfig } from "../model/audioConfig";
import audioMas from "../model/audioMas";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginScene extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        audioMas.getInstace().init();
        cc.loader.loadRes("res/plist/poker.plist/bg.png");
        // cc.loader.loadRes("language.json",function(err,res){
        //     if(err){
        //         console.log("加载失败",err);
        //         return;
        //     }
        //     console.log(res);
        // })
    }

    start () {
        
        //cc.audioEngine.getVolume()
        //audioMas.getInstace().playLoadingSceneBgMusic();
        
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
