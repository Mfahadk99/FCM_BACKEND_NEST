import { firebaseAdmin } from './firebase';
import { Logger } from '@nestjs/common';

const logger = new Logger('FirebaseNotification');

export async function sendPushNotification(
  token: string,
  title: string,
  body: string,
  data?: Record<string, string>,
): Promise<void> {
  const message = {
    token, // Target the specific device via its FCM token
    notification: {
      title,
      body,
    },
    data: data || {}, // Optional custom data payload
  };

  try {
    // Use the general `send` method
    await firebaseAdmin.messaging().send(message);
    logger.log('Push notification sent successfully.');
  } catch (error) {
    logger.error('Failed to send push notification:', error);
    throw error;
  }
}
