import { c as createComponent, a as createAstro, m as maybeRenderHead, e as renderScript, b as addAttribute, r as renderTemplate, d as renderComponent, F as Fragment, g as defineScriptVars, u as unescapeHTML, h as renderSlot, i as renderHead } from './astro/server_dwz2sopV.mjs';
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
        whatsapp: "0811-999-0991 (Chat Only)",
        callCenter: "021-5099 6969 (ext. 1249)",
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
        intro1: "At PT. Global Niaga Sakti, accessible from ",
        intro2: ", one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PT. Global Niaga Sakti and how we use it.",
        intro3: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
        link: "https://globalsakti.com/",
        sections: {
          logFiles: {
            title: "Log Files",
            text: "PT. Global Niaga Sakti follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the ",
            link: "Privacy Policy Generator"
          },
          cookies: {
            title: "Cookies and Web Beacons",
            text1: "Like any other website, PT. Global Niaga Sakti uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
            text2: "For more general information on cookies, please read ",
            link: "the “Cookies” article from the Privacy Policy Generator"
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
        intro1: "These terms and conditions outline the rules and regulations for the use of PT. Global Niaga Sakti's Website, located at https://globalsakti.com/.",
        intro2: "By accessing this website we assume you accept these terms and conditions. Do not continue to use PT. Global Niaga Sakti if you do not agree to take all of the terms and conditions stated on this page.",
        intro3: "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same. Our Terms and Conditions were created with the help of the ",
        link1: "https://globalsakti.com/",
        link2: "Terms & Conditions Generator",
        sections: {
          cookies: {
            title: "Cookies",
            text1: "We employ the use of cookies. By accessing PT. Global Niaga Sakti, you agreed to use cookies in agreement with the PT. Global Niaga Sakti's Privacy Policy.",
            text2: "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies."
          },
          license: {
            title: "License",
            text1: "Unless otherwise stated, PT. Global Niaga Sakti and/or its licensors own the intellectual property rights for all material on PT. Global Niaga Sakti. All intellectual property rights are reserved. You may access this from PT. Global Niaga Sakti for your own personal use subjected to restrictions set in these terms and conditions.",
            text2: "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. PT. Global Niaga Sakti does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of PT. Global Niaga Sakti,its agents and/or affiliates.",
            text3: "PT. Global Niaga Sakti reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.",
            text4: "PT. Global Niaga Sakti reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.",
            text5: "You hereby grant PT. Global Niaga Sakti a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.",
            restrictions: {
              title: "You must not:",
              point: [
                "Republish material from PT. Global Niaga Sakti",
                "Sell, rent or sub-license material from PT. Global Niaga Sakti",
                "Reproduce, duplicate or copy material from PT. Global Niaga Sakti",
                "Redistribute content from PT. Global Niaga Sakti"
              ]
            },
            warranties: {
              title: "You warrant and represent that:",
              point: [
                "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so",
                "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party",
                "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy",
                "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity."
              ]
            }
          },
          hyperlinking: {
            title: "Hyperlink to Our Content",
            text1: "These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.",
            text2: "We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of PT. Global Niaga Sakti; and (d) the link is in the context of general resource information. These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.",
            text3: "If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to PT. Global Niaga Sakti. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.",
            text4: "No use of PT. Global Niaga Sakti’s logo or other artwork will be allowed for linking absent a trademark license agreement.",
            permitted: {
              title: "The following organizations may link to our Website without prior written approval:",
              point: [
                "Government agencies;",
                "Search engines;",
                "News organizations;",
                "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and",
                "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website."
              ]
            },
            consideration: {
              title: "We may consider and approve other link requests from the following types of organizations:",
              point: [
                "commonly-known consumer and/or business information sources;",
                "dot.com community sites;",
                "associations or other groups representing charities;",
                "online directory distributors;",
                "internet portals;",
                "accounting, law and consulting firms; and",
                "educational institutions and trade associations."
              ]
            },
            approval: {
              title: "Approved organizations may hyperlink to our Website as follows:",
              point: [
                "By use of our corporate name; or",
                "By use of the uniform resource locator being linked to; or",
                "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site."
              ]
            }
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
          },
          removal: {
            title: "Removal of links from our website",
            text1: "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.",
            text2: "We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date."
          },
          disclaimer: {
            title: "Penafian",
            permission: {
              title: "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:",
              point: [
                "limit or exclude our or your liability for death or personal injury;",
                "limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
                "limit any of our or your liabilities in any way that is not permitted under applicable law; or",
                "exclude any of our or your liabilities that may not be excluded under applicable law."
              ]
            },
            text1: "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.",
            text2: "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature."
          }
        }
      },
      disclaimer: {
        title: "Disclaimer PT Global Niaga Sakti",
        text1: "All the information and images on this website – ",
        text2: " – is published in good faith and for general information purpose only. PT. Global Niaga Sakti does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (PT. Global Niaga Sakti), is strictly at your own risk. PT. Global Niaga Sakti will not be liable for any losses and/or damages in connection with the use of our website. Our Disclaimer was generated with the help of the ",
        text3: "From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.",
        text4: 'Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.',
        link1: "https://globalsakti.com/",
        link2: "Disclaimer Generator",
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
        customers: "Klien Kami - PT Global Niaga Sakti",
        contact: "Hubungi Kami - PT Global Niaga Sakti",
        privacy: "Kebijakan Privasi - PT Global Niaga Sakti",
        terms: "Syarat dan Ketentuan - PT Global Niaga Sakti",
        disclaimer: "Penafian - PT Global Niaga Sakti"
      },
      description: {
        home: "Mitra terpercaya Anda untuk solusi industri",
        about: "Pelajari lebih lanjut tentang PT Global Niaga Sakti",
        products: "Jelajahi rangkaian produk kelautan berkualitas tinggi kami",
        customers: "Mitra terpercaya PT Global Niaga Sakti",
        contact: "Hubungi PT Global Niaga Sakti",
        privacy: "Kebijakan Privasi PT Global Niaga Sakti",
        terms: "Syarat dan Ketentuan PT Global Niaga Sakti",
        disclaimer: "Penafian PT Global Niaga Sakti"
      }
    },
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      products: "Produk",
      customers: "Klien",
      contact: "Kontak"
    },
    footer: {
      contact: {
        title: "Hubungi Kami",
        whatsapp: "0811-999-0991 (Chat Only)",
        callCenter: "021-5099 6969 (ext. 1249)",
        email: "sales@globalsakti.com",
        copyright: "PT Global Niaga Sakti © 2025 Hak Cipta Dilindungi."
      },
      legal: {
        privacy: "Kebijakan Privasi",
        terms: "Syarat & Ketentuan",
        disclaimer: "Penafian"
      }
    },
    home: {
      hero: {
        title: "Mitra terpercaya Anda untuk solusi industri yang beragam, dengan presisi, kecepatan, dan keunggulan untuk memenuhi kebutuhan Anda.",
        cta: "Hubungi Kami"
      },
      content: {
        tagline: "Bersama PT Global Niaga Sakti, Anda tidak hanya mendapatkan penyedia barang kebutuhan, tetapi juga mitra yang berkomitmen untuk mendukung kesuksesan Anda.",
        products: {
          title: "Produk Kami",
          description: "Kami menyediakan solusi industri yang lengkap dan disesuaikan dengan kebutuhan Anda. Dari penyediaan produk hingga solusi teknikal, tim kami menjamin keunggulan dalam setiap tahap pelayanan. Dengan mengutamakan inovasi dan kualitas, kami menyajikan solusi handal untuk Anda.",
          cta: "Lihat Selengkapnya"
        },
        customers: {
          title: "Klien Kami",
          description: "Kami bangga bermitra dengan berbagai pelanggan dari beragam industri seperti kapal pengangkut curah, kapal multi-guna, logistik maritim, produksi batu bara, transportasi maritim, perdagangan batu bara, dan produsen terkemuka.",
          cta: "Lihat Selengkapnya"
        }
      }
    },
    about: {
      intro: {
        title: "Mendukung Kemajuan Industri melalui Inovasi dan Ketepatan",
        text1: "adalah mitra terpercaya Anda dalam penyediaan kebutuhan maritim dan solusi industri. Dengan komitmen tinggi terhadap kualitas dan keandalan, kami menyediakan produk dan layanan penting untuk mendukung industri maritim, operasi lepas pantai, dan kebutuhan industri secara umum.",
        text2: "Keahlian kami mencakup berbagai macam perlengkapan maritim, mulai dari peralatan keselamatan dan alat navigasi hingga suku cadang dan kebutuhan konsumsi. Selain sektor maritim, kami juga melayani berbagai industri dengan menyediakan bahan, alat, dan perlengkapan berkualitas tinggi.",
        text3: "Di Global Niaga Sakti, kami mengutamakan kepuasan pelanggan dengan memastikan pengiriman tepat waktu, harga yang kompetitif, dan layanan yang luar biasa. Apakah Anda berada di industri maritim atau membutuhkan pasokan industri yang dapat diandalkan, kami hadir untuk memberikan solusi yang tepat sesuai dengan kebutuhan Anda."
      },
      vision: {
        title: "Visi dan Misi",
        box1: "PT Global Niaga Sakti menjadi perusahaan yang konsisten menyediakan solusi inovatif dengan tetap menjaga komitmen untuk selalu mengedepankan kualitas, presisi dan ketepatan dalam semua layanan. Selalu menjadi partner handal yang dapat diandalkan oleh customer kami.",
        box2: "PT Global Niaga Sakti menyediakan produk dan layanan berkualitas yang selalu menjadi andalan customer baik di dalam maupun di luar negeri. Mendukung efisiensi dan produktifitas customer dengan memberikan layanan komprehensif dengan tujuan kerja sama berjangka panjang, serta menjaga kepercayaan dan kepuasan customer."
      }
    },
    products: {
      title: "Jelajahi produk berkualitas tinggi kami yang dirancang untuk memenuhi kebutuhan berbagai industri.",
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
      footer: "dan sesuai permintaan klien"
    },
    customers: {
      title: "Dipercaya oleh berbagai industri di bidang logistik maritim, manufaktur, dan lainnya, kepuasan pelanggan kami adalah inti dari segala yang kami lakukan.",
      footer: "dan masih banyak perusahaan lainnya"
    },
    contact: {
      title: "Tim kami siap membantu dengan dukungan dan solusi yang profesional.",
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
        title: "Kebijakan Privasi PT Global Niaga Sakti",
        intro1: "Di PT. Global Niaga Sakti, yang dapat diakses melalui ",
        intro2: ", salah satu prioritas utama kami adalah privasi pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh PT. Global Niaga Sakti serta bagaimana kami menggunakannya.",
        intro3: "Jika Anda memiliki pertanyaan tambahan atau membutuhkan informasi lebih lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami.",
        link: "https://globalsakti.com/",
        sections: {
          logFiles: {
            title: "File Log",
            text: "PT. Global Niaga Sakti mengikuti prosedur standar dalam menggunakan log file. File-file ini mencatat pengunjung saat mereka mengakses situs web. Semua perusahaan hosting melakukan ini sebagai bagian dari analitik layanan hosting. Informasi yang dikumpulkan melalui log file mencakup alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), tanggal dan waktu akses, halaman rujukan/keluar, dan kemungkinan jumlah klik. Informasi ini tidak terkait dengan data pribadi yang dapat diidentifikasi. Tujuan pengumpulan informasi ini adalah untuk menganalisis tren, mengelola situs, melacak pergerakan pengguna di situs web, dan mengumpulkan informasi demografis. Kebijakan Privasi kami dibuat dengan bantuan ",
            link: "Privacy Policy Generator"
          },
          cookies: {
            title: "Cookies dan Web Beacons",
            text1: "Seperti halnya situs web lainnya, PT. Global Niaga Sakti menggunakan 'cookies'. Cookies ini digunakan untuk menyimpan informasi, termasuk preferensi pengunjung dan halaman pada situs web yang diakses atau dikunjungi oleh pengunjung. Informasi ini digunakan untuk mengoptimalkan pengalaman pengguna dengan menyesuaikan konten halaman web kami berdasarkan jenis browser pengunjung dan/atau informasi lainnya.",
            text2: "Untuk informasi lebih umum tentang cookies, silakan baca",
            link: 'artikel "Cookies" dari Privacy Policy Generator'
          },
          privacyPolicies: {
            title: "Kebijakan Privasi",
            text1: "Anda dapat merujuk daftar ini untuk menemukan Kebijakan Privasi dari masing-masing mitra periklanan PT. Global Niaga Sakti.",
            text2: "Server iklan pihak ketiga atau jaringan iklan menggunakan teknologi seperti cookies, JavaScript, atau Web Beacons yang diterapkan dalam iklan dan tautan mereka yang muncul di PT. Global Niaga Sakti, yang dikirim langsung ke browser pengguna. Secara otomatis, mereka menerima alamat IP Anda ketika hal ini terjadi. Teknologi ini digunakan untuk mengukur efektivitas kampanye iklan mereka dan/atau untuk mempersonalisasi konten iklan yang Anda lihat di situs web yang Anda kunjungi.",
            text3: "Perlu diperhatikan bahwa PT. Global Niaga Sakti tidak memiliki akses atau kontrol atas cookies yang digunakan oleh pengiklan pihak ketiga tersebut."
          },
          thirdParty: {
            title: "Kebijakan Privasi Pihak Ketiga",
            text1: "Kebijakan Privasi PT. Global Niaga Sakti tidak berlaku untuk pengiklan atau situs web lainnya. Oleh karena itu, kami menyarankan Anda untuk membaca Kebijakan Privasi dari server iklan pihak ketiga masing-masing untuk informasi yang lebih rinci. Kebijakan tersebut mungkin mencakup praktik mereka serta petunjuk tentang cara untuk memilih keluar dari opsi tertentu.",
            text2: "Anda dapat memilih untuk menonaktifkan cookies melalui pengaturan browser Anda masing-masing. Untuk informasi lebih rinci tentang pengelolaan cookies di browser tertentu, Anda dapat mengunjungi situs web resmi dari browser yang Anda gunakan. Apa Itu Cookies?"
          },
          children: {
            title: "Informasi Anak-anak",
            text1: "Bagian lain dari prioritas kami adalah memberikan perlindungan tambahan bagi anak-anak saat menggunakan internet. Kami mendorong orang tua dan wali untuk mengawasi, terlibat, dan/atau memantau serta membimbing aktivitas online anak-anak mereka.",
            text2: "PT. Global Niaga Sakti tidak secara sengaja mengumpulkan Informasi Identitas Pribadi dari anak-anak di bawah usia 13 tahun. Jika Anda merasa bahwa anak Anda telah memberikan informasi semacam ini di situs web kami, kami sangat menganjurkan Anda untuk segera menghubungi kami, dan kami akan melakukan upaya terbaik untuk segera menghapus informasi tersebut dari catatan kami."
          },
          online: {
            title: "Kebijakan Privasi Online",
            text: "Kebijakan Privasi ini hanya berlaku untuk aktivitas online kami dan berlaku untuk pengunjung situs web kami terkait informasi yang mereka bagikan dan/atau kumpulkan di PT. Global Niaga Sakti. Kebijakan ini tidak berlaku untuk informasi yang dikumpulkan secara offline atau melalui saluran lain selain situs web ini."
          },
          consent: {
            title: "Persetujuan",
            text: "Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan setuju dengan Syarat dan Ketentuannya."
          }
        }
      },
      terms: {
        title: "Syarat dan Ketentuan PT Global Niaga Sakti",
        welcome: "Selamat datang di PT. Global Niaga Sakti!",
        intro1: "Syarat dan ketentuan ini menguraikan aturan dan regulasi untuk penggunaan situs web PT. Global Niaga Sakti, yang terletak di ",
        intro2: "Dengan mengakses situs web ini, kami menganggap Anda menerima syarat dan ketentuan ini. Jangan lanjutkan penggunaan situs PT. Global Niaga Sakti jika Anda tidak setuju untuk menerima semua syarat dan ketentuan yang tertera di halaman ini.",
        intro3: "Terminologi berikut berlaku untuk Syarat dan Ketentuan ini, Pernyataan Privasi, dan Pemberitahuan Penafian serta semua Perjanjian: “Klien”, “Anda”, dan “Milik Anda” mengacu pada Anda, orang yang mengakses situs web ini dan mematuhi syarat dan ketentuan perusahaan. “Perusahaan”, “Kami”, “Milik Kami”, dan “Kita” mengacu pada perusahaan kami. “Pihak”, “Para Pihak”, atau “Kami”, mengacu pada Klien dan kami sendiri. Semua istilah merujuk pada penawaran, penerimaan, dan pertimbangan pembayaran yang diperlukan untuk menjalankan proses bantuan kami kepada Klien dengan cara yang paling tepat untuk tujuan memenuhi kebutuhan Klien terkait penyediaan layanan yang dinyatakan oleh Perusahaan, sesuai dengan dan tunduk pada hukum yang berlaku di Belanda. Setiap penggunaan terminologi di atas atau kata lain dalam bentuk tunggal, jamak, kapitalisasi, dan/atau dia/mereka, dianggap dapat dipertukarkan dan oleh karena itu merujuk pada hal yang sama. Syarat dan Ketentuan kami dibuat dengan bantuan ",
        link1: "https://globalsakti.com/",
        link2: "Terms & Conditions Generator",
        sections: {
          cookies: {
            title: "Cookies",
            text1: "Kami menggunakan cookies. Dengan mengakses situs PT. Global Niaga Sakti, Anda setuju untuk menggunakan cookies sesuai dengan Kebijakan Privasi PT. Global Niaga Sakti.",
            text2: "Sebagian besar situs web interaktif menggunakan cookies untuk mengambil informasi pengguna pada setiap kunjungan. Cookies digunakan di situs web kami untuk mengaktifkan fungsi tertentu dan mempermudah pengunjung saat mengakses situs kami. Beberapa mitra afiliasi/iklan kami juga mungkin menggunakan cookies."
          },
          license: {
            title: "Lisensi",
            text1: "Kecuali dinyatakan lain, PT. Global Niaga Sakti dan/atau pemberi lisensinya memiliki hak atas kekayaan intelektual untuk semua materi di PT. Global Niaga Sakti. Semua hak kekayaan intelektual dilindungi. Anda dapat mengakses materi dari PT. Global Niaga Sakti untuk penggunaan pribadi Anda, dengan tunduk pada batasan yang ditetapkan dalam syarat dan ketentuan ini.",
            text2: "Perjanjian ini mulai berlaku sejak tanggal ditetapkan.",
            text3: "Bagian dari situs web ini menyediakan kesempatan bagi pengguna untuk memposting dan bertukar opini serta informasi di area tertentu dari situs web. PT. Global Niaga Sakti tidak memfilter, mengedit, menerbitkan, atau meninjau Komentar sebelum muncul di situs web. Komentar tidak mencerminkan pandangan dan opini PT. Global Niaga Sakti, agennya, dan/atau afiliasinya. Komentar mencerminkan pandangan dan opini dari orang yang mempostingnya. Sepanjang diizinkan oleh hukum yang berlaku, PT. Global Niaga Sakti tidak bertanggung jawab atas Komentar atau atas kewajiban, kerusakan, atau biaya yang disebabkan dan/atau diderita sebagai akibat dari penggunaan, posting, dan/atau munculnya Komentar di situs web ini.",
            text4: "PT. Global Niaga Sakti berhak untuk memantau semua Komentar dan menghapus Komentar yang dianggap tidak pantas, menyinggung, atau melanggar Syarat dan Ketentuan ini.",
            text5: "Dengan ini, Anda memberikan PT. Global Niaga Sakti lisensi non-eksklusif untuk menggunakan, mereproduksi, mengedit, dan mengizinkan pihak lain untuk menggunakan, mereproduksi, dan mengedit Komentar Anda dalam segala bentuk, format, atau media.",
            restrictions: {
              title: "Anda tidak diperbolehkan:",
              point: [
                "Menerbitkan ulang materi dari PT. Global Niaga Sakti",
                "Menjual, menyewakan, atau memberikan sub-lisensi atas materi dari PT. Global Niaga Sakti",
                "Mereproduksi, menggandakan, atau menyalin materi dari PT. Global Niaga Sakti",
                "Mendistribusikan ulang konten dari PT. Global Niaga Sakti"
              ]
            },
            warranties: {
              title: "Anda menjamin dan menyatakan bahwa:",
              point: [
                "Anda berhak memposting Komentar di situs web kami dan memiliki semua lisensi serta persetujuan yang diperlukan untuk melakukannya.",
                "Komentar tidak melanggar hak kekayaan intelektual, termasuk namun tidak terbatas pada hak cipta, paten, atau merek dagang pihak ketiga.",
                "Komentar tidak mengandung materi yang bersifat mencemarkan nama baik, memfitnah, menyinggung, tidak senonoh, atau melanggar hukum lainnya yang merupakan pelanggaran privasi.",
                "Komentar tidak akan digunakan untuk meminta atau mempromosikan bisnis, kebiasaan, atau mempresentasikan aktivitas komersial atau aktivitas ilegal."
              ]
            }
          },
          hyperlinking: {
            title: "Menyematkan Tautan ke Konten Kami",
            text1: "Organisasi-organisasi tersebut dapat menautkan ke halaman utama kami, ke publikasi, atau ke informasi lain di situs web kami asalkan tautan tersebut: (a) tidak menyesatkan dalam cara apa pun; (b) tidak secara salah menyiratkan sponsor, dukungan, atau persetujuan dari pihak yang menautkan serta produk dan/atau layanannya; dan (c) sesuai dengan konteks situs pihak yang menautkan.",
            text2: "Kami akan menyetujui permintaan tautan dari organisasi tersebut jika kami memutuskan bahwa: (a) tautan tersebut tidak akan menampilkan kami atau bisnis terakreditasi kami dalam cara yang buruk; (b) organisasi tersebut tidak memiliki catatan negatif dengan kami; (c) manfaat yang kami terima dari visibilitas tautan mengimbangi ketidakhadiran PT. Global Niaga Sakti; dan (d) tautan tersebut sesuai dalam konteks informasi sumber umum.",
            text3: "Organisasi-organisasi ini dapat menautkan ke halaman utama kami asalkan tautan tersebut: (a) tidak menyesatkan dalam cara apa pun; (b) tidak secara salah menyiratkan sponsor, dukungan, atau persetujuan dari pihak yang menautkan serta produk atau layanannya; dan (c) sesuai dengan konteks situs pihak yang menautkan.",
            text4: "Jika Anda adalah salah satu organisasi yang disebutkan di paragraf 2 di atas dan tertarik untuk menautkan ke situs web kami, Anda harus memberi tahu kami dengan mengirim email ke PT. Global Niaga Sakti. Harap sertakan nama Anda, nama organisasi Anda, informasi kontak, serta URL situs Anda, daftar URL apa pun yang ingin Anda tautkan ke situs web kami, dan daftar URL di situs kami yang ingin Anda tautkan. Harap tunggu 2-3 minggu untuk mendapatkan respons.",
            text5: "Penggunaan logo PT. Global Niaga Sakti atau karya seni lainnya tidak diizinkan untuk tautan tanpa perjanjian lisensi merek dagang.",
            permitted: {
              title: "Organisasi berikut diizinkan untuk menautkan ke situs web kami tanpa persetujuan tertulis sebelumnya:",
              point: [
                "Lembaga pemerintah;",
                "Mesin pencari;",
                "Organisasi berita;",
                "Distributor direktori online yang dapat menautkan ke situs web kami dengan cara yang sama seperti mereka menautkan ke situs web bisnis lain yang terdaftar; dan",
                "Bisnis terakreditasi secara sistem luas, kecuali organisasi nirlaba yang mengajukan dana, pusat perbelanjaan amal, dan kelompok penggalangan dana amal yang tidak diizinkan menautkan ke situs web kami."
              ]
            },
            consideration: {
              title: "Kami juga dapat mempertimbangkan dan menyetujui permintaan tautan dari jenis organisasi berikut:",
              point: [
                "Sumber informasi konsumen dan/atau bisnis yang dikenal luas;",
                "Situs komunitas .com;",
                "Asosiasi atau kelompok lain yang mewakili badan amal;",
                "Distributor direktori online;",
                "Portal internet;",
                "Firma akuntansi, hukum, dan konsultan; serta",
                "Institusi pendidikan dan asosiasi perdagangan."
              ]
            },
            approval: {
              title: "Organisasi yang disetujui dapat menautkan ke situs web kami sebagai berikut:",
              point: [
                "Dengan menggunakan nama perusahaan kami; atau",
                "Dengan menggunakan lokasi sumber daya seragam (URL) yang ditautkan; atau",
                "Dengan menggunakan deskripsi lain dari situs web kami yang sesuai dengan konteks dan format konten di situs pihak yang menautkan."
              ]
            }
          },
          iframes: {
            title: "iFrames",
            text: "Tanpa persetujuan sebelumnya dan izin tertulis, Anda tidak diperbolehkan membuat frame di sekitar halaman situs web kami yang dapat mengubah tampilan visual atau tampilan situs web kami dengan cara apa pun."
          },
          liability: {
            title: "Tanggung Jawab Konten",
            text: "Kami tidak bertanggung jawab atas konten apa pun yang muncul di situs web Anda. Anda setuju untuk melindungi dan membela kami dari semua klaim yang timbul dari situs web Anda. Tidak ada tautan yang boleh muncul di situs web mana pun yang dapat diartikan sebagai pencemaran nama baik, tidak senonoh, atau kriminal, atau yang melanggar, mengadvokasi pelanggaran, atau melanggar hak pihak ketiga dengan cara apa pun."
          },
          reservation: {
            title: "Pernyataan Hak",
            text: "Kami berhak untuk meminta Anda menghapus semua tautan atau tautan tertentu ke situs web kami. Anda setuju untuk segera menghapus semua tautan ke situs web kami jika diminta. Kami juga berhak untuk mengubah syarat dan ketentuan ini serta kebijakan tautan kapan saja. Dengan terus menautkan ke situs web kami, Anda setuju untuk terikat oleh dan mematuhi syarat dan ketentuan tautan ini."
          },
          removal: {
            title: "Penghapusan Tautan dari Situs Web Kami",
            text1: "Jika Anda menemukan tautan di situs web kami yang dianggap menyinggung untuk alasan apa pun, Anda bebas untuk menghubungi dan memberi tahu kami kapan saja. Kami akan mempertimbangkan permintaan untuk menghapus tautan, tetapi kami tidak berkewajiban untuk melakukannya atau memberikan tanggapan langsung kepada Anda.",
            text2: "Kami tidak menjamin bahwa informasi di situs web ini benar, lengkap, atau akurat; kami juga tidak menjanjikan untuk memastikan bahwa situs web tetap tersedia atau bahwa materi di situs web selalu diperbarui."
          },
          disclaimer: {
            title: "Penafian",
            permission: {
              title: "Sejauh diizinkan oleh hukum yang berlaku, kami mengecualikan semua pernyataan, jaminan, dan kondisi yang berkaitan dengan situs web kami dan penggunaan situs web ini. Tidak ada dalam penafian ini yang akan:",
              point: [
                "Membatasi atau mengecualikan tanggung jawab kami atau Anda atas kematian atau cedera pribadi;",
                "Membatasi atau mengecualikan tanggung jawab kami atau Anda atas penipuan atau representasi yang menyesatkan;",
                "Membatasi tanggung jawab kami atau Anda dengan cara apa pun yang tidak diizinkan oleh hukum yang berlaku; atau",
                "Mengecualikan tanggung jawab kami atau Anda yang tidak dapat dikecualikan berdasarkan hukum yang berlaku."
              ]
            },
            text1: "Batasan dan larangan tanggung jawab yang ditetapkan dalam Bagian ini dan di tempat lain dalam penafian ini: (a) tunduk pada paragraf sebelumnya; dan (b) mengatur semua tanggung jawab yang timbul berdasarkan penafian, termasuk tanggung jawab yang timbul dalam kontrak, dalam pelanggaran, dan untuk pelanggaran kewajiban hukum.",
            text2: "Selama situs web dan informasi serta layanan di situs web disediakan secara gratis, kami tidak akan bertanggung jawab atas kerugian atau kerusakan dalam bentuk apa pun."
          }
        }
      },
      disclaimer: {
        title: "Penafian PT Global Niaga Sakti",
        text1: "Semua informasi dan gambar di situs web ini - ",
        text2: " – dipublikasikan dengan itikad baik dan untuk tujuan informasi umum saja. PT. Global Niaga Sakti tidak memberikan jaminan apa pun mengenai kelengkapan, keandalan, dan keakuratan informasi ini. Segala tindakan yang Anda lakukan berdasarkan informasi yang Anda temukan di situs web ini (PT. Global Niaga Sakti) sepenuhnya menjadi tanggung jawab Anda sendiri. PT. Global Niaga Sakti tidak akan bertanggung jawab atas kerugian dan/atau kerusakan sehubungan dengan penggunaan situs web kami. Penafian kami dibuat dengan bantuan ",
        text3: "Dari situs web kami, Anda dapat mengunjungi situs web lain melalui tautan ke situs eksternal tersebut. Meskipun kami berupaya menyediakan tautan berkualitas ke situs web yang berguna dan etis, kami tidak memiliki kontrol atas konten dan sifat situs tersebut. Tautan ke situs web lain tidak menyiratkan rekomendasi untuk semua konten yang ditemukan di situs tersebut. Pemilik situs dan kontennya dapat berubah tanpa pemberitahuan sebelumnya dan dapat terjadi sebelum kami memiliki kesempatan untuk menghapus tautan yang mungkin sudah tidak relevan atau tidak sesuai.",
        text4: 'Harap juga diperhatikan bahwa ketika Anda meninggalkan situs web kami, situs lain mungkin memiliki kebijakan privasi dan syarat yang berbeda yang berada di luar kendali kami. Pastikan untuk memeriksa Kebijakan Privasi situs tersebut serta "Syarat dan Ketentuan" mereka sebelum melakukan bisnis apa pun atau mengunggah informasi apa pun.',
        link1: "https://globalsakti.com/",
        link2: "Disclaimer Generator",
        sections: {
          consent: {
            title: "Persetujuan",
            text: "Dengan menggunakan situs web kami, Anda dengan ini menyetujui penafian kami dan setuju dengan syarat-syaratnya."
          },
          update: {
            title: "Pembaruan",
            text: "Jika kami memperbarui, mengubah, atau melakukan penyesuaian apa pun pada dokumen ini, perubahan tersebut akan diumumkan secara jelas di sini."
          }
        }
      }
    }
  }
};

const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const t = translations[currentLang];
  const getNavPositions = (lang) => {
    const baseOffset = 45;
    const gaps = {
      en: [0, 7, 9, 9, 10],
      id: [0, 9, 12, 8, 7]
    };
    return [
      { path: "/", name: t.nav.home, position: `${baseOffset}%` },
      { path: "/about", name: t.nav.about, position: `${baseOffset + gaps[lang][1]}%` },
      { path: "/product", name: t.nav.products, position: `${baseOffset + gaps[lang][1] + gaps[lang][2]}%` },
      { path: "/customer", name: t.nav.customers, position: `${baseOffset + gaps[lang][1] + gaps[lang][2] + gaps[lang][3]}%` },
      { path: "/contact", name: t.nav.contact, position: `${baseOffset + gaps[lang][1] + gaps[lang][2] + gaps[lang][3] + gaps[lang][4]}%` }
    ];
  };
  const navItems = getNavPositions(currentLang);
  const languageNames = {
    id: "Bahasa Indonesia",
    en: "English"
  };
  return renderTemplate`${maybeRenderHead()}<header class="w-full h-[60px] sm:h-[80px] md:h-[100px] fixed top-0 left-0 right-0 bg-white z-50 overflow-hidden font-inter"> <!-- Background containers --> <div class="absolute inset-0"> <!-- White section - full width on mobile --> <div class="absolute top-0 left-0 h-[60px] sm:h-[80px] md:h-[100px] w-full lg:w-[39%] bg-white"> <div class="absolute top-0 right-[-50px] h-[100px] w-[100px] bg-white transform origin-top-right -skew-x-[20deg] hidden lg:block"></div> </div> <!-- Navy blue section - hidden on mobile --> <div class="absolute top-0 right-0 h-[60px] sm:h-[80px] md:h-[100px] w-[61%] bg-primary-1 hidden lg:block"> <div class="absolute top-0 left-[-50px] h-[100px] w-[100px] bg-primary-1 transform origin-top-left skew-x-[20deg]"></div> </div> </div> <!-- Main content container --> <div class="max-w mx-auto px-[5%] h-full relative"> <!-- Logo and company name --> <div class="absolute top-1/2 -translate-y-1/2 flex items-center gap z-20"> <img src="/images/logo/Color.png" alt="Company Logo" class="h-10 md:h-20 w-auto -ml-4"> <h3 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 whitespace-nowrap">
PT GLOBAL NIAGA SAKTI
</h3> </div> <!-- Desktop Navigation --> <nav class="hidden lg:block h-full"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="absolute top-1/2 -translate-y-1/2 text-body5 text-white hover:text-primary-2 transition-colors whitespace-nowrap z-20"${addAttribute(`left: ${item.position}`, "style")}> ${item.name} </a>`)} <!-- Language Selector --> <div class="absolute top-1/2 -translate-y-1/2" style="right: 5%; z-index: 9999;" id="languageSelector"> <button class="h-[40px] w-[75px] px-5 bg-white rounded-md flex items-center justify-between text-body5 text-primary-1 relative" id="languageButton"> <span id="selectedLang">EN</span> <svg class="w-3 h-3 transition-transform" id="langArrow" viewBox="0 0 21 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> </div> <!-- Moved dropdown outside header for better positioning --> <div class="fixed hidden w-[205px]" id="langDropdown" style="z-index: 99999;"> <div class="bg-primary-2 rounded-lg shadow-xl"> <button class="w-full px-3 py-0.5 text-left text-body3 sm:text-body1 text-white hover:bg-primary-2/80 transition-colors group" data-lang="id"> <span class="group-data-[selected=true]:underline">${languageNames.id}</span> </button> <div class="w-full h-[1px] bg-white/20"></div> <button class="w-full px-3 py-0.5 text-left text-body3 sm:text-body1 text-white hover:bg-primary-2/80 transition-colors group" data-lang="en"> <span class="group-data-[selected=true]:underline">${languageNames.en}</span> </button> </div> </div> </nav> <!-- Mobile Navigation Button --> <button class="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary-1 text-white z-20" id="mobileMenuButton" aria-label="Toggle menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <div class="lg:hidden fixed top-0 right-0 w-1/3 h-full bg-primary-1 z-50 transform translate-x-full transition-transform duration-300 ease-in-out shadow-lg" id="mobileMenu"> <!-- Close button --> <button class="absolute top-4 right-4 p-2 text-white" id="closeMenuButton"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <div class="flex flex-col items-start justify-center h-full pl-6"> <div class="flex flex-col space-y-4 w-full"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="text-body3 sm:text-body1 md:text-h5 text-white hover:text-primary-2 transition-colors w-full"> ${item.name} </a>`)} </div> <!-- Update the Mobile Language Selector section --> <div class="w-full pr-6 mt-4"> <div class="relative inline-block w-[85px]"> <button class="w-full px-2 py-2 bg-white rounded-md flex items-center justify-between text-body3 text-primary-1" id="mobileLangButton"> <span id="selectedMobileLang">EN</span> <svg class="w-4 h-4 transition-transform" id="mobileLangArrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Mobile Language Dropdown - Move outside the button container --> <div class="hidden absolute top-full left-0 mt-1 w-[85px] bg-primary-2 rounded-lg shadow-xl" id="mobileLangDropdown" style="z-index: 99999;"> <button class="w-full px-2 py-2 text-left text-body3 text-white hover:bg-primary-2/80 transition-colors" data-mobile-lang="id"> ${languageNames.id} </button> <div class="w-full h-[1px] bg-white/20"></div> <button class="w-full px-2 py-2 text-left text-body3 text-white hover:bg-primary-2/80 transition-colors" data-mobile-lang="en"> ${languageNames.en} </button> </div> </div> </div> </div> </div> <!-- Backdrop --> <div class="lg:hidden fixed inset-0 bg-black/50 z-40 hidden transition-opacity duration-300" id="menuBackdrop"></div> <!-- Horizontal separator line --> <div class="absolute bottom-0 left-0 w-full h-[1px] bg-primary-1 shadow-md z-30"></div> </div></header> <div class="h-[60px] sm:h-[80px] md:h-[100px]"></div> ${renderScript($$result, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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
    whatsapp: t.footer.contact.whatsapp,
    callCenter: t.footer.contact.callCenter,
    email: t.footer.contact.email,
    copyright: t.footer.contact.copyright
  };
  const legalLinks = [
    { path: "/pnp", name: t.footer.legal.privacy },
    { path: "/tnc", name: t.footer.legal.terms },
    { path: "/disclaimer", name: t.footer.legal.disclaimer }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-primary-1 text-white font-inter"> <div class="max-w mx-auto px-[5%] py-[2%]"> <!-- Main Footer Content --> <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8"> <!-- Reduced gap-12 to gap-6 for mobile --> <!-- Company Info --> <div class="md:col-span-5 md:pl-0"> <div class="flex items-center gap-2 mb-2 md:mb-4"> <img src="/images/logo/White.png" alt="Logo" class="h-10 w-10 -ml-1.5"> <h3 class="text-body1 md:text-h5">PT GLOBAL NIAGA SAKTI</h3> </div> <address class="text-body8 md:text-body4 leading-relaxed not-italic mb-4 md:mb-6">
Gedung Wirausaha Lantai 1, Unit 104<br>
Jl. HR. Rasuna Said Kav. C5<br>
Kuningan, Setiabudi<br>
Jakarta Selatan 12920
</address> <p class="hidden md:block text-body8 text-white/90 mt-auto md:mt-4"> ${contactInfo.copyright} </p> </div> <!-- Navigation - Updated for mobile grid --> <div class="md:col-span-3 mb-4 md:mb-0"> <div class="grid grid-cols-3 md:flex md:flex-col gap-2"> ${navItems.map((item, index) => renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(`text-body3 underline hover:text-primary-2 transition-colors ${// Center the last item if total items is odd
  index === navItems.length - 1 && navItems.length % 2 !== 0 ? "col-start-2" : ""}`, "class")}> ${item.name} </a>`)} </div> </div> <!-- Contact Info --> <div class="md:col-span-4 flex flex-col"> <h4 class="text-body3 md:text-body3 underline mb-4"> ${t.footer.contact.title} </h4> <div class="flex flex-col gap-3 text-body4 mb-6"> <div class="flex flex-col gap-2">  <div class="flex items-center gap-3"> <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"> <path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"></path> </svg> <div>${contactInfo.whatsapp}</div> </div>  <div class="flex items-center gap-3"> <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path> </svg> <div>${contactInfo.callCenter}</div> </div> </div>  <div class="flex items-center gap-3"> <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"> <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path> </svg> <span>${contactInfo.email}</span> </div> </div> <!-- Legal Links - Updated for mobile centering --> <div class="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1 text-body8 mt-auto md:mt"> <div class="w-full md:w-auto grid grid-cols-3 md:flex md:flex-row gap-3 justify-center items-center"> ${legalLinks.map((link, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(link.path, "href")} class="text-center md:text-left underline hover:text-primary-2 transition-colors"> ${link.name} </a> ${index < legalLinks.length - 1 && renderTemplate`<span class="hidden md:inline text-white/50">|</span>`}` })}`)} </div> </div> </div> <!-- Mobile Copyright - Shown at bottom --> <div class="md:hidden text-center border-white/20"> <p class="text-body8 text-white/90"> ${contactInfo.copyright} </p> </div> </div> </div></footer>`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  const googleAnalyticsId = "G-XZEJPDC2G2";
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a$1 || (_a$1 = __template$1(["<script async", "></script><script>(function(){", "\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', googleAnalyticsId, {\n      send_page_view: true,\n      cookie_flags: 'SameSite=None;Secure'\n    });\n  })();</script>"])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`, "src"), defineScriptVars({ googleAnalyticsId })) })}`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/GoogleAnalytics.astro", void 0);

const $$Astro$1 = createAstro();
const $$CookieConsent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CookieConsent;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  return renderTemplate`${maybeRenderHead()}<div id="cookie-consent" class="fixed bottom-0 w-full bg-white shadow-lg border-t border-gray-200 py-4 px-6 z-50 hidden"> <div class="container mx-auto flex flex-col md:flex-row justify-between items-center"> <p class="text-body5 md:text-body4 mb-4 md:mb-0 pr-4"> ${currentLang === "en" ? 'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.' : 'Kami menggunakan cookie untuk meningkatkan pengalaman browsing Anda dan menganalisis lalu lintas kami. Dengan mengklik "Terima", Anda menyetujui penggunaan cookie kami.'} </p> <div class="flex gap-3"> <button id="cookie-accept" class="px-4 py-2 bg-primary-1 text-white rounded-md text-body5 hover:bg-primary-1/90 transition-colors"> ${currentLang === "en" ? "Accept" : "Terima"} </button> <button id="cookie-decline" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-body5 hover:bg-gray-300 transition-colors"> ${currentLang === "en" ? "Decline" : "Tolak"} </button> </div> </div> </div> ${renderScript($$result, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/CookieConsent.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const { title, description } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "https://globalsakti.com").toString();
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="generator"', '><meta name="google-site-verification" content="YOUR_VERIFICATION_CODE"><!-- SEO Meta Tags --><meta name="robots" content="index, follow"><meta name="author" content="PT Global Niaga Sakti"><meta name="keywords" content="industrial solutions, marine supplies, safety equipment, industrial partner, global niaga sakti, jakarta"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="/images/logo/Color.png"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image" content="/images/logo/Color.png"><!-- Canonical URL --><link rel="canonical"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"><title>', "</title>", "", '</head> <body class="font-inter flex flex-col min-h-screen"> ', ' <main class="flex-1"> ', " </main> ", " ", ' <!-- Structured data for organization --> <script type="application/ld+json">', "<\/script> </body> </html>"])), addAttribute(currentLang, "lang"), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "href"), title, renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "CookieConsent", $$CookieConsent, {}), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PT Global Niaga Sakti",
    "url": "https://globalsakti.com",
    "logo": "https://globalsakti.com/images/logo/Color.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "021-5099 6969",
      "contactType": "customer service",
      "email": "sales@globalsakti.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gedung Wirausaha Lantai 1, Unit 104, Jl. HR. Rasuna Said Kav. C5",
      "addressLocality": "Jakarta Selatan",
      "postalCode": "12920",
      "addressCountry": "ID"
    }
  })));
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/layouts/Layout.astro", void 0);

export { $$Layout as $, translations as t };
