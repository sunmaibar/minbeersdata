const beersData = [{
        name: "蜂蜜啤酒",
        factory: "台灣Taiwan",
        type: "Honey Lager",
        species: "Honey Lager",
        ingredient: ["水", "大麥芽", "小麥芽", "龍眼蜜", "酵母", "啤酒花"],
        alc: "ALC. 5.0 BY VOL",
        photo: "http://www.sunmai.com/wp-content/uploads/2018/08/-e1536925816196.png"
    },
    {
        name: "硬蕊覆盆莓",
        factory: "台灣Taiwan",
        type: "Raspberry Ale",
        species: "RASPBERRY ALE",
        ingredient: ["水", "大麥芽", "覆盆莓", "龍眼蜜", "酵母", "啤酒花", "黑胡蘿蔔濃縮液"],
        alc: "ALC. 4.5 BY VOL",
        photo: "http://www.sunmai.com/wp-content/uploads/2018/08/-e1536929353438.png"
    },
    {
        name: "雷鬼IPA",
        factory: "台灣Taiwan",
        type: "Rye IPA",
        species: "RYE IPA",
        ingredient: ["水", "大麥芽", "酵母", "啤酒花"],
        alc: "ALC. 6.5 BY VOL",
        photo: "http://www.sunmai.com/wp-content/uploads/2018/08/IPA-e1536929459104.png"
    },
    {
        name: "瞪鞋咖啡",
        factory: "台灣Taiwan",
        type: "Coffee Stout",
        species: "COFFEE STOUT",
        ingredient: ["水", "大麥芽", "烘焙大麥", "酵母", "咖啡", "啤酒花"],
        alc: "ALC. 5.1 BY VOL",
        photo: "http://www.sunmai.com/wp-content/uploads/2018/08/-e1536929543742.png"
    }
];

function foods(foods) {
    return `
        <h4 class="item">使用原料</h4>
        <p>${foods.map(function (item) {
            return `${item}`
        }).join(",")}</p>
        
    
    `
}

function beerTemplate(beer) {
    return `
    <div class="beer">
        <img class="beer-photo" src="${beer.photo}">
        

        <h2 class="beer-name">${beer.name} <span class="species">(${beer.species})</span></h2>
        <p><strong>產地:</strong> ${beer.factory}</p>
        <p><strong>風格:</strong> ${beer.type}</p>
        <p><strong>酒精度:</strong> ${beer.alc}</p>
        ${beer.ingredient ? foods(beer.ingredient) : ""}
        
        

    </div>
    `
}


document.getElementById("app").innerHTML = `
    <h1 class="app-title">總共有${beersData.length}款酒</h1>
    ${beersData.map(beerTemplate).join("")}
    <p class="footer">更新日期2019/03/13 &#9400;品牌事業處大仁哥製作</p>
`