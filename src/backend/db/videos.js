/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";
// https://i.ytimg.com/vi/ewMksAbgdBI/maxresdefault.jpg

export const videos = [
    {
        _id: uuid(),
        title: "Alaska (Dolby Vision)",
        createdAt: "Mar 25, 2022",
        creator: "Jacob + Katie Schwarz",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/CHSnz0bCaUk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCR0OjBvSnJhps2bvEZh6eW6ql2Hg",
        src: "https://www.youtube.com/embed/CHSnz0bCaUk",
        views: 4804,
        videoLength: "4:27",
        category: "tropical",
        continent: "america",
        description: `Explore Juneau, Alaska with us as we navigate through an Alaskan summer. We visited the Tracy Arm Fjord, Mendenhall Glacier, Pack Creek bears, Hoonah, and some beautiful Juneau icebergs.

        To view at 8K 60P you'll need to use Chrome.`,
    },
    {
        _id: uuid(),
        title: "Uzbekistan (Dolby Vision)",
        createdAt: "Jul 8, 2019",
        creator: "Jacob + Katie Schwarz",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/vQVwkyn3-F8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByWtV7T5p9qOs2tQ7oQtBYnCpUww",
        src: "https://www.youtube.com/embed/vQVwkyn3-F8",
        views: 2129,
        videoLength: "4:21",
        category: "deserts",
        continent: "asia",
        description: `We were invited to Uzbekistan by the Ministry of Tourism to capture this diverse and beautiful country. Travel with us to the Samarkand mosques and mausoleums,  the city of Tashkent and its uniquely beautiful underground Metro, The Samanid Mausoluem in Bukhara, the Juma Mosque, and the Itchan Kala in Khiva and more.`,
    },
    {
        _id: uuid(),
        title: "Bulgaria (Dolby Vision)",
        createdAt: "Dec 29, 2018",
        creator: "Jacob + Katie Schwarz",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/N1-Jmq7BLFE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_Ts2No8mioag552noUN_M9dcarQ",
        src: "https://www.youtube.com/embed/N1-Jmq7BLFE",
        views: 7809,
        videoLength: "5:40",
        category: "mountains",
        continent: "europe",
        description: `We were invited to Bulgaria by "Our Home is Bulgaria" to explore the country for the first time this year and it was an amazing experience to travel through this space with so much history and diverse landscapes. Some of the places we feature here are the Seven Rila Lakes, Alexander Nevsky Cathedral, Thracian Tomb of Kazanlak,  Belogradchik Fortress, Devetashka cave, and Mount Buzludzha. `,
    },
    {
        _id: uuid(),
        title: "Morocco (Dolby Vision)",
        createdAt: "Jul 17, 2018",
        creator: "Jacob + Katie Schwarz",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/hVvEISFw9w0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_arnmMCuE2CYd3P5o0n1cfJCCxg",
        src: "https://www.youtube.com/embed/hVvEISFw9w0",
        views: 8760,
        videoLength: "4:56",
        category: "deserts",
        continent: "africa",
        description: `Morocco in 8k follows our journey through this enchanting country. Exploring the streets and markets of Marrakech, Fez, the blue city of Chefchaouen, the Arfoud desert, and the ancient city of Ouarzazate. 
        MUSIC
► Bytheway May "Latent"

► SHOT ON
Red Monstro Vista Vision Sensor
Canon 16-35mm III  
Canon 70-200mm II
MOVI PRO
Final Cut and DaVinci Resolve`,
    },
    {
        _id: uuid(),
        title: "Costa Rica (Dolby Vision)",
        createdAt: "Jun 13, 2018",
        creator: "Jacob + Katie Schwarz",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/LXb3EKWsInQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4wSJfkfvSUtiCctwlo7thMOlAiw",
        src: "https://www.youtube.com/embed/LXb3EKWsInQ",
        views: 2047,
        videoLength: "5:14",
        category: "tropical",
        continent: "america",
        description: `► SHOT ON
        Red Weapon LE w/Helium 8K s35 sensor (Stormtrooper33)
        Canon 16-35mm III  
        Canon 24-70mm II
        Sigma 150-500mm
        Zeiss Classic 15mm
        MOVI M10
        Adobe Premiere and DaVinci Resolve`,
    },
    {
        _id: uuid(),
        title: "Venice (Dolby Vision)",
        createdAt: "Jun 21, 2017",
        creator: "Jacob + Katie Schwarz",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/GTGm7mye-_4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9xH9QBGPZeqA6Lh7xMu4PDdh5-Q",
        src: "https://www.youtube.com/embed/GTGm7mye-_4",
        views: 9668,
        videoLength: "2:46",
        category: "urban",
        continent: "europe",
        description: `
        MUSIC
        ► Dexter Britain “Seeing the Future”
        
        SHOT ON
        Red Weapon LE w/Mysterium sensor 
        Canon 16-35mm III  
        Canon 24-70mm II
        Sigma 150-500mm
        Zeiss Classic 15mm
        MOVI M10
        Adobe Premiere and DaVinci Resolve
        
        LICENSING & BUSINESS INQUIRIES
        ► contact@mysterybox.us
        
        This video is subject to copyright owned by Mystery Box LLC. Any reproduction or republication of all or part of this video is expressly prohibited, unless Mystery Box has explicitly granted its prior written consent. All other rights reserved.
        
        Copyright © 2017 Mystery Box, LLC. All Rights Reserved.`,
    },
    {
        _id: uuid(),
        title: "Peru (Dolby Vision)",
        createdAt: "Apr 10, 2017",
        creator: "Jacob + Katie Schwarz",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/1La4QzGeaaQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOZkeEAOiYUlC3kY8NEri5ucCQ2A",
        src: "https://www.youtube.com/embed/1La4QzGeaaQ",
        views: 6020,
        videoLength: "5:38",
        category: "tropical",
        continent: "america",
        description: `We want to share with everyone how we see the world in 8K.  

        Peru 8K HDR explores the people and landscapes of Peru. This footage was captured in natively in 8K UHD (4320p) and 60fps resolution with the brand new Red Helium 8K Super35mm sensor. Using the most up to date technology we created this video to deliver the most realistic and cinematic experience possible today, especially when viewed in HDR!
        
        To view at 8K 60P you'll need to use Chrome at the moment. 
        
        Shot over 2 weeks traveling all over our the beautiful country of Peru: from Lima, to the amazon in Iquitos, Cusco, Ollantaytmbo and of course the stunning Machu Picchu, Puno where we visited Lake Titicaca and then traveling further into the lake to the inner island of Taquile. `,
    },
    {
        _id: uuid(),
        title: "Northern India (Dolby Vision)",
        createdAt: "May 14, 2014",
        creator: "Jacob + Katie Schwarz",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/o_24LPjOIHI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCl0X1BCDx6YWEStAOcpgrplR7PjQ",
        src: "https://www.youtube.com/embed/o_24LPjOIHI",
        views: 4688,
        videoLength: "4:25",
        continent: "asia",
        description: `This is footage that we captured while in India 5K at both 50 FPS and 60FPS. Locations featured include: Agra, Udaipur, Jodhpur, Khichan, Jaipur, and Dehli. 

        SPONSORED BY HARMONIC
        Special thanks to this company who sent us to the other side of the world and introduced us to a new world. `,
    },
    {
        _id: uuid(),
        title: "Myanmar (Burma) (Dolby Vision)",
        createdAt: "Jul 18, 2013",
        creator: "Jacob + Katie Schwarz",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/DX48mJjL7oU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh8aIjEpDdzj4wzbjEub36O1MPVQ",
        src: "https://www.youtube.com/embed/DX48mJjL7oU",
        views: 2026,
        videoLength: "3:46",
        category: "tropical",
        continent: "asia",
        description: `
        This video was shot completely in Myanmar (Burma)
        Locations Featured:
        Shwedagon Pagoda in Yangon
        Bagan
        Pyin oo Lwin
        Mandalay
        Inle Lake
        
        Question or business inquires: 
        contact@mysterybox.us
        
        Copyright © 2014 Mystery Box, LLC. All Rights Reserved.`,
    },

    {
        _id: uuid(),
        title: "Welcome to India !",
        createdAt: "Apr 28, 2020",
        creator: "Hugo Moussy",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSXHdthfc4QQhT0WAILAlrNppd0ULE0ZA2MRjZX=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/35npVaFGHMY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAt2HJgS_4WAfhnfrTTwHmkGUvdiQ",
        src: "https://www.youtube.com/embed/35npVaFGHMY",
        views: 5835,
        videoLength: "3:17",
        continent: "asia",
        description: `Vanlifing through India was an impressive experience for me, a country where magic and incredible landscapes are everywhere. This is a part of mindblowing scenes i saw during this trip from himalayan mountains , to extreme south of Kerala.`,
    },
    {
        _id: uuid(),
        title: "India: Welcome to Hampi !",
        createdAt: "Mar 23, 2021",
        creator: "Hugo Moussy",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSXHdthfc4QQhT0WAILAlrNppd0ULE0ZA2MRjZX=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/ne4xe-NWcNQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJbO3wsqoNwXstWuWdfAr7cEw9HA",
        src: "https://www.youtube.com/embed/ne4xe-NWcNQ",
        views: 3524,
        videoLength: "2:13",
        continent: "asia",
        description: `Hey there ! 

        As many people asked to me, I made a remake on the magical and mystical place Hampi. Using my old footage make me realize progress I made in videography and this is gonna be probably the last video on India I will share with you until I come back in this amazing country.
        
        In the next video, I will use my new footage I'm currently recording in Indonesia. 
        
        I hope you'll like this one, don't pay a lot attention about the quality footage guys, I promise to give you 4K in few days.
        
        I thank you all again for support and hope to see you soon on the road ! 
        
        Cheers ! ✌️
        My e-mail : hmoussy@gmail.com
-
-
Gear :
- Polar Pro Variable ND's for the Dji mavic 2 zoom
- Dji osmo pocket
- Dji Mavic 2 zoom
-

Edited in Adobe premiere Pro`,
    },

    {
        _id: uuid(),
        title: "Japan - Land of the Rising Sun",
        createdAt: "Apr 23, 2021",
        creator: "8K World",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSS1lyM1dY-UqjVb023wncf64ON14K9N6zQwSVH=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/G5RpJwCJDqc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUv0sBrg5MPStyQr1kPS6kkdIPtw",
        src: "https://www.youtube.com/embed/G5RpJwCJDqc",
        views: 3098,
        videoLength: "5:30",
        continent: "asia",
        description: `This videos you can use for learn  Nature, about place,  River, Country, City,  etc with Ultra-HD resolution. 

        You can also use to Home, Shop, Living Room , Office , Lounge , Waiting Room, gym, airport, hospital, Hotel, Showroom, Restaurant, Guest house, Relaxing Room, And More...! 
        
        This video Optimize to 8K demo and HDR. 
        
        This 8k DEMO Video for  Entertainment and Educational purpose.   
        
        I have done high color correction, Color changing, HDR color Setting, Bit rate, Raw videos editing, Merge files, Adjust the black, 8K Export file and more. 
        I try to give my best knowledgeable and educational information about earth and nature in all my videos.
        
        `,
    },
    {
        _id: uuid(),
        title: "Switzerland - Heaven on Earth",
        createdAt: "Nov 13, 2020",
        creator: "8K World",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSS1lyM1dY-UqjVb023wncf64ON14K9N6zQwSVH=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/linlz7-Pnvw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6TLwVOeEVxBu1v0nIjX6Wz9eo6w",
        src: "https://www.youtube.com/embed/linlz7-Pnvw",
        views: 2004,
        videoLength: "20:15",
        continent: "europe",
        description: `
        This videos you can use for learn Nature, about place,  River, Wildlife, etc with Ultra-HD resolution. 
        
        High Quality Video In Exceptional 8K Ultra HD Quality For 8K TV. 
        
        You can also use to Home, Shop, Living Room , Office , Lounge , Waiting Room, gym, airport, hospital, Hotel, Showroom, Restaurant, Guest house, Relaxing Room, And More...! 
        
        This 8k DEMO Video for  Entertainment and Educational purpose.  
        
    
        `,
    },
    {
        _id: uuid(),
        title: "Bali - Paradise of Asia",
        createdAt: "Feb 15, 2022",
        creator: "8K World",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSS1lyM1dY-UqjVb023wncf64ON14K9N6zQwSVH=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/BFS9n4B_2xA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQgrc8C9q0QEqrMbEN14RF57BamQ",
        src: "https://www.youtube.com/embed/BFS9n4B_2xA",
        views: 3703,
        videoLength: "5:52",
        category: "tropical",
        continent: "asia",
        description: `This video Optimize to 8K demo and HDR


        This videos you can use for learn Nature, about place,  River, Wildlife, etc with Ultra-HD resolution.
        
        High Quality Video In Exceptional 8K Ultra HD Quality For 8K TV
        
        You can also use to Home, Shop, Living Room , Office , Lounge , Waiting Room, gym, airport, hospital, Hotel, Showroom, Restaurant, Guest house, Relaxing Room, And More...!        
        I have done high color correction, Color changing, HDR color Setting, Bit rate, Raw videos editing, Merge files, Adjust the black, 8K Export file and more.
        
        I try to give my best knowledgeable and educational information about earth and nature in all my videos.
        
        `,
    },
    {
        _id: uuid(),
        title: "India | Raw Beauty - in Cenamatic",
        createdAt: "Sep 1, 2020",
        creator: "8K World",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSS1lyM1dY-UqjVb023wncf64ON14K9N6zQwSVH=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/4iDx-ctQkiQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-5AP2yirvKeGHAQk9icvwKiSAVA",
        src: "https://www.youtube.com/embed/4iDx-ctQkiQ",
        views: 5866,
        videoLength: "1:30",
        continent: "asia",
        description: `This videos you can use for learn Animals, Nature, about place, Food,  River, & Birds, Wildlife, etc with HD resolution.

        You can also use to Home, Shop, Living Room , Office , Lounge , Waiting Room, gym, airport, hospital, Hotel, Showroom, Restaurant, Guest house, Relaxing Room, And More...!
        
        This Cinematic  DEMO Video for  Entertainment and Educational purpose
        
        I try to give my best knowledgeable and educational information about earth and nature in all my videos.
       
        
        Note : To view at 8K 60P you will need to use Chrome & opera.
        This video created for entertainment informative, educational purposes
        
        Music Credits:
        "Keys of Moon - The Epic Hero" is under a Creative Commons license (CC BY-SA 3.0) `,
    },

    {
        _id: uuid(),
        title: "10 Most Beautiful Beaches in the World - Travel Video",
        createdAt: "May 7, 2020",
        creator: "Touropia",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSXiYvAveorGOwNEUyGsp9W9XoGh3PZITwZmmlh=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/3Ay4Sk7NRCY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe3u_OZ7lvuH3yywJPZep8dBXpEw",
        src: "https://www.youtube.com/embed/3Ay4Sk7NRCY",
        views: 1125,
        videoLength: "14:10",
        category: "beaches",
        description: `Whether they're blessed with blindingly bright white sands or located in the most idyllic setting imaginable; the world is truly home to a great number of beautiful beaches, each more breathtaking than the last. While some of them are to be found at the heart of world-famous cities, others are nestled away on tropical islands or tucked away deep inside national parks. Whether they are backed by impressive rock formations, rugged cliffs, or gently swaying palm trees, these beautiful beaches really need to be seen to be believed.`,
    },
    {
        _id: uuid(),
        title: "10 Best Places to Visit in India - Travel Video",
        createdAt: "May 9, 2019",
        creator: "Touropia",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLSXiYvAveorGOwNEUyGsp9W9XoGh3PZITwZmmlh=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/IgAnj6r1O48/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD8mxlS7TxLHJb7jUG6BG8D5CYfw",
        src: "https://www.youtube.com/embed/IgAnj6r1O48",
        views: 4759,
        videoLength: "13:30",
        continent: "asia",
        description: `India is an enormous and diverse destination. Bordered by seven different countries, not to mention the Arabian Sea and the Bay of Bengal, means that there are many different sides to the country. More than 20 official languages, multiple religions and a variety of cuisines exist within India’s borders. To truly experience the breadth of Indian culture and history, travel is key. Here’s a look at the best places to visit in India:`,
    },

    {
        _id: uuid(),
        title: "Himalayas In 4K - The Roof Of The World | Mount Everest",
        createdAt: "Nov 27, 2021",
        creator: "Scenic Scenes",
        channelIcon:
            "https://yt3.ggpht.com/-Weca7gZCAF0tBcPwbpITNNyT8Rp2omE9U4Puf8L2JmG7k7eF5hkfA74fFftt-NR4A-ajJcbwFM=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/nZmO8B9rRik/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQ69im9vM8HRb7cJYCTE8Tbyqm-w",
        src: "https://www.youtube.com/embed/nZmO8B9rRik",
        views: 5487,
        videoLength: "25:25",
        category: "mountains",
        continent: "asia",
        description: `The Great Himalayas known as the roof of the world is the highest mountain range of the Himalayan Range. This range include India, China, Nepal, Pakistan, Bhutan, and Tibet. The world's highest peak, Mount Everest provides the most extreme climbing/mountaineering challenges in the world. Truly hope you find some relaxation while enjoying this beautiful scenic film of Himalayas captured on 4K ULTRA HD footage along with relaxing music.`,
    },

    {
        _id: uuid(),
        title: "Traditional Japanese House Tour In Rural Japan",
        createdAt: "",
        creator: "TGu",
        channelIcon:
            "https://yt3.ggpht.com/ytc/AKedOLTxIgY6HYKSJJIzfLZ_dbgfWqYDG6I6HjWV7BQuKQ=s176-c-k-c0x00ffffff-no-rj-mo",
        thumbnail:
            "https://i.ytimg.com/vi/-dpt8wpre2s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6E771ZnqUee0uXykyZIvXPBMyyQ",
        src: "https://www.youtube.com/embed/-dpt8wpre2s",
        views: 2345,
        videoLength: "13:06",
        category: "rural",
        continent: "asia",
        description: `My Japanese friend Yuya let me stay at his traditional Japanese style house in the countryside, which is worth 50 million yen (about $500k) during part of my stay in Japan this past summer so we're gonna tour it to see just what is in such an expensive house! 
        
        Outro: Huey Daze - Take You There. 
        
        Follow me on Instagram! @MistahGu
        
        `,
    },
];
