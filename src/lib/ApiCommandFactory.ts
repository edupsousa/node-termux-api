import { BatteryStatusBuilder } from './builders/BatteryStatusBuilder';
import { CameraInfoBuilder } from './builders/CameraInfoBuilder';
import { CameraPhotoBuilder } from './builders/CameraPhotoBuilder';

export class ApiCommandFactory {
    public batteryStatus(): BatteryStatusBuilder {
        return new BatteryStatusBuilder();
    }
    public cameraInfo(): CameraInfoBuilder {
        return new CameraInfoBuilder();
    }
    public cameraPhoto(): CameraPhotoBuilder {
        return new CameraPhotoBuilder();
    }
}