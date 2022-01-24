import { DataConfig } from "./DataConfig";

//数据管理单实例类
export default class DataMas  {
    private static _ins:DataMas;
    public DataObj:{
        Coin:0,
        Lv:0,
        UserName:null
    }

    constructor(){

    }

    init(){
        //初始化

    }

    public static getInstance(){
        if(!DataMas._ins){
            DataMas._ins=new DataMas();
        }
        return DataMas._ins;
    }

    public setDataObj(){
        cc.sys.localStorage.setItem("DataObj",JSON.stringify(this.DataObj));
    }

    public getDataObj(){
        //取值
        let value =cc.sys.localStorage.getItem("DataObj"); 
        //验证
        if(value == null|| value == ""){
            //第一次打开游戏
            value =this.firstInitData();
            this.DataObj=value;
        }else{
            //不是第一次打开
            this.DataObj=JSON.parse(value);
        }
        console.log(this.DataObj);
        //检查残缺值
        for (const key in DataConfig) {
            let i=DataConfig[key];
            if(this.DataObj[key]==null){
                console.log("+++有残缺值");
                this.DataObj[i.name]=JSON.parse(JSON.stringify(i.defaultValue));
                console.log(this.DataObj);
                this.setDataObjJson();
            }
        }
    }

    public firstInitData(){
        //第一次打开游戏进行设置默认值
        let obj={};
        for (const key in DataConfig) {
            obj[key]=DataConfig[key].defaultValue;
        }
        this.setItem("DataObj",JSON.stringify(obj));
        return obj;
    }

    public setDataObjJson(){
        cc.sys.localStorage.setItem("DataObj",JSON.stringify(this.DataObj));
    }

    public setItem(key,value){
        cc.sys.localStorage.setItem(key,value);
    }
}
