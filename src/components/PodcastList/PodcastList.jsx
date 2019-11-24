import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../../axios'
import styles from './PodcastList.module.scss'

import PodcastItem from '../PodcastItem/PodcastItem'

const PodcastList = () => {
    const [podcasts, setPodcasts] = useState([
        {
          "id": "c73271d55ffa4e2d9b529220072fbd79",
          "rss": "https://www.listennotes.com/c/r/c73271d55ffa4e2d9b529220072fbd79",
          "email": "rashad_bilal@yahoo.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-CSRy4Lz625Y.1400x1400.jpg",
          "title": "Earn Your Leisure ",
          "country": "United States",
          "website": "https://anchor.fm/earnyourleisure?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            93,
            67
          ],
          "itunes_id": 1450211392,
          "publisher": "Earn Your Leisure ",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-CSRy4Lz625Y.300x300.jpg",
          "is_claimed": false,
          "description": "Welcome to The Earn Your Leisure Podcast. Financial Advisor Rashad Bilal and Educator Troy Millings will be your host. Earn Your Leisure will be giving you behind the scenes financial views into the entertainment and sports industries as well as highlighting back stories of entrepreneurs. We will also be breaking down business models and examining the latest trends in finance. Earn Your Leisure is a college business class mixed with pop culture. We blend the two together for a unique and exciting look into the world of business. Let’s go!! #earnyourleisurepodcast\n \n\nBecome a supporter of this podcast:\n\n<a href=\"https://anchor.fm/earnyourleisure/support\" rel=\"payment\">https://anchor.fm/earnyourleisure/support</a>\n\n",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 18,
          "listennotes_url": "https://www.listennotes.com/c/c73271d55ffa4e2d9b529220072fbd79/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558470571000,
          "earliest_pub_date_ms": 1548186167000
        },
        {
          "id": "861b7a3763f54b83804882c9a3c2584b",
          "rss": "https://www.listennotes.com/c/r/861b7a3763f54b83804882c9a3c2584b",
          "email": "10xtalk@gmail.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/10x-talk-joe-polish-of-genius-network-and-PbcQGBpUFyf.1400x1400.jpg",
          "title": "10x Talk",
          "country": "United States",
          "website": "http://www.10xtalk.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            67,
            88,
            90,
            93,
            94,
            97
          ],
          "itunes_id": 550847386,
          "publisher": "Joe Polish of Genius Network and Dan Sullivan of Strategic Coach",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/10x-talk-joe-polish-of-genius-network-and-PbcQGBpUFyf.300x300.jpg",
          "is_claimed": false,
          "description": "10x Multipliers To Grow Your Business.  Insights For An Ever Expanding System Of Increasing Cooperation & Creativity Among Unique Ability Achievers.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 159,
          "listennotes_url": "https://www.listennotes.com/c/861b7a3763f54b83804882c9a3c2584b/",
          "explicit_content": false,
          "latest_pub_date_ms": 1557892800000,
          "earliest_pub_date_ms": 1343960400000
        },
        {
          "id": "0f01c542af6845e39e4bc84c2fdc6856",
          "rss": "https://www.listennotes.com/c/r/0f01c542af6845e39e4bc84c2fdc6856",
          "email": "info@growthtofreedom.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "dan_kuschell",
            "facebook_handle": "dankuschellpage",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/growth-to-freedomtm-transform-your-life-T7-OI23Pz4m.1400x1400.jpg",
          "title": "Growth to Freedom™ - Transform Your Life, Business, and Relationships with Clarity, Confidence, and Direction",
          "country": "United States",
          "website": "http://growthtofreedom.libsyn.com/podcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            67,
            88,
            90,
            93,
            97
          ],
          "itunes_id": 981989798,
          "publisher": "Dan Kuschell",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/growth-to-freedomtm-transform-your-life-T7-OI23Pz4m.300x300.jpg",
          "is_claimed": false,
          "description": "The Growth to Freedom™ Show helps you transform your life in business and in relationships. It’s a fresh mix of strategy, resources, and entertainment that guides you to create the personal and business breakthroughs you need. Your success and freedom will only grow to the extent you do, and The Growth to Freedom™ Show will help you find clarity, confidence, and direction.\n\nTwo weeks after my son was born in 2007, I found myself in a hospital for four days with a serious heart problem.  The fact is, I had let my health go to the extent that my body gave out. It was a major wakeup call. That experience opened a new door of awareness for me. I came to realize that if I wanted something different, I needed to do something different. If I wanted something better, I needed to do it better. We’re living at one of the most exciting times in history and I believe you can have freedom on your terms. You can have it all, if you’re willing to take the necessary steps. It’s not easy. I’ve certainly made my share of mistakes and I want to help you avoid those on your own journey. This show was born as part of my process and was inspired by Joe Polish, Genius Network, and many mentors I’m fortunate to call friends. It doesn’t matter what your background is or where you’ve been: It only matters that you want to grow. Whatever your definition of success, I will challenge, guide, and connect you to some of the best leaders and experts in the world today. Now is your time - you deserve it! The catalyst for greatness is inside of you, and it starts now with Growth to Freedom!",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 221,
          "listennotes_url": "https://www.listennotes.com/c/0f01c542af6845e39e4bc84c2fdc6856/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558335600000,
          "earliest_pub_date_ms": 1426712727219
        },
        {
          "id": "a304ce16b16041ddaba1d93856714f41",
          "rss": "https://www.listennotes.com/c/r/a304ce16b16041ddaba1d93856714f41",
          "email": "james@superfastbusiness.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/superfastbusiness-coaching-with-james-W8xwajvntJu.1400x1400.jpg",
          "title": "SuperFastBusiness® Coaching With James Schramko",
          "country": "United States",
          "website": "https://www.superfastbusiness.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            67,
            93,
            95,
            97
          ],
          "itunes_id": 529116499,
          "publisher": "James Schramko",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/superfastbusiness-coaching-with-james-W8xwajvntJu.300x300.jpg",
          "is_claimed": false,
          "description": "Learn to Work Less and Make More! Profit From Your Online Business Much Faster! Subscribe to SuperFastBusiness with James Schramko.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 403,
          "listennotes_url": "https://www.listennotes.com/c/a304ce16b16041ddaba1d93856714f41/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558688391000,
          "earliest_pub_date_ms": 1385522455000
        },
        {
          "id": "cbe377c164d14535b0005f55c602877d",
          "rss": "https://www.listennotes.com/c/r/cbe377c164d14535b0005f55c602877d",
          "email": "johncorcoran@gmail.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/channel/image/d2038f7d4f4d4ead85b3adc647d4d322.jpg",
          "title": "Smart Business Revolution",
          "country": "United States",
          "website": "https://smartbusinessrevolution.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            144,
            67,
            93,
            94,
            97,
            98
          ],
          "itunes_id": 573440689,
          "publisher": "John Corcoran",
          "thumbnail": "https://cdn-images-1.listennotes.com/channel/image/3e1ea87aa59d49748764f45cce2b300f.jpg",
          "is_claimed": false,
          "description": "\"Top 10 Podcasts for Entrepreneurs to Learn Personal Finance From\" -- Inc. Magazine.  \"Top 100 Small Business Podcasts 2014\" -- Small Biz Trends. Former Clinton White House Writer John Corcoran shows you how to build relationships intelligently to get more clients, grow your income and advance your career. Discover how you can use win-win networking and intentional relationship-building with Influencers and VIPs, even if you \"hate networking\" or feel like you have \"nothing to offer\" people who are successful. Interviews with today's top entrepreneurs and authors such as Dan Pink, Michael Port, Gary Vaynerchuk, Marie Forleo and Guy Kawasaki, who reveal how they use relationships to grow their businesses and their incomes. Find out more at SmartBusinessRevolution.com.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 411,
          "listennotes_url": "https://www.listennotes.com/c/cbe377c164d14535b0005f55c602877d/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558360816000,
          "earliest_pub_date_ms": 1332137488213
        },
        {
          "id": "c2f88896a76048cdb37e8ac1ac459ab8",
          "rss": "https://www.listennotes.com/c/r/c2f88896a76048cdb37e8ac1ac459ab8",
          "email": "teamblissrealestateinvestor@gmail.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/real-estate-investing-for-women-moneeka-_PHF-30KVrv.1400x1400.jpg",
          "title": "Real Estate Investing For Women",
          "country": "United States",
          "website": "http://www.blissfulinvestor.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            67,
            93
          ],
          "itunes_id": 1348780221,
          "publisher": "Moneeka Sawyer",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/real-estate-investing-for-women-moneeka-_PHF-30KVrv.300x300.jpg",
          "is_claimed": false,
          "description": "Learn the real estate investing strategies from experts around the country on how to get started in real estate investing or grow your existing portfolio. Moneeka Sawyer has built a multi-million dollar business using real estate as her vehicle to build what she calls, Blissful Wealth, only working 5 hours per month. She loves empowering women to do the same.   In this podcast you will not only learn great investing strategies, but also how to get the mindset and heartset so you can profit from real estate and enjoy the journey.  Learn to retire rich and live your bliss.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 80,
          "listennotes_url": "https://www.listennotes.com/c/c2f88896a76048cdb37e8ac1ac459ab8/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558335600000,
          "earliest_pub_date_ms": 1518192999000
        },
        {
          "id": "412d2fbaf0a04fbd88c79165b664f785",
          "rss": "https://www.listennotes.com/c/r/412d2fbaf0a04fbd88c79165b664f785",
          "email": "jason@jasonbarnard.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/seoisaeo-podcast-expert-interviews-at-major-D_RUozuSgms.1400x1400.jpg",
          "title": "#SEOisAEO Podcast - Expert Interviews at Major Digital Marketing Conferences",
          "country": "United Kingdom",
          "website": "https://jasonbarnard.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            97,
            93,
            67
          ],
          "itunes_id": 1452109607,
          "publisher": "Jason Barnard",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/seoisaeo-podcast-expert-interviews-at-major-D_RUozuSgms.300x300.jpg",
          "is_claimed": false,
          "description": "Informative, intelligent and fun… that is exactly what you can expect from Jason’s in-depth conversations with leading experts in the digital marketing field. Guests include Rand Fishkin, Barry Adams, Yoost de Valk (Yoast), Greg Gifford, Bill Slawski, A.J. Ghergich, Aleyda Solis… Every Tuesday, we’ll release one interview… often two… sometimes more! To record this series, Jason Barnard has given up his flat and gone digital nomad (very fitting for a digital marketing podcast at major conferences across the globe). The ambiance of the conference setting plus the face-to-face, one-on-one format should give the podcast an extra bit of ‘soul’.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 20,
          "listennotes_url": "https://www.listennotes.com/c/412d2fbaf0a04fbd88c79165b664f785/",
          "explicit_content": false,
          "latest_pub_date_ms": 1554892206000,
          "earliest_pub_date_ms": 1548069097000
        },
        {
          "id": "a680dd2396b049bfa4cc8d1c5bce0a10",
          "rss": "https://www.listennotes.com/c/r/a680dd2396b049bfa4cc8d1c5bce0a10",
          "email": "afterhours@hbr.org",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/after-hours-hbr-presents-youngme-moon-mihir-plbSMArRcPW.1400x1400.jpg",
          "title": "After Hours",
          "country": "United States",
          "website": "https://hbr.org/podcasts/after-hours?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            67,
            93
          ],
          "itunes_id": 1363110130,
          "publisher": "HBR Presents / Youngme Moon, Mihir Desai, & Felix Oberholzer-Gee",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/after-hours-hbr-presents-youngme-moon-mihir-plbSMArRcPW.300x300.jpg",
          "is_claimed": false,
          "description": "Harvard Business School professors discuss and debate current events that sit at the crossroads of business and culture. Youngme Moon, Mihir Desai, and Felix Oberholzer-Gee engage in a spirited discussion on a range of topics torn from the headlines — from Facebook, to free trade, to the #MeToo movement. Informed by their unique expertise as professors at one of the world’s leading business schools, their takes are always surprising, unconventional, and insightful.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 51,
          "listennotes_url": "https://www.listennotes.com/c/a680dd2396b049bfa4cc8d1c5bce0a10/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558537108000,
          "earliest_pub_date_ms": 1520100237000
        },
        {
          "id": "6920e5bc11294aaeb7158a197e09b90d",
          "rss": "https://www.listennotes.com/c/r/6920e5bc11294aaeb7158a197e09b90d",
          "email": "fomosapiens@hbr.org",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/fomo-sapiens-with-patrick-j-mcginnis-hbr-UNbBdCMfic4.1400x1400.jpg",
          "title": "FOMO Sapiens with Patrick J. McGinnis",
          "country": "United States",
          "website": "https://hbr.org/podcasts/fomo-sapiens?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            93,
            67
          ],
          "itunes_id": 1417454965,
          "publisher": "HBR Presents / Patrick J. McGinnis",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/fomo-sapiens-with-patrick-j-mcginnis-hbr-UNbBdCMfic4.300x300.jpg",
          "is_claimed": false,
          "description": "Patrick J. McGinnis, creator of the term FOMO (Fear of Missing Out), talks to leaders in business, entrepreneurship, politics, and culture. How do they choose from among the many opportunities in their busy lives and find the courage to miss out on the the rest? Patrick is the author of \"The 10% Entrepreneur.\" \r\n\r\nThe views expressed on this podcast are those of its hosts, guests, and callers, and not those of Harvard Business Review.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 26,
          "listennotes_url": "https://www.listennotes.com/c/6920e5bc11294aaeb7158a197e09b90d/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558625915000,
          "earliest_pub_date_ms": 1532544773000
        },
        {
          "id": "841eca7a25c64420b2bd0b536d35108d",
          "rss": "https://www.listennotes.com/c/r/841eca7a25c64420b2bd0b536d35108d",
          "email": "coldcall@hbr.org",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "HBSWK",
            "facebook_handle": "HBSAlumni",
            "instagram_handle": "harvardhbs"
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/cold-call-hbr-presents-brian-kenny-sC2kfX7gM0D.1400x1400.jpg",
          "title": "Cold Call",
          "country": "United States",
          "website": "https://hbr.org/podcasts/cold-call?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            67,
            93,
            111,
            113
          ],
          "itunes_id": 1156646189,
          "publisher": "HBR Presents / Brian Kenny",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/cold-call-hbr-presents-brian-kenny-sC2kfX7gM0D.300x300.jpg",
          "is_claimed": false,
          "description": "Cold Call distills Harvard Business School's legendary case studies into podcast form. Hosted by Brian Kenny, the podcast airs every two weeks and features Harvard Business School faculty discussing cases they've written and the lessons they impart.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 95,
          "listennotes_url": "https://www.listennotes.com/c/841eca7a25c64420b2bd0b536d35108d/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558443158000,
          "earliest_pub_date_ms": 1474065039093
        },
        {
          "id": "92437722a52b402395b6fc8c41327bcb",
          "rss": "https://www.listennotes.com/c/r/92437722a52b402395b6fc8c41327bcb",
          "email": "RadioMusic.Support@bbc.co.uk",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/50-things-that-made-the-modern-economy-bbc-QWxSTJD4lXh.1400x1400.jpg",
          "title": "50 Things That Made the Modern Economy",
          "country": "United States",
          "website": "http://www.bbc.co.uk/programmes/p04b1g3c?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            111,
            67,
            99
          ],
          "itunes_id": 1172889381,
          "publisher": "BBC World Service",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/50-things-that-made-the-modern-economy-bbc-QWxSTJD4lXh.300x300.jpg",
          "is_claimed": false,
          "description": "Tim Harford tells the fascinating stories of inventions, ideas and innovations which have helped create the economic world.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 67,
          "listennotes_url": "https://www.listennotes.com/c/92437722a52b402395b6fc8c41327bcb/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558314000000,
          "earliest_pub_date_ms": 1478376000000
        },
        {
          "id": "27a163c3bbe64ff89036c1a328fc5c7e",
          "rss": "https://www.listennotes.com/c/r/27a163c3bbe64ff89036c1a328fc5c7e",
          "email": "support@jameswedmore.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": "jameswedmore"
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/the-mind-your-business-podcast-james-wedmore-s4mokaucvUK.1400x1400.jpg",
          "title": "The Mind Your Business Podcast",
          "country": "United States",
          "website": "http://www.mindyourbusinesspodcast.com/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            67,
            93,
            97
          ],
          "itunes_id": 1074394632,
          "publisher": "James Wedmore",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/the-mind-your-business-podcast-james-wedmore-s4mokaucvUK.300x300.jpg",
          "is_claimed": false,
          "description": "All entrepreneurs want to know the secret to success. James Wedmore, a seven-figure online entrepreneur, believes success is created by mindset over strategy, magic over metrics, and attitude over action. In this podcast, James untangles the common misconception that hustle and hard work are all it takes to be successful.  ",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 188,
          "listennotes_url": "https://www.listennotes.com/c/27a163c3bbe64ff89036c1a328fc5c7e/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558341000000,
          "earliest_pub_date_ms": 1452591000000
        },
        {
          "id": "f2eb196b20884b0490cc60a58b05bbb6",
          "rss": "https://www.listennotes.com/c/r/f2eb196b20884b0490cc60a58b05bbb6",
          "email": "thedaily@nytimes.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "mikiebarb",
            "facebook_handle": "nytimes",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/the-daily-the-new-york-times-xp7nhsmSkX2.1400x1400.jpg",
          "title": "The Daily",
          "country": "United States",
          "website": "https://art19.com/shows/the-daily?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            99,
            93,
            67
          ],
          "itunes_id": 1200361736,
          "publisher": "The New York Times",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/the-daily-the-new-york-times-xp7nhsmSkX2.300x300.jpg",
          "is_claimed": false,
          "description": "\n      <p>This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world. Hosted by Michael Barbaro. Twenty minutes a day, five days a week, ready by 6 a.m.</p>\n    ",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 604,
          "listennotes_url": "https://www.listennotes.com/c/f2eb196b20884b0490cc60a58b05bbb6/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558691660000,
          "earliest_pub_date_ms": 1484687987589
        },
        {
          "id": "c5ce6c02cbf1486496206829f7d42e8e",
          "rss": "https://www.listennotes.com/c/r/c5ce6c02cbf1486496206829f7d42e8e",
          "email": "podcasts@cadence13.com",
          "extra": {
            "url1": "http://www.marketsnacks.com/",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "marketsnacks",
            "facebook_handle": "MarketSnacks",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/snacks-daily-robinhood-financial-llc-kmx0XIZTAys.1400x1391.jpg",
          "title": "Snacks Daily",
          "country": "United States",
          "website": null,
          "language": "English",
          "genre_ids": [
            98,
            95,
            93,
            67
          ],
          "itunes_id": 1386234384,
          "publisher": "Robinhood Financial, LLC",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/snacks-daily-robinhood-financial-llc-kmx0XIZTAys.300x298.jpg",
          "is_claimed": false,
          "description": "Digestible financial news. Get smarter fast with an entertaining breakdown of our top 3 business stories in 15 minutes. Pairs perfectly with your commute, workout, or morning oatmeal ritual. Hosted by Jack Kramer and Nick Martell.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 194,
          "listennotes_url": "https://www.listennotes.com/c/c5ce6c02cbf1486496206829f7d42e8e/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558691760000,
          "earliest_pub_date_ms": 1526520097000
        },
        {
          "id": "3cbe3e7718d44ace83cf4a864f3f93c7",
          "rss": "https://www.listennotes.com/c/r/3cbe3e7718d44ace83cf4a864f3f93c7",
          "email": "info@mission.org",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "TheMissionHQ",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/the-journey-missionorg-qYeNagXjxbE.1400x1400.jpg",
          "title": "The Journey",
          "country": "United States",
          "website": "http://thejourneypodcast.libsyn.com/website?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            125,
            122,
            95,
            93,
            67
          ],
          "itunes_id": 1452026184,
          "publisher": "Mission.org",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/the-journey-missionorg-qYeNagXjxbE.300x300.jpg",
          "is_claimed": false,
          "description": "It only takes one idea or one story to change the whole trajectory of your life, career, and work. In each episode of The Journey, we talk to entrepreneurs of all stripes, so you can prime yourself with the knowledge and mindset you need for your own journey.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 24,
          "listennotes_url": "https://www.listennotes.com/c/3cbe3e7718d44ace83cf4a864f3f93c7/",
          "explicit_content": false,
          "latest_pub_date_ms": 1557441941000,
          "earliest_pub_date_ms": 1549665873022
        },
        {
          "id": "47c7fd811d1145e4ac894c1c0ad05d45",
          "rss": "https://www.listennotes.com/c/r/47c7fd811d1145e4ac894c1c0ad05d45",
          "email": "wwopodcasts@westwoodone.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/suze-ormans-women-and-money-westwood-one-gUcX6Tia7WB.1400x1400.jpg",
          "title": "Suze Orman's Women and Money",
          "country": "United States",
          "website": "https://omny.fm/shows/women-and-money-with-suze-orman?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            93,
            67
          ],
          "itunes_id": 1439621652,
          "publisher": "Westwood One",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/suze-ormans-women-and-money-westwood-one-gUcX6Tia7WB.300x300.jpg",
          "is_claimed": false,
          "description": "Join America's Matriarch of Money, Suze Orman, twice weekly for unmatched personal finance expertise so you get insights and actionable advice on investing, saving, and life. Money itself is not the end goal. It’s the means to living a full and meaningful life. Do you have a question or topic you want Suze to cover on the podcast? Then send your email to asksuzepodcast@gmail.com.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 53,
          "listennotes_url": "https://www.listennotes.com/c/47c7fd811d1145e4ac894c1c0ad05d45/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558605600000,
          "earliest_pub_date_ms": 1538320050000
        },
        {
          "id": "e85a1ac9ed40449eb21a01f9ded7a2f5",
          "rss": "https://www.listennotes.com/c/r/e85a1ac9ed40449eb21a01f9ded7a2f5",
          "email": "stvp@stanford.edu",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "ECorner",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/entrepreneurial-thought-leaders-video-2viqJcW6jGM.1400x1400.jpg",
          "title": "Entrepreneurial Thought Leaders Video Series",
          "country": "United States",
          "website": "http://ecorner.stanford.edu?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            93,
            113,
            111,
            97,
            67
          ],
          "itunes_id": 1438251033,
          "publisher": "Stanford eCorner",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/entrepreneurial-thought-leaders-video-2viqJcW6jGM.300x300.jpg",
          "is_claimed": false,
          "description": "Each week, experienced entrepreneurs and innovators come to Stanford University to candidly share lessons they’ve learned while developing, launching and scaling disruptive ideas. The Entrepreneurial Thought Leaders Series is produced by Stanford eCorner during fall, winter and spring quarters. ETL is supported by the venture capital firm DFJ.",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 458,
          "listennotes_url": "https://www.listennotes.com/c/e85a1ac9ed40449eb21a01f9ded7a2f5/",
          "explicit_content": false,
          "latest_pub_date_ms": 1558508965000,
          "earliest_pub_date_ms": 1193788800000
        },
        {
          "id": "378c69ec20de4f50beef14b2aba623bb",
          "rss": "https://www.listennotes.com/c/r/378c69ec20de4f50beef14b2aba623bb",
          "email": "loz@contentchampion.com",
          "extra": {
            "url1": "",
            "url2": "",
            "url3": "",
            "google_url": "",
            "spotify_url": "",
            "youtube_url": "",
            "linkedin_url": "",
            "wechat_handle": "",
            "patreon_handle": "",
            "twitter_handle": "",
            "facebook_handle": "",
            "instagram_handle": ""
          },
          "image": "https://cdn-images-1.listennotes.com/podcasts/the-content-champion-podcast-loz-james-qRi0pQAln8C.1400x1400.jpg",
          "title": "The Content Champion Podcast",
          "country": "United States",
          "website": "https://www.contentchampion.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          "language": "English",
          "genre_ids": [
            97,
            67,
            93,
            111,
            115
          ],
          "itunes_id": 626722163,
          "publisher": "Loz James: Content Marketing Strategy Expert & Training Provider",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/the-content-champion-podcast-loz-james-qRi0pQAln8C.300x300.jpg",
          "is_claimed": false,
          "description": "The Content & Search Marketing Specialists",
          "looking_for": {
            "guests": false,
            "cohosts": false,
            "sponsors": false,
            "cross_promotion": false
          },
          "total_episodes": 79,
          "listennotes_url": "https://www.listennotes.com/c/378c69ec20de4f50beef14b2aba623bb/",
          "explicit_content": false,
          "latest_pub_date_ms": 1556652133000,
          "earliest_pub_date_ms": 1364258586000
        }
      ])

    useEffect(() => {
        // listenNotesApi.get('/best_podcasts?page=1&safe_mode=1').then(res => {
        //     setPodcasts(res.data.podcasts)
        // })
    }, [])

    return (
        <div>
            <h2 className={styles.Title}>Popular Podcasts</h2>
            <div className={styles.PodcastList}>
                {podcasts &&
                    podcasts.map((podcast) => (
                        <PodcastItem key={podcast.id} {...podcast} />
                    ))}
            </div>
        </div>
    )
}

export default PodcastList
