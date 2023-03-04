// let allData = [];
// let name = [];
const loadData = number =>{
    const url = `https://api.alquran.cloud/v1/surah/${number}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displaySurah(data.data)
    });
}

const displaySurah = surah =>{
    const {englishName, number, numberOfAyahs, ayahs} = surah;
    // console.log(numberOfAyahs)
    setInnerTextById('name', englishName);
    setInnerTextById('surah-No', number);
    setInnerTextById('number-of-ayat', numberOfAyahs);
    const surahCcontainer = document.getElementById('ayat-container');
    surahCcontainer.innerHTML = '';
    ayahs.forEach(ayah => {
        
        const p = document.createElement('p');
        p.innerText = `${ayah.numberInSurah}. ${ayah.text}`;
        surahCcontainer.appendChild(p)
    }); 
};

document.getElementById('btn-search').addEventListener('click', function(){
    const searchFeild = document.getElementById('search-feild');
    const number = searchFeild.value;
    loadData(number)
})

const setInnerTextById = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const loadSurah = () =>{
    const url = `https://api.alquran.cloud/v1/surah`;
    fetch(url)
    .then(res => res.json())
    .then(data => loadSurahName(data.data))
}
// data-bs-toggle="modal" data-bs-target="#surahModal"
const loadSurahName = surahs =>{
    // console.log(surahs)
    const surahName = document.getElementById('surah-Name');
    surahs.forEach(surah =>{
        // console.log(surah)
        const li = document.createElement('li');
        li.innerHTML =`<a onclick="loadSurahNumber(${surah.number})" class ="text-decoration-none" href="" data-bs-toggle="modal" data-bs-target="#surahModal">${surah.englishName}</a>`;


        surahName.appendChild(li);
    });
};

const loadSurahNumber = number =>{
    // console.log(number)
    const url =`https://api.alquran.cloud/v1/surah/${number}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySurahInModal(data.data));
}

const displaySurahInModal = data =>{
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = '';
    const surahModalLabel = document.getElementById('surahModalLabel');
    const {ayahs} = data;
    ayahs.forEach(ayah =>{
        surahModalLabel.innerText = `${data.number} . ${data.englishName}`
        // console.log(ayah);
        const {numberInSurah, text} = ayah;
        const p = document.createElement('p');
        p.innerText =`${numberInSurah}.  ${text}`;

        modalBody.appendChild(p);

    });
}

