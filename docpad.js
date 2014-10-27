module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "MPI LAMEC 2014",
      description: "Conference description",
      date: "15 de Dezembro, 08h",
      // If your event is free, just comment this line
      price: "R$500",
      venue: "WTC Events Center",
      address: "Avenida das Nações Unidas, 12551",
      city: "São Paulo",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se agora",
        link: "http://www.eventick.com.br/admi"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/braziljs/conf-boilerplate"
    },

    // Site info
    site: {
      theme: "lamec",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Experiência é tudo",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento",
        time: "8h00"
      },
      {
        name: "Abertura & Keynote",
        time: "9h00",
        description: "A globalização dos eventos, como construir uma carreira global, com o expert em Learning&Development, Avinash Chandarana."
      },
      {
        name: "Coffee Tech",
        time: "10h00",
        description: "Conheça os principais apps e soluções digitais para eventos."
      },
      {
        name: "Experiência 1",
        time: "10h30"
      },
      {
        name: "Experiência 2",
        time: "11h00"
      },
      {
        name: "Almoço",
        time: "12h30"
      },
      {
        name: "Experiência 3",
        time: "14h00"
      },
      {
        name: "Experiência 4",
        time: "15h00"
      },
      {
        name: "Responsible Coffee",
        time: "16h00"
      },
      {
        name: "Wrap-up",
        time: "16h30"
      },
      {
        name: "Bruce Dickinson",
        time: "17h00",
        description: "Engagement of Audiences: O líder do Iron Maiden expõe suas ideias sobre o mundo de negócios de hoje, e explica o que significa engajamento de audiências, na visão de quem conduz plateias imensas e mantém o relacionamento com uma multidão de fãs através de décadas."
      },
      {
        name: "Encerramento",
        time: "18h00"
      },
      {
        name: "Avinash Chandarana",
        photo: "themes/lamec/img/avinash.png",
        bio: "Avinash Chandarana é o diretor global de learning & development da MCI Group, e bla bla bla bla bla lba bla bla lba bla bla lba bla bla lba",
        company: "Linux Foundation",
        link: {
          href: "http://twitter.com/avinashchandarana",
          text: "@avinashchandarana"
        },
        presentation: {
          title: "Diferenças culturais na organização de eventos, em um mundo cada vez mais globalizado",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h00"
        }
      },
      {
        name: "Bruce Dickinson",
        photo: "themes/lamec/img/bruce.png",
        bio: "Entre gravações e shows para mais de cem mil pessoas, Bruce Dickinson é piloto de avião, foi diretor de marketing da Austraeus Airlines, é empresário do ramo de cervejas e CEO da Cardiff Aviation. É um grande pensador criativo para negócios, e ainda encontra tempo para ser o vocalista de uma das bandas de heavy metal de maior sucesso na história, o Iron Maiden.",
        company: "Microsoft",
        link: {
          href: "http://twitter.com/ironmaiden",
          text: "@ironmaiden"
        },
        presentation: {
          title: "Engagement of Audiences – transformando clientes e plateias em fãs",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Alatur",
        logo: "themes/lamec/img/sponsors/alatur.png",
        url: "http://eventick.com.br"
      },
      {
        name: "Expo Center Norte",
        logo: "themes/lamec/img/sponsors/expocenternorte.png",
        url: "http://eventick.com.br"
      },
      {
        name: "Holiday Inn",
        logo: "themes/lamec/img/sponsors/holidayinn.png",
        url: "http://eventick.com.br"
      },
      {
        name: "Novotel",
        logo: "themes/lamec/img/sponsors/novotel.png",
        url: "http://eventick.com.br"
      },
      {
        name: "NH Hoteles",
        logo: "themes/lamec/img/sponsors/nhhoteles.png",
        url: "http://eventick.com.br"
      },
      {
        name: "Fagga",
        logo: "themes/lamec/img/sponsors/fagga.png",
        url: "http://eventick.com.br"
      },
      {
        name: "Iberostar",
        logo: "themes/lamec/img/sponsors/iberostar.png",
        url: "http://eventick.com.br"
      },
      {
        name: "Costão do Santinho",
        logo: "themes/lamec/img/sponsors/costaodosantinho.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "PROGRAMASOM",
        logo: "themes/lamec/img/partners/programasom.png",
        url: "http://braziljs.org"
      },
      {
        name: "WTC",
        logo: "themes/lamec/img/partners/wtc.png",
        url: "http://braziljs.org"
      },
      {
        name: "MK&VAPPS",
        logo: "themes/lamec/img/partners/mkvapps.png",
        url: "http://braziljs.org"
      },
      {
        name: "Levy",
        logo: "themes/lamec/img/partners/levy.png",
        url: "http://braziljs.org"
      },
      {
        name: "Dorier Brasil",
        logo: "themes/lamec/img/partners/dorierbrasil.png",
        url: "http://braziljs.org"
      },
      {
        name: "Magency Digital",
        logo: "themes/lamec/img/partners/magency.png",
        url: "http://braziljs.org"
      }

    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};