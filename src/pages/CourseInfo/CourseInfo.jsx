import React, { useEffect, useState } from "react";
// import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Button from "../../Components/Form/Button";
import CourseDetailBox from "../../Components/CourseDetailBox/CourseDetailBox";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  HiMiniArrowUturnLeft,
  HiOutlineArrowUturnLeft,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiBriefcase } from "react-icons/pi";
import { LiaUserSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";
import { FaCommentAlt } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { FaLink } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import { PiPlayBold } from "react-icons/pi";
import { FaRegObjectGroup } from "react-icons/fa";
import { BiSolidLeftArrow, BiUserCircle } from "react-icons/bi";
import { PiChats } from "react-icons/pi";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { BsExclamationTriangle } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";

function Icon({ id, open }) {
  return (
    <div
      className={`${
        id === open ? "rotate-180" : ""
      } text-5xl text-darkColor dark:text-white transition-all`}
    >
      <GoTriangleDown />
    </div>
  );
}

export default function CourseInfo() {
  const [open, setOpen] = useState(0);
  const [openTextArea, setOpenTextArea] = useState(false);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [comments, setComments] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [courseDetails, setCourseDetails] = useState({});

  const { courseName } = useParams();

  const textAreaHandler = () => {
    setOpenTextArea(true);
    console.log(openTextArea);
  };

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/${courseName}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((courseInfo) => {
        console.log(courseInfo);
        setComments(courseInfo.comments);
        setSessions(courseInfo.sessions);
        setCourseDetails(courseInfo);
      });
  }, []);

  return (
    <>
      {/* <Topbar /> */}
      <Navbar />
      <main className="max-w-[1920px] mx-auto overflow-x-hidden">
        <div className="container">
          <Breadcrumb
            links={[
              {
                id: 2,
                title: "آموزش برنامه نویسی فرانت‌اند",
                to: "category-info/frontend",
              },
              {
                id: 3,
                title: "دوره متخصص جاوا اسکریپت",
                to: "course-info/js-expert",
              },
            ]}
          />
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-6 sm:gap-x-7 lg:items-center xl:items-stretch mt-14 rounded-3xl p-7 lg:p-0 bg-white dark:bg-darkBox lg:!bg-transparent border border-gray-100 dark:border-none lg:border-none">
            <div className="flex flex-col justify-between order-2 lg:order-1 text-darkColor dark:text-white">
              <div>
                <h1 className="font-EstedadBold text-4xl sm:text-5xl mb-7">
                  {courseDetails.name}
                </h1>
                <p className="text-[1.6rem]/relaxed sm:text-3xl line-clamp-4 sm:line-clamp-3 mb-4 lg:mb-0">
                  {courseDetails.description}
                </p>
              </div>
              <div className="space-y-4 lg:space-y-8 lg:mt-4 lg:px-12">
                <div className="flex justify-center xl:items-center lg:justify-between flex-wrap-reverse gap-y-4 gap-x-8">
                  {/* <!-- When Registered --> */}
                  <div className="flex items-center gap-x-2">
                    <LiaUserSolid className="text-6xl mb-1" />
                    <p className="font-EstedadBold text-3xl">
                      شما دانشجوی دوره هستید
                    </p>
                  </div>
                  <Button
                    to={"/"}
                    className="button-primary text-white lg:w-80 hover:text-lightishBlue-600 dark:hover:text-lightishBlue-500"
                  >
                    <MdOutlineLaptopChromebook className="text-4xl" />
                    مشاهده دوره
                  </Button>
                </div>
              </div>
            </div>
            <div className="course_intro_wrap order-1 rounded-2xl overflow-hidden">
              <video
                src=""
                poster="/images/courses/js_project.png"
                className="w-full rounded-2xl"
                controls
              ></video>
            </div>
          </section>

          <section className="grid grid-cols-12 gap-6 sm:gap-7 mt-10 lg:mt-28">
            <div className="col-span-12 lg:col-span-8">
              {/* <!-- Course Box Info | Summary --> */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                <CourseDetailBox
                  icon={<BsInfoCircle />}
                  title={"وضعیت دوره"}
                  text={"تکمیل شده"}
                />
                <CourseDetailBox
                  icon={<BsClock />}
                  title={"مدت زمان دوره"}
                  text={"3 ساعت"}
                />
                <CourseDetailBox
                  icon={<IoCalendarOutline />}
                  title={"آخرین بروزرسانی"}
                  text={"1400/12/22"}
                />
                <CourseDetailBox
                  icon={<PiUsersThree />}
                  title={"روش پشتیبانی"}
                  text={"آنلاین"}
                />
                <CourseDetailBox
                  icon={<PiBriefcase />}
                  title={"پیش نیاز"}
                  text={"JS"}
                />
                <CourseDetailBox
                  icon={<PiEye />}
                  title={"نوع مشاهده"}
                  text={"آنلاین"}
                />
              </div>
              {/* <!-- Description --> */}
              <div className="bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-3xl p-7 sm:p-10 mt-12">
                <div className="mt-2 sm:mt-0 flex items-center gap-x-3 mb-16 sm:mb-20 relative">
                  <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
                  <span className="hidden md:inline-block text-light-blue-700 dark:text-light-blue-500 text-6xl">
                    <HiOutlineDocumentText />
                  </span>
                  <div className="font-EstedadBold text-3xl md:text-4xl">
                    توضیحات
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <div className="course-content wp-content max-h-[800px] text-[1.6rem]/loose">
                    <meta charset="utf8" />
                    <p>
                      تا حالا به این فکر کردید چرا توسعه تکنولوژی در سال های
                      اخیر انقدر سریع بوده؟ یکی از دلایل اون موضوع آموزش همین
                      دوره هست. یعنی <strong>NPM</strong>
                    </p>
                    <p>
                      اینکه چرا و چطوری این تاثیرو گذاشته به مرور بررسی میکنیم
                      ولی فعلا در همین حد بدونید که در گذشته به خاطر ساده تر
                      بودن ساختار برنامه نویسی و پروژه ها، اضافه کردن کتابخانه
                      ها به پروژه کار سختی نبود چون تعدادشون به اندازه الان نبود
                      و مشکلی در این فرآیند احساس نمیشد.تا اینکه با گذشت زمان،
                      هم تعداد کتابخانه ها به طور شگفت انگیزی زیاد شد و هم
                      استفاده و رواج اونها در جهان به دلیل افزایش رقابت و تنوع
                      سلیقه کاربران، بیشتر شد.
                    </p>
                    <p>
                      از طرفی بعضی از کتابخانه ها به کتابخانه های دیگه ای وابسته
                      بودن و قبلش باید اونهارو نصب میکردید و این مسئله باعث
                      ایجاد سردرگمی و افزایش حجم پروژه میشد.
                    </p>
                    <p>
                      مهندسان به این فکر افتادن که یک پلتفرم برای نصب و مدیریت
                      کتابخانه ها، به روزرسانی، کنترل وابستگی و … نیاز هست تا
                      این اتفاقات برای برنامه نویسان سراسر دنیا راحت تر کنترل
                      بشه و نیازی به دخالت دستی برنامه نویس نباشه. این شد که{" "}
                      <strong>NPM</strong> خلق شد!
                    </p>
                    <p>
                      چند مورد از مزایا و <strong>کاربردهای NPM</strong> رو به
                      طور خلاصه براتون لیست می کنیم:
                    </p>
                    <ol>
                      <li>&nbsp;افزودن پکیج های مختلف به پروژه</li>
                      <li>
                        &nbsp;اجرا کردن پکیج ها بدون دانلود با استفاده از اجرای
                        دستور در CLI (command line)
                      </li>
                      <li>&nbsp;کنترل آسان ورژن پروژه</li>
                      <li>
                        &nbsp;اشتراک گذاری پروژه و کدها با سایر برنامه نویسان
                      </li>
                      <li>&nbsp;بروزرسانی آسان تر و سریع تر کتابخانه ها</li>
                    </ol>
                    <p>
                      از اونجایی که سبزلرن تصمیم گرفته در کنار دوره های جامع
                      خودش و برای جبران کوتاهی دانشجوها در انجام تمرینات منظم و
                      تحقیق و مطالعه برای توسعه مهارتشون، یک دوره جداگانه رایگان
                      برای آشنایی با <strong>NPM</strong>{" "}
                      <strong>(Node Package Manager</strong> ) یا همون مدیر پکیج
                      طراحی و تولید کنه تا دانشجوها خیلی بیشتر از قبل با نحوه
                      مدیریت پکیج ها و کار با این پلتفرم بین المللی آشنا بشن.
                    </p>
                    <p>
                      در ادامه سعی می کنیم پرتکرارترین سوالات و دغدغه های شمارو
                      جواب بدیم تا با خیال راحت تری در این دوره ثبت نام کنید. پس
                      تا انتها با ما همراه باشید.
                    </p>
                    <h2 id="h_1">
                      <strong>
                        چه زمانی باید از NPM استفاده کنیم؟ آیا ضروری هست؟
                      </strong>
                    </h2>
                    <p>
                      فقط در یک حالت هست که میتونید از<strong> NPM</strong>{" "}
                      استفاده نکنید اون هم در صورتیه که تصمیم بگیرید صفر تا صد
                      پروژه رو خودتون از اول کدنویسی کنید و هیچ نیازی به
                      کتابخانه و ابزار کمکی از قبل آماده شده ندارید. البته این
                      وضعیت با توجه به اهمیت سرعت کدنویسی و اتمام پروژه ها در
                      دنیای امروز به ندرت پیش میاد و در حال حاضر اکثر برنامه
                      نویسان مبتدی و حرفه ای از <strong>NPM</strong> استفاده
                      میکنن.
                    </p>
                    <h2 id="h_2">تو این دوره قراره چی یاد بگیریم؟</h2>
                    <p>قسمتی از سرفصل های آموزشی دوره به صورت خلاصه :</p>
                    <h3>1 – آشنایی با مفاهیم پایه</h3>
                    <p>
                      درک مفاهیم اصلی مثل پکیج ها، وابستگی ها، ورژن ها و دستورات
                      اصلی که میتونه به شما کمک کند تا اساسی ترین قسمت های{" "}
                      <strong>NPM</strong> رو متوجه بشید و آمادگی بیشتری برای
                      مراحل بعدی پیدا کنید.
                    </p>
                    <h3>2 – آموزش نصب Node.js</h3>
                    <p>
                      <strong>NPM</strong> به صورت تعاملی با Node.js کار میکنه
                      که پلتفرم بک اند جاوا اسکریپت هست. بنابراین برای استفاده
                      از <strong>NPM</strong> باید Node.js رو نصب کنید. بعد از
                      نصب Node.js، <strong>NPM</strong> به طور خودکار به همراه
                      اون نصب میشه.
                    </p>
                    <h3>
                      3 – نحوه مدیریت پکیج ها و استفاده از دستورات اصلی (کامند
                      ها)
                    </h3>
                    <p>
                      یادگیری نحوه نصب، حذف و به روزرسانی پکیج ها به عنوان
                      ابزارهای کلیدی در تسلط به <strong>NPM</strong> محسوب میشه
                      و اون رو به بهترین شکل یاد می گیرید. دستورات مهمی مثل `npm
                      install` برای نصب پکیج ها، `npm update` برای به روزرسانی
                      پکیج ها، و `npm start` برای اجرای پروژه ها از جمله
                      محتواهای این بخش هستن.
                    </p>
                    <h3>4 – پیاده سازی آموزش ها در قالب ایجاد یک پروژه جدید</h3>
                    <p>
                      با ایجاد یک پروژه جدید، می تونید نحوه ساختاردهی پروژه و
                      مدیریت پکیج ها رو به صورت عملی تجربه کنید.
                    </p>
                    <h3>5 – نشر پکیج های شخصی</h3>
                    <p>
                      اگه قصد دارید پکیج های خودتون رو با دیگران به اشتراک
                      بگذارید، باید یاد بگیرید چطور اونهارو در ریپازیتوری{" "}
                      <strong>NPM</strong> منتشر کنید.
                    </p>
                    <h3>6 – استفاده از پکیج های خارجی</h3>
                    <p>
                      یادگیری نحوه جستجو، انتخاب و استفاده از پکیج هایی که توسط
                      دیگران توسعه داده شدن، خیلی خیلی مهم هست و یاد می گیرید
                      چطور از این ظرفیت های عالی برای پیشبرد کارتون استفاده
                      کنید.
                    </p>
                    <h3>7 – مفاهیم پیشرفته</h3>
                    <p>
                      بعد از مسلط شدن به مفاهیم پایه، میتونید به موارد پیشرفته
                      تر مثل تنظیمات پکیج، ایجاد اسکریپت ها، مدیریت اشتراک ها و
                      مشارکت در پروژه های عمومی بپردازید.
                    </p>
                    <p>
                      با پیگیری این مراحل و تمرین های عملی، تسلط به{" "}
                      <strong>NPM</strong> رو زودتر و بهتر از تصورتون به دست
                      میارید.
                    </p>
                    <h2 id="h_3">این دوره برای چه کسانی مناسب هست؟</h2>
                    <p>
                      یادگیری کار با <strong>NPM</strong> برای تمامی برنامه
                      نویسان و توسعه دهنده هایی که با زبان برنامه نویسی جاوا
                      اسکریپت (JavaScript) یا زبان هایی که از اکوسیستم Node.js
                      پشتیبانی میکنن، سروکار دارن خیلی ضروری هست. از جمله :
                    </p>
                    <ol>
                      <li>برنامه نویسان وب</li>
                      <li>توسعه دهندگان Front-end و Back-end</li>
                      <li>توسعه دهندگان Mobile</li>
                      <li>توسعه دهندگان پلاگین و کتابخانه</li>
                      <li>
                        توسعه دهندگان پروژه های Open Source : افرادی که علاقه به
                        مشارکت در پروژه های متن باز دارن و میخوان با توسعه دهنده
                        های سراسر دنیا تبادل اطلاعات و تجربه داشته باشن.
                      </li>
                    </ol>
                    <h2 id="h_4">چرا سبزلرن بهترین گزینه برای یادگیری هست؟</h2>
                    <p>
                      حتما برای شما هم پیش اومده که گاهی فرصت ها و پروژه های
                      بزرگ رو از دست میدید فقط به خاطر اینکه در ظاهر فکر میکنید
                      آمادگی کار در اون سطح رو ندارید و هنوز سرعت و تسلط لازم
                      برای پیاده سازی اونهارو بدست نیاوردید. یکی از دلایل میتونه
                      عدم آشنایی شما با اکوسیستم اون زبان برنامه نویسی باشه. مثل
                      فریم ورک ها، کتابخانه ها و …
                    </p>
                    <p>
                      تفاوت سبزلرن در همین هست که علاوه بر دوره های آموزشی اصلی،
                      مجموعه ای از دوره های مکمل فوق العاده هم برای دانشجوهای
                      خودش تدارک میبینه ( اکثرا رایگان! ) تا مطمئن بشه فاصله شون
                      با تسلط کامل و کسب درآمدهای بالا فقط و فقط اراده و جدیت
                      اون ها باشه نه مسائل فنی!
                    </p>
                    <p>
                      این دوره با محتوای جذاب و مفید خودش میتونه به شما کمک کنه
                      با سرعت و کیفیت بیشتری پروژه های خودتون رو به سرانجام
                      برسونید.
                    </p>
                    <h2 id="h_5">بعد از اتمام دوره به چه نتیجه ای می رسیم؟</h2>
                    <h3>1 – توانایی مدیریت کامل پکیج ها</h3>
                    <p>
                      با استفاده از <strong>NPM</strong>، میتونید به راحتی پکیج
                      ها و کتابخانه های آماده رو در پروژه های خود نصب کنید و از
                      اونها استفاده کنید. این کمک میکنه تا امکانات مختلفی رو
                      بدون نیاز به نوشتن کدها از صفر، پیاده سازی کنید.
                    </p>
                    <h3>2 – بروزرسانی و مدیریت وابستگی ها</h3>
                    <p>
                      با یادگیری NPM میتونید به روزرسانی پکیج هارو به راحتی
                      انجام داده و وابستگی های پروژه رو به روز نگه دارید. این
                      اتفاق باعث میشه تا از نسخه های جدیدتر پکیج ها و امکانات
                      بهتر آنها بهتر استفاده کنید و سردرگم نشید.
                    </p>
                    <h3>3 – کارایی و بهره وری</h3>
                    <p>
                      با استفاده از پکیج های آماده در <strong>NPM</strong>،
                      میتونید توسعه رو سریع تر انجام داده و کارهای تکراری رو
                      کمتر کنید. در واقع حوصله تون هیچوقت از نوشتن صفر تا صد کد
                      برای هر چیز کوچیکی سر نخواهد رفت.
                    </p>
                    <h3>4 – جامعه بزرگ توسعه دهندگان</h3>
                    <p>
                      اکوسیستم <strong>NPM</strong> یک جامعه بزرگ و پویا از
                      توسعه دهندگان داره که به شما کمک میکنه از تجربیات دیگران
                      به راحتی استفاده کرده و با پروژه های مشابه در ارتباط
                      باشید.
                    </p>
                    <h3>5 – نشر پکیج های شخصی</h3>
                    <p>
                      اگه دوست دارید پکیج های خودتون رو با دیگران به اشتراک
                      بذارید، <strong>NPM</strong> به شما این امکان رو میده که
                      پکیج های شخصی خودتون رو منتشر کنید و بازخورد و مشارکت
                      دیگران رو در بهبود اونها، به دست بیارید.
                    </p>
                    <p>
                      به طور کلی، یادگیری <strong>NPM</strong> به شما کمک میکنه
                      تا توسعه سریع تر و منظم تری رو تجربه کنید. زمانی که شما در
                      یک پروژه به صورتی تیمی کار میکنید یا زمانی که در یک شرکت
                      استخدام شدید، اونجا حتما نیاز هست که با ابزارهای package
                      manager &nbsp;کار کرده باشید تا مشکلی برای اجرا پروژه ها
                      مدیریت پکیج ها نداشته باشید.
                    </p>
                    <p>
                      شما بعد از دیدن این دوره توانایی کار با{" "}
                      <strong>NPM</strong> رو به صورت کامل و حرفه ای خواهید داشت
                      و میتونید به صورت تیمی با برنامه نویس های دیگه کار کنید.
                    </p>
                    <h2 id="h_6">
                      این دوره پیش نیاز خاصی داره که باید قبلش بلد باشم؟
                    </h2>
                    <p>
                      آشنایی و تسلط به زبان برنامه نویسی جاوا اسکریپت که پای
                      ثابت پروژه های برنامه نویسی به خصوص تحت وب هست، مهمترین
                      پیش نیاز ورود به این دوره محسوب میشه. چون تا وقتی به اون
                      مسلط نباشید، دیدن این دوره هم کمکی به شما نخواهد کرد.
                    </p>
                    <p>
                      حتما میدونید که یاد گرفتن پیش نیازی که اشاره شد، در سبزلرن
                      کاملا رایگان هست دیگه ؟؟؟!{" "}
                      <a href="https://sabzlearn.ir/course/java-script-zero-to-hero/">
                        این هم لینک دوره ش…
                      </a>
                    </p>
                    <h2 id="h_7">وقتی این دوره رو دیدم قدم بعدیم چیه؟</h2>
                    <p>
                      شما بعد از دیدن دوره و تسلط به <strong>NPM</strong>{" "}
                      میتونید در مورد تنظیمات پکیج های مختلف تحقیق کنید و یا
                      پکیج های شخصی سازی خودتون رو در اختیار دیگران در هرجای
                      دنیا بذارید. در کنار اینها میتونید به راحتی در پروژه های
                      متن باز بین المللی یا داخلی هم مشارکت کنید و تجربیات
                      خودتون رو به دیگران منتقل کنید یا از تجربیات ارزشمند اونها
                      استفاده کنید.
                    </p>
                    <h2 id="h_8">در این دوره چه نوع پروژه هایی کار میکنیم ؟</h2>
                    <p>
                      در جلسه اخر این دوره یک پروژه کوچیک پیاده سازی میکنیم و در
                      اون با نصب چندتا پکیج و استفاده از اونها در پروژه به صورت
                      عملی یاد خواهید گرفت که در پروژه های واقعی چطور باید از{" "}
                      <strong>npm</strong> &nbsp;استفاده کرد.
                    </p>
                    <h2 id="h_9">چه تضمینی هست که خوب و کامل یاد بگیرم؟</h2>
                    <p>
                      چندین دلیل هست که معمولا باعث عدم نتیجه گیری شما از هر
                      دوره ای میشه :
                    </p>
                    <ol>
                      <li>کیفیت پایین محتوای آموزشی و سبک و تسلط مدرس</li>
                      <li>عدم اشتیاق و علاقه مندی کافی برای یادگیری</li>
                      <li>نبود پشتیبانی در دسترس و قوی در طول آموزش</li>
                      <li>
                        عدم مرور و تمرین مطالب (انبار کردن اونها برای روز مبادا
                        !)
                      </li>
                    </ol>
                    <p>
                      دو مورد اینها بر عهده شماست و دو مورد هم بر عهده سبزلرن.
                      ما به شما قول میدیم این آموزش رو با بالاترین کیفیت و
                      موثرترین پشتیبانی در اختیار شما قرار بدیم. شما قول می دید
                      که با علاقه و پشتکار تمام تمرینات رو انجام بدید تا به
                      نتیجه برسید؟!
                    </p>
                    <p>پس همه چی حله…</p>
                  </div>

                  <div className="absolute bottom-0 right-0 left-0 h-44 bg-gradient-to-t from-white dark:from-darkBox from-0% via-white/[55%] dark:via-darkBox/[55%] via-70% to-white/0 dark:to-darkBox/0 to-100%"></div>
                </div>
                <Button
                  type="button"
                  className="button-primary text-white w-full sm:w-auto mx-auto mt-14"
                >
                  <span>مشاهده بیشتر مطلب</span>
                  <div className="text-5xl">
                    <GoTriangleDown />
                  </div>
                </Button>
              </div>
              {/* <!-- Headlines --> */}
              <div className="bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-3xl p-7 sm:p-10 mt-12">
                <div className="mt-2 sm:mt-0 flex items-center gap-x-3 mb-16 sm:mb-20 relative">
                  <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
                  <div className="hidden md:inline-block ml-1 text-light-blue-700 dark:text-light-blue-500 text-7xl">
                    <HiOutlineAcademicCap />
                  </div>
                  <div
                    id="lessons"
                    className="font-EstedadBold text-3xl md:text-4xl"
                  >
                    سرفصل ها
                  </div>
                </div>
                <div className="space-y-4 md:space-y-5">
                  <Accordion
                    open={open === 1}
                    icon={<Icon id={1} open={open} />}
                  >
                    <AccordionHeader
                      className="flex items-center justify-between cursor-pointer pr-6 pl-2 py-7 rounded-2xl border-none bg-gray-200 dark:bg-[#333c4c]"
                      onClick={() => handleOpen(1)}
                    >
                      <span className="topic__title text-[1.6rem] text-darkColor dark:text-white inline-block font-EstedadLight lg:line-clamp-3">
                        سرفصل ها
                      </span>
                      <div className="flex items-center end gap-x-2.5 shrink-0">
                        <div className="topic__time ltr-text hidden lg:flex items-center gap-x-1.5 text-xl font-EstedadThin -tracking-tighter text-darkColor dark:text-white child:transition-colors">
                          <span>23 lesson</span>
                          <span className="topic__time-dot block size-1 bg-slate-500/50 dark:bg-white/50 rounded-full"></span>
                          <span>3h 39m </span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody className="divide-y divide-gray-600 -mt-1">
                      <div className="flex first:rounded-t-2xl last:rounded-b-2xl items-center justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-7 py-8 group bg-blue-gray-50 dark:bg-[#333c4c] text-darkColor dark:text-white font-EstedadLight">
                        <div className="flex items-center flex-grow gap-x-3 md:gap-x-3.5 child:transition-colors">
                          <div className="flex-center w-12 h-9 md:h-10 text-xl font-EstedadBold bg-white dark:bg-white/10 group-hover:bg-lightishBlue-400 group-hover:text-white rounded">
                            1
                          </div>
                          <a
                            href=""
                            className="inline-block mb-1 lg:max-w-3/4 text-xl md:text-2xl group-hover:text-lightishBlue-400 "
                          >
                            ویدیوی معرفی
                          </a>
                        </div>
                        <div className="flex items-center gap-x-3 mr-auto group-hover:text-lightishBlue-400 child:transition-colors">
                          <span className="text-xl md:2xl">08:26 </span>
                          <div className="text-3xl">
                            <PiPlayBold />
                          </div>
                        </div>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === 2}
                    icon={<Icon id={2} open={open} />}
                  >
                    <AccordionHeader
                      className="flex items-center justify-between cursor-pointer pr-6 pl-2 py-7 rounded-2xl border-none bg-gray-200 dark:bg-[#333c4c]"
                      onClick={() => handleOpen(2)}
                    >
                      <span className="topic__title text-[1.6rem] text-darkColor dark:text-white inline-block font-EstedadLight lg:line-clamp-3">
                        سرفصل ها
                      </span>
                      <div className="flex items-center end gap-x-2.5 shrink-0">
                        <div className="topic__time ltr-text hidden lg:flex items-center gap-x-1.5 text-xl font-EstedadThin -tracking-tighter text-darkColor dark:text-white child:transition-colors">
                          <span>23 lesson</span>
                          <span className="topic__time-dot block size-1 bg-slate-500/50 dark:bg-white/50 rounded-full"></span>
                          <span>3h 39m </span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody className="divide-y divide-gray-600 -mt-1">
                      <div className="flex first:rounded-t-2xl last:rounded-b-2xl items-center justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-7 py-8 group bg-blue-gray-50 dark:bg-[#333c4c] text-darkColor dark:text-white font-EstedadLight">
                        <div className="flex items-center flex-grow gap-x-3 md:gap-x-3.5 child:transition-colors">
                          <div className="flex-center w-12 h-9 md:h-10 text-xl font-EstedadBold bg-white dark:bg-white/10 group-hover:bg-lightishBlue-400 group-hover:text-white rounded">
                            1
                          </div>
                          <a
                            href=""
                            className="inline-block mb-1 lg:max-w-3/4 text-xl md:text-2xl group-hover:text-lightishBlue-400 "
                          >
                            ویدیوی معرفی
                          </a>
                        </div>
                        <div className="flex items-center gap-x-3 mr-auto group-hover:text-lightishBlue-400 child:transition-colors">
                          <span className="text-xl md:2xl">08:26 </span>
                          <div className="text-3xl">
                            <PiPlayBold />
                          </div>
                        </div>
                      </div>
                      <div className="flex first:rounded-t-2xl last:rounded-b-2xl items-center justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-7 py-8 group bg-blue-gray-50 dark:bg-[#333c4c] text-darkColor dark:text-white font-EstedadLight">
                        <div className="flex items-center flex-grow gap-x-3 md:gap-x-3.5 child:transition-colors">
                          <div className="flex-center w-12 h-9 md:h-10 text-xl font-EstedadBold bg-white dark:bg-white/10 group-hover:bg-lightishBlue-400 group-hover:text-white rounded">
                            1
                          </div>
                          <a
                            href=""
                            className="inline-block mb-1 lg:max-w-3/4 text-xl md:text-2xl group-hover:text-lightishBlue-400 "
                          >
                            ویدیوی معرفی
                          </a>
                        </div>
                        <div className="flex items-center gap-x-3 mr-auto group-hover:text-lightishBlue-400 child:transition-colors">
                          <span className="text-xl md:2xl">08:26 </span>
                          <div className="text-3xl">
                            <PiPlayBold />
                          </div>
                        </div>
                      </div>
                      <div className="flex first:rounded-t-2xl last:rounded-b-2xl items-center justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-7 py-8 group bg-blue-gray-50 dark:bg-[#333c4c] text-darkColor dark:text-white font-EstedadLight">
                        <div className="flex items-center flex-grow gap-x-3 md:gap-x-3.5 child:transition-colors">
                          <div className="flex-center w-12 h-9 md:h-10 text-xl font-EstedadBold bg-white dark:bg-white/10 group-hover:bg-lightishBlue-400 group-hover:text-white rounded">
                            1
                          </div>
                          <a
                            href=""
                            className="inline-block mb-1 lg:max-w-3/4 text-xl md:text-2xl group-hover:text-lightishBlue-400 "
                          >
                            ویدیوی معرفی
                          </a>
                        </div>
                        <div className="flex items-center gap-x-3 mr-auto group-hover:text-lightishBlue-400 child:transition-colors">
                          <span className="text-xl md:2xl">08:26 </span>
                          <div className="text-3xl">
                            <PiPlayBold />
                          </div>
                        </div>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              </div>
              {/* <!-- Related Courses --> */}
              <div className="hidden lg:block bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-3xl p-10 mt-12">
                <div className="mt-2 sm:mt-0 flex items-center gap-x-3 mb-16 sm:mb-20 relative">
                  <span className="absolute -right-11 block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
                  <span className="text-light-blue-700 dark:text-light-blue-500 mx-2 text-[3.4rem]">
                    <FaRegObjectGroup />
                  </span>
                  <div className="font-EstedadBold text-3xl md:text-4xl">
                    دوره های مرتبط
                  </div>
                </div>

                <div className="space-y-4 md:space-y-5 text-darkColor dark:text-white">
                  <div className="flex items-center justify-between flex-wrap bg-gray-200 dark:bg-[#333c4c] rounded-lg py-3.5 pr-3.5 pl-6">
                    <div className="flex items-center gap-x-4 w-4/5">
                      <img
                        className="w-36 rounded-md aspect-video"
                        src="https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-29-1.webp"
                        alt="آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار"
                      />
                      <a
                        href="https://sabzlearn.ir/course/20-lib-reactjs/"
                        className="font-danaMedium line-clamp-2"
                      >
                        آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار
                      </a>
                    </div>
                    <a
                      className="flex items-center justify-between sm:justify-normal text-light-blue-700 dark:text-light-blue-500 font-EstedadMedium text-xl"
                      href="https://sabzlearn.ir/course/20-lib-reactjs/"
                    >
                      مشاهده
                      <div className="text-2xl mr-2">
                        <BiSolidLeftArrow />
                      </div>
                    </a>
                  </div>
                  <div className="flex items-center justify-between flex-wrap bg-gray-200 dark:bg-[#333c4c] rounded-lg py-3.5 pr-3.5 pl-6">
                    <div className="flex items-center gap-x-4 w-4/5">
                      <img
                        className="w-36 rounded-md aspect-video"
                        src="https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-25-1.webp"
                        alt="آموزش git و github"
                      />
                      <a
                        href="https://sabzlearn.ir/course/git-github/"
                        className="font-danaMedium line-clamp-2"
                      >
                        آموزش git و github
                      </a>
                    </div>
                    <a
                      className="flex items-center justify-between sm:justify-normal text-light-blue-700 dark:text-light-blue-500 font-EstedadMedium text-xl"
                      href="https://sabzlearn.ir/course/git-github/"
                    >
                      مشاهده
                      <div className="text-2xl mr-2">
                        <BiSolidLeftArrow />
                      </div>
                    </a>
                  </div>
                  <div className="flex items-center justify-between flex-wrap bg-gray-200 dark:bg-[#333c4c] rounded-lg py-3.5 pr-3.5 pl-6">
                    <div className="flex items-center gap-x-4 w-4/5">
                      <img
                        className="w-36 rounded-md aspect-video"
                        src="https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-2-1.webp"
                        alt="پروژه های خلاقانه با جاوااسکریپت"
                      />
                      <a
                        href="https://sabzlearn.ir/course/creative-projects-with-js/"
                        className="font-danaMedium line-clamp-2"
                      >
                        پروژه های خلاقانه با جاوااسکریپت
                      </a>
                    </div>
                    <a
                      className="flex items-center justify-between sm:justify-normal text-light-blue-700 dark:text-light-blue-500 font-EstedadMedium text-xl"
                      href="https://sabzlearn.ir/course/creative-projects-with-js/"
                    >
                      مشاهده
                      <div className="text-2xl mr-2">
                        <BiSolidLeftArrow />
                      </div>
                    </a>
                  </div>
                  <div className="flex items-center justify-between flex-wrap bg-gray-200 dark:bg-[#333c4c] rounded-lg py-3.5 pr-3.5 pl-6">
                    <div className="flex items-center gap-x-4 w-4/5">
                      <img
                        className="w-36 rounded-md aspect-video"
                        src="https://sabzlearn.ir/wp-content/uploads/2023/12/Com_regex-1.webp"
                        alt="آموزش اصولی RegEX برای تمام برنامه نویسان"
                      />
                      <a
                        href="https://sabzlearn.ir/course/regex/"
                        className="font-danaMedium line-clamp-2"
                      >
                        آموزش اصولی RegEX برای تمام برنامه نویسان
                      </a>
                    </div>
                    <a
                      className="flex items-center justify-between sm:justify-normal text-light-blue-700 dark:text-light-blue-500 font-EstedadMedium text-xl"
                      href="https://sabzlearn.ir/course/regex/"
                    >
                      مشاهده
                      <div className="text-2xl mr-2">
                        <BiSolidLeftArrow />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Comments --> */}
              <div
                className="bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-3xl p-7 sm:p-10 mt-12"
                id="course-comments"
              >
                {/* <!-- Comment Head --> */}
                <div className="flex items-start justify-between mb-8">
                  <div className="mt-2 sm:mt-0 flex items-center gap-x-3 relative">
                    <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
                    <div className="hidden md:inline-block ml-1 text-light-blue-700 dark:text-light-blue-500 text-7xl">
                      <PiChats />
                    </div>
                    <div className="font-EstedadBold text-3xl md:text-4xl">
                      نظرات
                    </div>
                  </div>

                  {/* <!-- New Comment Button --> */}
                  <button
                    className="button-primary px-8 py-3 sm:py-4"
                    type="button"
                    id="comment-create-btn"
                    onClick={() => textAreaHandler()}
                  >
                    ایجاد نظر جدید
                    <div className="text-4xl">
                      <PiChatCenteredTextLight />
                    </div>
                  </button>
                </div>
                {/* <!-- Comment Alert --> */}
                <div
                  id="comment-alert"
                  className={
                    openTextArea
                      ? "hidden"
                      : " bg-light-blue-100 text-light-blue-600 dark:bg-light-blue-500/10 p-7 rounded-xl text-2xl/10 md:font-EstedadMedium mb-6"
                  }
                >
                  دانشجوی عزیز؛ سوالات مرتبط به پشتیبانی دوره در قسمت نظرات
                  تایید نخواهد شد، لطفا در بخش مشاهده آنلاین هر ویدیو سوالات خود
                  را مطرح کنید.
                </div>
                {/* <!-- Comment Form --> */}
                <div
                  className={openTextArea ? "mb-14" : "hidden"}
                  id="comment-form"
                >
                  <div className="flex gap-x-4 mb-8 sm:mb-5">
                    <div className="flex-center p-2 border border-gray-100 dark:border-[#333c4c] rounded-full">
                      <div className="flex-center w-14 sm:w-16 h-14 sm:h-16 bg-gray-200 dark:bg-[#333c4c] rounded-full">
                        <div className="text-4xl text-gray-300">
                          <LiaUserSolid />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="font-EstedadMedium tracking-wider">
                        Theotherali
                      </span>
                      <span
                        className="font-EstedadThin text-2xl opacity-70"
                        id="comment-to"
                      >
                        ثبت نظر جدید
                      </span>
                    </div>
                  </div>
                  <input type="hidden" value="" id="comment-id" />
                  <input type="hidden" value="" id="comment-is-reply" />
                  <div className="flex items-center gap-x-3 bg-red-500/20 text-white px-6 py-5 rounded-xl mb-5">
                    <div className="shrink-0 text-red-400">
                      <BsExclamationTriangle className="w-10 h-10" />
                    </div>
                    <p className="text-[1.4rem]/10 text-red-100">
                      لطفا پرسش مربوط به هر درس یا ویدئو دوره را در صفحه همان
                      ویدئو مطرح کنید.
                    </p>
                  </div>
                  <textarea
                    rows="6"
                    id="comment-textarea"
                    className="w-full block p-7 md:p-4 bg-gray-200 dark:bg-[#333c4c] text-gray-900 dark:text-white placeholder:text-slate-500/70 font-EstedadMedium text-[1.4rem]/10 rounded-xl rounded-br-sm sm:rounded-xl"
                    placeholder="نظر خود را بنویسید ..."
                  ></textarea>
                  <div className="flex gap-x-2 justify-end mt-2 sm:mt-6">
                    <button
                      className="flex-grow sm:grow-0 sm:w-36 button-primary button-outline rounded-br-[3rem] rounded-l-sm rounded-tr-sm sm:rounded-sm sm:rounded-tr-4xl"
                      id="comment-cancel-btn"
                    >
                      لغو
                    </button>
                    <button
                      className="flex-grow sm:grow-0 sm:w-36 button-primary rounded-bl-2xl rounded-tl-sm rounded-r-sm sm:rounded-sm sm:rounded-bl-4xl"
                      id="comment-submit-btn"
                    >
                      ارسال
                    </button>
                  </div>
                </div>
                {/* <!-- Comment List --> */}
                <div className="comments_wrap space-y-7 sm:space-y-6 child:bg-gray-200  dark:child:bg-[#333c4c]">
                  {/* <!-- Comments --> */}
                  <div id="comment-56773" className="p-8 md:p-5 rounded-xl">
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
                      <div className="flex items-center gap-x-4">
                        <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                          <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                            <div className="text-[1.4rem] mb-0.5 mr-0.5">
                              <RiGraduationCapFill />
                            </div>
                          </div>
                          <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                            <BiUserCircle />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-x-1 ">
                            <span className="inline-block max-w-40 truncate">
                              Alirezzaa
                            </span>
                            <span className="font-EstedadThin">| دانشجو</span>
                          </div>
                          <span className="text-xl opacity-70">1403/08/07</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="flex-center border border-light-blue-700 dark:border-light-blue-500 p-3 rounded-full"
                      >
                        <div className="text-3xl text-light-blue-700 dark:text-light-blue-400">
                          <HiOutlineArrowUturnLeft />
                        </div>
                      </button>
                    </div>
                    <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
                      سلام ممنونم از دوره عالیتون🙏
                    </p>
                    {/* <!-- Replies --> */}
                  </div>
                  <div id="comment-56731" className="p-8 md:p-5 rounded-xl">
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
                      <div className="flex items-center gap-x-4">
                        <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                          <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                            <div className="text-[1.4rem] mb-0.5 mr-0.5">
                              <RiGraduationCapFill />
                            </div>
                          </div>
                          <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                            <BiUserCircle />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-x-1 ">
                            <span className="inline-block max-w-40 truncate">
                              arashk ashkani
                            </span>
                            <span className="font-EstedadThin">| دانشجو</span>
                          </div>
                          <span className="text-xl opacity-70">1403/08/05</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="flex-center border border-light-blue-700 dark:border-light-blue-500 p-3 rounded-full"
                      >
                        <div className="text-3xl text-light-blue-700 dark:text-light-blue-400">
                          <HiOutlineArrowUturnLeft />
                        </div>
                      </button>
                    </div>
                    <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
                      دوره خوب بود ولی کامل نبود متاسفانه. مباحث لینک کردن به
                      پروژه وجود نداشت
                    </p>
                    {/* <!-- Replies --> */}
                    <div className="mt-4 space-y-4">
                      <div
                        id="comment-56733"
                        className="p-7 md:p-5 bg-gray-300 dark:bg-darkBox rounded-xl"
                      >
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-400/50 dark:border-white/10">
                          <div className="flex items-center gap-x-3.5">
                            <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                              <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                                <div className="text-[1.4rem] mb-0.5 mr-0.5">
                                  <RiGraduationCapFill />
                                </div>
                              </div>
                              <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                                <BiUserCircle />
                              </div>
                            </div>
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center gap-x-1">
                                <span className="inline-block max-w-40 truncate">
                                  محمدامین سعیدی راد
                                </span>
                                <strong className="font-EstedadThin">
                                  | مدرس
                                </strong>
                              </div>
                              <span className="text-xl opacity-70">
                                1403/08/05
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
                          سلام آرش جان.
                          <br />
                          منظورتون از لینک کردن به پروژه چیه؟
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="comment-56639" className="p-8 md:p-5 rounded-xl">
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
                      <div className="flex items-center gap-x-4">
                        <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                          <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                            <div className="text-[1.4rem] mb-0.5 mr-0.5">
                              <RiGraduationCapFill />
                            </div>
                          </div>
                          <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                            <BiUserCircle />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-x-1 ">
                            <span className="inline-block max-w-40 truncate">
                              zahra_0901
                            </span>
                            <span className="font-EstedadThin">| دانشجو</span>
                          </div>
                          <span className="text-xl opacity-70">1403/07/26</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="flex-center border border-light-blue-700 dark:border-light-blue-500 p-3 rounded-full"
                      >
                        <div className="text-3xl text-light-blue-700 dark:text-light-blue-400">
                          <HiOutlineArrowUturnLeft />
                        </div>
                      </button>
                    </div>
                    <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
                      باسلام خدمتت تیم فوق العاده سبزلرن و استاد سعیدی راد خیلی
                      خیلی عالی بود، واقعا آدم وقتی آموزش های سبزلرن رو آقای راد
                      رو میبینه از کیفیت آموزش لذت میبره ، تشکر فراوان بابت
                      زحماتتون🌹🌹🌹🌹
                    </p>
                    {/* <!-- Replies --> */}
                  </div>
                  <div id="comment-56446" className="p-8 md:p-5 rounded-xl">
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
                      <div className="flex items-center gap-x-4">
                        <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                          <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                            <div className="text-[1.4rem] mb-0.5 mr-0.5">
                              <RiGraduationCapFill />
                            </div>
                          </div>
                          <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                            <BiUserCircle />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-x-1 ">
                            <span className="inline-block max-w-40 truncate">
                              SIPAN
                            </span>
                            <span className="font-EstedadThin">| دانشجو</span>
                          </div>
                          <span className="text-xl opacity-70">1403/07/11</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="flex-center border border-light-blue-700 dark:border-light-blue-500 p-3 rounded-full"
                      >
                        <div className="text-3xl text-light-blue-700 dark:text-light-blue-400">
                          <HiOutlineArrowUturnLeft />
                        </div>
                      </button>
                    </div>
                    <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
                      بسیار عالی . کاربردی 👌
                    </p>
                    {/* <!-- Replies --> */}
                  </div>
                  <div id="comment-55916" className="p-8 md:p-5 rounded-xl">
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
                      <div className="flex items-center gap-x-4">
                        <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                          <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                            <div className="text-[1.4rem] mb-0.5 mr-0.5">
                              <RiGraduationCapFill />
                            </div>
                          </div>
                          <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                            <BiUserCircle />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-x-1 ">
                            <span className="inline-block max-w-40 truncate">
                              Ernesto
                            </span>
                            <span className="font-EstedadThin">| دانشجو</span>
                          </div>
                          <span className="text-xl opacity-70">1403/06/08</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="flex-center border border-light-blue-700 dark:border-light-blue-500 p-3 rounded-full"
                      >
                        <div className="text-3xl text-light-blue-700 dark:text-light-blue-400">
                          <HiOutlineArrowUturnLeft />
                        </div>
                      </button>
                    </div>
                    <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
                      مثل همیشه ،آقای سعیدی راد عالی هستی و پرطرفدار
                    </p>
                    {/* <!-- Replies --> */}
                  </div>
                </div>
                {/* <!-- Load more --> */}
                <button
                  data-id="78"
                  type="button"
                  className="button-primary w-full sm:w-auto mt-10 mx-auto"
                >
                  مشاهده بیشتر
                  <div className="text-5xl">
                    <GoTriangleDown />
                  </div>
                </button>
              </div>
            </div>
            <aside className="col-span-12 lg:col-span-4 space-y-8">
              {/* <!-- Students & Rating & Progress --> */}
              <div className="bg-white dark:bg-darkBox rounded-2xl p-7 sm:p-5">
                <div className="flex gap-x-4">
                  <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-gray-200 dark:bg-[#333c4c] rounded-xl">
                    <div className="text-6xl text-lightishBlue-500">
                      <PiUsersThree />
                    </div>
                    <div>
                      <span className="block font-bold text-sm md:text-base">
                        22848
                      </span>
                      <span className="block text-2xl opacity-70">دانشجو</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-gray-200 dark:bg-[#333c4c] rounded-xl">
                    <svg className="w-10 h-10 md:w-11 md:h-11 text-amber-500">
                      <use href="#star-mini"></use>
                    </svg>
                    <div>
                      <span className="block font-bold text-sm md:text-base">
                        5.0
                      </span>
                      <span className="block text-2xl opacity-70">رضایت</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3.5 sm:mt-5">
                  <div className="flex items-center justify-between font-danaDemiBold text-sm sm:text-base mb-3">
                    <span>درصد تکمیل دوره</span>
                    <span>100%</span>
                  </div>
                  <progress value="100" max="100"></progress>
                </div>
              </div>
              {/* <!-- Course Teacher --> */}
              <div className="bg-white dark:bg-darker rounded-2xl pt-6 px-7 pb-7 md:py-6 md:px-5 text-center">
                <img
                  className="block mb-4 mx-auto object-cover rounded-full"
                  width="90"
                  height="90"
                  src="https://secure.gravatar.com/avatar/50db59beddbfed36a1646dae99ca7b2d?s=96&amp;d=mm&amp;r=g"
                  alt="محمدامین سعیدی راد"
                />
                <span className="font-danaDemiBold text-lg mb-2">
                  محمدامین سعیدی راد | مدرس دوره
                </span>
                <p className="mt-2"></p>
                <Button
                  to="https://sabzlearn.ir/teacher/ce01010101it"
                  className="button-primary mx-auto mt-4"
                >
                  مشاهده پروفایل من
                </Button>
              </div>
              {/* <!-- Course Short Link --> */}
              <div className="hidden lg:block bg-white dark:bg-darker rounded-2xl p-5 text-center">
                <span className="font-danaDemiBold text-lg">
                  لینک کوتاه آموزش
                </span>
                <div className="flex items-center justify-between gap-x-3 p-4 mt-7 bg-sky-50 dark:bg-sky-500/10 text-sky-500 border border-dashed border-sky-500 rounded-lg">
                  <button>
                    <svg className="w-8 h-8">
                      <use href="#clipboard-document"></use>
                    </svg>
                  </button>
                  <span className="font-danaMedium text-lg w-64 text-ltr text-left truncate">
                    sabzlearn.ir/?p=78
                  </span>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
