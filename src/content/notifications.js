export const notificationsList = {
    1: {
        icon: 'icon-new-match',
        type: 'new_match',
        notificationText: 'Your dog, Loki, has a new match!',
        notification_date: 1694073659000, // Пример временной метки
        message: {
            text: 'Send a Message',
            messageDate: 1694073659000,
            from: {
                id: 123,
                online: false,
                firstName: 'Björn',
                lastName: 'Twain'
            },
            isRead: false
        }
    },
    2: {
        icon: 'icon-like',
        type: 'new_like',
        notificationText: 'Björn Twain has liked your dog, Loki!',
        notification_date: 1694073659000, // Пример временной метки
        message: {
            text: 'Check Bark\'s Profile',
            messageDate: 1694073659000,
            from: {
                id: 124,
                online: true,
                firstName: 'Björn',
                lastName: 'Twain'
            },
            isRead: false
        }
    },
    3: {
        icon: 'icon-message',
        type: 'new_message',
        notificationText: 'Sir Barks-a-Lot has sent you a message!',
        notification_date: 1694073659000, // Пример временной метки
        message: {
            text: 'Send A Message',
            messageDate: 1694073659000,
            from: {
                id: 125,
                online: false,
                firstName: 'Sir',
                lastName: 'Barks-a-Lot'
            },
            isRead: false
        }
    },
    4: {
        icon: 'icon-playdate',
        type: 'invite',
        notificationText: 'Your dog, Loki, has been invited to a playdate with Canine West!',
        notification_date: 1694073659000, // Пример временной метки
        message: {
            text: 'Check The Invitation',
            messageDate: 1694073659000,
            from: {
                id: 126,
                online: true,
                firstName: 'Canine',
                lastName: 'West'
            },
            isRead: false
        }
    },
    5: {
        icon: 'icon-event',
        type: 'event',
        notificationText: 'There is a new dog event in your area called "Paws in the Park"!',
        notification_date: 1694073659000, // Пример временной метки
        message: {
            text: 'Attend',
            messageDate: 1694073659000,
            from: null,
            isRead: false
        }
    },
    6: {
        icon: 'icon-boost',
        type: 'profile_boost',
        notificationText: 'Your dog\'s profile has been boosted!',
        notification_date: 1694073659000, // Пример временной метки
        message: {
            text: 'Check Details',
            messageDate: 1694073659000,
            from: null,
            isRead: false
        }
    }
}
