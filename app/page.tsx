"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Youtube,
    Facebook,
    Music,
    Mail,
    Phone,
    MapPin,
    BookOpen,
    Mic,
    Award,
    Users,
    Star,
    Eye,
    Feather,
    Trophy,
    Globe,
    Heart,
    Download,
    Play,
    Pause,
    Share2,
    MessageCircle,
    Headphones,
    PenTool,
    Scroll,
    User,
    ArrowUp,
    Instagram,
    ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RabeaElJarhiPortfolio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            const sections = [
                "home",
                "about",
                "journey",
                "works",
                "achievements",
                "gallery",
                "contact",
            ];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div
            className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden"
            dir="rtl"
        >
            {/* Professional Dark Background */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>

            {/* Subtle Pattern Overlay */}
            <div className="fixed inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                ></div>
            </div>

            {/* Professional Header */}
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrollY > 50
                        ? "bg-gray-950/95 backdrop-blur-xl border-b border-gray-800"
                        : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-6 py-4">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                                    <Feather className="h-7 w-7 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-950"></div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-white">
                                    ربيع الجارحي
                                </h1>
                                <p className="text-sm text-amber-400 font-medium">
                                    Rabea ElJarhi
                                </p>
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center gap-8">
                            {[
                                { id: "home", label: "الرئيسية" },
                                { id: "about", label: "عن الشاعر" },
                                { id: "works", label: "الأعمال" },
                                { id: "achievements", label: "الإنجازات" },
                                { id: "contact", label: "التواصل" },
                            ].map((item) => (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                                        activeSection === item.id
                                            ? "bg-amber-600/20 text-amber-400 border border-amber-600/30"
                                            : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                السيرة الذاتية
                            </Button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section
                id="home"
                className="relative min-h-screen flex items-center justify-center px-6"
            >
                <div className="container mx-auto text-center relative z-10">
                    {/* Profile Image */}
                    <div className="mt-25">
                        <div className="relative inline-block">
                            <div className="w-64 h-64 mx-auto mb-8 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full p-1">
                                    <Image
                                        src="/photo.jpg"
                                        alt="الشاعر ربيع الجارحي"
                                        width={250}
                                        height={250}
                                        className="rounded-full object-cover w-full h-full border-2 border-gray-950"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-amber-600 rounded-full p-3 border-4 border-gray-950 shadow-lg">
                                    <Feather className="h-6 w-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Name and Title */}
                    <div className="space-y-6 mb-12">
                        <div>
                            <h2 className="text-6xl md:text-7xl font-bold text-white mb-2 leading-tight">
                                ربيع الجارحي
                            </h2>
                            <h3 className="text-2xl text-amber-400 font-medium mb-4">
                                Rabea ElJarhi
                            </h3>
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-600"></div>
                                <p className="text-xl text-gray-300 font-medium">
                                    شاعر وكاتب معاصر
                                </p>
                                <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-600"></div>
                            </div>
                        </div>

                        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            رحلة إبداعية في عالم الشعر العربي المعاصر، حيث تلتقي
                            الأصالة بالحداثة في قوالب شعرية تنبض بالحياة. شاعر
                            يسعى لتقديم كلمات تلامس القلوب وتحرك المشاعر، مع
                            الحفاظ على جمال اللغة العربية وقوتها التعبيرية.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-amber-600/30 transition-all duration-300">
                            <div className="text-3xl font-bold text-amber-400 mb-2">
                                500K+
                            </div>
                            <div className="text-gray-400 text-sm">
                                متابع مخلص
                            </div>
                        </div>
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-amber-600/30 transition-all duration-300">
                            <div className="text-3xl font-bold text-amber-400 mb-2">
                                10M+
                            </div>
                            <div className="text-gray-400 text-sm">مشاهدة</div>
                        </div>
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-amber-600/30 transition-all duration-300">
                            <div className="text-3xl font-bold text-amber-400 mb-2">
                                8
                            </div>
                            <div className="text-gray-400 text-sm">
                                ديوان منشور
                            </div>
                        </div>
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-amber-600/30 transition-all duration-300">
                            <div className="text-3xl font-bold text-amber-400 mb-2">
                                15+
                            </div>
                            <div className="text-gray-400 text-sm">
                                جائزة أدبية
                            </div>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center gap-4 mb-12">
                        <Button
                            asChild
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Link
                                href="https://www.youtube.com/@rabeaaljarhi"
                                target="_blank"
                            >
                                <Youtube className="mr-2 h-5 w-5" />
                                يوتيوب
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Link
                                href="https://www.facebook.com/share/1GBv2r3ueg/"
                                target="_blank"
                            >
                                <Facebook className="mr-2 h-5 w-5" />
                                فيسبوك
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Link
                                href="https://www.tiktok.com/@algarhy123a?_t=ZS-8yT7P1Ay2FB&_r=1"
                                target="_blank"
                            >
                                <Music className="mr-2 h-5 w-5" />
                                تيك توك
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative py-24 px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>

                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-800 mb-8">
                            <User className="h-5 w-5 text-amber-400" />
                            <span className="text-gray-300 font-medium">
                                التعريف بالشاعر
                            </span>
                        </div>
                        <h3 className="text-5xl font-bold text-white mb-6">
                            عن ربيع الجارحي
                        </h3>
                        <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            اكتشف قصة شاعر استطاع أن يحول الكلمات إلى سحر،
                            والمشاعر إلى قصائد تتردد في قلوب القراء
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-800 hover:border-amber-600/30 transition-all duration-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-white flex items-center gap-3">
                                        <div className="p-2 bg-amber-600/20 rounded-lg">
                                            <Scroll className="h-6 w-6 text-amber-400" />
                                        </div>
                                        النشأة والبداية
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 leading-relaxed">
                                        وُلد الشاعر ربيع الجارحي في بيئة ثقافية
                                        عريقة، حيث نشأ وسط عائلة تقدر الأدب
                                        والشعر. بدأ كتابة الشعر في سن مبكرة،
                                        وتأثر بكبار الشعراء العرب. تميز منذ
                                        البداية بقدرته على التعبير عن المشاعر
                                        الإنسانية بطريقة مبتكرة وجذابة، مما جعله
                                        يحتل مكانة مميزة في المشهد الشعري
                                        المعاصر.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-800 hover:border-amber-600/30 transition-all duration-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-white flex items-center gap-3">
                                        <div className="p-2 bg-amber-600/20 rounded-lg">
                                            <PenTool className="h-6 w-6 text-amber-400" />
                                        </div>
                                        الأسلوب الشعري
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 leading-relaxed">
                                        يتميز أسلوب ربيع الجارحي بالجمع بين
                                        الأصالة والحداثة، حيث يستخدم اللغة
                                        العربية الفصحى بطريقة معاصرة تناسب الجيل
                                        الحالي. يركز في قصائده على المشاعر
                                        الإنسانية الصادقة، والقضايا الاجتماعية
                                        المعاصرة، بالإضافة إلى الحب والوطن
                                        والطبيعة، مما يجعل شعره قريباً من قلوب
                                        الناس.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-800 hover:border-amber-600/30 transition-all duration-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-white flex items-center gap-3">
                                        <div className="p-2 bg-amber-600/20 rounded-lg">
                                            <Globe className="h-6 w-6 text-amber-400" />
                                        </div>
                                        التأثير والانتشار
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 leading-relaxed">
                                        استطاع ربيع الجارحي أن يحقق نجاحاً
                                        كبيراً على منصات التواصل الاجتماعي، حيث
                                        يتابعه أكثر من نصف مليون متابع عبر مختلف
                                        المنصات. يقدم محتوى متنوع يشمل القصائد
                                        المرئية، والأمسيات الشعرية، والتفاعل
                                        المباشر مع محبي الشعر، مما جعله من أبرز
                                        الأصوات الشعرية في العالم الرقمي.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            <div className="relative">
                                <Image
                                    src="/placeholder.svg?height=500&width=400&text=الشاعر+في+مكتبه"
                                    alt="الشاعر ربيع الجارحي في مكتبه"
                                    width={400}
                                    height={500}
                                    className="rounded-2xl shadow-2xl border border-gray-800"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-gray-950/80 backdrop-blur-md rounded-xl p-6 border border-gray-800">
                                    <h4 className="text-white font-bold text-lg mb-2">
                                        مقولة الشاعر
                                    </h4>
                                    <p className="text-amber-400 italic">
                                        "الشعر ليس مجرد كلمات تُكتب، بل روح
                                        تتنفس وقلب ينبض بالحياة"
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center hover:border-amber-600/30 transition-all duration-300">
                                    <Trophy className="h-10 w-10 text-amber-400 mx-auto mb-3" />
                                    <div className="text-2xl font-bold text-white mb-1">
                                        15+
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        جائزة أدبية
                                    </div>
                                </div>
                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center hover:border-amber-600/30 transition-all duration-300">
                                    <Users className="h-10 w-10 text-amber-400 mx-auto mb-3" />
                                    <div className="text-2xl font-bold text-white mb-1">
                                        500K+
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        متابع
                                    </div>
                                </div>
                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center hover:border-amber-600/30 transition-all duration-300">
                                    <BookOpen className="h-10 w-10 text-amber-400 mx-auto mb-3" />
                                    <div className="text-2xl font-bold text-white mb-1">
                                        8
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        ديوان شعري
                                    </div>
                                </div>
                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center hover:border-amber-600/30 transition-all duration-300">
                                    <Mic className="h-10 w-10 text-amber-400 mx-auto mb-3" />
                                    <div className="text-2xl font-bold text-white mb-1">
                                        100+
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        أمسية شعرية
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Works Section */}
            <section id="works" className="relative py-24 px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-800 mb-8">
                            <BookOpen className="h-5 w-5 text-amber-400" />
                            <span className="text-gray-300 font-medium">
                                الإبداعات الأدبية
                            </span>
                        </div>
                        <h3 className="text-5xl font-bold text-white mb-6">
                            الأعمال الشعرية
                        </h3>
                        <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            مجموعة من أروع الدواوين والأعمال الشعرية التي تركت
                            بصمة في عالم الأدب العربي
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "العمر راح من بدايته",
                                subtitle: "قصائد رومانسية وعاطفية",
                                description:
                                    "مجموعة من أجمل القصائد الرومانسية التي تعبر عن مشاعر الحب والشوق. يحتوي على 45 قصيدة متنوعة تناسب جميع مراحل الحب.",
                                year: "2024",
                                rating: 4.8,
                                youtube:
                                    "https://youtu.be/9V6Jyy029B4?si=gwq_7dHrezrx_mC",
                                image: "/books/book1.jpg",
                            },
                            {
                                title: "أنواع الجدعنه وأصحابها",
                                subtitle: "قصائد وطنية وقومية",
                                description:
                                    "مجموعة قصائد تعبر عن حب الوطن والانتماء. يضم 38 قصيدة تتناول التاريخ والحضارة والأمل في المستقبل.",
                                year: "2025",
                                rating: 4.7,
                                youtube:
                                    "https://youtu.be/8q7m5czdlos?si=qWOyIopYcxeZRGsH",
                                image: "/books/book2.jpg",
                            },
                            {
                                title: "وصف الست الشقيانه فى كلمتين",
                                subtitle: "قصائد اجتماعية وإنسانية",
                                description:
                                    "قصائد تتناول القضايا الاجتماعية والإنسانية بأسلوب شاعري مؤثر. يحتوي على 42 قصيدة تعالج مواضيع العدالة والسلام.",
                                year: "2024",
                                rating: 4.6,
                                youtube:
                                    "https://youtu.be/Ias8OWkK3VA?si=Yk4vOeCRSyUPkllM",
                                image: "/books/book3.jpg",
                            },
                            {
                                title: "أعظم ما قيل عن الأم المتوافاه وكأنها لم تمت",
                                subtitle: "قصائد تأملية وفلسفية",
                                description:
                                    "رحلة شعرية عميقة تتناول معاني الحياة والوجود. يضم 35 قصيدة تأملية تدعو للتفكر في الكون والحياة.",
                                year: "2024",
                                rating: 4.5,
                                youtube:
                                    "https://youtu.be/Wcg2dJ3F_jo?si=4uVMbFLNSVdwRZmC",
                                image: "/books/book4.jpg",
                            },
                            {
                                title: "تعالى شوف الناس اللى فى القطر دى عامله ازاى",
                                subtitle: "قصائد الحياة المعاصرة",
                                description:
                                    "صور شعرية من الحياة اليومية في المدن العربية. يحتوي على 40 قصيدة تصف تحديات العصر وآمال الشباب.",
                                year: "2024",
                                rating: 4.4,
                                youtube:
                                    "https://youtu.be/2f37GEjbwQk?si=f7A0EZ9oqjPTk_eT",
                                image: "/books/book5.jpg",
                            },
                            {
                                title: "كل اللى عايز تقوله للناس اللى بصه فى عيشتك",
                                subtitle: "قصائد الأمل والتفاؤل",
                                description:
                                    "مجموعة قصائد تبعث الأمل والتفاؤل في النفوس. يضم 33 قصيدة تحتفي بجمال الحياة وقوة الإرادة.",
                                year: "2024",
                                rating: 4.9,
                                youtube:
                                    "https://youtu.be/VQjpT8oAmKA?si=sfs80kn1qdtx2VEh",
                                image: "/books/book6.jpg",
                            },
                        ].map((book, index) => (
                            <Card
                                key={index}
                                className="bg-gray-900/30 backdrop-blur-sm border-gray-800 hover:border-amber-600/30 transition-all duration-500 group overflow-hidden"
                            >
                                <div className="relative">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        width={350}
                                        height={250}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>

                                <CardContent className="p-6">
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                        {book.title}
                                    </h4>
                                    <p className="text-amber-400 text-sm mb-3">
                                        {book.subtitle}
                                    </p>
                                    <p className="text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3">
                                        {book.description}
                                    </p>

                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${
                                                            i <
                                                            Math.floor(
                                                                book.rating
                                                            )
                                                                ? "text-amber-400 fill-current"
                                                                : "text-gray-600"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-white text-sm font-medium">
                                                {book.rating}
                                            </span>
                                        </div>
                                        <div className="text-amber-400 font-medium">
                                            {book.year}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-2 ">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent w-full "
                                            asChild
                                        >
                                            <Link
                                                href={book.youtube}
                                                target="_blank"
                                            >
                                                <Eye className="h-4 w-4" />
                                                <span className="ml-1">
                                                    Watch
                                                </span>
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className="relative py-24 px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>

                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-800 mb-8">
                            <Trophy className="h-5 w-5 text-amber-400" />
                            <span className="text-gray-300 font-medium">
                                الإنجازات والتكريمات
                            </span>
                        </div>
                        <h3 className="text-5xl font-bold text-white mb-6">
                            الجوائز والإنجازات
                        </h3>
                        <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "جائزة أفضل شاعر شاب",
                                organization: "اتحاد الكتاب العرب",
                                year: "2023",
                                icon: <Trophy className="h-8 w-8" />,
                                color: "from-yellow-600 to-orange-600",
                            },
                            {
                                title: "جائزة الإبداع الأدبي",
                                organization: "وزارة الثقافة",
                                year: "2022",
                                icon: <Award className="h-8 w-8" />,
                                color: "from-purple-600 to-pink-600",
                            },
                            {
                                title: "جائزة الشعر الرقمي",
                                organization: "مؤسسة الأدب الرقمي",
                                year: "2024",
                                icon: <Globe className="h-8 w-8" />,
                                color: "from-blue-600 to-cyan-600",
                            },
                            {
                                title: "شهادة تقدير للإبداع",
                                organization: "جامعة القاهرة",
                                year: "2021",
                                icon: <Star className="h-8 w-8" />,
                                color: "from-green-600 to-emerald-600",
                            },
                            {
                                title: "جائزة أفضل ديوان",
                                organization: "معرض الكتاب الدولي",
                                year: "2023",
                                icon: <BookOpen className="h-8 w-8" />,
                                color: "from-red-600 to-pink-600",
                            },
                            {
                                title: "تكريم المؤثر الثقافي",
                                organization: "منتدى الشباب العربي",
                                year: "2024",
                                icon: <Users className="h-8 w-8" />,
                                color: "from-indigo-600 to-purple-600",
                            },
                        ].map((achievement, index) => (
                            <Card
                                key={index}
                                className="bg-gray-900/30 backdrop-blur-sm border-gray-800 hover:border-amber-600/30 transition-all duration-500 group"
                            >
                                <CardContent className="p-8 text-center">
                                    <div
                                        className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <div className="text-white">
                                            {achievement.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        {achievement.title}
                                    </h4>
                                    <p className="text-amber-400 mb-2 font-medium">
                                        {achievement.organization}
                                    </p>
                                    <p className="text-gray-400">
                                        {achievement.year}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-24 px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-800 mb-8">
                            <MessageCircle className="h-5 w-5 text-amber-400" />
                            <span className="text-gray-300 font-medium">
                                التواصل والتفاعل
                            </span>
                        </div>
                        <h3 className="text-5xl font-bold text-white mb-6">
                            تواصل معي
                        </h3>
                        <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            أسعد دائماً بالتواصل مع محبي الشعر والأدب. لا تتردد
                            في التواصل معي
                        </p>
                    </div>

                    <div className="flex flex-col max-lg:flex-row gap-8">
                        <div className="space-y-8">
                            <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-800 hover:border-amber-600/30 transition-all duration-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-white">
                                        معلومات التواصل
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                                        <div className="bg-amber-600/20 p-3 rounded-full">
                                            <Mail className="h-6 w-6 text-amber-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">
                                                البريد الإلكتروني
                                            </div>
                                            <div className="text-gray-400">
                                                omy84191@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                                        <div className="bg-green-600/20 p-3 rounded-full">
                                            <Phone className="h-6 w-6 text-green-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">
                                                رقم الهاتف
                                            </div>
                                            <div className="text-gray-400 text-end">
                                                ٠١٠٦٧٢٦٧١٣٢
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                                        <div className="bg-blue-600/20 p-3 rounded-full">
                                            <MapPin className="h-6 w-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">
                                                الموقع
                                            </div>
                                            <div className="text-gray-400">
                                                القاهرة، مصر
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="">
                            <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-800 hover:border-amber-600/30 transition-all duration-500">
                                <CardHeader>
                                    <CardTitle className="text-xl text-white">
                                        تابعني على منصات التواصل
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="grid grid-cols-1 gap-4">
                                            <Button
                                                asChild
                                                className="bg-red-600/20 hover:bg-red-600/40 border border-red-600/30 h-16 flex-col gap-1"
                                            >
                                                <Link
                                                    href="https://youtube.com/@rabeaaljarhi?si=XvAA-TbRNddoH7BK"
                                                    target="_blank"
                                                >
                                                    <Youtube className="h-6 w-6 text-red-400" />
                                                    <span className="text-xs">
                                                        يوتيوب
                                                    </span>
                                                </Link>
                                            </Button>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4">
                                            <Button
                                                asChild
                                                className="bg-blue-600/20 hover:bg-blue-600/40 border border-blue-600/30 h-16 flex-col gap-1 "
                                            >
                                                <Link
                                                    href="https://www.facebook.com/share/1GBv2r3ueg/"
                                                    target="_blank"
                                                >
                                                    <Facebook className="h-6 w-10 text-blue-400" />
                                                    <span className="text-xs">
                                                        فيسبوك
                                                    </span>
                                                </Link>
                                            </Button>
                                        </div>
                                        <div className="grid grid-span-1 gap-4">
                                            <Button
                                                asChild
                                                className="bg-gray-800/20 hover:bg-gray-800/40 border border-gray-600/30 h-16 flex-col gap-1"
                                            >
                                                <Link
                                                    href="https://www.tiktok.com/@algarhy123a?_t=ZS-8yT7P1Ay2FB&_r=1"
                                                    target="_blank"
                                                >
                                                    <Music className="h-6 w-6 text-white" />
                                                    <span className="text-xs">
                                                        تيك توك
                                                    </span>
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative bg-gray-950 border-t border-gray-800 py-12 px-6">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg flex items-center justify-center">
                                    <Feather className="h-7 w-7 text-white" />
                                </div>
                                <div>
                                    <h5 className="text-xl font-bold text-white">
                                        ربيع الجارحي
                                    </h5>
                                    <p className="text-amber-400">
                                        Rabea ElJarhi
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                شاعر وكاتب معاصر، يقدم أجمل القصائد والكلمات
                                التي تلامس القلوب وتحرك المشاعر. رحلة شعرية
                                ممتعة عبر عالم الكلمات والمشاعر.
                            </p>
                            <div className="flex gap-3">
                                <Link
                                    href="https://youtube.com/@rabeaaljarhi?si=XvAA-TbRNddoH7BK"
                                    target="_blank"
                                    className="bg-red-600/20 hover:bg-red-600/40 p-3 rounded-lg transition-colors border border-red-600/30"
                                >
                                    <Youtube className="h-5 w-5 text-red-400" />
                                </Link>
                                <Link
                                    href="https://www.facebook.com/share/1GBv2r3ueg/"
                                    target="_blank"
                                    className="bg-blue-600/20 hover:bg-blue-600/40 p-3 rounded-lg transition-colors border border-blue-600/30"
                                >
                                    <Facebook className="h-5 w-5 text-blue-400" />
                                </Link>
                                <Link
                                    href="https://www.tiktok.com/@algarhy123a?_t=ZS-8yT7P1Ay2FB&_r=1"
                                    target="_blank"
                                    className="bg-gray-800/20 hover:bg-gray-800/40 p-3 rounded-lg transition-colors border border-gray-600/30"
                                >
                                    <Music className="h-5 w-5 text-white" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h6 className="text-white font-semibold mb-4">
                                روابط سريعة
                            </h6>
                            <div className="space-y-2">
                                <Link
                                    href="#about"
                                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                                >
                                    عن الشاعر
                                </Link>
                                <Link
                                    href="#works"
                                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                                >
                                    الأعمال
                                </Link>
                                <Link
                                    href="#achievements"
                                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                                >
                                    الإنجازات
                                </Link>
                                <Link
                                    href="#contact"
                                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                                >
                                    التواصل
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h6 className="text-white font-semibold mb-4">
                                إحصائيات
                            </h6>
                            <div className="space-y-2 text-gray-400">
                                <div>500K+ متابع</div>
                                <div>10M+ مشاهدة</div>
                                <div>8 دواوين منشورة</div>
                                <div>15+ جائزة أدبية</div>
                            </div>
                        </div>
                    </div>

                    <Separator className="bg-gray-800 mb-8" />

                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-gray-400 mb-4 md:mb-0">
                            © 2024 ربيع الجارحي. جميع الحقوق محفوظة.
                        </p>
                        <div className="flex items-center gap-4 text-gray-400">
                            <Link
                                href="#"
                                className="hover:text-amber-400 transition-colors"
                            >
                                سياسة الخصوصية
                            </Link>
                            <span>|</span>
                            <Link
                                href="#"
                                className="hover:text-amber-400 transition-colors"
                            >
                                شروط الاستخدام
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <Button
                className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-amber-600 hover:bg-amber-700 shadow-lg z-50"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <ArrowUp className="h-6 w-6" />
            </Button>
        </div>
    );
}
