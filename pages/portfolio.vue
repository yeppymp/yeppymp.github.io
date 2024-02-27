<template>
  <div class="container-custom page" id="portfolio">
    <ul class="nav nav-pills nav-fill" id="tab-portfolio">
      <li
        class="nav-item"
        v-for="(item, index) in items"
        @click="selectPortfolio(index)"
        :key="index"
      >
        <a class="nav-link" :class="{ active: index === currentSelected }">
          <font-awesome-icon :icon="['fas', item.icon]" /> &nbsp;
          {{ item.title }} ({{ item.portfolios.length }})
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <template v-for="(item, index) in items">
        <div
          class="grid-view"
          :class="{ active: index === 0 }"
          v-if="index === currentSelected"
          :key="item.id"
        >
          <b-card
            v-for="(portfolio, pi) in item.portfolios.slice().reverse()"
            :key="pi"
            :img-src="require(`~/assets/images/portfolio/${portfolio.image_url}`)"
            :title="portfolio.title"
            img-alt="Image"
            img-top
            tag="article"
            class=""
          >
            <b-card-text class="text-justify portfolio-description">
              <span v-html="portfolio.descriptions"></span>
            </b-card-text>
          </b-card>
        </div>
      </template>
    </div>

    <div class="navigation text-center my-3">
      <nuxt-link to="/" class="text-secondary-app text-decoration-none">
        &lt; Back to Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: "portfolio",
  data() {
    return {
      currentSelected: 0,
      items: [
        {
          id: 0,
          title: "App Development",
          icon: "code",
          portfolios: [
            {
              image_url: "vote.png",
              title: "Voting Online",
              descriptions: "During my Final Task in Vocational Highschool I built android application that used for voting needs, developed using AngularJS",
            },
            {
              image_url: "quotes_app_half.png",
              title: "Quotes App",
              descriptions: "Quotes App used for get the random daily quotes from many motivational people. By using Android Studio (Java) and free quotes API i made this app when i was in highschool for an assignment.",
            },
            {
              image_url: "homepage.jpg",
              title: "Home Page",
              descriptions: "This design used for home page a website, i made this just for exploring my web design skill",
            },
            {
              image_url: "login1.jpg",
              title: "Login Page 1",
              descriptions: "I made this login page design is for my first task when i'm  in internship as a Frontend Developer in PT.Indosystem Global",
            },
            {
              image_url: "login2.jpg",
              title: "Login Page 2",
              descriptions: "I made this design is just for exploring my web design skill with newest technology",
            },
            {
              image_url: "login3.jpg",
              title: "Login Page 3",
              descriptions: "I made this just for exploring my design & frontend skills",
            },
            {
              image_url: "sqtar.png",
              title: "Sqtar",
              descriptions: "Consist of several youth that want to built a startup. We create this website about creating or exploring event, concert, talks and etc. Unfortunately my startup team has disbanded. I was a Front End Developer in the team",
            },
            {
              image_url: "alpha_pos.png",
              title: "Alpha POS",
              descriptions: "I just know a litle bit of this private project, because i just slicing the design into the website using HTML, CSS, JS. They called Alpha POS. I think it is used for F&B merchant",
            },
            {
              image_url: "hris.png",
              title: "Human Resource Information System (HRIS)",
              descriptions: "HRIS is a private web project, i was Front End Developer in the team. This project developed more than 7 month from July 2018 until finished in February 2019. Used for HR System in Big Company.",
            },
//            {
//              image_url: "birthday.png",
//              title: "Birthday Present",
//              descriptions: "Birthday Greeting Website, this is actually my greeting for my ex girlfriend's birthday. Because we aren't in the same city, so i confuse how say 'happy birthday' to her romantically so i made this game website, there is romantic song, message and other animation for amaze her and make her happy.",
//            },
            {
              image_url: "esynergy/coming_soon.png",
              title: "e-Synergy",
              descriptions: "Esynergy is a learning application about property learning, marketing, bussiness also has a product or tools to sell. I was Designer and Front-end Developer  in this private project.",
            },
            {
              image_url: "mkt/dashboard.png",
              title: "Marketing Tools",
              descriptions: "It's a tool for helping marketing store prospect data easily, delete or closing the prospect with in the applications, and company can blast their project to selected prospect data that already stored. I was Front-end Developer in this private project.",
            },
            {
                image_url: "bcc/invoice_email.png",
              title: "Bandung Champion City (BCC)",
              descriptions: "We built a dashboard application for admin and cashier which is to manage selling ticket of BCC, buying or organize ticketing system. I was Designer and Front-end Developer in this project. <a href='http://championcity.co.id/' target='_blank'>Explore Bandung Champion City</a>",
            },
            {
                image_url: "cari_aman/Home.png",
                title: "Cari Aman",
                descriptions: "It's a web application for helping people to find secure site, phone number, or even an bank account, also there is a list of sites, phone number, or bank account that proved it's a fraud account. I am as a Designer and Front-end Developer in this Project. This project actually made in order to compete a web competition.",
            },
            {
                image_url: "dca.png",
                title: "Dicicil Aja - Adira Finance",
                descriptions: "It is a rebuild of user-facing website from dicicilaja.com.  Changing old tech stack & design to the latest, it has been rebuilt using Laravel and VueJS. There is around 8 developers on this project, i am as Front-end Developer. <a href='https://dicicilaja.com' target='_blank'>See dicicilaja website</a>",
            },
            {
                image_url: "remitpro.png",
                title: "RemitPro - Digiasia",
                descriptions: "It is a rebuild & redesign admin website of remitpro.id. Changing old tech stack & design to the latest, it has been rebuilt using NodeJS and NuxtJS with micro-services architecture. There is 5 developers on this project, i am as Front-end Developer. <a href='https://remitpro.id' target='_blank'>See RemitPro website</a>",
            },
            {
                image_url: "daikin.png",
                title: "Daikin - e-Commerce",
                descriptions: "This is e-commerce project from Daikin Indonesia. By using Laravel and separate frontend using VueJS we build this e-commerce. I was Front-end Developer in the team. <a href='https://www.daikin.co.id/' target='_blank'>See Daikin Commerce</a>",
            },
            {
                image_url: "flona.png",
                title: "Flona - e-Commerce",
                descriptions: "It is a rebuild & redesign e-commerce website of Flona store. Changing old tech stack & design to the latest, it has been rebuilt using Laravel and separate frontend using NuxtJS. I was Front-end Developer in the project. <a href='https://flona.store/' target='_blank'>See Flona Commerce</a>",
            },
            {
                image_url: "cbt.png",
                title: "Computer Based Test (CBT)",
                descriptions: "It is Computer-Based Test for midle / high school. When pandemic covid-19 arise, most school in Indonesia is have to do online learning, and in order to the exam using proper CBT system. Me and my teacher created this project, then sell it to the school if they need it.",
            },
            {
                image_url: "bryant-dental.png",
                title: "Bryant Dental",
                descriptions: "Bryant Dental was created by dentists to solve problems they had faced, by using technology to overcome problems in unprecedented ways. Bryant.dental project are honorable Awwwards nominee as an interactive 3D modern website. <a href='https://bryant.dental/' target='_blank'>See Website</a>",
            },
            {
                image_url: "theloupescompany.png",
                title: "The Loupes Company",
                descriptions: "The Loupes Company is part of Bryant Dental, It is more general dental loupes e-commerce not only brand that comes from Bryant Dental <a href='https://theloupescompany.com' target='_blank'>See Website</a>",
            },
            {
                image_url: "rea.png",
                title: "REA Kaltim Plantation",
                descriptions: "Company profile website of REA the Palm Oil Company. I am freelancer at Communic 8 Agency, and i am maintain this website. <a href='https://rea.communic8.id/' target='_blank'>See Website</a>, another website of REA Holdings <a href='https://rea.co.uk/' target='_blank'>See Website</a>",
            },
            {
                image_url: "communic8agency.png",
                title: "Communic 8 Agency",
                descriptions: "Company profile website of Communic 8 Agency. I am freelancer at Communic 8 Agency, and i am maintain this website. <a href='https://communic8agency.com/' target='_blank'>See Website</a>",
            },
            {
                image_url: "digibuzz.png",
                title: "Digibuzz",
                descriptions: "Company profile website of Digibuzz. I am freelancer at Communic 8 Agency, and i am maintain this website. <a href='http://digibuzz.co.id/' target='_blank'>See Website</a>",
            },
            {
                image_url: "bios44.png",
                title: "BIOS 44",
                descriptions: "Company profile website of BIOS44. I am freelancer at Communic 8 Agency, and i am maintain this website. <a href='http://bios44.com/' target='_blank'>See Website</a>",
            },
            {
                image_url: "undangan-web.png",
                title: "Undangan Web",
                descriptions: "Wedding Website, Undangan Web. <a href='https://yeppymp.github.io/undangan_gresi_yoga/' target='_blank'>See Website</a>",
            },
            {
                image_url: "findora.png",
                title: "Findora Internusa",
                descriptions: "E-Commerce website of Findora. This project still on going, but here is the company profile <a href='http://www.findora.com' target='_blank'>See Website</a>",
            },
          ],
        },
        {
          id: 1,
          title: "User Interface Design",
          icon: "layer-group",
          portfolios: [
            {
              image_url: "quotes_app_half.png",
              title: "Quotes App UI",
              descriptions: "Quotes App used for get the random daily quotes from many motivational people. By using Adobe XD i designed this app when i was in highschool for an assignment.",
            },
            {
              image_url: "homepage.jpg",
              title: "Home Page UI",
              descriptions: "This design used for home page a website, i made this just for improve my design skill",
            },
            {
              image_url: "login1.jpg",
              title: "Login Page UI 1",
              descriptions: "I made this login page design is for my first task when i'm  in internship as a Frontend Developer in PT.Indosystem Global",
            },
            {
              image_url: "login2.jpg",
              title: "Login Page UI 2",
              descriptions: "I made this design is just for upgrade design skill with newest technology",
            },
            {
              image_url: "login3.jpg",
              title: "Login Page UI 3",
              descriptions: "I made this when i have a team for build a website, and for upgrade my personal skill",
            },
            {
              image_url: "esynergy/coming_soon.png",
              title: "e-Synergy",
              descriptions: "Esynergy is a learning application about property learning, marketing, bussiness also has a product or tools to sell. I use Adobe XD to design the UI in this private project.",
            },
            {
                image_url: "bcc/invoice_email.png",
                title: "Bandung Champion City",
                descriptions: "We built a dashboard application for admin and cashier which is to manage selling ticket of BCC, buying or organize ticketing system. By using Adobe XD i designed this UI. <a href='http://championcity.co.id/' target='_blank'>Explore Bandung Champion City</a>",
            },
            {
                image_url: "cari_aman/Home.png",
                title: "Cari Aman",
                descriptions: "It's a web application for helping people to find secure site, phone number, or even an bank account, also there is a list of sites, phone number, or bank account that proved it's a fraud account. It was designed by me using Adobe XD. This project actually made in order to compete a web competition.",
            },
            {
                image_url: "social_controlling/1. Login.png",
                title: "Social Controlling",
                descriptions: "Social controlling is an android application, used for how RT's control their local residents. This application was designed by me, in order to take part in a competition in Malang",
            },
            {
                image_url: "louva/Splash Screen.png",
                title: "Louva",
                descriptions: "Louva is a game android application, game for improve our brain creativity. This application was designed by me, in order to take part in a competition in Malang",
            },
            {
                image_url: "ngetrip/1 Splash Screen.png",
                title: "Ngetrip",
                descriptions: "Ngetrip is a travel android application, apps for discover places, to find hotels, and booking flight ticket. This application was designed by me, in order to take part in a <a href='https://www.dicoding.com/challenges/490' target='_blank'>Dicoding challenge</a>. I joined this this challenge with my classmate Riksa, and how lucky we are, we're the winner from this challenge.",
            },
          ],
        },
        {
          id: 2,
          title: "Graphic Design",
          icon: "palette",
          portfolios: [
            {
              image_url: "vote.png",
              title: "Voting Online App Logo",
              descriptions: "During my Final Task in Vocational Highschool I built android application that used for voting needs, so i created the logo also",
            },
            {
              image_url: "face_vector/4.png",
              title: "Face Vector",
              descriptions: "This is my hobby to create face vector using Adobe Illustrator",
            },
            {
              image_url: "logo/no_tagline.jpg",
              title: "Ciremai Hospital Logo",
              descriptions: "This logo created using Adobe Illustrator, this is in order to take part in a Logo Design Challenge",
            },
            {
              image_url: "ngetrip/1 Splash Screen.png",
              title: "Ngetrip App Logo",
              descriptions: "Ngetrip is a travel android application, apps for discover places, to find hotels, and booking flight ticket. This logo was designed by me, in order to take part in a <a href='https://www.dicoding.com/challenges/490' target='_blank'>Dicoding challenge</a>. Luckily we're the winner for this challenge.",
            },
            {
              image_url: "Cirebon Dev meetup-01-01-01.png",
              title: "Community Event Poster",
              descriptions: "This poster created using Adobe Illustrator, this is in order to take part of contribution in Cirebon Developer Community",
            },
          ],
        },
        // {
        //   id: 3,
        //   title: "Photo Editing",
        //   icon: "image",
        //   portfolios: [1, 2, 3, 4],
        // },
        // {
        //   id: 4,
        //   title: "Video Editing",
        //   icon: "video",
        //   portfolios: [1, 2, 3, 4],
        // },
      ],
    };
  },
  methods: {
    selectPortfolio(index) {
      this.currentSelected = index;
    },
  },
};
</script>

<style>
</style>
