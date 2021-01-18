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

    <div class="text-center my-3">
      <nuxt-link to="/" class="text-secondary-app text-decoration-none">
        < Back to Home</nuxt-link
      >
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
              descriptions: "During my Final Task in Vocational Highschool I built android application that used for voting needs, developed using hybrid technology",
            },
            {
              image_url: "quotes_app_half.png",
              title: "Quotes App",
              descriptions: "Quotes App used for get the random daily quotes from many motivational people, i made this app when i'm in highschool for an assignment.",
            },
            {
              image_url: "homepage.jpg",
              title: "Home Page",
              descriptions: "This design used for home page a website, i made this just for improve my web design skill",
            },
            {
              image_url: "login1.jpg",
              title: "Login Page 1",
              descriptions: "I made this login page design is for my first task when i'm  in internship as a Frontend Developer in PT.Indosystem Global",
            },
            {
              image_url: "login2.jpg",
              title: "Login Page 2",
              descriptions: "I made this design is just for upgrade web design skill with newest technology",
            },
            {
              image_url: "login3.jpg",
              title: "Login Page 3",
              descriptions: "I made this when i have a team for build a website, and for upgrade my personal skills",
            },
            {
              image_url: "sqtar.png",
              title: "Sqtar",
              descriptions: "This is the website about event, unfortunately my startup team has disbanded. I'm as Front End Developer in the team",
            },
            {
              image_url: "alpha_pos.png",
              title: "Alpha POS",
              descriptions: "I just know a litle bit of this project, because i just slicing the design into the website. But they called Alpha POS. I think is use for the cafe or restaurant.",
            },
            {
              image_url: "hris.png",
              title: "Human Resource Information System",
              descriptions: "HRIS is a website project ,i made it with my team and i as a Front End Developer. This project developed more than 7 month from July 2018 until finished in February 2019. Used for Human Resources System in Big Company.",
            },
            {
              image_url: "birthday.png",
              title: "Birthday Present",
              descriptions: "Birthday Greeting Website, this is actually my greeting for my ex girlfriend's birthday. Because we aren't in the same city, so i confuse how say 'happy birthday' to her romantically so i made this game website, there is romantic song, message and other animation for amaze her and make her happy.",
            },
            {
              image_url: "esynergy/coming_soon.png",
              title: "e-Synergy",
              descriptions: "Esynergy is a learning application about property learning, marketing, bussiness also has a product or tools to sell. This application was designed by me as a Designer and Front-end Developer, you can see application from this link <a href='http://esynergy.id/' target='_blank'>esynergy</a>",
            },
            {
              image_url: "mkt/dashboard.png",
              title: "Marketing Tools",
              descriptions: "It's a tool for helping marketing store prospect data easily, delete or closing the prospect with in the applications, and company can blast their project to selected prospect data that already stored. This application was made by my team and i am as a Front-end Developer.",
            },
            {
                image_url: "bcc/invoice_email.png",
              title: "Bandung Champion City",
              descriptions: "I built a dashboard application for admin and cashier which is to manage selling ticket of BCC, buying or organize the ticket system. This application was designed by me as a Designer and Front-end Developer, you can see application from <a href='http://championcity.co.id/' target='_blank'>this link</a>",
            },
            {
                image_url: "cari_aman/Home.png",
                title: "Cari Aman",
                descriptions: "It's a web application for helping people to find secure site, phone number, or even an bank account, also there is a list of sites, phone number, or bank account that proved it's a fraud account. This application was made by my team and i am as a Designer and Front-end Developer. This application actually made in order to take a web competition.",
            },
            {
                image_url: "dca.png",
                title: "Dicicil Aja - Adira Finance",
                descriptions: "It is a rebuild website of dicicilaja.com from old tech to newer tech stack. It has been rebuilt using Laravel and VueJS. There is around 8 developers on this project, i am as Front-end Developer. See the website on this <a href='https://dicicilaja.com' target='_blank'>link</a>",
            },
            {
                image_url: "remitpro.png",
                title: "RemitPro - Digiasia",
                descriptions: "It is a rebuild & redesign website of remitpro.id from old tech & design to newer tech stack. It has been rebuilt using NodeJS and NuxtJS with microservices architecture. There is 5 developers on this project, i am as Front-end Developer. This project is still running, maybe on production on Feb 2021, See the website on this <a href='https://remitpro.id' target='_blank'>link</a>",
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
              descriptions: "Quotes App used for get the random daily quotes from many motivational people, i made this UI app when i'm in highschool for an assignment.",
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
              descriptions: "Esynergy is a learning application about property learning, marketing, bussiness also has a product or tools to sell. This application was designed by me as a UI Designer, you can see application from this link <a href='http://esynergy.id/' target='_blank'>esynergy</a>",
            },
            {
                image_url: "bcc/invoice_email.png",
                title: "Bandung Champion City",
                descriptions: "I built a UI dashboard application for admin and cashier which is to manage selling ticket of BCC, buying or organize the ticket system., you can see application from <a href='http://championcity.co.id/' target='_blank'>this link</a>",
            },
            {
                image_url: "cari_aman/Home.png",
                title: "Cari Aman",
                descriptions: "It's a web application for helping people to find secure site, phone number, or even an bank account, also there is a list of sites, phone number, or bank account that proved it's a fraud account. This application was made by my team and i am as a UI Designer. This application actually made in order to take a web competition.",
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