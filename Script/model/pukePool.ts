import * as Com from "./ShuffleConfig"
const {ccclass, property} = cc._decorator;

@ccclass
export default class pukePool extends cc.Component {
    static _ins:pukePool =null;
    pukeNodeArr:any;//54张牌节点数组
    // playerArr1:any;
    // playerArr2:any;
    // playerArr3:any;
    onLoad () {
        this.pukeNodeArr = [];
        // this.playerArr1=[];
        // this.playerArr2=[];
        // this.playerArr3=[];
        
        var i=0;
        for(i;i<17;i++){
            this.cloneNode1(i);
            this.cloneNode2(i);
            this.cloneNode3(i);
        }

        this.add_hostpuke();

    }

    start () {
        
    }

    cloneNode1(i:number){
        let pukeNode = cc.find("Canvas/pukePool2/puke2")
        let pukePool2 =cc.find("Canvas/pukePool2");
        let cloneNode = cc.instantiate(pukeNode);
        this.pukeNodeArr[i]= cloneNode;
        pukePool2.addChild(cloneNode);
        pukeNode.name="puke2"+i;
        pukeNode.active=true;
        pukeNode.x=0;
        pukeNode.y=200;
        pukeNode.getChildByName("poker_back").active=true;
    }

    cloneNode2(i:number){
        let pukeNode = cc.find("Canvas/pukePool1/puke1")
        let pukePool2 =cc.find("Canvas/pukePool1");
        let cloneNode = cc.instantiate(pukeNode);
        this.pukeNodeArr[i]= cloneNode;
        pukePool2.addChild(cloneNode);
        pukeNode.name="puke1"+i;
        pukeNode.active=true;
        pukeNode.x=0;
        pukeNode.y=0;
        pukeNode.getChildByName("poker_back").active=true;
    }

    cloneNode3(i:number){
        let pukeNode = cc.find("Canvas/pukePool3/puke3")
        let pukePool2 =cc.find("Canvas/pukePool3");
        let cloneNode = cc.instantiate(pukeNode);
        this.pukeNodeArr[i]= cloneNode;
        pukePool2.addChild(cloneNode);
        pukeNode.name="puke3"+i;
        pukeNode.active=true;
        pukeNode.x=0;
        pukeNode.y=0;
        pukeNode.getChildByName("poker_back").active=true;
    }


    add_hostpuke(){
        let pukeNode = cc.find("Canvas/pukePool2/puke2");
        let hostPukePool = cc.find("Canvas/hostPukePool");
        let cloneNode1 = cc.instantiate(pukeNode);
        let cloneNode2 = cc.instantiate(pukeNode);
        let cloneNode3 = cc.instantiate(pukeNode);
        hostPukePool.addChild(cloneNode1);
        hostPukePool.addChild(cloneNode2);
        hostPukePool.addChild(cloneNode3);
        
        cloneNode1.x=-100;
        cloneNode1.y=100;
        cloneNode1.name="host0";
        //cloneNode1.active=true;
        //cloneNode1.getChildByName("poker_back").active=true;
        cloneNode1.scale=0.5;
        
        cloneNode2.x=0;
        cloneNode2.y=100;
        cloneNode2.name="host1";
        //cloneNode2.active=true;
        //cloneNode2.getChildByName("poker_back").active=true;
        cloneNode2.scale=0.5;
        
        cloneNode3.x=100;
        cloneNode3.y=100;
        cloneNode3.name="host2";
        //cloneNode3.active=true;
        //cloneNode3.getChildByName("poker_back").active=true;
        cloneNode3.scale=0.5;
    }
    
    update (dt) {}
    // addPukeNode(path:string,name:string,posx,posy){
    //     //创造puke节点
    //     let node =new cc.Node;
    //     cc.find(path).addChild(node,1,name);
    //     path=path+"/"+name;
    //     cc.find(path).x=posx;
    //     cc.find(path).y=posy;
        
    //     //创造bg子节点并放在puke节点上
    //     let bg =new cc.Node;
    //     cc.find(path).addChild(bg,1,"bg");
    //     let bgpath =path +"/bg";
    //     bg.addComponent(cc.Sprite);
    //     bg.getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/pukePool2/puke2/bg").getComponent(cc.Sprite).spriteFrame;
    //     console.log(bg.getComponent(cc.Sprite).spriteFrame);
    //     bg.scale =0.8;
        
    //     //创造tag节点并放在puke节点上
    //     let tag =new cc.Node;
    //     let tagpath =path+"/tag";
    //     cc.find(path).addChild(tag,1,"tag");
    //     cc.find(tagpath).addComponent(cc.Sprite);
    //     cc.find(tagpath).getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/pukePool2/puke2/tag").getComponent(cc.Sprite).spriteFrame;
    //     tag.x=20;
    //     tag.y=-45;
    //     console.log(tag.position);
    //     console.log(tag.getAnchorPoint());
    //     console.log(tag.scale);
        
        
        
        
        
    //     //创造高光节点并放在puke节点上
    //     let gaoguang =new cc.Node;
    //     let gaogaungpath = path +"/gaoguang";
    //     cc.find(gaogaungpath).addChild(gaoguang);
    //     cc.find(gaogaungpath).addComponent(cc.Sprite);
    //     cc.find(gaogaungpath).getComponent(cc.Sprite).spriteFrame = cc.find("Canvas").getComponent("pukeConfig").gaogaung.spriteFrame;

    //     //创造数字节点并放在puke节点上
    //     let red_0 =new cc.Node;
    //     cc.find(path).addChild(red_0);
    //     cc.find(path).addComponent(cc.Sprite);

    //     //创造smtag节点并放在puke节点上
    //     let smtag =new cc.Node;
    //     cc.find(path).addChild(smtag);
    //     cc.find(path).addComponent(cc.Sprite);
        
    //     //创造paker_back节点并放在puke节点上
    //     let poker_back =new cc.Node;
    //     cc.find(path).addChild(poker_back);
    //     cc.find(path).addComponent(cc.Sprite);

    //     //将各子节点连接到脚本中
    //     //cc.find(path).getComponent("pukeMar").bg.SpriteFrame
    //     console.log(cc.find("Canvas/pukePool2"));
        
    // }

    static getInstance():pukePool{
        if(!this._ins){
            this._ins=new pukePool;
        }
        return this._ins;
    }
}
