import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../../axios'
import EpisodeList from '../../components/EpisodeList/EpisodeList'
import styles from './Podcastpage.module.scss'

const Podcastpage = ({ match }) => {
    const [podcast, setPodcast] = useState({
        id: 'c73271d55ffa4e2d9b529220072fbd79',
        title: 'Earn Your Leisure ',
        publisher: 'Earn Your Leisure ',
        image:
            'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
        thumbnail:
            'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
        listennotes_url:
            'https://www.listennotes.com/c/c73271d55ffa4e2d9b529220072fbd79/',
        total_episodes: 50,
        explicit_content: false,
        description:
            'Welcome to The Earn Your Leisure Podcast. Financial Advisor Rashad Bilal and Educator Troy Millings will be your host. Earn Your Leisure will be giving you behind the scenes financial views into the entertainment and sports industries as well as highlighting back stories of entrepreneurs. We will also be breaking down business models and examining the latest trends in finance. Earn Your Leisure is a college business class mixed with pop culture. We blend the two together for a unique and exciting look into the world of business. Let\u2019s go!! #earnyourleisurepodcast\n Support this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
        itunes_id: 1450211392,
        rss: 'https://www.listennotes.com/c/r/c73271d55ffa4e2d9b529220072fbd79',
        latest_pub_date_ms: 1574199738000,
        earliest_pub_date_ms: 1548186167046,
        language: 'English',
        country: 'United States',
        website:
            'https://anchor.fm/earnyourleisure?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
        extra: {
            twitter_handle: '',
            facebook_handle: '',
            instagram_handle: '',
            wechat_handle: '',
            patreon_handle: '',
            youtube_url: '',
            linkedin_url: '',
            spotify_url: '',
            google_url: '',
            url1: '',
            url2: '',
            url3: '',
        },
        is_claimed: false,
        email: 'rashad_bilal@yahoo.com',
        looking_for: {
            sponsors: false,
            guests: false,
            cohosts: false,
            cross_promotion: false,
        },
        genre_ids: [93, 67],
        episodes: [
            {
                id: '3cc6605102a34f688158a97da2754ffb',
                title: 'EYL #49 100 Bars & Running',
                description:
                    'A few months ago Mickey Factz\u2019s freestyle breaking down credit with Funk Flex went viral in the financial literacy world. It was the talk of Instagram and everyone requested that we have him on EYL. The verse was incredible but his career is way more extensive than just a freestyle.\n\nHe\u2019s a veteran in the music game with over a decade of experience. He was on the 2009 XXL freshman of the year cover, he has been signed to major labels, he\'s worked with the biggest names in the industry including Drake and Kendrick Lamar, he had a commercial deal a Honda, an endorsement deal with Puma, and his music has been featured on EA Sports video games. He made the switch from being on a major label to being an independent artist years ago and has been navigating the world of independence ever since.\n\nIn episode 49 he blessed us with 100 bars of fire for our first ever EYL freestyle. The freestyle is centered around being a business owner, it\u2019s a lyrical lesson on entrepreneurship. In addition to the freestyle, he gave us free game in our interview. He broke down the ins and outs of the music business from an artist perspective, he explained how record deals are structured, he detailed the path for an independent artist to take to have a viable career and explained business pitfalls that many artists fall victim to.\n\nGuest IG: @mickey.factz\nBook Tip: A Lawyer\u2019s Life by Johnie Cochran\n\n--- \n\nThis episode is sponsored by \n\u00b7 Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugkf/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>\n\n\u00b7 Talk Money With Mesh Lakhani Podcast: On The Talk Money with Mesh Lakhani podcast, Mesh will follow paper trails, chat with experts, and break down complex ideas to bring clarity to the mystical financial phenomena behind your finances. <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugm9/url/https%3A%2F%2Fopen.spotify.com%2Fshow%2F20gI5HoX4J0zlsCgnjqWoP%3Fsi%3Dw8xX2XpITSuysd_xGiGQiQ">https://open.spotify.com/show/20gI5HoX4J0zlsCgnjqWoP?si=w8xX2XpITSuysd_xGiGQiQ</a>\n\nSupport this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
                pub_date_ms: 1574199738000,
                audio:
                    'https://www.listennotes.com/e/p/3cc6605102a34f688158a97da2754ffb/',
                audio_length_sec: 4498,
                listennotes_url:
                    'https://www.listennotes.com/e/3cc6605102a34f688158a97da2754ffb/',
                image:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                maybe_audio_invalid: false,
                listennotes_edit_url:
                    'https://www.listennotes.com/e/3cc6605102a34f688158a97da2754ffb/#edit',
                explicit_content: false,
            },
            {
                id: 'df4567bbc145456db19cbde6c2e74fee',
                title: 'EYL #48 Paid in Full',
                description:
                    'Out of the 18,000 car dealerships in America only 1% are owned by African Americans. What Brandon Medford and his two partners Dave Obaseki and Eric Whitehead have been able to accomplish in less than two years is nothing short of remarkable.\n\nBrandon is the co-owner of PTG 365 which is an automotive company that is changing the world of car buying. The company is owned by three black men all under the age of 30 (Brandon is 27) and they have offices in New York, LA, and Miami. PTG has 57 employees and gross revenue so far this year of $5.6 million. Their goal is to have $15 million in revenue by the end of 2020.\n\nThey have an extremely unique business model. They\u2019re a car dealership but they have no car inventory. Brandon calls PTG the Uber Eats of the car industry.\n\nThey have grown by leveraging social media and relationships to obtain celebrity clients and Instagram influencers. Some of their clients include Meek Mill, Rich the Kid, and A Boogie. They have been featured in Forbes, Essence, Black Enterprise and they have a Docuseries show coming to Netflix and SnapChat TV in 2020.\n\nThey also have give-back programs which include credit and financial planning classes. In addition, they have a program for single moms that offers the option to obtain a car with either no money down or 90 days of no payments.\n\nIn episode 48 Brandon broke down their business model, the ins and outs of owning a car dealership, he also gave insight on how to establish relationships with celebrities and influencers and he explained how they were able to scale so fast. In addition, he also spoke about the value of keeping a low overhead, not limiting yourself and empowering people. \n\nIG: @lamborghini__b \n\n--- \n\nThis episode is sponsored by \n\u00b7 Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugkf/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>\n\nSupport this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
                pub_date_ms: 1573594904000,
                audio:
                    'https://www.listennotes.com/e/p/df4567bbc145456db19cbde6c2e74fee/',
                audio_length_sec: 4373,
                listennotes_url:
                    'https://www.listennotes.com/e/df4567bbc145456db19cbde6c2e74fee/',
                image:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                maybe_audio_invalid: false,
                listennotes_edit_url:
                    'https://www.listennotes.com/e/df4567bbc145456db19cbde6c2e74fee/#edit',
                explicit_content: false,
            },
            {
                id: '64e09b29df6a44f39b74ad099cdebc92',
                title: 'EYL #47 Last Laugh',
                description:
                    'Greg Barnett has been an NFL agent for 15 years. Some of the current players that he represents are Justin Houston, Reshad Jones, and Pro-bowler Kyler Fuller. He also co-represents this year\u2019s #4 draft pick Clelin Ferrell and former Heisman trophy winner Jameis Winston.\n\nHis journey has taken him from being in special education in high school to becoming a school teacher, to making NFL history. In 2015 he helped negotiate the largest contract for a linebacker in NFL history at that time for Justin Houston. The contract was for $101,000,000 with $52,000,000 of it guaranteed.\n\nIn addition to being an agent, he also is an entrepreneur, investor, and manager for retired players including the legendary Percy Harvin.\n\nIn episode 47 he walked us through NFL contract negotiations, he explained what college athletes go through, and we talked about the NCAA not paying athletes. We also discussed special education in schools, the business of AAU basketball, and the advantages of HBCUs.\n\nGuest IG: @gbobarnett\nBook Tip: Sole Influence \n\n--- \n\nThis episode is sponsored by \n\u00b7 Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugkf/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>\n\nSupport this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
                pub_date_ms: 1573249785000,
                audio:
                    'https://www.listennotes.com/e/p/64e09b29df6a44f39b74ad099cdebc92/',
                audio_length_sec: 3364,
                listennotes_url:
                    'https://www.listennotes.com/e/64e09b29df6a44f39b74ad099cdebc92/',
                image:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                maybe_audio_invalid: false,
                listennotes_edit_url:
                    'https://www.listennotes.com/e/64e09b29df6a44f39b74ad099cdebc92/#edit',
                explicit_content: false,
            },
            {
                id: 'e0333413c9994d518bc19c74a7624979',
                title: 'EYL #46 Mama I Made It',
                description:
                    'Anthony and Anton Downing are twin brothers who were born and raised on the South Side of Chicago. They are both firefighters by trade. In addition, they became local celebrities when they struck a deal to have a nationally aired TV show on HGTV which featured them renovating and flipping homes in the area. In addition to being TV stars and firefighters, they\'re well known local real estate investors with a focus on South Side real estate.\n\nIn episode 46 they educated us on how being a firefighter is the perfect profession to have multiple side businesses since they only work 2 days a week, they explained the process of how real estate show TV deals work and they explained the dynamics of what\u2019s going on in the South Side and how contrary to what is shown in the media there is actually a lot to be encouraged about. We talked about how you can have a career and be an entrepreneur at the same time, real estate opportunities, and they gave real-world examples of how anyone can buy a home and renovate it with extremely low down payments.\n\nGuest IG: @thedowningbrothers\n\n--- \n\nThis episode is sponsored by \n\u00b7 Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugkf/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>\n\nSupport this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
                pub_date_ms: 1572990489000,
                audio:
                    'https://www.listennotes.com/e/p/e0333413c9994d518bc19c74a7624979/',
                audio_length_sec: 3500,
                listennotes_url:
                    'https://www.listennotes.com/e/e0333413c9994d518bc19c74a7624979/',
                image:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                maybe_audio_invalid: false,
                listennotes_edit_url:
                    'https://www.listennotes.com/e/e0333413c9994d518bc19c74a7624979/#edit',
                explicit_content: false,
            },
            {
                id: '19f5796f63e44a13a163eb452cbbf842',
                title: 'EYL #45 Hustle & Motivate feat. John Henry',
                description:
                    'John Henry is only 26 but his business story could span three lifetimes. He\'s the son of Dominican immigrants. He grew up below the poverty line in New York City\u2019s Washington Heights neighborhood. At 18 he worked as a doorman in a luxury building in Brooklyn. While working as a doorman he started a dry cleaning business. Within 3 years his business was making $100,000 a month in revenue. At the age of 21, he sold the business for $1 million and started the first business incubator in Harlem called Cofound Harlem.\n\nAfter making a name for himself in the city, he was offered a podcast deal, and then a TV deal for his own show on Vice called \u201cHustle\u201d. He parlayed that into a brand endorsement deal with Cadillac.\n\nAfter starting Cofound Harlem he decided he wanted to dive into the world of Venture Capital. He joined forces with three other young entrepreneurs and became a partner in Harlem Capital. Harlem Capital Partners is a $25 million Venture Capital firm owned and operated by four men of color under the age of 30.\n\nThe fund plans to invest in 1,000 minority and women founders over the next 20 years. All four of the partners are on the most recent Forbes 30 under 30 list.\n\nIn EYL #45, John walked us through his incredible journey. He told us the story of his first business, he explained in detail the inner workings of the V.C. world, he explained the steps to set up a Venture Capital fund, he detailed how TV deals are structured and he outlined the current market place for brand partnerships and media opportunities.\n\nGuest IG: @johnhenrystyle\nBook Tip: Steve Jobs \n\n--- \n\nThis episode is sponsored by \n\u00b7 Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugkf/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>\n\nSupport this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
                pub_date_ms: 1572381611001,
                audio:
                    'https://www.listennotes.com/e/p/19f5796f63e44a13a163eb452cbbf842/',
                audio_length_sec: 4748,
                listennotes_url:
                    'https://www.listennotes.com/e/19f5796f63e44a13a163eb452cbbf842/',
                image:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                maybe_audio_invalid: false,
                listennotes_edit_url:
                    'https://www.listennotes.com/e/19f5796f63e44a13a163eb452cbbf842/#edit',
                explicit_content: false,
            },
            {
                id: '54343d9b1a6b4d18bfe9f255f222a404',
                title: 'EYL #44 Wall Street Trapper',
                description:
                    'Leon Howard aka Wall Street Trapper grew up in the turbulent streets of New Orleans. His mother was shot in front of him when he was 9 years old. He took to the street life early and was arrested and tried as an adult at the age of 16 for attempted murder and armed robbery. He was found guilty and sentenced to 10 years in Louisiana state penitentiary.\n\nHe was introduced to the stock market while he was incarcerated and fell in love with it instantly. He read every book and newspaper he could get his hands on and watched CNBC every morning religiously.\n\nWhen he was released from jail he began working as an ironworker. While he was working he invested 70% of his income. After putting together a strategic plan he quit his job and became a full-time investor and entrepreneur. He now travels the country to teach other people with similar backgrounds about stocks and investing. He credits the stock market for changing his life and getting him out of the cycle of destruction that he was raised in. He now is on a mission to help educate as many people as possible about investing to provide a level of hope that he was not afforded as a youth.\n\nHe\u2019s 100% self-educated but his knowledge in stocks is on par with an investment banker. In episode 44 he covered and explained every area of stocks in detail. He covered REIT\u2019s, ETF\u2019s, Indexed funds, he explained his strategy in evaluating a company to know if it\'s a good stock to buy, he explained how to set up a stock account for a child and much more. He also explained how anyone can buy back their financial freedom by way of stock market investing for income.\n\nGuest IG: @wall_street_trapper\nBoot Tip: Wall Street Trappin 101, 102, & 103\n\n--- \n\nThis episode is sponsored by \n\u00b7 Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugkf/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>\n\nSupport this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
                pub_date_ms: 1571777061002,
                audio:
                    'https://www.listennotes.com/e/p/54343d9b1a6b4d18bfe9f255f222a404/',
                audio_length_sec: 4797,
                listennotes_url:
                    'https://www.listennotes.com/e/54343d9b1a6b4d18bfe9f255f222a404/',
                image:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                maybe_audio_invalid: false,
                listennotes_edit_url:
                    'https://www.listennotes.com/e/54343d9b1a6b4d18bfe9f255f222a404/#edit',
                explicit_content: false,
            },
            {
                id: 'c03f660413b346888b0ab08d1bf5592b',
                title: 'EYL #43 The Youngest in Charge feat. Prince Donnell',
                description:
                    'Prince Donnell has built an extremely strong presence online but he has a lot more to offer outside of social media.\n\nAt 25 he\u2019s the CEO to the fastest-growing tax preparation company in American history. His company, Jumping Jack Tax has built a community of over 400 licensees nationwide in less than a year. In episode 43 he detailed his transition from the corporate world to becoming a full-time entrepreneur, he broke down the tax preparation business in detail and explained how anyone can get in the business regardless if you have a tax background or not, and he went into detail about text message marketing.\n\nGuest IG: @princedonnell\nBook Tip: Think and Grow Rich \n\n--- \n\nThis episode is sponsored by \n\u00b7 Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugkf/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>\n\nSupport this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
                pub_date_ms: 1571431951003,
                audio:
                    'https://www.listennotes.com/e/p/c03f660413b346888b0ab08d1bf5592b/',
                audio_length_sec: 3503,
                listennotes_url:
                    'https://www.listennotes.com/e/c03f660413b346888b0ab08d1bf5592b/',
                image:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                maybe_audio_invalid: false,
                listennotes_edit_url:
                    'https://www.listennotes.com/e/c03f660413b346888b0ab08d1bf5592b/#edit',
                explicit_content: false,
            },
            {
                id: 'ad4a7bacdae245b19c5654e8c2ba4e96',
                title: 'EYL #42 Family Ties feat. Dana Chanel',
                description:
                    'Dana Chanel is a force of nature. She built her first app Sprinkle of Jesus at the age of 21 in two days with no previous technical experience. Sprinkle of Jesus is now the top Christian Moblie app in the world with over 8 million users. In addition to Sprinkle of Jesus she is also the founder of Curl Bible which is an online bueaty supply store that host products from over 200 small businesses, she is an owner of an app devolpmemt company called Alakazam Apps and she is an investor in a credit company named Credit Exterminators.\n\nOn episode 42 Dana told us her story, she also explained why having an app for your business is mandatory, she spoke on the importance of not relying on social media for marketing, she explained why direct to consumer relationships are essential and she talked about how her relationship with her father made her into the woman that she is today.\n\nGuest IG: @danachanel\n\n--- \n\nThis episode is sponsored by \n\u00b7 Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugkf/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>\n\nSupport this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
                pub_date_ms: 1571172298004,
                audio:
                    'https://www.listennotes.com/e/p/ad4a7bacdae245b19c5654e8c2ba4e96/',
                audio_length_sec: 2904,
                listennotes_url:
                    'https://www.listennotes.com/e/ad4a7bacdae245b19c5654e8c2ba4e96/',
                image:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                maybe_audio_invalid: false,
                listennotes_edit_url:
                    'https://www.listennotes.com/e/ad4a7bacdae245b19c5654e8c2ba4e96/#edit',
                explicit_content: false,
            },
            {
                id: 'de70b97cd5fe43cd87112704746250ec',
                title: 'EYL #41 Ride or Die',
                description:
                    'It\u2019s a little known fact that mobile home investing provides that highest cash on cash return on average from any form of real estate. It requires extremely low amounts of capital to invest and the profit margins can be huge. \n\nVery few people think of investing in mobile homes or mobile home parks, but it\u2019s not only an extremely lucrative business it\u2019s also a high demand industry. 22 million Americans live in mobile homes and as real estate prices continue to go up nationwide the demand for mobile homes is rising. It\u2019s a billion-dollar industry that shouldn\u2019t be taken lightly.\n\nByron Sellers and Sharnice Williams of Mobile Home Elite Investors have mastered the mobile home industry. In episode 41 they gave us insight on how anyone can get started investing for as low as $500, they went into detail about the ins and outs of mobile homes and explained the pitfalls to avoid. \n\nGuest IG: @MobileHomeEliteInvestors\nBook Tip: A step by step guide to buy and sell mobile homes \n\n--- \n\nThis episode is sponsored by \n\u00b7 Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugkf/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>\n\nSupport this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
                pub_date_ms: 1570567496005,
                audio:
                    'https://www.listennotes.com/e/p/de70b97cd5fe43cd87112704746250ec/',
                audio_length_sec: 3306,
                listennotes_url:
                    'https://www.listennotes.com/e/de70b97cd5fe43cd87112704746250ec/',
                image:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                maybe_audio_invalid: false,
                listennotes_edit_url:
                    'https://www.listennotes.com/e/de70b97cd5fe43cd87112704746250ec/#edit',
                explicit_content: false,
            },
            {
                id: 'fd57261fcf2e42f1b93747b455995652',
                title: 'EYL #40 Story Time feat. Kenny Burns',
                description:
                    'Kenny Burns is the definition of a renaissance man. He invented the term \u201clifestyle specialist\u201d years before it became popular.\n\nHis storied career covers a vast vartiary of areas. He was the second black designer in Saks Fifth Ave with his fashion line Ryan Kenny, he was a music executive and responsible for signing Akon, Wale, and The Dream, he ran a record label, he helped launched Revolt TV, he\'s one of the most successful party host ever and an icon in the nightlife scene, he was an executive at Roc-A-Fella records durning thier peak years, he was a brand ambassador for Ciroc, Greygoose and Deleon, he also created the influencer programs that all spirit companies use, and he is also an owner in Uncle Nearest Premium Whiskey. The brand is named after Nathan \u201cNearest\u201d Green who was the slave that was Jack Daniel\u2019s master distiller and the craftsman behind the now world famous Jack Daniels whiskey brand.\n\nKenny told us halirious and entertaining stories about Roc-A-Fella, Diddy, TI and more. He also gave us game on the inner workings of the night life business, the spirits industry, the music business and marketing. #musicbusiness #marketing \n\nGuest IG: @kennyburns \nBook Tip: The Dream is Real \n\n--- \n\nThis episode is sponsored by \n\u00b7 Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/843ab54/podcast/sponsor/acugkf/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>\n\nSupport this podcast: <a href="https://anchor.fm/earnyourleisure/support" rel="payment">https://anchor.fm/earnyourleisure/support</a>',
                pub_date_ms: 1570222122006,
                audio:
                    'https://www.listennotes.com/e/p/fd57261fcf2e42f1b93747b455995652/',
                audio_length_sec: 4339,
                listennotes_url:
                    'https://www.listennotes.com/e/fd57261fcf2e42f1b93747b455995652/',
                image:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                thumbnail:
                    'https://cdn-images-1.listennotes.com/podcasts/earn-your-leisure-earn-your-leisure-YReN24bymui-CSRy4Lz625Y.300x300.jpg',
                maybe_audio_invalid: false,
                listennotes_edit_url:
                    'https://www.listennotes.com/e/fd57261fcf2e42f1b93747b455995652/#edit',
                explicit_content: false,
            },
        ],
        next_episode_pub_date: 1570222122006,
    })

    // useEffect(() => {
    //     const fetchPodcast = async () => {
    //         const { data } = await listenNotesApi.get(
    //             `/podcasts/${match.params.podcastId}`,
    //         )
    //         setPodcast(data)
    //     }
    //     fetchPodcast()
    // }, [match.params.podcastId])

    if (podcast) {
        const { thumbnail, publisher, description, title, episodes } = podcast

        return (
            <div>
                <h2 className={styles.Title}>{title}</h2>
                <div className={styles.Content}>
                    <img className={styles.Thumbnail} src={thumbnail} alt='' />
                    <div>
                        <h3 className={styles.Publisher}>{publisher}</h3>
                        <p className={styles.Text}>{description}</p>
                    </div>
                </div>

                <EpisodeList episodes={episodes} />
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

export default Podcastpage
