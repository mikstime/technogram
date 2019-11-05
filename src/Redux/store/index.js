import { createStore } from 'redux'
import reducers from '../reducers'
import img1 from '../temp/testAvatar.png'
import img2 from '../temp/testimage2.jpg'
import img3 from '../temp/testimage3.jpeg'
import av1 from '../temp/avatar1.png'
import av2 from '../temp/avatar2.png'
import av3 from '../temp/avatar3.jpg'
import uuid from 'uuid/v4'

const INITIAL_STATE = {
    users : {
        mikstime : {
            userName : 'mikstime',
            pseudonym : 'Padre Mikstimio',
            avatar : {
                src : av1,
                alt : "Mikstime's avatar",
                srcSet : av1,
            },
            posts : [
                {
                    likes : [{userName: 'mikstime'}],
                    id : uuid(),
                    author : {
                        userName : 'mikstime',
                        avatar : {
                            src : av1,
                            alt : "Mikstime's avatar",
                            srcSet : av1,
                        },
                    },
                    image : {
                        src : img2,
                        alt : "Interesting image",
                        srcSet : img2,
                    },
                    comments : [
                        {
                            text : "That's Incredible!!!",
                            author : {
                                userName : 'mikstime',
                                avatar : {
                                    src : av1,
                                    alt : "Mikstime's avatar",
                                    srcSet : av1,
                                },
                            },
                            date : '3d',
                        }
                    ]
                },
            ]
        },
        Tolya28 : {
            userName : 'Tolya28',
            pseudonym : 'Tolyan SuperMan',
            avatar : {
                src : av2,
                alt : "Tolya28's avatar",
                srcSet : av2,
            },
            posts : [
                {
                    likes : [],
                    id : uuid(),
                    author : {
                        userName : 'Tolya28',
                        avatar : {
                            src : av2,
                            alt : "Tolya28's avatar",
                            srcSet : av2,
                        },
                    },
                    image : {
                        src : img2,
                        alt : "Car or not",
                        srcSet : img2,
                    },
                    comments : [
                        {
                            text : "Интересный пост!",
                            author : {
                                userName : 'Anton14',
                                avatar : {
                                    src : av3,
                                    alt : "Anton14's avatar",
                                    srcSet : av3,
                                },
                            },
                            date : '3d',
                        },
                        {
                            text : "Два комментария под ряд",
                            author : {
                                userName : 'Anton14',
                                avatar : {
                                    src : av3,
                                    alt : "Anton14's avatar",
                                    srcSet : av3,
                                },
                            },
                            date : '2d',
                        }
                    ]
                },
            ],
        },
        Anton14 : {
            userName : 'Anton14',
            pseudonym : 'Antoshka-kartoshka',
            avatar : {
                src : av3,
                alt : "Anton14's avatar",
                srcSet : av3,
            },
            posts : [
                {
                    likes : [],
                    id : uuid(),
                    author : {
                        userName : 'Anton14',
                        avatar : {
                            src : av3,
                            alt : "Anton14's avatar",
                            srcSet : av3,
                        },
                    },
                    image : {
                        src : img3,
                        alt : "Some fancy stuff",
                        srcSet : img3,
                    },
                    comments : [
                        {
                            text : "Бывало и хуже =с",
                            author : {
                                userName : 'mikstime',
                                avatar : {
                                    src : av1,
                                    alt : "Mikstime's avatar",
                                    srcSet : av1,
                                },
                            },
                            date : '3d',
                        }
                    ]
                },
            ]
        },
    },
    user : {
        userName : 'mikstime',
        pseudonym : 'Padre Mikstimio',
        avatar : av1,
        posts : [
            {
                likes : [],
                id : uuid(),
                author : {
                    userName : 'mikstime',
                    avatar : {
                        src : av1,
                        alt : "Mikstime's avatar",
                        srcSet : av1,
                    },
                },
                image : {
                    src : img1,
                    alt : "Mikstime's avatar",
                    srcSet : img1,
                },
                comments : [
                    {
                        text : "That's Incredible!!!",
                        author : {
                            userName : 'mikstime',
                            avatar : {
                                src : av1,
                                alt : "Mikstime's avatar",
                                srcSet : av1,
                            },
                        },
                        date : '3d',
                    }
                ]
            },
        ]
    },
    posts : [
        {
            likes : [],
            id : uuid(),
            author : {
                userName : 'mikstime',
                avatar : {
                    src : av1,
                    alt : "Mikstime's avatar",
                    srcSet : av1,
                },
            },
            image : {
                src : img2,
                alt : "Interesting image",
                srcSet : img2,
            },
            comments : [
                {
                    text : "That's Incredible!!!",
                    author : {
                        userName : 'mikstime',
                        avatar : {
                            src : av1,
                            alt : "Mikstime's avatar",
                            srcSet : av1,
                        },
                    },
                    date : '3d',
                }
            ]
        },
        {
            likes : [],
            id : uuid(),
            author : {
                userName : 'Tolya28',
                avatar : {
                    src : av2,
                    alt : "Tolya28's avatar",
                    srcSet : av2,
                },
            },
            image : {
                src : img2,
                alt : "Car or not",
                srcSet : img2,
            },
            comments : [
                {
                    text : "Интересный пост!",
                    author : {
                        userName : 'Anton14',
                        avatar : {
                            src : av3,
                            alt : "Anton14's avatar",
                            srcSet : av3,
                        },
                    },
                    date : '3d',
                },
                {
                    text : "Два комментария под ряд",
                    author : {
                        userName : 'Anton14',
                        avatar : {
                            src : av3,
                            alt : "Anton14's avatar",
                            srcSet : av3,
                        },
                    },
                    date : '2d',
                }
            ]
        },
        {
            likes : [],
            id : uuid(),
            author : {
                userName : 'Anton14',
                avatar : {
                    src : av3,
                    alt : "Anton14's avatar",
                    srcSet : av3,
                },
            },
            image : {
                src : img3,
                alt : "Some fancy stuff",
                srcSet : img3,
            },
            comments : [
                {
                    text : "Бывало и хуже =с",
                    author : {
                        userName : 'mikstime',
                        avatar : {
                            src : av1,
                            alt : "Mikstime's avatar",
                            srcSet : av1,
                        },
                    },
                    date : '3d',
                }
            ]
        },
    ],
}
export default createStore(reducers, INITIAL_STATE)