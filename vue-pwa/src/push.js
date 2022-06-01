var push = require('web-push')
let vapidKeys = {
    publicKey: 'BBpS5tp2_TojL4KyOkyfhWFffToTw-DjdTnpkCEDy-e3FdPI4jOS8maKRTThOW2jx_s3vMTxWvrkalGxxjnrIuA',
    privateKey: 'qktT85SrfEfBb-CIOCRo4-To1DMLF7J5K-FEQbsd_BI'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)


let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/cDcrM0gL_kw:APA91bGvdM7T_2w_iUdaHfkIubTHRNzJoSCrtOucqaUrcie_Z_0cO0s-whu1ALN-63KXkzhinEqcSFt6btNm2Ma2yZ0fRjJG7W-k5PhfJjFPeCaS1PDlAPvv1-7uy4iuKsAwwNsZnG40",
    expirationTime: null,
    keys: {
        p256dh: "BHsdX5TYPxTte4FoLAXH3RAUVLvuQv6wgpKJFrnJJPgX3FuSeqixs_yIfHNyQUO82fl5fgxIIyeGQQamh2aypfA",
        auth: "laFqDh93AboP9FkowYoSiQ"
    }
};

push.sendNotification(sub, "test message")