const {ccclass, property} = cc._decorator;

@ccclass
export default class PukeSprite extends cc.Component {

    @property(cc.Sprite)
    numberOne: cc.Sprite = null;

    @property(cc.Sprite)
    numberTwo: cc.Sprite = null;

    @property(cc.Sprite)
    bg: cc.Sprite = null;

    @property(cc.Sprite)
    tag: cc.Sprite = null;

    @property(cc.Sprite)
    gaoguang: cc.Sprite = null;
    onLoad () {
        cc.loader.loadRes("res/res/plist/poker.plist",function(err,res){
            if(err){
                console.log("poker加载失败",err);
            }
        });
        //this.bg.getComponent(cc.Sprite).spriteFrame= 
    }

    start () {

    }

    // update (dt) {}
}


