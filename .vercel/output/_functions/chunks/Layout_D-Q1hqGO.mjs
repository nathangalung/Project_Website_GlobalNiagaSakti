import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, e as renderScript, d as addAttribute, b as renderComponent, F as Fragment, f as renderHead, g as renderSlot } from './astro/server_C3zvv3EJ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const translations = {
  en: {
    meta: {
      title: {
        home: "PT Global Niaga Sakti - Industrial Solutions Partner",
        about: "About Us - PT Global Niaga Sakti",
        products: "Our Products - PT Global Niaga Sakti",
        customers: "Our Customers - PT Global Niaga Sakti",
        contact: "Contact Us - PT Global Niaga Sakti",
        privacy: "Privacy Policy - PT Global Niaga Sakti",
        terms: "Terms and Conditions - PT Global Niaga Sakti",
        disclaimer: "Disclaimer - PT Global Niaga Sakti"
      },
      description: {
        home: "Your trusted partner for industrial solutions",
        about: "Learn more about PT Global Niaga Sakti",
        products: "Explore our range of high-quality marine products",
        customers: "Trusted partners of PT Global Niaga Sakti",
        contact: "Get in touch with PT Global Niaga Sakti",
        privacy: "Privacy Policy of PT Global Niaga Sakti",
        terms: "Terms and Conditions of PT Global Niaga Sakti",
        disclaimer: "Disclaimer of PT Global Niaga Sakti"
      }
    },
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      customers: "Customers",
      contact: "Contact"
    },
    footer: {
      contact: {
        title: "Contact Us",
        callCenter: "Call Center : 021-5099 6969 (ext. 1249)",
        whatsapp: "Whatsapp : 0811-999-0991 (Chat Only)",
        email: "sales@globalsakti.com",
        copyright: "PT Global Niaga Sakti © 2025 All Rights Reserved."
      },
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms & Condition",
        disclaimer: "Disclaimer"
      }
    },
    home: {
      hero: {
        title: "Your trusted partner for industrial solutions, delivering precision, speed, and excellence, to meet your needs.",
        cta: "Contact Us"
      },
      content: {
        tagline: "With PT Global Niaga Sakti, you don't just get a supplier, you gain a dedicated partner in driving your success forward.",
        products: {
          title: "Our Products",
          description: "We offer comprehensive industrial solutions tailored to meet your specific needs. From product supplies to engineering services, our team ensures excellence in every aspect of our service delivery. With a focus on innovation and quality, we deliver reliable solutions that optimize your operations.",
          cta: "See More"
        },
        customers: {
          title: "Our Customers",
          description: "We take pride in partnering with a wide variety of customers spanning industries such as bulk carriers, multi-purpose vessels, marine logistics, coal production, maritime transport, coal trading, and leading manufacturers.",
          cta: "See More"
        }
      }
    },
    about: {
      intro: {
        title: "Empowering Industries with Precision and Innovation",
        text1: "is your trusted partner in providing marine supplies and industrial solutions. With a strong commitment to quality and reliability, we provide essential products and services to support the maritime industry, offshore operations, and general industrial needs.",
        text2: "Our expertise spans a wide range of marine supplies, from safety equipment and navigation tools to spare parts and provisions. Beyond the maritime sector, we also cater to various industries by delivering high-quality materials, tools, and equipment.",
        text3: "At Global Niaga Sakti, we prioritize customer satisfaction by ensuring timely deliveries, competitive pricing, and exceptional service. Whether you're in the marine industry or need reliable industrial supplies, we are here to provide the right solutions tailored to your requirements."
      },
      vision: {
        title: "Vision and Mission",
        box1: "PT Global Niaga Sakti is a company that consistently provides innovative solutions while maintaining a commitment to always prioritize quality, precision, and accuracy in all of its services. Always being a reliable partner that can be counted on by our customers.",
        box2: "PT Global Niaga Sakti provides high-quality products and services that are always relied upon by customers both domestically and internationally. Supporting customer efficiency and productivity by offering comprehensive services aimed at long-term cooperation, while maintaining customer trust and satisfaction."
      }
    },
    products: {
      title: "Explore our range of high-quality products designed to meet the needs of diverse industries.",
      types: {
        engine: "Engine Supplies",
        safety: "Safety Equipment",
        electric: "Electric Supplies",
        deck: "Deck Supplies",
        cabin: "Cabin Supplies",
        medical: "Medical Store Supplies",
        lubricants: "Safety Lubricants and Calibration",
        sealing: "Sealing Element"
      },
      footer: "and as per client request"
    },
    customers: {
      title: "Trusted by industry leaders across marine logistics, manufacturing, and beyond, our customers are at the heart of everything we do.",
      footer: "and many more companies"
    },
    contact: {
      title: "Our team is ready to assist with expert support and solutions.",
      form: {
        fullName: {
          label: "Full Name",
          placeholder: "Ex. John Doe"
        },
        email: {
          label: "Email",
          placeholder: "Ex. johndoe@gmail.com"
        },
        message: {
          label: "Message",
          placeholder: "Ex. I want to ask a question"
        },
        submit: "Send"
      },
      info: {
        company: "PT Global Niaga Sakti",
        office: "OFFICE",
        contact: "CONTACT",
        email: "EMAIL"
      }
    },
    legal: {
      privacy: {
        title: "Privacy Policy PT Global Niaga Sakti",
        intro1: "At PT. Global Niaga Sakti, accessible from https://globalsakti.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PT. Global Niaga Sakti and how we use it.",
        intro2: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
        sections: {
          logFiles: {
            title: "Log Files",
            text1: "PT. Global Niaga Sakti follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.",
            text2: "These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."
          },
          cookies: {
            title: "Cookies and Web Beacons",
            text: "Like any other website, PT. Global Niaga Sakti uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."
          },
          privacyPolicies: {
            title: "Privacy Policies",
            text1: "You may consult this list to find the Privacy Policy for each of the advertising partners of PT. Global Niaga Sakti.",
            text2: "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on PT. Global Niaga Sakti, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.",
            text3: "Note that PT. Global Niaga Sakti has no access to or control over these cookies that are used by third-party advertisers."
          },
          thirdParty: {
            title: "Third Party Privacy Policies",
            text1: "PT. Global Niaga Sakti's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.",
            text2: "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."
          },
          children: {
            title: "Children's Information",
            text1: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
            text2: "PT. Global Niaga Sakti does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."
          },
          online: {
            title: "Online Privacy Policy Only",
            text: "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in PT. Global Niaga Sakti. This policy is not applicable to any information collected offline or via channels other than this website."
          },
          consent: {
            title: "Consent",
            text: "By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions."
          }
        }
      },
      terms: {
        title: "Terms and Conditions PT Global Niaga Sakti",
        welcome: "Welcome to PT. Global Niaga Sakti!",
        intro: "These terms and conditions outline the rules and regulations for the use of PT. Global Niaga Sakti's Website, located at https://globalsakti.com/.",
        sections: {
          cookies: {
            title: "Cookies",
            text1: "We employ the use of cookies. By accessing PT. Global Niaga Sakti, you agreed to use cookies in agreement with the PT. Global Niaga Sakti's Privacy Policy.",
            text2: "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies."
          },
          license: {
            title: "License",
            text1: "Unless otherwise stated, PT. Global Niaga Sakti and/or its licensors own the intellectual property rights for all material on PT. Global Niaga Sakti. All intellectual property rights are reserved. You may access this from PT. Global Niaga Sakti for your own personal use subjected to restrictions set in these terms and conditions.",
            restrictions: [
              "Republish material from PT. Global Niaga Sakti",
              "Sell, rent or sub-license material from PT. Global Niaga Sakti",
              "Reproduce, duplicate or copy material from PT. Global Niaga Sakti",
              "Redistribute content from PT. Global Niaga Sakti"
            ],
            comments: {
              text1: "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. PT. Global Niaga Sakti does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of PT. Global Niaga Sakti,its agents and/or affiliates.",
              text2: "PT. Global Niaga Sakti reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions."
            },
            warranties: [
              "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so",
              "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party",
              "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy",
              "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity."
            ]
          },
          hyperlinking: {
            title: "Hyperlink to Our Content",
            permitted: [
              "Government agencies",
              "Search engines",
              "News organizations",
              "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses",
              "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website."
            ]
          },
          iframes: {
            title: "iFrames",
            text: "Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website."
          },
          liability: {
            title: "Content Liability",
            text: "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."
          },
          reservation: {
            title: "Reservation of Rights",
            text: "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions."
          }
        }
      },
      disclaimer: {
        title: "Disclaimer PT Global Niaga Sakti",
        text1: "All the information and images on this website – https://globalsakti.com/ – is published in good faith and for general information purpose only.",
        text2: "From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.",
        text3: 'Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.',
        sections: {
          consent: {
            title: "Consent",
            text: "By using our website, you hereby consent to our disclaimer and agree to its terms."
          },
          update: {
            title: "Update",
            text: "Should we update, amend or make any changes to this document, those changes will be prominently posted here."
          }
        }
      }
    }
  },
  id: {
    meta: {
      title: {
        home: "PT Global Niaga Sakti - Mitra Solusi Industri",
        about: "Tentang Kami - PT Global Niaga Sakti",
        products: "Produk Kami - PT Global Niaga Sakti",
        customers: "Pelanggan Kami - PT Global Niaga Sakti",
        contact: "Hubungi Kami - PT Global Niaga Sakti",
        privacy: "Kebijakan Privasi - PT Global Niaga Sakti",
        terms: "Syarat dan Ketentuan - PT Global Niaga Sakti",
        disclaimer: "Sangkalan - PT Global Niaga Sakti"
      },
      description: {
        home: "Mitra terpercaya Anda untuk solusi industri",
        about: "Pelajari lebih lanjut tentang PT Global Niaga Sakti",
        products: "Jelajahi rangkaian produk kelautan berkualitas tinggi kami",
        customers: "Mitra terpercaya PT Global Niaga Sakti",
        contact: "Hubungi PT Global Niaga Sakti",
        privacy: "Kebijakan Privasi PT Global Niaga Sakti",
        terms: "Syarat dan Ketentuan PT Global Niaga Sakti",
        disclaimer: "Sangkalan PT Global Niaga Sakti"
      }
    },
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      products: "Produk",
      customers: "Pelanggan",
      contact: "Kontak"
    },
    footer: {
      contact: {
        title: "Hubungi Kami",
        callCenter: "Call Center : 021-5099 6969 (ext. 1249)",
        whatsapp: "Whatsapp : 0811-999-0991 (Chat Only)",
        email: "sales@globalsakti.com",
        copyright: "PT Global Niaga Sakti © 2025 Hak Cipta Dilindungi."
      },
      legal: {
        privacy: "Kebijakan Privasi",
        terms: "Syarat & Ketentuan",
        disclaimer: "Sangkalan"
      }
    },
    home: {
      hero: {
        title: "Mitra terpercaya Anda untuk solusi industri, memberikan presisi, kecepatan, dan keunggulan, untuk memenuhi kebutuhan Anda.",
        cta: "Hubungi Kami"
      },
      content: {
        tagline: "Dengan PT Global Niaga Sakti, Anda tidak hanya mendapatkan pemasok, Anda mendapatkan mitra yang berdedikasi dalam mendorong kesuksesan Anda ke depan.",
        products: {
          title: "Produk Kami",
          description: "Kami menawarkan solusi industri komprehensif yang disesuaikan untuk memenuhi kebutuhan spesifik Anda. Dari pasokan produk hingga layanan teknis, tim kami memastikan keunggulan dalam setiap aspek layanan kami. Dengan fokus pada inovasi dan kualitas, kami memberikan solusi andal yang mengoptimalkan operasi Anda.",
          cta: "Lihat Selengkapnya"
        },
        customers: {
          title: "Pelanggan Kami",
          description: "Kami bangga bermitra dengan berbagai pelanggan yang mencakup industri seperti kapal pengangkut curah, kapal multiguna, logistik kelautan, produksi batubara, transportasi maritim, perdagangan batubara, dan produsen terkemuka.",
          cta: "Lihat Selengkapnya"
        }
      }
    },
    about: {
      intro: {
        title: "Memberdayakan Industri dengan Presisi dan Inovasi",
        text1: "PT Global Niaga Sakti adalah mitra terpercaya Anda dalam penyediaan kebutuhan kelautan dan solusi industri. Dengan komitmen kuat terhadap kualitas dan keandalan, kami menyediakan produk dan layanan penting untuk mendukung industri maritim, operasi lepas pantai, dan kebutuhan industri umum.",
        text2: "Keahlian kami mencakup berbagai kebutuhan kelautan, dari peralatan keselamatan dan alat navigasi hingga suku cadang dan persediaan. Di luar sektor maritim, kami juga melayani berbagai industri dengan menyediakan bahan, alat, dan peralatan berkualitas tinggi.",
        text3: "Di Global Niaga Sakti, kami memprioritaskan kepuasan pelanggan dengan memastikan pengiriman tepat waktu, harga kompetitif, dan layanan luar biasa. Baik Anda di industri kelautan atau membutuhkan pasokan industri yang andal, kami hadir untuk menyediakan solusi tepat yang disesuaikan dengan kebutuhan Anda."
      },
      vision: {
        title: "Visi dan Misi",
        box1: "PT Global Niaga Sakti adalah perusahaan yang secara konsisten memberikan solusi inovatif sambil mempertahankan komitmen untuk selalu mengutamakan kualitas, presisi, dan akurasi dalam semua layanannya. Selalu menjadi mitra andal yang dapat diandalkan oleh pelanggan kami.",
        box2: "PT Global Niaga Sakti menyediakan produk dan layanan berkualitas tinggi yang selalu diandalkan oleh pelanggan baik domestik maupun internasional. Mendukung efisiensi dan produktivitas pelanggan dengan menawarkan layanan komprehensif yang bertujuan untuk kerja sama jangka panjang, sambil menjaga kepercayaan dan kepuasan pelanggan."
      }
    },
    products: {
      title: "Jelajahi rangkaian produk berkualitas tinggi kami yang dirancang untuk memenuhi kebutuhan berbagai industri.",
      types: {
        engine: "Perlengkapan Mesin",
        safety: "Peralatan Keselamatan",
        electric: "Perlengkapan Listrik",
        deck: "Perlengkapan Dek",
        cabin: "Perlengkapan Kabin",
        medical: "Perlengkapan Medis",
        lubricants: "Pelumas dan Kalibrasi Keselamatan",
        sealing: "Elemen Penyegel"
      },
      footer: "dan sesuai permintaan klien"
    },
    customers: {
      title: "Dipercaya oleh pemimpin industri di bidang logistik kelautan, manufaktur, dan lainnya, pelanggan kami adalah inti dari semua yang kami lakukan.",
      footer: "dan banyak perusahaan lainnya"
    },
    contact: {
      title: "Tim kami siap membantu dengan dukungan dan solusi ahli.",
      form: {
        fullName: {
          label: "Nama Lengkap",
          placeholder: "Cth. John Doe"
        },
        email: {
          label: "Email",
          placeholder: "Cth. johndoe@gmail.com"
        },
        message: {
          label: "Pesan",
          placeholder: "Cth. Saya ingin mengajukan pertanyaan"
        },
        submit: "Kirim"
      },
      info: {
        company: "PT Global Niaga Sakti",
        office: "KANTOR",
        contact: "KONTAK",
        email: "EMAIL"
      }
    },
    legal: {
      privacy: {
        title: "Privacy Policy PT Global Niaga Sakti",
        intro1: "At PT. Global Niaga Sakti, accessible from https://globalsakti.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PT. Global Niaga Sakti and how we use it.",
        intro2: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
        sections: {
          logFiles: {
            title: "Log Files",
            text1: "PT. Global Niaga Sakti follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.",
            text2: "These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."
          },
          cookies: {
            title: "Cookies and Web Beacons",
            text: "Like any other website, PT. Global Niaga Sakti uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."
          },
          privacyPolicies: {
            title: "Privacy Policies",
            text1: "You may consult this list to find the Privacy Policy for each of the advertising partners of PT. Global Niaga Sakti.",
            text2: "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on PT. Global Niaga Sakti, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.",
            text3: "Note that PT. Global Niaga Sakti has no access to or control over these cookies that are used by third-party advertisers."
          },
          thirdParty: {
            title: "Third Party Privacy Policies",
            text1: "PT. Global Niaga Sakti's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.",
            text2: "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."
          },
          children: {
            title: "Children's Information",
            text1: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
            text2: "PT. Global Niaga Sakti does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."
          },
          online: {
            title: "Online Privacy Policy Only",
            text: "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in PT. Global Niaga Sakti. This policy is not applicable to any information collected offline or via channels other than this website."
          },
          consent: {
            title: "Consent",
            text: "By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions."
          }
        }
      },
      terms: {
        title: "Terms and Conditions PT Global Niaga Sakti",
        welcome: "Welcome to PT. Global Niaga Sakti!",
        intro: "These terms and conditions outline the rules and regulations for the use of PT. Global Niaga Sakti's Website, located at https://globalsakti.com/.",
        sections: {
          cookies: {
            title: "Cookies",
            text1: "We employ the use of cookies. By accessing PT. Global Niaga Sakti, you agreed to use cookies in agreement with the PT. Global Niaga Sakti's Privacy Policy.",
            text2: "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies."
          },
          license: {
            title: "License",
            text1: "Unless otherwise stated, PT. Global Niaga Sakti and/or its licensors own the intellectual property rights for all material on PT. Global Niaga Sakti. All intellectual property rights are reserved. You may access this from PT. Global Niaga Sakti for your own personal use subjected to restrictions set in these terms and conditions.",
            restrictions: [
              "Republish material from PT. Global Niaga Sakti",
              "Sell, rent or sub-license material from PT. Global Niaga Sakti",
              "Reproduce, duplicate or copy material from PT. Global Niaga Sakti",
              "Redistribute content from PT. Global Niaga Sakti"
            ],
            comments: {
              text1: "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. PT. Global Niaga Sakti does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of PT. Global Niaga Sakti,its agents and/or affiliates.",
              text2: "PT. Global Niaga Sakti reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions."
            },
            warranties: [
              "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so",
              "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party",
              "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy",
              "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity."
            ]
          },
          hyperlinking: {
            title: "Hyperlink to Our Content",
            permitted: [
              "Government agencies",
              "Search engines",
              "News organizations",
              "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses",
              "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website."
            ]
          },
          iframes: {
            title: "iFrames",
            text: "Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website."
          },
          liability: {
            title: "Content Liability",
            text: "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."
          },
          reservation: {
            title: "Reservation of Rights",
            text: "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions."
          }
        }
      },
      disclaimer: {
        title: "Disclaimer PT Global Niaga Sakti",
        text1: "All the information and images on this website – https://globalsakti.com/ – is published in good faith and for general information purpose only.",
        text2: "From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.",
        text3: 'Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.',
        sections: {
          consent: {
            title: "Consent",
            text: "By using our website, you hereby consent to our disclaimer and agree to its terms."
          },
          update: {
            title: "Update",
            text: "Should we update, amend or make any changes to this document, those changes will be prominently posted here."
          }
        }
      }
    }
  }
};

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const t = translations[currentLang];
  const navItems = [
    { path: "/", name: t.nav.home, position: "46%" },
    { path: "/about", name: t.nav.about, position: "53%" },
    { path: "/product", name: t.nav.products, position: "62%" },
    { path: "/customer", name: t.nav.customers, position: "71%" },
    { path: "/contact", name: t.nav.contact, position: "81%" }
  ];
  const languageNames = {
    id: "Bahasa Indonesia",
    en: "English"
  };
  return renderTemplate`${maybeRenderHead()}<header class="w-full h-[60px] sm:h-[80px] md:h-[100px] fixed top-0 left-0 right-0 bg-white z-50 overflow-hidden font-inter"> <!-- Background containers --> <div class="absolute inset-0"> <!-- White section - full width on mobile --> <div class="absolute top-0 left-0 h-[60px] sm:h-[80px] md:h-[100px] w-full lg:w-[40%] bg-white"> <div class="absolute top-0 right-[-50px] h-[100px] w-[100px] bg-white transform origin-top-right -skew-x-[20deg] hidden lg:block"></div> </div> <!-- Navy blue section - hidden on mobile --> <div class="absolute top-0 right-0 h-[60px] sm:h-[80px] md:h-[100px] w-[60%] bg-primary-1 hidden lg:block"> <div class="absolute top-0 left-[-50px] h-[100px] w-[100px] bg-primary-1 transform origin-top-left skew-x-[20deg]"></div> </div> </div> <!-- Main content container --> <div class="max-w mx-auto px-[5%] h-full relative"> <!-- Logo and company name --> <div class="absolute top-1/2 -translate-y-1/2 flex items-center gap z-20"> <img src="/images/logo/Color.png" alt="Company Logo" class="h-10 md:h-20 w-auto"> <h3 class="text-body1 sm:text-h5 md:text-h4 text-primary-1 whitespace-nowrap">
PT GLOBAL NIAGA SAKTI
</h3> </div> <!-- Desktop Navigation --> <nav class="hidden lg:block h-full"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="absolute top-1/2 -translate-y-1/2 text-body1 text-white hover:text-primary-2 transition-colors whitespace-nowrap z-20"${addAttribute(`left: ${item.position}`, "style")}> ${item.name} </a>`)} <!-- Language Selector --> <div class="absolute top-1/2 -translate-y-1/2" style="right: 5%; z-index: 9999;" id="languageSelector"> <button class="h-[40px] w-[75px] px-5 bg-white rounded-md flex items-center justify-between text-body3 md:text-body1 sm:text-h5 text-primary-1 relative" id="languageButton"> <span id="selectedLang">EN</span> <svg class="w-4 h-4 transition-transform" id="langArrow" viewBox="0 0 21 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> </div> <!-- Moved dropdown outside header for better positioning --> <div class="fixed hidden w-[205px]" id="langDropdown" style="z-index: 99999;"> <div class="bg-primary-2 rounded-lg shadow-xl"> <button class="w-full px-3 py-0.5 text-left text-body3 sm:text-body1 md:text-h5 text-white hover:bg-primary-2/80 transition-colors group" data-lang="id"> <span class="group-data-[selected=true]:underline">${languageNames.id}</span> </button> <div class="w-full h-[1px] bg-white/20"></div> <button class="w-full px-3 py-0.5 text-left text-body3 sm:text-body1 md:text-h5 text-white hover:bg-primary-2/80 transition-colors group" data-lang="en"> <span class="group-data-[selected=true]:underline">${languageNames.en}</span> </button> </div> </div> </nav> <!-- Mobile Navigation Button --> <button class="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary-1 text-white z-20" id="mobileMenuButton" aria-label="Toggle menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <div class="lg:hidden fixed top-0 right-0 w-1/3 h-full bg-primary-1 z-50 transform translate-x-full transition-transform duration-300 ease-in-out shadow-lg" id="mobileMenu"> <!-- Close button --> <button class="absolute top-4 right-4 p-2 text-white" id="closeMenuButton"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <div class="flex flex-col items-start justify-center h-full pl-6"> <div class="flex flex-col space-y-4 w-full"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="text-body3 sm:text-body1 md:text-h5 text-white hover:text-primary-2 transition-colors w-full"> ${item.name} </a>`)} </div> <!-- Mobile Language Selector --> <div class="w-full pr-6 mt-4"> <div class="relative"> <button class="w-full px-4 py-2 bg-white rounded-md flex items-center justify-between text-body3 text-primary-1" id="mobileLangButton"> <span id="selectedMobileLang">EN</span> <svg class="w-4 h-4 transition-transform" id="mobileLangArrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Mobile Language Dropdown --> <div class="bg-primary-2 rounded-lg shadow-xl"> <button class="w-full px-1.5 py-2 text-left text-body3 text-white hover:bg-primary-2/80 transition-colors" data-mobile-lang="id"> ${languageNames.id} </button> <div class="w-full h-[1px] bg-white/20"></div> <button class="w-full px-1.5 py-2 text-left text-body3 text-white hover:bg-primary-2/80 transition-colors" data-mobile-lang="en"> ${languageNames.en} </button> </div> </div> </div> </div> </div> <!-- Backdrop --> <div class="lg:hidden fixed inset-0 bg-black/50 z-40 hidden transition-opacity duration-300" id="menuBackdrop"></div> <!-- Horizontal separator line --> <div class="absolute bottom-0 left-0 w-full h-[1px] bg-primary-1 shadow-md z-30"></div> </div></header> <div class="h-[60px] sm:h-[80px] md:h-[100px]"></div> ${renderScript($$result, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const t = translations[currentLang];
  const navItems = [
    { path: "/", name: t.nav.home },
    { path: "/about", name: t.nav.about },
    { path: "/product", name: t.nav.products },
    { path: "/customer", name: t.nav.customers },
    { path: "/contact", name: t.nav.contact }
  ];
  const contactInfo = {
    callCenter: t.footer.contact.callCenter,
    whatsapp: t.footer.contact.whatsapp,
    email: t.footer.contact.email,
    copyright: t.footer.contact.copyright
  };
  const legalLinks = [
    { path: "/pnp", name: t.footer.legal.privacy },
    { path: "/tnc", name: t.footer.legal.terms },
    { path: "/disclaimer", name: t.footer.legal.disclaimer }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-primary-1 text-white font-inter"> <div class="max-w mx-auto px-[5%] py-[2%]"> <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"> <!-- Company Info --> <div class="md:col-span-5 md:pl-0"> <div class="flex items-center gap-2 mb-4"> <img src="/images/logo/White.png" alt="Logo" class="h-10 w-10"> <h3 class="text-body3 sm:text-body1 md:text-h5">PT GLOBAL NIAGA SAKTI</h3> </div> <address class="text-body6 md:text-body4 sm:text-body2 leading-relaxed not-italic mb-6">
Gedung Wirausaha Lantai 1, Unit 104<br>
Jl. HR. Rasuna Said Kav. C5<br>
Kuningan, Setiabudi<br>
Jakarta Selatan 12920
</address> <p class="text-body6 sm:text-body4 text-white/90 mt-auto md:mt-8"> ${contactInfo.copyright} </p> </div> <!-- Navigation --> <div class="md:col-span-3 flex flex-col gap-2"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="text-body5 sm:text-body3 md:text-body1 hover:text-primary-2 transition-colors"> ${item.name} </a>`)} </div> <!-- Contact Info --> <div class="md:col-span-4 flex flex-col"> <h4 class="text-body3 sm:text-body1 md:text-h5 underline mb-4"> ${t.footer.contact.title} </h4> <div class="flex flex-col gap-3 text-body5 sm:text-body3 mb-4"> <div class="flex items-start gap-3"> <svg class="w-6 h-6 mt-1 shrink-0" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path> </svg> <div class="flex flex-col gap-1"> <div>${contactInfo.callCenter}</div> <div>${contactInfo.whatsapp}</div> </div> </div> <div class="flex items-center gap-3"> <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"> <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path> </svg> <span>${contactInfo.email}</span> </div> </div> <!-- Legal Links --> <div class="flex flex-wrap gap-x-3 gap-y-2 text-body6 sm:text-body4 mt-auto md:mt-8"> ${legalLinks.map((link, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(link.path, "href")} class="underline hover:text-primary-2 transition-colors"> ${link.name} </a> ${index < legalLinks.length - 1 && renderTemplate`<span class="text-white/50">|</span>`}` })}`)} </div> </div> </div> </div> </footer> ${renderScript($$result, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const { title, description } = Astro2.props;
  return renderTemplate`<html${addAttribute(currentLang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="font-inter flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-1"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/layouts/Layout.astro", void 0);

export { $$Layout as $, translations as t };
