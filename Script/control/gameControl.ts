const {ccclass, property} = cc._decorator;

@ccclass
export default class gameControl extends cc.Component {
    pukeNumArr:any=null;
    playerArr1:any=null;
    playerArr2:any=null;
    playerArr3:any=null;
    hostArr:any=null;
    host:any=null;
    onLoad () {
        this.pukeNumArr=[];
        this.playerArr1=[];
        this.playerArr2=[];
        this.playerArr3=[];
        this.hostArr=[];
        this.host=2;
        this.initPukeNumArr();
        this.initHandPuke();
        this.changeHandPuke();
    }

    start () {

    }

    initPukeNumArr(){
        let i=0,j=0;
        let num=0;
        for(i;i<4;i++){
            for(j;j<13;j++){
                num=i*13+j;
                let temp=i*100+j;
                this.pukeNumArr[num]=temp;
            }
            j=0;
        }
        this.pukeNumArr[52]=413;
        this.pukeNumArr[53]=514;
        i=0;   
        for(i;i<54;i++){
            j = Math.round(Math.random()*54); 
            let temp=this.pukeNumArr[i];
            this.pukeNumArr[i]=this.pukeNumArr[j];
            this.pukeNumArr[j]=temp;
        }
    }

    initHandPuke(){
        let i=0;
        let i1=0;
        let i2=0;
        let i3=0;
        for (i;i<51;i++) {
           let temp =i %3;
           if(temp==0){
                this.playerArr1[i1++]=this.pukeNumArr[i];
           }else if(temp==1){
               this.playerArr2[i2++]=this.pukeNumArr[i];
           }else{
               this.playerArr3[i3++]=this.pukeNumArr[i];
           }
        }
        this.hostArr[0]=this.pukeNumArr[51];
        this.hostArr[1]=this.pukeNumArr[52];
        this.hostArr[2]=this.pukeNumArr[53];
        // console.log(this.playerArr1);
        // console.log(this.playerArr2);
        // console.log(this.playerArr3);
        // console.log(this.hostArr);
        
    }

    changeHandPuke(){
        let tagNum=0;
        let num=0;
        let i=0;
        for(i;i<16;i++){
            tagNum=this.playerArr2[i]/100;
            num=this.playerArr2[i]%100;
            tagNum>>=0;
            console.log(tagNum);
            console.log(num);
            this.changeTag(tagNum,1,i,num);
        }
        i=0;
        for(i;i<16;i++){
            tagNum=this.playerArr1[i]/100;
            num=this.playerArr1[i]%100;
            tagNum>>=0;
            console.log(tagNum);
            console.log(num);
            this.changeTag(tagNum,0,i,num);
        }
        i=0;
        for(i;i<16;i++){
            tagNum=this.playerArr3[i]/100;
            num=this.playerArr3[i]%100;
            tagNum>>=0;
            console.log(tagNum);
            console.log(num);
            this.changeTag(tagNum,2,i,num);
        }
        // tagNum=this.playerArr2[i]/100;
        // num=this.playerArr2[i]%100;
        // tagNum>>=0;
        // console.log(tagNum);
        // console.log(num);
        // this.changeTag(tagNum,1,16,num);
    }

    changeTag(tagNum:number,playerNum:number,pukeNum:number,num:number){
        let color=null; //0为黑色，1为红色，2为小鬼，3为大鬼
        let path="Canvas/pukePool";
        let script=null;
        switch(playerNum){
            case 0:
                path=path+"1/puke1";
                break;
            case 1:
                path=path+"2/puke2";
                break;
            case 2:
                path=path+"3/puke3";
                break;
        }
        path=path+pukeNum;
        //console.log("path",path);
        // tag=cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame;
        // smtag=cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame;
        script=cc.find("Canvas").getComponent("pukeConfig");
        console.log(script);
        
        switch(tagNum){
            case 0:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.bigtag_fangkuai;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_fangkuai;
                color =1;
                break;
            case 1:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.bigtag_caohua;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_caohua;
                color =0;
                break;
            case 2:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.bigtag_hongxing;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_hongxing;
                color =1;
                break;
            case 3:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.bigtag_heitao;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_heitao;
                color =0;
                break;
            case 4:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.ghost_0;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_littleGhost;
                cc.find(path).getChildByName("red_0").active =false;
                cc.find(path).getChildByName("smtag").scale=0.8;
                color =2;
                break;
            case 5:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.ghost_1;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_bigGhost;
                cc.find(path).getChildByName("red_0").active =false;
                cc.find(path).getChildByName("smtag").scale=0.8;
                color =3;
                break;
        }


        if(color==0){
            //黑桃草花
            switch(num){
                case 0:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_0;
                    break;
                case 1:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_1;
                    break;
                case 2:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_2;
                    break;
                case 3:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_3;
                    break;
                case 4:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_4;
                    break;
                case 5:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_5;
                    break;
                case 6:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_6;
                    break;
                case 7:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_7;
                    break;
                case 8:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_8;
                    break;
                case 9:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_9;
                    break;
                case 10:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_10;
                    break;
                case 11:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_11;
                    break;
                case 12:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_12;
                    break;
            }
        }else if(color==1){
            //红桃方块
            switch(num){
                case 0:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_0;
                    break;
                case 1:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_1;
                    break;
                case 2:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_2;
                    break;
                case 3:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_3;
                    break;
                case 4:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_4;
                    break;
                case 5:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_5;
                    break;
                case 6:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_6;
                    break;
                case 7:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_7;
                    break;
                case 8:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_8;
                    break;
                case 9:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_9;
                    break;
                case 10:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_10;
                    break;
                case 11:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_11;
                    break;
                case 12:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_12;
                    break;
            }
        }


    }

    // sort(){
    //     for()
    // }

}
