

function goBack() {
    window.history.back();
}




let spin = document.querySelector(".first1");
let button = document.querySelector("#third");
let button1 = document.querySelector(".second");
let button2 = document.querySelector(".first2");

spin.onmouseover = function () {
    spin.style.animationPlayState = "paused"
}
spin.onmouseout = function () {
    spin.style.animationPlayState = "running"
}

button.onmouseover = function () {
    button.style.animationPlayState = "paused"
}
button.onmouseout = function () {
    button.style.animationPlayState = "running"
}

button1.onmouseover = function () {
    button1.style.animationPlayState = "paused"
}
button1.onmouseout = function () {
    button1.style.animationPlayState = "running"
}

button2.onmouseover = function () {
    button2.style.animationPlayState = "paused"
}
button2.onmouseout = function () {
    button2.style.animationPlayState = "running"
}



// let x, y, z, a, b, c, d, e, f, g, h, i, j, o, p, q, r, s, t, u, v, w;

let Array = [{
    // id:"roga",
    title: "ROGA",
    img: "dev-img/RogaN1.jpg",
    name: "ROGA(N1)",
    direction: "NW",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐ शिरोमेश्रीर्यशोमुखंत्विषिः केशाश्चश्मश्रूणि राजामेप्राणोऽअमृतं सम्राट् चक्षुर्विराटश्रोत्रम्।। ॐभू भो रोग इहा रोगाय नमः।।",
    devta: "Devta Description",
    devta_dis: "Mrityu was born off the wedlock of Bhaya and Maya who belonged to the Dharma clan which emerged out of Prajapati Daksha Mrityu has five sons - Vyadhi, Jara, Shoka, Trishna and Krodha. Vyadhi is synonymous with Roga and occupies the north west pada in the Vaastu chakra. He is the most frightful of the Gods and grants death and bondage Angering him results in death.",
    other: "Other Details",
    list1: [
        "Drainer of energies, Fever.",
        "It gives sickness, disease and weakness.",
        "If it's weak, our body is weak to face challenges.",
        "State: Beta (Pranmaya), Due to Roga (disease), Physical as well as Energy Body get weakened, vitality & Energy in the body is adversely affected",
        "Chakra: Manipur (2.4)",
        "During disease, doctors recommend light food, Manipura rules digestion, it is also affected by Roga and get weakned.",
        "If balanced, it destroys diseases and provides energy, gives abilities to deal with tough times.",
        "Death like pain if entrance here.",
        "Mirrors placed here, person expands his horizon of support to his relatives and friends and expects same from them.",
        "Sitting here when balanced, person received support from all walks of life.",
        "If balanced, makes a person energetic and supportive",
        "Toilet – fails to receive company or adequate support from family",
        "Mother of the family is more disturbed if imbalanced",
        "Grey Stones or their photos in this energy field give a lot of stability after balancing.",
        "If you want someone's support, by placing the photo of boss with him in happy times is good.",
        'If someone claims – “boss is not supporting, keep his own photo with boss here”'
    ]

}, {
    title: "NAGA",
    img: "dev-img/NagaN2.jpg",
    name: "NAGA(N2)",
    direction: "NNW",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐनमो स्तुसर्पेभ्योयेके च पृथिवीमनु।। येऽ अन्तरिक्षेयेदिवितेभ्य: सर्पेभ्योनमः।। ॐ भूर्भुवः स्व अहे इहा अहयेनमः।।",
    devta: "Devta Description",
    devta_dis: "Prajapati Kashyap was the son of Marichi and grandson of Brahma. He was married to the thirteen daughters of Prajapati Daksha. Kadru was one of them and she gave birth to the Nagas called Shesha, Ananta, Vasuka, Takshaka, Kulita etc. The Aadiparva of the Mahabharat has reference to this. As the Nagas were the brothers of the Adityas, they were also counted among the gods. They dwell in the lower (infernal) regions called hell.",
    other: "Other Details",
    list1: [
        "Attribute is to give pleasure, lust and desire. It served as a weapon of",
        "He is the power of giving emotional enjoyment.",
        "He gives you the power which controls sexual tendencies-- pertaining to Mooladhar-- and draws the best possible pleasure and enjoyment out of them for you.",
        "Entrance causes enmity, jealousy/ weakness, stress and women go astray/ people envy you and become your enemy, forms negative attitude towards you.",
        "In Hindu mythology, Vasuki, the king of snake, having a Mani on his head which is priceless and it becomes a source of enmity.",
        "Imbalance here will attract people but they will be jealous",
        "State: Aplha ( Why people are slave of Lust is due to feeling of Alpha, thought process is minimised in this state of brainwave frequency, the same happens in Meditation also that is the reason sages warns us not to indulge in gratification of senses because the same can be achieved by Meditation and in Meditation we are the master of ourselves not the slave of our 5 senses)",
        "Chakra: Anahat (Love, Low Brainwave Frequency that gives us relief)",
        "Anahat Chakra here deals with love, attraction. So if you place a product here will attract people, it gets sold very easily. People fall in love with this.",
        "Mirror here will increase materialistic desires manifold",
        "Presence of two identical objects here gives twins.",
        "Ironing table is not allowed here, can create fight between couples.",
        "Shoe-rack is not allowed, people can be rejected in the last interview.",
        "Residents are less liked if dustbin if kept here. People don’t want to attach to such residents. Entire family doesn't look attractive to be attached.",
        "A make-up kit here, you will become aware of your looks, start spending money and time over your looks.",
        "Lakshmi ji Silver statue is excellent for Financial Gains"
    ]

}, {
    title: "MUKHYA",
    img: "dev-img/mukhya.jpg",
    name: "MUKHYA(N3)",
    direction: "NNW",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐइषेत्वोर्जेत्वा वायवस्थदेवोवः सविता प्रार्थयतु श्रेठतमायकर्मणऽ आप्यायध्वमन्ध्याऽइन्द्रायभागम्प्रजावतीरनमीवा अयमामावस्तेनईशतमाघ शर्छ सोध्रुवाअस्मिन् गोपतौस्यातबहीर्यजमानस्य पशून्पाहि। ॐ भूर्भुवः स्वर्भोमुख्य इहा मुख्यायनमः।।",
    devta: "Devta Description",
    devta_dis: "Vishwakarma or Tvashta has been considered as the Mukhya god. He is the son of Prabhas Vasu, one of the Ashta vasus, who was married to Jupiter's sister. Tvashta is counted among the twelve Adityas and Godmother Aditi is his mother.",
    other: "Other Details",
    list1: [
        "If zone is well organised, the house will be well organised",
     " In certain vastu books, it is associated with Vishwakarma, he has four children.",
    " Entrance here gives lots of money, male off springs/ Overall bliss/make people very manageable with task given to them, done in a way that everybody benefits/sense of organisation and sense of allocation of task comes from entrance here.",
     "It is predominantly a male energy field",
     " If it's balanced, and a person sleeps here, makes a person very meticulous, systematic.",
     " If the mother or mother in law is sleeping here, she will become caretaker of every function, and very systematic.",
     "Father-in-law sleeps here; he becomes head or caretaker of the family and very systematic also.",
     " Mukhya is the manager of Varun(the power of governing the entire world).",
     "His job is to left the forms( from vigyanmaya kosha) to manifest in the physical world( Annamaya kosha) ",
     " Mukhya is the power which gets the product or service ready for sale.",
     "He is the head of the main purpose of a building, of all those energies which manifest the purpose of a building.",
     "A power which, as a leader, a guide or a guided force, let things happen or manifest is the power of Mukhya.",
     " This energy field has the power to finish the process of manifestation."
    ]
},
{
    title: "Bhallat",
    img: "dev-img/Bhallat N4.jpg",
    name: "BHALLAT(N4)",
    direction: "NORTH",
    color: "YELLOW",
    sloka: "Devta Sloka",
    sloka_dis: "ॐबण्महाँ 2।। असि सूर्य बळादित्यमहाँ 2असि।। महते सतो महिमापनस्यतेद्धादेव महाँ 2।। असि।। ॐ भूर्भुवः स्वर्भोभल्लाटइहा भल्लाटायनमः।।",
    devta: "Devta Description",
    devta_dis: "The Vasu named Prabhas, who is the father of Vishwakarma, has found a place close to Vishwakarma in the Vaastu chakra. Samrangan Sutradhar has considered Bhallata to be the Moon, but when the question of installing the eight vasus in the vaastu chakra arises, they have mostly been assigned places in the north. The father son or associate duo of Indra-Jayant, Aap-Aapvatsa, Savitra-Savita have found adjacent places. In the same order, Prabhasvasu has been placed next to Vishwakarma. If a door is located in this place, then a lot of wealth enters the house.",
    other: "Other Details",
    list1:[
    "Helps to achieve something big, it's the power to give colossal abundance. It is it’s power which magnifies our efforts and also the results of those efforts and, makes them very big.",
    "Abundance, Expansion, super natural being, Yeti.",
    "When we try to achieve something big in any domain of our life, then, the power of Bhallat works in conjunction with the power of Bhudhar to manifest our desire and to make our efforts successful.",
    "Caretaker of wealth of Kuber.",
    "It possesses the quality of brave, wise and ethical character.",
    "Entrance here brings abundance of inherited and earned money/It gives you those skills, with which you can increase your work or assets in manifold/ male dominated family/ people want to do big in execution.",
    "Imbalance – Gives problem with father and less or no money from father.",
    "It gives you that kind of thoughts to do things on big scale.",
    "Keep a money plant with big leaves to attract growth opportunities in our life.",
    "A living room or bed room here people are able to dream big.",
    "Toilet here discourages people to expand their work."
    ]   
},
{
    title: "SOMA",
    img: "dev-img/Soma N5.jpg",
    name: "SOMA (N5)",
    direction: "NORTH",
    color: "RED",
    sloka: "Devta Sloka",
    sloka_dis: "ॐवयं सोमव्रतेतवमनस्तनूषुबिभ्रतः। प्रजावन्तः सचेमहि ॐभू भो: सोमइहा ॐसोमायनमः।।",
    devta: "Devta Description",
    devta_dis: "Since Vedic times, Soma has been an important god. However the Vedas have dwelt more on his plant like than human form. He has been projected as a very attractive god and Indra, Agni, Varuna, Mitra are all keen to acquire Soma. He has been defined as the wealth of the Gods, best of medicinal herbs, the King of the Plant Kingdom and therefore has been assigned the status of a God. Soma is also synonymous with the Moon.",
    other: "Other Details",
    list1:[
    "Power to earn profits and safeguard it.",
    "The drink of immortality, the essence",
    "Possesses magical properties.",
    "Associated with Moon, lord of subconscious mind and Kuber, lord of wealth.",
    "It's associated with right brain, subtle thoughts.",
    "What to do with money, how to manage it, invest it comes from Soma.",
    "Flow of money happens with a good combined balancing with Soma and Bhallat.",
    "Entrance here makes fire weak and thus makes a person like to live a life full of satisfaction/ gives a religious bent of mind. Because of Chandra, it makes you satisfied/ Good progeny, overall bliss and wealth.",
    "Manipur Chakra--Fire element--power of transformation:",
    "He is the lord of Speech also called 'Vachaspati'",
    "Soma has the power of giving luck and fortune (Saubhagya) to females.",
    "Soma gives strength to earn profits in business and safety from the enemies.",
    "He creates such a magic in whatever you do that it attracts the attention of other person standing before you.",
    "Soma has the power which practically converts your work into money.",
    "If Soma is balanced, you will immediately get the people who will appreciate your efforts and purchase your product and services.",
    ]
},
{
    title: "Bhujang",
    img: "dev-img/Bhujang N6.jpg",
    name: "BHUJANG (N6)",
    direction: "NNE",
    color: "YELLOW",
    sloka: "Devta Sloka",
    sloka_dis: "ॐ उदुत्यंजातवेदसंदेवंवहंतिकेतवः दृशेविश्वाय सूर्य स्वाहा।।",
    devta: "Devta Description",
    devta_dis: "Bhujanga or Sarpa refers to the malefic serpent deity. This is a name for Ahi or Vritra, the Vedic demon of drought, who coils himself around the cloud mountains and holds the water in the clouds, stopping them from raining on the earth. Indra then uses his thunderbolt or Vajra to free the waters. Vritra was created by a sage named Tvashtri in order to defeat Indra who however succeeded in bringing about the end of Vritra. Sarpas have emerged from the womb of Kadru, the daughter of Prajapati Daksha and they started living on earth. Indra resided on the bed of Sheshnaga and Lord Krishna danced on the Kaliya Naga. Sarpa has also been called Kaala, son of Dhruva and granson of Dharmaraj and Vasu.",
    other: "Other Details",
    list1:[
    "In Atharva Ved, it is Asur Anant Naga. Even Gods get scare. He is the one who evoked as the protector of treasure of life; health.",
    "If imbalance, the person is very rude and talks very ill. Can disregard anyone",
    "Protector of life saving medicines, herbs and treasures under earth.",
    "Mind is restless an easily irritable",
    "Toilet here can give cancer",
    "Entrance here, residents exhibit fanatic kind of behaviour/enmity from progeny and stress",
    "Dustbin will cause irritation in throat",
    "Heavy goods will cause problem in lower Jaw",
    "Drinking water storage will cause continuous cold and cough here",
    "Kitchen is worst here",
    "Store will only give diseases",
    "Seepage, fungus, toilet, nala can give throat related issues",
    "When the power of Bhujag is in balance in the building, it ensures health and smooth flow of money is maintained.",
    "Main deity for sexuality. In yoga and Tantra tradition, i is connected with kundalini power.",
    ]
},
{
    title: "ADITI",
    img: "dev-img/Aditi N7.jpg",
    name: "ADITI (N7)",
    direction: "NNE",
    color: "GREEN",
    sloka: "Devta Sloka",
    sloka_dis: "ॐउतनोहिर्बुध्न्यः श्रृणोत्वज एकपात्पृथिवीसमुद्रः। विश्वेदेवा ऋतावृधोहुवानस्तुता मंत्रा: कविशस्ता श्रवन्तु।। ॐभू अदितेइहा ॐअदितये नमः।।",
    devta: "Devta Description",
    devta_dis: "Aditi meaning the infinite and mother of the world was a sky goddess and the mother of the gods in Hinduism. It is said that she had 12 descendants called Adityas corresponding to the months of the year. She is also Vishnu's female counter part and is said to nourish the earth, support the sky and sustain all existence. Just as Aditi was the mother of the Gods, Diti was the mother of the demons. Their children were jealous of each other and always fighting with each other. Aditi has been assigned the pada in the North east corner of the vaastu chakra, next to Diti. ",
    other: "Other Details",
    list1:[
    "Power to overcome all obstacles",
    "Aditi provides security and helps in maintaining the integrity (Akhand swaroop). It gives perfection(nipudta)",
    "This is the power of connectivity with self.",
    "if imbalanced, person becomes distant for his own self, and experience fear and mental turbulence. He is scared of something unexplained. Person feels directionless and feels a total imbalance in whole life.",
    "Meditation or puja gives great result here",
    "Aditi helps people to get solution from the super consciousness in adverse situations of life.",
    "The peace giver, it helps us develop solutions",
    "If imbalanced, gives uneasiness, restlessness and disturbance",
    "To balance life, this zone must be balanced",
    "If the residents feel something is lacking in life, Aditi needs to check.",
    "If it's disturb, it will disturb all the other fields also",
    "It provides us to be an expert, a perfectionist and makes you an expert.",
    "If while concluding things, we come under stress at the last moment, look at this field for any imbalance",
    "Mother like",
    "Entrance here shows the females of the family marry outside of the caste/ girls defy their family tradition/ destroys women, obstacles laid by enemies, fear and bereavement",
    "If we feel directionless, then check this field. If this zone is extended, person will only keep searching for Gurus to solve their problems. Living room here, or females sleeping here, are female dominated families."
    ]

}, {
    title: "Diti",
    img: "dev-img/Diti N8.jpg",
    name: "DITI (N8)",
    direction: "NE",
    color: "GREEN",
    sloka: "Devta Sloka",
    sloka_dis: "ॐ अदितिौरदितिरन्तरिक्षमदितिर्मातासपितासपुत्रः। विश्वेदेवा अदितिः पंचजनाऽअदितिर्जातमदितिर्जनित्वम्। ॐ भू भोदिते इहा ॐओंदितये नमः।।",
    devta: "Devta Description",
    devta_dis: "Of the 13 wives of Prajapati Kashyapa, Diti was one of them. This name has appeared thrice in the Rig Veda, twice with Aditi. Aditi was the mother of the Gods and Diti was the mother of the demons. Inspite of her demonic nature, Diti has godly qualities inhibited within her. Their children were jealous of each other and always fighting. Diti's sons grew upto be called the Daityas. Hiranyakashyap and Hiranyaksha were her two sons, who were killed by the Gods. Diti then prayed to Kashyap for a son who could defeat the Gods. She was granted a boon by the sage and gave birth to the 49 Marudgana sons, who became Lord Indra's helpers and thus received the Devyoni. ",
    other: "Other Details",
    list1:[
    "Broad mind , Far-sightedness, freedom of thought.",
    "As it is sahastrar, delta wave, if imbalance It impacts to the very deep level.",
    "Removes all duality if balanced, total clarity",
    "When balanced, it discourages sheep like following; you do not follow the traditions blindly. You have an individual personality. You would be able to know what to do and what not to do.",
    "Power to say NO comes from this field",
    "Imbalance here takes away clarity of mind; this power leads to confused mind. Person finds himself unable to visualize all the related aspects of a subject or situation and reach a decision.",
    "Gives spirituality if entrance here and female dominance with important roles in life/ gives higher bank balance/poverty, stress, ailments and impediments",
    "It cut, people loses courage to say NO.",
    ]

}, {
    title: "SHIKHI",
    img: "dev-img/Shikhi E1.jpg",
    name: "SHIKHI (E1)",
    direction: "NE",
    color: "BLUE ",
    sloka: "Devta Sloka",
    sloka_dis: "ॐतमीशानंलगतस्तस्थुषस्पतिं धियजिन्वमवसेहूमहेवयम्। पूषानोयथावेदसामसद्वृधेरक्षितापायुरदब्धः स्वस्तये।।ॐ भूर्भुवः स्वः भो: शिखिन् इहागच्छ इहातिष्ठ ॐशिखिने नमः शिखिनमावाहयामि इतिस्थापनम्।।1।।",
    devta: "Devta Description",
    devta_dis: "Shikhi rules the first cell of the Ekasheetipada from the north east direction. The word Shikhi is symbolic of a peak and means fire or peacock. The qualities of Shikhi are like that of Agni. Shikhi rules the head of the Vaastu purush. ",
    other: "Other Details",
    list1:[
        "Third eye of Shiva",
        "Ideas, Right Brain, CNS, Eyes, Peace, Giver, Serenity (Shaant chita)",
        "Power to conceive any idea and condense them",
        "Need to check this devta when we find ourselves at loss of ideas",
        "Heavy stuff kept here can also cause imbalance",
        "Imbalances here causes issues of eyesight",
        "Office gate here will cause problems related to electricity",
        "Entrance here gives fire, accidents and losses/Brings sorrow, loss and proneness to fire outbreak",
        "Kitchen here causes anger and frustration, lots of mental disturbance",
        "A store over here causes blocked mind set.",
        "A toilet here can be associated with mental defects.",
        "Sitting here for long gives disinterest in life, for some time it is good.  ",
        "As per traditional vastu, put water in household here",
        "Water symbolizes ideas, o bring new ideas we put water in shikhi",
        "A bedroom over here doesn't provide good sleep, constant anxiety and thinking.",
    ]

}, {
    title: "PAPYAKSHMA",
    img: "dev-img/Papyakshma W8.jpg",
    name: "PAPAYAKSHMA(N8)",
    direction: "NW",
    color: "GREEN",
    sloka: "Devta Sloka",
    sloka_dis: "ॐसूर्यरश्मिर्हरिकेशः पुरस्तात्वविता ज्योतिरुदयाँ 25 जनम्।। तस्यपूषा प्रसवेयातिविद्वान् सम्पश्यन्विश्व भुवनानिगोपाः ॐभू भो: पाप इहा पापायनमः।।",
    devta: "Devta Description",
    devta_dis: "IPapayakshama is made up of two words papa and yakshma. Yakshma is a disease that gradually makes the lungs dysfunctional. Bad deeds and action are called papa. So Papayakshama is the disease that arises when a person is always indulging in wrongful action. Tuberculosis is also called Papayakshama.",
    other: "Other Details",
    list1:[
    "Addiction, Causes disease, weak mind, negative behaviour",
    "It's a demon; its qualities are giving challenges in day to day task. Drinking habits, guilt, weakening of mind.",
    "Feeling of Loneliness, Drug Addiction & Disease, Fault Finding Nature",
    "Manipur chakra attributes-- will power, determination.",
    "Beta brainwave-- related to day to day task ",
    "Residents unable to control their heart and talk only negative things.",
    "Entrance here is very bad, Causes drug addiction, uses their ability to keep their ability under control/ adopting unfair means for personal benefits/ brings ailments and bereavements/ depression, negative attitude, taking drinks regularly.",
    "Sleeping here, door here, spending more time here negativity in life, moves towards drugs. His attention is continuously looking for mistakes of others. This behaviour disconnects him from society. Then he resort to alcohol and drugs to keep off his loneliness.",
    "Sleeping here for longer periods of time makes a person depressed and force person to move towards other medium to feel good.    ",
    "Right use can be done by place a weeping room (kopbhawan).",
    "Paap plus Yakshma.....Yakshma is a kind of disease which disabled lungs slowly and paap is bad actions. So continuous bad actions gives illness and bad returns which are called Paapyakshma.",
    ]
    
}, {
    title: "Rudra",
    img: "dev-img/Rudra W7W8.jpg",
    name: "RUDRA (N7) ",
    direction: "NW1",
    color: "BLUE",
    sloka: "Devta Sloka    ",
    sloka_dis: "ॐसुमाणपृथिवींद्यामनेहसठ सुशर्माणमदितिर्छ सुप्रणीतिम्। दवींनावठ स्वरित्रामनागसमस्रवन्तीमा रुहेसास्वस्तये।। ॐ भू भोरुद्रइहा रुद्रायनमः।।",
    devta: "Devta Description",
    devta_dis: "In the Vedas, Rudra is the god of storms and the howling terrible God. He is a destructive deity who brings diseases upon men and cattle on one hand and is a beneficient deity with a healing influence on the other. In the Puranas it is stated that Brahma desired to create a son and Rudra came into existence as a youth. He wept and asked for a name and was given the name of Rudra. He is the personification of the uncultured force, causing destruction and disarray.",
    other: "Other Details",
    list1:[
    "Channelizing support",
    "The fierce God, untamed one, Shiva, wind and storm, multi form, strong, God of untamed, Forest",
    "Described as cunning and head of thieves.",
    "He has a special methodology for treatment and cure.",
    " The power which makes water streams flow on earth has also been termed as Rudra.",
    "Shiva form, responsible for all types of flow of activities, Flow of emotions, flow of tears starts from Rudra and stops at Shosha.",
    "Sustaining day to day activities without interruption",
    "Emotional imbalance",
    "It also ensures flow of ideas, a support system",
    "Ability to complete work with ease    ",
    "It is advised to make grainery here as ht grains in form of food keeps the flow of life.",
    "In factories, the consumption of finished goods keeps the company flowing, so it is a good place to keep finished goods. ",
    "The power which generate tears is Rudra",
    "Air is its essence, heavily influenced by the moon; this is rulers of mind and emotions",
    ]

}, {
    title: "Bhudhar",
    img: "dev-img/PRITVIDHAR or BHUDHAR N1 N8.jpg",
    name: "BHUDHAR",
    direction: "NORTH",
    color: "BLUE",
    sloka: "Devta Sloka    ",
    sloka_dis: "ॐपृथिवीछन्द : अन्तरिक्षंछन्द: द्यौश्छंद: समाश्छंद: नक्षत्राणिच्छंद: वाक्छंद: मनश्छंद: कृषिश्छंद : हिरण्यंछन्द: गौश्छन्द : अजा छन्दः अश्वश्छन्दः। ॐभू भो पृथ्वीधरइहा ॐपृथ्वीधरायनमः।।",
    devta: "Devta Description",
    devta_dis: "Lord Vishnu is often depicted reclining on a coiled and many-headed cobra called Shesha Naga, which rests on the cosmic waters with his consort serving him at his feet. Prithvidhar is synonymous with Shesha naga. He is one of the Ashtavasus. Vasu, daughter of Prajapati Daksha and wife of Dharma, gave birth to a vasu named Dhar. Dhar came to be known as Prithvidhar with all the other vasus.    ",
    other: "Other Details",
    list1:[
    "Holder of the earth ",
    "Which makes all the manifestation possible in to the existence? ",
    "Bhudhar ensures that nine months after seeding, it will protect the child metaphorically.    ",
    "'Bhu' means -- to happen, to exist, to manifest; and 'dhar' means the one who carries or contain it. So this field of energy is --'the one who carries the power of manifestation.'",
    "Direction (N1 & N2) falling in [NW, NNW]",
    "Bhudhar has Alpha State (Concentration, Single Minded, State of Absorption, No Duality) and it represents Manomaya Kosha which corresponds to Alpha Brainwave frequency",
    "Whatever is created by The Brahama has to carried & manifested by Bhudhar so it has to be in Alpha State to help the development of foetus",
    "Example: when a lady conceives, she has to carry the foetus for 9 months, during the 9 months she is different lady, watchful, careful in her eating, walking and activities ",
    ]

}, {
    title: "AAPAHA",
    img: "dev-img/Aap N7N8.jpg",
    name: "AAPAHA",
    direction: "NE1",
    color: "RED",
    sloka: "Devta Sloka",
    sloka_dis: "ॐआपोअस्मान्मातरः शुन्धयन्तुघृतेननोघृतवः पुनंतु। विश्वं हिरिप्रवहतिदेवीरुदिदाभ्यः शुचिरापूतऽएमि। ॐ भूर्भुवः स्वर्भो आप इहागच्छत। अभ्द्योनमः।।",
    devta: "Devta Description",
    devta_dis: "When we move from the Kendra padas of Brahma and move towards the north east corner, then we come across the pada for the God called Aap. There are four references to this god in the Rig Veda. She refers to mothers, young females, boon granting and Yajna blessing devis. They do not go against the laws set by Indra. They also follow the rules set by Savita. Aap is present wherever Mitra and Varuna meet.",
    other: "Other Details",
    list1:[
    "Associated with healing, set to destroy ailments, gives healing powers    ",
    "Ailments means challenges also, helps us to come out of these problems, gives healing.    ",
    "If imbalance, it will destroy the healing power",
    "Ability of the mind to face the challenges and overcome it    ",
    "When balanced, we feel a kind of bliss, our intuitions are improved.    ",
    "It referred as Himalayas. It flows all prana, life force, in forms of rivers and gives us all the ideas and healing powers to face the physical and mental challenges.",
    "It has the power to free you from the fear.",
    "It strengthen the immune system, it cures diseases and get long life.",
    "It creates the vision and brings the driving force in humans. He is the life (prana) of all the water streams on the planet and is the causing factor of their movement.",
    ]
    
}, {
    title: "Parjanya",
    img: "dev-img/Prajanya E2.jpg",
    name: "PARJANYA (E2)",
    direction: "ENE",
    color: "",
    sloka: "Devta Sloka",
    sloka_dis: "ॐमहारऽएइंद्रोवज्रहस्त: षोडशीशर्मयच्छतु हन्तुपाप्मानयोस्मान्वेष्टि। । उप यामगृहीतोसिमहेंद्रायत्वैषतेयोनिर्महेंद्रायत्वा। ॐ भूर्भुवः स्वः भोः पर्जन्यइहागच्छइहतिष्ठ। ",
    devta: "Devta Description    ",
    devta_dis: "Parjanya rules the second cell of the Ekasheetipada from the north east direction. He was one of the twelve adityas. According to the Vishnu Purana, he is the guardian of the month of Kartika, a Gandharva and a Rishi in the Harivamsa. He is also counted amidst the 33 gods described in the Vedas. His parents were Sage Kashyap and Aditi. He rules the right eye of the Vaastu Purush. He is the lord of the rain water and is responsible for the rains. According to the Rig Veda, the clouds are called Parjanya. His main weapon is the lightening produced by clouds. Parjanya protects the earth with his water and makes it fertile to produce plants and trees.",
    other: "Other Details",
    list1:[
    "Best place to meditate, gives shower of insights, it helps us evolve",
    "Refreshment, Insights, Fertile Thoughts, & Fertility in women, Evolving  ",
    "Associated with Flora and Fauna",
    "It is responsible for growth in plants and production of fruits.",
    "It is invokes in Vedas as the power of fertility in women and cows.",
    "Entrance here gives more female birth, wasteful expenditure/drain of wealth and bereavement.",
    "If the door placed here power of Pingla Nadi drains away, masculine power of place drains, so more girls born.",
    "Theta+Agya+Vigyanmaya gives insight, intuition, sanskara.",
    "Effects more females than males. ",
    "However the females belong to this place are very bold and take care of their family like a son.",
    "Lot of efforts without any result if toilet here.",
    "Related to women Fertility issues if imbalance",
    "Washing machine here – females cannot conceive",
    "Dustbin can cause ovarian cyst.  No adequate returns if kitchen hereBedroom ensures very good sleepMother child photo improves their relationship, their bonding",
    "Flower bucket after balancing shows better results in returns.Fruit basket creates abundance",  
    "Entrance here gives more girls born/wasteful expenditure"
    ]   
}
    , {
    title: "Shosha",
    img: "dev-img/Sosha W7.jpg",
    name: "SHOSHA (W7)",
    direction: "WNW",
    color: "YELLOW",
    sloka: "Devta Sloka",
    sloka_dis: "ॐअसवेस्वाहा सववेस्वाहा विश्वेभ्यः स्वाहा विवस्वते स्वाहा गणश्रियेस्वाहा गणपतयेस्वाहाभिभुवेस्वाहाधिपतये स्वाहाशूषायस्वाहा सर्छ सायस्वाहा चंद्रायस्वाहा ज्योतिषस्वाहा मलिम्लुचायस्वाहादिवापतयेतेस्वाहा।। ॐॐभू भोः शोक इहा ॐशोकायनमः।",
    devta: "Devta Description",
    devta_dis: "Shosha is considered to be the God of mourning and if this god is annoyed he brings reason to mourn. If a sorrowful person stays in this part, he tends to feel light because his tears start falling on their own. The Samrangan Sutradhar considers Shosha to be Saturn, the son of the Sun. Shosh is said to be imbibed with the qualities of Saturn. If a door is constructed here, then there is loss and destruction of wealth. Shosh is also synonymous with shoka meaning mourning. In the Vaastu chakra he is placed next to Asura.",
    other: "Other Details",
    list1:[
    "When the residents feel low due to negative experiences and emotionally and mentally breakdown, it helps relaxing and detoxifying",
    "It is meant to dry up things. Where tears dry.",
    "This is the ability to communicate our thoughts and share our feelings and clear our hearts to feel light.",
    "Effect of planet Shani can be parallel to this energy field. ",
    "Thyroid problem occurs when we are not able to communicate our feelings (vishuddhi chakra), if this zone is either cut or extended. ",
    "Cut cause depression in life/relations become tense, because they can't share well.  ",
    "I extended, we can't stop crying, living in past miseries.",
    "A bed here makes you depress although spending some time here is good.",
    "Shoe-rack and dustbin can be kept here.",
    "If past thoughts are still troubling you, giving you depression, this field is disturbed.  ",
    "Entrance here gives drug addiction due to loss of happiness/loss of wealth and brings stress.    ",
    ]
    
}, {
    title: "Rajyakshama",
    img: "dev-img/Rajyakshma N1N2.jpg",
    name: "RAJYAKSHAMA",
    direction: "NW2",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐअभिगोत्राणि सहसागाहमानोदयो वीरः शतमन्युरिन्द्रः। दुश्च्यवनः पृतनाषाडयुध्योस्माकं सेनाऽअवतुप्रयुत्सु।। ॐभू भोराजयक्ष्मनिहा राजयक्ष्मणेनमः।। ",
    devta: "Devta Description",
    devta_dis: "Rajyakshama is the fierce form of Rudra. He is related to the diseases of the lungs. Rudra moves through the medium of air and exists in the air. Rajyakshama spreads in the body through the air and makes the body diseased. The body becomes stagnant.",
    other: "Other Details",
    list1:[
    "The Holder    ",
    "Attendant of Rudra",
    "Lord of all roots, keep the root and strengthen it.",
    "Kosha: Rajyakshama has influence over Manomaya Kosha, mind is concentrated at whatever is created by Brahama",
    "State: Beta depicting Anamaya Kosha",
    "Since the foetus has to develop physically and the development of physical body takes place inside the mother womb, the Kosha should be Anamaya",
    "Chakra: Muladhar (for Birth Process, Muladhara is the chakra to make this happen)",
    "It also stills the mind. If energy of this zone becomes imbalanced (kupita), then due to air being wrathful the mind becomes very much unstable.",
    "It helps to stop the idea in the mind for further implementation    ",
    "If imbalanced, support will come but will not last",
    "Rudra is like water, Rajyakshma is like dam, both are necessary.",
    "Rudra ensure it is coming, Rajyakshma ensures to keep it and make it profitable for you.",
    "This energy ceases universal mind for a moment so that the creation of life could initiate. Unless that cessation happens, creation is not possible.",
    "It is the power to hold that cessation and the new walls around that space in which the life manifests and which in turn, initiates the creation of the whole world.    ",
    ]

},
{
    title: "Aapvatsa",
    img: "dev-img/Aapvatsa E1E2.jpg",
    name: "APAHAVATSA(NE2)",
    direction: "WSW",
    color: "RED",
    sloka: "Devta Sloka",
    sloka_dis: "ॐआतेवत्सोमनोयमत्परमाच्चित्सधस्थात् अग्नेत्वांकामयागिर।। ॐ भूर्भुवः स्व आपवत्स इहा ॐआपवत्सायनमः।।",
    devta: "Devta Description",
    devta_dis: "Aapvatsa has been linked with the children of water bodies, namely, rivers, lakes etc. In the Vedas Aapvatsa has been specifically called the source of water, underground water, or water body above the earth's level. But at times he has been associated with moving water. The offspring of water is the nadichakra that emerges from water. That is why this pada in the north east is associated with water.",
    other: "Other Details",
    list1:[
    "Apaha brings ideas, Apahavatsa carriers these ideas towards practical application, into all areas of our life. To make these ideas doable.",
    "Son of Apaha",
    "In practical terms, how to make usage of the insights in our day to day life.",
    "It grants the power which carries medicinal elements to the point of disease in the human body. ",
    "The same power is also responsible for carrying insights from intuitive body(vigyanmaya kosha) to mind body(manomaya kosha).",
    "That's why vastu recommends doing worship or meditation in this energy field.",
    ]
    
}, {
    title: "Jayant",
    img: "dev-img/Jayanth E3.jpg",
    name: "JAYANT (E3)",
    direction: "ENE ",
    color: "",
    sloka: "Devta Sloka ",
    sloka_dis: "ॐधन्वनागा धन्वनाजिंजयेमधन्वनातीव्राः समदो जयेम। धनुः शत्रोरपकामं कृणोतिधन्वनासर्वाः प्रदिशोजयेम। ॐ भूर्भुवः स्वः भोः जयन्त इहागच्छ इह।।    ",
    devta: "Devta Description",
    devta_dis: "Jayant is the son of Indra and Shuchi, daughter of the demon king Puloma. So Jayant is considered to have demonic qualities. Jayant is appeased through prayers inviting the vanquisher of enemies, and the one who is victorious over all the directions. Jayant rules the right ear of the Vaastu Purush. If there is a door in this position, then Jayant bestows unlimited wealth to the owner, confers fame and he establishes a monopoly in his sphere of work. Jayant rules the cell adjacent to Indra and it is assumed that the owner of the house can be a royal person or be related to a royal    ",
    other: "Other Details",
    list1:[
    "It ensures that you are successful in all your undertakings. ",
    "The sense of being victorious comes from this energy field",
    "Responsible for Zeal and enthusiasm",
    "When we are too simplistic and not able to socialize due to complexities of strategies, we need to check this field",
    "Sword to be put here.    ",
    "Bedroom makes a person street smart",
    "Toilet here gives negative effect in children, will not be able to express, very simplistic, shy.",
    "Black colour or circular shape gives negative effects. Black is Saturn, sun and Saturn are enemy, so black colour is not good in field of sun.",
    "Wine storage or book store will gives benefits in terms of social mingling.    ",
    "Plants are very good here    ",
    "It teaches Sam Daam Danda Bheda",
    "Entrance here equipped the residents with everything that helps them enjoy success in the materialistic world/money, profits and success/brings wealth",
    "Living room and dining are good here.",
    "Manomaya---mind",
    "Alpha -----creative solution    ",
    "Manipur----action, determination    "
    ]

}, {
    title: "Asur",
    img: "dev-img/Asura W6.jpg",
    name: "ASURA",
    direction: "WNW    ",
    color: "RED",
    sloka: "Devta Sloka",
    sloka_dis: "ॐ येरुपाणिप्रतिमुंचमानाऽ असुराः संत: स्वधयाचरंति। परापुरोनिपुरोयेभरन्त्यग्निष्ठाँल्लोकात्प्रणुदात्य स्मात्।। ॐ भूर्भुवः स्वर्भो असुर इहा ॐ असुरायनमः।।    ",
    devta: "Devta Description    ",
    devta_dis: "Asura refers to the malefic demons or the enemies of God indulging in violent and evil practices and activities. They are said to have been created by Prajapati Kashyap with the lower breath. Vedic history cites innumerous instances where gods and good mortals have been tormented by the demons and in some cases, god has incarnated himself in some or the other form to destroy these demonic creatures.",
    other: "Other Details",
    list1:[
        "Mayavi Asur, ehich is out of rhythm, Out of harmony",
        "Gives knowledge and light if balanced",
        "It imparts that attraction, that lure in the residents of space that he is able to feel attracted or attract opportunities for success for a longer time.",
        "Asur provides that attraction to the personalities of Varun so that Varun as a resident is more attracted to the others and hence he becomes more saleable or presentable.",
        "That emotion, that feel that makes the person centre of attraction. People like them, like to attach with such person.",
        "Imbalance creates illusion.    ",
        "Leads to Anti-social work    ",
        "Uses wrong methods to get things done",
        "If balanced, it makes people charming, helps them attract masses.",
        "If a person sleeps here, he achieves an attractive personality, if it's balanced becomes very alluring. But can also be in depression. They are generally mentally strong",
        "Toilet here – males are not found to be charming or alluring.",
        "So toilet can be in Shosh in spite of Asur.",
        "All the negative powers, the opponents of God, people with fighting spirit are basically Asur. But, he is an attendant of Varun.",
        "Asur gives depth to spirituality. When a person out of realization of futility, explores the depth of spirituality, at that time the power which makes him realize the futility is of Asur; it is not divine.",
        "Asur helps in releasing mind from temptations and false hopes and in moving on a divine spiritual path.    ",
        "Dev always lure you; give you ego, savour but Asur make it savour less.",
    ]

}, {
    title: "Mitra",
    img: "dev-img/MITRA W1 W8.jpg",
    name: "MITRA ",
    direction: "WEST",
    color: "RED",
    sloka: "Devta Sloka",
    sloka_dis: "ॐन्मित्रस्य वरुणस्याभिचक्षेसूर्योरुपं कृणुतेद्योरुपस्थे। अनन्तमन्यद्रुशदस्यपाजः कृष्णमन्यद्धरित: संभरन्ति। ॐभू भो मित्र इहा। मित्रायनमः।।",
    devta: "Devta Description ",
    devta_dis: "Mitra is one of the twelve Adityas and he is the son of Kashyap and Godmother Aditi. He rules over friendship. He is closely intertwined with Varuna like milk and water. He is saluted in the vedic mantras with Varuna. Varuna always stays with Mitra and they also find reference in the Vedas. Mitra's qualities have also been compared to Savita. It is interesting to note that Vishnu followed Mitra's rules to measure the three worlds in three steps. Mitra is a day lord and Varuna a night one. Except for this they are the same. So this makes Mitra a Sun god. The Sun at twilight is Mitra. He is a beneficial force.    ",
    other: "Other Details",
    list1:[
    "The change on two levels--internal and external",
    "Vitatha shows what we show to the world and Yama shows who we are",
    "It's the one that brings this world in action.",
    "This is an inspirational energy and affectionate devta who has the capability to bind--who keeps the world tied together.    ",
    "He is the power of holding the world together so that the process of evolution or manifestation could move ahead.",
    "The seed is sown, the child is born, he is connected to the world, now he needs friends, with whom this life goes on and on.    ",
    ]

}, {
    title: "Brahma",
    img: "dev-img/BRAHAMA CENTRE.jpg",
    name: "Brahma",
    direction: "",
    color: "",
    sloka: "Devta Sloka    ",
    sloka_dis: "ॐआब्रह्मन्ब्राह्मणो ब्रह्मवर्चसीजायतामाष्टेराजन्यः शूरऽइषव्या तिव्याधीमहारथोजायतां दोग्धी धेनुर्वो सप्ति:पुरंधिर्योषाजिष्णुरथेष्ठाः सभेयोयुवास्ययजमानस्यवीरोण जायतान्निकामेनिकामेनः पर्जन्योवर्षतुफल वत्योनऽ ओषधयः पच्यंतांयोगक्षेमोनः कल्पताम् ॐ भूर्भुवः स्वर्भोब्रह्मन्निहागच्छइहतिष्ठ। ब्रह्माणमावाह यामिस्थापयामि ॐब्रह्मणे नमः।।",
    devta: "Devta Description    ",
    devta_dis: "Brahma is the most significant lord in the Vaastu chakra. He rules over the biggest area in terms of padas. He owns the nine centermost padas in the Ekasheeti vaastu mandala. Brahma, the benefic universal father is the first of the omnipotent trinity of Hindu gods and appears as the great cosmic creator. In the epic Puranic times, the Vedic triad of Indra-Agni-Surya lost their preeminence to the all encompassing resonance of the magnificent trinity of Brahma-Vishnu-Shiva. Brahma is the eternal creator who creates not just the earth and all its creatures but also the heavens, the gods and the demons.",
    other: "",

}, {
    title: "Aryama",
    img: "dev-img/MITRA W1 W8.jpg",
    name: "ARYAMA",
    direction: "EAST",
    color: "YELLOW",
    sloka: "Devta Sloka",
    sloka_dis: "ॐअर्यम्णं बृहस्पतिमिद्रं दानाय चोदय वाचविष्णु सरस्वती सवितारंचवाजिनठ स्वाहा ॐ भू भो अर्यमन्निहा ॐअर्यम्णेनमः।।",
    devta: "Devta Description",
    devta_dis: "Aryama is the son of Godmother Aditi. He is also the ruler of the Uttaraphalguni nakshatra. Aryama is the leader of the pitars or forefathers and is himself a pitar. If he is appeased during the period of the Shraddha paksha, it is believed that all the pitars have been appeased. He protects the growth of a family. If he is pleased then the family tree grows. As he is the father of friends, his happiness ensures progress in spiritual alliances. In a yajna, he accepts the offering of swaha along with Mitra and Varuna and in a shraddha ceremony he accepts the svadha offering.",
    other: "Other Details",
    list1:[
    "After manifestation, it helps to grow",
    "Metaphorically, when the child is born, he needs to connect with the rest of the material in the world. by all means(Sam,daam,danda, bhed)",
    "Aryama grants connectivity with the world and has been invoked as a devta to get a bride for the groom ",
    "The power that connects with the world, gets you a companion, in order to carry ahead the process of evolution, is the power of Aryama. ",
    ]
    
}, {
    title: "Mahendra",
    img: "dev-img/Mahendera E4.jpg",
    name: " MAHENDRA(E4)",
    direction: "EAST",
    color: "GREEN",
    sloka: "Devta Sloka",
    sloka_dis: "ॐमहारैऽएइंद्रोवज्रहस्त: षोडशीशर्मसच्छतु हन्तुपाप्मानयोस्मान्दृष्टि। उप यामगृहीतोसिमहेंद्रायत्वैषतेयोनिर्महेंद्रायत्वा। ॐ भूर्भुवः स्वः भोः कुलिशायुध इहागच्छइहतिष्ठ ॐकुलिशायुधाय न",
    devta: "Devta Description",
    devta_dis: "He is the biggest of the 12 Adityas and is the eldest son of Godmother Aditi. He was also called Kulishayudh, meaning he whose weapon is the thunderbolt. According to the Rig Vedas, Mahendra is imbibed with three qualities of doing great work, incomparable valor and vanquisher of demons. Indra is considered to be lower in hierarchy than the Sun.    ",
    other: "Other Details",
    list1:[
    "Great association, powerful contacts, luxury, grants money.",
    "Entrance here gives monetary benefits from influential people, people enjoy life of luxury and comfort.",
    "If one needs powerful contacts, one needs to treat this zone.",
    "Balance Varun and Yama along with Indra as they are his brothers    ",
    "Ruby on floor is very beneficial here.",
    "Table chair in office here gives top position in company. ",
    "If zone is balanced, put Ashoka Pillar. Gives Government related benefits.",
    "No recognition of efforts if there is a toilet. Family will be looked down upon.",
    "Powerful connections with bedroom here.",
    "Living room here gives beneficial connections. ",
    "Sleeping here changes ones temperament, Likes to associate with best in society.",
    "NO BLACK colour in this region. (Black represents Shani who is Sun’s enemy) ",
    "Presence of orange colour in this field gives positive result.",
    "If cut, people can make lot of money due to other balanced zones, but they have to deal with very ordinary people.",
    ]

}, {
    title: "Varuna",
    img: "dev-img/Varuna W5.jpg",
    name: "VARUN(E5)",
    direction: "WEST",
    color: "RED ",
    sloka: "Devta Sloka ",
    sloka_dis: "इमम्मेवरुणश्रुधीहवमद्याचमृडय। त्वामवस्युराचके।। ॐ भूर्भुवः स्वर्भोवरुणइहा वरुणायनमः।। ",
    devta: "Devta Description ",
    devta_dis: "Varuna is the celestial Vedic god of the sky and keeper of the divine order of things. With the rise of Indra as supreme deity, he became the lord of the rivers and oceans. In the Vedas he is said to be the creator and sustainer of the universe and administrator of the cosmic law. Day and night appear at his bidding and the rivers are channeled according to his plans. Varuna avenges sin and falsehood and his eye is the Sun who keeps a watch on everything. He is the upholder of moral and ethical laws. He is the chief of the lower celestial deities called Adityas. He is regent of the west. He carries a rope to bind sinners with, symbolic of a man being fettered by his sins. Varuna is said to be gracious even to him who has committed sin. In the Mahabharata, he is lord of the waves and of rivers, god of fluidity and movement. Being a god of the rivers, he is propitiated in times of drought and for protection from the dangers of the waters.",
    other: "Other Details",
    list1:[
    "God of water and Oceans",
    "As Sun is important in East, Varun is important in West.",
    "Varun possesses extraordinary powers. He has wisdom which has been termed as 'Maaya'. He controls enemies through his paash.",
    "Varun controls your tendencies (Cvrittiya) through his paash and bound with that paash, that drive, a person keeps on running.",
    "Varun is the granter of immortality.",
    "All the rules in the world are created by Varun only. All the principles which are followed by devtas, humans and energy fields(to execute their dharma) are created and maintained by Varun.",
    "Varun is very merciful on people who confess and repent. He grants growth and prosperity also.",
    "Varun's paash are not always used negatively. they also work as a supporting power to bind together a bride and bridegroom.",
    "In Vastu Purush Mandala, Number 5 devtas like varun, Surya, Yama, Soma are like top bosses(master minds), helps us manifest things in their domains. Devtas number3,4 in every direction works like assistants.",
    "Varun is associated with Nakshatra Shatbhisha. this nakshatra is symbol of black, Black is saturn and circle is metal so black Circle is a good remedy here.",
    "Ability to see, Vision. It is said Varun has thousand eyes, Indra has hundred and we have two. Here Indra is combination of Surya and Mahendra.",
    "Give the energy to give the best performance in all tasks.",
    "Sleeping here makes a person perfectionist and over ambitious. But able to see better , observe better the faults of others.",
    "Good financial position If entrance here but perfectionist and over ambitious attitude.",
    "Dining table here gives good digestion.",
    "Water and blue colour gives prosperity and good fortune."
    ]

}, {
    title: "Surya",
    img: "dev-img/Surya E5.jpg",
    name: " SURYA(E5)",
    direction: "EAST",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐरश्मिर्हरिकेशः पुरतात् सविताज्योतिरुदयाँ अजस्रम्। तस्य पूषाप्रसवे यातिविद्वान् सम्पश्यन् विश्वाभुवनानिगोपाः। | ॐ भूर्भुवः स्वः सूर्यइहागच्छइहतिष्ठ ॐसूर्याय नमः।।",
    devta: "Devta Description",
    devta_dis: "Surya is considered as one of the most important of the 12 Adityas. As the giver of food, sight, health, knowledge and intelligence, he is the greatest of the Adityas. He is a source of powerful energy, providing the life force and rescuing the world from the fear of darkness and disease. He is the maker of the day. He is the celestial Vedic god who is the source of life and healing. He is the all seeing god and is described as the eyes of Varuna and Mitrfqea during the day. He is seen as the precursor of the trinity - the concept of God as creator, preserver and destroyer. He represents the cycle of birth, life and death, fertilizing the earth with its warmth and giving new life. His energy provides life and his heat burns everything in the end.",
    other: "Other Details",
    list1:[
    "Atma or Soul ",
    "Guardian Power and Controller of System",
    "Farsightedness and increases Observation Power",
    "Controls comes with great observation. ",
    "Chief of 9 planets",
    "Depicted by 7 horses chariot",
    "It balances energy and strength of the residents, fame and recognition in the society.",
    "Door here gives short temperament and aggressive behaviour",
    "If imbalanced and boss is sitting here, he feels work environment is not in his control",
    "Poster or Murti of lord Vishnu here is very beneficial here",
    "Presence of Copper Sun is advisable when overall fire element is weak. Even if East is also weak, copper sun can be used. ",
    "Brass sun is very beneficial If energy is weak, men of the house are very mellow, not that responsible and of strong personality.",
    "Kitchen brings aggression and temper  Orange colour positive result. Things will not be very systematic and organised if this field is weak.",
    "Weak energy can lead to lack of sex drive in men. If the owner of the house complains that “nobody listens to me”, then check this filed. Temple is good here",
    "If cut, men are mellow, things are chaotic; men are not leaders of house.",
    "This is the medium door in East direction. It gives aggression. For complete growth, we need a proper amount of sun energy. This door is not good for industries. Owner insults important employees due to excessive aggression, which results in miscommunication and deficits. It is not everyone's cup of tea to withstand the supreme energy of sun, only people with higher authorities and very big social circle can contain it."
    ]

}, {
    title: "Pushpdanta",
    img: "dev-img/Pushpdanta W4.jpg",
    name: "PUSHPDANT(W4)",
    direction: "WEST",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐनक्षत्रेभ्यः स्वाहा नक्षत्रियेभ्यः स्वाहाहोरात्रेभ्यः स्वाहार्धमासेभ्यः स्वाहा मासेभ्यः स्वाहा ऋतुभ्यः स्वाहातवेभ्यः स्वाहा संवत्सरायस्वाहा द्यावा पृथिवीभ्यां स्वाहा चंद्रायस्वाहा सूर्यायस्वाहा रश्मिभ्यः स्वाहा वसुभ्यः स्वाहा रुद्रेभ्यः स्वाहादित्येभ्यः स्वाहा मरुदभ्यः स्वाहा विश्वेभ्योदेवेभ्यः स्वाहा मूलेभ्यः स्वाहा शाखाभ्यः स्वाहा वनस्पतिभ्यः स्वाहा पुष्पेभ्यः स्वाहा फलेभ्यः स्वाहौषधीभ्यः स्वाहा ॐभू पुष्पदंतइहा ॐपुष्पदंताय नमः।।",
    devta: "Devta Description",
    devta_dis: "Pushpadanta was one of the ganas of the Gandharva community. He knew the science of becoming invisible. He once used this skill to overhear a story being related by Shankar to Parvati. On being discovered, he begged for forgiveness",
    other: "Other Details",
    list1:[
    "Power of blessing.",
    "In Hindu mythology, Shiv Mahima Strota is written by Gandharva Pushpdant.",
    "the work of gandharva is to keep association between the humans and Gods.",
    "Gives the power to overcome day to day problems.",
    "Imbalance cause inability to conduct day to day matters",
    "Gaja Lakshmi is a very good remedy here. It provides her vibrations to enjoy life of luxury and prosperity.",
    "Entrance here give all kind of assistance, general happiness in life.",
    "Bedroom gives great opportunities and makes one successful, gives feeling that entire universe is helping.",
    "Living room with Black colour sofa and black tv makes all deals and discussions fruitful. Black means Shani.",
    "Toilet here, you will not receive help from friends in the time of need.",
    "White flowers in water are a great remedy here. Green plants are not permissible.",
    "Blue colour/presence of water give good results",
    "Safe (Tijori) – best place. Money comes with smooth flow.",
    "This is a friendly energy field which helps us to succeed in all respective domains. ",
    "If balanced, help from all sides. It grants the power to fulfill all the desires in life; success and growth.",
    "Vastu shastramentions about Ashta Luxmi: 1. Adi Luxmi -- Gives us heritage(Sampatti) -- South 2. Dhan Luxmi -- Gives us money/gold -- Southeast 3. Dhanya Luxmi -- Gives us grains -- Southwest 4. Gaja Luxmi -- Power of Royalty(like Indra) -- West 5. Santan Luxmi -- Offsprings -- Northeast 6. Virya/Dhairya Luxmi -- courage/Strength -- 7. Vijay Luxmi -- Victory -- Northwest 8. Vidhya Luxmi -- Knowledge --"
    ]

}, {
    title: "satya",
    img: "dev-img/Satya E 6.jpg",
    name: "SATYA(E6)",
    direction: "ESE",
    color: "RED",
    sloka: "Devta Sloka",
    sloka_dis: "ॐव्रतेनदीक्षामाप्नोति दक्षिणाम्। दक्षिणाश्रद्धामाप्नोतिश्रद्धयास त्यमाप्यते।। ॐ भूर्भुवः स्वः भोसत्यइहा ॐसत्यायनमः।।",
    devta: "Devta Description",
    devta_dis: "Satya is one of the Ashta vasus called Pratyush and is the son of Dharma and Vasu, the daughter of Prajapati Daksha. He is the reincarnation of religion and confers steadfastness and commitment in action. Pratyush means dawn and is closely related to the Sun. He is endowed with the qualities of awakening and is considered to be beneficial.",
    other: "Other Details",
    list1:[
    "Goodwill and credibility creator",
    "Attributes very close to Sury",
    "It imparts the power of thinking",
    "Encourages fulfilling commitment.",
    "Biggest commitment is Marriage. So this zone needs to be balanced and thus relations will be balanced",
    "Imbalance here will make the person to move from one partner to another.",
    "Mirror, reddish color is very dangerous here.",
    "Entrance here, not only we fail in keeping our commitments but others also fail to fulfil their commitment towards us.",
    "Green plants are ok but blue colour is bad. People will not fulfil their promise. ",
    ]
    
}, {
    title: "Sugriva",
    img: "dev-img/Sugriva W3.jpg",
    name: "SUGREEV(W3)",
    direction: "WSW",
    color: "RED ",
    sloka: "Devta Sloka",
    sloka_dis: "ॐसुषुम्णा: सूर्यरश्मिश्चन्द्रमांगधर्वस्तस्यनक्षत्राण्यप्सरसोभेकुरयो नाम। सनऽइदंब्रह्मक्षत्रंपातु तस्मैस्वाहा वाट्ताभ्यः स्वाहा।",
    devta: "Devta Description",
    devta_dis: "Though Sugriva literally means a slender neck, it refers to the God Hayagreeva or Hayasheersha (one having the face of a horse). The legend says that Hayasheersha knew the Madhu Vidya. Not considering him to be a worthwhile disciple, he refused to impart this skill to Lord Indra. He was threatened by Indra that if he taught this vidya to anyone, he would be beheaded. The Ashwini Kumars wanted to learn this Vidya. So they cut off his head and kept it safe. They then attached a horse's head, which was subsequently cut by Indra. Then the Ashwini Kumaras replaced the original head.",
    other: "Other Details",
    list1:[
    "Good grasping power",
    "Who is capable of receiving beautifully and easily.",
    "Receptive, receiving Power, Knowledge & Grasping Power, Retention& Saving",
    "It makes us to receive as well as comprehend any subject.",
    "One who can solve problems by merely listening to the problems",
    "Power to memorise things",
    "Best place to make Gym or Akhara, In Mahabharata times, Bheem, Duryodhna learned wrestling here.",
    "Associated with communication and retention",
    "Washing Machine here responsible for forgetfulness and inability to remember things at the time of exams.",
    "Kitchen here gives inability to present the knowledge they have gained.",
    "Living /bedroom is associated with very good understanding and love for different subjects if balanced.",
    "If extended, people keep on running to gather knowledge from different sources.",
    "Red colour causes irritation towards newer ideas/subjects/domain of life",
    "Village scene in black frames here gives buying a property becomes easy.",
    "Entrance here gives money, growth and prosperity, also deeper understanding.",
    "It ensures the process of receiving learning in the childhood and receiving money also when child grows up."
    ]

}, {
    title: "JAYA",
    img: "dev-img/Jaya W1W2.jpg",
    name: "JAYA",
    direction: "SW2",
    color: "RED",
    sloka: "Devta Sloka",
    sloka_dis: "ॐमम्माणितेवर्मणाछादयामिसोमस्त्वा राजामृतेनानुवस्ताम्। उरोर्वरीयोवरुणास्तेकृणोतुजयन्तन्त्वानुदेवाम दंतु।। ॐ भूर्भोजयइहा जयायनमः।।",
    devta: "Devta Description",
    devta_dis: "Jaya is the lord of the pada next to Indra and positioned on the diagonal line connecting the Brahma kendra padas with the south west corner. It is a very important pada and is highly influenced by Indra. There are different schools of thought, who juxtapose the padas of Jaya and Indra. Whatever be their position, this does not undermine the significance of Jaya in the Vaastu chakra.",
    other: "Other Details",
    list1:[
    "Indra is thought process and Jaya is that channel in which the thought process can be manifested",
    "Weapon of Indra, Vajra, all the weapons which ensures victory in life.",
    "This power gets developed in the form of the power to impart skill and expertise.",
    "This direction is recommended to make a place for keeping all those tools, books and objects which are related to the performance of your skills.",
    "In any domain, field or business, your skill is your Vajra(Jaya).",
    "If this energy field loses its power, then you feel unable to exercise your skill at the right time and at the right place.",
    "It gives victory in life, tools and skills",
    "When balance, you can use full potential of your capabilities."
    ]
    
}, {
    title: "Vivasvan",
    img: "dev-img/VIVASVAN S1 S8.jpg",
    name: "VIVASVAN",
    direction: "SOUTH",
    color: "RED",
    sloka: "Devta Sloka",
    sloka_dis: "ॐविवस्वन्नादित्यैषतेसोमपीथस्तस्मिन्मत्स्व श्रदस्मै नरोव्वचसेदधात नयदाशीर्दादंपतिमिमश्नुतः। पुमान्पुत्रोजायतेव्विंदतेव्वस्वधाव्विश्वाहारपऽएधतेगृहे। ॐभू भोविवस्वन्निहा ॐविवस्वतेनमः।।",
    devta: "Devta Description",
    devta_dis: "Vivasvan is a form of the midday Sun god. He is one of the 12 Adityas and the father of Yama, the god of death. He was married to Sangya (also known as Saranyu), daughter of Tvashta and his children are Yama, Yami and Manu. He occupies a prominent position as in the South. If a main room is constructed here, it brings gain of position and wealth",
    other: "Other Details",
    list1:[
    "The change on two levels--internal and external",
    "Vitatha shows what we show to the world and Yama shows who we are",
    "It controls the change from which existence starts initiate.",
    "It shines that change and moves the manifestation process."
    ]

}, {
    title: "Savita",
    img: "dev-img/Savita E7E8.jpg",
    name: "SAVITA ",
    direction: "SE1",
    color: " BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "सूर्य रश्मिर्हरिकेशः पुरस्तात्सविता ज्योतिरुदयाँ 2अजस्रम्।।",
    devta: "Devta Description",
    devta_dis: "Savita refers to the rays of the Sun that divide the day into morning and noon. Lord Savitra thus emerges from the East in the form of the Sun's rays called Savita. He is the radiant one. He is one of the most important of the celestial Vedic gods who is the source of life and healing. Savita means to motivate and as he rides across the sky, he infuses energy in all living beings, removes all evil dreams and vanquishes the demons. The Aditya placed in the dyuloka or heaven is also called Savita.",
    other: "Other Details",
    list1:[
    "It bestows us the power of meditation, remover of obstacles.",
    "It kindles fire, helps to initiate things",
    "Activate powers in something through cleansing or through friction.",
    "It develops association with influential and powerful people and friends, and also provides support and money",
    "This zone is capable of giving solutions for any type of problems",
    "When balanced, will give support , determination, money, strength and will power",
    "Ganesh ji presence in this zone is very good here, It carries our activities to next level.",
    ]

}, 
{
    title: "Bhrisha",
    img: "dev-img/Bhrisha E7.jpg",
    name: "BRISHA(E7)",
    direction: "ESE",
    color: "GREEN",
    sloka: "Devta Sloka",
    sloka_dis: "ॐ भद्रं कर्णेभिः श्रृणुयामदेवाभद्रपश्येमाक्षभिर्यजत्राः।। स्थिरैरङ्गैस्तुष्टुवां सस्मनूभिर्व्यशेमहिदेवहितंयदायुः। ॐ भूर्भुवः स्वः भो भृश इहागच्छ ॐभृशायनमः।।",
    devta: "Devta Description",
    devta_dis: "The name Bhrisha means excess or extension. This pada is ruled by a goddess named Usha and her qualities are synonymous with the meaning of Bhrisha. The 20 sutras of Rig Veda praise the Goddess Usha. She is the personification of beauty. The sky lights us when she awakens and the universe is filled with happiness. She is the lady love of Surya and emerges from the east in her attractive attire. The Vedas call Usha the mother of the Sun, because she emerges with the Sun in her lap. Usha is worshipped for attractive appearance, discipline, progress and prosperity.",
    other: "Other Details",
    list1:[
    "Brings out something by rubbing two things",
    "Analysis, Poor Implementation of Plan, Delay/hastiness in Decisions, gravity",
    "Action will not be executed if this field is weak",
    "Will think excessively if this is weak so end result will be disturbed.",
    "Can be balanced by keeping Mixer-Grinder",
    "Analytical capability is disturbed if this is weak",
    "A cut here will not lead to any decision",
    "This zone can be balanced with White colour",
    "This is Kama Devta, energy of Desires",
    "Blue colour worst here",
    "Presence of sewerage gives unfavourable here.",
    "Metallic show pieces not desiSewing machine here leads to BP fluctuation and anxiety.Elderly couple sleeping here – wife will be continuously ill.If the thinking is not good, examine this fieldrable",
    "If boss is sitting here, he is very strict and thus leads to problems in the future.Dustbin not desirable here.Kamdhenu to be placed here",
    "Entrance here gives insensitive behaviour,Muladhar--foundation, insecurity, basic stability,Annamaya Kosha--body",
    "Beta wave--day to day functioning.Washing machine is good here",
    "Kitchen her imbalance it and can sent a person in coma.",
    "Toilet is okay here."
    ]

},

{
    title: "Dauvarika",
    img: "dev-img/Dauvarika W2.jpg",
    name: "DAUWARIK(W2)",
    direction: "WSW",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐद्रविणोदा: पिपीषतिजुहोत प्रचतिष्ठत।नेष्ट्राद्दतुभिरिष्यतः।। ॐभू दौवारिकइहा दौवारिकायनमः।।",
    devta: "Devta Description",
    devta_dis: "Dauvarika represents a guard or watchman. In Samrangan Sutradhar, he is Nandi or the lord of the Pramath ganas. Nandi is one of the ganas of Lord Shankara. Nandi means one who sings praises to please someone. In the Vaastu chakra he is placed on the left buttock of the Vaastu purush.",
    other: "Other Details",
    list1:[
"Decides what to enter in the life and what to leave out.",
"It let you indulge in unwanted thoughts or subjects and thus, Acts as filter or door keeper doesn’t in life.",
"Bonding, Door Keeper, Retention of Knowledge, Learning & Memory of children",
"Responsible for step wise knowledge.(Swadhisthan chakra--responsible choices)",
"Swadhisthan is about give and take, Muladhar is about hold.",
"Power of discretion/ discrimination",
"When a person complains of “total wastage of efforts”, look at Daurika also along with Bhringraj",
"Nandi remedy is best here for safegaurds of our savings.",
"Entrance here gives Insecure relationships and unstable career.",
"A piggy bank here is associated with increase in savings.",
"Bed here makes one mindful and cautious. Better capability of recieving.",
"Individual received money through inheritance or lottery, can't remain with him, If this energy field is weak",
"Weak zone causes a person not to be able to use money or save money judiciously.",
"Toilet here makes a person waste money on useless products and services.",
"Study table here gives the student a right gauge of what to study and how much importance to give to a subject.",
"When balanced it ensures excellent studies for children. If it's weak, children will not be able to retain the learned knowledge, and at the time of examination, they will forget what they had learned by heart.",
"Village scene in black frames gives the power to decide where to invest and where not to invest."
]

}, {
    title: "Indra",
    img: "dev-img/Indra S7S8.jpg",
    name: "INDRA",
    direction: "SW1",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐरश्मिर्हरिकेशः पुरस्तात् सविताज्योतिरुदयाँ अजस्रम्।। तस्यपूषाप्रसवे यातिविद्वान् सम्पश्यन्",
    devta: "Devta Description",
    devta_dis: "Indra, the most important god in the Rig Veda is identified as the storm God or the Rain god. His thunderbolt Vajra and his bow Indradhanush protect mankind from the vagaries of nature, symbolized by the demons. Thus he is both revered as the God of rains and feared as the God of the storms. He represents the electrical energy brought to earth by the rain, rejuvenating it and making it fertile. He is sometimes seen as a fertility god.",
    other: "Other Details",
    list1:[
        "Family stability, basic growth, thought process",
        "It safeguards money, associated with conception, grounding.",
        "A labour room is recommended here.",
        "Pregnancy stabilizes with his powers only.",
        "He gives strength, longevity and protection to life.",
        "This place needs to be balance for safe delivery and to keep safe also.",
        "Balance of Muladhar chakra comes from here",
        "Imbalances gives challenges, instability and all the attributes of Muladhar Chakra get problematic.",
        "Annamaya Kosha/Beta waves---day to day activities"
    ]
},
{
    title: "Bhringraj",
    img: "dev-img/Bhringaraja S7.jpg",
    name: "BHRINGRAJ(S7)",
    direction: "SSW",
    color: "YELLOW",
    sloka: "Devta Sloka",
    sloka_dis: "ॐ सुपर्णः पार्जन्य आर्तिर्वाहसोदर्विदाते वायवेबृहस्पतने वाचस्पये पैङ्गराजोऽलजः आन्तरिक्षप्लवोमद्गमत्स्यस्ते नदीपतयेद्यावापृथिवीयः कूर्मः। ॐ भूर्भुवः स्वः भोः शृंगराजइहा. शृंगराजायनमः।।",
    devta: "Devta Description",
    devta_dis: "Bhringaraia is known as the Goddess of the black bees. She occupies the pada adjacent to the Gandharvas and symbolises the apsaras. Gandharvas and apsaras are nearly always placed together. A black bee represents love and apsaras also symbolize love. In the Vaastu chakra Bhringaraja is located on the right thigh of the Vaastu purush and this place promotes the gandharva vidyas.",
    other: "Other Details",
    list1:[
        "Imparts the discretion power of what they should keep or remove in life",
"Can keep cosmetic here",
"Helps in controlling abortion and miscarriage.",
"Gives the wisdom to assess things properly.",
"Toilet is excellent here, it facilitates balanced and smooth process of disposal at all the three levels of body--physical, energy, and mind.",
"All efforts are waste if bed here",
"If extended, gives more females child",
"It is advised to spend 20 minutes to let go of useless thoughts and things.",
"Entrance – total wastage of efforts.",
"If someone asks :kya kare ya na kare “, then check",
"Causes rigid mind if more time is spent here.",
"Sleeping here, all your efforts waste. Body part coming in the zone starts facing problem.",
"A pregnent lady sleeps here undergoes lots of problems.",
"Put alcohol bottle in this zone if want to leave alcohol.",
"if food storage here, spoiled very fast.",
"Dining table here gives digestion problem.",
"This field is the element of being genius., the power to grant wisdom and to manifest what is left after removing the unnecessary element.",
"When imbalanced, it leads to increase expenditure, efforts not becoming successful and the person wasting time and energy in useless pursuits."
    ]

}, {
    title: "Vithatha",
    img: "dev-img/Vithath S3.jpg",
    name: "VITHATHA(S3)",
    direction: "SSE",
    color: "RED",
    sloka: "Devta Sloka",
    sloka_dis: "ॐसविताप्रथमतेऽहन्नग्निर्दितीयेवायुस्तृतीय आदित्यश्चतुर्थे चन्द्रमाः पंचम ऋतुः षष्ठेमरुतः सप्तमेबृहस्पतिरष्टमे। मित्रोनवमेवरुणोदशमे इन्द्रएकादशे विश्वेदेवाद्वादशे ॐ भूर्भुवः स्वः भो वितथइहा । ॐवितथाय नमः।।",
    devta: "Devta Description",
    devta_dis: "Vitath implies untruth and this is a God who acquires a mask of falsehood and controls the part below the right armpit of the Vaastu purush.",
    other: "Other Details",
    list1:[
        "Pretender . Untrue. Flase. Associated with Falsehood.",
"When this field is extended, all family member think highly of themselves, boastful.",
"If zone is balanced , self confidence is very good.",
"Pretender, Act, Good Packaging & Presentation of things",
"Imbalcne will cause only show-off",
"Door here can cause use of unethical means.",
"People make Flase commitments",
"Sleeping here people become very boastful..",
"Toliet here cause people to feel that their capabilities are limited. Self –doubt",
"Door gives prosperity and abundance, but the ways of earning can be ethical or unethical.",
"Self confidence if balanced.",
"Kitchen here, every person is feeling himself winner and it makes them winner also, makes them super confident.",
"Vitatha is external strength.",
"This field keeps family from breaking. Take care of us while we asleep. when Vitatha is happy, it keeps family intact, and if unhappy, it brings differences and breaks(Bantwara) the family or house."
    ]
}, {
    title: "Savitra",
    img: "dev-img/Savitra S1S2.jpg",
    name: "SAVITRA",
    direction: "SE2",
    color: "RED",
    sloka: "Devta Sloka",
    sloka_dis: "ॐ उपयामगृहीतोसिसावित्रोसिचनोद्याश्च नोधाऽअसिचनोमयिधेहि। जिन्वयज्ञजिन्वयज्ञपतिंभगायदेवायत्वासवित्रे ॐभू भोः सावित्र इहा सवित्राय नमः।।",
    devta: "Devta Description",
    devta_dis: "Savitra is one of the 12 Adityas and is one of the most powerful energy areas of modern times. He was given importance in the Mahabharata period and thereafter considered as one of the important Adityas. In the Rig Veda, he is said to have controlled water and air. No one including Indra, Varuna and Mitra could break his laws. He follows a fixed set of rules and controls the sky.",
    other: "Other Details",
    list1:[
        "Unlimited capabilities of resources.",
"It carries our activities to next level.",
"Savitra says, I am removing obstacles. Savitra says, move ahead.",
"Savitra is pranamaya kosha, mentally energize",
"Savitra is annamaya kosha, physically strength",
"It gives us the power of determination as well as power to enjoy luxuries.",
"This is the place where Gayatri mantra originates.",
"Shree Yantra is beneficial here",
"It brings you out of any problem with clear heart"
]

}, {
    title: "Nabh",
    img: "dev-img/Nabh Antriksh E8.jpg",
    name: "AKASH (E7)",
    direction: "SE",
    color: "YELLOW",
    sloka: "Devta Sloka",
    sloka_dis: "| ॐवयंसोमव्रतेतवमनस्तनूषुबिभ्रतः। प्रजावन्तः सचेमहि। ॐ भूर्भुवः स्वः भोआकाशइहागच्छ ॐआकाशायनमः।।",
    devta: "Devta Description",
    devta_dis:"Lord Nabh is instated as the sky. He is synonymous with space or universe and Usha is considered to be his daughter. According to Matsya Purana, he is one of the eight forms of Lord Shankara. The sky is the source of breeze or wind and he is actually the lord himself, without whom none can survive. The sky is all pervasive and made up of the units of Ghatakash, Mathakash and Mahakash.",
    other: "Other Details",
    list1:[
        "Space between earth and heaven",
"This is the oxygen needed to make anything happen.",
"Manifestation of even is possible only through Akash",
"If this are stuck (Atak gaya hai), like payment or marriage, then look at this zone.",
"Entrance causes financial losses, accidents, burglary",
"If you keep anything here, people will recognise it and appreciate it.",
"If this zone is weak, cause high chances of theft.",
"Sri Yantra if kept here gives great result.",
"Placement of red bulb is good, Gives aggression and body rashes if imbalanced.",
"Copper studs are good to balance this zone.",
"Field of Venus, thus affects females more than males if imbalanced",
"Cut in this field, elder son of the house is away from home and not a part of the family.",
"Recommend Diamond in this field but should be astrologically examined",
"If there is a store, it adversely effects the happy events in life."
    ]

}, {
    title: "Pitra Gana",
    img: "dev-img/PITRA W1.jpg",
    name: "PITRA(W1)",
    direction: "SW",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐपितृभ्यः स्वधायिभ्यः स्वधानमः।। पितामहेभ्यः स्वधायिभ्यः स्वधानमः।। प्रपितापमहेभ्यः स्वधायिभ्यः स्वधा नमः।। अक्षन्पितरोमीमदन्तपितरोतीतृपन्नपितरः पितरः शुन्धध्वम्। ॐ भूर्भुवः स्वर्भोः पितरइहागच्छतइहतिष्ठत ॐपितृभ्योनमः।।",
    devta: "Devta Description",
    devta_dis:"Pitri are the deceased ancestors to whom pindas are offered in worship. Pitri also signifies the ten Prajapatis or the mythical progenitors of the human race. The first pitris are said to be the sons of the gods. Yama was king of the Pitris. There are seven classes of the Pitris according to the Puranas. Three of them (Vairajas, Agnishwattas, Barishads) are incorporeal, without form, composed of intellectual not elementary substance, and assuming whatever forms they please. The corporeal Pitris are Sukalas, Angirasas, Suswadhas, and Somapas. The Rig Veda makes two independent classes of Pitris. The Agni dagdhas (who when alive, kept up the household flame and presented oblations with fire) and the Anagnidagdhas (who when alive, did not keep up the household flame and did not present oblations with fire).",
    other: "Other Details",
    list1:[
        "Responsible for childbirth and marriage",
"Responsible to carry forward our lineage/safety and security with life and all the comfort related to life.",
"Family bonding, love and understanding",
"Toilet here cause Pitra Dosh",
"Provides the strength to deal with adverse situations to ensure continuous progress.",
"Will keep struggling with the difficulties of life if imbalanced",
"Entrance here gives poor financial condition and short life span/loss of progeny, poverty and increases enemies",
"Muladhara chakra(basic foundation, basic security, stability) and Annamaya Kosha",
"People say “hum poori tarah se disturb ho jate hai. Humari prosperity disturb ho jati hai ",
"Toilet here causes instability in life, daily get new small or big problems on regular basis. Life is not smooth/ disturb our basic income",
"Sewage/toilet/gutter here gives constant fight between the elder son and father.",
"Everyday problems in life if imbalanced, basic foundation get disturb, hence prosperity and barkat or children get adversely affected.",
"Sleeping here makes a person highly critical of himself and perfectionist, Will impose his thoughts on his family. So constant tension between elders and father",
"Kitchen here cause digestion issues. More to the males",
"Sewerage will cause serious health issues.",
"Aloe Vera plant can cause piles problem",
"Needle and sewing material here gives rashes in lower back",
"Heavy things here gives backache",
"Don't keep copper here, can give minor fracture issue",
"Boring here causes mazor turbulance, upheavels, up and downs in life",
"Don’t keep tools here.",
"Family photo here with Yellow light is best.",
"Brass Ganpati gives great result."
    ]

}, {
    title: "Mrigha",
    img: "dev-img/Mriga S8.jpg",
    name: "MRIGHA(S8)",
    direction: "SW",
    color: "GREEN",
    sloka: "Devta Sloka",
    sloka_dis: "ॐतद्दिष्णोः परमंपदर्छ सदापश्यन्ति सूरयः। दिवीवचक्षुराततम्। ॐ भूर्भुवः स्व मृगइहा ॐमृगायनमः।।",
    devta: "Devta Description",
    devta_dis:"Although Mriga refers to a deer, a nakshatra, a month and even the Moon, in Vaastu shastra, Mriga refers to the hindu month of margashirsha. The 12 Adityas are placed in the Vaastu chakra and they represent the 12 months according to the Puranas, because they are actually symbolic of the different levels of heat generated by the Sun god. Anshu is the lord of Margashirsha month and he is assisted by Kashyapa Rishi, Urvashi, Gandharva Ritusen, Demon Vidyutachatru, Bhalla tarkshya and Naga Mahashankha.",
    other:"Other Details",
    list1:[
        "Generator of curiosity",
"Imparts the ability to grasp the essence of things.",
"Keeps searching for satisfying his curiosity.",
"It helps them decode the secrets of skills.",
"It gives them power, strong vibrations to take this quest to higher planes of knowledge and skills.",
"Skills and proficiencies and raise their standards to optimal levels.",
"Keep study table here, people enjoy study and master the subject.",
"Placement of Garud is good here. Gives broader vision",
"Eagle here gives foresight and detailing",
"Toilet here diminishes the curosities of learning and thinking",
"Fire here is worst thing to happen. Finishes the power to learn anything new.",
"Entrance here gives disconnection from family and rest of the world, also can create that person's skills take the back seat",
"Tools kept here, people explore and become master, if pen kept here, person try to become an auther.",
"If tv placed her, person see programs like Nat geo, BBC which improves knowledge.",
"Bed here, person is always curious and enthusiast to learn new things.",
"In ancient times, people used to work more with hands, they used to sell handmade goods to earn their livelihood. SO they required skill to improve their creations which they used to get by sleeping or working in this energy field. That's why this area of the building was used to make bedroom for common man in order to make optimum utilization of this power."
    ]

}, {
    title: "Gandharva",
    img: "dev-img/Gandharva S6.jpg",
    name: "GANDHARVA(S6)",
    direction: "SSW",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐप्रतद्दोचेदमृतंनुविद्दान्गन्धर्वो धमबिभृतंगुहासत्। त्रीणिपदानिनिहितागुहास्य यस्तानिवेदसपितुः पितासत्। ॐ भूर्भुवः स्वः भोगंधर्वइहा गंधर्वाय नमः।।",
    devta: "Devta Description",
    devta_dis:"Gandharva is a group of gods described in the Vaastu mandala and the Sarvotobhadra mandala. Ten gandharvas were born of the union of Prajapati Kashyap and Pradha, daughter of Daksha. Some other Gandharvas were born off Arishtha and Kashyap according to Matsya Purana.",
    other: "Other Details",
    list1:[
        "People good in music are called Gandharv",
"Balanced here gives relaxation , happiness, vacations",
"If area is cut, people will not get vacations for a long time",
"If extended and living room here, people are in party mood and don’t take anything seriously.",
"Ladies Sleeping here regularly, have complained of having dirty thoughts",
"If kitchen here , people want varieties in food.",
"Dining table will cause excess expenditure of food items.",
"TV, Musical systems, books are source of recreation here.",
"Alcohol can be kept here",
"If extended, people will be extra relaxed and if cut, people will be extra active.",
"Extend this area in Hotel business, discotheque or party hall.",
"Toilet here, people don't take break from work for years.",
"Gandharva has all the secrets of the sky and all the mystical powers from Satya. They also give the ecstatic states of mind.",
"They are considered the adheestha dev of music and all kinds of arts."
    ]

}, {
    title: "Yama",
    img: "dev-img/Yama S5.jpg",
    name: "YAMA(S5)",
    direction: "SOUTH",
    color: "YELLOW",
    sloka: "Devta Sloka",
    sloka_dis: "यमायत्वामखायत्वासूर्यस्यत्वातपसे देवस्त्वासविता मध्वानक्तपृथिव्याः सं स्पृशस्पाहि। अर्चिरसिशोचिरसितपोसि। ॐ भूर्भुवः स्वः भो यम इहा ॐ यमाय नमः।।",
    devta: "Devta Description",
    devta_dis:"Yama is the son of Surya and Sangya. Yama is the God of death and is the lord of infernal regions one visits after the cessation of life. He is the embodiment of the rule of law and imparts justice according to deeds. The word Yama means the restrainer. It is he who keeps mankind in check. In the Vedas, Yama is the first ancestor and has a full distinction of a God. Yama was earlier a mere mortal who gained immortality in order to become a god. He is the god of departed spirits and judge of the dead. He gathers all the souls of the dead and guides them to the netherworld, which he rules as God of the dead.",
    other: "Other Details",
    list1:[
        "Denotes self control and moral duty.",
"Imparts a sense of responsibility",
"Makes right choices and lead a discipline life.",
",Ruling planet is Mars",
"Lord of Justice",
"Individual faces weak determination and lack of self control. This leads to debts and blocked mind.",
"People sitting or sleeping here are self motivated and self controlled.",
"Imbalance here cause low morals amongst residents.",
"Toilet here lowers moral values",
"Water storage here gives a feeling of black magic.",
"Musical keyboard kept here makes one practice regularly.",
"Entrance here causes Death , blocked minds, have wrong choices, we get driven by irresponsible choices, wrong decisions.",
"Self control is missing if imbalanced, we don't listen to others, employees don't listen to boss, children don't listen to teachers. We are not able to do what is right.",
"Need to check this field if issues are related to self control, wrong choices, carried away."
    ]

}, {
    title: "Grihakshat",
    img: "dev-img/Grihashat  Grihaspatya S4.jpg",
    name: "GRIHAKSHAT(S4)",
    direction: "SOUTH",
    color: "GREEN",
    sloka: "Devta Sloka",
    sloka_dis: "सवितात्वासनां सुवतामग्निर्गृहपतीनां सोमोवनस्पतीनाम्। बृहस्पतिर्वाचऽइन्द्रोज्यैष्ठ्यायरुद्र: पशुभ्यो मित्रः सत्योवरुणोधर्मपतीनाम्। ॐ भूर्भुवः स्वः भोगृहक्षतइहा ।। ॐ गृहक्षतायनमः।।",
    devta: "Devta Description",
    devta_dis:"Grihashat is actually one of the Vishwadevas and is installed as a group of 10 gods or 33 gods if we go by the Rig Veda. These gods prevent a house from getting disintegrated and act for the welfare of man. They protect us and organize the cycle of happiness and sorrow in life. If these Gods are happy, they keep the house united and if they are unhappy they fragment the household. Their mother was Vishwa, wife of Dharma.",
    other:"Other Details",
    list1:[
        "Gruha mean Mann and Akshat means Dayra ( Mann ka dayara)",
"Helps in self control",
"This is very important to achieve success in all desires.",
"Mercury energy field here",
"Defines the boundary of mind.",
"When imbalance, people forget their responsibilities and become relaxed and casual attitude.",
"Door is great here, gives birth of male child, productive output, Resident enjoy the life.",
"Blue colour and water can cause court case or misunderstanding.",
"Cause conflicts and commitment failure. Gives bad company of friends also",
"Big water body here causes indiscipline students.",
"Lack of peace if imbalanced",
"Children will be better disciplined if they sleep here and good behaviour.",
"If imbalanced, people will not listen to others, causes misunderstanding through words, makes us unable to relax."
    ]

}, {
    
    title: "Pusha",
    img: "dev-img/Pusha S2.jpg",
    name: "PUSHA(S2)",
    direction: "SSE",
    color: "BLUE",
    sloka: "Devta Sloka",
    sloka_dis: "ॐ पूषन्तवव्रतेवयं नरिष्येमकदाचन। स्तोतारस्तऽइहस्मसि। ॐ भूर्भुवः स्वः भो पूषन्निहागच्छ इहतिष्ठ। ॐ पूष्णेनमः।।",
    devta: "Devta Description",
    devta_dis: "Pusha is one of the 12 Adityas, son of Rishi Kashyapa and Devi Aditi. He is the father of all animals and rides a goat. In the Vaastuchkara he occupies the pada towards the South, when we move from the South east. In the Yajna by Daksha, he lost his teeth and eyes to Veerbhadra. Thereafter he sees through the eyes of the Sun. He is firm in the milky way and helps enhance wealth in the form of animals. He gets the Yajna pada and is capable of granting boons. Powdered rice is offered to him.",
    other: "Other Details",
    list1:[
        "This field is nourishing like mother nourishes a child",
"Best place to keep Ghee",
"Elderly, Strength, Blocked Payment, Power to recover from Losses",
"Safeguard of everything including money",
"If payment blocked. Check this zone.",
"This becomes the fuel to continue the fire.",
"Keep a Red Mat here to get back blocked money.",
"If the child growth is not satisfactory in the mother’s womb, keep a red mat and Ghee for best results.",
"Imbalance causes problem in family bonding.",
"Family photos kept here increases the bonding here strongly amongst the family members",
"Blue colour here shows weakened body.",
"Children will not be self sufficient if imbalance here.",
"A person will work under someone if this zone is imbalanced.",
"Toilet here will cause bad growth of child.",
"Keep a Fevicol tube to improve family bonding.",
"Keep a Hanuman Ji photo showing strength there.",
"Pusha is invoked along with Indra to block the enemy.",
"Pusha provides never say die attitude. A person is able to successfully overcome any obstacle with strength.",
"Entrance here take person to work in MNC, gives growth in job. Leads to slavery of others and bondage.",
"Pusha considers family bonding, growth, self sufficiency, recovery of money, or ability to remerge, don't lose hope.",
"Pusha also invoked to impart power to select the bridegroom."
    ]

},{
    title: "Anil",
    img: "dev-img/Anil S1.jpg",
    name: "ANIL(S1)",
    direction: "SE",
    color: "YELLOW",
    sloka: "Devta Sloka",
    sloka_dis: "ॐआवायो भूषशुचिपाऽउपनः सहस्रं ते नियुतोविश्ववार। उहोते अंधो मद्यमयामि सस्यदेवदधिषेपूर्वपेयम् वायवेत्वा।। ॐ भूर्भुवः स्वः भोवायो इहागच्छइहतिष्ठ ॐवायवे नमः।।",
    devta: "Devta Description",
    devta_dis:"Anil is actually a synonym for wind. He is known as Vaata devata in the Rig Veda. He is one of the Ashtavasus. He is established in the south east direction and controls the right hand palm of the Vaastu purush. Anil was born from the womb of Vasu, daughter of Prajapati Daksha, wife of Dharma. Wind and sky are closely related. That is why Anil has been stationed next to Nabh. He symbolizes the wind on earth. Vayu is born from the dhatu Va and means motion. This pada is good for fire related activities like havan etc as Anil helps the movement of the fire. Vayu is the soul of the Gods and resides in every living being as breath.",
    other: "Other Details",
    list1: [
        "Venus is the planet",
"Lord of Wind energy",
"If someone says, the work is not even starting “kaam shuru hi nahi ho raha hai”, then check this",
"Door here effects the elder son negatively.",
"Semen count is less in case of childbirth if this is disturbed",
"Sleeping may cause restlessness in females.",
"Presence of yellow colour causes heavy cash crunch.",
"When things are not expanding as expected, need to check this zone."
    ]
}
];
//    function func(x,y){
//     //    window.alert(x);
//        document.getElementById("head").innerHTML = x;
//        document.getElementById("pic").src=y;
//    }

// for(let i=0;i<Array.length;i++){
function func(i) {
    let block = "<ul>";
    document.getElementById("exampleModalLabel").innerHTML = Array[i].title;
    document.getElementById("17").innerHTML = Array[i].name;
    document.getElementById("18").innerHTML = Array[i].direction;
    document.getElementById("19").innerHTML = Array[i].color;
    document.getElementById("pic").src = Array[i].img;
    document.getElementById("head").innerHTML = Array[i].sloka;
    document.getElementById("demo").innerHTML = Array[i].sloka_dis;
    document.getElementById("head1").innerHTML = Array[i].devta;
    document.getElementById("demo1").innerHTML = Array[i].devta_dis;
    document.getElementById("head2").innerHTML = Array[i].other;
    for(let j=0;j<Array[i].list1.length;j++){
        if(j == Array[i].list1.length-1){
            block +=  "<li>" + Array[i].list1[j] + "</li></ul>";
        }else{
            block +=  "<li>" + Array[i].list1[j] + "</li>";
        }
    }
    document.getElementById("list").innerHTML = block;
//     document.getElementById("1").innerHTML = Array[i].d;
//     document.getElementById("2").innerHTML = Array[i].e;
//     document.getElementById("3").innerHTML = Array[i].f;
//     document.getElementById("4").innerHTML = Array[i].g;
//     document.getElementById("5").innerHTML = Array[i].h;
//     document.getElementById("6").innerHTML = Array[i].i;
//     document.getElementById("7").innerHTML = Array[i].j;
//     document.getElementById("8").innerHTML = Array[i].k;
//     document.getElementById("9").innerHTML = Array[i].l;
//     document.getElementById("10").innerHTML = Array[i].m;
//     document.getElementById("11").innerHTML = Array[i].n;
//     document.getElementById("12").innerHTML = Array[i].p;
//     document.getElementById("13").innerHTML = Array[i].q;
//     document.getElementById("14").innerHTML = Array[i].r;
//     document.getElementById("15").innerHTML = Array[i].s;
//     document.getElementById("16").innerHTML = Array[i].t;
}

Array.map((item)=>{
    console.log(item.o);
    document.getElementById("exampleModalLabel").innerHTML = item.o;
    // for(let i=0;i<item.item1.length;i++){
    //     item.item1[i]; 
    // }
});
