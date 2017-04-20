/**
 * Created by Ксения on 20.03.2017.
 */
var peopleData = {
  8: {NAME_1: "Belgorod", value: 87, rating2:0, rating3:27, rating4:45, rating5:15, age15_17:3, age18_25:41, age26_30:33, age31_40:9, age41_60:1, age61:0},
  4: {NAME_1: "Crimea", value: 34, rating2:1, rating3:3, rating4:20, rating5:10, age15_17:1, age18_25:13, age26_30:7, age31_40:8, age41_60:4, age61:1},
  28: {NAME_1: "Karachay-Cherkess", value: 10, rating2:0, rating3:0, rating4:3, rating5:7, age15_17:0, age18_25:7, age26_30:2, age31_40:1, age41_60:0, age61:0},
  29: {NAME_1: "Karelia", value: 66, rating2:0, rating3:12, rating4:34, rating5:20, age15_17:4, age18_25:40, age26_30:15, age31_40:5, age41_60:2, age61:0},
  30: {NAME_1: "Kemerovo", value: 18, rating2:1, rating3:2, rating4:5, rating5:10, age15_17:1, age18_25:7, age26_30:7, age31_40:1, age41_60:1, age61:1},
  4: {NAME_1: "Amur", value: 45, rating2:0, rating3:7, rating4:30, rating5:8, age15_17:2, age18_25:21, age26_30:17, age31_40:2, age41_60:0, age61:3},
  5: {NAME_1: "Arkhangel'sk", value: 70, rating2:2, rating3:16, rating4:48, rating5:4, age15_17:0, age18_25:30, age26_30:13, age31_40:20, age41_60:4, age61:3},
  11: {NAME_1: "Chechnya", value: 5, rating2:0, rating3:0, rating4:4, rating5:1, age15_17:0, age18_25:1, age26_30:4, age31_40:0, age41_60:0, age61:0},
  22: {NAME_1: "Ivanovo", value: 1000, rating2:117, rating3:200, rating4:603, rating5:80, age15_17:175, age18_25:471, age26_30:302, age31_40:33, age41_60:16, age61:3},
  49: {NAME_1: "Moskva", value: 55879, rating2:311, rating3:10100, rating4:25100, rating5:20368, age15_17:13100, age18_25:28410, age26_30:10402, age31_40:3100, age41_60:867, age61:100},
  54: {NAME_1: "Novgorod", value: 77, rating2:0, rating3:17, rating4:50, rating5:10, age15_17:15, age18_25:50, age26_30:12, age31_40:0, age41_60:0, age61:0},
  55: {NAME_1: "Novosibirsk", value: 15000, rating2:134, rating3:5166, rating4:7700, rating5:2000, age15_17:361, age18_25:7500, age26_30:6320, age31_40:800, age41_60:17, age61:2},
  62: {NAME_1: "Pskov", value: 1200, rating2:12, rating3:88, rating4:740, rating5:360, age15_17:71, age18_25:502, age26_30:344, age31_40:217, age41_60:60, age61:6},
  67: {NAME_1: "Samara", value: 567, rating2:4, rating3:296, rating4:200, rating5:67, age15_17:7, age18_25:310, age26_30:141, age31_40:58, age41_60:33, age61:18},
  43: {NAME_1: "Leningrad", value: 43760, rating2:174, rating3:11826, rating4:21760, rating5:10000, age15_17:8200, age18_25:17666, age26_30:15200, age31_40:2100, age41_60:500, age61:94},
  33: {NAME_1: "Khanty-Mansiy", value: 120000, rating2:1100, rating3:30000, rating4:80900, rating5:18000, age15_17:33111, age18_25:52444, age26_30:21010, age31_40:13000, age41_60:400, age61:35},
  36: {NAME_1: "Komi", value: 500, rating2:0, rating3:100, rating4:350, rating5:50, age15_17:25, age18_25:205, age26_30:100, age31_40:130, age41_60:31, age61:9},
  40: {NAME_1: "Krasnoyarsk", value: 1125, rating2:125, rating3:310, rating4:490, rating5:200, age15_17:3, age18_25:708, age26_30:310, age31_40:25, age41_60:46, age61:33},
  14: {NAME_1: "Chukot", value: 7500, rating2:250, rating3:750, rating4:4500, rating5:3000, age15_17:654, age18_25:4100, age26_30:1890, age31_40:710, age41_60:140, age61:6},
  45: {NAME_1: "Maga Buryatdan", value: 46, rating2:0, rating3:0, rating4:45, rating5:1, age15_17:0, age18_25:33, age26_30:10, age31_40:3, age41_60:0, age61:0},
  65: {NAME_1: "Sakha", value: 33000, rating2:3000, rating3:10000, rating4:20000, rating5:0, age15_17:4000, age18_25:18470, age26_30:10301, age31_40:220, age41_60:8, age61:1},
  31: {NAME_1: "Khabarovsk", value: 1, rating2:0, rating3:0, rating4:1, rating5:0, age15_17:0, age18_25:1, age26_30:0, age31_40:0, age41_60:0, age61:0},

  132: {NAME_1: "Khakass", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  1: {NAME_1: "Adygey", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  3: {NAME_1: "Altay", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  6: {NAME_1: "Astrakhan", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  7: {NAME_1: "Bashkortostan", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  9: {NAME_1: "Bryansk",value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  10: {NAME_1: "Buryat", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  12: {NAME_1: "Chelyabinsk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  13: {NAME_1: "Zabaikalskiy Krai", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},   
  15: {NAME_1: "Chuvash", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  16: {NAME_1: "City of St. Petersburg", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  17: {NAME_1: "Dagestan", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  19: {NAME_1: "Gorno-Altay",value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  20: {NAME_1: "Ingush", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  20: {NAME_1: "Sevastopol", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  21: {NAME_1: "Irkutsk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},  
  23: {NAME_1: "Kabardin-Balkar", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  24: {NAME_1: "Kaliningrad", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  25: {NAME_1: "Kalmyk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  26: {NAME_1: "Kaluga", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  27: {NAME_1: "Kamchatka", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},   
  32: {NAME_1: "Khakass", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  34: {NAME_1: "Kirov", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  38: {NAME_1: "Kostroma",value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  39: {NAME_1: "Krasnodar", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},  
  41: {NAME_1: "Kurgan",value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  42: {NAME_1: "Kursk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  44: {NAME_1: "Lipetsk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  46: {NAME_1: "Mariy-El", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  47: {NAME_1: "Mordovia", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  48: {NAME_1: "Moscow City",value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  50: {NAME_1: "Murmansk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  51: {NAME_1: "Nenets", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  52: {NAME_1: "Nizhegorod", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  53: {NAME_1: "North Ossetia", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  56: {NAME_1: "Omsk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  57: {NAME_1: "Orel", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  58: {NAME_1: "Orenburg", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  59: {NAME_1: "Penza",value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  60: {NAME_1: "Perm'", value: 0, rating2:0, rating3:0, rating4:0, rating5:0} ,  
  61: {NAME_1: "Primor'ye", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  63: {NAME_1: "Rostov", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  64: {NAME_1: "Ryazan", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  66: {NAME_1: "Sakhalin", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  68: {NAME_1: "Saratov",value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  69: {NAME_1: "Smolensk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  70: {NAME_1: "Stavropol", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  71: {NAME_1: "Sverdlovsk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  72: {NAME_1: "Tambov", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  73: {NAME_1: "Tatarstan", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  75: {NAME_1: "Tomsk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  76: {NAME_1: "Tula", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  77: {NAME_1: "Tuva", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  78: {NAME_1: "Tver", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  79: {NAME_1: "Tyumen",value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  80: {NAME_1: "Udmurt", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  81: {NAME_1: "Ul'yanovsk", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  83: {NAME_1: "Vladimir", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  84: {NAME_1: "Volgograd", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  85: {NAME_1: "Vologda",value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  86: {NAME_1: "Voronezh", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  87: {NAME_1: "Yamal-Nenets", value: 78300, rating2:300, rating3:1200, rating4:33000, rating5:43800, age15_17:1401, age18_25:39200, age26_30:31011, age31_40:3560, age41_60:3000, age61:128},
  88: {NAME_1: "Yaroslavl", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},
  89: {NAME_1: "Yevrey", value: 0, rating2:0, rating3:0, rating4:0, rating5:0},


  /*8: {NAME_1: "Belgorod", value: 87, rating:{2:0, 3:27, 4:45, 5:15}},
  4: {NAME_1: "Crimea", value: 34, rating:{2:1, 3:3, 4:20, 5:10}},
  28: {NAME_1: "Karachay-Cherkess", value: 10, rating:{2:0, 3:0, 4:3, 5:7}},
  29: {NAME_1: "Karelia", value: 66, rating:{2:0, 3:12, 4:34, 5:20}},
  30: {NAME_1: "Kemerovo", value: 18, rating:{2:1, 3:2, 4:5, 5:10}},
  4: {NAME_1: "Amur", value: 45, rating:{2:0, 3:7, 4:30, 5:8}},
  5: {NAME_1: "Arkhangel'sk", value: 70, rating:{2:2, 3:16, 4:48, 5:4}},
  11: {NAME_1: "Chechnya", value: 5, rating:{2:0, 3:0, 4:4, 5:1}},
  22: {NAME_1: "Ivanovo", value: 1000, rating:{2:117, 3:200, 4:603, 5:80},
  49: {NAME_1: "Moskva", value: 55879, rating:{2:311, 3:10100, 4:25100, 5:20368},
  54: {NAME_1: "Novgorod", value: 77, rating:{2:0, 3:17, 4:50, 5:10}},
  55: {NAME_1: "Novosibirsk", value: 15000, rating:{2:134, 3:5166, 4:7700, 5:2000}},
  62: {NAME_1: "Pskov", value: 1200, rating:{2:12, 3:88, 4:740, 5:360}},
  67: {NAME_1: "Samara", value: 567, rating:{2:4, 3:296, 4:200, 5:67}},
  43: {NAME_1: "Leningrad", value: 43760, rating:{2:174, 3:11826, 4:21760, 5:10000}},
  33: {NAME_1: "Khanty-Mansiy", value: 120000, rating:{2:1100, 3:30000, 4:80900, 5:18000}},
  36: {NAME_1: "Komi", value: 500, rating:{2:0, 3:100, 4:350, 5:50}},
  40: {NAME_1: "Krasnoyarsk", value: 1125, rating:{2:125, 3:310, 4:490, 5:200}},
  14: {NAME_1: "Chukot", value: 7500, rating:{2:250, 3:750, 4:4500, 5:3000}},
  45: {NAME_1: "Maga Buryatdan", value: 46, rating:{2:0, 3:0, 4:45, 5:1}},
  65: {NAME_1: "Sakha", value: 33000, rating:{2:3000, 3:10000, 4:20000, 5:0}}*/
}

