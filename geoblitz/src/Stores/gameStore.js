import { create } from  'zustand'

const data = [
    [
        {
            video: 'https://www.youtube.com/watch?v=p1J2XpKcvTE',
            lat: 28.5244945,
            lng: 77.1806468,
            hint: 'Ancient red tower, Delhi`s pride, echoes history and faith'
        },
        {
            video:"https://youtu.be/5D_aN0WqLNA?t=82",
            lat:34.39676594974025, 
            lng:132.45147227931028,
            hint: 'Peaceful city reborn, dome stands where silence followed the blast'
        },
        
        {
            video:"https://youtu.be/0nTO4zSEpOs?t=2435",
            lat:35.66023000142694,
            lng:139.7059780449033,
            hint: 'Neon lights, busy crossing, Tokyo`s heartbeat never slows down.'
        },
        
        {
            video:"https://youtu.be/fAq1Pyh4udY?t=115",
            lat:35.70014444202243,
            lng:139.72081412749512,
            hint: 'Skyscrapers, nightlife, Tokyo`s maze of lights and hidden alleys.'
        },
        
        {
            video:"https://www.youtube.com/watch?v=qgfd-uWTVwg",
            lat:35.00132925872858,
            lng:135.7597472983604,
            hint: 'Ancient temples, quiet streets, geishas wander through timeless tradition'
        },
        {
            video:"https://youtu.be/7jcTw708k7M?t=998",
            lat:35.36223491796395,
            lng:138.73197679955734,
            hint: 'Snow-capped peak, Japan’s icon, reflecting in lakes below silently'
        },
        {
            video:"https://youtu.be/Xf7nLAnXxno?t=29",
            lat:34.967950276472976,
            lng:135.77836630356518,
            hint: 'Endless red gates, fox spirits guard sacred mountain path silently'
        },
        {
            video:"https://youtu.be/EO4v8L9uHgA?t=18",
            lat:35.65839031252489,
            lng:139.745333956179,
            hint: 'Red iron tower, Tokyo landmark, shining like stars at night'
        },
        {
            video:"https://youtu.be/x7u70e9iQKQ",
            lat:48.85806251562708,
            lng:2.2942311592108404,
            hint: 'Iron giant, Paris romance, sparkles nightly above city lights'
        },
        {
            video:"https://youtu.be/Wq155W-kWZ8?t=133",
            lat:51.50074128080749,
            lng:-0.12461192502539786,
            hint: 'Historic streets, red buses, Big Ben watches over Thames'
        },
        {
            video:"https://youtu.be/pdpSzAaiIuQ?t=560",
            lat:47.496925146599295,
            lng:19.052378578636876,
            hint: 'Twin cities united, Danube sparkles beneath grand Parliament lights'
        },
        {
            video:"https://youtu.be/ytWQV9t7Noc?t=57",
            lat:48.86045602780762, 
            lng:2.338414595936878,
            hint: 'Glass pyramid guards timeless art in Parisian palace halls'
        },
        {
            video:"https://youtu.be/BVlFOEn9-Ns?t=1211",
            lat:37.819843098706784,
            lng:-122.47866172394306,
            hint: 'Fog rolls in, crimson span connects coasts with iconic grace'
        },
        {
            video:"https://youtu.be/LMFIcciEufE?t=75",
            lat:43.88013818477583, 
            lng:-103.45386213245206,
            hint: 'Granite faces gaze proudly, history carved into mountain stone'
        },
        {
            video:"https://youtu.be/F8MN0o6RS9o?t=46",
            lat:40.7579655494096, 
            lng:-73.98555419743076,
            hint: 'Blinding lights, endless screens, New York’s never-sleeping heartbeat pulses'
        },
        {
            video:"https://youtu.be/o6RA-VDVjMo?t=63",
            lat:40.765061642413194,
            lng:-73.97257694069233,
            hint: 'Green escape, city surrounds, paths wind through peaceful nature'
        },
        {
            video:"https://youtu.be/kTOHJZY2VRE?t=18",
            lat:43.0897625209637,
            lng:-79.07153904593882,
            hint: 'Thundering waters roar, mist rises where borders meet nature'
        },
        {
            video:"https://youtu.be/YqG5KIxBTZ4?t=151",
            lat:36.09827110859378,
            lng:-112.11252757529178,
            hint: 'Vast canyon depths, layered earth reveals time’s ancient story'
        },
        {
            video:"https://youtu.be/c5yvBK5SDWI?t=11",
            lat:38.89763302949359,
            lng:-77.03640389673072,
            hint: 'Monuments rise tall, nation’s history echoes through marble streets'
        },
        {
            video:"https://youtu.be/Rcm7GbrAfxk?t=45",
            lat:47.6206138521164,
            lng:-122.34925371048938,
            hint: 'Futuristic spire, Seattle’s skyline pierces clouds and dreams skyward'
        },
        {
            video:"https://youtu.be/Es9wJjzfgfM?t=295",
            lat:-33.8572165919132,
            lng:151.2147669530041,
            hint: 'Harbor sparkles bright, Opera House sails beside towering bridge'
        },
        {
            video:"https://youtu.be/vKlym2jIiGI?t=15",
            lat:44.42795974795433, 
            lng:-110.58846194062028,
            hint: 'Geysers erupt, wildlife roams, Earth breathes in vibrant wilderness'
        },
        {
            video:"https://youtu.be/YcjA-aig2Rk?t=977",
            lat:40.689245620860206,
            lng: -74.04450280705164, 
            hint: 'Torch held high, Lady Liberty welcomes all with hope'
        },
        {
            video:"https://youtu.be/hYvkAsk_duA?t=181",
            lat:28.377182843734104,
            lng: -81.57074980358989, 
            hint: 'Magic unfolds, castles gleam, dreams come true with every step'
        },
        {
            video:"https://youtu.be/b7qKPl1eE9c?t=942",
            lat:40.7579707240592,
            lng: -73.9855458503152,
            hint: 'Neon jungle, flashing ads, crowds pulse in city’s core'
        },
        {
            video: "https://youtu.be/hV68asjANTs?t=694",
            lat: 36.26783333840381,
            lng: -112.35351672375853,
            hint: "Vast canyon depths, layered earth reveals time’s ancient story."
        },
        {
            video: "https://youtu.be/Tr7SiErD1BQ?t=354",
            lat: 37.810624290570786,
            lng: -122.47704498138107,
            hint: "Fog rolls in, crimson span connects coasts with iconic grace."
        },
        {
            video: "https://youtu.be/pnBwfkViUxI?t=2239",
            lat: 36.49876570141841,
            lng: -117.07975112208933,
            hint: "Heat scorches land, lowest point hides surreal desert silence."
        },
        {
            video: "https://youtu.be/kcWZJLABWGA?t=1619",
            lat: 28.479288849451418,
            lng: -81.46840049882387,
            hint: "Movie magic lives, rollercoasters roar in cinematic adventure land."
        },
        {
            video: "https://youtu.be/Zho7IKZ5Ot4?t=147",
            lat: 43.08279774606562,
            lng: -79.07414831137251,
            hint: "Thundering waters roar, mist rises where borders meet nature."
        },
        {
            video: "https://youtu.be/x-x2gYGAAj4?t=5570",
            lat: 40.78250768944311,
            lng: -73.96560835680225,
            hint: "Green escape, city surrounds, paths wind through peaceful nature."
        },
        {
            video: "https://youtu.be/G4EpMLUFlr0?t=70",
            lat: 40.71154802470663,
            lng: -74.01333732574754,
            hint: "Freedom rises tall, reflecting loss and hope in steel."
        },
        {
            video: "https://youtu.be/2QlNqhjXVRU?t=483",
            lat: 40.74850250051097,
            lng: -73.98569744889556,
            hint: "Art Deco tower, NYC icon pierces sky with pride."
        },
        {
            video: "https://youtu.be/lJGcK7l2_B4?t=1",
            lat: 38.889201304383555,
            lng: -77.03527223662643,
            hint: "Monuments rise tall, nation’s history echoes through marble streets."
        },
        {
            video: "https://youtu.be/n6Nd9lV9edQ?t=63",
            lat: 43.88033285142144,
            lng: -103.45377975613553,
            hint: "Granite faces gaze proudly, history carved into mountain stone."
        },
        {
            video: "https://youtu.be/KWnAeDs8UB8?t=1",
            lat: 36.01606156770262,
            lng: -114.73773568825014,
            hint: "Desert oasis dazzles, neon lights glow through endless nights."
        },
        {
            video: "https://youtu.be/mn7Zv1ZNF4s?t=132",
            lat: 37.59209295983764,
            lng: -112.18775432831508,
            hint: "Natural amphitheaters glow red, carved by centuries of silence."
        },
        {
            video: "https://youtu.be/nVuKIdDAC9o?t=16",
            lat: 27.17518046332928,
            lng: 78.04221686107367,
            hint: "White marble love, reflected in calm Yamuna river breeze."
        },
        {
            video: "https://youtu.be/2iCISBxW_ZA?t=216",
            lat: 28.612808371270894,
            lng: 77.22948823821996,
            hint: "War memorial stands tall, crowds gather in patriotic pride."
        },
        {
            video: "https://youtu.be/CbSyG7jpEZs?t=13",
            lat: 18.921943440240653,
            lng: 72.83446115126092,
            hint: "Colonial arch, sea breeze, ferries float toward history."
        },
        {
            video: "https://youtu.be/X2t-BJjB_go?t=35",
            lat: 10.541470060269582,
            lng: 72.63644299921502,
            hint: "Turquoise waters, coral reefs, tropical peace beyond mainland."
        },
        {
            video: "https://youtu.be/rDsOi3MByCI?t=13",
            lat: 25.306237408843725,
            lng: 83.00843459114631,
            hint: "Holy river rituals, lamps float in ancient silence."
        },
        {
            video: "https://youtu.be/hdvsdtE2GfA?t=29",
            lat: 29.957206432165492,
            lng: 78.17166703181117,
            hint: "Flames rise, chants echo on sacred flowing Ganga."
        },
        {
            video: "https://youtu.be/miwxCVpR-m0?t=74",
            lat: 15.49472471684599,
            lng: 73.82981227346154,
            hint: "Golden sands, palm shadows, waves crash under sunset sky."
        },
        {
            video: "https://youtu.be/kgu6vcNLEC0?t=9",
            lat: 20.02787657143284,
            lng: 75.17716501840897,
            hint: "Ancient carvings whisper stories in stone-sealed silence."
        },
        {
            video: "https://youtu.be/m701WKQMeYQ?t=6",
            lat: 31.61992710183534,
            lng: 74.87643896017276,
            hint: "Golden dome shines, reflections ripple in sacred pool."
        },
        {
            video: "https://youtu.be/DCPD4hqVeOs",
            lat: 28.55332234535431,
            lng: 77.25847234430645,
            hint: "Red sandstone tower tells Delhi’s layered Islamic past."
        },
        {
            video: "https://youtu.be/jSlrNR2hAqc?t=15",
            lat: 26.924064908461343,
            lng: 75.82658564979796,
            hint: "Royal palaces blush pink beneath Rajasthan’s desert sun."
        },
        {
            video: "https://youtu.be/5Wa3CeRN9XA?t=12",
            lat: 26.298391922133526,
            lng: 73.01807361019858,
            hint: "Blue houses climb hills, fort watches over sunlit city."
        },
        {
            video: "https://youtu.be/IN1slWsDfLc",
            lat: 21.83813788708408,
            lng: 73.7187616594191,
            hint: "Giant statue stands tall, river flows below silently."
        },
        {
            video: "https://youtu.be/E23s8MmSjuQ?t=8",
            lat: 20.023744091964996,
            lng: 75.17914098337171,
            hint: "Historic caves and temples rest in dry Deccan lands."
        },
        {
            video: "https://youtu.be/6R1pR6ju_ek",
            lat: 24.15138722982982,
            lng: 70.61754555142875,
            hint: "Salt desert glows white under moonlight in winter breeze."
        },
        {
            video: "https://youtu.be/fYfvk25kJiM",
            lat: 12.30527829383846,
            lng: 76.65483157268586,
            hint: "Royal palace stands proud, lit beautifully at dusky hour."
        },
        {
            video: "https://youtu.be/bhudWDoChfM?t=57",
            lat: 9.919311994765541,
            lng: 78.11924321094867,
            hint: "Temple towers rise, sculptures guard sacred southern corridors."
        },
        {
            video: "https://youtu.be/5gmA0SNPl5s?t=34",
            lat: 30.73510752218287,
            lng: 79.06678274420098,
            hint: "Snowy trails climb high, pilgrims chant in Himalayan cold."
        },
        {
            video: "https://youtu.be/uMQYbfgHVxk?t=14",
            lat: 17.36169312643008,
            lng: 78.4746855197769,
            hint: "Iconic arches frame old city’s bustling heart and soul."
        },
        {
            video: "https://youtu.be/poKbFeYU464",
            lat: 19.20676444347248,
            lng: 81.70097476562538,
            hint: "Waterfalls crash deep in forested tribal heart of India."
        },
        {
            video: "https://youtu.be/-qD1wRzEKQE?t=15",
            lat: 18.91405411882516,
            lng: 81.86531389930887,
            hint: "Quiet temples rest among dense woods and hidden rivers."
        },
        {
            video: "https://youtu.be/MUfLMWS1EPA?t=24",
            lat: 34.682913250821386,
            lng: 77.5726861267809,
            hint: "Barren beauty, high passes, mountains echo in silent cold."
        },
        {
            video: "https://youtu.be/aPN4_SvJI9w?t=36",
            lat: 30.488450069232165,
            lng: 79.21710902651712,
            hint: "Sacred temple nestled between snow peaks and crisp winds."
        },
        {
            video: "https://youtu.be/0teVWbQPEjA?t=14",
            lat: 32.37983094437972,
            lng: 77.25170894492976,
            hint: "Mountain air fresh, rivers curl through lush green valleys."
        },
        {
            video: "https://youtu.be/Y8pRTDb0jYw?t=95",
            lat: 11.649398495580531,
            lng: 92.73207237435238,
            hint: "Palm-lined shores, clear waters lap coral-strewn islands peacefully."
        },
        {
            video: "https://youtu.be/cmM30jE4ojk?t=34",
            lat: 21.25658231860836,
            lng: 81.62993520528087,
            hint: "City expands quickly, blending malls, lakes, and tradition."
        },
        {
            video: "https://youtu.be/PO3bECD8kis?t=5",
            lat: 20.10270525698554,
            lng: 81.58702196636071,
            hint: "Green forests hide vibrant cultures and stunning natural beauty."
        }
    ],
    [
        {
            video:"https://youtu.be/nVuKIdDAC9o?t=16",
            lat:27.17518046332928,
            lng:78.04221686107367,
            hint: 'White marble love, reflected in calm Yamuna river breeze.'
        },
        {
            video:"https://youtu.be/2iCISBxW_ZA?t=216",
            lat:28.612808371270894,
            lng:77.22948823821996,
            hint: 'War memorial stands tall, crowds gather in patriotic pride.'
        },
        {
            video:"https://youtu.be/CbSyG7jpEZs?t=13",
            lat:18.921943440240653,
            lng: 72.83446115126092,
            hint: 'Colonial arch, sea breeze, ferries float toward history.'
        },
        {
            video:"https://youtu.be/X2t-BJjB_go?t=35",
            lat:10.541470060269582,
            lng:72.63644299921502,
            hint: 'Turquoise waters, coral reefs, tropical peace beyond mainland.'
        },
        {
            video:"https://youtu.be/rDsOi3MByCI?t=13",
            lat:25.306237408843725,
            lng:83.00843459114631,
            hint: 'Holy river rituals, lamps float in ancient silence.'
        },
        {
            video:"https://youtu.be/hdvsdtE2GfA?t=29",
            lat:29.957206432165492,
            lng:78.17166703181117,
            hint: 'Flames rise, chants echo on sacred flowing Ganga.'
        },
        {
            video:"https://youtu.be/miwxCVpR-m0?t=74",
            lat:15.49472471684599,
            lng:73.82981227346154,
            hint: 'Golden sands, palm shadows, waves crash under sunset sky.'
        },
        {
            video:"https://youtu.be/kgu6vcNLEC0?t=9",
            lat:20.02787657143284,
            lng:75.17716501840897,
            hint: 'Ancient carvings whisper stories in stone-sealed silence.'
        },
        {
            video:"https://youtu.be/m701WKQMeYQ?t=6",
            lat:31.61992710183534,
            lng:74.87643896017276,
            hint: 'Golden dome shines, reflections ripple in sacred pool.'
        },
        {
            video:"https://youtu.be/DCPD4hqVeOs",
            lat:28.55332234535431,
            lng:77.25847234430645,
            hint: 'Red sandstone tower tells Delhi’s layered Islamic past.'
        },
        {
            video:"https://youtu.be/jSlrNR2hAqc?t=15",
            lat:26.924064908461343,
            lng:75.82658564979796,
            hint: 'Royal palaces blush pink beneath Rajasthan’s desert sun.'
        },
        {
            video:"https://youtu.be/5Wa3CeRN9XA?t=12",
            lat:26.298391922133526, 
            lng:73.01807361019858,
            hint: 'Blue houses climb hills, fort watches over sunlit city.'
        },
        {
            video:"https://youtu.be/IN1slWsDfLc",
            lat:21.83813788708408, 
            lng:73.7187616594191,
            hint: 'Giant statue stands tall, river flows below silently.'
        },
        {
            video:"https://youtu.be/E23s8MmSjuQ?t=8",
            lat:20.023744091964996, 
            lng:75.17914098337171,
            hint: 'Historic caves and temples rest in dry Deccan lands.'
        },
        {
            video:"https://youtu.be/6R1pR6ju_ek",
            lat:24.15138722982982,
            lng:70.61754555142875,
            hint: 'Salt desert glows white under moonlight in winter breeze.'
        },
        {
            video:"https://youtu.be/fYfvk25kJiM",
            lat:12.30527829383846,
            lng:76.65483157268586,
            hint: 'Royal palace stands proud, lit beautifully at dusky hour.'
        },
        {
            video:"https://youtu.be/bhudWDoChfM?t=57",
            lat:9.919311994765541,
            lng:78.11924321094867,
            hint: 'Temple towers rise, sculptures guard sacred southern corridors.'
        },
        {
            video:"https://youtu.be/5gmA0SNPl5s?t=34",
            lat:30.73510752218287,
            lng:79.06678274420098,
            hint: 'Snowy trails climb high, pilgrims chant in Himalayan cold.'
        },
        {
            video:"https://youtu.be/uMQYbfgHVxk?t=14",
            lat:17.36169312643008,
            lng:78.4746855197769,
            hint: 'Iconic arches frame old city’s bustling heart and soul.'
        },
        {
            video:"https://youtu.be/poKbFeYU464",
            lat:19.20676444347248,
            lng:81.70097476562538,
            hint: 'Waterfalls crash deep in forested tribal heart of India.'
        },
        {
            video:"https://youtu.be/-qD1wRzEKQE?t=15",
            lat:18.91405411882516,    
            lng:81.86531389930887,
            hint: 'Quiet temples rest among dense woods and hidden rivers.'
        },
        {
            video:"https://youtu.be/MUfLMWS1EPA?t=24",
            lat:34.682913250821386,
            lng:77.5726861267809,
            hint: 'Barren beauty, high passes, mountains echo in silent cold.'
        },
        {
            video:"https://youtu.be/aPN4_SvJI9w?t=36",
            lat:30.488450069232165,
            lng:79.21710902651712,
            hint: 'Sacred temple nestled between snow peaks and crisp winds.'
        },
        {
            video:"https://youtu.be/0teVWbQPEjA?t=14",
            lat:32.37983094437972,
            lng:77.25170894492976,
            hint: 'Mountain air fresh, rivers curl through lush green valleys.'
        },
        {
            video:"https://youtu.be/Y8pRTDb0jYw?t=95",
            lat:11.649398495580531,
            lng:92.73207237435238,
            hint: 'Palm-lined shores, clear waters lap coral-strewn islands peacefully.'
        },
        {
            video:"https://youtu.be/cmM30jE4ojk?t=34",
            lat:21.25658231860836,
            lng:81.62993520528087,
            hint: 'City expands quickly, blending malls, lakes, and tradition.'
        },
        {
            video:"https://youtu.be/PO3bECD8kis?t=5",
            lat:20.10270525698554,
            lng:81.58702196636071,
            hint: 'Green forests hide vibrant cultures and stunning natural beauty.'
        }
    ],
    [
        {
            video:"https://youtu.be/vKlym2jIiGI?t=15",
            lat:44.42795974795433, 
            lng:-110.58846194062028,
            hint: 'Geysers erupt, wildlife roams, Earth breathes in vibrant wilderness.'
        },
        {
            video:"https://youtu.be/YcjA-aig2Rk?t=977",
            lat:40.689245620860206,
            lng: -74.04450280705164, 
            hint: 'Torch held high, Lady Liberty welcomes all with hope.'
        },
        {
            video:"https://youtu.be/hYvkAsk_duA?t=181",
            lat:28.377182843734104,
            lng: -81.57074980358989, 
            hint: 'Magic unfolds, castles gleam, dreams come true with every step.'
        },
        {
            video:"https://youtu.be/b7qKPl1eE9c?t=942",
            lat:40.7579707240592,
            lng: -73.9855458503152,
            hint: 'Neon jungle, flashing ads, crowds pulse in city’s core.'
        },
        {
            video: "https://youtu.be/hV68asjANTs?t=694",
            lat: 36.26783333840381, 
            lng: -112.35351672375853,
            hint: 'Vast canyon depths, layered earth reveals time’s ancient story.'
        },
        {
            video: "https://youtu.be/Tr7SiErD1BQ?t=354",
            lat: 37.810624290570786,
            lng: -122.47704498138107,
            hint: 'Fog rolls in, crimson span connects coasts with iconic grace.'
        },
        {
            video: "https://youtu.be/pnBwfkViUxI?t=2239",
            lat: 36.49876570141841, 
            lng:-117.07975112208933,
            hint: 'Heat scorches land, lowest point hides surreal desert silence.'
        },
        {
            video: "https://youtu.be/kcWZJLABWGA?t=1619",
            lat: 28.479288849451418,
            lng: -81.46840049882387,
            hint: 'Movie magic lives, rollercoasters roar in cinematic adventure land.'
        },
        {
            video: "https://youtu.be/Zho7IKZ5Ot4?t=147",
            lat: 43.08279774606562,
            lng: -79.07414831137251,
            hint: 'Thundering waters roar, mist rises where borders meet nature.'
        },
        {
            video: "https://youtu.be/x-x2gYGAAj4?t=5570",
            lat: 40.78250768944311,
            lng: -73.96560835680225,
            hint: 'Green escape, city surrounds, paths wind through peaceful nature.'
        },
        {
            video: "https://youtu.be/G4EpMLUFlr0?t=70",
            lat: 40.71154802470663,
            lng:  -74.01333732574754,
            hint: 'Freedom rises tall, reflecting loss and hope in steel.'
        },
        {
            video: "https://youtu.be/2QlNqhjXVRU?t=483",
            lat: 40.74850250051097,
            lng: -73.98569744889556,
            hint: 'Art Deco tower, NYC icon pierces sky with pride.'
        },
        {
            video: "https://youtu.be/lJGcK7l2_B4?t=1",
            lat: 38.889201304383555,
            lng: -77.03527223662643,
            hint: 'Monuments rise tall, nation’s history echoes through marble streets.'
        },
        {
            video: "https://youtu.be/n6Nd9lV9edQ?t=63",
            lat: 43.88033285142144, 
            lng: -103.45377975613553,
            hint: 'Granite faces gaze proudly, history carved into mountain stone.'
        },
        {
            video: "https://youtu.be/KWnAeDs8UB8?t=1",
            lat: 36.01606156770262, 
            lng: -114.73773568825014,
            hint: 'Desert oasis dazzles, neon lights glow through endless nights.'
        },
        {
            video: "https://youtu.be/mn7Zv1ZNF4s?t=132",
            lat: 37.59209295983764, 
            lng: -112.18775432831508,
            hint: 'Natural amphitheaters glow red, carved by centuries of silence.'
        }
    ],
]

const gameStore = (set) => ({
    gameMode: null,
    userScore: 0,
    rounds: 1,
    correctLocation: {lat: null,lng: null},
    guessedLocation: {lat: null,lng: null},

    restartGame: () => {
        set((state) => ({
            userScore: 0,
        }))
    },

    setGameMode: (val) => {
        set((state) => ({
            rounds: 1,
            gameMode: val
        }))
    },

    endGame: ()=> {
        set((state) => ({
            gameMode: null
        }))
    },

    addScore:(value) =>{
        set((state)=>({
            userScore : state.userScore + value
        })) 
    },

    addRound:() =>{
        set((state)=>({
            rounds : state.rounds + 1
        })) 
    },

    randomizeLocation: () => {
        set((state) => ({
            correctLocation: data[state.gameMode][Math.floor(Math.random() * data[state.gameMode].length)]
        }))
    },

    markLocation: (lat,lng) => {
        set((state) => ({
            guessedLocation: {lat,lng}
        }))
    },

    refresh: () => {
        set((state) => ({
            correctLocation: data[state.gameMode][Math.floor(Math.random() * data[state.gameMode].length)],
            guessedLocation: {lat: null,lng: null},
        }))
    }
})

const useGameStore = create(gameStore)

export default useGameStore