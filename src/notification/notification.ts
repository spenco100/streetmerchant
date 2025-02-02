import {Link, Store} from '../store/model';
import {adjustPhilipsHueLights} from './philips-hue';
import {playSound} from './sound';
import {sendDesktopNotification} from './desktop';
import {sendDiscordMessage} from './discord';
import {sendEmail} from './email';
import {sendMqttMessage} from './mqtt';
import {sendPagerDutyNotification} from './pagerduty';
import {sendPushbulletNotification} from './pushbullet';
import {sendPushoverNotification} from './pushover';
import {sendSlackMessage} from './slack';
import {sendSms} from './sms';
import {sendTelegramMessage} from './telegram';
import {sendTweet} from './twitter';
import {sendTwilioMessage} from './twilio';
import {sendTwitchMessage} from './twitch';
import {updateRedis} from './redis';
import {activateSmartthingsSwitch} from './smartthings';
import {sendStreamLabsAlert} from './streamlabs';


export function sendNotification(link: Link, store: Store) {
  console.log('SPENCER: ', link.cartUrl)
  // https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16820313309
  // Checkout button: 'btn btn-primary btn-wide'
  // Continue as guest: 'btn btn-gray'

  // Priority
  playSound();
  sendDiscordMessage(link, store);
  sendDesktopNotification(link, store);
  sendEmail(link, store);
  sendSms(link, store);
  // Non-priority
  activateSmartthingsSwitch();
  adjustPhilipsHueLights();
  sendMqttMessage(link, store);
  sendPagerDutyNotification(link, store);
  sendPushbulletNotification(link, store);
  sendPushoverNotification(link, store);
  sendSlackMessage(link, store);
  sendTelegramMessage(link, store);
  sendTweet(link, store);
  sendTwilioMessage(link, store);
  sendTwitchMessage(link, store);
  updateRedis(link, store);
  sendStreamLabsAlert(link, store);
}
