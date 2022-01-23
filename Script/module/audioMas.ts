
import { audioConfig } from "./audioConfig";

export default class audioMas {
    private static _ins:audioMas;

    //动态加载后的资源对象
    soundMap:{};

    init(){
        //加载音乐音效
        this.soundMap = {};
        let self=this;
        for (const key in audioConfig) {
            //console.log("key==",key);
            let res = audioConfig[key].res;
            cc.loader.loadRes(res,function(err,res){
                if(err){
                    console.log("游戏音乐加载失败",err);
                }
                self.soundMap[key] = res;
                //console.log("加载成功",self.soundMap);
            })
        }
    }


    static getInstace(){
        if(!this._ins){
            this._ins = new audioMas();
        }
        return this._ins;
    }

    playMusic(audioName,loops:boolean){
        //console.log("soundmap==",this.soundMap);
        //console.log("11112",this.soundMap[audioName]);
        //console.log("2222",audioName);
        cc.audioEngine.playMusic(this.soundMap[audioName],loops);
    }

    playEffect(audioName,loops){
        cc.audioEngine.playEffect(this.soundMap[audioName],loops);
    }

    playLoadingSceneBgMusic(){
        this.playMusic(this.soundMap[audioConfig.w_feiji.name],true);
    }

    pauseMusic(){
        cc.audioEngine.pauseMusic();
    }
    resumeMusic(){
        cc.audioEngine.resumeMusic();
    }
}