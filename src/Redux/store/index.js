import { createStore } from 'redux'
import reducers from '../reducers'
import img1 from '../temp/testAvatar.png'
import img2 from '../temp/testimage2.jpg'
import img3 from '../temp/testimage3.jpeg'
import av1 from '../temp/avatar1.png'
import av2 from '../temp/avatar2.png'
import av3 from '../temp/avatar3.jpg'

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
                    id : 'sdfjgdsfkgjlksdfg',
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
                            likes : [],
                            id : 'sdgnjlkdfhgkdsjglkdfsg',
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
                    likes : [{userName: 'mikstime'}],
                    id : 'r23ihornflj3nf3',
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
                        alt : "Interesting image",
                        srcSet : img1,
                    },
                    comments : [
                        {
                            likes : [],
                            id : '3njkerfnelkferf',
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
                    likes : [{userName: 'mikstime'}],
                    id : 'fgnjergndkfgjnnjkf3',
                    author : {
                        userName : 'mikstime',
                        avatar : {
                            src : av1,
                            alt : "Mikstime's avatar",
                            srcSet : av1,
                        },
                    },
                    image : {
                        src : img3,
                        alt : "Interesting image",
                        srcSet : img3,
                    },
                    comments : [
                        {
                            likes : [],
                            id : 'dfgn3j4kltnlredfsx.',
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
                    likes : [{userName: 'mikstime'}],
                    id : 'dfngklerjn34klmfe',
                    author : {
                        userName : 'mikstime',
                        avatar : {
                            src : av1,
                            alt : "Mikstime's avatar",
                            srcSet : av1,
                        },
                    },
                    image : {
                        src : av1,
                        alt : "Interesting image",
                        srcSet : av1,
                    },
                    comments : [
                        {
                            likes : [],
                            id : '2ijocsmcoiewf',
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
                    likes : [{userName: 'mikstime'}],
                    id : '2neirgvndfl',
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
                            likes : [],
                            id : '23jnkferwklfjd',
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
                    id : 'wnrglkwrngvwlkre3',
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
                            likes : [],
                            id : '34kn3l4fipo',
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
                            likes : [],
                            id : '23mf3io4ewsdm',
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
                    id : '23neoi3cer',
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
                            likes : [],
                            id : '23dm2pm2od2',
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
        avatar :  {
            src : av1,
            alt : "Mikstime's avatar",
            srcSet : av1,
        },
        posts : [
            {
                likes : [{userName: 'mikstime'}],
                id : 'sdfjgdsfkgjlksdfg',
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
                        likes : [],
                        id : 'sdgnjlkdfhgkdsjglkdfsg',
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
                likes : [{userName: 'mikstime'}],
                id : 'r23ihornflj3nf3',
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
                    alt : "Interesting image",
                    srcSet : img1,
                },
                comments : [
                    {
                        likes : [],
                        id : '3njkerfnelkferf',
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
                likes : [{userName: 'mikstime'}],
                id : 'fgnjergndkfgjnnjkf3',
                author : {
                    userName : 'mikstime',
                    avatar : {
                        src : av1,
                        alt : "Mikstime's avatar",
                        srcSet : av1,
                    },
                },
                image : {
                    src : img3,
                    alt : "Interesting image",
                    srcSet : img3,
                },
                comments : [
                    {
                        likes : [],
                        id : 'dfgn3j4kltnlredfsx.',
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
                likes : [{userName: 'mikstime'}],
                id : 'dfngklerjn34klmfe',
                author : {
                    userName : 'mikstime',
                    avatar : {
                        src : av1,
                        alt : "Mikstime's avatar",
                        srcSet : av1,
                    },
                },
                image : {
                    src : av1,
                    alt : "Interesting image",
                    srcSet : av1,
                },
                comments : [
                    {
                        likes : [],
                        id : '2ijocsmcoiewf',
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
                likes : [{userName: 'mikstime'}],
                id : '2neirgvndfl',
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
                        likes : [],
                        id : '23jnkferwklfjd',
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
            id : 'sdfmnoi32nds2i3opsm2k',
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
                    likes : [],
                    id : '2gmio2v43iokv4v',
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
            id : '24jh23ioe2po12',
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
                    likes : [],
                    id : '21mnsoi2ns1io1',
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
                    likes : [],
                    id : '2fm2pofpomf43',
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
            id : '2f2pofm1omf32',
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
                    likes : [],
                    id : 'm23pof2m3fo32fop3',
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