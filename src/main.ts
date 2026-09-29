import './style.scss'

import item1 from './assets/eso_item_1.png'
import item2 from './assets/eso_item_2.png'
import item3 from './assets/eso_item_3.png'
import item4 from './assets/eso_item_4.png'

import services1 from './assets/services_1.png'
import services2 from './assets/services_2.png'
import services3 from './assets/services_3.png'
import services4 from './assets/services_4.png'

import about1 from './assets/about_item_1.png'
import about2 from './assets/about_item_2.png'
import about3 from './assets/about_item_3.png'
import about4 from './assets/about_item_4.png'

import logo from './assets/logo.png'
import 'bootstrap'

document.title = 'ASTRAE — Открой свою истину'

document.documentElement.lang = 'ru'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center" >
    <header>
        <div class="container">
            <div class="row">
                <div class="header-wrap">
                    <a href="https://t.me/Emmaplaneta808" target="_blank" class="logo">
                        <img src="${logo}" alt="">
                    </a>
                    
                    <ul class="d-none d-sm-block">
                        <li>
                            <a href="#hero">Главная</a>
                        </li>
                        <li>
                            <a href="#services">Услуги</a>
                        </li>
                        <li>
                            <a href="#about-us">Обо мне</a>
                        </li>
                    </ul>
                </div>    
            </div>
        </div>
        
    </header>
     <section id="hero" class="hero py-5 ">
          <div class="container">
              <div class="row">
                  <div class="col-lg-9 col-xs-12">
                        <div class="vertical">
                            <div class="breadcrumbs">Эзотерика . Гармония . Развитие</div>
                            <h1 class="display-2 title">
                                <span>Открой</span>
                                Свою Истину
                            </h1>
                            <div class="text fs-5 mb-4">
                                Эзотерические практики, которые помогут <br/> 
                                Понять себя, найти баланс и создать жизнь, <br/>
                                о которой вы мечтаете.
                            </div>
                            <div class="actions">
                                <a href="https://t.me/Emmaplaneta808" target="_blank">
                                    Узнать больше
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                    </svg> 
                                </a>
                            </div>
                        </div>    
                  </div>
              </div>
          </div>
    <!--    <img src="${item1}" class="base" />-->
    </section>
    <section class="production py-5">
            <div class="container">
                <div class="row">
                    <div class="item-wrap col-lg-3">
                        <div class="item">
                            <div class="icon">
                                <img src="${item1}" class="base"  alt=""/>
                            </div>
                            <div class="title fs-6 mb-4">Глубокий анализ</div>
                            <div class="desc ">Помогаем найти скрытые причины и найти решения</div>
                        </div>
                    </div>
                    <div class="item-wrap col-lg-3">
                        <div class="item">
                            <div class="icon"><img src="${item2}" class="base"  alt=""/></div>
                            <div class="title fs-6 mb-4">Индивидуальный подход</div>
                            <div class="desc ">Каждая душа уникальна, как и ее путь</div>
                        </div>
                    </div>
                    <div class="item-wrap col-lg-3">
                        <div class="item">
                            <div class="icon"><img src="${item3}" class="base"  alt=""/></div>
                            <div class="title fs-6 mb-4" >Древние знания</div>
                            <div class="desc ">Используем проверенные методы и традиции</div>
                        </div>
                    </div>
                    <div class="item-wrap col-lg-3">
                        <div class="item">
                            <div class="icon"><img src="${item4}" class="base"  alt=""/></div>
                            <div class="title fs-6 mb-4">Реальные перемены</div>
                            <div class="desc ">Не просто прогнозы, а практические инструменты</div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <section id="services" class="services py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 services-info">
                    <h2 class="display-3"><span>Наши</span> услуги</h2>
                    <p>Выберите то, что откликается вашей душе, <br/> и начните свой путь к гармонии уже сегодня.</p>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-6 mb-5">
                            <div class="card">
                                <img src="${services1}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Карты Таро</h5>
                                    <p class="card-text fs-6">
                                        Таро, звёзды, стихии и числа - словно разные нити одной большой магической ткани, в которой переплетается наша жизнь. 
                                        Звёзды задают свой ритм, числа хранят свои тайны, стихии отражают наши внутренние силы, а Таро помогает услышать подсказки, которые мы порой не замечаем в суете. 
                                        Когда всё это соединяется, рождается особый диалог с собой - немного таинственный, немного волшебный и очень личный. Магический ритуал Таро - это особая практика, когда карты помогают заглянуть глубже в ситуацию, увидеть то, что сейчас скрыто от взгляда, и лучше понять себя.
                                    </p>
                                    <a href="https://t.me/Emmaplaneta808"
                                       target="_blank"
                                       data-bs-toggle="modal" 
                                       data-bs-target="#taroModal"
                                    >
                                        Узнать больше
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg> 
                                    </a>
                                </div>
                                <!-- Modal -->
                                <div 
                                    class="modal fade"
                                    id="taroModal"
                                    tabindex="-1"
                                    aria-labelledby="taroModalLabel"
                                    aria-hidden="true"
                                >
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="taroModalLabel"> Карты Таро </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button> 
                                            </div>
                                            <div class="modal-body">
                                                <p> 
                                                    К Таро обращаются, когда запутались в отношениях, стоите перед важным выбором или не понимаете, почему ситуация снова и снова повторяется.
                                                    Ритуал можно проводить на темы: любовь и отношения; деньги, работа и новые возможности; сложные жизненные ситуации; выбор между несколькими вариантами; отношения с конкретным человеком; причины повторяющихся проблем; страхи, сомнения и внутренние препятствия; ближайшие перспективы и возможные пути развития ситуации.
                                                    Карты не принимают решение за человека они помогают посмотреть на ситуацию с другой стороны, услышать себя и найти то, что раньше было трудно заметить.
                                                    Иногда один правильно заданный вопрос открывает гораздо больше, чем десятки попыток найти ответ.
                                                </p> 
                                                <a href="https://t.me/Emmaplaneta808" target="_blank"> Записаться </a> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-5">
                            <div class="card">
                                <img src="${services2}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Отливка на воск</h5>
                                    <p class="card-text fs-6">Верните себе внутренний свет, силу и гармонию. Снятие сглаза, порчи и других негативных воздействий. Бережный славянский ритуал отливки для освобождения от чужого негатива, болезней и безденежья.</p>
                                    <a data-bs-toggle="modal" 
                                       data-bs-target="#waxModal"
                                       href="https://t.me/Emmaplaneta808"
                                       target="_blank"
                                    >
                                        Узнать больше
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg> 
                                    </a>
                                </div>
                                <!-- Modal -->
                                <div 
                                    class="modal fade"
                                    id="waxModal"
                                    tabindex="-1"
                                    aria-labelledby="waxModalLabel"
                                    aria-hidden="true"
                                >
                                     <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="waxModalLabel"> Отливка на воск </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button> 
                                            </div>
                                            <div class="modal-body">
                                                <p> Восковая отливка — это древний, проверенный веками способ мягкого очищения души и тела. Натуральный пчелиный воск обладает уникальной способностью «впитывать» в себя любые чужеродные программы, страхи, зависть и накопленный стресс. В этом ритуале объединяются четыре стихии: Огонь плавит воск, сжигая накопленный деструктив. Вода принимает информацию, охлаждает и запечатывает её. Земля (в виде застывшего воска) материализует и удерживает негатив. Воздух (дыхание мастера и заговоры) направляет процесс исцеления. Воск работает как зеркало вашей энергетики: он не просто убирает сглаз или порчу, но и наглядно показывает, где именно находился блок, трансформируя его в чистую созидательную энергию.
                                                    Вам стоит обратиться к отливке воском, если вы чувствуете:Постоянный упадок сил - когда сон не приносит отдыха, а привычные дела требуют колоссальных усилий. Череду неудач («чёрную полосу») в работе, финансах или личной жизни без видимых причин. Резкое ухудшение самочувствия или внезапные приступы тревоги, страха и паники. Ощущение «тяжести» на душе, будто кто-то забирает вашу энергию или завидует вам. Трудности в отношениях - частые беспричинные ссоры с близкими, охлаждение чувств.
                                                    После сеанса восковой отливки вы почувствуете:Физическую лёгкость, словно с плеч упал тяжёлый груз. Ясность мыслей и возвращение уверенности в собственных силах. Прилив жизненной энергии и вдохновения. Защищённость от чужого дурного глаза, зависти и интриг. Гармонизацию пространства вокруг вас -дела начнут спориться, а отношения налаживаться.</p> 
                                                <a href="https://t.me/Emmaplaneta808" target="_blank"> Записаться </a> 
                                            </div> 
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>    
                        <div class="col-lg-6 mb-5">
                            <div class="card">
                                <img src="${services3}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Практики магии Вуду</h5>
                                    <p class="card-text fs-6">
                                        Древняя, пульсирующая магия прямого действия. 
                                        Если вам нужен мощный прорыв, разрушение преград или защита, которая не знает компромиссов - мы призовём Лоа.
                                        Это ритуалы для тех, кто готов заглянуть за завесу тайны и забрать своё. Услышать зов духов и изменить судьбу. Позволить силе Вуду открыть ваши дороги.
                                    </p>
                                    <a href="https://t.me/Emmaplaneta808" target="_blank"
                                       data-bs-toggle="modal" 
                                       data-bs-target="#woodooModal"
                                    >
                                        Узнать больше
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg> 
                                    </a>
                                </div>
                                <!-- Modal -->
                                <div 
                                    class="modal fade"
                                    id="woodooModal"
                                    tabindex="-1"
                                    aria-labelledby="woodooModalLabel"
                                    aria-hidden="true"
                                >
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="woodooModalLabel"> Практики магии Вуду </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button> 
                                            </div>
                                            <div class="modal-body">
                                                <p> 
                                                    ВУДУ - завораживает и сразу снимает голливудские стереотипы. Тайны Нового Орлеана: Магия Вуду, рождённая сердцем стихий. Древнее сакральное искусство для тех, кто готов заглянуть за завесу тайны. Прямой диалог с духами, страстные ритуалы и сила, меняющая реальность.
                                                    Магия Вуду - это не пугающие мифы из кино. Это горячий шёпот самой жизни, древний пульсирующий ритм, который связывает человека, природу и невидимый мир духов. Вуду переводится как “дух” или “божественная энергия”. Это магия, в которой нет места полумерам. Она говорит на языке страсти, преданности и стихийного огня. Здесь каждый ритуал - это живой диалог с великими Лоа (духами-покровителями), которые приходят, чтобы защитить, открыть закрытые дороги, разжечь пламя любви или принести справедливое возмездие. Если вы чувствуете, что обычные методы бессильны, значит, пришло время призвать силу, которая не знает преград.
                                                </p> 
                                                <a href="https://t.me/Emmaplaneta808" target="_blank"> Записаться </a> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <div class="col-lg-6 mb-5">
                            <div class="card">
                                <img src="${services4}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Магия Виккa</h5>
                                    <p class="card-text fs-6">
                                        Магия многогранна, как и сама жизнь. Иногда нашей душе нужны покой, исцеление и тихий шёпот лунного света.
                                        Мягкие, созидательные ритуалы природного ведьмовства. Мы работаем с энергией четырёх стихий, кристаллами и силой Колеса Года, чтобы вернуть в вашу жизнь гармонию, привлечь нежную любовь и наполнить дом уютом и тогда вас встретит уютный круг Викки.
                                    </p>
                                    <a href="https://t.me/Emmaplaneta808" 
                                       target="_blank"
                                       data-bs-toggle="modal" 
                                       data-bs-target="#wikiModal" 
                                    >
                                        Узнать больше
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg> 
                                    </a>
                                </div>
                                <!-- Modal -->
                                <div 
                                    class="modal fade"
                                    id="wikiModal"
                                    tabindex="-1"
                                    aria-labelledby="wikiModalLabel"
                                    aria-hidden="true"
                                >
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="wikiModalLabel"> Магия Виккa </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button> 
                                            </div>
                                            <div class="modal-body">
                                                <p> 
                                                    Магия Викка - это магия природы, стихий, Луны и энергии человека.
                                                    В ней используются свечи, травы, символы, обереги и различные ритуалы. Прямое обращение к Духам, к их силе и могуществу.
                                                    С помощью таких практик можно очистить пространство, отпустить накопившийся негатив, тревогу и всё то, что давно не даёт спокойно жить.
                                                    К Викке обращаются, когда необходим достаток, карьерный рост, благополучие, исцеление от болезней, привлечение любви, защита своего жилья, бизнеса и самого себя. Для защиты от недоброжелателей используются специальные обереги и ритуалы. В традиции также существует идея возвращения негативного воздействия тому, кто его направил. 
                                                    Викка - это про очищение, защиту, гармонию и новые начала. 
                                                    Иногда один ритуал становится именно той точкой, после которой внутри становится легче, спокойнее и появляется ощущение, что можно двигаться дальше.
                                                    Если вы чувствуете, что обычные методы бессильны, значит, пришло время призвать силу, которая не знает преград.
                                                </p> 
                                                <a href="https://t.me/Emmaplaneta808" target="_blank" class="btn btn-primary"> Записаться </a> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    </section>
    <section id="about-us" class="about py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 hidden-xs">
                    <div class="about-section"></div>
                </div>
                <div class="col-lg-4 about-wrapper">
                    <div class="about-section mb-5">
                        <div class="title fz-6">Обо мне</div>
                        <h3>Я - мост между сакральными мирами.</h3>
                        <p>
                            Я стою на грани видимого и сокрытого, проводя свет сквозь тьму неизвестности. Моя миссия - исцелить зов вашей души, отворить тайные двери будущего и даровать ответы, которые бережёт Вселенная. Через древние ритуалы, энергетические потоки и мудрость звёзд я возвращаю вам контроль над собственной судьбой и вашу магическую силу. Я - мост между сакральными мирами. раскрытие скрытых ресурсов.
                        </p>
                        <a href="https://t.me/Emmaplaneta808" target="_blank">
                            Узнать больше
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                            </svg> 
                        </a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="about-section">
                        <div class="about-item mb-3 mt-3 pb-3">
                            <div class="icon">
                                <img src="${about1}" alt="">
                            </div> 
                            <div class="description">Более 15 лет практики</div>
                        </div>
                        <div class="about-item mb-3 pb-3">
                            <div class="icon">
                                <img src="${about2}" alt="">
                            </div>
                            <div class="description">Индивидуальный подход</div>
                        </div>
                        <div class="about-item mb-3 pb-3">
                            <div class="icon">
                                <img src="${about3}" alt="">
                            </div>
                            <div class="description">Конфиденциальность</div>
                        </div>
                        <div class="about-item mb-3 pb-3">
                            <div class="icon">
                                <img src="${about4}" alt="">
                            </div>
                            <div class="description">Поддержка на всех этапах</div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
    
    <section class="about2 py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Мои магические инструменты</h4>
                    <p class="desc">У каждой магической практики есть свои магические инструменты, древние символы и свой язык. Я выбираю их не случайно - индивидуально под человека, его ситуацию и тот запрос, с которым он приходит.</p>
                    <div class="accordion accordion-flush" id="magicToolsAccordion">
                        <!-- Таро -->
                        <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTarot">
                                        <button
                                            class="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTarot"
                                            aria-expanded="true"
                                            aria-controls="collapseTarot"
                                        >
                                            <span class="magic-tool-icon">✦</span>
                                            <span>Таро</span>
                                        </button>
                                    </h2>
                            
                                    <div
                                        id="collapseTarot"
                                        class="accordion-collapse collapse show"
                                        aria-labelledby="headingTarot"
                                        data-bs-parent="#magicToolsAccordion"
                                    >
                                        <div class="accordion-body">
                                            Таро - это мои карты-проводники. Они помогают заглянуть глубже в ситуацию, увидеть скрытое, разобраться в отношениях, выборе, желаниях и возможных путях.
                                        </div>
                                    </div>
                                </div>
                            <!-- Свечи и огонь -->
                            <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFire">
                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFire"
                                            aria-expanded="false"
                                            aria-controls="collapseFire"
                                        >
                                            <span class="magic-tool-icon">✦</span>
                                            <span>Свечи и огонь</span>
                                        </button>
                                    </h2>
                            
                                    <div
                                        id="collapseFire"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingFire"
                                        data-bs-parent="#magicToolsAccordion"
                                    >
                                        <div class="accordion-body">
                                            Свечи и огонь - очищение от любого зла и болезней, защита, освобождение от старого и место для нового. Огонь всегда был символом перемен и силы.
                                        </div>
                                    </div>
                                </div>
                            <!-- Травы -->
                            <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingHerbs">
                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseHerbs"
                                            aria-expanded="false"
                                            aria-controls="collapseHerbs"
                                        >
                                            <span class="magic-tool-icon">✦</span>
                                            <span>Травы и природные силы</span>
                                        </button>
                                    </h2>
                            
                                    <div
                                        id="collapseHerbs"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingHerbs"
                                        data-bs-parent="#magicToolsAccordion"
                                    >
                                        <div class="accordion-body">
                                            Травы и природные силы - то, что приходит к нам из самой природы. Для очищения, защиты, наполнения, привлечения благополучия и создания особого пространства.
                                        </div>
                                    </div>
                                </div>
                            <!-- Викканские практики -->
                            <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingWicca">
                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseWicca"
                                            aria-expanded="false"
                                            aria-controls="collapseWicca"
                                        >
                                            <span class="magic-tool-icon">✦</span>
                                            <span>Викканские практики</span>
                                        </button>
                                    </h2>
                            
                                    <div
                                        id="collapseWicca"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingWicca"
                                        data-bs-parent="#magicToolsAccordion"
                                    >
                                        <div class="accordion-body">
                                            Викканские практики - стихии Земли, Воды, Огня и Воздуха, лунные циклы, символы, ритуалы и древняя мудрость природы.
                                        </div>
                                    </div>
                                </div>
                            <!-- Отливка на воск -->
                            <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingWax">
                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseWax"
                                            aria-expanded="false"
                                            aria-controls="collapseWax"
                                        >
                                            <span class="magic-tool-icon">✦</span>
                                            <span>Отливка на воск</span>
                                        </button>
                                    </h2>
                            
                                    <div
                                        id="collapseWax"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingWax"
                                        data-bs-parent="#magicToolsAccordion"
                                    >
                                        <div class="accordion-body">
                                            Отливка на воск - практика очищения, когда воск словно «забирает» на себя то, от чего человек хочет освободиться: порчи, сглаз, тяжесть, тревогу, возврат негатива обидчикам. Защита от врагов.
                                        </div>
                                    </div>
                                </div>
                            <!-- Обереги -->
                            <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingAmulet">
                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseAmulet"
                                            aria-expanded="false"
                                            aria-controls="collapseAmulet"
                                        >
                                            <span class="magic-tool-icon">✦</span>
                                            <span>Обереги</span>
                                        </button>
                                    </h2>
                            
                                    <div
                                        id="collapseAmulet"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingAmulet"
                                        data-bs-parent="#magicToolsAccordion"
                                    >
                                        <div class="accordion-body">
                                            Обереги - маленькие личные помощники, созданные под конкретный запрос. На защиту, любовь, достаток, удачу или внутреннее спокойствие.
                                        </div>
                                    </div>
                                </div>
                            <!-- Лунные ритуалы -->
                            <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingMoon">
                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseMoon"
                                            aria-expanded="false"
                                            aria-controls="collapseMoon"
                                        >
                                            <span class="magic-tool-icon">✦</span>
                                            <span>Лунные ритуалы</span>
                                        </button>
                                    </h2>
                            
                                    <div
                                        id="collapseMoon"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingMoon"
                                        data-bs-parent="#magicToolsAccordion"
                                    >
                                        <div class="accordion-body">
                                            Лунные ритуалы - работа с энергией разных фаз Луны: отпустить ненужное, завершить старое, загадать желание и открыть дорогу новому.
                                        </div>
                                    </div>
                                </div>
                        </div>
                            
                        <div class="magic-tools-conclusion mt-5">
                            <p>
                                А ещё есть то, что невозможно положить на стол или взять в руки - интуиция, чувствительность, внимание к человеку и умение услышать то, что иногда остаётся между строк.
                            </p>
                            
                            <p>
                                    Я верю, что магия начинается не с атрибутов.
                                    Она начинается с желания что-то изменить.
                                    А дальше мы уже выбираем инструменты, которые помогут пройти этот путь.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="testimonials py-4">
        <div class="testimonials-title">Отзывы</div>
        <h3 class="mb-5">Отзывы, которые вдохновляют</h3>
        
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div id="carouselExampleCaptions"
                         class="carousel slide"
                         data-bs-ride="carousel">
                    
                        <div class="carousel-indicators">
                            <button type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="Slide 1"></button>
                    
                            <button type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                    
                            <button type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                        </div>
                    
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="carousel-caption">
                                    <h5>Анна, 32 года</h5>
                                    <p>Обратилась за раскладом Таро, когда не могла принять решение по поводу работы. Получила совершенно другой взгляд на ситуацию и наконец поняла, в каком направлении двигаться. Через несколько недель решилась на перемены — сейчас чувствую себя намного увереннее.</p>
                                </div>
                            </div>
                    
                            <div class="carousel-item">
                                <div class="carousel-caption ">
                                    <h5>Марина, 41 год</h5>
                                    <p>После отливки на воске я впервые за долгое время почувствовала спокойствие. Во время консультации удалось разобраться с причинами моего постоянного внутреннего напряжения. Сейчас стараюсь применять полученные рекомендации и действительно замечаю изменения в своём состоянии.</p>
                                </div>
                            </div>
                    
                            <div class="carousel-item">
                                <div class="carousel-caption ">
                                    <h5>Елена, 29 лет</h5>
                                    <p>Пришла из интереса к Викке и природным практикам, но в итоге получила гораздо больше, чем ожидала. Особенно понравилась работа с лунными циклами и намерением. Стала внимательнее относиться к себе и своим решениям, появилось ощущение внутреннего баланса.</p>
                                </div>
                            </div>
                        </div>
                    
                        <button class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                    
                            <span class="carousel-control-prev-icon"
                                  aria-hidden="true"></span>
                    
                            <span class="visually-hidden">Previous</span>
                        </button>
                    
                        <button class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                    
                            <span class="carousel-control-next-icon"
                                  aria-hidden="true"></span>
                    
                            <span class="visually-hidden">Next</span>
                        </button>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="are-you-ready py-4">
        <div class="container">
            <div class="row">
                <div class="wrapper">
                    <h2>Готовы изменить свою жизнь?</h2>
                    <h3 class="desc mb-5">Сделайте первый шаг к гармонии и осознанности</h3>
                    <a href="https://t.me/Emmaplaneta808" target="_blank">Узнать больше</a>
                </div>
            </div>
        </div>    
    </section>

<!--    <footer>-->
<!--        <a href="#">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">-->
<!--              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>-->
<!--            </svg>-->
<!--        </a>    -->
<!--    </footer>-->

`


const canvas = document.createElement('canvas')
canvas.id = 'fire-cursor'
document.body.appendChild(canvas)

const ctx = canvas.getContext('2d')!

let mouseX = window.innerWidth / 2
let mouseY = window.innerHeight / 2

const particles: Particle[] = []

class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    life: number
    maxLife: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y

        this.size = Math.random() * 5 + 2

        this.speedX = (Math.random() - 0.5) * 1.5
        this.speedY = -(Math.random() * 2.5 + 1)

        this.maxLife = Math.random() * 35 + 25
        this.life = this.maxLife
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY

        this.speedX *= 0.98
        this.speedY += 0.015

        this.size *= 0.97
        this.life--
    }

    draw() {
        const alpha = this.life / this.maxLife

        const gradient = ctx.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.size * 3
        )

        gradient.addColorStop(0, `rgba(255, 245, 180, ${alpha})`)
        gradient.addColorStop(0.25, `rgba(255, 180, 50, ${alpha})`)
        gradient.addColorStop(0.65, `rgba(255, 70, 10, ${alpha * 0.7})`)
        gradient.addColorStop(1, `rgba(120, 0, 0, 0)`)

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        ctx.fill()
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

window.addEventListener('resize', resizeCanvas)
resizeCanvas()

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY

    // Создаём несколько частиц за движением мыши
    for (let i = 0; i < 3; i++) {
        particles.push(new Particle(mouseX, mouseY))
    }
})

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Огненное свечение непосредственно под курсором
    const glow = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        28
    )

    glow.addColorStop(0, 'rgba(255, 220, 100, 0.9)')
    glow.addColorStop(0.25, 'rgba(255, 120, 20, 0.5)')
    glow.addColorStop(0.6, 'rgba(255, 40, 0, 0.18)')
    glow.addColorStop(1, 'rgba(255, 0, 0, 0)')

    ctx.beginPath()
    ctx.fillStyle = glow
    ctx.arc(mouseX, mouseY, 28, 0, Math.PI * 2)
    ctx.fill()

    for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]

        particle.update()
        particle.draw()

        if (particle.life <= 0 || particle.size < 0.3) {
            particles.splice(i, 1)
        }
    }

    requestAnimationFrame(animate)
}

animate()
