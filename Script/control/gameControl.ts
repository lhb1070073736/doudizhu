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
    host:any=null;
    score:any=1;
    emitPukeNum:any=0;

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
            this.score=this.score*1;
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
            this.score=this.score*2;
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
            this.score=this.score*3;
        })

        cc.find("Canvas/button/youxi_an8").on(cc.Node.EventType.TOUCH_START,function(){
            cc.find("Canvas/button/youxi_an4").active=false;
            cc.find("Canvas/button/youxi_an5").active=false;
            cc.find("Canvas/button/youxi_an6").active=false;
            cc.find("Canvas/button/youxi_an8").active=false;
            cc.find("Canvas/hostPukePool").active=false;
            self.pukeButton();
        })
        
        cc.find("Canvas/button/youxi_an1").on(cc.Node.EventType.TOUCH_START,function(){
            self.emit_A();
            self.emit_AA();
            self.emit_AAA();
            self.emit_AAAB();
        })
    }

    // protected update(dt: number): void {
    //     this.emit_A()
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
        //console.log(this.pukeNumArr);
        // console.log(this.playerArr1);
        // console.log(this.playerArr2);
        // console.log(this.playerArr3);
        // console.log(this.hostArr);
        // console.log(this.hostArr);
        
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
                // let x1=this.playerArr2[i]/100;
                // x1>>=0;
                let y1=this.playerArr2[i]%100;
                y1>>=0;
                // let x2=this.playerArr2[j]/100;
                // x2>>=0;
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
        console.log(this.playerArr2);        
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
        //console.log(cc.find("Canvas/pukePool2/puke216").x);
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

    emit_A(){
        let self =this;
        if(this.selectPukeNum()==1){
            let node1=null;
            let i=0;
            let temp=0;
            for(i;i<this.num2;i++){
                let path ="Canvas/pukePool2/puke2";
                path +=i;
                if(cc.find(path).y == 40){
                    node1=cc.find(path);
                    temp=this.playerArr2[i];
                    break;
                }
            }
            cc.tween(node1).to(0.2,{scale:0.5,position:cc.v2(0,350)}).start();
            this.scheduleOnce(function(){
                node1.x=-250+i*35;
                for(;i<self.num2-1;i++){
                    self.playerArr2[i]=self.playerArr2[i+1];
                }
                console.log(self.num2-1);
                
                console.log(self.playerArr2[self.num2-1]);
                self.playerArr2[self.num2-1]=temp;
                console.log(self.playerArr2[self.num2-1]);
                node1.y=0;
                node1.scale=0.8;
                let path = "Canvas/pukePool2/puke2" + i;
                //console.log(cc.find(path));
                cc.find(path).scale=0.5;
                cc.find(path).x=0;
                cc.find(path).y=350;
                self.changeHandPuke();
                self.num2--;
                self.scheduleOnce(function(){
                    cc.find(path).active=false;
                },3);
            },1);
            
        }
    }

    emit_AA(){
        let self =this;
        if(this.selectPukeNum()==2 && this.selectPuke_AAIsis()){
            let node1=null;
            let node2=null;
            let i=0;
            //let j=0;
            let temp1;
            let temp2;
            let pukeNum1;
            let pukeNum2;
            for(i;i<this.num2;i++){
                let path ="Canvas/pukePool2/puke2";
                path +=i;
                if(cc.find(path).y == 40){
                    if(node1!=null){
                        node2=cc.find(path);
                        pukeNum2=i;
                    }else{
                        node1=cc.find(path);
                        pukeNum1=i;
                    }
                    if(temp1!=undefined){
                        temp2=this.playerArr2[i];
                    }else{
                        temp1=this.playerArr2[i];
                    }
                }
            }
            cc.tween(node1).to(0.2,{scale:0.5,position:cc.v2(0,350)}).start();
            cc.tween(node2).to(0.2,{scale:0.5,position:cc.v2(35,350)}).start();
            i=pukeNum1;
            this.scheduleOnce(function(){
                node1.x=-250+pukeNum1*35;
                node2.x=-250+pukeNum2*35;
                for(;i<pukeNum2;i++){
                    self.playerArr2[i]=self.playerArr2[i+1];
                }
                i--;
                for(;i<this.num2-2;i++){
                    self.playerArr2[i]=self.playerArr2[i+2];
                }
                self.playerArr2[self.num2-2]=temp1;
                self.playerArr2[self.num2-1]=temp2;

                node1.y=0;
                node1.scale=0.8;
                let path1 = "Canvas/pukePool2/puke2" + i;
                cc.find(path1).scale=0.5;
                cc.find(path1).x=0;
                cc.find(path1).y=350;

                node2.y=0;
                node2.scale=0.8;
                let path2 = "Canvas/pukePool2/puke2" + (i+1);
                cc.find(path2).scale=0.5;
                cc.find(path2).x=35;
                cc.find(path2).y=350;

                self.changeHandPuke();
                self.num2-=2;

                self.scheduleOnce(function(){
                    cc.find(path2).active=false;
                    cc.find(path1).active=false;
                },3);
            },1);
            
        }
    }

    emit_AAA(){
        let self = this;
        if(this.selectPukeNum()==3 && this.selectPuke_AAAIsis()){
            let node1=null;
            let node2=null;
            let node3=null;
            let temp1;
            let temp2;
            let temp3;
            let pukeNum1;
            let pukeNum2;
            let pukeNum3;
            let i=0;
            for(i;i<this.num2;i++){
                let path ="Canvas/pukePool2/puke2";
                path +=i;
                if(cc.find(path).y == 40){
                    if(node1!=null){
                        if(node2!=null){
                            node3=cc.find(path);
                            pukeNum3=i;
                        }else{
                            node2=cc.find(path);
                            pukeNum2=i;
                        }
                    }else{
                        node1=cc.find(path);
                        pukeNum1=i;
                    }

                    if(temp1!=undefined){
                        if(temp2!=undefined){
                            temp3=this.playerArr2[i];
                        }else{
                            temp2=this.playerArr2[i];
                        }
                    }else{
                        temp1=this.playerArr2[i];
                    }
                }
            }
            cc.tween(node1).to(0.2,{scale:0.5,position:cc.v2(0,350)}).start();
            cc.tween(node2).to(0.2,{scale:0.5,position:cc.v2(35,350)}).start();
            cc.tween(node3).to(0.2,{scale:0.5,position:cc.v2(70,350)}).start();
            i=self.num2-3;
            this.scheduleOnce(function(){
                node1.x=-250+pukeNum1*35;
                node2.x=-250+pukeNum2*35;
                node3.x=-250+pukeNum3*35;
                console.log(pukeNum1,pukeNum2,pukeNum3);
                console.log(temp1,temp2,temp3);
                self.playerArr2[pukeNum1]=-1;
                self.playerArr2[pukeNum2]=-1;
                self.playerArr2[pukeNum3]=-1;
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


                self.playerArr2[self.num2-3]=temp1;
                self.playerArr2[self.num2-2]=temp2;
                self.playerArr2[self.num2-1]=temp3;

                node1.y=0;
                node1.scale=0.8;
                let path1 = "Canvas/pukePool2/puke2" + i;
                cc.find(path1).scale=0.5;
                cc.find(path1).x=0;
                cc.find(path1).y=350;

                node2.y=0;
                node2.scale=0.8;
                let path2 = "Canvas/pukePool2/puke2" + (i+1);
                cc.find(path2).scale=0.5;
                cc.find(path2).x=35;
                cc.find(path2).y=350;

                node3.y=0;
                node3.scale=0.8;
                let path3 = "Canvas/pukePool2/puke2" + (i+2);
                cc.find(path3).scale=0.5;
                cc.find(path3).x=70;
                cc.find(path3).y=350;

                self.changeHandPuke();
                self.num2-=3;

                self.scheduleOnce(function(){
                    cc.find(path3).active=false;
                    cc.find(path2).active=false;
                    cc.find(path1).active=false;
                },3);
            },1)
        }
    }

    emit_AAAB(){
        let self = this;
        if(this.selectPukeNum()==4 && this.selecPuke_AAABIsis()){
            // let node1=null;
            // let node2=null;
            // let node3=null;
            // let node4=null;
            // let temp1;
            // let temp2;
            // let temp3;
            // let temp4;
            // let pukeNum1;
            // let pukeNum2;
            // let pukeNum3;
            // let pukeNum4;
            
            let node={};
            let temp={};
            let pukeNum={};
            let i=0;
            for(i;i<this.num2;i++){
                let path ="Canvas/pukePool2/puke2";
                path +=i;
                if(cc.find(path).y == 40){
                    if(node[0]!=undefined){
                        if(node[1]!=undefined){
                            if(node[2]!=undefined){
                                node[3]=cc.find(path);
                                pukeNum[3]=i;
                            }else{
                                node[2]=cc.find(path);
                                pukeNum[2]=i;
                            }
                        }else{
                            node[1]=cc.find(path);
                            pukeNum[1]=i;
                        }
                    }else{
                        node[0]=cc.find(path);
                        pukeNum[0]=i;
                    }

                    if(temp[0]!=undefined){
                        if(temp[1]!=undefined){
                            if(temp[2]!=undefined){
                                temp[3]=this.playerArr2[i];
                            }else{
                                temp[2]=this.playerArr2[i];
                            }
                        }else{
                            temp[1]=this.playerArr2[i];
                        }
                    }else{
                        temp[0]=this.playerArr2[i];
                    }
                }
            }
            cc.tween(node[0]).to(0.2,{scale:0.5,position:cc.v2(0,350)}).start();
            cc.tween(node[1]).to(0.2,{scale:0.5,position:cc.v2(35,350)}).start();
            cc.tween(node[2]).to(0.2,{scale:0.5,position:cc.v2(70,350)}).start();
            cc.tween(node[3]).to(0.2,{scale:0.5,position:cc.v2(105,350)}).start();
            i=self.num2-4;
            this.scheduleOnce(function(){
                node[0].x=-250+pukeNum[0]*35;
                node[1].x=-250+pukeNum[1]*35;
                node[2].x=-250+pukeNum[2]*35;
                node[3].x=-250+pukeNum[3]*35;

                self.playerArr2[pukeNum[0]]=-1;
                self.playerArr2[pukeNum[1]]=-1;
                self.playerArr2[pukeNum[2]]=-1;
                self.playerArr2[pukeNum[3]]=-1;

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


                self.playerArr2[self.num2-4]=temp[0];
                self.playerArr2[self.num2-3]=temp[1];
                self.playerArr2[self.num2-2]=temp[2];
                self.playerArr2[self.num2-1]=temp[3];


                for(let j=0;j<4;j++){
                    node[0].y=0;
                    node[0].scale=0.8;
                    let path1 = "Canvas/pukePool2/puke2" + i;
                    i++;
                    cc.find(path1).scale=0.5;
                    cc.find(path1).x=35*j;
                    cc.find(path1).y=350;
                }
                // node[0].y=0;
                // node[0].scale=0.8;
                // let path1 = "Canvas/pukePool2/puke2" + i;
                // cc.find(path1).scale=0.5;
                // cc.find(path1).x=0;
                // cc.find(path1).y=350;

                // node2.y=0;
                // node2.scale=0.8;
                // let path2 = "Canvas/pukePool2/puke2" + (i+1);
                // cc.find(path2).scale=0.5;
                // cc.find(path2).x=35;
                // cc.find(path2).y=350;

                // node3.y=0;
                // node3.scale=0.8;
                // let path3 = "Canvas/pukePool2/puke2" + (i+2);
                // cc.find(path3).scale=0.5;
                // cc.find(path3).x=70;
                // cc.find(path3).y=350;

                self.changeHandPuke();
                self.num2-=3;

                self.scheduleOnce(function(){
                    i=self.num2-4;
                    for(let j=0;j<4;j++){
                        let path1 = "Canvas/pukePool2/puke2" + i;
                        i++;
                        cc.find(path1).active=false;
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
                temp[j++]=this.playerArr2[i];
                console.log(temp[j-1]);
                
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

}
