const playersData = [

    // =========================
    // 阪神タイガース
    // =========================

    // 投手
    {
        name: "岩崎優",
        team: "阪神タイガース",
        number: "13",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1991-06-19",
        status: "支配下"
    },
    {
        name: "岩貞祐太",
        team: "阪神タイガース",
        number: "14",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1991-09-05",
        status: "支配下"
    },
    {
        name: "西勇輝",
        team: "阪神タイガース",
        number: "16",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1990-11-10",
        status: "支配下"
    },
    {
        name: "伊原陵人",
        team: "阪神タイガース",
        number: "18",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2000-08-07",
        status: "支配下"
    },
    {
        name: "下村海翔",
        team: "阪神タイガース",
        number: "19",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2002-03-27",
        status: "支配下"
    },
    {
        name: "大竹耕太郎",
        team: "阪神タイガース",
        number: "21",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1995-06-29",
        status: "支配下"
    },
    {
        name: "椎葉剛",
        team: "阪神タイガース",
        number: "26",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2002-03-18",
        status: "支配下"
    },
    {
        name: "伊藤将司",
        team: "阪神タイガース",
        number: "27",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1996-05-08",
        status: "支配下"
    },
    {
        name: "今朝丸裕喜",
        team: "阪神タイガース",
        number: "28",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2006-06-02",
        status: "支配下"
    },
    {
        name: "髙橋遥人",
        team: "阪神タイガース",
        number: "29",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1995-11-07",
        status: "支配下"
    },
    {
        name: "門別啓人",
        team: "阪神タイガース",
        number: "30",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2004-07-10",
        status: "支配下"
    },
    {
        name: "才木浩人",
        team: "阪神タイガース",
        number: "35",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1998-11-07",
        status: "支配下"
    },
    {
        name: "畠世周",
        team: "阪神タイガース",
        number: "36",
        position: "投手",
        batsThrows: "右投左打",
        birth: "1994-05-31",
        status: "支配下"
    },
    {
        name: "及川雅貴",
        team: "阪神タイガース",
        number: "37",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2001-04-18",
        status: "支配下"
    },
    {
        name: "村上頌樹",
        team: "阪神タイガース",
        number: "41",
        position: "投手",
        batsThrows: "右投左打",
        birth: "1998-06-25",
        status: "支配下"
    },
    {
        name: "ルーカス",
        team: "阪神タイガース",
        number: "42",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1996-09-23",
        status: "支配下"
    },
    {
        name: "早瀬朔",
        team: "阪神タイガース",
        number: "44",
        position: "投手",
        batsThrows: "右投左打",
        birth: "2007-08-30",
        status: "支配下"
    },
    {
        name: "ラグズデール",
        team: "阪神タイガース",
        number: "46",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1998-05-25",
        status: "支配下"
    },
    {
        name: "桐敷拓馬",
        team: "阪神タイガース",
        number: "47",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1999-06-20",
        status: "支配下"
    },
    {
        name: "茨木秀俊",
        team: "阪神タイガース",
        number: "48",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2004-06-08",
        status: "支配下"
    },
    {
        name: "工藤泰成",
        team: "阪神タイガース",
        number: "49",
        position: "投手",
        batsThrows: "右投左打",
        birth: "2001-11-19",
        status: "支配下"
    },
    {
        name: "富田蓮",
        team: "阪神タイガース",
        number: "50",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2001-09-06",
        status: "支配下"
    },
    {
        name: "早川太貴",
        team: "阪神タイガース",
        number: "51",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1999-12-18",
        status: "支配下"
    },
    {
        name: "木下里都",
        team: "阪神タイガース",
        number: "54",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2001-01-27",
        status: "支配下"
    },
    {
        name: "能登嵩都",
        team: "阪神タイガース",
        number: "55",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2001-09-29",
        status: "支配下"
    },
    {
        name: "石黒佑弥",
        team: "阪神タイガース",
        number: "63",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2001-06-20",
        status: "支配下"
    },
    {
        name: "岡留英貴",
        team: "阪神タイガース",
        number: "64",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1999-11-07",
        status: "支配下"
    },
    {
        name: "湯浅京己",
        team: "阪神タイガース",
        number: "65",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1999-07-17",
        status: "支配下"
    },
    {
        name: "津田淳哉",
        team: "阪神タイガース",
        number: "66",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2001-08-27",
        status: "支配下"
    },
    {
        name: "石井大智",
        team: "阪神タイガース",
        number: "69",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1997-07-29",
        status: "支配下"
    },
    {
        name: "神宮僚介",
        team: "阪神タイガース",
        number: "95",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2003-05-27",
        status: "支配下"
    },
    {
        name: "セベリーノ",
        team: "阪神タイガース",
        number: "97",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1994-09-17",
        status: "支配下"
    },
    {
        name: "ドリス",
        team: "阪神タイガース",
        number: "98",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1988-01-10",
        status: "支配下"
    },
    {
        name: "モレッタ",
        team: "阪神タイガース",
        number: "99",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1996-04-15",
        status: "支配下"
    },

    // 捕手
    {
        name: "梅野隆太郎",
        team: "阪神タイガース",
        number: "2",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "1991-06-17",
        status: "支配下"
    },
    {
        name: "坂本誠志郎",
        team: "阪神タイガース",
        number: "12",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "1993-11-10",
        status: "支配下"
    },
    {
        name: "伏見寅威",
        team: "阪神タイガース",
        number: "17",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "1990-05-12",
        status: "支配下"
    },
    {
        name: "榮枝裕貴",
        team: "阪神タイガース",
        number: "39",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "1998-05-16",
        status: "支配下"
    },
    {
        name: "町田隼乙",
        team: "阪神タイガース",
        number: "43",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "2003-04-03",
        status: "支配下"
    },
    {
        name: "長坂拳弥",
        team: "阪神タイガース",
        number: "57",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "1994-04-28",
        status: "支配下"
    },
    {
        name: "藤田健斗",
        team: "阪神タイガース",
        number: "59",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "2001-10-18",
        status: "支配下"
    },
    {
        name: "中川勇斗",
        team: "阪神タイガース",
        number: "68",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "2004-01-27",
        status: "支配下"
    },
    {
        name: "嶋村麟士朗",
        team: "阪神タイガース",
        number: "85",
        position: "捕手",
        batsThrows: "右投左打",
        birth: "2003-07-13",
        status: "支配下"
    },

    // 内野手
    {
        name: "元山飛優",
        team: "阪神タイガース",
        number: "00",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "1998-12-04",
        status: "支配下"
    },
    {
        name: "木浪聖也",
        team: "阪神タイガース",
        number: "0",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "1994-06-15",
        status: "支配下"
    },
    {
        name: "大山悠輔",
        team: "阪神タイガース",
        number: "3",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "1994-12-19",
        status: "支配下"
    },
    {
        name: "熊谷敬宥",
        team: "阪神タイガース",
        number: "4",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "1995-11-10",
        status: "支配下"
    },
    {
        name: "中野拓夢",
        team: "阪神タイガース",
        number: "7",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "1996-06-28",
        status: "支配下"
    },
    {
        name: "佐藤輝明",
        team: "阪神タイガース",
        number: "8",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "1999-03-13",
        status: "支配下"
    },
    {
        name: "立石正広",
        team: "阪神タイガース",
        number: "9",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "2003-11-01",
        status: "支配下"
    },
    {
        name: "ディベイニー",
        team: "阪神タイガース",
        number: "24",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "1997-04-13",
        status: "支配下"
    },
    {
        name: "谷端将伍",
        team: "阪神タイガース",
        number: "25",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "2004-03-17",
        status: "支配下"
    },
    {
        name: "糸原健斗",
        team: "阪神タイガース",
        number: "33",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "1992-11-11",
        status: "支配下"
    },
    {
        name: "小幡竜平",
        team: "阪神タイガース",
        number: "38",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "2000-09-21",
        status: "支配下"
    },
    {
        name: "佐野大陽",
        team: "阪神タイガース",
        number: "45",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "2002-02-14",
        status: "支配下"
    },
    {
        name: "山田脩也",
        team: "阪神タイガース",
        number: "52",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "2005-08-20",
        status: "支配下"
    },
    {
        name: "百﨑蒼生",
        team: "阪神タイガース",
        number: "56",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "2005-09-11",
        status: "支配下"
    },
    {
        name: "植田海",
        team: "阪神タイガース",
        number: "62",
        position: "内野手",
        batsThrows: "右投左右",
        birth: "1996-04-19",
        status: "支配下"
    },
    {
        name: "髙寺望夢",
        team: "阪神タイガース",
        number: "67",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "2002-10-17",
        status: "支配下"
    },

    // 外野手
    {
        name: "森下翔太",
        team: "阪神タイガース",
        number: "1",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "2000-08-14",
        status: "支配下"
    },
    {
        name: "近本光司",
        team: "阪神タイガース",
        number: "5",
        position: "外野手",
        batsThrows: "左投左打",
        birth: "1994-11-09",
        status: "支配下"
    },
    {
        name: "濱田太貴",
        team: "阪神タイガース",
        number: "32",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "2000-09-04",
        status: "支配下"
    },
    {
        name: "岡城快生",
        team: "阪神タイガース",
        number: "34",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "2003-06-23",
        status: "支配下"
    },
    {
        name: "井坪陽生",
        team: "阪神タイガース",
        number: "40",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "2005-03-17",
        status: "支配下"
    },
    {
        name: "島田海吏",
        team: "阪神タイガース",
        number: "53",
        position: "外野手",
        batsThrows: "右投左打",
        birth: "1996-02-06",
        status: "支配下"
    },
    {
        name: "前川右京",
        team: "阪神タイガース",
        number: "58",
        position: "外野手",
        batsThrows: "左投左打",
        birth: "2003-05-18",
        status: "支配下"
    },
    {
        name: "小野寺暖",
        team: "阪神タイガース",
        number: "60",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "1998-03-17",
        status: "支配下"
    },
    {
        name: "豊田寛",
        team: "阪神タイガース",
        number: "61",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "1997-04-28",
        status: "支配下"
    },
    {
        name: "福島圭音",
        team: "阪神タイガース",
        number: "92",
        position: "外野手",
        batsThrows: "右投左打",
        birth: "2001-10-06",
        status: "支配下"
    },
    {
        name: "ガルシア",
        team: "阪神タイガース",
        number: "94",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "1998-01-07",
        status: "支配下"
    },
    // =========================
    // 読売ジャイアンツ
    // =========================

    // 投手
    {
        name: "田中将大",
        team: "読売ジャイアンツ",
        number: "11",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1988-11-01",
        status: "支配下"
    },
    {
        name: "大勢",
        team: "読売ジャイアンツ",
        number: "15",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1999-06-29",
        status: "支配下"
    },
    {
        name: "西舘勇陽",
        team: "読売ジャイアンツ",
        number: "17",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2002-03-11",
        status: "支配下"
    },
    {
        name: "山﨑伊織",
        team: "読売ジャイアンツ",
        number: "19",
        position: "投手",
        batsThrows: "右投左打",
        birth: "1998-10-10",
        status: "支配下"
    },
    {
        name: "戸郷翔征",
        team: "読売ジャイアンツ",
        number: "20",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2000-04-04",
        status: "支配下"
    },
    {
        name: "竹丸和幸",
        team: "読売ジャイアンツ",
        number: "21",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2002-02-26",
        status: "支配下"
    },
    {
        name: "代木大和",
        team: "読売ジャイアンツ",
        number: "25",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2003-09-08",
        status: "支配下"
    },
    {
        name: "ウィットリー",
        team: "読売ジャイアンツ",
        number: "26",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1997-09-15",
        status: "支配下"
    },
    {
        name: "ハワード",
        team: "読売ジャイアンツ",
        number: "28",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1996-07-28",
        status: "支配下"
    },
    {
        name: "田和廉",
        team: "読売ジャイアンツ",
        number: "30",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2003-05-02",
        status: "支配下"
    },
    {
        name: "赤星優志",
        team: "読売ジャイアンツ",
        number: "31",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1999-07-02",
        status: "支配下"
    },
    {
        name: "山城京平",
        team: "読売ジャイアンツ",
        number: "36",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2003-09-20",
        status: "支配下"
    },
    {
        name: "中川皓太",
        team: "読売ジャイアンツ",
        number: "41",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1994-02-24",
        status: "支配下"
    },
    {
        name: "マタ",
        team: "読売ジャイアンツ",
        number: "42",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1999-05-03",
        status: "支配下"
    },
    {
        name: "則本昂大",
        team: "読売ジャイアンツ",
        number: "43",
        position: "投手",
        batsThrows: "右投左打",
        birth: "1990-12-17",
        status: "支配下"
    },
    {
        name: "田中瑛斗",
        team: "読売ジャイアンツ",
        number: "45",
        position: "投手",
        batsThrows: "右投左打",
        birth: "1999-07-13",
        status: "支配下"
    },
    {
        name: "又木鉄平",
        team: "読売ジャイアンツ",
        number: "46",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1999-02-12",
        status: "支配下"
    },
    {
        name: "森田駿哉",
        team: "読売ジャイアンツ",
        number: "47",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1997-02-11",
        status: "支配下"
    },
    {
        name: "ルシアーノ",
        team: "読売ジャイアンツ",
        number: "48",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2000-02-15",
        status: "支配下"
    },
    {
        name: "バルドナード",
        team: "読売ジャイアンツ",
        number: "49",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1993-02-01",
        status: "支配下"
    },
    {
        name: "高梨雄平",
        team: "読売ジャイアンツ",
        number: "53",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1992-07-13",
        status: "支配下"
    },
    {
        name: "松浦慶斗",
        team: "読売ジャイアンツ",
        number: "54",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2003-07-01",
        status: "支配下"
    },
    {
        name: "北浦竜次",
        team: "読売ジャイアンツ",
        number: "56",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2000-01-12",
        status: "支配下"
    },
    {
        name: "宮原駿介",
        team: "読売ジャイアンツ",
        number: "57",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2002-09-12",
        status: "支配下"
    },
    {
        name: "船迫大雅",
        team: "読売ジャイアンツ",
        number: "58",
        position: "投手",
        batsThrows: "右投左打",
        birth: "1996-10-16",
        status: "支配下"
    },
    {
        name: "横川凱",
        team: "読売ジャイアンツ",
        number: "62",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2000-08-30",
        status: "支配下"
    },
    {
        name: "泉圭輔",
        team: "読売ジャイアンツ",
        number: "63",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1997-03-02",
        status: "支配下"
    },
    {
        name: "山田龍聖",
        team: "読売ジャイアンツ",
        number: "64",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2000-09-07",
        status: "支配下"
    },
    {
        name: "石川達也",
        team: "読売ジャイアンツ",
        number: "65",
        position: "投手",
        batsThrows: "左投右打",
        birth: "1998-04-15",
        status: "支配下"
    },
    {
        name: "平内龍太",
        team: "読売ジャイアンツ",
        number: "66",
        position: "投手",
        batsThrows: "右投右打",
        birth: "1998-08-01",
        status: "支配下"
    },
    {
        name: "堀田賢慎",
        team: "読売ジャイアンツ",
        number: "91",
        position: "投手",
        batsThrows: "右投右打",
        birth: "2001-05-21",
        status: "支配下"
    },
    {
        name: "マルティネス",
        team: "読売ジャイアンツ",
        number: "92",
        position: "投手",
        batsThrows: "右投左打",
        birth: "1996-10-11",
        status: "支配下"
    },
    {
        name: "井上温大",
        team: "読売ジャイアンツ",
        number: "97",
        position: "投手",
        batsThrows: "左投左打",
        birth: "2001-05-13",
        status: "支配下"
    },
    {
        name: "小笠原慎之介",
        team: "読売ジャイアンツ",
        number: "98",
        position: "投手",
        batsThrows: "左投左打",
        birth: "1997-10-08",
        status: "支配下"
    },

    // 捕手
    {
        name: "甲斐拓也",
        team: "読売ジャイアンツ",
        number: "10",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "1992-11-05",
        status: "支配下"
    },
    {
        name: "小林誠司",
        team: "読売ジャイアンツ",
        number: "22",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "1989-06-07",
        status: "支配下"
    },
    {
        name: "大城卓三",
        team: "読売ジャイアンツ",
        number: "24",
        position: "捕手",
        batsThrows: "右投左打",
        birth: "1993-02-11",
        status: "支配下"
    },
    {
        name: "岸田行倫",
        team: "読売ジャイアンツ",
        number: "27",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "1996-10-10",
        status: "支配下"
    },
    {
        name: "郡拓也",
        team: "読売ジャイアンツ",
        number: "37",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "1998-04-25",
        status: "支配下"
    },
    {
        name: "山瀬慎之助",
        team: "読売ジャイアンツ",
        number: "67",
        position: "捕手",
        batsThrows: "右投右打",
        birth: "2001-05-04",
        status: "支配下"
    },
        // =========================
    // 読売ジャイアンツ 内野手
    // =========================

    {
        name: "吉川尚輝",
        team: "読売ジャイアンツ",
        number: "2",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "1995-02-08",
        status: "支配下"
    },
    {
        name: "坂本勇人",
        team: "読売ジャイアンツ",
        number: "6",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "1988-12-14",
        status: "支配下"
    },
    {
        name: "門脇誠",
        team: "読売ジャイアンツ",
        number: "5",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "2001-01-08",
        status: "支配下"
    },
    {
        name: "岡本和真",
        team: "読売ジャイアンツ",
        number: "25",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "1996-06-30",
        status: "支配下"
    },
    {
        name: "中山礼都",
        team: "読売ジャイアンツ",
        number: "40",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "2002-04-12",
        status: "支配下"
    },
    {
        name: "増田陸",
        team: "読売ジャイアンツ",
        number: "61",
        position: "内野手",
        batsThrows: "右投右打",
        birth: "2000-02-21",
        status: "支配下"
    },
    {
        name: "荒巻悠",
        team: "読売ジャイアンツ",
        number: "60",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "2002-03-22",
        status: "支配下"
    },
    {
        name: "泉口友汰",
        team: "読売ジャイアンツ",
        number: "35",
        position: "内野手",
        batsThrows: "右投左打",
        birth: "1999-05-17",
        status: "支配下"
    },
        // =========================
    // 読売ジャイアンツ 外野手
    // =========================

    {
        name: "丸佳浩",
        team: "読売ジャイアンツ",
        number: "8",
        position: "外野手",
        batsThrows: "右投左打",
        birth: "1989-04-11",
        status: "支配下"
    },
    {
        name: "長野久義",
        team: "読売ジャイアンツ",
        number: "7",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "1984-12-06",
        status: "支配下"
    },
    {
        name: "浅野翔吾",
        team: "読売ジャイアンツ",
        number: "51",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "2004-11-24",
        status: "支配下"
    },
    {
        name: "オコエ瑠偉",
        team: "読売ジャイアンツ",
        number: "9",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "1997-07-21",
        status: "支配下"
    },
    {
        name: "萩尾匡也",
        team: "読売ジャイアンツ",
        number: "12",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "2000-12-28",
        status: "支配下"
    },
    {
        name: "松本剛",
        team: "読売ジャイアンツ",
        number: "31",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "1993-08-11",
        status: "支配下"
    },
    {
        name: "キャベッジ",
        team: "読売ジャイアンツ",
        number: "13",
        position: "外野手",
        batsThrows: "右投左打",
        birth: "1997-07-19",
        status: "支配下"
    },
    {
        name: "岡田悠希",
        team: "読売ジャイアンツ",
        number: "38",
        position: "外野手",
        batsThrows: "右投左打",
        birth: "2000-01-19",
        status: "支配下"
    },
    {
        name: "鈴木大和",
        team: "読売ジャイアンツ",
        number: "55",
        position: "外野手",
        batsThrows: "右投右打",
        birth: "1999-06-30",
        status: "支配下"
    }
];
