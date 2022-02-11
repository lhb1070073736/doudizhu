const {ccclass, property} = cc._decorator;

@ccclass
export default class gameControl extends cc.Component {
    pukeNumArr:any=null;
    playerArr1:any=null;
    num1:number=17;
    num2:number=17;
    num3:number=17;
    num4:number=3;
    playerArr2:any=null;
    playerArr3:any=null;
    hostArr:any=null;
    hostIsplayer:any=null;
    tempHost:any=null;
    host:any=null;
    score:any=1;
    emitPukeNum:any=0;

    onLoad () {
        this.pukeNumArr=[];
        this.playerArr1=[];
        this.playerArr2=[];
        this.playerArr3=[];
        this.hostArr=[];
        
        let self=this;
        cc.find("Canvas/button/youxi_an7").on(cc.Node.EventType.TOUCH_START,function(){
            self.faPai_Animate();
            self.scheduleOnce(function(){
                self.sort();
                self.changeHandPuke();
            },3);
            cc.find("Canvas/button/youxi_an7").active=false;
            self.scheduleOnce(function(){
                cc.find("Canvas/button/youxi_an4").active=true;
                cc.find("Canvas/button/youxi_an5").active=true;
                cc.find("Canvas/button/youxi_an6").active=true;
                cc.find("Canvas/button/youxi_an8").active=true;
                cc.find("Canvas/hostPukePool/host0").active=true;
                cc.find("Canvas/hostPukePool/host0").getChildByName("poker_back").active=true;
                cc.find("Canvas/hostPukePool/host1").active=true;
                cc.find("Canvas/hostPukePool/host1").getChildByName("poker_back").active=true;
                cc.find("Canvas/hostPukePool/host2").active=true;
                cc.find("Canvas/hostPukePool/host2").getChildByName("poker_back").active=true;
            },3);
            
        });

        cc.find("Canvas/button/youxi_an4").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/button/youxi_an4").active=false;
            cc.find("Canvas/button/youxi_an5").active=false;
            cc.find("Canvas/button/youxi_an6").active=false;
            cc.find("Canvas/button/youxi_an8").active=false;
            cc.find("Canvas/button/youxi_an2").active=true;
            cc.find("Canvas/button/youxi_an1").active=true;
            self.addHostPuke();
            self.pukeButton();
            self.score=this.score*1;
            self.hostIsplayer=true;
        })

        cc.find("Canvas/button/youxi_an5").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/button/youxi_an4").active=false;
            cc.find("Canvas/button/youxi_an5").active=false;
            cc.find("Canvas/button/youxi_an6").active=false;
            cc.find("Canvas/button/youxi_an8").active=false;
            cc.find("Canvas/button/youxi_an2").active=true;
            cc.find("Canvas/button/youxi_an1").active=true;
            self.addHostPuke();
            self.pukeButton();
            self.score=this.score*2;
            self.hostIsplayer=true;
        })

        cc.find("Canvas/button/youxi_an6").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/button/youxi_an4").active=false;
            cc.find("Canvas/button/youxi_an5").active=false;
            cc.find("Canvas/button/youxi_an6").active=false;
            cc.find("Canvas/button/youxi_an8").active=false;
            cc.find("Canvas/button/youxi_an2").active=true;
            cc.find("Canvas/button/youxi_an1").active=true;
            self.addHostPuke();
            self.pukeButton();
            self.score=self.score*3;
            self.hostIsplayer=true;
        })

        cc.find("Canvas/button/youxi_an8").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/button/youxi_an4").active=false;
            cc.find("Canvas/button/youxi_an5").active=false;
            cc.find("Canvas/button/youxi_an6").active=false;
            cc.find("Canvas/button/youxi_an8").active=false;
            cc.find("Canvas/hostPukePool").active=false;
            self.pukeButton();
            self.hostIsplayer=false;
            self.game();
        })
        
        //出牌
        cc.find("Canvas/button/youxi_an1").on(cc.Node.EventType.TOUCH_START,function(){
            // self.emit_A();
            // self.emit_AA();
            // self.emit_AAA();
            // self.emit_AAAB();
            self.emit_All();
        })

        cc.find("Canvas/gameoverBox/btnNo").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/gameoverBox").active=false;
            cc.find("Canvas/button/youxi_an7").active=true;
        })

        cc.find("Canvas/gameoverBox/btnYes").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/gameoverBox").active=false;
            cc.find("Canvas/button/youxi_an7").active=true;
        })

        cc.find("Canvas/gameoverBox/btnClose").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/gameoverBox").active=false;
            cc.find("Canvas/button/youxi_an7").active=true;
        })
        
    }

    start () {
        this.initPukeNumArr();
        this.initHandPuke();
        this.changeHandPuke();
    }

    // update(dt: number): void {
    //     this.gameOver();
    // }

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
            j = Math.round(Math.random()*53); 
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
           let temp =i % 3;
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
        
    }

    changeHandPuke(){
        let tagNum=0;
        let num=0;
        let i=0;
        for(i;i<this.num2;i++){
            tagNum=this.playerArr2[i]/100;
            num=this.playerArr2[i]%100;
            tagNum>>=0;
            num>>=0;
            this.changeTag(tagNum,1,i,num);
        }
        i=0;
        for(i;i<this.num1;i++){
            tagNum=this.playerArr1[i]/100;
            num=this.playerArr1[i]%100;
            tagNum>>=0;
            num>>=0;
            this.changeTag(tagNum,0,i,num);
        }
        i=0;
        for(i;i<this.num3;i++){
            tagNum=this.playerArr3[i]/100;
            num=this.playerArr3[i]%100;
            tagNum>>=0;
            num>>=0;
            this.changeTag(tagNum,2,i,num);
        }
        i=0;
        for(i;i<(this.num4);i++){
            tagNum=this.hostArr[i]/100;
            num=this.hostArr[i]%100;
            tagNum>>=0;
            num>>=0;
            this.changeTag(tagNum,3,i,num);
        }
    }
    //花色  player   第几张牌   牌值
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
            case 3:
                path="Canvas/hostPukePool/host";
        }
        path=path+pukeNum;
        script=cc.find("Canvas").getComponent("pukeConfig");
        
        
        switch(tagNum){
            case 0:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.bigtag_fangkuai;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_fangkuai;
                cc.find(path).getChildByName("red_0").active =true;
                cc.find(path).getChildByName("smtag").scale=0.5;
                color =1;
                break;
            case 1:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.bigtag_caohua;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_caohua;
                cc.find(path).getChildByName("red_0").active =true;
                cc.find(path).getChildByName("smtag").scale=0.5;
                color =0;
                break;
            case 2:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.bigtag_hongxing;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_hongxing;
                cc.find(path).getChildByName("red_0").active =true;
                cc.find(path).getChildByName("smtag").scale=0.5;
                color =1;
                break;
            case 3:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.bigtag_heitao;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_heitao;
                cc.find(path).getChildByName("red_0").active =true;
                cc.find(path).getChildByName("smtag").scale=0.5;
                color =0;
                break;
            case 4:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.ghost_0;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_littleGhost;
                cc.find(path).getChildByName("red_0").active =false;
                cc.find(path).getChildByName("smtag").scale=0.8;
                color =2;
                return;
                break;
            case 5:
                cc.find(path).getChildByName("smtag").getComponent(cc.Sprite).spriteFrame=script.ghost_1;
                cc.find(path).getChildByName("tag").getComponent(cc.Sprite).spriteFrame=script.bigtag_bigGhost;
                cc.find(path).getChildByName("red_0").active =false;
                cc.find(path).getChildByName("smtag").scale=0.8;
                color =3;
                return;
                break;
        }


        if(color==0){
            //黑桃草花
            switch(num){
                case 11:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_0;
                    break;
                case 12:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_1;
                    break;
                case 0:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_2;
                    break;
                case 1:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_3;
                    break;
                case 2:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_4;
                    break;
                case 3:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_5;
                    break;
                case 4:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_6;
                    break;
                case 5:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_7;
                    break;
                case 6:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_8;
                    break;
                case 7:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_9;
                    break;
                case 8:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_10;
                    break;
                case 9:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_11;
                    break;
                case 10:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.black_12;
                    break;
            }
        }else if(color==1){
            //红桃方块
            switch(num){
                case 11:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_0;
                    break;
                case 12:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_1;
                    break;
                case 0:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_2;
                    break;
                case 1:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_3;
                    break;
                case 2:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_4;
                    break;
                case 3:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_5;
                    break;
                case 4:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_6;
                    break;
                case 5:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_7;
                    break;
                case 6:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_8;
                    break;
                case 7:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_9;
                    break;
                case 8:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_10;
                    break;
                case 9:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_11;
                    break;
                case 10:
                    cc.find(path).getChildByName("red_0").getComponent(cc.Sprite).spriteFrame=script.red_12;
                    break;
            }
        }


    }

    sort(){
        let i=0;
        let j=0;
        for(i;i<this.num2;i++){
            for(j=i;j<(this.num2);j++){
                
                let y1=this.playerArr2[i]%100;
                y1>>=0;
                
                let y2=this.playerArr2[j]%100;
                y2>>=0;
                if(y2>y1){
                    let temp=this.playerArr2[i];
                    this.playerArr2[i]=this.playerArr2[j];
                    this.playerArr2[j]=temp;
                }
            }
        }
        i=0;
        j=0;
        for(i;i<this.num2;i++){
            for(j=i+1;j<(this.num2);j++){
                let x1=this.playerArr2[i]/100;
                x1>>=0;
                let y1=this.playerArr2[i]%100;
                y1>>=0;
                let x2=this.playerArr2[j]/100;
                x2>>=0;
                let y2=this.playerArr2[j]%100;
                y2>>=0;
                if(y2==y1){
                    if(x2>x1){
                    let temp=this.playerArr2[i];
                    this.playerArr2[i]=this.playerArr2[j];
                    this.playerArr2[j]=temp;
                }}
                break;
            }
        }

        i=0;
        j=0;
        for(i;i<this.num1;i++){
            for(j=i;j<(this.num1);j++){
                
                let y1=this.playerArr1[i]%100;
                y1>>=0;
                
                let y2=this.playerArr1[j]%100;
                y2>>=0;
                if(y2>y1){
                    let temp=this.playerArr1[i];
                    this.playerArr1[i]=this.playerArr1[j];
                    this.playerArr1[j]=temp;
                }
            }
        }
        i=0;
        j=0;
        for(i;i<this.num1;i++){
            for(j=i+1;j<(this.num1);j++){
                let x1=this.playerArr1[i]/100;
                x1>>=0;
                let y1=this.playerArr1[i]%100;
                y1>>=0;
                let x2=this.playerArr1[j]/100;
                x2>>=0;
                let y2=this.playerArr1[j]%100;
                y2>>=0;
                if(y2==y1){
                    if(x2>x1){
                    let temp=this.playerArr1[i];
                    this.playerArr1[i]=this.playerArr1[j];
                    this.playerArr1[j]=temp;
                }}
                break;
            }
        }
         
        
        i=0;
        j=0;
        for(i;i<this.num3;i++){
            for(j=i;j<(this.num3);j++){
                
                let y1=this.playerArr3[i]%100;
                y1>>=0;
                
                let y2=this.playerArr3[j]%100;
                y2>>=0;
                if(y2>y1){
                    let temp=this.playerArr3[i];
                    this.playerArr3[i]=this.playerArr3[j];
                    this.playerArr3[j]=temp;
                }
            }
        }
        i=0;
        j=0;
        for(i;i<this.num3;i++){
            for(j=i+1;j<(this.num3);j++){
                let x1=this.playerArr3[i]/100;
                x1>>=0;
                let y1=this.playerArr3[i]%100;
                y1>>=0;
                let x2=this.playerArr3[j]/100;
                x2>>=0;
                let y2=this.playerArr3[j]%100;
                y2>>=0;
                if(y2==y1){
                    if(x2>x1){
                    let temp=this.playerArr3[i];
                    this.playerArr3[i]=this.playerArr3[j];
                    this.playerArr3[j]=temp;
                }}
                break;
            }
        }

    }

    faPai_Animate(){
        for(let i=0;i<this.num2;i++){
            let path = "Canvas/pukePool2/puke2";
            path=path+i;
            cc.find(path).x=0;
            cc.find(path).y=200;
            cc.find(path).active=true;
            let path2=path+"/poker_back";
            cc.find(path2).active=true;
            this.scheduleOnce(function(){
                cc.tween(cc.find(path)).to(0.5,{position:cc.v2(-250+i*35,0)}).start();
                cc.find(path2).active=false;
            },i*0.1);
        }

        for(let i=0;i<this.num1;i++){
            let path = "Canvas/pukePool1/puke1";
            path=path+i;
            cc.find(path).active=true;
            let path2=path+"/poker_back";
            cc.find(path2).active=true;
            this.scheduleOnce(function(){
                cc.tween(cc.find(path)).to(0.5,{position:cc.v2(-320,45)}).start();
                cc.find(path2).active=true;
                cc.find("Canvas/handPuke1").getComponent(cc.Label).string= i+1+" ";
            },i*0.1);
            
        }

        for(let i=0;i<this.num3;i++){
            let path = "Canvas/pukePool3/puke3";
            path=path+i;
            cc.find(path).active=true;
            let path2=path+"/poker_back";
            cc.find(path2).active=true;
            this.scheduleOnce(function(){
                cc.tween(cc.find(path)).to(0.5,{position:cc.v2(340,25)}).start();
                cc.find(path2).active=true;
                cc.find("Canvas/handPuke3").getComponent(cc.Label).string= i+1+" ";
            },i*0.1);
        }
    }

    addHostPuke(){
        this.scheduleOnce(function(){
            cc.find("Canvas/hostPukePool").active=false;
        },1)
        cc.find("Canvas/hostPukePool/host1").getChildByName("poker_back").active=false;
        cc.find("Canvas/hostPukePool/host2").getChildByName("poker_back").active=false;
        cc.find("Canvas/hostPukePool/host0").getChildByName("poker_back").active=false;
        let puke1=cc.instantiate(cc.find("Canvas/hostPukePool/host0"));
        let puke2=cc.instantiate(cc.find("Canvas/hostPukePool/host1"));
        let puke3=cc.instantiate(cc.find("Canvas/hostPukePool/host2"));
        cc.find("Canvas/pukePool2").addChild(puke1);
        cc.find("Canvas/pukePool2").addChild(puke2);
        cc.find("Canvas/pukePool2").addChild(puke3);
        puke1.name="puke217";
        puke2.name="puke218";
        puke3.name="puke219";
        puke1.getChildByName("poker_back").active=false;
        puke2.getChildByName("poker_back").active=false;
        puke3.getChildByName("poker_back").active=false;
        puke1.scale=0.8;
        puke2.scale=0.8;
        puke3.scale=0.8;
        puke1.x=345;
        puke2.x=380;
        puke3.x=415;
        puke1.y=0;
        puke2.y=0;
        puke3.y=0;
        this.num2+=3;
        this.playerArr2[17]=this.hostArr[0];
        this.playerArr2[18]=this.hostArr[1];
        this.playerArr2[19]=this.hostArr[2];
        this.changeHandPuke();
        this.scheduleOnce(function(){
            this.sort();
            this.changeHandPuke();
        },2);
        
    }

    addHostPuke1(playerNum:any){
        this.scheduleOnce(function(){
            cc.find("Canvas/hostPukePool").active=false;
        },1)
        let pathAll = "Canvas/pukePool"+playerNum;
        
        let puke={};
        for(let i=0;i<3;i++){
            let path = "Canvas/hostPukePool/host";
            path=path+i;
            cc.find(path).getChildByName("poker_back").active=false;
            puke[i]=cc.instantiate(cc.find(path));
            cc.find(pathAll).addChild(puke[i]);
            let temp=i+17;
            puke[i].name="puke"+playerNum+temp;
            puke[i].getChildByName("poker_back").active=true;
            puke[i].scale=0.5;
            if(playerNum==1){
                puke[i].x=-320;
                puke[i].y=45;
                cc.find("Canvas/handPuke1").getComponent(cc.Label).string="20";
            }
            if(playerNum==3){
                puke[i].x=340;
                puke[i].y=25;
                cc.find("Canvas/handPuke3").getComponent(cc.Label).string="20";
            }
        }
    }

    pukeButton(){
        for(let i=0;i<this.num2;i++){
            let path="Canvas/pukePool2/puke2";
            path=path+i;
            cc.find(path).on(cc.Node.EventType.TOUCH_START,function(){
                let y = cc.find(path).y;
                //console.log(i,y,path);
                if(y==0){
                    cc.find(path).y += 40;
                }else if(y==40){
                    cc.find(path).y -= 40;
                }
            })
        }
        //console.log(cc.find("Canvas/pukePool2/puke20"));
        
        // cc.find("Canvas/pukePool2/puke20").on(cc.Node.EventType.TOUCH_START,function(){
        //     let y = cc.find("Canvas/pukePool2/puke20").y;
        //     //console.log(i,y,path);
        //     if(y==0){
        //         cc.find("Canvas/pukePool2/puke20").y += 40;
        //     }else if(y==40){
        //         cc.find("Canvas/pukePool2/puke20").y -= 40;
        //     }
        // });
        // cc.find("Canvas/pukePool2/puke21").on(cc.Node.EventType.TOUCH_START,function(){
        //     let y = cc.find("Canvas/pukePool2/puke21").y;
        //     //console.log(i,y,path);
        //     if(y==0){
        //         cc.find("Canvas/pukePool2/puke21").y += 40;
        //     }else if(y==40){
        //         cc.find("Canvas/pukePool2/puke21").y -= 40;
        //     }
        // });
    }

    // emit_A(){
    //     let self =this;
    //     if(this.selectPukeNum()==1){
    //         let node1=null;
    //         let i=0;
    //         let temp=0;
    //         for(i;i<this.num2;i++){
    //             let path ="Canvas/pukePool2/puke2";
    //             path +=i;
    //             if(cc.find(path).y == 40){
    //                 node1=cc.find(path);
    //                 temp=this.playerArr2[i];
    //                 break;
    //             }
    //         }
    //         cc.tween(node1).to(0.2,{scale:0.5,position:cc.v2(0,350)}).start();
    //         this.scheduleOnce(function(){
    //             node1.x=-250+i*35;
    //             for(;i<self.num2-1;i++){
    //                 self.playerArr2[i]=self.playerArr2[i+1];
    //             }
    //             console.log(self.num2-1);
                
    //             console.log(self.playerArr2[self.num2-1]);
    //             self.playerArr2[self.num2-1]=temp;
    //             console.log(self.playerArr2[self.num2-1]);
    //             node1.y=0;
    //             node1.scale=0.8;
    //             let path = "Canvas/pukePool2/puke2" + i;
    //             cc.find(path).scale=0.5;
    //             cc.find(path).x=0;
    //             cc.find(path).y=350;
    //             self.changeHandPuke();
    //             self.num2--;
    //             self.scheduleOnce(function(){
    //                 cc.find(path).active=false;
    //             },3);
    //         },1);
            
    //     }
    // }

    // emit_AA(){
    //     let self =this;
    //     if(this.selectPukeNum()==2 && this.selectPuke_AAIsis()){
    //         let node={};
    //         let temp={};
    //         let pukeNum={};
    //         let i=0;
    //         for(i;i<this.num2;i++){
    //             let path ="Canvas/pukePool2/puke2";
    //             path +=i;
    //             if(cc.find(path).y == 40){
    //                 if(node[0]!=undefined){
    //                     node[1]=cc.find(path);
    //                     pukeNum[1]=i;
    //                 }else{
    //                     node[0]=cc.find(path);
    //                     pukeNum[0]=i;
    //                 }

    //                 if(temp[0]!=undefined){
    //                     temp[1]=this.playerArr2[i];
    //                 }else{
    //                     temp[0]=this.playerArr2[i];
    //                 }
    //             }
    //         }
    //         cc.tween(node[0]).to(0.2,{scale:0.5,position:cc.v2(0,350)}).start();
    //         cc.tween(node[1]).to(0.2,{scale:0.5,position:cc.v2(35,350)}).start();
            
    //         this.scheduleOnce(function(){

    //             for(let i1=0;i1<2;i1++){
    //                 node[i1].x=-250+pukeNum[i1]*35;
    //                 node[i1].y=0;
    //                 node[i1].scale=0.8;
    //                 self.playerArr2[pukeNum[i1]]=-1;
    //             }

    //             for(let j=0;j<this.num2;j++){
    //                 if(self.playerArr2[j]==-1){
    //                     for(let k=j+1;k<this.num2;k++){
    //                         if(self.playerArr2[k]!=-1){
    //                             self.playerArr2[j]=self.playerArr2[k];
    //                             self.playerArr2[k]=-1;
    //                             break;
    //                         }
    //                     }   
    //                 }
    //             }


    //             self.playerArr2[self.num2-2]=temp[0];
    //             self.playerArr2[self.num2-1]=temp[1];

    //             i=self.num2-2;
    //             for(let j=0;j<2;j++){
    //                 let path = "Canvas/pukePool2/puke2" + i;
    //                 i++;
    //                 cc.find(path).scale=0.5;
    //                 cc.find(path).x=35*j;
    //                 cc.find(path).y=350;
    //             }

    //             self.changeHandPuke();
    //             i=self.num2-2;
    //             self.num2-=2;

    //             self.scheduleOnce(function(){
    //                 for(let j=0;j<2;j++){
    //                     let path = "Canvas/pukePool2/puke2" + i;
    //                     i++;
    //                     cc.find(path).active=false;
    //                 }
    //             },3);
    //         },1)
            
    //     }
    // }

    // emit_AAA(){
    //     let self = this;
    //     if(this.selectPukeNum()==3 && this.selectPuke_AAAIsis()){
    //         let node={};
    //         let temp={};
    //         let pukeNum={};
    //         let i=0;
    //         for(i;i<this.num2;i++){
    //             let path ="Canvas/pukePool2/puke2";
    //             path +=i;
    //             if(cc.find(path).y == 40){
    //                 if(node[0]!=undefined){
    //                     if(node[1]!=undefined){
    //                         node[2]=cc.find(path);
    //                         pukeNum[2]=i;
    //                     }else{
    //                         node[1]=cc.find(path);
    //                         pukeNum[1]=i;
    //                     }
    //                 }else{
    //                     node[0]=cc.find(path);
    //                     pukeNum[0]=i;
    //                 }

    //                 if(temp[0]!=undefined){
    //                     if(temp[1]!=undefined){
    //                         temp[2]=this.playerArr2[i];
    //                     }else{
    //                         temp[1]=this.playerArr2[i];
    //                     }
    //                 }else{
    //                     temp[0]=this.playerArr2[i];
    //                 }
    //             }
    //         }
    //         cc.tween(node[0]).to(0.2,{scale:0.5,position:cc.v2(0,350)}).start();
    //         cc.tween(node[1]).to(0.2,{scale:0.5,position:cc.v2(35,350)}).start();
    //         cc.tween(node[2]).to(0.2,{scale:0.5,position:cc.v2(70,350)}).start();
            
    
    //         this.scheduleOnce(function(){

    //             for(let i1=0;i1<3;i1++){
    //                 node[i1].x=-250+pukeNum[i1]*35;
    //                 node[i1].y=0;
    //                 node[i1].scale=0.8;
    //                 self.playerArr2[pukeNum[i1]]=-1;
    //             }

    //             for(let j=0;j<this.num2;j++){
    //                 if(self.playerArr2[j]==-1){
    //                     for(let k=j+1;k<this.num2;k++){
    //                         if(self.playerArr2[k]!=-1){
    //                             self.playerArr2[j]=self.playerArr2[k];
    //                             self.playerArr2[k]=-1;
    //                             break;
    //                         }
    //                     }   
    //                 }
    //             }


                
    //             self.playerArr2[self.num2-3]=temp[0];
    //             self.playerArr2[self.num2-2]=temp[1];
    //             self.playerArr2[self.num2-1]=temp[2];

    //             i=self.num2-3;
    //             for(let j=0;j<3;j++){
    //                 let path = "Canvas/pukePool2/puke2" + i;
    //                 i++;
    //                 cc.find(path).scale=0.5;
    //                 cc.find(path).x=35*j;
    //                 cc.find(path).y=350;
    //             }

    //             self.changeHandPuke();
    //             i=self.num2-3;
    //             self.num2-=3;

    //             self.scheduleOnce(function(){
    //                 for(let j=0;j<3;j++){
    //                     let path = "Canvas/pukePool2/puke2" + i;
    //                     i++;
    //                     cc.find(path).active=false;
    //                 }
    //             },3);
    //         },1)
    //     }
    // }

    // emit_AAAB(){
    //     let self = this;
    //     if(this.selectPukeNum()==4 && this.selecPuke_AAABIsis()){
    //         let node={};
    //         let temp={};
    //         let pukeNum={};
    //         let i=0;
    //         for(i;i<this.num2;i++){
    //             let path ="Canvas/pukePool2/puke2";
    //             path +=i;
    //             if(cc.find(path).y == 40){
    //                 if(node[0]!=undefined){
    //                     if(node[1]!=undefined){
    //                         if(node[2]!=undefined){
    //                             node[3]=cc.find(path);
    //                             pukeNum[3]=i;
    //                         }else{
    //                             node[2]=cc.find(path);
    //                             pukeNum[2]=i;
    //                         }
    //                     }else{
    //                         node[1]=cc.find(path);
    //                         pukeNum[1]=i;
    //                     }
    //                 }else{
    //                     node[0]=cc.find(path);
    //                     pukeNum[0]=i;
    //                 }

    //                 if(temp[0]!=undefined){
    //                     if(temp[1]!=undefined){
    //                         if(temp[2]!=undefined){
    //                             temp[3]=this.playerArr2[i];
    //                         }else{
    //                             temp[2]=this.playerArr2[i];
    //                         }
    //                     }else{
    //                         temp[1]=this.playerArr2[i];
    //                     }
    //                 }else{
    //                     temp[0]=this.playerArr2[i];
    //                 }
    //             }
    //         }
    //         cc.tween(node[0]).to(0.2,{scale:0.5,position:cc.v2(0,350)}).start();
    //         cc.tween(node[1]).to(0.2,{scale:0.5,position:cc.v2(35,350)}).start();
    //         cc.tween(node[2]).to(0.2,{scale:0.5,position:cc.v2(70,350)}).start();
    //         cc.tween(node[3]).to(0.2,{scale:0.5,position:cc.v2(105,350)}).start();
    
    //         this.scheduleOnce(function(){

    //             for(let i1=0;i1<4;i1++){
    //                 node[i1].x=-250+pukeNum[i1]*35;
    //                 node[i1].y=0;
    //                 node[i1].scale=0.8;
    //                 self.playerArr2[pukeNum[i1]]=-1;
    //             }

    //             for(let j=0;j<this.num2;j++){
    //                 if(self.playerArr2[j]==-1){
    //                     for(let k=j+1;k<this.num2;k++){
    //                         if(self.playerArr2[k]!=-1){
    //                             self.playerArr2[j]=self.playerArr2[k];
    //                             self.playerArr2[k]=-1;
    //                             break;
    //                         }
    //                     }   
    //                 }
    //             }


    //             self.playerArr2[self.num2-4]=temp[0];
    //             self.playerArr2[self.num2-3]=temp[1];
    //             self.playerArr2[self.num2-2]=temp[2];
    //             self.playerArr2[self.num2-1]=temp[3];

    //             i=self.num2-4;
    //             for(let j=0;j<4;j++){
    //                 let path = "Canvas/pukePool2/puke2" + i;
    //                 i++;
    //                 cc.find(path).scale=0.5;
    //                 cc.find(path).x=35*j;
    //                 cc.find(path).y=350;
    //             }

    //             self.changeHandPuke();
    //             i=self.num2-4;
    //             self.num2-=4;

    //             self.scheduleOnce(function(){
    //                 for(let j=0;j<4;j++){
    //                     let path = "Canvas/pukePool2/puke2" + i;
    //                     i++;
    //                     cc.find(path).active=false;
    //                 }
    //             },3);
    //         },1)
    //     }
    // }

    emit_All(){
        let selectNum = this.selectPukeNum();
        let isCanOut:boolean =false;
        let self =this;
        switch(selectNum){
            case 1:
                isCanOut=true;
                break;
            case 2:
                isCanOut= self.selectPuke_AAIsis();
                break;
            case 3:
                isCanOut= self.selectPuke_AAAIsis();
                break;
            case 4:
                isCanOut= self.selecPuke_AAABIsis() || self.selecPuke_AAAAIsis();
                break;
            case 5:
                isCanOut=self.selecPuke_AAABBIsis() || self.selecPuke_ABCDEIsis();
                break;
            case 6:
                isCanOut=self.selecPuke_AABBCCIsis() || self.selecPuke_ABCDEFIsis() || self.selecPuke_AAABBBsis();
                break;
            case 7:
                isCanOut=self.selecPuke_ABCDEFGIsis();
                break;
            case 8:
                isCanOut=self.selecPuke_ABCDEFGHIsis() || self.selecPuke_AABBCCDDIsis();
                break;
            case 9:
                isCanOut=self.selecPuke_Asis9() || self.selecPuke_AAABBBCCCsis();
                break;
            case 10:
                isCanOut=self.selecPuke_Asis10()  || self.selecPuke_AABBCCDDEEIsis();
                break;
            case 11:
                isCanOut=self.selecPuke_Asis11();
                break;
            case 12:
                isCanOut =self.selecPuke_Asis12() || self.selecPuke_AABBCCDDEEFFIsis() || self.selecPuke_AAABBBCCCDDDsis();
                break;
            case 13:
                isCanOut =self.selecPuke_AIsis13();
                break;
            case 14:
                isCanOut = self.selecPuke_AABBCCDDEEFFGGIsis();
                break;
            case 15:
                isCanOut=self.selecPuke_AAABBBCCCDDDEEEsis();
                break;
            case 16:
                isCanOut=self.selecPuke_AABBCCDDEEFFGGHHIsis();
                break;
            case 18:
                isCanOut=self.selecPuke_AABBCCDDEEFFGGHHIIIsis() || self.selecPuke_AAABBBCCCDDDEEEFFFsis();
                break;
            case 20:
                isCanOut=self.selecPuke_AABBCCDDEEFFGGHHIIJJIsis();
                break;
        }

        if(isCanOut){
            let node={};
            let temp={};
            let pukeNum={};
            let i=0;
            let j=0;
            for(;i<this.num2;i++){
                let path ="Canvas/pukePool2/puke2";
                path +=i;
                if(cc.find(path).y == 40){
                    node[j]=cc.find(path);
                    pukeNum[j]=i;
                    temp[j]=this.playerArr2[i];
                    j++;
                }
            }
            for(let k=0;k<selectNum;k++){
                cc.tween(node[k]).to(0.2,{scale:0.5,position:cc.v2(35*k,350)}).start();
            }
            this.scheduleOnce(function(){

                for(let i1=0;i1<selectNum;i1++){
                    node[i1].x=-250+pukeNum[i1]*35;
                    node[i1].y=0;
                    node[i1].scale=0.8;
                    self.playerArr2[pukeNum[i1]]=-1;
                }

                for(let j=0;j<this.num2;j++){
                    if(self.playerArr2[j]==-1){
                        for(let k=j+1;k<this.num2;k++){
                            if(self.playerArr2[k]!=-1){
                                self.playerArr2[j]=self.playerArr2[k];
                                self.playerArr2[k]=-1;
                                break;
                            }
                        }   
                    }
                }


                for(let k=1;k<=selectNum;k++){
                    self.playerArr2[self.num2-k]=temp[selectNum-k];
                }

                i=self.num2-selectNum;
                for(let j=0;j<selectNum;j++){
                    let path = "Canvas/pukePool2/puke2" + i;
                    i++;
                    cc.find(path).scale=0.5;
                    cc.find(path).x=35*j;
                    cc.find(path).y=350;
                }

                self.changeHandPuke();
                i=self.num2-selectNum;
                self.num2-=selectNum;

                self.scheduleOnce(function(){
                    for(let j=0;j<selectNum;j++){
                        let path = "Canvas/pukePool2/puke2" + i;
                        i++;
                        cc.find(path).active=false;
                    }
                },3);

            },1)    
        }
    }

    selectPukeNum():number{
        let temp=0;
        for(let i=0;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp+=1;
            }
        }
        return temp;
    }

    selectPuke_AAIsis():boolean{
        let i=0;
        let temp1;
        let temp2;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                if(temp1!=undefined){
                    temp2=this.playerArr2[i]%100;
                }else{
                    temp1=this.playerArr2[i]%100;
                }
            }
        }
        
        if(temp1==temp2){
            return true;
        }
        return false;
    }

    selectPuke_AAAIsis():boolean{
        let i=0;
        let temp1;
        let temp2;
        let temp3;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                if(temp1!=undefined){
                    if(temp2!=undefined){
                        temp3=this.playerArr2[i]%100;
                    }else{
                        temp2=this.playerArr2[i]%100;
                    }
                }else{
                    temp1=this.playerArr2[i]%100;
                }
            }
        }
        if(temp1==temp2 && temp1==temp3){
            return true;
        }
        return false;
    }

    selecPuke_AAABIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if(temp[0]==temp[1] && temp[0]==temp[2] && temp[0]!=temp[3]){
            return true;
        }
        if(temp[0]!=temp[1] && temp[1]==temp[2] && temp[1]==temp[3]){
            return true;
        }
        return false;
    }

    selecPuke_AAABBIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if(temp[0]==temp[1]&& temp[0]!=temp[2] && temp[2]==temp[3] && temp[2]==temp[4]){
            return true;
        }
        if(temp[0]==temp[1] && temp[1]==temp[2] && temp[1]!=temp[3] && temp[3]==temp[4]){
            return true;
        }
        return false;
    }

    selecPuke_AAAAIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if(temp[0]==temp[1] && temp[0]==temp[2] && temp[0]==temp[3] ){
            return true;
        }
        return false;
    }

    selecPuke_ABCDEIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if((temp[0]-1)==temp[1] && (temp[1]-1)==temp[2] && (temp[2]-1)==temp[3] && (temp[3]-1)==temp[4] ){
            return true;
        }
        return false;
    }

    selecPuke_AABBCCIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if( temp[0]=temp[1] && (temp[1]-1)==temp[2] && temp[2]==temp[3] && (temp[3]-1)==temp[4] && temp[4]==temp[5] ){
            return true;
        }
        return false;
    }

    selecPuke_ABCDEFIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if((temp[0]-1)==temp[1] && (temp[1]-1)==temp[2] && (temp[2]-1)==temp[3] && (temp[3]-1)==temp[4] && (temp[4]-1)==temp[5] ){
            return true;
        }
        return false;
    }

    selecPuke_AAABBBsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if(temp[0]==temp[1] && temp[0]==temp[2] && (temp[0]-1)==temp[3] && temp[3]==temp[4] && temp[3]==temp[5] ){
            return true;
        }
        return false;
    }

    selecPuke_ABCDEFGIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if((temp[0]-1)==temp[1] && (temp[1]-1)==temp[2] && (temp[2]-1)==temp[3] && (temp[3]-1)==temp[4] && (temp[4]-1)==temp[5] && (temp[5]-1)==temp[6]){
            return true;
        }
        return false;
    }

    selecPuke_ABCDEFGHIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if((temp[0]-1)==temp[1] && (temp[1]-1)==temp[2] && (temp[2]-1)==temp[3] && (temp[3]-1)==temp[4] && (temp[4]-1)==temp[5] && (temp[5]-1)==temp[6] && (temp[6]-1)==temp[7]){
            return true;
        }
        return false;
    }

    selecPuke_AABBCCDDIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if( temp[0]=temp[1] && (temp[1]-1)==temp[2] && temp[2]==temp[3] && (temp[3]-1)==temp[4] && temp[4]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7]){
            return true;
        }
        return false;
    }

    selecPuke_Asis9():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if((temp[0]-1)==temp[1] && (temp[1]-1)==temp[2] && (temp[2]-1)==temp[3] && (temp[3]-1)==temp[4] && (temp[4]-1)==temp[5] && (temp[5]-1)==temp[6] && (temp[6]-1)==temp[7] && (temp[7]-1)==temp[8]){
            return true;
        }
        return false;
    }

    selecPuke_AAABBBCCCsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if(temp[0]==temp[1] && temp[0]==temp[2] && (temp[0]-1)==temp[3] && temp[3]==temp[4] && temp[3]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7] && temp[6]==temp[8]){
            return true;
        }
        return false;
    }

    selecPuke_Asis10():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if((temp[0]-1)==temp[1] && (temp[1]-1)==temp[2] && (temp[2]-1)==temp[3] && (temp[3]-1)==temp[4] && (temp[4]-1)==temp[5] && (temp[5]-1)==temp[6] && (temp[6]-1)==temp[7] && (temp[7]-1)==temp[8] && (temp[8]-1)==temp[9]){
            return true;
        }
        return false;
    }

    selecPuke_AABBCCDDEEIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if( temp[0]=temp[1] && (temp[1]-1)==temp[2] && temp[2]==temp[3] && (temp[3]-1)==temp[4] && temp[4]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7] && (temp[7]-1)==temp[8] && temp[8]==temp[9]){
            return true;
        }
        return false;
    }

    selecPuke_Asis11():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if((temp[0]-1)==temp[1] && (temp[1]-1)==temp[2] && (temp[2]-1)==temp[3] && (temp[3]-1)==temp[4] && (temp[4]-1)==temp[5] && (temp[5]-1)==temp[6] && (temp[6]-1)==temp[7] && (temp[7]-1)==temp[8] && (temp[8]-1)==temp[9] && (temp[9]-1)==temp[10]){
            return true;
        }
        return false;
    }

    selecPuke_Asis12():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if((temp[0]-1)==temp[1] && (temp[1]-1)==temp[2] && (temp[2]-1)==temp[3] && (temp[3]-1)==temp[4] && (temp[4]-1)==temp[5] && (temp[5]-1)==temp[6] && (temp[6]-1)==temp[7] && (temp[7]-1)==temp[8] && (temp[8]-1)==temp[9] && (temp[9]-1)==temp[10] && (temp[10]-1)==temp[11]){
            return true;
        }
        return false;
    }

    selecPuke_AABBCCDDEEFFIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if( temp[0]=temp[1] && (temp[1]-1)==temp[2] && temp[2]==temp[3] && (temp[3]-1)==temp[4] && temp[4]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7] && (temp[7]-1)==temp[8] && temp[8]==temp[9] && (temp[9]-1)==temp[10] && temp[10]==temp[11]){
            return true;
        }
        return false;
    }

    selecPuke_AAABBBCCCDDDsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if(temp[0]==temp[1] && temp[0]==temp[2] && (temp[0]-1)==temp[3] && temp[3]==temp[4] && temp[3]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7] && temp[6]==temp[8] && (temp[8]-1)==temp[9] && temp[9]==temp[10] && temp[9]==temp[11]){
            return true;
        }
        return false;
    }

    selecPuke_AIsis13():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        for(let k=0;k<13;k++){
            if(temp[k]!=(12-k)){
                return false;
            }
        }
        return true;
    }

    selecPuke_AABBCCDDEEFFGGIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if( temp[0]=temp[1] && (temp[1]-1)==temp[2] && temp[2]==temp[3] && (temp[3]-1)==temp[4] && temp[4]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7] && (temp[7]-1)==temp[8] && temp[8]==temp[9] && (temp[9]-1)==temp[10] && temp[10]==temp[11] && (temp[11]-1)==temp[12] && temp[12]==temp[13]){
            return true;
        }
        return false;
    }

    selecPuke_AAABBBCCCDDDEEEsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if(temp[0]==temp[1] && temp[0]==temp[2] && (temp[0]-1)==temp[3] && temp[3]==temp[4] && temp[3]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7] && temp[6]==temp[8] && (temp[8]-1)==temp[9] && temp[9]==temp[10] && temp[9]==temp[11] && (temp[11]-1)==temp[12] && temp[12]==temp[13] && temp[12]==temp[14]){
            return true;
        }
        return false;
    }

    selecPuke_AABBCCDDEEFFGGHHIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if( temp[0]=temp[1] && (temp[1]-1)==temp[2] && temp[2]==temp[3] && (temp[3]-1)==temp[4] && temp[4]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7] && (temp[7]-1)==temp[8] && temp[8]==temp[9] && (temp[9]-1)==temp[10] && temp[10]==temp[11] && (temp[11]-1)==temp[12] && temp[12]==temp[13] && (temp[13]-1)==temp[14] && temp[14]==temp[15]){
            return true;
        }
        return false;
    }

    selecPuke_AABBCCDDEEFFGGHHIIIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if( temp[0]=temp[1] && (temp[1]-1)==temp[2] && temp[2]==temp[3] && (temp[3]-1)==temp[4] && temp[4]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7] && (temp[7]-1)==temp[8] && temp[8]==temp[9] && (temp[9]-1)==temp[10] && temp[10]==temp[11] && (temp[11]-1)==temp[12] && temp[12]==temp[13] && (temp[13]-1)==temp[14] && temp[14]==temp[15] && (temp[15]-1)==temp[16] && temp[16]==temp[17]){
            return true;
        }
        return false;
    }

    selecPuke_AAABBBCCCDDDEEEFFFsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if(temp[0]==temp[1] && temp[0]==temp[2] && (temp[0]-1)==temp[3] && temp[3]==temp[4] && temp[3]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7] && temp[6]==temp[8] && (temp[8]-1)==temp[9] && temp[9]==temp[10] && temp[9]==temp[11] && (temp[11]-1)==temp[12] && temp[12]==temp[13] && temp[12]==temp[14] && (temp[14]-1)==temp[15] && temp[15]==temp[16] && temp[15]==temp[17]){
            return true;
        }
        return false;
    }

    selecPuke_AABBCCDDEEFFGGHHIIJJIsis():boolean{
        let i=0;
        let temp={};
        let j=0;
        for(i;i<this.num2;i++){
            let path ="Canvas/pukePool2/puke2";
            path +=i;
            if(cc.find(path).y == 40){
                temp[j++]=this.playerArr2[i]%100;
            }
        }
        if( temp[0]=temp[1] && (temp[1]-1)==temp[2] && temp[2]==temp[3] && (temp[3]-1)==temp[4] && temp[4]==temp[5] && (temp[5]-1)==temp[6] && temp[6]==temp[7] && (temp[7]-1)==temp[8] && temp[8]==temp[9] && (temp[9]-1)==temp[10] && temp[10]==temp[11] && (temp[11]-1)==temp[12] && temp[12]==temp[13] && (temp[13]-1)==temp[14] && temp[14]==temp[15] && (temp[15]-1)==temp[16] && temp[16]==temp[17] && (temp[17]-1)==temp[18] && temp[18]==temp[19]){
            return true;
        }
        return false;
    }

    gameOver(){
        if(this.num2==0){
            cc.find("Canvas/button").active=false;
            cc.find("Canvas/gameoverBox").active=true;
        }
    }

    game(){
        let self =this;
        //确认地主、无地主时重新洗牌
        for(let i=0;i<999;i++){
            let hostIsPlayer1 = Math.round(Math.random()*1);
            if(hostIsPlayer1==1){
                this.host=1;
            }
            let hostIsPlayer3 = Math.round(Math.random()*1);
            if(hostIsPlayer3==1){
                this.host=3;
            }
            if(this.hostIsplayer){
                this.host=2;
                break;
            }
            
            
            if(this.host==null){
                this.initPukeNumArr();
                this.initHandPuke();
                this.changeHandPuke();
                this.scheduleOnce(function(){
                    self.sort();
                    self.changeHandPuke();
                },1);
                console.log("换牌");
            }else{
                break;
            }
        }
        //给地主加入3张地主牌
        if(this.host!=2){
            this.addHostPuke1(this.host);
        }

        if(this.host==1){
            this.playerArr1[17]=this.hostArr[0];
            this.playerArr1[18]=this.hostArr[1];
            this.playerArr1[19]=this.hostArr[2];
            this.num1+=3;
            this.sort();
            this.changeHandPuke();
        }
        if(this.host==3){
            this.playerArr3[17]=this.hostArr[0];
            this.playerArr3[18]=this.hostArr[1];
            this.playerArr3[19]=this.hostArr[2];
            this.num3+=3;
            this.sort();
            this.changeHandPuke();
        }


        this.tempHost=this.host;
        for(let i=1;i<2;){
            if(this.tempHost==1){
                this.robot_emit1()
            }else if(this.tempHost==2){
                cc.find("Canvas/button/youxi_an1").active=true;
                cc.find("Canvas/button/youxi_an2").active=true;
                cc.find("Canvas/button/youxi_an3").active=true;
            }else{
                //this.robot_emit1()
            }


            if(this.num1==0){
                this.gameOver();
                break;
            }
            if(this.num2==0){
                this.gameOver();
                break;
            }
            if(this.num3==0){
                this.gameOver();
                break;
            }
            
            break;
        }


    }

    robot_emit1(){
        //无tag的0-14数值
        let temp_notag={};
        //0-14牌的数量
        let num={};
        //要打出的牌的数量
        let outNum=0;
        //要打出的牌的id
        let outNumid={};

        for(let i=0;i<15;i++){
            num[i]=0;
        }
        for(let i=0;i<this.num1;i++){
            temp_notag=this.playerArr1[i]%100;
            switch(temp_notag){
                case 0:
                    num[0]++;
                    break;
                case 1:
                    num[1]++;
                    break;
                case 2:
                    num[2]++;
                    break;
                case 3:
                    num[3]++;
                    break;
                case 4:
                    num[4]++;
                    break;
                case 5:
                    num[5]++;
                    break;
                case 6:
                    num[6]++;
                    break;
                case 7:
                    num[7]++;
                    break;
                case 8:
                    num[8]++;
                    break;
                case 9:
                    num[9]++;
                    break;
                case 10:
                    num[10]++;
                    break;
                case 11:
                    num[11]++;
                    break;
                case 12:
                    num[12]++;
                    break;
                case 13:
                    num[13]++;
                    break;
                case 14:
                    num[14]++;
                    break;
            }
        }

        let num4=false;
        let Num4={};
        let num44=0;
        let num3=false;
        let Num3={};
        let num33=0;
        let num2=false;
        let Num2={};
        let num22=0;
        for(let i=0;i<13;i++){
            if(num[i]==4){
                num4=true;
                Num4[num44++]=i;
            }
            if(num[i]==3){
                num3=true;
                Num3[num33++]=i;
            }
            if(num[i]==2){
                num2=true;
                Num2[num22++]=i;
            }
        }

        if(this.emitPukeNum==0){
            if(num3){
                if(num2){
                    let temp2=Math.round(Math.random()*(num22-1));
                    let temp3=Math.round(Math.random()*(num33-1));
                    outNum=5;
                    let pukeData3=Num3[temp3];
                    let pukeData2=Num2[temp2];
                    let pukeData33={};
                    let pukeData22={};
                    let j=0;
                    let k=0;
                    for(let i=0;i<this.num1;i++){
                        if(this.playerArr1[i]==pukeData3){
                            pukeData33[j++]=i;
                        }
                        if(this.playerArr1[i]==pukeData2){
                            pukeData22[k++]=i;
                        }
                    }
                    console.log("pukeData",pukeData33);
                    console.log("pukeData",pukeData22);
                    console.log("j",j);
                    console.log("k",k);
                    
                    for(let i=0;i<j;i++){
                        let path20="Canvas/pukePool1/puke1"+pukeData22[i];
                        console.log("pukeData22",i,pukeData22[i]);
                        
                        cc.tween(cc.find(path20)).to(0.2,{position:cc.v2(35*(i+3),0)}).start();
                    }
                    for(let i=0;i<k;i++){
                        let path20="Canvas/pukePool1/puke1"+pukeData33[i];
                        console.log("pukeData33",i,pukeData33[i]);
                        cc.tween(cc.find(path20)).to(0.2,{position:cc.v2(35*i,0)}).start();
                    }
                    console.log(1111,);
                    
                }
            }
        }
    }
}
