document.addEventListener('DOMContentLoaded', () => {
    

    const medals = ['None', 'Beginner', 'Intermediate', 'Pro I', 'Pro II', 'Pro III', 'Master degree', 'Veteran', 'Commentator', 'VIP', 'Record holder', 'Teacher', 'Explainer', 'Debugger', 'E.A.G.L.E.', 'Quantum Computer'];

    let myMedalsInner = document.getElementById('myMedalsInner');


    for (i=1; i<parseInt(sessionStorage.getItem('medals')); i++) {
        
            
        console.log(sessionStorage.getItem('medals'));

        // if (parseInt(sessionStorage.getItem('medals')) == i) {
            
            
            medalsInnerItem = `<div class='smoothscrolling medals__inner-item'>`;
            medalsInnerItem += `<div class='medals__inner-item-image'><img src='./media/icons/content/medals/${i}.svg' alt='medal${i}'></div>`;
            medalsInnerItem += `<div class='medals__inner-item-texts'>`;        

            let medalTitleColor = '';
            if (i == 0) { medalTitleColor = ''; }
            if (i == 1) { medalTitleColor = 'gray'; }
            if (i == 2) { medalTitleColor = 'yellow'; }
            if (i == 3) { medalTitleColor = 'yellow'; }
            if (i == 4) { medalTitleColor = 'yellow'; }
            if (i == 5) { medalTitleColor = 'yellow'; }
            if (i == 6) { medalTitleColor = 'red'; }
            if (i == 7) { medalTitleColor = 'purple'; }
            if (i == 8) { medalTitleColor = 'gray'; }
            if (i == 9) { medalTitleColor = 'gold'; }
            if (i == 10) { medalTitleColor = 'dark-green'; }
            if (i == 11) { medalTitleColor = 'dark-green'; }
            if (i == 12) { medalTitleColor = 'dark-green'; }
            if (i == 13) { medalTitleColor = 'dark-green'; }
            if (i == 14) { medalTitleColor = 'white'; }
            if (i == 15) { medalTitleColor = 'cyan'; }

            medalsInnerItem += `<h2><span class="${medalTitleColor}">${medals[i]}</span></h2>`;
                        
            medalsInnerItem += `<p>${Math.floor(Math.random() * (2025 - 2018 + 1)) + 2018}</p>`;
            medalsInnerItem += `</div>`;
            medalsInnerItem += `</div>`;

            myMedalsInner.innerHTML += medalsInnerItem;

            console.log(myMedalsInner);
        // }
    }

    if (sessionStorage.getItem('medals') == 0) {
        
        myMedalsInner.innerHTML = `<h2>У вас пока что нет достижений.</h2>`;
    }
    
});