import { Injectable } from '@nestjs/common';
import { sendPushNotification } from './firebase-notification.util';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!';
  }

  async notifyUser(fcmToken: string) {
    const title = 'Welcome!';
    const body = 'Thanks for signing up!';
    const data = { userId: '12345' };

    try {
      await sendPushNotification(fcmToken, title, body, data);
      console.log('Notification sent successfully');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }
}
