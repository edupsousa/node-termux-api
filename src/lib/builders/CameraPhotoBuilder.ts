import { BaseCommandBuilder } from './BaseCommandBuilder';

export class CameraPhotoBuilder extends BaseCommandBuilder {
    constructor() {
        super('CameraPhoto');
    }
    public setOutputFile(path: string): CameraPhotoBuilder {
        this.command.setESParam('file', path);
        return this;
    }
    public setCamera(id: Number): CameraPhotoBuilder {
        this.command.setESParam('camera', id.toString());
        return this;
    }
}
