import {BoxHelper, Object3D, Scene} from "three";

export class BoxHelperExtend{
    protected scene:Scene;
    public boxHelper:BoxHelper|null;
    constructor(scene:Scene,color?:number) {
        this.scene=scene;
        const boxColor = color ===undefined?0xff0000:color;
        this.boxHelper = new BoxHelper(new Object3D(),boxColor);
        this.initBoxHelper();
    }
    private initBoxHelper(){
        if (this.boxHelper)
            this.scene.add(this.boxHelper)
    }
    public setVisible(visible:boolean){
        if (this.boxHelper)
            this.boxHelper.visible=visible;
    }
    public attach(object:Object3D){
        if (this.boxHelper)
            this.boxHelper.setFromObject(object);
    }
    public dispose(){
            const parent:Object3D|null = this.boxHelper?this.boxHelper.parent:null;
        if (this.boxHelper&&parent !==null){
            parent.remove(this.boxHelper);
        }
        this.boxHelper = null;
    }
}