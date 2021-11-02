// render 
// render currentSong
// play , pause 
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// const playerList = 

const navBarItem = $$('.nav-bar__item')
const navBarList = $$('.nav-bar__list')
const player = $$('.player')
// const player2 = $('.player2')
const currentSongImg = $('.playing__nav-img-item')
const currentSongName = $('.playing__nav-name-song')
const currentSongSinger = $('.playing__nav-name-singer')
const playPause = $('.play-pause')
const audio = $('#audio')
const progress = $('.progress')
const currentPercent = $('.currentPercent')
const nextBtn = $('.nextbtn')
const preBtn = $('.prebtn')
const randomBtn = $('.randombtn')
const repeatBtn = $('.repeatbtn')

const app = {
    isPlay: false,
    isRandom: false,
    isRepeat: false,
    currentIndex: 0,

    songs:
        [
            {
                id: 1,
                name: 'Đông Kiếm Em ',
                singer: ' Vũ. ',
                img: './assets//img/vietnam/vu.jpg',
                music: './assets//music/vietnam/ĐÔNG KIẾM EM - Vũ. (Original).mp3',
                time: '4:06',
            },
            {
                id: 2,
                name: ' Bài Này Chill Phết ',
                singer: ' Đen Vâu ft. MIN',
                img: './assets//img/vietnam/denvau.png',
                music: './assets//music/vietnam/Đen ft. MIN - Bài Này Chill Phết (M-V).mp3',
                time: '4:33',
            },
            {
                id: 3,
                name: 'Gặp gỡ, Yêu đương và Được bên em ',
                singer: 'Phan Mạnh Quỳnh',
                img: './assets//img/vietnam/pmq.png',
                music: './assets//music/vietnam/Gặp gỡ, Yêu đương và Được bên em - Phan Mạnh Quỳnh (Official MV).mp3',
                time: '4:12',
            },
            {
                id: 4,
                name: 'Đưa Nhau Đi Trốn',
                singer: ' Đen Vâu ft. Linh Cáo',
                img: './assets//img/vietnam/denvau.png',
                music: './assets//music/vietnam/Đen - Đưa Nhau Đi Trốn ft. Linh Cáo [M-V].mp3',
                time: '4:00',
            },
            
            
            {
                id: 5,
                name: 'Trốn Tìm',
                singer: ' Đen Vâu ft. MTV band',
                img: './assets//img/vietnam/denvau.png',
                music: './assets//music/vietnam/Đen - Trốn Tìm ft. MTV band (M-V).mp3',
                time: '4:12',
            },
            
            
            {
                id: 6,
                name: 'NHẠT ',
                singer: 'Phan Mạnh Quỳnh',
                img: './assets//img/vietnam/pmq.png',
                music: './assets//music/vietnam/NHẠT - Phan Mạnh Quỳnh - AUDIO.mp3',
                time: '3:27',
            },
            {
                id: 7,
                name: 'Nàng Thơ',
                singer: 'Hoàng Dũng',
                img: './assets//img/vietnam/nangtho.png',
                music: './assets//music/vietnam/Nàng Thơ - Hoàng Dũng - Official MV.mp3',
                time: '5:21',
                
            },
            {
                id: 8,
                name: 'Titanium',
                singer: 'David Guetta ft. Sia',
                img: './assets//img/usuk/titanium.png',
                music: './assets//music/usuk/David Guetta - Titanium ft. Sia (Official Video).mp3',
                time: '4:05',
                
            },
            {
                id: 9,
                name: 'Bad Liar',
                singer: 'Imagine Dragons',
                img: './assets//img/usuk/badliar.jpg',
                music: './assets//music/usuk/Imagine Dragons - Bad Liar.mp3',
                time: '4:44',
                
            },
            {
                id: 10,
                name: 'Believer',
                singer: 'Imagine Dragons',
                img: './assets//img/usuk/beliver.png',
                music: './assets//music/usuk/Imagine Dragons - Believer.mp3',
                time: '3:36',
                
            },
            {
                id: 11,
                name: 'Legends Never Die',
                singer: 'League of Legends',
                img: './assets//img/usuk/lol.png',
                music: './assets//music/usuk/Legends Never Die (ft. Against The Current) - Worlds 2017 - League of Legends.mp3',
                time: '2:59',
                
            },
            {
                id: 12,
                name: 'Move Your Body (Alan Walker Remix)',
                singer: 'Sia',
                img: './assets//img/usuk/sia.jpg',
                music: './assets//music/usuk/Sia - Move Your Body (Alan Walker Remix).mp3',
                time: '4:39',
                
            },
            {
                id: 13,
                name: 'Hall of Fame',
                singer: 'The Script',
                img: './assets//img/usuk/halloffame.png',
                music: './assets//music/usuk/The Script - Hall of Fame (Official Video) ft. will.i.am.mp3',
                time: '3:53',
                
            },
            {
                id: 14,
                name: 'Try - Steve Wuaten Remix',
                singer: 'P!nk',
                img: './assets//img/usuk/try.png',
                music: './assets//music/usuk/Try - P!nk - Steve Wuaten Remix (Lyrics + Vietsub) - TikTok ♫.mp3',
                time: '2:44',
                
            },
            {
                id: 15,
                name: 'Victory',
                singer: 'Two Steps From Hell',
                img: './assets//img/usuk/vitory.png',
                music: './assets//music/usuk/Two Steps From Hell - Victory.mp3',
                time: '5:28',
                
            },
            {
                id: 16,
                name: 'Unstoppable',
                singer: 'Sia',
                img: './assets//img/usuk/sia.jpg',
                music: './assets//music/usuk/Unstoppable - Sia (Lyrics + Vietsub) ♫.mp3',
                time: '4:11',
                
            },
            {
                id: 17,
                name: 'Nevada',
                singer: 'Vicetone',
                img: './assets//img/usuk/nevada.png',
                music: './assets//music/usuk/Vicetone - Nevada (feat. Cozi Zuehlsdorff) [Monstercat Official Music Video].mp3',

                time: '3:28',
            },
            {
                id: 18,
                name: 'Warriors',
                singer: 'Imagine Dragons',
                img: './assets//img/usuk/warrios.jpg',
                music: './assets//music/usuk/Warriors (ft. Imagine Dragons) - Worlds 2014 - League of Legends.mp3',
                time: '2:50',
                
            },
            {
                id: 19,
                name: 'Centuries',
                singer: 'Fall Out Boy',
                img: './assets//img/usuk/centuries.png',
                music: './assets//music/usuk/Fall Out Boy - Centuries (Official Music Video).mp3',
                time: '4:31',
                
            },
          
           
        ],

    
        // load bai hat hien tai
    loadCurrentSong: function(){
        currentSongImg.style.backgroundImage = `url(${app.songs[app.currentIndex].img})`
        currentSongName.textContent = `${app.songs[app.currentIndex].name}`,
        audio.src = `${app.songs[app.currentIndex].music}`
        currentSongSinger.textContent = `${app.songs[app.currentIndex].singer}`
    },
    // tabs: function(){
    //     player.forEach(function(tab){
    //         tab.onclick = function(){
    //             console.log(123);
    //         }
    //     })
        
    // },
    // load thoi gian chay
    loadTime: function(){
        audio.ontimeupdate = function(){
            // dung ontimeupdate de tranh  audio.duration = NaN
            audio.onloadedmetadata = function(){ 
                const s = Math.floor(audio.duration % 60) 
                const m = Math.floor((audio.duration - s) / 60) 
                if (s < 10){
                    $('.durationTime').textContent = m + ':' + '0' + s
                }
                else {
                    $('.durationTime').textContent = m + ':' + s
                }
            }
            
             // thoi gian hien tai
            const s2 = Math.floor(audio.currentTime % 60)
            const m2 = Math.floor((audio.currentTime - s2) / 60) 
            if(s2 < 10 ){
                $('.currentTime').textContent = m2 + ':' + '0' + s2
            }
            else{
            $('.currentTime').textContent = m2 + ':' + s2
            }
            // tien do bai hat
            const currentTime = audio.currentTime
            const durationTime = audio.duration
            const percentTime = (currentTime  / durationTime) * 100
            if(durationTime){
                $('.progress').ariaValueNow = percentTime
                $('.currentPercent').style.width = percentTime + '%'
            }
            
        }
        
    },
    seek: function(){
        progress.onclick = function(e){
            const percentProgress =( e.offsetX / progress.offsetWidth) * 100
            $('.currentPercent').style.width = percentProgress + '%'
            audio.currentTime = (percentProgress * audio.duration) / 100
            $('.play-pause').classList.add('playing')
            audio.play()
        }
    },
    
    // random 
    random: function(){
        const randomSong = Math.floor(Math.random() * app.songs.length) 
        const randomSong2 = Math.floor(Math.random() * app.songs.length) 

        
        if( app.currentIndex = randomSong){
            app.currentIndex = randomSong2
        }
        else{
            app.currentIndex = randomSong
        }
        app.loadCurrentSong()
    },
    repeat: function(){
        app.currentIndex = app.currentIndex
        app.loadCurrentSong()
    },
   // next play 
   nextPlay: function(){
    app.currentIndex++;
    if(app.currentIndex > app.songs.length - 1){
        app.currentIndex = 0
    }
    app.loadCurrentSong()
    },
    prePlay: function(){
        app.currentIndex--;
        console.log(app.currentIndex);
        if(app.currentIndex < 0){
            app.currentIndex = app.songs.length - 1
        }
        if(app.isRandom){
            app.songs[app.currentIndex] = app.songs2[0]
        }
        app.loadCurrentSong()
        },
      
    handleEvent: function(){ 
        navBarItem.forEach(function(navBar){
        navBar.onclick = function(){
            $('.nav-bar__item.text-active').classList.remove('text-active')
            this.classList.add('text-active')

            player.forEach(function(play){
                $('.player.block').classList.remove('block')
                play.classList.add('block')
            })
        }
        })

        // play pause
        playPause.onclick = function(){
            if(app.isPlay === false){
                audio.play()
            }
            else {
                audio.pause()
            }
        }
        audio.onplay = function(){
            app.isPlay = true
            $('.play-pause').classList.add('playing')
           
        }
        audio.onpause = function(){
            $('.play-pause').classList.remove('playing')
            app.isPlay = false
        }
        // khi ket thuc se lam
        audio.onended =function(){
            
            if(app.isRepeat === true){
                audio.play()
            }
            else {
                nextBtn.click()
            }
        }
        nextBtn.onclick = function(){
            if(app.isRandom){
                app.random()
               
            }
            else{
               app.nextPlay() 
            }
            audio.play()

        }
        preBtn.onclick = function(){
            
            if(app.isRandom){
                app.random()
            }
            else{
                app.prePlay()
            }
            audio.play()
        }
        randomBtn.onclick = function(){
            
            app.isRandom = !app.isRandom
            $('.random-icon').classList.toggle('active', app.isRandom)
        }

        repeatBtn.onclick = function(){
            app.isRepeat = !app.isRepeat
            $('.repeat-icon').classList.toggle('active', app.isRepeat)
        }

        $('.player-list').onclick = function(e){

           const songPlayOnClick =  e.target.dataset.index
            app.currentIndex = songPlayOnClick
           app.loadCurrentSong()
           audio.play()
        }
    },
    renderTime: function(){
        audio.onloadedmetadata = function(){
            const s = Math.floor(audio.duration % 60) 
            const m = Math.floor((audio.duration - s) / 60) 
            if (s < 10){
                $('.durationTime').textContent = m + ':' + '0' + s
            }
            else {
                $('.durationTime').textContent = m + ':' + s
            }
        }
    },
    render: function(){
        
        const html = app.songs.map(function(song1, index){
            return `
                <div class="player-item " data-index = "${index}">
                    <div class="serial" data-index = "${index}" >${song1.id}</div>
                    <div class="name-song flex-1" data-index = "${index}">
                    <div class="img-song" data-index = "${index}" style="background-image: url(${song1.img}) ;"></div>
                        <span class="name-song__text" data-index = "${index}"> ${song1.name} </span>
                    </div>
                    <div class="name-singer flex-1" data-index = "${index}">${song1.singer}</div>
                    <div class="time-song flex-1" data-index = "${index}">${song1.time}</div>
                </div>
            `      
        })
        $('.player-list').innerHTML = html.join('')

        
       
    },
    start: function(){
        app.render()
        app.handleEvent()
        app.loadCurrentSong()
        app.loadTime()
        app.seek()
        app.renderTime()
        // app.tabs()
    }
}

app.start()


