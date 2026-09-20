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
import './style.scss'
import 'bootstrap'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center" >
    <header>
        <div class="container">
            <div class="row">
                <div class="header-wrap">
                    <a href="https://t.me/Nataliia808" target="_blank" class="logo">
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
                                о которой вы сечтаете.
                            </div>
                            <div class="actions">
                                <a href="https://t.me/Nataliia808" target="_blank">
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
                <div class="col-lg-3 services-info">
                    <h2 class="display-3"><span>Наши</span> услуги</h2>
                    <p>Выберите то, что откликается вашей душе, <br/> и начните свой путь к гармонии уже сегодня.</p>
                </div>
                <div class="col-lg-9">
                    <div class="row">
                        <div class="col-lg-3 mb-5">
                            <div class="card">
                                <img src="${services1}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Карты Таро</h5>
                                    <p class="card-text fs-6">Расклад карт помогает глубже понять ситуацию, увидеть скрытые причины и возможные пути развития событий.</p>
                                    <a href="https://t.me/Nataliia808" target="_blank">
                                        Узнать больше
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg> 
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 mb-5">
                            <div class="card">
                                <img src="${services2}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Отливка на воск</h5>
                                    <p class="card-text fs-6">Выявление внутренних блоков, энергетическое напряжение и то, что может мешать вашему состоянию и гармонии.</p>
                                    <a href="https://t.me/Nataliia808" target="_blank">
                                        Узнать больше
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg> 
                                    </a>
                                </div>
                            </div>
                        </div>    
                        <div class="col-lg-3 mb-5">
                            <div class="card">
                                <img src="${services3}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Практики магии Вуду</h5>
                                    <p class="card-text fs-6">Работу с намерением, энергией и символами для решения личных и жизненных вопросов.</p>
                                    <a href="https://t.me/Nataliia808" target="_blank">
                                        Узнать больше
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg> 
                                    </a>
                                </div>
                            </div>
                        </div>    
                        <div class="col-lg-3 mb-5">
                            <div class="card">
                                <img src="${services4}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Магия Викки</h5>
                                    <p class="card-text fs-6">Природная магия, основанная на работе с энергиями стихий, лунными циклами, травами и силой личного намерения.</p>
                                    <a href="https://t.me/Nataliia808" target="_blank">
                                        Узнать больше
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                        </svg> 
                                    </a>
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
                        <h3>Я - проводник между мирами</h3>
                        <p>
                            Моя задача - помочь вам услышать свою душу 
                            Увидеть скрытые возможности и найти ответы на важгые вопросы
                            Я работаю с энергиями, картами, астрологией и древними знаниями, чтобы вы могли
                            вернуть себе силу, гармонию и уверенность.
                        </p>
                        <a href="https://t.me/Nataliia808" target="_blank">
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
                            <div class="description">Конфидециальность</div>
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
    
    <section class="testimonials py-4">
        <div class="testimonials-title">Отзывы</div>
        <h3 class="mb-5">Отзывы которые вдохновдяют</h3>
        
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
                <h2>Готовы изменить свою жизнь?</h2>
                <h3 class="desc mb-5">Сделайте первый шаг к гармонии и осознаности</h3>
                
            </div>
            <a href="https://t.me/Nataliia808" target="_blank">Узнать больше</a>
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
