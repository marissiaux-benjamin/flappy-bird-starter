import {Drawable} from "./Drawable";
import {settings} from "./settings";

export class Birdie extends Drawable {

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement) {
        super(ctx, canvas, sprite);
    }

    update() {
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.birdie.frames[0].sx,
            settings.birdie.frames[0].sy,
            100,
            100,
            
    )
        ;
    }
}