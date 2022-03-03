let citiesArr = [
    {
        name: "London",
        image: "",
        population: "14,040,163",
        description: `London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.[9] The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains boundaries close to its medieval ones.[note 1][10] Since the 19th century,[11] "London" has also referred to the metropolis around this core, historically split between the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire,[12] which largely comprises Greater London,[13] governed by the Greater London Authority.[note 2][14] The City of Westminster, to the west of the City of London, has for centuries held the national government and parliament.

        London, as one of the world's global cities,[15] exerts strong influence on its arts, commerce, education, entertainment, fashion, finance, health care, media, tourism, and communications,[16] and therefore has sometimes been called the capital of the world.[17][18][19] Its GDP (€801.66 billion in 2017) makes it the biggest urban economy in Europe,[20] and it is one of the major financial centres in the world. In 2019 it had the second-highest number of ultra high-net-worth individuals in Europe after Paris[21] and the second-highest number of billionaires of any city in Europe after Moscow.[22] With Europe's largest concentration of higher education institutions,[23] it includes Imperial College London in natural and applied sciences, the London School of Economics in social sciences, and the comprehensive University College London.[24] The city is home to the most 5-star hotels of any city in the world.[25] In 2012, London became the first city to host three Summer Olympic Games.[26]`,
        link: "https://en.wikipedia.org/wiki/London"
    },
    {
        name: "Bath",
        image: "",
        population: "101,106",
        description: `Bath (/bɑːθ/ (audio speaker iconlisten) or /bæθ/ (audio speaker iconlisten))[2] is the largest city in the county of Somerset,[3] England, known for and named after its Roman-built baths. In 2019, the population was 101,106.[3] Bath is in the valley of the River Avon, 97 miles (156 km) west of London and 11 miles (18 km) southeast of Bristol. The city became a World Heritage Site in 1987, and was later added to the transnational World Heritage Site known as the "Great Spa Towns of Europe" in 2021.

        The city became a spa with the Latin name Aquae Sulis ("the waters of Sulis") c. 60 AD when the Romans built baths and a temple in the valley of the River Avon, although hot springs were known even before then.
        
        Bath Abbey was founded in the 7th century and became a religious centre; the building was rebuilt in the 12th and 16th centuries. In the 17th century, claims were made for the curative properties of water from the springs, and Bath became popular as a spa town in the Georgian era. Georgian architecture, crafted from Bath stone, includes the Royal Crescent, Circus, Pump Room and Assembly Rooms where Beau Nash presided over the city's social life from 1705 until his death in 1761.
        
        Many of the streets and squares were laid out by John Wood, the Elder, and in the 18th century the city became fashionable and the population grew. Jane Austen lived in Bath in the early 19th century. Further building was undertaken in the 19th century and following the Bath Blitz in World War II. Bath became part of the county of Avon in 1974, and, following Avon's abolition in 1996, has been the principal centre of Bath and North East Somerset.`,
        link: "https://en.wikipedia.org/wiki/Bath,_Somerset"
    },
    {
        name: "Manchester",
        image: "",
        population: "547,627",
        description: `Manchester (/ˈmæntʃɪstər, -tʃɛs-/)[4][5] is the most-populous city and metropolitan borough in North West England and Greater Manchester, England. The city has the country's fifth-largest population at 547,627 (as of 2018)[6] and lies within the United Kingdom's second-most populous urban area, with a population of 2.7 million,[7] third most-populous county, at around 2.8 million.[8] It is fringed by the Cheshire Plain to the south, the Pennines to the north and east. The city is surrounded by outlying towns and the neighbouring city of Salford. These two cities and the surrounding towns form a large continuous conurbation.[9] The local authority for the city is Manchester City Council. Manchester is one of the claimants to the title of "second city of the United Kingdom".[10][11]

        The recorded history of Manchester began with the civilian settlement associated with the Roman fort of Mamucium or Mancunium, which was established in about AD 79 on a sandstone bluff near the confluence of the rivers Medlock and Irwell. Although historically and traditionally a part of Lancashire, areas of Cheshire south of the River Mersey were incorporated into Manchester in the 20th century. The first to be included, Wythenshawe, was added to the city in 1931. Throughout the Middle Ages Manchester remained a manorial township, but began to expand "at an astonishing rate" around the turn of the 19th century. Manchester's unplanned urbanisation was brought on by a boom in textile manufacture during the Industrial Revolution,[12] and resulted in it becoming the world's first industrialised city.[13] Manchester achieved city status in 1853. The Manchester Ship Canal opened in 1894, creating the Port of Manchester and directly linking the city to the Irish Sea, 36 miles (58 km) to the west. Its fortune declined after the Second World War, owing to deindustrialisation, but the IRA bombing in 1996 led to extensive investment and regeneration.[14] Following successful redevelopment after the IRA bombing, Manchester was the host city for the 2002 Commonwealth Games.`,
        link: "https://en.wikipedia.org/wiki/Manchester"
    }
]

let landmarksArr = [
    {
        name: "Lake District National Park",
        image: "",
        yearCreated: "1951",
        description: `The Lake District National Park is a national park in North West England that includes all of the central Lake District, though the town of Kendal, some coastal areas, and the Lakeland Peninsulas are outside the park boundary.

        The area was designated a national park on 9 May 1951 (less than a month after the first UK national park designation — the Peak District). It retained its original boundaries until 2016 when it was extended by 3% in the direction of the Yorkshire Dales National Park to incorporate areas such as land of high landscape value in the Lune Valley.[3]
        
        It is the most visited national park in the United Kingdom with 16.4 million visitors per year and more than 24 million visitor-days per year,[2] the largest of the thirteen national parks in England and Wales, and the second largest in the UK after the Cairngorms National Park.[4] Its aim is to protect the landscape by restricting unwelcome change by industry or commerce. Most of the land in the park is in private ownership, with about 55% registered as agricultural land.`,
        link: "https://en.wikipedia.org/wiki/Lake_District_National_Park"
    },
    {
        name: "Big Ben",
        image: "",
        yearCreated: "1859",
        description: `Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster in London, England,[1] although the name is frequently extended to refer also to the clock and the clock tower.[2] The official name of the tower in which Big Ben is located was originally the Clock Tower, but it was renamed Elizabeth Tower in 2012, to mark the Diamond Jubilee of Elizabeth II.

        The tower was designed by Augustus Pugin in a neo-Gothic style. When completed in 1859, its clock was the largest and most accurate four-faced striking and chiming clock in the world.[3] The tower stands 316 feet (96 m) tall, and the climb from ground level to the belfry is 334 steps. Its base is square, measuring 40 feet (12 m) on each side. Dials of the clock are 22.5 feet (6.9 m) in diameter. All four nations of the UK are represented on the tower on shields featuring a rose for England, thistle for Scotland, shamrock for Northern Ireland, and leek for Wales. On 31 May 2009, celebrations were held to mark the tower's 150th anniversary.[4]
        
        Big Ben is the largest of the tower's five bells and weighs 13.5 long tons (13.7 tonnes; 15.1 short tons).[1] It was the largest bell in the United Kingdom for 23 years. The origin of the bell's nickname is open to question; it may be named after Sir Benjamin Hall, who oversaw its installation, or heavyweight boxing champion Benjamin Caunt. Four quarter bells chime at 15, 30 and 45 minutes past the hour and just before Big Ben tolls on the hour. The clock uses its original Victorian mechanism, but an electric motor can be used as a backup.`,
        link: "https://en.wikipedia.org/wiki/Big_Ben"
    },
    {
        name: "The Roman Baths of Bath",
        image: "",
        yearCreated: "60-70",
        description: `The Roman Baths are well-preserved thermae in the city of Bath, Somerset, England. A temple was constructed on the site between 60-70AD in the first few decades of Roman Britain. Its presence led to the development of the small Roman urban settlement known as Aquae Sulis around the site. The Roman baths—designed for public bathing—were used until the end of Roman rule in Britain in the 5th Century AD. According to the Anglo-Saxon Chronicle, the original Roman baths were in ruins a century later. The area around the natural springs was redeveloped several times during the Early and Late Middle Ages.

        The Roman Baths are preserved in four main features: the Sacred Spring, the Roman Temple, the Roman Bath House, and a museum which holds artefacts from Aquae Sulis. However, all buildings at street level date from the 19th century. It is a major tourist attraction in the UK, and together with the Grand Pump Room, receives more than 1.3 million visitors annually.[2] Visitors can tour the baths and museum but cannot enter the water.`,
        link: "https://en.wikipedia.org/wiki/Roman_Baths_(Bath)"
    }
]

let famousCitizensArr = [
    {
        name: "Sir Winston Churchill",
        occupation: "Prime Minister",
        description: `Sir Winston Leonard Spencer Churchill,[a] KG, OM, CH, TD, DL, FRS, RA (30 November 1874 – 24 January 1965) was a British statesman who served as Prime Minister of the United Kingdom from 1940 to 1945, during the Second World War, and again from 1951 to 1955. Best known for his wartime leadership as Prime Minister, Churchill was also a Sandhurst-educated soldier, a Boer War hero, a Nobel Prize-winning writer and historian, a prolific painter, and one of the longest-serving politicians in British history. Apart from two years between 1922 and 1924, he was a Member of Parliament (MP) from 1900 to 1964 and represented a total of five constituencies. Ideologically an economic liberal and imperialist, he was for most of his career a member of the Conservative Party, which he led from 1940 to 1955. He was a member of the Liberal Party from 1904 to 1924.`,
        link: "https://en.wikipedia.org/wiki/Winston_Churchill"
    },
    {
        name: "Oliver Cromwell",
        occupation: "Lord Protector",
        description: `Oliver Cromwell (25 April 1599 – 3 September 1658)[note 1] was an English general and statesman who, first as a subordinate and later as Commander-in-Chief, led armies of the Parliament of England against King Charles I during the English Civil War, subsequently ruling the British Isles as Lord Protector from 1653 until his death in 1658. He acted simultaneously as head of state and head of government of the new republican commonwealth.

        Cromwell was born into the landed gentry to a family descended from the sister of Henry VIII's minister Thomas Cromwell (his great-great-granduncle). Little is known of the first 40 years of his life, as only four of his personal letters survive, along with a summary of a speech that he delivered in 1628.[2] He became an Independent Puritan after undergoing a religious conversion in the 1630s, taking a generally tolerant view towards the many Protestant sects of the time;[3] an intensely religious man, Cromwell fervently believed in God guiding him to victory. Cromwell was elected Member of Parliament for Huntingdon in 1628, and for Cambridge in the Short (1640) and Long (1640–1649) Parliaments. He entered the English Civil Wars on the side of the "Roundheads", or Parliamentarians, and gained the nickname "Old Ironsides". Cromwell demonstrated his ability as a commander and was quickly promoted from leading a single cavalry troop to being one of the principal commanders of the New Model Army, playing an important role under General Sir Thomas Fairfax in the defeat of the Royalist ("Cavalier") forces.`,
        link: "https://en.wikipedia.org/wiki/Oliver_Cromwell"
    },
    {
        name: "William Shakespeare",
        occupation: "Playwright",
        description: `William Shakespeare (bapt. 26 April 1564 – 23 April 1616)[a] was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's greatest dramatist.[2][3][4] He is often called England's national poet and the "Bard of Avon" (or simply "the Bard").[5][b] His extant works, including collaborations, consist of some 39 plays,[c] 154 sonnets, three long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.[7] His works continue to be studied and reinterpreted.

        Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and twins Hamnet and Judith. Sometime between 1585 and 1592, he began a successful career in London as an actor, writer, and part-owner of a playing company called the Lord Chamberlain's Men, later known as the King's Men. `,
        link: "https://en.wikipedia.org/wiki/William_Shakespeare"
    }
]


export const getCities = () => {return citiesArr};
export const getLandmarks = () => {return landmarksArr};
export const getFamousCitizens = () => {return famousCitizensArr};