import pukeConfig from "./pukeConfig";
import * as Com from "./ShuffleConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PukeSprite extends cc.Component {
    static _ins:PukeSprite=null;
    @property(cc.Sprite)
    numberOne: cc.Sprite = null;
    @property(cc.Sprite)
    bg: cc.Sprite = null;
    @property(cc.Sprite)
    tag: cc.Sprite = null;
    @property(cc.Sprite)
    smtag:cc.Sprite=null;
    @property(cc.Sprite)
    gaoguang: cc.Sprite = null;
    @property(cc.Sprite)
    back:cc.Sprite=null;

    isBack:boolean = false;
    pukeScript:any = null;  

    onLoad () {
        this.init();
        
    }

    // start () {
    //     //cc.find("Canvas/puke/bg").getComponent(cc.Sprite).spriteFrame=this.bg.spriteFrame;
    // }

    // update (dt) {}

    changeTag(Tag:Com.tag){
        switch(Tag){
            case Com.tag.bigtag_0:
                this.tag.spriteFrame=this.smtag.spriteFrame =this.pukeScript.bigtag_0;
                break;
            case Com.tag.bigtag_1:
                this.tag.spriteFrame=this.smtag.spriteFrame=this.pukeScript.bigtag_2;
                break;
            case Com.tag.bigtag_2:
                this.tag.spriteFrame=this.smtag.spriteFrame=this.pukeScript.bigtag_2;
                break;
            case Com.tag.bigtag_3:
                this.tag.spriteFrame=this.smtag.spriteFrame=this.pukeScript.bigtag_3;
                break;
            case Com.tag.bigtag_4:
                this.tag.spriteFrame=this.smtag.spriteFrame=this.pukeScript.bigtag_4;
                break;
            case Com.tag.bigtag_5:
                this.tag.spriteFrame=this.smtag.spriteFrame=this.pukeScript.bigtag_5;
                break;
        }
    }

    changeNumber(Number:Com.puke){
        switch(Number){
            case Com.puke.black_0:
                this.numberOne.spriteFrame=this.pukeScript.black_0;
                break;
            case Com.puke.black_1:
                this.numberOne.spriteFrame=this.pukeScript.black_1;
                break;
            case Com.puke.black_2:
                this.numberOne.spriteFrame=this.pukeScript.black_2;
                break;
            case Com.puke.black_3:
                this.numberOne.spriteFrame=this.pukeScript.black_3;
                break;
            case Com.puke.black_4:
                this.numberOne.spriteFrame=this.pukeScript.black_4;
                break;
            case Com.puke.black_5:
                this.numberOne.spriteFrame=this.pukeScript.black_5;
                break;
            case Com.puke.black_6:
                this.numberOne.spriteFrame=this.pukeScript.black_6;
                break;
            case Com.puke.black_7:
                this.numberOne.spriteFrame=this.pukeScript.black_7;
                break;
            case Com.puke.black_8:
                this.numberOne.spriteFrame=this.pukeScript.black_8;
                break;
            case Com.puke.black_9:
                this.numberOne.spriteFrame=this.pukeScript.black_9;
                break;
            case Com.puke.black_10:
                this.numberOne.spriteFrame=this.pukeScript.black_10;
                break;
            case Com.puke.black_11:
                this.numberOne.spriteFrame=this.pukeScript.black_11;
                break;
            case Com.puke.black_12:
                this.numberOne.spriteFrame=this.pukeScript.black_12;
                break;
            case Com.puke.red_0:
                this.numberOne.spriteFrame=this.pukeScript.red_0;
                break;
            case Com.puke.red_1:
                this.numberOne.spriteFrame=this.pukeScript.red_1;
                break;
            case Com.puke.red_2:
                this.numberOne.spriteFrame=this.pukeScript.red_2;
                break;
            case Com.puke.red_3:
                this.numberOne.spriteFrame=this.pukeScript.red_3;
                break;
            case Com.puke.red_4:
                this.numberOne.spriteFrame=this.pukeScript.red_4;
                break;
            case Com.puke.red_5:
                this.numberOne.spriteFrame=this.pukeScript.red_5;
                break;
            case Com.puke.red_6:
                this.numberOne.spriteFrame=this.pukeScript.red_6;
                break;
            case Com.puke.red_7:
                this.numberOne.spriteFrame=this.pukeScript.red_7;
                break;
            case Com.puke.red_8:
                this.numberOne.spriteFrame=this.pukeScript.red_0;
                break;
            case Com.puke.red_9:
                this.numberOne.spriteFrame=this.pukeScript.red_0;
                break;
            case Com.puke.red_10:
                this.numberOne.spriteFrame=this.pukeScript.red_0;
                break;
            case Com.puke.red_11:
                this.numberOne.spriteFrame=this.pukeScript.red_0;
                break;
            case Com.puke.red_12:
                this.numberOne.spriteFrame=this.pukeScript.red_0;
                break;
            case Com.puke.smalltag_4:
                this.numberOne.spriteFrame=this.pukeScript.smalltag_4;
                break;
            case Com.puke.smalltag_5:
                this.numberOne.spriteFrame=this.pukeScript.smalltag_5;
                break;
        }
    }

    init():void{
        this.pukeScript=cc.find("Canvas").getComponent("pukeConfig");  
        this.bg.spriteFrame =this.pukeScript.bg;
        //console.log(this.bg.spriteFrame);
        this.gaoguang.spriteFrame =this.pukeScript.gaoguang;
        this.numberOne.spriteFrame =this.pukeScript.black_1;
        this.back.spriteFrame = this.pukeScript.back;
        this.tag.spriteFrame=this.pukeScript.bigtag_heitao;
        this.smtag.spriteFrame=this.pukeScript.bigtag_heitao;
        this.isShowBack();
    }

    isShowBack(){
        if(this.isBack){
            this.node.getChildByName("poker_back").active=true;
        }else{
            this.node.getChildByName("poker_back").active=false;
        }
    }

    static getInstance(): PukeSprite {
        if(!this._ins){
            this._ins= new PukeSprite;
        }
        return this._ins;
    }
}


