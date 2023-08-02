//Accuiel.js
import React, { useState } from "react";

const Accueil = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      if (prevLanguage === "en") return "fr";
      if (prevLanguage === "fr") return "ar";
      return "en";
    });
  };

  const getTranslatedText = (content) => {
    return content[language];
  };

  const content = {
    en: (
      <>
        <h2>Welcome to Post Tunisie</h2>
        <p>
          <strong>Post Tunisie</strong> is an online platform that connects
          The companie and talented interns. If you are looking to hire interns or
          you are a student seeking internship opportunities, you've come to the
          right place!
        </p>
        <p>
          The Companie can create internship listings, view candidate applications,
          and connect with potential interns who match their requirements.
        </p>
        <p>
          Students can explore internship opportunities, apply for positions,
          and showcase their skills and experiences to attract potential
          The companie.
        </p>
        <p>
          With <strong>Post Tunisie</strong>, we aim to bridge the gap between
          The companie and students, making the internship process efficient and
          rewarding for both parties.
        </p>
        <p>
          Get started by clicking on the "Add Stagiaire" link in the sidebar to
          create a new internship listing or explore the "Stagieretna" section
          to discover available internship opportunities.
        </p>
        <p>
          Thank you for choosing <strong>Post Tunisie</strong>! We wish you a
          successful internship experience.
        </p>
      </>
    ),
    fr: (
      <>
        <h2>Bienvenue à Post Tunisie</h2>
        <p>
          <strong>Post Tunisie</strong> est une plateforme en ligne qui met en
          relation L'entreprise et les stagiaires talentueux. Si vous êtes à
          la recherche de stagiaires ou si vous êtes un étudiant à la recherche
          d'opportunités de stage, vous êtes au bon endroit !
        </p>
        <p>
          L'entreprise peuvent créer des offres de stage, consulter les
          candidatures des étudiants et entrer en contact avec des stagiaires
          potentiels qui correspondent à leurs besoins.
        </p>
        <p>
          Les étudiants peuvent explorer les opportunités de stage, postuler à
          des offres et mettre en valeur leurs compétences et expériences pour
          attirer L'entreprise potentielles.
        </p>
        <p>
          Avec <strong>Post Tunisie</strong>, nous visons à combler le fossé
          entre L'entreprise et les étudiants, rendant le processus de stage
          efficace et gratifiant pour les deux parties.
        </p>
        <p>
          Commencez en cliquant sur le lien "Add Stagiaire" dans la barre
          latérale pour créer une nouvelle offre de stage ou explorez la section
          "Stagieretna" pour découvrir les opportunités de stage disponibles.
        </p>
        <p>
          Merci d'avoir choisi <strong>Post Tunisie</strong>! Nous vous
          souhaitons une expérience de stage réussie.
        </p>
      </>
    ),
    ar: (
      <>
        <h2>مرحبًا بكم في البريد التونسي</h2>
        <p>
          <strong>البريد التونسي</strong> هي منصة عبر الإنترنت تربط الشركة
          والمتدربين الموهوبين. إذا كنت تبحث عن التدريب أو إذا كنت طالبًا
          تبحث عن فرص التدريب ، فقد وصلت إلى المكان المناسب!
        </p>
        <p>
          يمكن للشركة إنشاء عروض التدريب وعرض طلبات المتقدمين والتواصل
          مع المتدربين المحتملين الذين يتوافقون مع متطلباتهم.
        </p>
        <p>
          يمكن للطلاب استكشاف فرص التدريب والتقدم للوظائف وعرض مهاراتهم
          وخبراتهم لجذب الشركة المحتملين.
        </p>
        <p>
          نهدف في <strong>البريد التونسي</strong> إلى تعزيز التواصل بين الشركة والطلاب ، وجعل عملية التدريب فعالة ومجزية للطرفين.
        </p>
        <p>
          ابدأ بالنقر على رابط "Add Stagiaire" في الشريط الجانبي لإنشاء عرض
          تدريب جديد أو استكشف قسم "Stagieretna" لاكتشاف فرص التدريب
          المتاحة.
        </p>
        <p>
          شكرًا لاختيارك <strong>البريد التونسي</strong>! نتمنى لك تجربة تدريب
          ناجحة.
        </p>
      </>
    ),
  };

  return (
    <div>
      <div style={{ textAlign: "right", margin: "10px" }}>
        <button onClick={toggleLanguage}>
          {language === "en"
            ? "English"
            : language === "fr"
            ? "Français"
            : "العربية"}
        </button>
      </div>
      <div style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
        {getTranslatedText(content)}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
        <img
          style={{ maxWidth: "40%" }}
          src={"/images/بريد.jpg"}
          alt={"test"}
        />
      </div>
    </div>
  );
};

export default Accueil;
