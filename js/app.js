const loadData = number =>{
    const url = `https://api.alquran.cloud/v1/surah/${number}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySurah(data.data));
}

const displaySurah = surah =>{
    const {englishName, number, numberOfAyahs, ayahs} = surah;
    // console.log(surah)
    setInnerTextById('name', englishName);
    setInnerTextById('ayat-No', number);
    setInnerTextById('number-of-ayat', numberOfAyahs);
    const surahCcontainer = document.getElementById('ayat-container');
    surahCcontainer.innerHTML = '';
    ayahs.forEach(ayah => {
        // console.log(ayah.text);
        const p = document.createElement('p');
        p.innerText = `${ayah.numberInSurah}. ${ayah.text}`;
        surahCcontainer.appendChild(p)
    }); 
};

document.getElementById('btn-search').addEventListener('click', function(){
    const searchFeild =document.getElementById('search-feild');
    const number = searchFeild.value;
    loadData(number)
})

const setInnerTextById = (id, text) =>{
    document.getElementById(id).innerText = text;
}


