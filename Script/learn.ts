const {ccclass, property} = cc._decorator;

/**
 * 1、更改文本编辑器 （使用IDE打开）
 * 文件->设置->数据编辑->外部脚本编辑器
 * 
 * 2、编辑器中忽略某类型文件
 * 文件->首选项->设置->搜索Exclude->添加文件类型
 */

@ccclass   //声明属性  修饰一下新创建的类 添加cocosCreater组件的属性以及方法
//声明cc  typescript类  继承自组件
export default class Learn extends cc.Component {
//声明Learn类，继承自cc.Component类

    //@propety(XX)    若xx为TS基础属性可以省略（最好还是不省）
    //声明XX数据类型  用于在CocosCreater中某个使用了此文本的节点
    //使其在组件中的detail属性可见
    //若不声明 则不会在CocosCreater中的detail属性中可见，但任然存在
    @property(cc.Label)
    label: cc.Label = null;//没有设置默认值

    @property
    text: string ="1111";//设置默认值1111

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

   
    /**
     * 3、类的生命周期
     * onLoad      初始化
     * onenable    1、添加到场景时   2、节点可见性变为true
     * start       添加到场景上
     * update      每帧调用
     * lateUpdate  在update钱调用一次
     * onDisable   节点可见性变为false
     * onDestory   节点销毁
     */
    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        //当前作为loginScene场景中的Label节点的组件
        //访问脚本组件所在的节点属性  
        //this.node 即可查询节点下的所有属性
        console.log(this.node.getPosition().y);

        //访问节点中别的组件
        //this.node.getComponent(xx)   xx表示组件类型
        console.log(this.node.getComponent(cc.Label).string);
        
    }

    start () {

    }

    // update (dt) {}
}
