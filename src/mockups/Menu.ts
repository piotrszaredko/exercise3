import { MenuItem } from "src/models/MenuItem";

export const menu : MenuItem[] = [
    {
        icon: 'mail',
        name: 'Mail Inbox',
        count: 5,
        children: [
            'TESTOWY - test1@gmail.com',
            'TESTOWY - test2@gmail.com',
            'TESTOWY - test3@gmail.com',
            'TESTOWY - test4@gmail.com',
            'TESTOWY - test5@gmail.com'
        ]
    },
    {
        icon: 'friends',
        name: 'Friends',
        count: 25,
        children: [
            'Best Friend 1',
            'Best Friend 2',
            'Best Friend 3',
            'Best Friend 4',
            'Best Friend 5',
            'Best Friend 6',
            'Best Friend 7',
            'Best Friend 8',
            'Best Friend 9',
            'Best Friend 10',
            'Best Friend 11',
            'Best Friend 12',
            'Best Friend 13',
            'Best Friend 14',
            'Best Friend 15',
            'Best Friend 16',
            'Best Friend 17',
            'Best Friend 18',
            'Best Friend 19',
            'Best Friend 20',
            'Best Friend 21',
            'Best Friend 22',
            'Best Friend 23',
            'Best Friend 24',
            'Best Friend 25'
        ]
    },
    {
        icon: 'invites',
        name: 'Invites',
        count: 1,
        children: [
            'Invitation 1'
        ]
    },
    {
        icon: 'bookmarks',
        name: 'Bookmarks',
        count: 0,
        children: []
    },
    {
        icon: 'settings',
        name: 'Account Settings',
        count: 0,
        children: []
    },
]