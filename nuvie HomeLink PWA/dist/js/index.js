const data = {
    user: {
        name: "Peter K Joseph",
        profile: "../dist/resource/profile1.jpeg",
        access: 3,
        other: {
            0: {
                name: 'Binu K Joseph'
            },
            1: {
                name: 'Joseph K Joseph'
            }
        }
    },
    system: {
        admin: 'Peter K Joseph',
        storage: {
            curr: 12880,
            max: 32768
        }
    },
    rooms: {
        living: {
            name: "Living Room",
            connected: 0,
            example: [],
            camera: []
        },
        outdoor: {
            name: "Outdoor",
            connected: 0,
            example: [],
            camera: []
        },
        bed: {
            name: "Bed Room",
            connected: 0,
            example: [],
            camera: []
        },
        bath: {
            name: "Bathroom",
            connected: 0,
            example: [],
            camera: []
        }
    },
    devices: {
        0: {
            name: "LED Light",
            room: 'bed',
            avatar: "led",
            active: false
        },
        1: {
            name: "Water Heater",
            room: 'bath',
            avatar: "water-heater",
            active: false
        },
        2: {
            name: "TV",
            room: 'living',
            avatar: 'tv',
            active: false
        },
        3: {
            name: "Lights",
            room: 'outdoor',
            avatar: 'lights',
            active: true
        },
        4: {
            name: "AC",
            room: 'bed',
            avatar: 'ac',
            active: false
        },
        5: {
            name: "Fan",
            room: 'bed',
            avatar: 'fan',
            active: false
        }
    },
    security: {
        state: 1,
        activity: {
            0: {
                time: '4:30 PM',
                location: 'Front Door',
                avatar: 'door'
            },
            1: {
                time: '4:45 PM',
                location: 'Front Door',
                avatar: 'door'
            },
            2: {
                time: '6:45 PM',
                location: 'Front Door',
                avatar: 'door'
            },
            3: {
                time: '7:45 PM',
                location: 'Front Door',
                avatar: 'door'
            }
        },
        camera: {
            0: {
                name: 'Outdoor Camera 1',
                ip: 'http://127.0.0.1',
                active: false,
                record: true,
                location: 'outdoor'
            },
            1: {
                name: 'Outdoor Camera 2',
                ip: 'http://127.0.0.1',
                active: false,
                record: true,
                location: 'outdoor'
            }
        }
    }
};
let prev_state = {
    'settings': '',
    'home': '',
    'security': '',
    'report': ''
};
const devavatar = {
    'led': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 24.8125 3 C 24.589844 3.046875 24.394531 3.167969 24.25 3.34375 C 24.25 3.34375 22.675781 5 21.15625 5.21875 C 19.441406 5.464844 14.78125 6.3125 14.78125 6.3125 C 12.96875 6.617188 11.738281 8.339844 12.03125 10.15625 C 12.152344 10.914063 12.539063 11.617188 13.0625 12.15625 C 12.265625 12.894531 11.84375 14.003906 12.03125 15.15625 C 12.15625 15.921875 12.53125 16.621094 13.0625 17.15625 C 12.265625 17.894531 11.84375 19.003906 12.03125 20.15625 C 12.152344 20.914063 12.539063 21.589844 13.0625 22.125 C 12.265625 22.871094 11.84375 24.003906 12.03125 25.15625 C 12.328125 26.980469 14.085938 28.273438 15.90625 27.96875 L 17 27.78125 L 17 30 L 15 30 C 14.96875 30 14.9375 30 14.90625 30 C 14.390625 30.046875 13.996094 30.480469 14 31 L 14 33.0625 C 14 36.398438 16.074219 39.265625 19 40.4375 L 19 43 C 19 44.644531 20.355469 46 22 46 L 24 48 L 26 48 L 28 46 C 29.644531 46 31 44.644531 31 43 L 31 40.4375 C 33.925781 39.265625 36 36.398438 36 33.0625 L 36 31 C 36 30.449219 35.550781 30 35 30 L 33 30 L 33 25.0625 L 35.21875 24.6875 C 37.03125 24.382813 38.261719 22.660156 37.96875 20.84375 C 37.847656 20.105469 37.472656 19.460938 36.96875 18.96875 C 37.761719 18.179688 38.15625 17.003906 37.96875 15.84375 C 37.851563 15.113281 37.496094 14.460938 37 13.96875 C 37.773438 13.171875 38.152344 11.988281 37.96875 10.84375 C 37.671875 9.019531 35.914063 7.726563 34.09375 8.03125 L 32.96875 8.21875 C 32.976563 8.148438 33 8.074219 33 8 C 33 6.910156 32.277344 6.109375 31.5 5.53125 C 30.722656 4.953125 29.796875 4.519531 28.875 4.15625 C 27.03125 3.429688 25.21875 3.03125 25.21875 3.03125 C 25.117188 3.003906 25.011719 2.992188 24.90625 3 C 24.875 3 24.84375 3 24.8125 3 Z M 25.25 5.125 C 25.628906 5.214844 26.703125 5.441406 28.125 6 C 28.953125 6.324219 29.777344 6.726563 30.3125 7.125 C 30.847656 7.523438 31 7.855469 31 8 C 31 8.269531 30.90625 8.332031 30.71875 8.46875 C 30.53125 8.605469 30.34375 8.65625 30.34375 8.65625 C 30.3125 8.664063 30.28125 8.675781 30.25 8.6875 L 15.71875 11.15625 L 15.59375 11.15625 C 15.582031 11.15625 15.574219 11.15625 15.5625 11.15625 C 14.917969 11.265625 14.15625 10.625 14.03125 9.84375 C 13.90625 9.078125 14.390625 8.40625 15.125 8.28125 C 15.125 8.28125 19.84375 7.445313 21.4375 7.21875 C 23.480469 6.925781 24.703125 5.710938 25.25 5.125 Z M 34.71875 10 C 35.34375 10.019531 35.859375 10.484375 35.96875 11.15625 C 36.089844 11.90625 35.515625 12.828125 34.875 12.9375 L 34.34375 13.03125 C 34.261719 13.039063 34.175781 13.015625 34.09375 13.03125 L 15.78125 16.125 C 15.707031 16.128906 15.632813 16.136719 15.5625 16.15625 C 14.914063 16.265625 14.15625 15.625 14.03125 14.84375 C 13.90625 14.078125 14.390625 13.40625 15.125 13.28125 L 15.84375 13.15625 L 15.90625 13.15625 C 15.9375 13.148438 15.96875 13.136719 16 13.125 L 34.4375 10.03125 C 34.53125 10.015625 34.628906 9.996094 34.71875 10 Z M 34.71875 15 C 35.34375 15.019531 35.859375 15.484375 35.96875 16.15625 C 36.089844 16.90625 35.519531 17.796875 34.875 17.90625 L 34.125 18.03125 C 34.113281 18.03125 34.105469 18.03125 34.09375 18.03125 L 15.6875 21.125 C 15.675781 21.125 15.667969 21.125 15.65625 21.125 L 15.53125 21.15625 C 14.890625 21.242188 14.15625 20.613281 14.03125 19.84375 C 13.90625 19.078125 14.390625 18.40625 15.125 18.28125 L 34.28125 15.0625 C 34.3125 15.054688 34.34375 15.042969 34.375 15.03125 L 34.4375 15.03125 C 34.53125 15.015625 34.628906 14.996094 34.71875 15 Z M 34.71875 20 C 35.34375 20.019531 35.859375 20.484375 35.96875 21.15625 C 36.09375 21.921875 35.613281 22.59375 34.875 22.71875 L 21.84375 24.9375 L 21 25.0625 L 21 30 L 19 30 L 19 25.40625 L 17.84375 25.59375 L 15.5625 25.96875 C 14.824219 26.09375 14.15625 25.613281 14.03125 24.84375 C 13.90625 24.078125 14.386719 23.40625 15.125 23.28125 L 34.4375 20.03125 C 34.53125 20.015625 34.628906 19.996094 34.71875 20 Z M 31 25.40625 L 31 30 L 29 30 L 29 25.75 Z M 27 26.0625 L 27 30 L 23 30 L 23 26.75 Z M 16 32 L 34 32 L 34 33.0625 C 34 36.355469 31.355469 39 28.0625 39 L 21.9375 39 C 18.644531 39 16 36.355469 16 33.0625 Z M 21 41 L 29 41 L 29 43 C 29 43.566406 28.566406 44 28 44 L 22 44 C 21.433594 44 21 43.566406 21 43 Z"></path></svg>`,
    'water-heater': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 18 C 3 19.093063 3.9069372 20 5 20 L 9 20 L 9 22 L 11 22 L 11 20 L 13 20 L 13 22 L 15 22 L 15 20 L 19 20 C 20.093063 20 21 19.093063 21 18 L 21 5 C 21 3.9069372 20.093063 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 12 L 17 12 L 17 14 L 19 14 L 19 18 L 5 18 L 5 14 L 7 14 L 7 12 L 5 12 L 5 5 z M 12 7 C 12 7 9 11.343 9 13 C 9 14.657 10.343 16 12 16 C 13.657 16 15 14.657 15 13 C 15 11.343 12 7 12 7 z M 12 12 C 12 12 13 13.448 13 14 C 13 14.552 12.552 15 12 15 C 11.448 15 11 14.552 11 14 C 11 13.448 12 12 12 12 z"></path></svg>`,
    'tv': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 0 7 L 0 39 L 50 39 L 50 7 Z M 2 9 L 48 9 L 48 37 L 2 37 Z M 10.8125 41 C 10.261719 41.050781 9.855469 41.542969 9.90625 42.09375 C 9.957031 42.644531 10.449219 43.050781 11 43 L 39 43 C 39.359375 43.003906 39.695313 42.816406 39.878906 42.503906 C 40.058594 42.191406 40.058594 41.808594 39.878906 41.496094 C 39.695313 41.183594 39.359375 40.996094 39 41 L 11 41 C 10.96875 41 10.9375 41 10.90625 41 C 10.875 41 10.84375 41 10.8125 41 Z"></path></svg>`,
    'lights': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 0.8125 3 C 0.335938 3.089844 -0.0078125 3.511719 0 4 L 0 30 C 0 30.550781 0.449219 31 1 31 L 7 31 C 7.550781 31 8 30.550781 8 30 L 8 18 L 8.09375 18 C 12.03125 18 15.503906 15.429688 16.84375 11.75 C 17.984375 8.761719 20.953125 6.75 24.40625 7 C 24.417969 7 24.425781 7 24.4375 7 C 28.171875 7.363281 31 10.800781 31 14.59375 L 31 20 L 33 20 L 33 14.59375 C 33 9.796875 29.445313 5.453125 24.59375 5 C 24.582031 5 24.574219 5 24.5625 5 C 20.226563 4.667969 16.421875 7.226563 14.96875 11.03125 C 14.96875 11.042969 14.96875 11.050781 14.96875 11.0625 C 13.90625 13.984375 11.15625 16 8.09375 16 L 8 16 L 8 4 C 8 3.449219 7.550781 3 7 3 L 1 3 C 0.96875 3 0.9375 3 0.90625 3 C 0.875 3 0.84375 3 0.8125 3 Z M 2 5 L 6 5 L 6 29 L 2 29 Z M 26.8125 21 C 26.335938 21.089844 25.992188 21.511719 26 22 L 26 27.5 L 14.40625 36.1875 C 14.148438 36.378906 14 36.679688 14 37 L 14 40 C 14.003906 40.550781 14.449219 40.996094 15 41 L 27.09375 41 C 27.5625 43.269531 29.597656 45 32 45 C 34.402344 45 36.4375 43.269531 36.90625 41 L 49 41 C 49.550781 40.996094 49.996094 40.550781 50 40 L 50 37 C 50 36.679688 49.851563 36.378906 49.59375 36.1875 L 38 27.5 L 38 22 C 38 21.449219 37.550781 21 37 21 L 27 21 C 26.96875 21 26.9375 21 26.90625 21 C 26.875 21 26.84375 21 26.8125 21 Z M 28 23 L 36 23 L 36 27 L 28 27 Z M 27.34375 29 L 36.65625 29 L 48 37.5 L 48 39 L 16 39 L 16 37.5 Z M 29.1875 41 L 34.8125 41 C 34.394531 42.15625 33.300781 43 32 43 C 30.699219 43 29.605469 42.15625 29.1875 41 Z"></path></svg>`, 'right-arrow': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">    <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path></svg>`, 'ac': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 5 0 C 2.253906 0 0 2.253906 0 5 L 0 20.90625 C 0 21.796875 0.234375 22.625 0.59375 23.34375 L 0.625 23.375 L 2.9375 27.5 C 3.8125 29 5.457031 30 7.3125 30 L 12 30 L 12 28 L 7.3125 28 C 6.175781 28 5.214844 27.390625 4.6875 26.5 L 4.40625 26 L 45.59375 26 L 45.3125 26.5 C 44.800781 27.355469 43.699219 28 42.6875 28 L 38 28 L 38 30 L 42.6875 30 C 44.46875 30 46.167969 29.035156 47.0625 27.5 L 49.375 23.375 L 49.40625 23.34375 C 49.765625 22.625 50 21.796875 50 20.90625 L 50 5 C 50 2.253906 47.746094 0 45 0 Z M 5 2 L 45 2 C 46.65625 2 48 3.34375 48 5 L 48 20 L 2 20 L 2 5 C 2 3.34375 3.34375 2 5 2 Z M 38 6 L 38 9.25 L 35.1875 7.625 L 34.1875 9.375 L 37 11 L 34.1875 12.625 L 35.1875 14.375 L 38 12.75 L 38 16 L 40 16 L 40 12.75 L 42.8125 14.375 L 43.8125 12.625 L 41 11 L 43.8125 9.375 L 42.8125 7.625 L 40 9.25 L 40 6 Z M 2.25 22 L 47.75 22 C 47.695313 22.148438 47.664063 22.296875 47.59375 22.4375 L 46.71875 24 L 3.28125 24 L 2.40625 22.4375 C 2.335938 22.296875 2.304688 22.148438 2.25 22 Z M 16 28 C 14.894531 28 14 28.894531 14 30 C 14 31.105469 14.894531 32 16 32 C 17.105469 32 18 31.105469 18 30 C 18 28.894531 17.105469 28 16 28 Z M 25 28 C 23.894531 28 23 28.894531 23 30 C 23 31.105469 23.894531 32 25 32 C 26.105469 32 27 31.105469 27 30 C 27 28.894531 26.105469 28 25 28 Z M 34 28 C 32.894531 28 32 28.894531 32 30 C 32 31.105469 32.894531 32 34 32 C 35.105469 32 36 31.105469 36 30 C 36 28.894531 35.105469 28 34 28 Z M 15 34 C 13.894531 34 13 34.894531 13 36 C 13 37.105469 13.894531 38 15 38 C 16.105469 38 17 37.105469 17 36 C 17 34.894531 16.105469 34 15 34 Z M 25 34 C 23.894531 34 23 34.894531 23 36 C 23 37.105469 23.894531 38 25 38 C 26.105469 38 27 37.105469 27 36 C 27 34.894531 26.105469 34 25 34 Z M 35 34 C 33.894531 34 33 34.894531 33 36 C 33 37.105469 33.894531 38 35 38 C 36.105469 38 37 37.105469 37 36 C 37 34.894531 36.105469 34 35 34 Z M 13 40 C 11.894531 40 11 40.894531 11 42 C 11 43.105469 11.894531 44 13 44 C 14.105469 44 15 43.105469 15 42 C 15 40.894531 14.105469 40 13 40 Z M 25 40 C 23.894531 40 23 40.894531 23 42 C 23 43.105469 23.894531 44 25 44 C 26.105469 44 27 43.105469 27 42 C 27 40.894531 26.105469 40 25 40 Z M 37 40 C 35.894531 40 35 40.894531 35 42 C 35 43.105469 35.894531 44 37 44 C 38.105469 44 39 43.105469 39 42 C 39 40.894531 38.105469 40 37 40 Z M 9 46 C 7.894531 46 7 46.894531 7 48 C 7 49.105469 7.894531 50 9 50 C 10.105469 50 11 49.105469 11 48 C 11 46.894531 10.105469 46 9 46 Z M 25 46 C 23.894531 46 23 46.894531 23 48 C 23 49.105469 23.894531 50 25 50 C 26.105469 50 27 49.105469 27 48 C 27 46.894531 26.105469 46 25 46 Z M 41 46 C 39.894531 46 39 46.894531 39 48 C 39 49.105469 39.894531 50 41 50 C 42.105469 50 43 49.105469 43 48 C 43 46.894531 42.105469 46 41 46 Z"></path></svg>`,
    'fan': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M 24.958984 8.0878906 C 24.463313 8.0878906 23.967809 8.1252646 23.476562 8.2050781 A 1.0001 1.0001 0 0 0 23.474609 8.2070312 C 21.963445 8.4547468 20.657714 8.6710608 18.671875 9.8203125 C 16.534948 11.056826 15.354289 12.14397 14.011719 13.597656 C 11.394272 16.431995 9.6907309 19.936537 9.1660156 23.734375 C 9.0867606 24.308703 9.046875 24.882663 9.046875 25.457031 C 9.046875 35.082888 17.203505 42.082031 26.75 42.082031 C 27.240797 42.082031 27.709646 42.041985 28.183594 42.011719 C 28.411312 43.351041 28.8507 44.619391 29.484375 45.769531 C 28.68854 47.129308 27.748674 48.039062 26.25 48.039062 C 24.686294 48.039062 23.892335 47.591155 23.019531 46.992188 C 22.146774 46.393224 21.203678 45.547212 19.708984 45.25 C 17.82088 44.874537 15.716767 44.857727 13.832031 45.738281 C 11.379023 46.883923 9.6241877 49.090255 8.7207031 51.548828 C 8.3129584 52.658247 8.0898438 53.842323 8.0898438 55.039062 C 8.0898438 55.534734 8.1272179 56.032192 8.2070312 56.523438 A 1.0001 1.0001 0 0 0 8.2089844 56.525391 C 8.4566999 58.036555 8.673014 59.342286 9.8222656 61.328125 C 11.058779 63.465052 12.145923 64.643758 13.599609 65.986328 C 16.433948 68.603774 19.93849 70.309269 23.736328 70.833984 C 24.310656 70.913244 24.886568 70.951172 25.460938 70.951172 C 35.086793 70.951172 42.083984 62.794542 42.083984 53.248047 C 42.083984 52.757518 42.043914 52.289996 42.013672 51.816406 C 43.353205 51.58843 44.621259 51.14773 45.771484 50.513672 C 47.131325 51.309507 48.042969 52.249373 48.042969 53.748047 C 48.042969 55.311753 47.59124 56.105757 46.992188 56.978516 C 46.393135 57.851274 45.547807 58.79643 45.25 60.291016 C 44.874537 62.17912 44.85968 64.283233 45.740234 66.167969 C 46.885876 68.620977 49.090255 70.373859 51.548828 71.277344 C 52.658247 71.685088 53.844276 71.910156 55.041016 71.910156 C 55.536687 71.910156 56.032192 71.870826 56.523438 71.791016 A 1.0001 1.0001 0 0 0 56.525391 71.791016 C 58.036555 71.5433 59.342286 71.325033 61.328125 70.175781 C 63.465052 68.939268 64.645711 67.852123 65.988281 66.398438 C 68.605728 63.564099 70.309269 60.06151 70.833984 56.263672 C 70.913244 55.689344 70.953125 55.113431 70.953125 54.539062 C 70.953125 44.913207 62.796495 37.914062 53.25 37.914062 C 52.759203 37.914062 52.290354 37.954109 51.816406 37.984375 C 51.588386 36.645892 51.149125 35.377959 50.515625 34.228516 C 51.311469 32.869301 52.251326 31.957031 53.75 31.957031 C 55.313706 31.957031 56.107665 32.406892 56.980469 33.005859 C 57.853273 33.604826 58.796322 34.450835 60.291016 34.748047 C 62.17912 35.12351 64.283233 35.14032 66.167969 34.259766 C 68.620977 33.114124 70.375812 30.907792 71.279297 28.449219 C 71.687042 27.3398 71.910156 26.15377 71.910156 24.957031 C 71.910156 24.46136 71.872786 23.965854 71.792969 23.474609 A 1.0001 1.0001 0 0 0 71.791016 23.472656 C 71.543305 21.961491 71.326986 20.655761 70.177734 18.669922 C 68.941221 16.532995 67.854077 15.354289 66.400391 14.011719 C 63.566052 11.394272 60.06151 9.6887778 56.263672 9.1640625 C 55.689344 9.0848074 55.113431 9.046875 54.539062 9.046875 C 44.913207 9.046875 37.916016 17.201552 37.916016 26.748047 C 37.916016 27.23951 37.955998 27.709018 37.986328 28.183594 C 36.647709 28.411415 35.380065 28.851 34.230469 29.484375 C 32.868812 28.688381 31.957031 27.749009 31.957031 26.248047 C 31.957031 24.684341 32.408774 23.890433 33.007812 23.017578 C 33.606851 22.144724 34.452156 21.201187 34.75 19.707031 A 1.0001 1.0001 0 0 0 34.75 19.705078 C 35.125463 17.816974 35.14032 15.714814 34.259766 13.830078 C 33.114122 11.377117 30.909745 9.6222346 28.451172 8.71875 C 27.341753 8.3110053 26.155724 8.0878906 24.958984 8.0878906 z M 24.958984 10.087891 C 25.904245 10.087891 26.863138 10.265448 27.761719 10.595703 C 29.793145 11.342219 31.566908 12.79079 32.447266 14.675781 C 33.076711 16.023045 33.1096 17.70451 32.789062 19.316406 C 32.603907 20.245251 32.043134 20.887573 31.357422 21.886719 C 30.67171 22.885864 29.957031 24.248753 29.957031 26.248047 C 29.957031 28.212908 31.00926 29.685902 32.392578 30.728516 C 29.712674 32.931337 28 36.269223 28 40 C 28 40.015161 28.001897 40.029773 28.001953 40.044922 C 27.59154 40.067658 27.175576 40.082031 26.75 40.082031 C 18.168495 40.082031 11.046875 33.959175 11.046875 25.457031 C 11.046875 24.9734 11.079734 24.491486 11.146484 24.007812 C 11.613769 20.625652 13.127868 17.50474 15.482422 14.955078 C 16.773852 13.556764 17.688802 12.698268 19.671875 11.550781 A 1.0001 1.0001 0 0 0 19.673828 11.550781 C 21.447989 10.524033 22.270039 10.429972 23.796875 10.179688 C 24.17963 10.117498 24.568656 10.087891 24.958984 10.087891 z M 54.539062 11.046875 C 55.022695 11.046875 55.506562 11.079734 55.990234 11.146484 C 59.372396 11.613769 62.493307 13.125915 65.042969 15.480469 C 66.441283 16.771899 67.299779 17.688802 68.447266 19.671875 C 69.474014 21.446036 69.568075 22.270039 69.818359 23.796875 C 69.880339 24.179013 69.910156 24.567354 69.910156 24.957031 C 69.910156 25.902292 69.732599 26.861185 69.402344 27.759766 C 68.655828 29.791192 67.207257 31.566908 65.322266 32.447266 C 63.975002 33.076711 62.293537 33.107646 60.681641 32.787109 C 59.752334 32.602321 59.110274 32.042955 58.111328 31.357422 C 57.112382 30.671889 55.749294 29.957031 53.75 29.957031 C 51.785952 29.957031 50.313625 31.010125 49.271484 32.392578 C 47.068663 29.712674 43.73078 28 40 28 C 39.984181 28 39.96893 28.001892 39.953125 28.001953 C 39.930326 27.590447 39.916016 27.174216 39.916016 26.748047 C 39.916016 18.166542 46.03692 11.046875 54.539062 11.046875 z M 44 25 A 1 1 0 0 0 44 27 A 1 1 0 0 0 44 25 z M 48 27 A 1 1 0 0 0 48 29 A 1 1 0 0 0 48 27 z M 40 30 C 43.540316 30 46.635699 31.832375 48.412109 34.597656 A 1.0001 1.0001 0 0 0 48.474609 34.716797 C 49.288865 36.019242 49.813362 37.510029 49.955078 39.115234 A 1.0001 1.0001 0 0 0 49.957031 39.126953 C 49.981902 39.41544 50 39.704919 50 40 C 50 43.536227 48.172034 46.628832 45.412109 48.40625 A 1.0001 1.0001 0 0 0 45.283203 48.472656 C 43.98058 49.287023 42.490997 49.811399 40.884766 49.953125 A 1.0001 1.0001 0 0 0 40.851562 49.957031 C 40.569987 49.980708 40.287837 50 40 50 C 36.461245 50 33.36664 48.169484 31.589844 45.40625 C 31.588759 45.404563 31.588975 45.402079 31.587891 45.400391 A 1.0001 1.0001 0 0 0 31.525391 45.28125 C 30.711023 43.978627 30.186648 42.489045 30.044922 40.882812 A 1.0001 1.0001 0 0 0 30.042969 40.869141 C 30.018318 40.58191 30 40.293764 30 40 C 30 36.459686 31.832375 33.364302 34.597656 31.587891 A 1.0001 1.0001 0 0 0 34.716797 31.525391 C 36.019242 30.711135 37.510029 30.186638 39.115234 30.044922 A 1.0001 1.0001 0 0 0 39.126953 30.042969 C 39.41544 30.018098 39.704919 30 40 30 z M 28 31 A 1 1 0 0 0 28 33 A 1 1 0 0 0 28 31 z M 40 34 C 38.083334 34 36.518559 34.754756 35.501953 35.898438 C 34.485347 37.042119 34 38.527778 34 40 C 34 41.472222 34.485347 42.957881 35.501953 44.101562 C 36.518559 45.245244 38.083334 46 40 46 C 43.301865 46 46 43.301863 46 40 C 46 36.698137 43.301865 34 40 34 z M 26 35 A 1 1 0 0 0 26 37 A 1 1 0 0 0 26 35 z M 40 36 C 42.220986 36 44 37.779015 44 40 C 44 42.220985 42.220986 44 40 44 C 38.583334 44 37.648107 43.504755 36.998047 42.773438 C 36.347987 42.042119 36 41.027778 36 40 C 36 38.972222 36.347987 37.957881 36.998047 37.226562 C 37.648107 36.495244 38.583334 36 40 36 z M 53.25 39.914062 C 61.831505 39.914062 68.953125 46.03692 68.953125 54.539062 C 68.953125 55.022695 68.920266 55.506562 68.853516 55.990234 C 68.38593 59.371674 66.871696 62.491826 64.517578 65.041016 C 63.226148 66.43933 62.311198 67.297826 60.328125 68.445312 A 1.0001 1.0001 0 0 0 60.326172 68.445312 C 58.552011 69.472061 57.729961 69.566122 56.203125 69.816406 C 55.82037 69.878596 55.431344 69.910156 55.041016 69.910156 C 54.095755 69.910156 53.136862 69.730646 52.238281 69.400391 C 50.206855 68.653875 48.433092 67.205304 47.552734 65.320312 C 46.923289 63.973048 46.8904 62.293537 47.210938 60.681641 C 47.39613 59.752227 47.95688 59.11032 48.642578 58.111328 C 49.328276 57.112336 50.042969 55.747341 50.042969 53.748047 C 50.042969 51.785027 48.990943 50.313531 47.609375 49.271484 C 50.288586 47.068652 52 43.730217 52 40 C 52 39.983523 51.998114 39.967633 51.998047 39.951172 C 52.40846 39.928436 52.824424 39.914063 53.25 39.914062 z M 54 43 A 1 1 0 0 0 54 45 A 1 1 0 0 0 54 43 z M 52 47 A 1 1 0 0 0 52 49 A 1 1 0 0 0 52 47 z M 16.898438 47.025391 C 17.688699 46.979043 18.512411 47.050669 19.318359 47.210938 C 20.247666 47.395725 20.889726 47.955092 21.888672 48.640625 C 22.887618 49.326158 24.250706 50.039063 26.25 50.039062 C 28.213442 50.039062 29.686431 48.988894 30.728516 47.607422 C 32.931337 50.287326 36.26922 52 40 52 C 40.015819 52 40.03107 51.998108 40.046875 51.998047 C 40.069539 52.407828 40.083984 52.823151 40.083984 53.248047 C 40.083984 61.829552 33.963081 68.951172 25.460938 68.951172 C 24.977305 68.951172 24.493438 68.918302 24.009766 68.851562 C 20.627604 68.384278 17.506693 66.872132 14.957031 64.517578 C 13.558717 63.226148 12.700221 62.309245 11.552734 60.326172 C 10.526475 58.552856 10.431658 57.728564 10.181641 56.203125 L 10.181641 56.201172 C 10.119661 55.819033 10.089844 55.42874 10.089844 55.039062 C 10.089844 54.093803 10.267401 53.136862 10.597656 52.238281 C 11.344172 50.206855 12.792743 48.431139 14.677734 47.550781 C 15.351366 47.236058 16.108176 47.071738 16.898438 47.025391 z M 32 51 A 1 1 0 0 0 32 53 A 1 1 0 0 0 32 51 z M 36 53 A 1 1 0 0 0 36 55 A 1 1 0 0 0 36 53 z"></path></svg>`,
    'door': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 6.8125 0 C 6.335938 0.0898438 5.992188 0.511719 6 1 L 6 49 C 6 49.550781 6.449219 50 7 50 L 43 50 C 43.550781 50 44 49.550781 44 49 L 44 1 C 44 0.449219 43.550781 0 43 0 L 7 0 C 6.96875 0 6.9375 0 6.90625 0 C 6.875 0 6.84375 0 6.8125 0 Z M 8 2 L 42 2 L 42 48 L 40 48 L 40 5 C 40 4.449219 39.550781 4 39 4 L 11 4 C 10.96875 4 10.9375 4 10.90625 4 C 10.390625 4.046875 9.996094 4.480469 10 5 L 10 48 L 8 48 Z M 12 6 L 38 6 L 38 48 L 12 48 Z M 32 24 C 30.894531 24 30 24.894531 30 26 C 30 27.105469 30.894531 28 32 28 C 33.105469 28 34 27.105469 34 26 C 34 24.894531 33.105469 24 32 24 Z"></path></svg>`
};
let curr_meter = 0.0;
const deviceList = (room) => {
    $('#show-devices').html("");
    if (room == null || room == 'all') {
        for (let i = 0; i < Object.keys(data.devices).length; i++) {
            $('#show-devices').append(`<div data-id="4ae36c" data-rel="${i}" class="device ${(data.devices[i].active == true) ? 'active_device' : ''} ${data.devices[i].room}">
                <div class="avatar">${devavatar[data.devices[i].avatar]}</div>
                <span class="devname">${data.devices[i].name}</span><br>
                <span class="room">${data.rooms[data.devices[i].room].name}</span>
                <div class="switch">
                    <input type="checkbox" class="room_based switch" ${(data.devices[i].active == true) ? 'checked' : ''}>
                </div> 
            </div>`);
        }
    }
    else {
        for (let i = 0; i < Object.keys(data.devices).length; i++) {
            if (data.devices[i].room == room) {
                $('#show-devices').append(`<div data-id="4ae36c" data-rel="${i}" class="device ${(data.devices[i].active == true) ? 'active_device' : ''} ${data.devices[i].room}">
                <div class="avatar">${devavatar[data.devices[i].avatar]}</div>
                <span class="devname">${data.devices[i].name}</span><br>
                <span class="room">${data.rooms[data.devices[i].room].name}</span>
                <div class="switch">
                    <input type="checkbox" class="room_based switch" ${(data.devices[i].active == true) ? 'checked' : ''}>
                </div> 
            </div>`);
            }
        }
    }
    $(".room_based").on("click", (e) => {
        if ($(e.currentTarget).eq(0).attr("checked")) {
            $(e.currentTarget.parentElement.parentElement).addClass("active_device");
            data.devices[$(e.currentTarget.parentElement.parentElement).attr('data-rel')].active = true;
        }
        else {
            $(e.currentTarget.parentElement.parentElement).removeClass("active_device");
            data.devices[$(e.currentTarget.parentElement.parentElement).attr('data-rel')].active = false;
        }
    });
};
const init = () => {
    $(".user-name").html(data.user.name);
    $(".profile_pic").css({ 'background-image': `url(${data.user.profile})` });
    const readMeter = () => {
        curr_meter = Math.random() + curr_meter;
        $(".curr_usage").html(`${curr_meter.toFixed(2)}`);
    };
    const show_rooms = () => {
        $('#show-rooms').html(`<span data-rel="all" class="active_room rooms_nav">All Rooms</span>`);
        let track = 0;
        for (let name in data.rooms) {
            $('#show-rooms').append(`<span data-rel="${name}" class="rooms_nav">${data.rooms[name].name}</span>`);
            if (track != 2) {
                (track = track + 1);
            }
            else {
                break;
            }
            ;
        }
        $('#show-rooms').append(`<span id="room-all">more</span>`);
    };
    show_rooms();
    deviceList(null);
    setInterval(readMeter, 1000);
    for (let i = 0; i < Object.keys(data.devices).length; i++) {
        data.rooms[data.devices[i].room].connected = data.rooms[data.devices[i].room].connected + 1;
        data.rooms[data.devices[i].room].example.push(data.devices[i].name);
    }
    for (let i in data.security.camera) {
        data.rooms[data.security.camera[i].location].camera.push(data.security.camera[i].name);
    }
};
const eventListnerReset = () => {
    $('.rooms_nav').off().on("click", (e) => {
        $('.active_room').removeClass('active_room');
        $(e.currentTarget).addClass('active_room');
        $(`.device`).css({ 'transform': 'scale(0)' });
        setTimeout(() => { deviceList($(e.currentTarget).attr('data-rel')); }, 200);
    });
    $('#room-all').off().on("click", () => {
        prev_state.home = document.getElementById('main').innerHTML;
        $('#main').css({ 'transition': '.2s all ease-in-out', 'transform': 'translate(-100%)' });
        $('.bottombar').addClass('hide');
        setTimeout(() => {
            $('#main').css({ 'transition': 'none', 'transform': 'translate(300px)', 'opacity': '0' }).html('<div id="room_all"></div>');
            for (let name in data.rooms) {
                $('#room_all').append(`<div class="show_roomlist" data-room="${name}"><div>${data.rooms[name].name}<br><span>${data.rooms[name].connected} connected ${(data.rooms[name].connected == 1) ? 'device' : 'devices'} like ${data.rooms[name].example[0]}</span></div><div class="arrow">${devavatar["right-arrow"]}</div></div>`);
            }
            setTimeout(() => {
                $('#main').css({ 'transition': '.2s all ease-in-out', 'transform': 'translate(0)', 'opacity': '1' });
                setTimeout(() => {
                    eventListnerReset();
                    $("#go-back").removeClass('hide');
                }, 50);
            }, 50);
        }, 200);
    });
    $('#go-back').off().on('click', backToMain);
    $('.show_roomlist').off().on('click', (e) => {
        const selectedRoom = $(e.currentTarget).attr('data-room');
        let found = false;
        backToMain();
        setTimeout(() => {
            for (let i = 0; i < document.querySelectorAll('.rooms_nav').length; i++) {
                console.log([i, $(".rooms_nav").eq(i).attr('data-rel'), selectedRoom]);
                if ($(".rooms_nav").eq(i).attr('data-rel') == selectedRoom) {
                    $('.active_room').removeClass('active_room');
                    $(".rooms_nav").eq(i).addClass("active_room");
                    found = true;
                    break;
                }
            }
            if (found == false)
                $('.active_room').removeClass('active_room');
        }, 500);
        setTimeout(() => { deviceList(selectedRoom); }, 200);
    });
};
const backToMain = () => {
    $('#main').css({ 'transition': '.2s all ease-in-out', 'transform': 'translate(-100%)' });
    $("#go-back").addClass('hide');
    setTimeout(() => {
        $('#main').css({ 'transition': 'none', 'transform': 'translate(300px)', 'opacity': '0' }).html("");
        $('#main').append(prev_state.home);
        setTimeout(() => {
            $('#main').css({ 'transition': '.2s all ease-in-out', 'transform': 'translate(0)', 'opacity': '1' });
            setTimeout(() => {
                $('.bottombar').removeClass('hide');
                eventListnerReset();
            }, 100);
        }, 50);
    }, 200);
};
$('.nav_navigator').on('click', (e) => {
    prev_state[$('.active').attr('id')] = document.getElementById('main').innerHTML;
    $('.active').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('#main').css({ 'transform': 'scale(1.5)', 'opacity': '0', 'transition': '.3s all cubic-bezier(0.23, 1, 0.320, 1)' });
    const actionType = (dom, action) => {
        if (dom == 'acc')
            (action == 1) ? $("#top_panel").css({ 'transform': 'scale(1)', 'transition': '.2s all cubic-bezier(0.23, 1, 0.320, 1)', 'opacity': '1', 'max-height': 'max-content', 'padding': '10px 6px' }) : $("#top_panel").css({ 'transform': 'scale(0)', 'transition': '.2s all cubic-bezier(0.23, 1, 0.320, 1)', 'opacity': '0', 'max-height': '0' });
        if (dom == 'metrics')
            (action == 1) ? $(".metrics").css({ 'transform': 'scale(1)', 'transition': '.2s all cubic-bezier(0.23, 1, 0.320, 1)', 'opacity': '1', 'max-height': 'max-content', 'padding': '20px', 'margin': '10px 10px' }) : $(".metrics").css({ 'transform': 'scale(0)', 'transition': '.2s all cubic-bezier(0.23, 1, 0.320, 1)', 'opacity': '0', 'max-height': '0', 'padding': '0', 'margin': '0' });
    };
    if (e.currentTarget.id == "home") {
        setTimeout(() => {
            actionType('acc', 1);
            actionType('metrics', 1);
            $('#main').css({ 'transform': 'scale(1)', 'opacity': '1', 'transition': '.3s all cubic-bezier(0.23, 1, 0.320, 1)' }).html(prev_state["home"]);
            eventListnerReset();
        }, 300);
    }
    else {
        setTimeout(() => {
            actionType('metrics', 0);
            $('#main').css({ 'transform': 'scale(1)', 'opacity': '1', 'transition': '.3s all cubic-bezier(0.23, 1, 0.320, 1)' }).html("");
            switch (e.currentTarget.id) {
                case 'report':
                    actionType('acc', 1);
                    generate_report();
                    break;
                case 'security':
                    actionType('acc', 1);
                    security_services();
                    break;
                case 'settings':
                    actionType('acc', 0);
                    $("#top_panel").css({ 'transform': 'scale(0)', 'transition': '.2s all cubic-bezier(0.23, 1, 0.320, 1)', 'opacity': '0', 'max-height': '0', 'padding': '0', 'margin': '0' });
                    settings();
                    break;
                default:
                    throw new Error("Invalid call onto a system element");
                    break;
            }
        }, 300);
    }
});
init();
eventListnerReset();
const generate_report = () => {
    throw new Error("Function not implemented.");
};
const security_services = () => {
    $('#main').html(`<div class="security-container" id="security-container"></div>`);
    $('#security-container').append(`${(data.security.state == 0) ? `<div class="alarm disarm"><h4>The Alarm is currently<br><span>disarmed</span></span></h4><button>Arm</button></div>` : `<div class="alarm arm"><h4>The alarm is currently <br><span>armed</span></h4><button>Disarm</button></div>`}`);
    $('#security-container').append(`<div id="activity_nearby"><h3>Recent Activity</h3></div>`);
    for (let i in data.security.activity) {
        $('#activity_nearby').append(`<div class="activity_container">
        <div class="class_activity alert"></div>
            <div class="activity_icon">${devavatar[data.security.activity[i].avatar]}</div>
            <div class="acitivity_detail">
                <span class="data-location">${data.security.activity[i].location}</span>
                <span class="data-time">${data.security.activity[i].time}</span>
            </div>
        </div>`);
        if (+i == 2) {
            $('#activity_nearby').append('<button>Open Activity Panel</button>');
            break;
        }
    }
    $('#security-container').append('<div id="camera_monitor" class=""></div>');
    $('#camera_monitor').append(`<h4>All Surveillance Camera</h4>`);
    for (let i in data.security.camera) {
        if (data.security.camera[i].active == false) {
            $('#camera_monitor').append(`<div class="cctv_preview off" data-name="${data.security.camera[i].name}" data-location="${data.security.camera[i].location}" data-ip="${data.security.camera[i].ip}" data-rel="${i}"><span class="dev_name">${data.security.camera[i].name} at ${data.rooms[data.security.camera[i].location].name} has</span><h4>No Signal</h4></div>`);
        }
    }
};
const settings = () => {
    let accessType, accessDefinition;
    switch (data.user.access) {
        case 0:
            accessType = 'Guest Account';
            accessDefinition = "You are currently logged in with guest account";
            break;
        case 1:
            accessType = 'Adult Account';
            accessDefinition = `You currently has limited access over this network.`;
            break;
        case 2:
            accessType = 'Child Account';
            accessDefinition = `You currently has limited access over some endpoints.`;
            break;
        case 3:
            accessType = 'Administrator';
            accessDefinition = "You currently has unlimited access over all endpoints";
            break;
        default:
            accessType = 'Misconfiguration';
            accessDefinition = `Appication encountered an error. ERR: ACC_INVUSRC`;
            break;
    }
    $('#main').html(`<div class="settings-container" id="settings-container"></div>`);
    $('#settings-container').append(`<div class="account"><div><span class="user_name">${data.user.name}</span><span class="accessLevel">${accessType}</span><span class="accessDefinition">${accessDefinition}</span></div><div class="profile_image_settings" style="background-image: url('${data.user.profile}')"></div></div>`);
    $('#settings-container').append(`<div class="app_settings_display"><h3>nuvie HomeKit<sup>+</sup></h3><p>Home Automation System<br><span>Build 2021 | V2.1 Beta</span></p><div class="storage_show"><div><span class="storage_used" style="width: ${((data.system.storage.curr / data.system.storage.max) * 100).toPrecision(2)}%"></span><span style="width: ${(100 - ((data.system.storage.curr / data.system.storage.max) * 100)).toPrecision(2)}%"></span></div><div class="representStorage"><span>Total: ${data.system.storage.max / 1024} GB</span><span>Available: ${((data.system.storage.max - data.system.storage.curr) / 1024).toPrecision(2)} GB</span></div></div><button class="reboot">Reboot System</button></div>`);
    $('#settings-container').append(`<div class="app_settings_display"><div class="option_settings"><div><div><h3>Send Error Diagnostic Data to nuvie</h3><p>Optional, but turning this feature on will help us identify issues and rectify it. The data will be sent anonymously</p></div><div class="option_control"><div class="switch"><input type="checkbox" class="room_based switch" </div></div></div><div></div></div></div>

    <div class="app_settings_display"><div class="option_settings"><div><div><h3>Turn on alert notifications</h3><p>Disabled low/medium alert notifications from being sent to your phone. NOt recommended to be turned off.</p></div><div class="option_control"><div class="switch"><input type="checkbox" class="room_based switch" </div></div></div><div></div></div></div>`);
};
