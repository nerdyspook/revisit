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
        creator: "Jacob + Katie Schwarz",
        thumbnail:
            "https://i.ytimg.com/vi/CHSnz0bCaUk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCR0OjBvSnJhps2bvEZh6eW6ql2Hg",
        src: "https://www.youtube.com/embed/CHSnz0bCaUk",
        views: 2345,
        videoLength: "12:30",
        category: "tropical",
        continent: "america",
    },
    {
        _id: uuid(),
        title: "Uzbekistan (Dolby Vision)",
        creator: "Jacob + Katie Schwarz",
        thumbnail:
            "https://i.ytimg.com/vi/vQVwkyn3-F8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByWtV7T5p9qOs2tQ7oQtBYnCpUww",
        src: "https://www.youtube.com/embed/vQVwkyn3-F8",
        views: 2345,
        videoLength: "16:30",
        category: "deserts",
        continent: "asia",
    },
    {
        _id: uuid(),
        title: "Bulgaria (Dolby Vision)",
        creator: "Jacob + Katie Schwarz",
        thumbnail:
            "https://i.ytimg.com/vi/N1-Jmq7BLFE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_Ts2No8mioag552noUN_M9dcarQ",
        src: "https://www.youtube.com/embed/N1-Jmq7BLFE",
        views: 2345,
        videoLength: "18:30",
        category: "mountains",
        continent: "europe",
    },
    {
        _id: uuid(),
        title: "Morocco (Dolby Vision)",
        creator: "Jacob + Katie Schwarz",
        thumbnail:
            "https://i.ytimg.com/vi/hVvEISFw9w0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_arnmMCuE2CYd3P5o0n1cfJCCxg",
        src: "https://www.youtube.com/embed/hVvEISFw9w0",
        views: 2345,
        videoLength: "1:30",
        category: "deserts",
        continent: "africa",
    },
    {
        _id: uuid(),
        title: "Costa Rica (Dolby Vision)",
        creator: "Jacob + Katie Schwarz",
        thumbnail:
            "https://i.ytimg.com/vi/LXb3EKWsInQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4wSJfkfvSUtiCctwlo7thMOlAiw",
        src: "https://www.youtube.com/embed/LXb3EKWsInQ",
        views: 2345,
        videoLength: "1:30",
        category: "tropical",
        continent: "america",
    },
    {
        _id: uuid(),
        title: "Venice (Dolby Vision)",
        creator: "Jacob + Katie Schwarz",
        thumbnail:
            "https://i.ytimg.com/vi/GTGm7mye-_4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9xH9QBGPZeqA6Lh7xMu4PDdh5-Q",
        src: "https://www.youtube.com/embed/GTGm7mye-_4",
        views: 2345,
        videoLength: "1:30",
        category: "urban",
        continent: "europe",
    },
    {
        _id: uuid(),
        title: "Peru (Dolby Vision)",
        creator: "Jacob + Katie Schwarz",
        thumbnail:
            "https://i.ytimg.com/vi/1La4QzGeaaQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOZkeEAOiYUlC3kY8NEri5ucCQ2A",
        src: "https://www.youtube.com/embed/1La4QzGeaaQ",
        views: 2345,
        videoLength: "1:30",
        category: "tropical",
        continent: "america",
    },
    {
        _id: uuid(),
        title: "Northern India (Dolby Vision)",
        creator: "Jacob + Katie Schwarz",
        thumbnail:
            "https://i.ytimg.com/vi/o_24LPjOIHI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCl0X1BCDx6YWEStAOcpgrplR7PjQ",
        src: "https://www.youtube.com/embed/o_24LPjOIHI",
        views: 2345,
        videoLength: "1:30",
        continent: "asia",
    },
    {
        _id: uuid(),
        title: "Myanmar (Dolby Vision)",
        creator: "Jacob + Katie Schwarz",
        thumbnail:
            "https://i.ytimg.com/vi/DX48mJjL7oU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh8aIjEpDdzj4wzbjEub36O1MPVQ",
        src: "https://www.youtube.com/embed/DX48mJjL7oU",
        views: 2345,
        videoLength: "1:30",
        category: "tropical",
        continent: "asia",
    },

    {
        _id: uuid(),
        title: "Welcome to India !",
        creator: "Hugo Moussy",
        thumbnail:
            "https://i.ytimg.com/vi/35npVaFGHMY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAt2HJgS_4WAfhnfrTTwHmkGUvdiQ",
        src: "https://www.youtube.com/embed/35npVaFGHMY",
        views: 2345,
        videoLength: "1:30",
        continent: "asia",
    },
    {
        _id: uuid(),
        title: "India: Welcome to Hampi !",
        creator: "Hugo Moussy",
        thumbnail:
            "https://i.ytimg.com/vi/ne4xe-NWcNQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJbO3wsqoNwXstWuWdfAr7cEw9HA",
        src: "https://www.youtube.com/embed/ne4xe-NWcNQ",
        views: 2345,
        videoLength: "1:30",
        continent: "asia",
    },

    {
        _id: uuid(),
        title: "Japan - Land of the Rising Sun",
        creator: "8K World",
        thumbnail:
            "https://i.ytimg.com/vi/G5RpJwCJDqc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUv0sBrg5MPStyQr1kPS6kkdIPtw",
        src: "https://www.youtube.com/embed/G5RpJwCJDqc",
        views: 2345,
        videoLength: "1:30",
        continent: "asia",
    },
    {
        _id: uuid(),
        title: "Switzerland - Heaven on Earth",
        creator: "8K World",
        thumbnail:
            "https://i.ytimg.com/vi/linlz7-Pnvw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6TLwVOeEVxBu1v0nIjX6Wz9eo6w",
        src: "https://www.youtube.com/embed/linlz7-Pnvw",
        views: 2345,
        videoLength: "1:30",
        continent: "europe",
    },
    {
        _id: uuid(),
        title: "Bali - Paradise of Asia",
        creator: "8K World",
        thumbnail:
            "https://i.ytimg.com/vi/BFS9n4B_2xA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQgrc8C9q0QEqrMbEN14RF57BamQ",
        src: "https://www.youtube.com/embed/BFS9n4B_2xA",
        views: 2345,
        videoLength: "1:30",
        category: "tropical",
        continent: "asia",
    },
    {
        _id: uuid(),
        title: "India | Raw Beauty - in Cenamatic",
        creator: "8K World",
        thumbnail:
            "https://i.ytimg.com/vi/4iDx-ctQkiQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-5AP2yirvKeGHAQk9icvwKiSAVA",
        src: "https://www.youtube.com/embed/4iDx-ctQkiQ",
        views: 2345,
        videoLength: "1:30",
        continent: "asia",
    },

    {
        _id: uuid(),
        title: "10 Most Beautiful Beaches in the World - Travel Video",
        creator: "Touropia",
        thumbnail:
            "https://i.ytimg.com/vi/3Ay4Sk7NRCY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe3u_OZ7lvuH3yywJPZep8dBXpEw",
        src: "https://www.youtube.com/embed/3Ay4Sk7NRCY",
        views: 2345,
        videoLength: "1:30",
        category: "beaches",
    },
    {
        _id: uuid(),
        title: "10 Best Places to Visit in India - Travel Video",
        creator: "Touropia",
        thumbnail:
            "https://i.ytimg.com/vi/IgAnj6r1O48/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD8mxlS7TxLHJb7jUG6BG8D5CYfw",
        src: "https://www.youtube.com/embed/IgAnj6r1O48",
        views: 2345,
        videoLength: "1:30",
        continent: "asia",
    },

    {
        _id: uuid(),
        title: "Himalayas In 4K - The Roof Of The World | Mount Everest",
        creator: "Scenic Scenes",
        thumbnail:
            "https://i.ytimg.com/vi/nZmO8B9rRik/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQ69im9vM8HRb7cJYCTE8Tbyqm-w",
        src: "https://www.youtube.com/embed/nZmO8B9rRik",
        views: 2345,
        videoLength: "1:30",
        category: "mountains",
        continent: "asia",
    },

    {
        _id: uuid(),
        title: "Traditional Japanese House Tour In Rural Japan",
        creator: "TGu",
        thumbnail:
            "https://i.ytimg.com/vi/-dpt8wpre2s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6E771ZnqUee0uXykyZIvXPBMyyQ",
        src: "https://www.youtube.com/embed/-dpt8wpre2s",
        views: 2345,
        videoLength: "13:06",
        category: "rural",
        continent: "asia",
    },
];
