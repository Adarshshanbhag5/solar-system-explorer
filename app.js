const slider = document.querySelector('.slider');
const sliderMain = document.querySelectorAll('.slider .all-planet');
const sliderContent = Array.from(document.querySelectorAll('.slider .all-planet .p--container'));
const mainBtn = document.querySelector('.fixed-hidden-btn');
const controls = document.querySelectorAll('.planet-list li');
const controlStyle = document.querySelectorAll('.container .pname');
const indicatorParent = document.querySelector('.planet-list ul');

const planetName = document.querySelectorAll('.planet--name');
const planetSmallInfo = document.querySelector('.planet-small-info p');
const mainDetails = document.querySelectorAll('.details');
const facts = document.querySelectorAll('.facts');
const innerHead = document.querySelector('.inner-heading');
const backModal = document.querySelector('.modal-back');
const readMorePage = document.querySelector('.read-more-page');
const readMore = document.querySelector('.read--more');
const backBtn = document.querySelector('#back-btn');
console.log(backModal);
console.log(readMorePage);


let smallInfoPara = [
    'Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar systm.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    'The first planet to be discovered by scientists. The planet is notable for its dramatic tilt, which causes its axis to point nearly directly at the sun.',
    'Saturn is the sixth planet from the sun and the second largest planet in the solar systm. Saturn was the Roman name for Cronus, the lord of the Titans.',
    'Jupiter is the largest planet in the solar systm. Fittingly, it was named after the king of the gods in Roman mythology.',
    'Fourth planet from the Sun and the second smallest planet in the solar systm. Named after the Roman god of war often described as the “Red Planet”.',
    'Planet Earth. It is the only planet that contains water, atmosphere and life. ',
    'Named for the Roman goddess of love and beauty. In ancient times, Venus was often thought to be two different stars, the evening star and the morning star.',
    'the closest planet to the sun. it circles the sun faster than all the other planets. which is why romans names it after their swift-footed messenger god.'
];

let mainHead = [
    `pluto`,
    `neptune`,
    `uranus`,
    `saturn`,
    `jupiter`,
    `mars`,
    `earth`,
    `venus`,
    `mercury`
];

let head1 = [
    `Pluto is named after the Greek god of the underworld.`,
    `Neptune was not known to the ancients.`,
    `Uranus was officially discovered by Sir William Herschel in 1781.`,
    `Saturn can be seen with the naked eye.`,
    `Jupiter is the fourth brightest object in the solar system`,
    `Mars and Earth have approximately the same landmass.`,
    `The Earth’s rotation is gradually slowing.`,
    `A day on Venus lasts longer than a year.`,
    `A year on Mercury is just 88 days long.`
];

let head2 = [
    `Pluto was reclassified from a planet to a dwarf planet in 2006.`,
    `Neptune spins on its axis very rapidly.`,
    `Uranus turns on its axis once every 17 hours, 14 minutes.`,
    `Saturn was known to the ancients, including the Babylonians and Far Eastern observers.`,
    `The ancient Babylonians were the first to record their sightings of Jupiter.`,
    `Mars is home to the tallest mountain in the solar systm.`,
    `The Earth was once believed to be the centre of the universe.`,
    `Venus rotates in the opposite direction to most other planets.`,
    `Mercury is the smallest planet in the Solar System.`
];

let head3 = [
    `Pluto was discovered on February 18th, 1930 by the Lowell Observatory.`,
    `Neptune is the smallest of the ice giants.`,
    `Uranus makes one trip around the Sun every 84 Earth years.`,
    `Saturn is the flattest planet.`,
    `Jupiter has the shortest day of all the planets.`,
    `Only 18 missions to Mars have been successful.`,
    `Earth has a powerful magnetic field.`,
    `Venus is the second brightest object in the night sky.`,
    `Mercury is the second densest planet.`
];

let head4 = [
    `Pluto has five known moons.`,
    `The atmosphere of Neptune is made of hydrogen and helium, with some methane.`,
    `Uranus is often referred to as an “ice giant” planet.`,
    `Saturn orbits the Sun once every 29.4 Earth years.`,
    `Jupiter orbits the Sun once every 11.8 Earth years.`,
    `Mars has the largest dust storms in the solar system.`,
    `There is only one natural satellite of the planet Earth.`,
    `Atmospheric pressure on Venus is 92 times greater than the Earth’s.`,
    `Mercury has wrinkles.`
];

let para1 = [
    `Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar systm. It is also one of the largest known members of the Kuiper Belt, a shadowy zone beyond the orbit of Neptune thought to be populated by hundreds of thousands of rocky, icy bodies each larger than 62 miles (100 kilometers) across, along with 1 trillion or more comets.`,
    `Neptune is the eighth planet from the sun. It was the first planet to get its existence predicted by mathematical calculations before it was actually seen through a telescope on Sept. 23, 1846. Irregularities in the orbit of Uranus led French astronomer Alexis Bouvard to suggest that the gravitational pull from another celestial body might be responsible. German astronomer Johann Galle then relied on subsequent calculations to help spot Neptune via telescope. Previously, astronomer Galileo Galilei sketched the planet, but he mistook it for a star due to its slow motion. In accordance with all the other planets seen in the sky, this new world was given a name from Greek and Roman mythology — Neptune, the Roman god of the sea.`,
    `Uranus is the seventh planet from the sun and the first to be discovered by scientists. Although Uranus is visible to the naked eye, it was long mistaken as a star because of the planet's dimness and slow orbit. The planet is also notable for its dramatic tilt, which causes its axis to point nearly directly at the sun.`,
    `Saturn is the sixth planet from the sun and the second largest planet in the solar systm. Saturn was the Roman name for Cronus, the lord of the Titans in Greek mythology. Saturn is the root of the English word "Saturday."`,
    `Jupiter is the largest planet in the solar systm. Fittingly, it was named after the king of the gods in Roman mythology. In a similar manner, the ancient Greeks named the planet after Zeus, the king of the Greek pantheon.`,
    `Mars is the fourth planet from the sun. Befitting the red planet's bloody color, the Romans named it after their god of war. The Romans copied the ancient Greeks, who also named the planet after their god of war, Ares. Other civilizations also typically gave the planet names based on its color — for example, the Egyptians named it "Her Desher," meaning "the red one," while ancient Chinese astronomers dubbed it "the fire star.`,
    `Earth, our home, is the third planet from the sun. It is the only planet known to have an atmosphere containing free oxygen, oceans of liquid water on its surface, and, of course, life.`,
    `Venus, the second planet from the sun, is named for the Roman goddess of love and beauty. The planet — the only planet named after a female — may have been named for the most beautiful deity of her pantheon because it shone the brightest of the five planets known to ancient astronomers.`,
    `Mercury is the closest planet to the sun. As such, it circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god.`
];

let para2 = [
    `In 2006, Pluto was reclassified as a dwarf planet, a change widely thought of as a demotion. The question of Pluto's planet status has attracted controversy and stirred debate in the scientific community, and among the general public, since then. In 2017, a science group (including members of the New Horizon mission) proposed a new definition of planethood based on "round objects in space smaller than stars," which would make the number of planets in our solar systm expand from 8 to roughly 100.`,
    `Only one mission has flown by Neptune – Voyager 2 in 1989 – meaning that astronomers have done most studies using ground-based telescopes. Today, there are still many mysteries about the cool, blue planet, such as why its winds are so speedy and why its magnetic field is offset.`,
    `British astronomer William Herschel discovered Uranus accidentally on March 13, 1781, with his telescope while surveying all stars down to those about 10 times dimmer than can be seen by the naked eye. One "star" seemed different, and within a year Uranus was shown to follow a planetary orbit.`,
    `Saturn is the farthest planet from Earth visible to the naked human eye, but it is through a telescope that the planet's most outstanding features can be seen: Saturn's rings. Although the other gas giants in the solar systm — Jupiter, Uranus and Neptune — also have rings, those of Saturn are without a doubt the most extraordinary.`,
    `Jupiter helped revolutionize the way we saw the universe and ourselves in 1610, when Galileo discovered Jupiter's four large moons — Io, Europa, Ganymede and Callisto, now known as the Galilean moons. This was the first time that celestial bodies were seen circling an object other than Earth, major support of the Copernican view that Earth was not the center of the universe.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam fugit tenetur aperiam ipsam eligendi dolorem consectetur corrupti quo dignissimos!`,
    `Earth is the fifth largest of the planets in the solar systm — smaller than the four gas giants, Jupiter, Saturn, Uranusand Neptune, but larger than the three other rocky planets.`,
    `In ancient times, Venus was often thought to be two different stars, the evening star and the morning star — that is, the ones that first appeared at sunset and sunrise. In Latin, they were respectively known as Vesper and Lucifer. In Christian times, Lucifer, or "light-bringer," became known as the name of Satan before his fall. However, further observations of Venus in the space age show a very hellish environment. This makes Venus a very difficult planet to observe from up close, because spacecraft do not survive long on its surface.`,
    `The Sumerians also knew of Mercury since at least 5,000 years ago. It was often associated with Nabu, the god of writing. Mercury was also given separate names for its appearance as both a morning star and as an evening star. Greek astronomers knew, however, that the two names referred to the same body, and Heraclitus, around 500 B.C., correctly thought that both Mercury and Venus orbited the sun, not Earth.`
];

let para3 = [
    `This is a later name for the more well known Hades and was proposed by Venetia Burney an eleven year old schoolgirl from Oxford, England.`,
    `It is not visible to the naked eye and was first observed in 1846. Its position was determined using mathematical predictions. It was named after the Roman god of the sea.`,
    `It is too dim to have been seen by the ancients. At first Herschel thought it was a comet, but several years later it was confirmed as a planet. Herscal tried to have his discovery named “Georgian Sidus” after King George III. The name Uranus was suggested by astronomer Johann Bode. The name comes from the ancient Greek deity Ouranos.`,
    `It is the fifth brightest object in the solar systm and is also easily studied through binoculars or a small telescope.`,
    `Only the Sun, Moon and Venus are brighter. It is one of five planets visible to the naked eye from Earth.`,
    `Even though Mars has only 15% of the Earth’s volume and just over 10% of the Earth’s mass, around two thirds of the Earth’s surface is covered in water. Martian surface gravity is only 37% of the Earth’s (meaning you could leap nearly three times higher on Mars).`,
    `This deceleration is happening almost imperceptibly, at approximately 17 milliseconds per hundred years, although the rate at which it occurs is not perfectly uniform. This has the effect of lengthening our days, but it happens so slowly that it could be as much as 140 million years before the length of a day will have increased to 25 hours.`,
    `It takes 243 Earth days to rotate once on its axis (sidereal day). The planet’s orbit around the Sun takes 225 Earth days, compared to the Earth’s 365. A day on the surface of Venus (solar day) takes 117 Earth days.`,
    `One solar day (the time from noon to noon on the planet’s surface) on Mercury lasts the equivalent of 176 Earth days while the sidereal day (the time for 1 rotation in relation to a fixed point) lasts 59 Earth days. Mercury is nearly tidally locked to the Sun and over time this has slowed the rotation of the planet to almost match its orbit around the Sun. Mercury also has the highest orbital eccentricity of all the planets with its distance from the Sun ranging from 46 to 70 million km.`
];

let para4 = [
    `This is when the IAU formalised the definition of a planet as “A planet is a celestial body that (a) is in orbit around the Sun, (b) has sufficient mass for its self-gravity to overcome rigid body forces so that it assumes a hydrostatic equilibrium (nearly round) shape, and (c) has cleared the neighbourhood around its orbit.”`,
    `Its equatorial clouds take 18 hours to make one rotation. This is because Neptune is not solid body.`,
    `The planet rotates in a retrograde direction, opposite to the way Earth and most other planets turn.`,
    `It is named for the Roman god Saturnus, and was known to the Greeks as Cronus.`,
    `This was around the 7th or 8th century BC. Jupiter is named after the king of the Roman gods. To the Greeks, it represented Zeus, the god of thunder. The Mesopotamians saw Jupiter as the god Marduk and patron of the city of Babylon. Germanic tribes saw this planet as Donar, or Thor.`,
    `Olympus Mons, a shield volcano, is 21km high and 600km in diameter. Despite having formed over billions of years, evidence from volcanic lava flows is so recent many scientists believe it could still be active.`,
    `Due to the apparent movements of the Sun and planets in relation to their viewpoint, ancient scientists insisted that the Earth remained static, whilst other celestial bodies travelled in circular orbits around it. Eventually, the view that the Sun was at the centre of the universe was postulated by Copernicus, though this is also not the case.`,
    `This means that Venus is rotating in the opposite direction to the Sun, this is also know as a retrograde rotation. A possible reason might be a collision in the past with an asteroid or other object that caused the planet to alter its rotational path. It also differs from most other planets in our solar systm by having no natural satellites.`,
    `One of five planets visible with the naked eye a, Mercury is just 4,879 Kilometres across its equator, compared with 12,742 Kilometres for the Earth.`
];

let para5 = [
    `For the 76 years between Pluto being discovered and the time it was reclassified as a dwarf planet it completed under a third of its orbit around the Sun.`,
    `Despite being smaller than Uranus, Neptune has a greater mass. Below its heavy atmosphere, Uranus is made of layers of hydrogen, helium, and methane gases. They enclose a layer of water, ammonia and methane ice. The inner core of the planet is made of rock.`,
    `During some parts of its orbit one or the other of its poles point directly at the Sun and get about 42 years of direct sunlight. The rest of the time they are in darkness.`,
    `Its polar diameter is 90% of its equatorial diameter, this is due to its low density and fast rotation. Saturn turns on its axis once every 10 hours and 34 minutes giving it the second-shortest day of any of the solar systm’s planets.`,
    `It turns on its axis once every 9 hours and 55 minutes. The rapid rotation flattens the planet slightly, giving it an oblate shape.`,
    `As of September 2014 there have been 40 missions to Mars, including orbiters, landers and rovers but not counting flybys. The most recent arrivals include the Mars Curiosity mission in 2012, the MAVEN mission, which arrived on September 22, 2014, followed by the Indian Space Research Organization’s MOM Mangalyaan orbiter, which arrived on September 24, 2014. The next missions to arrive will be the European Space Agency’s ExoMars mission, comprising an orbiter, lander, and a rover, followed by NASA’s InSight robotic lander mission, slated for launch in March 2016 and a planned arrival in September, 2016.`,
    `This phenomenon is caused by the nickel-iron core of the planet, coupled with its rapid rotation. This field protects the Earth from the effects of solar wind.`,
    `Only the Moon is brighter. With a magnitude of between -3.8 to -4.6 Venus is so bright it can be seen during daytime on a clear day.`,
    `Even though the planet is small, Mercury is very dense. Each cubic centimetre has a density of 5.4 grams, with only the Earth having a higher density. This is largely due to Mercury being composed mainly of heavy metals and rock.`
];

let para6 =[
    `The moons are Charon (discovered in 1978,), Hydra and Nix (both discovered in 2005), Kerberos originally P4 (discovered 2011) and Styx originally P5 (discovered 2012) official designations S/2011 (134340) 1 and  S/2012 (134340) 1.`,
    `The methane absorbs red light, which makes the planet appear a lovely blue. High, thin clouds drift in the upper atmosphere.`,
    `Like the other gas giants, it has a hydrogen upper layer, which has helium mixed in. Below that is an icy “mantle, which surrounds a rock and ice core. The upper atmosphere is made of water, ammonia and the methane ice crystals that give the planet its pale blue colour.`,
    `Its slow movement against the backdrop of stars earned it the nickname of “Lubadsagush” from the ancient Assyrians. The name means “oldest of the old”.`,
    `From our point of view on Earth, it appears to move slowly in the sky, taking months to move from one constellation to another.`,
    `They can last for months and cover the entire planet. The seasons are extreme because its elliptical (oval-shaped) orbital path around the Sun is more elongated than most other planets in the solar system.`,
    `As a percentage of the size of the body it orbits, the Moon is the largest satellite of any planet in our solar systm. In real terms, however, it is only the fifth largest natural satellite.`,
    `While its size and mass are similar to Earth, the small asteroids are crushed when entering its atmosphere, meaning no small craters lie on the surface of the planet. The pressure felt by a human on the surface would be equivalent to that experienced deep beneath the sea on Earth.`,
    `As the iron core of the planet cooled and contracted, the surface of the planet became wrinkled. Scientist have named these wrinkles, Lobate Scarps. These Scarps can be up to a mile high and hundreds of miles long.`
];

function textChange(){
    planetSmallInfo.innerText = smallInfoPara[counter];
    innerHead.innerText = mainHead[counter];
    facts[0].innerText = head1[counter];
    facts[1].innerText = head2[counter];
    facts[2].innerText = head3[counter];
    facts[3].innerText = head4[counter];
    
    mainDetails[0].innerText = para1[counter];
    mainDetails[1].innerText = para2[counter];
    mainDetails[2].innerText = para3[counter];
    mainDetails[3].innerText = para4[counter];
    mainDetails[4].innerText = para5[counter];
    mainDetails[5].innerText = para6[counter];
    if(planetSmallInfo.style.animation){
        planetSmallInfo.style.animation = ``;
    }
    else{
    planetSmallInfo.style.animation = `textFade 800ms ease-in forwards`;
    }
}



// console.log(indicatorParent.children[0].firstElementChild.childNodes[3].children[0]);



let counter = 8;
const size = sliderMain[0].clientHeight;

// sliderContent[counter].classList.add('p--active-container');
slider.style.transform = 'translateY('+(-size*counter)+'px)';



controls.forEach((indicator,index)=>{
    indicator.addEventListener('click',()=>{
        counter = index;
        document.querySelector('.inner-text .selected').classList.remove('selected');
        controlStyle[index].classList.add('selected');
        console.log('index is:',index);
        slider.style.transform = 'translateY('+(-size*counter)+'px)';
        document.querySelector('.all-planet .transition-end-class').classList.remove('transition-end-class');
        planetName[counter].classList.add('transition-end-class');                 
        document.querySelector('.all-planet .p--active-container').classList.remove('p--active-container');
        sliderContent[counter].classList.add('p--active-container');
        if( counter === 0){
            mainBtn.style.cursor = 'default';
        }
        else if(counter > 0){
            mainBtn.style.cursor = 'pointer';
        }
        textChange();
    });
});


document.querySelector('.body-wheel-event-div').addEventListener('wheel',(event)=>{
    if(event.deltaY<0){
        if(counter<=0)return;
        counter--;
        document.querySelector('.all-planet .p--active-container').classList.remove('p--active-container');
        sliderContent[counter].classList.add('p--active-container');
        slider.style.transform = 'translateY('+(-size*counter)+'px)';
        document.querySelector('.all-planet .transition-end-class').classList.remove('transition-end-class');
        planetName[counter].classList.add('transition-end-class');
        document.querySelector('.inner-text .selected').classList.remove('selected');
        indicatorParent.children[counter].firstElementChild.childNodes[3].children[0].classList.add('selected');
        console.log('counter:',counter);
        textChange();
        if( counter === 0){
            mainBtn.style.cursor = 'default';
        }
        else if(counter > 0){
            mainBtn.style.cursor = 'pointer';
        }
    }
    if(event.deltaY>0){
        if(counter>=sliderContent.length-1)return;
        counter++;
        document.querySelector('.all-planet .p--active-container').classList.remove('p--active-container');
        sliderContent[counter].classList.add('p--active-container');
        slider.style.transform = 'translateY('+(-size*counter)+'px)';
        document.querySelector('.all-planet .transition-end-class').classList.remove('transition-end-class');
        planetName[counter].classList.add('transition-end-class');
        document.querySelector('.inner-text .selected').classList.remove('selected');
        indicatorParent.children[counter].firstElementChild.childNodes[3].children[0].classList.add('selected');
        console.log('counter:',counter);
        textChange();
        if( counter === 0){
            mainBtn.style.cursor = 'default';
        }
        else if(counter > 0){
            mainBtn.style.cursor = 'pointer';
        }
    }
});

mainBtn.addEventListener('click',()=>{
    if(counter<=0){
        return
    };
    counter--;
    document.querySelector('.all-planet .p--active-container').classList.remove('p--active-container');
    sliderContent[counter].classList.add('p--active-container');
    slider.style.transform = 'translateY('+(-size*counter)+'px)';
    document.querySelector('.all-planet .transition-end-class').classList.remove('transition-end-class');
    planetName[counter].classList.add('transition-end-class');
    document.querySelector('.inner-text .selected').classList.remove('selected');
    indicatorParent.children[counter].firstElementChild.childNodes[3].children[0].classList.add('selected');
    console.log('counter:',counter);
    textChange();
    if( counter === 0){
        mainBtn.style.cursor = 'default';
    }
    else if(counter > 0){
        mainBtn.style.cursor = 'pointer';
    }
});

readMore.addEventListener('click',()=>{
    backModal.classList.add('modal-back--active');
    readMorePage.classList.add('read-more-page--active');
});

backBtn.addEventListener('click',()=>{
    backModal.classList.remove('modal-back--active');
    readMorePage.classList.remove('read-more-page--active');
});


// document.body.addEventListener('transitionend',()=>{
//     planetSmallInfo.style.animation = ``;
// });