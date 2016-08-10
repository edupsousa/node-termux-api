import { BatteryStatusBuilder } from './builders/BatteryStatusBuilder';
import { CameraInfoBuilder } from './builders/CameraInfoBuilder';
import { CameraPhotoBuilder } from './builders/CameraPhotoBuilder';
import { ClipboardGetBuilder } from './builders/ClipboardGetBuilder';
import { ClipboardSetBuilder } from './builders/ClipboardSetBuilder';
import { ContactListBuilder } from './builders/ContactListBuilder';
import { DialogBuilder } from './builders/DialogBuilder';
import { DownloadBuilder } from './builders/DownloadBuilder';
import { LocationBuilder } from './builders/LocationBuilder';
import { NotificationBuilder } from './builders/NotificationBuilder';
import { SmsInboxBuilder } from './builders/SmsInboxBuilder';
import { SmsSendBuilder } from './builders/SmsSendBuilder';
import { TelephonyCellInfoBuilder } from './builders/TelephonyCellInfoBuilder';
import { TelephonyDeviceInfoBuilder } from './builders/TelephonyDeviceInfoBuilder';
import { ToastBuilder } from './builders/ToastBuilder';
import { VibrateBuilder } from './builders/VibrateBuilder';
import { TTSEnginesBuilder } from './builders/TTSEnginesBuilder';
import { TTSSpeakBuilder } from './builders/TTSSpeakBuilder';

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
    public clipboardGet(): ClipboardGetBuilder {
        return new ClipboardGetBuilder();
    }
    public clipboardSet(): ClipboardSetBuilder {
        return new ClipboardSetBuilder();
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
    public toast(): ToastBuilder {
        return new ToastBuilder();
    }
    public vibrate(): VibrateBuilder {
        return new VibrateBuilder();
    }
    public ttsEngines(): TTSEnginesBuilder {
        return new TTSEnginesBuilder();
    }
    public ttsSpeak(): TTSSpeakBuilder {
        return new TTSSpeakBuilder();
    }
}
