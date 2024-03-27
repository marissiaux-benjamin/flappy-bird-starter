import {IAnimatable} from "../Types/IAnimatable";
import {Drawable} from "./Drawable";
import {TubesPair} from "./TubesPair";
import {settings} from "../settings";
import {Random} from "../../framework/helpers/Random";

export class TubesPairs extends Drawable implements IAnimatable {
    public tubesPairs: TubesPair[] = [];
    private frameCounter: number;
    private maxFrameInterval: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        super(canvas, ctx, sprite);
        this.tubesPairs.push(new TubesPair(canvas, ctx, sprite));
        this.frameCounter = 0;
        this.maxFrameInterval = Random.int(settings.tubes.maxFrameInterval.min, settings.tubes.maxFrameInterval.max);
    }

    draw(): void {
        this.tubesPairs.forEach(tube => {
            tube.draw()
        });
    }

    update(): void {
        this.frameCounter++;
        if (this.frameCounter >= this.maxFrameInterval) { //generation de tube aleatoire entre 150 et 250 frames.
            if (this.tubesPairs.length > settings.tubes.maxTubesPairs) {//gere le nbr de tubes ds le tableau.
                this.tubesPairs.shift();
            }

            this.tubesPairs.push(new TubesPair(this.canvas, this.ctx, this.sprite));
            this.frameCounter = 0; //remet a zero sinon ca bug.
            this.maxFrameInterval = Random.int(settings.tubes.maxFrameInterval.min, settings.tubes.maxFrameInterval.max);

        }
        this.tubesPairs.forEach(tube => {
            tube.update();
        });
    }


}