import { BaseCommandBuilder } from './BaseCommandBuilder';

export class CameraPhotoBuilder extends BaseCommandBuilder {
    constructor() {
        super('CameraPhoto');
    }
    public setOutputFile(path: string): CameraPhotoBuilder {
        this.instance.addES('file', path);
        return this;
    }
    public setCamera(id: Number): CameraPhotoBuilder {
        this.instance.addES('camera', id.toString());
        return this;
    }
}
