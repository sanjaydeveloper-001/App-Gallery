import TimeDelayImg from "../assets/timeDelay.jpg";
import MailMoodImg from "../assets/MailMood.jpg";
import ChartMyDayImg from "../assets/TimeTracker.jpg";
import NoteNestImg from "../assets/NoteNest.jpg";
import GiffyImg from "../assets/Giffy.jpg";
import TicTacTaiImg from "../assets/Tictactai.jpg";
import CrudApiImg from "../assets/CrudAPI.jpg";
import MongoCrudApiImg from "../assets/MongoDBCrudAPI.jpg";
import CinemaImg from "../assets/CineMax.jpg";
import ExpenseTrackerImg from "../assets/ExpenceTracker.jpg";
import DomArrayImg from "../assets/DOMArrayMethods.jpg";
import TypeSpeedImg from "../assets/TypeSpeed.jpg";
import ImgBlurImg from "../assets/ImageBlur.jpg";
import AiWebsiteImg from "../assets/AI_website.jpg";
import AiColorImg from "../assets/AI_Color.jpg";
import ExchangeRateImg from "../assets/ExchangeRate.jpg";
import AiTattooImg from "../assets/AI_Tattoo.jpg";
import AiSitemapImg from "../assets/AI_SiteMap.jpg";
import BmiImg from "../assets/BMICalcy.jpg";
import ImgPdfCompressImg from "../assets/Img_PDFCompressor.jpg";
import ImgPdfConvertImg from "../assets/Img_PDFConvertor.jpg";
import EmojiTranslatorImg from "../assets/Emoji-Translator.jpg";
import PasswordGenImg from "../assets/PasswordGenerator.jpg";
import WeatherAppImg from "../assets/WeatherApp.jpg";
import QrGenImg from "../assets/QR_gen.jpg";
import UnitConverterImg from "../assets/UnitConvertor.jpg";
import QuickNotesImg from "../assets/QuickNotes.jpg";
import VoiceDesk from "../assets/VoiceDesk.png";
import HabitHarizon from "../assets/HabitHarizon.png";
import AppsGallery from "../assets/30AppsGallery.png";


// Links 

export const Links = {
  GitHub : "https://github.com/sanjaydeveloper-001/",
  LinkedIn: "https://linkedin.com/in/josanweb/",
  LeetCode: "https://leetcode.com/u/Sanjay_dev_001/",
  GitRepo: "Vanilla-to-Vision-30-Apps/tree/main/",
  HostingWeb : ".netlify.app/"
}

// USER 

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ProfileImage from "../assets/Profile.jpg";

export const User = {
  profile: ProfileImage,
  name: "SANJAY D",
  dept: "MERN Developer • B.Tech IT",
  desc: "Passionate about building interactive web apps, currently completed <strong>30 Apps in 30 Days</strong>.",
  soLinks: [
    {
      icon: <FaGithub size={22} className="text-gray-800 hover:text-black transition" />,
      link: Links.GitHub,
    },
    {
      icon: <FaLinkedin size={22} className="text-blue-600 hover:text-blue-800 transition" />,
      link: Links.LinkedIn,
    },
    {
      icon: <SiLeetcode size={24} className="text-orange-500 hover:text-orange-600 transition" />,
      link: Links.LeetCode,
    },
  ],
};

// Projects 

const projects = [
  {
    id: 1,
    title: "Time Delay",
    short: "App to display text with timed delays for fun animations.",
    preview: "timedelaytext",
    repoName: "TimeDelay",
    tags: ["React", "Tailwind"],
    image: TimeDelayImg,
  },
  {
    id: 2,
    title: "Mail Mood",
    short: "Send emails with style and mood-based templates.",
    preview: "moodmailing",
    repoName: "Mail_Mood",
    tags: ["React", "Tailwind"],
    image: MailMoodImg,
  },
  {
    id: 3,
    title: "Chart My Day",
    short: "Track and visualize your daily activities with charts.",
    preview: "chartmyday",
    repoName: "TimeTrakerChart",
    tags: ["React", "Tailwind", "Chart"],
    image: ChartMyDayImg,
  },
  {
    id: 4,
    title: "Note Nest",
    short: "Simple and organized note-taking app for productivity.",
    preview: "nodenest2",
    repoName: "NoteNest",
    tags: ["React", "Tailwind"],
    image: NoteNestImg,
  },
  {
    id: 5,
    title: "GIF Quest",
    short: "Search and explore GIFs instantly with API integration.",
    preview: "gifquest",
    repoName: "GiffyApp",
    tags: ["React", "Tailwind", "API"],
    image: GiffyImg,
  },
  {
    id: 6,
    title: "Tic Tac Tai",
    short: "Classic Tic Tac Toe with AI-powered gameplay.",
    preview: "tictactai",
    repoName: "TicTacTai",
    tags: ["React", "Tailwind", "API", "AI"],
    image: TicTacTaiImg,
  },
  {
    id: 7,
    title: "CRUD API",
    short: "Practice CRUD operations with a quotes API.",
    preview: "crudapimodel",
    repoName: "Quotes",
    tags: ["React", "Tailwind", "API"],
    image: CrudApiImg,
  },
  {
    id: 8,
    title: "MongoDB CRUD API",
    short: "Full CRUD app with MongoDB integration.",
    preview: "no preview link",
    repoName: "MongoCRUD_API",
    tags: ["React", "Tailwind", "API"],
    image: MongoCrudApiImg,
  },
  {
    id: 9,
    title: "Cinema Ticket",
    short: "Book and manage movie tickets easily.",
    preview: "getmovieticket",
    repoName: "MovieSeatBooking",
    tags: ["React", "Tailwind"],
    image: CinemaImg,
  },
  {
    id: 10,
    title: "Expense Tracker",
    short: "Track and manage your daily expenses with charts.",
    preview: "expencetracking",
    repoName: "ExpenceTracker",
    tags: ["React", "Tailwind"],
    image: ExpenseTrackerImg,
  },
  {
    id: 11,
    title: "DOM Array Method",
    short: "Play with arrays and wealth calculation features.",
    preview: "domarraymethod",
    repoName: "Wealthy-Calcy",
    tags: ["React", "Tailwind", "API"],
    image: DomArrayImg,
  },
  {
    id: 12,
    title: "Typing Speed Test",
    short: "Test and improve typing speed with real-time results.",
    preview: "typestest",
    repoName: "Speed-Typer",
    tags: ["React", "Tailwind", "Database"],
    image: TypeSpeedImg,
  },
  {
    id: 13,
    title: "Img Blur App",
    short: "Apply stylish blur effects to your images.",
    preview: "imgblur",
    repoName: "BlurImage",
    tags: ["React", "Tailwind", "Styling"],
    image: ImgBlurImg,
  },
  {
    id: 14,
    title: "AI Website Generator",
    short: "Generate websites instantly using AI.",
    preview: "aiwebsitefree",
    repoName: "AI_Website_creater",
    tags: ["React", "Tailwind", "API", "AI"],
    image: AiWebsiteImg,
  },
  {
    id: 15,
    title: "AI Color Palette",
    short: "Create unique color palettes with AI assistance.",
    preview: "aicolorgenerator",
    repoName: "AI_Color_pattles",
    tags: ["React", "Tailwind", "API", "AI"],
    image: AiColorImg,
  },
  {
    id: 16,
    title: "Exchange Rate",
    short: "Check and convert currency exchange rates in real-time.",
    preview: "moneyexchangefree",
    repoName: "ExchangeRate",
    tags: ["React", "Tailwind", "API"],
    image: ExchangeRateImg,
  },
  {
    id: 17,
    title: "AI Tattoo Studio",
    short: "Generate tattoo designs powered by AI.",
    preview: "aitattoo",
    repoName: "AI_Tatoo_Generater",
    tags: ["React", "Tailwind", "API", "AI"],
    image: AiTattooImg,
  },
  {
    id: 18,
    title: "AI Sitemap Builder",
    short: "Create website sitemaps quickly using AI tools.",
    preview: "aisitemap",
    repoName: "AI_Site_Generator",
    tags: ["React", "Tailwind", "API", "AI"],
    image: AiSitemapImg,
  },
  {
    id: 19,
    title: "BMI Calculator",
    short: "Easily calculate BMI with instant results.",
    preview: "bmicheckcalcy",
    repoName: "BMICalculator",
    tags: ["React", "Tailwind"],
    image: BmiImg,
  },
  {
    id: 20,
    title: "Img & PDF Compressor",
    short: "Compress images and PDFs for optimized size.",
    preview: "imgpdf-com",
    repoName: "Img-Pdf-Compressoser",
    tags: ["React", "Tailwind", "jpdf"],
    image: ImgPdfCompressImg,
  },
  {
    id: 21,
    title: "Img to PDF Converter",
    short: "Convert images to PDF in one click.",
    preview: "img2pdf-converter",
    repoName: "Img-Pdf-Converter",
    tags: ["React", "Tailwind", "jpdf"],
    image: ImgPdfConvertImg,
  },
  {
    id: 22,
    title: "Emoji Translator",
    short: "Translate text into fun emojis.",
    preview: "emoji-translate",
    repoName: "EmojiTranslator",
    tags: ["React", "Tailwind", "react-emoji"],
    image: EmojiTranslatorImg,
  },
  {
    id: 23,
    title: "Password Generator",
    short: "Generate strong and secure passwords instantly.",
    preview: "passwordgenvalut",
    repoName: "PasswordGenerator",
    tags: ["React", "Tailwind"],
    image: PasswordGenImg,
  },
  {
    id: 24,
    title: "Weather App",
    short: "Get live weather updates for any city.",
    preview: "cityweathr",
    repoName: "WhetherApp",
    tags: ["React", "Tailwind", "API"],
    image: WeatherAppImg,
  },
  {
    id: 25,
    title: "QR Generator",
    short: "Generate QR codes for any text or link.",
    preview: "qrgenwebs",
    repoName: "QR_Code_Generator",
    tags: ["React", "Tailwind", "QrCode"],
    image: QrGenImg,
  },
  {
    id: 26,
    title: "Unit Converter",
    short: "Convert units like weight, length, and more easily.",
    preview: "unitcalcy",
    repoName: "UnitCalculater",
    tags: ["React", "Tailwind", "Maths"],
    image: UnitConverterImg,
  },
  {
    id: 27,
    title: "Quick Notes",
    short: "Take and save quick notes with summaries.",
    preview: "quicksummirize",
    repoName: "QuickNotes",
    tags: ["React", "Tailwind", "Summarize"],
    image: QuickNotesImg,
  },
  {
    id:28,
    title: "Voice Desk",
    short: "You can change ur Text into Voice & Voice into Text.",
    preview: "voicedesk",
    repoName: "voiceDesk",
    tags: ["React", "Tailwind", "Voice"],
    image: VoiceDesk,
  },
  {
    id:29,
    title: "Habit Harizon",
    short: "You can track ur Habits & also get a badges related to ur streak maintaining the tasks.",
    preview: "habitharizon",
    repoName: "HabitHarizon",
    tags: ["React", "Tailwind", "Habits"],
    image: HabitHarizon,
  },
  {
    id:30,
    title: "30 Apps Gallery",
    short: "You can see the 30 apps as a gallery in single page.",
    preview: "30appsgallery",
    repoName: "Vanilla-to-Vision-30-Apps",
    tags: ["React", "Tailwind", "Collections"],
    image: AppsGallery,
  }
];

export default projects;
