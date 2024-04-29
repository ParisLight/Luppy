import { ref } from 'vue'

export const popularDogs = ref([
    {
        id: 1,
        image: '/images/homePage/dogs/dog-card-1.png',
        name: 'Bobi',
        age: '1 Yo',
        breed: 'Poil Long',
        verification: true
    },
    {
        id: 2,
        image: '/images/homePage/dogs/dog-card-2.png',
        name: 'Björn',
        age: '6 Mo',
        breed: 'Akita',
        verification: true
    },
    {
        id: 3,
        image: '/images/homePage/dogs/dog-card-3.png',
        name: 'Levay',
        age: '2 Yo',
        breed: 'Husky',
        verification: true
    },
    {
        id: 4,
        image: '/images/homePage/dogs/dog-card-2.png',
        name: 'Björn',
        age: '6 Mo',
        breed: 'Akita',
        verification: true
    },
    {
        id: 5,
        image: '/images/homePage/dogs/dog-card-1.png',
        name: 'Bobi',
        age: '1 Yo',
        breed: 'Poil Long',
        verification: true
    },
])
export const dogsPreview = ref([
    {
        id: 1,
        name: 'name',
        img: '/images/partials/eventMembers/member-1.png',
        status: false
    },
    {
        id: 2,
        name: 'name',
        img: '/images/partials/eventMembers/member-1.png',
        status: false
    },
    {
        id: 3,
        name: 'name',
        img: '/images/partials/eventMembers/member-1.png',
        status: true
    }
])

export const events = ref([
    {
        id: 1,
        date: 'September 30, 2023',
        title: 'Puppy Playdate',
        geo: {
            name: 'Dog Park',
            coords: [15.232, 15.23331]
        },
        description: 'Bring your 🐶 friend for a day of fun and socialization with other puppies. There ...',
        // TODO: dog-entity
        members: [
            {
                id: 1,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            },
            {
                id: 2,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            },
            {
                id: 3,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            },
            {
                id: 4,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            }
        ]
    },
    {
        id: 4,
        date: 'September 30, 2023',
        title: 'Puppy Playdate',
        geo: {
            name: 'Dog Park',
            coords: [15.232, 15.23331]
        },
        description: 'Bring your 🐶 friend for a day of fun and socialization with other puppies. There ...',
        // TODO: dog-entity
        members: [
            {
                id: 1,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            },
            {
                id: 2,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            },
            {
                id: 3,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            },
            {
                id: 4,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            }
        ]
    },
    {
        id: 3,
        date: 'September 30, 2023',
        title: 'Puppy Playdate',
        geo: {
            name: 'Dog Park',
            coords: [15.232, 15.23331]
        },
        description: 'Bring your 🐶 friend for a day of fun and socialization with other puppies. There ...',
        // TODO: dog-entity
        members: [
            {
                id: 1,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            },
            {
                id: 2,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            },
            {
                id: 3,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            },
            {
                id: 4,
                name: 'qweqwe',
                image: '/images/partials/eventMembers/member-1.png'
            }
        ]
    }
])