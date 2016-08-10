import { BatteryStatusBuilder } from './builders/BatteryStatusBuilder';
import { CameraInfoBuilder } from './builders/CameraInfoBuilder';
import { CameraPhotoBuilder } from './builders/CameraPhotoBuilder';
import { ContactListBuilder } from './builders/ContactListBuilder';
import { DialogBuilder } from './builders/DialogBuilder';
import { DownloadBuilder } from './builders/DownloadBuilder';
import { LocationBuilder } from './builders/LocationBuilder';
import { NotificationBuilder } from './builders/NotificationBuilder';
import { SmsInboxBuilder } from './builders/SmsInboxBuilder';
import { SmsSendBuilder } from './builders/SmsSendBuilder';
import { TelephonyCellInfoBuilder } from './builders/TelephonyCellInfoBuilder';
import { TelephonyDeviceInfoBuilder } from './builders/TelephonyDeviceInfoBuilder';

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
    public contactList(): ContactListBuilder {
        return new ContactListBuilder();
    }
    public dialog(): DialogBuilder {
        return new DialogBuilder();
    }
    public download(url: string): DownloadBuilder {
        return new DownloadBuilder().setUrl(url);
    }
    public location(): LocationBuilder {
        return new LocationBuilder();
    }
    public notification(): NotificationBuilder {
        return new NotificationBuilder();
    }
    public smsInbox(): SmsInboxBuilder {
        return new SmsInboxBuilder();
    }
    public smsSend(): SmsSendBuilder {
        return new SmsSendBuilder();
    }
    public telephonyCellInfo(): TelephonyCellInfoBuilder {
        return new TelephonyCellInfoBuilder();
    }
    public telephonyDeviceInfo(): TelephonyDeviceInfoBuilder {
        return new TelephonyDeviceInfoBuilder();
    }
}
