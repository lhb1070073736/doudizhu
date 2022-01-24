const {ccclass, property} = cc._decorator;

@ccclass
export default class pukeConfig extends cc.Component {
    static _instance:pukeConfig=null;
    
    //puke元素
    @property(cc.SpriteFrame)
    bg: cc.SpriteFrame = null;
    // @property(cc.SpriteFrame)
    // bigtag: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    gaoguang: cc.SpriteFrame = null;
    // @property(cc.SpriteFrame)
    // leftTop: cc.SpriteFrame = null;
    // @property(cc.SpriteFrame)
    // rightBottom: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    back: cc.SpriteFrame = null;
    //tag
    @property(cc.SpriteFrame)
    bigtag_fangkuai: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    bigtag_caohua: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    bigtag_hongxing: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    bigtag_heitao: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    bigtag_littleGhost: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    bigtag_bigGhost: cc.SpriteFrame = null;
    //ghost
    @property(cc.SpriteFrame)
    ghost_0: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    ghost_1: cc.SpriteFrame = null;
    //blackNumber
    @property(cc.SpriteFrame)
    black_0: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_1: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_2: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_3: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_4: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_5: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_6: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_7: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_8: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_9: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_10: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_11: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    black_12: cc.SpriteFrame = null;
    //RedNumber
    @property(cc.SpriteFrame)
    red_0: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_1: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_2: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_3: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_4: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_5: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_6: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_7: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_8: cc.SpriteFrame = null;    
    @property(cc.SpriteFrame)
    red_9: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_10: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_11: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    red_12: cc.SpriteFrame = null;
    onLoad () {
        //console.log("pukeConfig加载");
        //console.log("pukeConfig onload",this.red_12);
        
    }

    start () {
        //console.log("pukeConfig start",this.red_12);
    }

    // update (dt) {}
    static getInstance():pukeConfig{
        if(!this._instance){
            this._instance=new pukeConfig;
        }
        //this._instance.bg= 
        return this._instance;
    }
}
